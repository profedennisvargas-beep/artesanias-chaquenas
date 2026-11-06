/**
 * Raíces del Chaco - Módulo de Galería y Lightbox Modal
 */

let currentLightboxData = null;

document.addEventListener('DOMContentLoaded', () => {
  initGallery();
  initLightbox();
});

function initGallery() {
  const tabs = document.querySelectorAll('.gallery-tab');
  const items = document.querySelectorAll('.gallery-item');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });

      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const filterValue = tab.dataset.filter;

      items.forEach(item => {
        const itemCategory = item.dataset.category;
        if (filterValue === 'all' || itemCategory === filterValue) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });

  document.querySelectorAll('.gallery-item__zoom-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      openLightbox({
        img: btn.dataset.img,
        title: btn.dataset.title,
        origin: btn.dataset.origin,
        desc: btn.dataset.desc
      });
    });
  });
}

function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const backdrop = document.getElementById('lightbox-backdrop');
  const closeBtn = document.getElementById('lightbox-close');
  const inquireBtn = document.getElementById('lightbox-btn-inquire');
  const waBtn = document.getElementById('lightbox-btn-wa');

  if (!lightbox) return;

  function close() {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', close);
  if (backdrop) backdrop.addEventListener('click', close);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      close();
    }
  });

  if (inquireBtn) {
    inquireBtn.addEventListener('click', () => {
      close();
      if (currentLightboxData) {
        if (typeof prefillContactForm === 'function' && document.getElementById('contact-form')) {
          prefillContactForm('GALERIA', currentLightboxData.title);
        } else {
          const targetUrl = window.location.pathname.includes('/html/')
            ? `contacto.html?pieza=GALERIA&nombre=${encodeURIComponent(currentLightboxData.title)}`
            : `html/contacto.html?pieza=GALERIA&nombre=${encodeURIComponent(currentLightboxData.title)}`;
          window.location.href = targetUrl;
        }
      }
    });
  }

  if (waBtn) {
    waBtn.addEventListener('click', () => {
      if (currentLightboxData) {
        const message = encodeURIComponent(`Hola! Quisiera consultar por la obra artesanal "${currentLightboxData.title}" que vi en la galería web.`);
        waBtn.href = `https://wa.me/5493624000000?text=${message}`;
      }
    });
  }
}

function openLightbox(data) {
  const lightbox = document.getElementById('lightbox');
  const imgElem = document.getElementById('lightbox-img');
  const titleElem = document.getElementById('lightbox-title');
  const originElem = document.getElementById('lightbox-origin');
  const descElem = document.getElementById('lightbox-desc');

  if (!lightbox || !imgElem) return;

  currentLightboxData = data;
  imgElem.src = data.img;
  imgElem.alt = data.title;
  if (titleElem) titleElem.textContent = data.title;
  if (originElem) originElem.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${data.origin || 'Chaco, Argentina'}`;
  if (descElem) descElem.textContent = data.desc;

  lightbox.classList.add('active');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
