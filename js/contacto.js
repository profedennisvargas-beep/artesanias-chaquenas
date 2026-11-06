/**
 * Raíces del Chaco - Módulo de Formulario de Contacto Validado
 * Validación estricta en tiempo real (blur/input), contador de caracteres, estados visuales y envío simulado
 */

document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
  checkUrlParamsForInquiry();
});

function initContactForm() {
  const form = document.getElementById('contact-form');
  const successAlert = document.getElementById('form-success-alert');
  const resetFormViewBtn = document.getElementById('btn-reset-form-view');
  const submitBtn = document.getElementById('btn-submit');
  const btnText = submitBtn ? submitBtn.querySelector('.btn-text') : null;
  const btnSpinner = submitBtn ? submitBtn.querySelector('.btn-spinner') : null;

  const nombre = document.getElementById('nombre');
  const email = document.getElementById('email');
  const telefono = document.getElementById('telefono');
  const provincia = document.getElementById('provincia');
  const mensaje = document.getElementById('mensaje');
  const consentimiento = document.getElementById('consentimiento');
  const charCounter = document.getElementById('char-counter');

  if (!form) return;

  // Reglas de Validación
  const validators = {
    nombre: (val) => {
      const trimmed = val.trim();
      if (trimmed.length < 3) return 'Ingresá tu nombre y apellido (mínimo 3 letras).';
      if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(trimmed)) return 'El nombre solo debe contener letras y espacios.';
      return null;
    },
    email: (val) => {
      const trimmed = val.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      if (!trimmed) return 'El correo electrónico es obligatorio.';
      if (!emailRegex.test(trimmed)) return 'Ingresá un correo electrónico válido (ej: nombre@correo.com).';
      return null;
    },
    telefono: (val) => {
      const clean = val.replace(/[\s\-\(\)\+]/g, '');
      if (!clean) return 'El teléfono o WhatsApp es obligatorio.';
      if (clean.length < 8) return 'Ingresá al menos 8 dígitos numéricos.';
      if (!/^\d+$/.test(clean)) return 'El teléfono solo debe contener números.';
      return null;
    },
    provincia: (val) => {
      const trimmed = val.trim();
      if (trimmed.length < 3) return 'Indicá tu provincia o ciudad (mínimo 3 caracteres).';
      return null;
    },
    mensaje: (val) => {
      const trimmed = val.trim();
      if (trimmed.length < 10) return 'El mensaje debe tener al menos 10 caracteres.';
      if (trimmed.length > 500) return 'El mensaje no puede superar los 500 caracteres.';
      return null;
    },
    consentimiento: (checked) => {
      if (!checked) return 'Debés aceptar las condiciones de contacto para continuar.';
      return null;
    }
  };

  function validateField(fieldId, value, isCheckbox = false) {
    const group = document.getElementById(`group-${fieldId}`);
    const errorElem = document.getElementById(`error-${fieldId}`);
    if (!group || !errorElem) return true;

    const error = isCheckbox ? validators[fieldId](value) : validators[fieldId](value);

    if (error) {
      group.classList.add('has-error');
      group.classList.remove('has-success');
      errorElem.textContent = error;
      return false;
    } else {
      group.classList.remove('has-error');
      group.classList.add('has-success');
      return true;
    }
  }

  // Validación al desenfocar y escribir
  [
    { elem: nombre, id: 'nombre' },
    { elem: email, id: 'email' },
    { elem: telefono, id: 'telefono' },
    { elem: provincia, id: 'provincia' },
    { elem: mensaje, id: 'mensaje' }
  ].forEach(({ elem, id }) => {
    if (!elem) return;

    elem.addEventListener('blur', () => {
      validateField(id, elem.value);
    });

    elem.addEventListener('input', () => {
      const group = document.getElementById(`group-${id}`);
      if (group && group.classList.contains('has-error')) {
        validateField(id, elem.value);
      }
    });
  });

  if (consentimiento) {
    consentimiento.addEventListener('change', () => {
      validateField('consentimiento', consentimiento.checked, true);
    });
  }

  // Contador en tiempo real para el área de mensaje
  if (mensaje && charCounter) {
    mensaje.addEventListener('input', () => {
      const len = mensaje.value.length;
      charCounter.textContent = `${len} / 500 caracteres`;
      if (len > 500) {
        charCounter.style.color = 'var(--color-error)';
      } else {
        charCounter.style.color = 'var(--color-text-muted)';
      }
    });
  }

  // Envío del Formulario
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isNombreValid = validateField('nombre', nombre.value);
    const isEmailValid = validateField('email', email.value);
    const isTelefonoValid = validateField('telefono', telefono.value);
    const isProvinciaValid = validateField('provincia', provincia.value);
    const isMensajeValid = validateField('mensaje', mensaje.value);
    const isConsentValid = validateField('consentimiento', consentimiento.checked, true);

    const isFormValid = isNombreValid && isEmailValid && isTelefonoValid && isProvinciaValid && isMensajeValid && isConsentValid;

    if (!isFormValid) {
      const firstError = form.querySelector('.has-error input, .has-error textarea');
      if (firstError) firstError.focus();
      if (typeof showToast === 'function') {
        showToast('Por favor corregí los campos destacados en rojo.', 'error');
      }
      return;
    }

    // Efecto de carga en botón
    if (submitBtn) submitBtn.disabled = true;
    if (btnText) btnText.style.display = 'none';
    if (btnSpinner) btnSpinner.style.display = 'inline-flex';

    setTimeout(() => {
      if (submitBtn) submitBtn.disabled = false;
      if (btnText) btnText.style.display = 'inline-flex';
      if (btnSpinner) btnSpinner.style.display = 'none';

      form.style.display = 'none';
      if (successAlert) {
        successAlert.style.display = 'flex';
        successAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      if (typeof showToast === 'function') {
        showToast('¡Consulta enviada con éxito! Te responderemos dentro de las próximas 24 horas.', 'success');
      }

      form.reset();
      form.querySelectorAll('.form-group').forEach(grp => {
        grp.classList.remove('has-success', 'has-error');
      });
      if (charCounter) charCounter.textContent = '0 / 500 caracteres';
    }, 1200);
  });

  if (resetFormViewBtn) {
    resetFormViewBtn.addEventListener('click', () => {
      if (successAlert) successAlert.style.display = 'none';
      form.style.display = 'block';
      if (nombre) nombre.focus();
    });
  }
}

function prefillContactForm(code, name) {
  const contactSection = document.getElementById('contacto');
  const interesSelect = document.getElementById('interes');
  const mensajeArea = document.getElementById('mensaje');

  if (interesSelect) {
    let optionFound = false;
    for (let opt of interesSelect.options) {
      if (opt.text.includes(code)) {
        opt.selected = true;
        optionFound = true;
        break;
      }
    }
    if (!optionFound) {
      interesSelect.value = 'general';
    }
  }

  if (mensajeArea) {
    mensajeArea.value = `Hola, estoy interesado/a en la pieza artesanal "${name}" (Ref: ${code}). Quisiera consultar disponibilidad y costo de envío.`;
    mensajeArea.dispatchEvent(new Event('input'));
  }

  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
    const nameInput = document.getElementById('nombre');
    if (nameInput) {
      setTimeout(() => nameInput.focus(), 600);
    }
  }

  if (typeof showToast === 'function') {
    showToast(`Pieza "${name}" seleccionada en el formulario`, 'info');
  }
}

function checkUrlParamsForInquiry() {
  const params = new URLSearchParams(window.location.search);
  const pieza = params.get('pieza');
  const nombre = params.get('nombre');

  if (pieza && nombre) {
    prefillContactForm(pieza, decodeURIComponent(nombre));
  }
}
