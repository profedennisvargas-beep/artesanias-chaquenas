# 🏺 Raíces del Chaco - Sitio Web de Artesanías Chaqueñas (Listo para Producción)

Sitio web responsivo de nivel profesional para el emprendimiento de artesanías originarias y criollas del Gran Chaco argentino (comunidades Wichí, Qom, Moqoit y artesanos de El Impenetrable).

Diseñado con una **arquitectura web limpia, modular y optimizada** (`index.html`, carpetas `html/`, `css/`, `js/` y `assets/`), listo para subir a un repositorio en **GitHub** y desplegar inmediatamente en **GitHub Pages**, **Vercel**, **Netlify**, o servidores tradicionales (**cPanel / Apache / Nginx**).

---

## 📁 Estructura del Proyecto

```text
artesanias-chaquenas/
│
├── index.html                  # Página de inicio / Portal principal (en la raíz)
├── robots.txt                  # Directivas de indexación SEO para producción
├── sitemap.xml                 # Mapa del sitio XML para motores de búsqueda
├── .gitignore                  # Exclusiones de archivos del sistema / editores
├── README.md                   # Documentación y guía de despliegue
│
├── assets/                     # Recursos visuales
│   └── favicon.svg             # Favicon vectorial estilizado
│
├── html/                       # Carpeta de páginas HTML individuales
│   ├── catalogo.html           # Catálogo en tabla interactiva con filtros y búsqueda
│   ├── galeria.html            # Galería de imágenes con visor Lightbox modal
│   ├── contacto.html           # Formulario validado con redes sociales
│   └── nosotros.html           # Identidad cultural, saberes y comunidades
│
├── css/                        # Carpeta de estilos
│   └── style.css               # Estilos globales, variables CSS y diseño responsivo
│
└── js/                         # Carpeta de JavaScript modular
    ├── main.js                 # Lógica global: menú móvil, scroll y notificaciones toast
    ├── catalogo.js             # Lógica de datos, renderizado en tabla, filtros y sorting
    ├── galeria.js              # Lógica de pestañas de filtrado y visor lightbox
    └── contacto.js             # Validación estricta en tiempo real y envío simulado
```

---

## 🚀 Guía Paso a Paso: Subir a GitHub y Poner en Producción

### 1. Inicializar Git y subir a GitHub

Abre tu terminal en la carpeta del proyecto:
```powershell
cd "C:\Users\Dennis V\.gemini\antigravity\scratch\artesanias-chaquenas"
```

Ejecuta los siguientes comandos:
```bash
# 1. Inicializar repositorio local
git init

# 2. Agregar todos los archivos estructurados
git add .

# 3. Crear el primer commit de producción
git commit -m "feat: estructura lista para producción de Raíces del Chaco"

# 4. Cambiar la rama principal a main
git branch -M main

# 5. Conectar con tu repositorio en GitHub (reemplaza con tu URL)
git remote add origin https://github.com/TU-USUARIO/artesanias-chaquenas.git

# 6. Subir los archivos
git push -u origin main
```

---

### 2. Desplegar Gratis en GitHub Pages (Servidor Web)

1. En tu repositorio de GitHub, haz clic en **Settings** (Configuración).
2. En la barra lateral izquierda, selecciona **Pages**.
3. En la sección **Build and deployment**:
   - **Source**: Selecciona `Deploy from a branch`.
   - **Branch**: Selecciona `main` y en la carpeta elige `/ (root)`.
4. Haz clic en **Save** (Guardar).
5. En unos 60 segundos, GitHub Pages te dará tu URL pública de producción:
   `https://TU-USUARIO.github.io/artesanias-chaquenas/`

---

### 3. Desplegar en Servidores Tradicionales (cPanel / Hostinger / DonWeb / Apache / Nginx)

1. Comprime todos los archivos del directorio en un archivo `.zip` (o usa un cliente FTP como FileZilla).
2. Sube y descomprime el contenido en la carpeta raíz de tu servidor (generalmente `public_html/` o `www/`).
3. Asegúrate de mantener la estructura: `index.html` debe quedar directamente en `public_html/` junto con las carpetas `html/`, `css/`, `js/` y `assets/`.
4. ¡Listo! El sitio web responderá directamente en tu dominio `https://tudominio.com`.

---

## 🎨 Características Técnicas Destacadas

1. **Rutas Relativas Universales**:
   - Los enlaces de `index.html` a las subpáginas apuntan a `html/archivo.html`.
   - Los enlaces internos dentro de `html/` usan `../index.html` y `./archivo.html`.
   - Esto previene errores de rutas absolutas rotas al servir en subcarpetas de GitHub Pages o dominios principales.

2. **Catálogo Responsivo en Tabla**:
   - En pantallas grandes: Tabla limpia con códigos, miniaturas, origen, materiales, medidas, precios y botones de acción.
   - En móviles (<768px): Se transforma automáticamente mediante CSS puro en tarjetas verticales legibles con etiquetas de datos (`data-label`).
   - Búsqueda en vivo instantánea, filtros por categoría de producto, disponibilidad de stock y ordenamiento de precios.

3. **Galería con Visor Lightbox Modal**:
   - Carga diferida (`loading="lazy"`).
   - Modal de alta resolución con ficha descriptiva, origen chaqueño y botones directos de consulta por WhatsApp y correo.
   - Accesible con teclado (cierre mediante tecla `Escape`).

4. **Formulario de Contacto Rigurosamente Validado**:
   - Validación en tiempo real tanto al salir del foco (`blur`) como al teclear tras un error (`input`).
   - Verificación de longitud mínima, letras en nombre, formato de email por Regex, teléfonos con cantidad de dígitos requerida y checkbox de consentimiento.
   - Contador de caracteres en vivo (`0 / 500`).
   - Alertas visuales accesibles y notificación flotante (*Toast*).

5. **SEO & Redes Sociales**:
   - Metaetiquetas Open Graph (Facebook, WhatsApp, LinkedIn).
   - Twitter Cards para vistas previas enriquecidas al compartir enlaces.
   - `robots.txt` y `sitemap.xml` incluidos para indexación en Google.
   - Favicon vectorial SVG nativo en `assets/favicon.svg`.
