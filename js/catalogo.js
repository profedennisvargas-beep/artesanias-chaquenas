/**
 * Raíces del Chaco - Módulo de Catálogo en Tabla
 * Muestra productos en tabla responsiva con búsqueda en vivo, filtros y ordenamiento
 */

const CATALOG_DATA = [
  {
    code: 'CHG-01',
    name: 'Yica Tradicional "Ojo de Lechuza"',
    category: 'chaguar',
    categoryName: 'Tejidos de Chaguar',
    community: 'Wichí - Misión Nueva Pompeya',
    material: 'Fibra de chaguar con tintes de corteza de mistol',
    dimensions: '35 x 30 cm (correa 95 cm)',
    price: 28500,
    stock: 'in-stock',
    stockLabel: 'En Stock Inmediato',
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=400&q=80',
    fullImage: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=1200&q=85',
    description: 'Bolso ancestral tejido a mano por maestras artesanas Wichí con puntos cerrados y tintes naturales del bosque chaqueño.'
  },
  {
    code: 'PLS-02',
    name: 'Escultura Tatú Carreta Chaqueño',
    category: 'palo-santo',
    categoryName: 'Palo Santo & Maderas',
    community: 'Criollos & Qom - Juan José Castelli',
    material: 'Palo Santo sustentable con cera virgen',
    dimensions: '28 x 12 x 14 cm',
    price: 36000,
    stock: 'in-stock',
    stockLabel: 'En Stock Inmediato',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=400&q=80',
    fullImage: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=85',
    description: 'Talla de una sola pieza en duramen verde aromático, rindiendo homenaje al gigante acorazado de El Impenetrable.'
  },
  {
    code: 'PLS-03',
    name: 'Mate Criollo Térmico en Palo Santo',
    category: 'palo-santo',
    categoryName: 'Palo Santo & Maderas',
    community: 'Comunidad Qom - Pampa del Indio',
    material: 'Madera de Palo Santo curada con virola torneada',
    dimensions: 'Alto 10 cm &bull; Ø 7 cm',
    price: 18900,
    stock: 'in-stock',
    stockLabel: 'En Stock Inmediato',
    image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=400&q=80',
    fullImage: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1200&q=85',
    description: 'Aporta el aroma silvestre y característico de la madera viva al tradicional mate argentino.'
  },
  {
    code: 'CST-04',
    name: 'Canasto Panera en Palma Caranday',
    category: 'cesteria',
    categoryName: 'Cestería en Caranday',
    community: 'Comunidad Qom - Colonia Aborigen',
    material: 'Hojas seleccionadas de palma tejidas en espiral',
    dimensions: 'Ø 32 cm &bull; Altura 12 cm',
    price: 15400,
    stock: 'in-stock',
    stockLabel: 'En Stock Inmediato',
    image: 'https://images.unsplash.com/photo-1617058866164-8bcf9a224a13?auto=format&fit=crop&w=400&q=80',
    fullImage: 'https://images.unsplash.com/photo-1617058866164-8bcf9a224a13?auto=format&fit=crop&w=1200&q=85',
    description: 'Pieza de cestería liviana, firme y aromática, ideal para la mesa diaria o elemento decorativo.'
  },
  {
    code: 'ALF-05',
    name: 'Tinaja Ritual de Barro Chaqueño',
    category: 'ceramica',
    categoryName: 'Cerámica & Alfarería',
    community: 'Comunidad Moqoit - San Bernardo',
    material: 'Arcilla del bañado cocida a cielo abierto',
    dimensions: '38 cm alto &bull; Ø 26 cm',
    price: 32000,
    stock: 'on-order',
    stockLabel: 'Por Encargo (12 días)',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=400&q=80',
    fullImage: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1200&q=85',
    description: 'Vasija moldeada por técnica de chorizos, bruñida a piedra y ahumada con resinas de quebracho colorado.'
  },
  {
    code: 'TLR-06',
    name: 'Manta en Telar Criollo de Lana Hilada',
    category: 'telar',
    categoryName: 'Telar Criollo de Lana',
    community: 'Artesanas Criollas - Miraflores',
    material: 'Pura lana de oveja hilada en huso y teñida natural',
    dimensions: '190 x 90 cm',
    price: 49500,
    stock: 'on-order',
    stockLabel: 'Por Encargo (15 días)',
    image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=400&q=80',
    fullImage: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=1200&q=85',
    description: 'Tejido rústico de textura mullida y colores tierra logrados con cáscaras de nogal y raíz de algarrobo.'
  },
  {
    code: 'CHG-07',
    name: 'Camino de Mesa con Guardas Geométricas',
    category: 'chaguar',
    categoryName: 'Tejidos de Chaguar',
    community: 'Wichí - El Sauzalito',
    material: 'Fibra de caraguatá con tintes de sacha membrillo',
    dimensions: '140 x 32 cm',
    price: 34500,
    stock: 'in-stock',
    stockLabel: 'En Stock Inmediato',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=400&q=80',
    fullImage: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=85',
    description: 'Guarda ancestral que representa los senderos del monte y la constelación de la Cruz del Sur.'
  },
  {
    code: 'PLS-08',
    name: 'Cuenco Esculpido para Frutas y Pan',
    category: 'palo-santo',
    categoryName: 'Palo Santo & Maderas',
    community: 'Pueblo Qom - El Espinillo',
    material: 'Palo Santo macizo con acabado pulido satinado',
    dimensions: '30 cm x 18 cm x 7 cm',
    price: 24000,
    stock: 'in-stock',
    stockLabel: 'En Stock Inmediato',
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=400&q=80',
    fullImage: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=1200&q=85',
    description: 'Vetas naturales de color verdoso y pardo con una fragancia balsámica que perdura en el ambiente.'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initCatalog();
});

function initCatalog() {
  const tableBody = document.getElementById('catalog-tbody');
  const searchInput = document.getElementById('catalog-search');
  const clearSearchBtn = document.getElementById('clear-search');
  const categoryFilter = document.getElementById('filter-category');
  const stockFilter = document.getElementById('filter-stock');
  const priceSort = document.getElementById('sort-price');
  const resetBtn = document.getElementById('btn-reset-filters');
  const emptyState = document.getElementById('catalog-empty');
  const emptyResetBtn = document.getElementById('btn-empty-reset');
  const countDisplay = document.getElementById('catalog-count');

  if (!tableBody) return;

  function renderTable(items) {
    tableBody.innerHTML = '';

    if (items.length === 0) {
      if (emptyState) emptyState.style.display = 'block';
      if (countDisplay) countDisplay.textContent = 'No hay coincidencias';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';
    if (countDisplay) {
      countDisplay.textContent = `Mostrando ${items.length} de ${CATALOG_DATA.length} piezas artesanales`;
    }

    items.forEach(product => {
      const tr = document.createElement('tr');

      const formattedPrice = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        maximumFractionDigits: 0
      }).format(product.price);

      const stockClass = product.stock === 'in-stock' ? 'stock-badge--available' : 'stock-badge--order';
      const stockIcon = product.stock === 'in-stock' ? 'fa-check' : 'fa-clock';

      tr.innerHTML = `
        <td class="td-code" data-label="Código">${product.code}</td>
        <td class="td-img-cell" data-label="Imagen">
          <img src="${product.image}" alt="${product.name}" class="table-product-thumb" loading="lazy" 
               data-full="${product.fullImage}" data-title="${product.name}" 
               data-origin="${product.community}" data-desc="${product.description}">
        </td>
        <td class="td-name" data-label="Pieza">
          <strong>${product.name}</strong>
          <span>${product.categoryName}</span>
        </td>
        <td data-label="Origen">
          <span class="origin-badge"><i class="fa-solid fa-location-dot"></i> ${product.community}</span>
        </td>
        <td data-label="Material">${product.material}</td>
        <td data-label="Dimensiones">${product.dimensions}</td>
        <td class="td-price" data-label="Precio">${formattedPrice}</td>
        <td data-label="Estado">
          <span class="stock-badge ${stockClass}">
            <i class="fa-solid ${stockIcon}"></i> ${product.stockLabel}
          </span>
        </td>
        <td class="td-action-cell text-center" data-label="Acción">
          <button class="btn btn--accent btn--sm btn-table-inquire" 
                  data-code="${product.code}" 
                  data-name="${product.name}">
            <i class="fa-solid fa-envelope"></i> Pedir
          </button>
        </td>
      `;

      tableBody.appendChild(tr);
    });

    // Clic en miniaturas
    tableBody.querySelectorAll('.table-product-thumb').forEach(thumb => {
      thumb.addEventListener('click', () => {
        if (typeof openLightbox === 'function') {
          openLightbox({
            img: thumb.dataset.full,
            title: thumb.dataset.title,
            origin: thumb.dataset.origin,
            desc: thumb.dataset.desc
          });
        }
      });
    });

    // Clic en botón "Pedir"
    tableBody.querySelectorAll('.btn-table-inquire').forEach(btn => {
      btn.addEventListener('click', () => {
        const productCode = btn.dataset.code;
        const productName = btn.dataset.name;
        handleCatalogInquiry(productCode, productName);
      });
    });
  }

  function filterAndSort() {
    const searchTerm = searchInput ? searchInput.value.trim().toLowerCase() : '';
    const selectedCategory = categoryFilter ? categoryFilter.value : 'all';
    const selectedStock = stockFilter ? stockFilter.value : 'all';
    const selectedSort = priceSort ? priceSort.value : 'default';

    if (clearSearchBtn) {
      clearSearchBtn.style.display = searchTerm.length > 0 ? 'block' : 'none';
    }

    let result = CATALOG_DATA.filter(item => {
      const matchSearch = !searchTerm || 
        item.name.toLowerCase().includes(searchTerm) ||
        item.code.toLowerCase().includes(searchTerm) ||
        item.material.toLowerCase().includes(searchTerm) ||
        item.community.toLowerCase().includes(searchTerm);

      const matchCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchStock = selectedStock === 'all' || item.stock === selectedStock;

      return matchSearch && matchCategory && matchStock;
    });

    if (selectedSort === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (selectedSort === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (selectedSort === 'name-asc') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    renderTable(result);
  }

  if (searchInput) searchInput.addEventListener('input', filterAndSort);
  if (categoryFilter) categoryFilter.addEventListener('change', filterAndSort);
  if (stockFilter) stockFilter.addEventListener('change', filterAndSort);
  if (priceSort) priceSort.addEventListener('change', filterAndSort);

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      clearSearchBtn.style.display = 'none';
      filterAndSort();
      searchInput.focus();
    });
  }

  function resetFilters() {
    if (searchInput) searchInput.value = '';
    if (clearSearchBtn) clearSearchBtn.style.display = 'none';
    if (categoryFilter) categoryFilter.value = 'all';
    if (stockFilter) stockFilter.value = 'all';
    if (priceSort) priceSort.value = 'default';
    filterAndSort();
  }

  if (resetBtn) resetBtn.addEventListener('click', resetFilters);
  if (emptyResetBtn) emptyResetBtn.addEventListener('click', resetFilters);

  // Leer parámetro URL si existe (ej: ?categoria=chaguar)
  const urlParams = new URLSearchParams(window.location.search);
  const paramCategory = urlParams.get('categoria');
  if (paramCategory && categoryFilter) {
    categoryFilter.value = paramCategory;
  }

  renderTable(CATALOG_DATA);
}

function handleCatalogInquiry(code, name) {
  // Si estamos en la página donde existe el formulario de contacto
  const contactForm = document.getElementById('contact-form');
  if (contactForm && typeof prefillContactForm === 'function') {
    prefillContactForm(code, name);
  } else {
    // Si estamos en catalogo.html independiente, redirigir a contacto.html con query params
    const targetUrl = window.location.pathname.includes('/html/') 
      ? `contacto.html?pieza=${encodeURIComponent(code)}&nombre=${encodeURIComponent(name)}`
      : `html/contacto.html?pieza=${encodeURIComponent(code)}&nombre=${encodeURIComponent(name)}`;
    window.location.href = targetUrl;
  }
}
