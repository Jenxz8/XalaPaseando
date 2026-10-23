document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    const logo = navbar.querySelector('.logo');
    const enlaces = navbar.querySelector('.nav-links');
    const iconos = navbar.querySelector('.nav-icons');
    const lupa = iconos?.querySelector('.icon-img');
    const menu = iconos?.querySelector('.icon');

    if (!logo || !enlaces || !iconos || !lupa || !menu) return;

     
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

     
    const contenido = [
        {
                "nombre": "Inicio",
                "tipo": "Página",
                "url": "index.html",
                "palabras": "Inicio"
        },
        {
                "nombre": "Explora",
                "tipo": "Página",
                "url": "explora.html",
                "palabras": "Explora"
        },
        {
                "nombre": "Eventos",
                "tipo": "Página",
                "url": "eventos.html",
                "palabras": "Eventos"
        },
        {
                "nombre": "Comunidad",
                "tipo": "Página",
                "url": "comunidad.html",
                "palabras": "Comunidad"
        },
        {
                "nombre": "Restaurantes y Cafés",
                "tipo": "Categoría",
                "url": "explora.html?categoria=restaurantes",
                "palabras": "Restaurantes y Cafés restaurantes"
        },
        {
                "nombre": "Cultura y Cine",
                "tipo": "Categoría",
                "url": "explora.html?categoria=cultura",
                "palabras": "Cultura y Cine cultura"
        },
        {
                "nombre": "Galerías y Arte",
                "tipo": "Categoría",
                "url": "explora.html?categoria=arte",
                "palabras": "Galerías y Arte arte"
        },
        {
                "nombre": "Naturaleza y Parques",
                "tipo": "Categoría",
                "url": "explora.html?categoria=naturaleza",
                "palabras": "Naturaleza y Parques naturaleza"
        },
        {
                "nombre": "El Café-tal Apan (Allende)",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-0",
                "palabras": "El Café-tal Apan (Allende) restaurantes"
        },
        {
                "nombre": "El Café-tal Apan (Diego Leño)",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-1",
                "palabras": "El Café-tal Apan (Diego Leño) restaurantes"
        },
        {
                "nombre": "Café Bola de Oro – Centro",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-2",
                "palabras": "Café Bola de Oro – Centro restaurantes"
        },
        {
                "nombre": "Café Colón",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-3",
                "palabras": "Café Colón restaurantes"
        },
        {
                "nombre": "Café Lago",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-4",
                "palabras": "Café Lago restaurantes"
        },
        {
                "nombre": "Reformanda – Barra de café",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-5",
                "palabras": "Reformanda – Barra de café restaurantes"
        },
        {
                "nombre": "Flor Catorce",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-6",
                "palabras": "Flor Catorce restaurantes"
        },
        {
                "nombre": "Bolena Café",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-7",
                "palabras": "Bolena Café restaurantes"
        },
        {
                "nombre": "Canela Street – Revolución",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-8",
                "palabras": "Canela Street – Revolución restaurantes"
        },
        {
                "nombre": "Canela Street – Diego Leño",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-9",
                "palabras": "Canela Street – Diego Leño restaurantes"
        },
        {
                "nombre": "Cuatro Regiones",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-10",
                "palabras": "Cuatro Regiones restaurantes"
        },
        {
                "nombre": "Jaco Jazzy Café",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-11",
                "palabras": "Jaco Jazzy Café restaurantes"
        },
        {
                "nombre": "Simple 73",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-12",
                "palabras": "Simple 73 restaurantes"
        },
        {
                "nombre": "Café Don Justo",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-13",
                "palabras": "Café Don Justo restaurantes"
        },
        {
                "nombre": "Café La Parroquia",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-14",
                "palabras": "Café La Parroquia restaurantes"
        },
        {
                "nombre": "Café Colibrí",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-15",
                "palabras": "Café Colibrí restaurantes"
        },
        {
                "nombre": "Café Lindo",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-16",
                "palabras": "Café Lindo restaurantes"
        },
        {
                "nombre": "Café Insurgentes",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-17",
                "palabras": "Café Insurgentes restaurantes"
        },
        {
                "nombre": "Café del Corso",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-18",
                "palabras": "Café del Corso restaurantes"
        },
        {
                "nombre": "Café LaPlace",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-19",
                "palabras": "Café LaPlace restaurantes"
        },
        {
                "nombre": "AstroCafé",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-20",
                "palabras": "AstroCafé restaurantes"
        },
        {
                "nombre": "Bicicleta Roja",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-21",
                "palabras": "Bicicleta Roja restaurantes"
        },
        {
                "nombre": "Ancestros Café Cultural",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-22",
                "palabras": "Ancestros Café Cultural restaurantes"
        },
        {
                "nombre": "El Foro Café",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-23",
                "palabras": "El Foro Café restaurantes"
        },
        {
                "nombre": "Cielo Abierto Café",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-24",
                "palabras": "Cielo Abierto Café restaurantes"
        },
        {
                "nombre": "Lulú Café",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=lulu-cafe",
                "palabras": "Lulú Café restaurantes"
        },
        {
                "nombre": "Pergamino Café",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-26",
                "palabras": "Pergamino Café restaurantes"
        },
        {
                "nombre": "Santa Elena Coffee Roasters",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-27",
                "palabras": "Santa Elena Coffee Roasters restaurantes"
        },
        {
                "nombre": "La Casita del Té",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-28",
                "palabras": "La Casita del Té restaurantes"
        },
        {
                "nombre": "Cafetería Xallitic",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-29",
                "palabras": "Cafetería Xallitic restaurantes"
        },
        {
                "nombre": "Mercado Jáuregui (zona de comida)",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-30",
                "palabras": "Mercado Jáuregui (zona de comida) restaurantes"
        },
        {
                "nombre": "Mercado Los Sauces (zona de comida)",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-31",
                "palabras": "Mercado Los Sauces (zona de comida) restaurantes"
        },
        {
                "nombre": "Mercado Adolfo Ruiz Cortines / La Rotonda",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-32",
                "palabras": "Mercado Adolfo Ruiz Cortines / La Rotonda restaurantes"
        },
        {
                "nombre": "La Casa de Mago",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-33",
                "palabras": "La Casa de Mago restaurantes"
        },
        {
                "nombre": "El Itacate Fonda",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-34",
                "palabras": "El Itacate Fonda restaurantes"
        },
        {
                "nombre": "El Refugio de Doña Ade",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-35",
                "palabras": "El Refugio de Doña Ade restaurantes"
        },
        {
                "nombre": "Tacos San José",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-36",
                "palabras": "Tacos San José restaurantes"
        },
        {
                "nombre": "Taquería El Meridiano",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-37",
                "palabras": "Taquería El Meridiano restaurantes"
        },
        {
                "nombre": "Taquería El Tigre",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-38",
                "palabras": "Taquería El Tigre restaurantes"
        },
        {
                "nombre": "Tacos El Paisa",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-39",
                "palabras": "Tacos El Paisa restaurantes"
        },
        {
                "nombre": "Taquería Don Chema",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-40",
                "palabras": "Taquería Don Chema restaurantes"
        },
        {
                "nombre": "El Asador",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-41",
                "palabras": "El Asador restaurantes"
        },
        {
                "nombre": "La Gavia del Centro",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-42",
                "palabras": "La Gavia del Centro restaurantes"
        },
        {
                "nombre": "Antojitos La Casona",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-43",
                "palabras": "Antojitos La Casona restaurantes"
        },
        {
                "nombre": "Doña Lucha Antojitos",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-44",
                "palabras": "Doña Lucha Antojitos restaurantes"
        },
        {
                "nombre": "La Churrería de Xalapa",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-45",
                "palabras": "La Churrería de Xalapa restaurantes"
        },
        {
                "nombre": "La Michoacana (sucursales locales)",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-46",
                "palabras": "La Michoacana (sucursales locales) restaurantes"
        },
        {
                "nombre": "Tortas La Selva",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-47",
                "palabras": "Tortas La Selva restaurantes"
        },
        {
                "nombre": "Hamburguesas El Tío",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-48",
                "palabras": "Hamburguesas El Tío restaurantes"
        },
        {
                "nombre": "Pizzas La Paz",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-49",
                "palabras": "Pizzas La Paz restaurantes"
        },
        {
                "nombre": "Domino's Pizza – Xalapa",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-50",
                "palabras": "Domino's Pizza – Xalapa restaurantes"
        },
        {
                "nombre": "Little Caesars – Xalapa",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-51",
                "palabras": "Little Caesars – Xalapa restaurantes"
        },
        {
                "nombre": "Pollo Feliz – Xalapa",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-52",
                "palabras": "Pollo Feliz – Xalapa restaurantes"
        },
        {
                "nombre": "Asadero Cien",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=asadero",
                "palabras": "Asadero Cien restaurantes"
        },
        {
                "nombre": "La Estancia de los Tecajetes",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=tecajetes",
                "palabras": "La Estancia de los Tecajetes restaurantes"
        },
        {
                "nombre": "La Sopa",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-55",
                "palabras": "La Sopa restaurantes"
        },
        {
                "nombre": "Café-tal Apan (menú de comida)",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-56",
                "palabras": "Café-tal Apan (menú de comida) restaurantes"
        },
        {
                "nombre": "La Parroquia (comida/desayuno)",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-57",
                "palabras": "La Parroquia (comida/desayuno) restaurantes"
        },
        {
                "nombre": "Tacos de la zona de Clavijero",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-58",
                "palabras": "Tacos de la zona de Clavijero restaurantes"
        },
        {
                "nombre": "Cocinas económicas del Centro",
                "tipo": "Restaurante o café",
                "url": "explora.html?lugar=extra-restaurantes-59",
                "palabras": "Cocinas económicas del Centro restaurantes"
        },
        {
                "nombre": "Teatro del Estado General Ignacio de la Llave",
                "tipo": "Cultura",
                "url": "explora.html?lugar=extra-cultura-0",
                "palabras": "Teatro del Estado General Ignacio de la Llave cultura"
        },
        {
                "nombre": "Teatro J. J. Herrera",
                "tipo": "Cultura",
                "url": "explora.html?lugar=teatro",
                "palabras": "Teatro J. J. Herrera cultura"
        },
        {
                "nombre": "Área 51 Foro Teatral",
                "tipo": "Cultura",
                "url": "explora.html?lugar=extra-cultura-2",
                "palabras": "Área 51 Foro Teatral cultura"
        },
        {
                "nombre": "El Telón Sala de Artes",
                "tipo": "Cultura",
                "url": "explora.html?lugar=extra-cultura-3",
                "palabras": "El Telón Sala de Artes cultura"
        },
        {
                "nombre": "Teatro La Libertad",
                "tipo": "Cultura",
                "url": "explora.html?lugar=extra-cultura-4",
                "palabras": "Teatro La Libertad cultura"
        },
        {
                "nombre": "Foro Guadalupe Balderas",
                "tipo": "Cultura",
                "url": "explora.html?lugar=extra-cultura-5",
                "palabras": "Foro Guadalupe Balderas cultura"
        },
        {
                "nombre": "Café Teatro Tierra-Luna",
                "tipo": "Cultura",
                "url": "explora.html?lugar=extra-cultura-6",
                "palabras": "Café Teatro Tierra-Luna cultura"
        },
        {
                "nombre": "Cauz",
                "tipo": "Cultura",
                "url": "explora.html?lugar=extra-cultura-7",
                "palabras": "Cauz cultura"
        },
        {
                "nombre": "Ágora de la Ciudad",
                "tipo": "Cultura",
                "url": "explora.html?lugar=extra-cultura-8",
                "palabras": "Ágora de la Ciudad cultura"
        },
        {
                "nombre": "Centro Recreativo Xalapeño",
                "tipo": "Cultura",
                "url": "explora.html?lugar=extra-cultura-9",
                "palabras": "Centro Recreativo Xalapeño cultura"
        },
        {
                "nombre": "Casa del Lago UV",
                "tipo": "Cultura",
                "url": "explora.html?lugar=extra-cultura-10",
                "palabras": "Casa del Lago UV cultura"
        },
        {
                "nombre": "Biblioteca Carlos Fuentes",
                "tipo": "Cultura",
                "url": "explora.html?lugar=extra-cultura-11",
                "palabras": "Biblioteca Carlos Fuentes cultura"
        },
        {
                "nombre": "Unidad de Artes UV",
                "tipo": "Cultura",
                "url": "explora.html?lugar=extra-cultura-12",
                "palabras": "Unidad de Artes UV cultura"
        },
        {
                "nombre": "Teatro La Caja (UV)",
                "tipo": "Cultura",
                "url": "explora.html?lugar=extra-cultura-13",
                "palabras": "Teatro La Caja (UV) cultura"
        },
        {
                "nombre": "Teatro Universitario / espacios UV",
                "tipo": "Cultura",
                "url": "explora.html?lugar=extra-cultura-14",
                "palabras": "Teatro Universitario / espacios UV cultura"
        },
        {
                "nombre": "Auditorio IMAC",
                "tipo": "Cultura",
                "url": "explora.html?lugar=extra-cultura-15",
                "palabras": "Auditorio IMAC cultura"
        },
        {
                "nombre": "Casa 13 Espacio Cultural",
                "tipo": "Cultura",
                "url": "explora.html?lugar=extra-cultura-16",
                "palabras": "Casa 13 Espacio Cultural cultura"
        },
        {
                "nombre": "La Moderna (espacios culturales y eventos)",
                "tipo": "Cultura",
                "url": "explora.html?lugar=extra-cultura-17",
                "palabras": "La Moderna (espacios culturales y eventos) cultura"
        },
        {
                "nombre": "Galería de Arte Contemporáneo de Xalapa",
                "tipo": "Arte y museos",
                "url": "explora.html?lugar=extra-arte-0",
                "palabras": "Galería de Arte Contemporáneo de Xalapa arte"
        },
        {
                "nombre": "Galería de Artes Plásticas UV",
                "tipo": "Arte y museos",
                "url": "explora.html?lugar=extra-arte-1",
                "palabras": "Galería de Artes Plásticas UV arte"
        },
        {
                "nombre": "Galería Universitaria Ramón Alva de la Canal",
                "tipo": "Arte y museos",
                "url": "explora.html?lugar=extra-arte-2",
                "palabras": "Galería Universitaria Ramón Alva de la Canal arte"
        },
        {
                "nombre": "Pinacoteca Diego Rivera",
                "tipo": "Arte y museos",
                "url": "explora.html?lugar=extra-arte-3",
                "palabras": "Pinacoteca Diego Rivera arte"
        },
        {
                "nombre": "Jardín de las Esculturas",
                "tipo": "Arte y museos",
                "url": "explora.html?lugar=extra-arte-4",
                "palabras": "Jardín de las Esculturas arte"
        },
        {
                "nombre": "Museo de Antropología de Xalapa (MAX)",
                "tipo": "Arte y museos",
                "url": "explora.html?lugar=extra-arte-5",
                "palabras": "Museo de Antropología de Xalapa (MAX) arte"
        },
        {
                "nombre": "Kaná, Museo de Ciencia y Tecnología",
                "tipo": "Arte y museos",
                "url": "explora.html?lugar=extra-arte-6",
                "palabras": "Kaná, Museo de Ciencia y Tecnología arte"
        },
        {
                "nombre": "Museo Casa de Xalapa (MUXA)",
                "tipo": "Arte y museos",
                "url": "explora.html?lugar=extra-arte-7",
                "palabras": "Museo Casa de Xalapa (MUXA) arte"
        },
        {
                "nombre": "Museo de la Fauna (Macuiltépetl)",
                "tipo": "Arte y museos",
                "url": "explora.html?lugar=extra-arte-8",
                "palabras": "Museo de la Fauna (Macuiltépetl) arte"
        },
        {
                "nombre": "Museo Rafael Guízar y Valencia",
                "tipo": "Arte y museos",
                "url": "explora.html?lugar=extra-arte-9",
                "palabras": "Museo Rafael Guízar y Valencia arte"
        },
        {
                "nombre": "Museo del Bombero",
                "tipo": "Arte y museos",
                "url": "explora.html?lugar=extra-arte-10",
                "palabras": "Museo del Bombero arte"
        },
        {
                "nombre": "Museo Ex Hacienda El Lencero",
                "tipo": "Arte y museos",
                "url": "explora.html?lugar=extra-arte-11",
                "palabras": "Museo Ex Hacienda El Lencero arte"
        },
        {
                "nombre": "Galería Ramón Alva de la Canal (UV)",
                "tipo": "Arte y museos",
                "url": "explora.html?lugar=extra-arte-12",
                "palabras": "Galería Ramón Alva de la Canal (UV) arte"
        },
        {
                "nombre": "Galería del Centro Recreativo Xalapeño",
                "tipo": "Arte y museos",
                "url": "explora.html?lugar=extra-arte-13",
                "palabras": "Galería del Centro Recreativo Xalapeño arte"
        },
        {
                "nombre": "Centro Cultural Tlaqná",
                "tipo": "Arte y museos",
                "url": "explora.html?lugar=extra-arte-14",
                "palabras": "Centro Cultural Tlaqná arte"
        },
        {
                "nombre": "Patio Muñoz",
                "tipo": "Arte y museos",
                "url": "explora.html?lugar=extra-arte-15",
                "palabras": "Patio Muñoz arte"
        },
        {
                "nombre": "Barrio de Xallitic",
                "tipo": "Arte y museos",
                "url": "explora.html?lugar=extra-arte-16",
                "palabras": "Barrio de Xallitic arte"
        },
        {
                "nombre": "Callejón del Diamante",
                "tipo": "Arte y museos",
                "url": "explora.html?lugar=extra-arte-17",
                "palabras": "Callejón del Diamante arte"
        },
        {
                "nombre": "Parque Juárez",
                "tipo": "Naturaleza",
                "url": "explora.html?lugar=extra-naturaleza-0",
                "palabras": "Parque Juárez naturaleza"
        },
        {
                "nombre": "Parque de Los Berros",
                "tipo": "Naturaleza",
                "url": "explora.html?lugar=extra-naturaleza-1",
                "palabras": "Parque de Los Berros naturaleza"
        },
        {
                "nombre": "Paseo de Los Lagos",
                "tipo": "Naturaleza",
                "url": "explora.html?lugar=extra-naturaleza-2",
                "palabras": "Paseo de Los Lagos naturaleza"
        },
        {
                "nombre": "Parque Los Tecajetes",
                "tipo": "Naturaleza",
                "url": "explora.html?lugar=extra-naturaleza-3",
                "palabras": "Parque Los Tecajetes naturaleza"
        },
        {
                "nombre": "Parque Ecológico Macuiltépetl",
                "tipo": "Naturaleza",
                "url": "explora.html?lugar=extra-naturaleza-4",
                "palabras": "Parque Ecológico Macuiltépetl naturaleza"
        },
        {
                "nombre": "Parque Natura",
                "tipo": "Naturaleza",
                "url": "explora.html?lugar=extra-naturaleza-5",
                "palabras": "Parque Natura naturaleza"
        },
        {
                "nombre": "Jardín Botánico Francisco Javier Clavijero",
                "tipo": "Naturaleza",
                "url": "explora.html?lugar=extra-naturaleza-6",
                "palabras": "Jardín Botánico Francisco Javier Clavijero naturaleza"
        },
        {
                "nombre": "Santuario del Bosque de Niebla",
                "tipo": "Naturaleza",
                "url": "explora.html?lugar=extra-naturaleza-7",
                "palabras": "Santuario del Bosque de Niebla naturaleza"
        },
        {
                "nombre": "Jardín de las Esculturas",
                "tipo": "Naturaleza",
                "url": "explora.html?lugar=extra-naturaleza-8",
                "palabras": "Jardín de las Esculturas naturaleza"
        },
        {
                "nombre": "Parque Bicentenario",
                "tipo": "Naturaleza",
                "url": "explora.html?lugar=extra-naturaleza-9",
                "palabras": "Parque Bicentenario naturaleza"
        },
        {
                "nombre": "Parque María Enriqueta",
                "tipo": "Naturaleza",
                "url": "explora.html?lugar=extra-naturaleza-10",
                "palabras": "Parque María Enriqueta naturaleza"
        },
        {
                "nombre": "Parque Elisa Godos",
                "tipo": "Naturaleza",
                "url": "explora.html?lugar=extra-naturaleza-11",
                "palabras": "Parque Elisa Godos naturaleza"
        },
        {
                "nombre": "Parque de la Señoría",
                "tipo": "Naturaleza",
                "url": "explora.html?lugar=extra-naturaleza-12",
                "palabras": "Parque de la Señoría naturaleza"
        },
        {
                "nombre": "Parque Hundido de la USBI",
                "tipo": "Naturaleza",
                "url": "explora.html?lugar=extra-naturaleza-13",
                "palabras": "Parque Hundido de la USBI naturaleza"
        },
        {
                "nombre": "Área verde de la USBI / Unidad de Servicios Bibliotecarios",
                "tipo": "Naturaleza",
                "url": "explora.html?lugar=extra-naturaleza-14",
                "palabras": "Área verde de la USBI / Unidad de Servicios Bibliotecarios naturaleza"
        },
        {
                "nombre": "Parque de la Piedra",
                "tipo": "Naturaleza",
                "url": "explora.html?lugar=extra-naturaleza-15",
                "palabras": "Parque de la Piedra naturaleza"
        },
        {
                "nombre": "Estadio Xalapeño y alrededores",
                "tipo": "Naturaleza",
                "url": "explora.html?lugar=extra-naturaleza-16",
                "palabras": "Estadio Xalapeño y alrededores naturaleza"
        },
        {
                "nombre": "Cerro de la Galaxia",
                "tipo": "Naturaleza",
                "url": "explora.html?lugar=extra-naturaleza-17",
                "palabras": "Cerro de la Galaxia naturaleza"
        },
        {
                "nombre": "Barranca de Chavarrillo",
                "tipo": "Naturaleza",
                "url": "explora.html?lugar=extra-naturaleza-18",
                "palabras": "Barranca de Chavarrillo naturaleza"
        },
        {
                "nombre": "Cascada de Palo Gacho",
                "tipo": "Naturaleza",
                "url": "explora.html?lugar=extra-naturaleza-19",
                "palabras": "Cascada de Palo Gacho naturaleza"
        },
        {
                "nombre": "Cerro La Martinica (Banderilla)",
                "tipo": "Naturaleza",
                "url": "explora.html?lugar=extra-naturaleza-20",
                "palabras": "Cerro La Martinica (Banderilla) naturaleza"
        },
        {
                "nombre": "Enjambre",
                "tipo": "Evento",
                "url": "evento-detalle.html?id=enjambre",
                "palabras": "Enjambre Concierto Presentación de Enjambre como parte de Daños Luz Tour 2026."
        },
        {
                "nombre": "Julianne Joy",
                "tipo": "Evento",
                "url": "evento-detalle.html?id=julianne-joy",
                "palabras": "Julianne Joy Música Presentación musical de Julianne Joy en Casa Elo."
        },
        {
                "nombre": "Pinta tu Calabaza (de Yeso)",
                "tipo": "Evento · Halloween",
                "url": "evento-detalle.html?id=pinta-calabaza",
                "palabras": "Pinta tu Calabaza (de Yeso) Taller Taller de decoración de calabazas de yeso. Incluye proyección, mini pizza y bebida, según el cartel. Halloween Día de Muertos"
        },
        {
                "nombre": "Taller de Calabaza Otoñal",
                "tipo": "Evento · Halloween",
                "url": "evento-detalle.html?id=calabaza-otonal",
                "palabras": "Taller de Calabaza Otoñal Taller Taller de arreglo floral otoñal con calabaza. Incluye materiales, según el cartel. Horario de 17:00 a 20:00. Halloween Día de Muertos"
        },
        {
                "nombre": "Ilustrando lecturas de terror",
                "tipo": "Evento · Halloween",
                "url": "evento-detalle.html?id=lecturas-terror",
                "palabras": "Ilustrando lecturas de terror Taller Actividad de ilustración inspirada en lecturas de terror. El cartel indica un apartado de $50. Halloween Día de Muertos"
        },
        {
                "nombre": "Taller Maquillaje de Catrines",
                "tipo": "Evento · Halloween",
                "url": "evento-detalle.html?id=maquillaje-catrines",
                "palabras": "Taller Maquillaje de Catrines Taller Taller de maquillaje de catrines para principiantes, con duración de tres horas. Apartado de $150. Halloween Día de Muertos"
        },
        {
                "nombre": "Corriendo por el Bien de Xalapa – 10.ª edición",
                "tipo": "Evento",
                "url": "evento-detalle.html?id=corriendo-xalapa",
                "palabras": "Corriendo por el Bien de Xalapa – 10.ª edición Deporte Actividad recreativa de 5 km por el bien de Xalapa. Consulta las condiciones de registro y participación en el cartel."
        },
        {
                "nombre": "Rock y Disfraces",
                "tipo": "Evento · Halloween",
                "url": "evento-detalle.html?id=rock-disfraces",
                "palabras": "Rock y Disfraces Música Noche de rock y disfraces. El cartel anuncia preventa de $60 y taquilla de $80. Halloween Día de Muertos"
        },
        {
                "nombre": "La maldición de la llorona",
                "tipo": "Evento · Halloween",
                "url": "evento-detalle.html?id=llorona",
                "palabras": "La maldición de la llorona Cine Proyección de La maldición de la llorona dentro del ciclo de cine de terror de Casa Elo. Halloween Día de Muertos"
        },
        {
                "nombre": "Camino de Sempa Suchil – Orquesta Universitaria de Música Popular",
                "tipo": "Evento",
                "url": "evento-detalle.html?id=semapa-suchil",
                "palabras": "Camino de Sempa Suchil – Orquesta Universitaria de Música Popular Música y Cultura Presentación de la Orquesta Universitaria de Música Popular dentro de la programación cultural de octubre."
        },
        {
                "nombre": "Kpop Fest All Stars – Concurso de Dance Cover",
                "tipo": "Evento",
                "url": "evento-detalle.html?id=kpop-dance",
                "palabras": "Kpop Fest All Stars – Concurso de Dance Cover Concurso Concurso de Dance Cover del Kpop Fest All Stars."
        },
        {
                "nombre": "Kpop Fest All Stars",
                "tipo": "Evento",
                "url": "evento-detalle.html?id=kpop-fest",
                "palabras": "Kpop Fest All Stars Festival Encuentro dedicado al K-pop en Xalapa, con actividades y concurso de baile."
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

        const palabras = termino.split(/\s+/).filter(Boolean);
        const resultados = contenido.filter(item => {
            const texto = normalizar(item.nombre + ' ' + item.tipo + ' ' + item.palabras);
            return palabras.every(palabra => texto.includes(palabra));
        }).sort((a, b) => {
            const aNombre = normalizar(a.nombre);
            const bNombre = normalizar(b.nombre);
            const puntaje = nombre => nombre === termino ? 0 : nombre.startsWith(termino) ? 1 : nombre.includes(termino) ? 2 : 3;
            return puntaje(aNombre) - puntaje(bNombre);
        }).slice(0, 12);

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
