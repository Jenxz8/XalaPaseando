
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    const logo = navbar.querySelector('.logo');
    const enlaces = navbar.querySelector('.nav-links');
    const iconos = navbar.querySelector('.nav-icons');
    const lupa = iconos?.querySelector('.icon-img');
    const menu = iconos?.querySelector('.icon');

    if (!logo || !enlaces || !iconos || !lupa || !menu) return;

    // 1. LOGOTIPO: REGRESAR A INICIO
    logo.setAttribute('role', 'link');
    logo.setAttribute('tabindex', '0');
    logo.setAttribute('aria-label', 'Ir al inicio');

    function irInicio() {
        window.location.href = 'index.html';
    }

    logo.addEventListener('click', irInicio);
    logo.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') irInicio();
    });

    // 2. CORREGIR LOS ENLACES EXISTENTES
    const rutas = {
        'inicio': 'index.html',
        'explora': 'explora.html',
        'eventos': 'eventos.html',
        'comunidad': 'comunidad.html'
    };

    enlaces.querySelectorAll('a').forEach(enlace => {
        const nombre = enlace.textContent.trim().toLowerCase();
        if (rutas[nombre]) {
            enlace.href = rutas[nombre];
        }
    });

    // 3. BUSCADOR
    const buscador = document.createElement('div');
    buscador.className = 'nav-buscador';
    buscador.innerHTML = `
        <input
            id="busqueda-global"
            type="search"
            placeholder="Buscar lugares, eventos..."
            autocomplete="off"
            aria-label="Buscar en XalaPaseando"
        >
        <div id="sugerencias-globales"
             class="nav-sugerencias"
             role="listbox"></div>
    `;

    navbar.insertBefore(buscador, iconos);

    const campo = buscador.querySelector('input');
    const sugerencias = buscador.querySelector('.nav-sugerencias');

    // Lugares y secciones disponibles actualmente
    const contenido = [
        {
            nombre: 'Inicio',
            tipo: 'Página',
            url: 'index.html'
        },
        {
            nombre: 'Explora',
            tipo: 'Página',
            url: 'explora.html'
        },
        {
            nombre: 'Eventos',
            tipo: 'Página',
            url: 'eventos.html'
        },
        {
            nombre: 'Comunidad',
            tipo: 'Página',
            url: 'comunidad.html'
        },
        {
            nombre: 'Lulú Café',
            tipo: 'Restaurante',
            url: 'explora.html?lugar=lulu-cafe'
        },
        {
            nombre: 'La Estancia de los Tecajetes',
            tipo: 'Restaurante',
            url: 'explora.html?lugar=tecajetes'
        },
        {
            nombre: 'Asadero Cien',
            tipo: 'Restaurante',
            url: 'explora.html?lugar=asadero'
        },
        {
            nombre: 'Teatro J.J. Herrera',
            tipo: 'Cultura',
            url: 'explora.html?lugar=teatro'
        },
        {
            nombre: 'Festival de la Primavera',
            tipo: 'Evento',
            url: 'evento-detalle.html'
        },
        {
            nombre: 'Restaurantes y Cafés',
            tipo: 'Categoría',
            url: 'explora.html'
        }
    ];

    function normalizar(texto) {
        return texto
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '');
    }

    function mostrarSugerencias() {
        sugerencias.replaceChildren();

        const termino = normalizar(campo.value.trim());

        if (!termino) {
            sugerencias.classList.remove('visible');
            return;
        }

        const resultados = contenido.filter(item =>
            normalizar(item.nombre).includes(termino) ||
            normalizar(item.tipo).includes(termino)
        );

        if (resultados.length === 0) {
            const mensaje = document.createElement('p');
            mensaje.className = 'nav-sin-resultados';
            mensaje.textContent = 'No se encontraron resultados.';
            sugerencias.appendChild(mensaje);
        } else {
            resultados.forEach(item => {
                const enlace = document.createElement('a');
                enlace.href = item.url;
                enlace.className = 'nav-resultado';

                const nombre = document.createElement('strong');
                nombre.textContent = item.nombre;

                const tipo = document.createElement('small');
                tipo.textContent = item.tipo;

                enlace.append(nombre, tipo);
                sugerencias.appendChild(enlace);
            });
        }

        sugerencias.classList.add('visible');
    }

    campo.addEventListener('input', mostrarSugerencias);

    campo.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const primerResultado =
                sugerencias.querySelector('a');

            if (primerResultado) {
                window.location.href = primerResultado.href;
            }
        }

        if (e.key === 'Escape') {
            cerrarTodo();
        }
    });

    // 4. MENÚ VERTICAL
    const menuVertical = document.createElement('div');
    menuVertical.className = 'nav-menu-vertical';

    Object.entries(rutas).forEach(([nombre, url]) => {
        const enlace = document.createElement('a');
        enlace.href = url;
        enlace.textContent =
            nombre.charAt(0).toUpperCase() + nombre.slice(1);

        const actual = window.location.pathname
            .split('/').pop() || 'index.html';

        if (actual === url) {
            enlace.classList.add('seleccionado');
        }

        menuVertical.appendChild(enlace);
    });

    navbar.appendChild(menuVertical);

    // 5. CONTROLES DE APERTURA Y CIERRE
    lupa.setAttribute('role', 'button');
    lupa.setAttribute('tabindex', '0');
    lupa.setAttribute('aria-label', 'Abrir buscador');

    menu.setAttribute('role', 'button');
    menu.setAttribute('tabindex', '0');
    menu.setAttribute('aria-label', 'Abrir menú');

    let buscadorAbierto = false;
    let menuAbierto = false;

    function cerrarBuscador() {
        buscadorAbierto = false;
        navbar.classList.remove('nav-buscando');
        sugerencias.classList.remove('visible');
        campo.value = '';
    }

    function cerrarMenu() {
        menuAbierto = false;
        menuVertical.classList.remove('visible');
        menu.setAttribute('aria-expanded', 'false');
    }

    function cerrarTodo() {
        cerrarBuscador();
        cerrarMenu();
    }

    function alternarBuscador() {
        if (buscadorAbierto) {
            cerrarBuscador();
            return;
        }

        cerrarMenu();
        buscadorAbierto = true;
        navbar.classList.add('nav-buscando');
        campo.focus();
    }

    function alternarMenu() {
        if (menuAbierto) {
            cerrarMenu();
            return;
        }

        cerrarBuscador();
        menuAbierto = true;
        menuVertical.classList.add('visible');
        menu.setAttribute('aria-expanded', 'true');
    }

    function activarConTeclado(elemento, funcion) {
        elemento.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                funcion();
            }
        });
    }

    lupa.addEventListener('click', alternarBuscador);
    menu.addEventListener('click', alternarMenu);

    activarConTeclado(lupa, alternarBuscador);
    activarConTeclado(menu, alternarMenu);

    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target)) {
            cerrarTodo();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') cerrarTodo();
    });
});
