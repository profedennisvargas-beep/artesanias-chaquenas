/**
 * Raíces del Chaco - JavaScript Común / Global
 * Módulo: Navegación móvil, efectos de scroll y notificaciones Toast
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initScrollEffects();
});

/* ==========================================================================
   Navegación Móvil (Menú Hamburguesa)
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav__link');

  if (!toggleBtn || !navMenu) return;

  function toggleMenu() {
    const isOpen = navMenu.classList.toggle('open');
    toggleBtn.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }

  toggleBtn.addEventListener('click', toggleMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('open')) {
        toggleMenu();
      }
    });
  });

  // Cerrar al hacer clic fuera del menú
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('open') && 
        !navMenu.contains(e.target) && 
        !toggleBtn.contains(e.target)) {
      toggleMenu();
    }
  });
}

/* ==========================================================================
   Efectos de Scroll y Encabezado Fijo
   ========================================================================== */
function initScrollEffects() {
  const header = document.getElementById('header');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    if (header) {
      if (scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });
}

/* ==========================================================================
   Sistema de Notificaciones Toast
   ========================================================================== */
let toastTimeout = null;

function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  const toastIcon = document.getElementById('toast-icon');

  if (!toast || !toastMessage) return;

  toastMessage.textContent = message;

  if (toastIcon) {
    if (type === 'error') {
      toastIcon.innerHTML = '<i class="fa-solid fa-circle-exclamation" style="color: #ff6b6b;"></i>';
    } else if (type === 'info') {
      toastIcon.innerHTML = '<i class="fa-solid fa-circle-info" style="color: #64b5f6;"></i>';
    } else {
      toastIcon.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #25d366;"></i>';
    }
  }

  toast.classList.add('show');

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}
