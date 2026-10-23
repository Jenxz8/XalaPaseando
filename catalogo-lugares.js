 




const gruposCatalogo = {
    restaurantes: [
         
        "El Café-tal Apan (Allende)",
        "El Café-tal Apan (Diego Leño)",
        "Café Bola de Oro – Centro",
        "Café Colón",
        "Café Lago",
        "Reformanda – Barra de café",
        "Flor Catorce",
        "Bolena Café",
        "Canela Street – Revolución",
        "Canela Street – Diego Leño",
        "Cuatro Regiones",
        "Jaco Jazzy Café",
        "Simple 73",
        "Café Don Justo",
        "Café La Parroquia",
        "Café Colibrí",
        "Café Lindo",
        "Café Insurgentes",
        "Café del Corso",
        "Café LaPlace",
        "AstroCafé",
        "Bicicleta Roja",
        "Ancestros Café Cultural",
        "El Foro Café",
        "Cielo Abierto Café",
        "Lulú Café",
        "Pergamino Café",
        "Santa Elena Coffee Roasters",
        "La Casita del Té",
        "Cafetería Xallitic",

         
        "Mercado Jáuregui (zona de comida)",
        "Mercado Los Sauces (zona de comida)",
        "Mercado Adolfo Ruiz Cortines / La Rotonda",
        "La Casa de Mago",
        "El Itacate Fonda",
        "El Refugio de Doña Ade",
        "Tacos San José",
        "Taquería El Meridiano",
        "Taquería El Tigre",
        "Tacos El Paisa",
        "Taquería Don Chema",
        "El Asador",
        "La Gavia del Centro",
        "Antojitos La Casona",
        "Doña Lucha Antojitos",
        "La Churrería de Xalapa",
        "La Michoacana (sucursales locales)",
        "Tortas La Selva",
        "Hamburguesas El Tío",
        "Pizzas La Paz",
        "Domino's Pizza – Xalapa",
        "Little Caesars – Xalapa",
        "Pollo Feliz – Xalapa",
        "Asadero Cien",
        "La Estancia de los Tecajetes",
        "La Sopa",
        "Café-tal Apan (menú de comida)",
        "La Parroquia (comida/desayuno)",
        "Tacos de la zona de Clavijero",
        "Cocinas económicas del Centro"
    ],

    cultura: [
        "Teatro del Estado General Ignacio de la Llave",
        "Teatro J. J. Herrera",
        "Área 51 Foro Teatral",
        "El Telón Sala de Artes",
        "Teatro La Libertad",
        "Foro Guadalupe Balderas",
        "Café Teatro Tierra-Luna",
        "Cauz",
        "Ágora de la Ciudad",
        "Centro Recreativo Xalapeño",
        "Casa del Lago UV",
        "Biblioteca Carlos Fuentes",
        "Unidad de Artes UV",
        "Teatro La Caja (UV)",
        "Teatro Universitario / espacios UV",
        "Auditorio IMAC",
        "Casa 13 Espacio Cultural",
        "La Moderna (espacios culturales y eventos)"
    ],

    arte: [
        "Galería de Arte Contemporáneo de Xalapa",
        "Galería de Artes Plásticas UV",
        "Galería Universitaria Ramón Alva de la Canal",
        "Pinacoteca Diego Rivera",
        "Jardín de las Esculturas",
        "Museo de Antropología de Xalapa (MAX)",
        "Kaná, Museo de Ciencia y Tecnología",
        "Museo Casa de Xalapa (MUXA)",
        "Museo de la Fauna (Macuiltépetl)",
        "Museo Rafael Guízar y Valencia",
        "Museo del Bombero",
        "Museo Ex Hacienda El Lencero",
        "Galería Ramón Alva de la Canal (UV)",
        "Galería del Centro Recreativo Xalapeño",
        "Centro Cultural Tlaqná",
        "Patio Muñoz",
        "Barrio de Xallitic",
        "Callejón del Diamante"
    ],

    naturaleza: [
        "Parque Juárez",
        "Parque de Los Berros",
        "Paseo de Los Lagos",
        "Parque Los Tecajetes",
        "Parque Ecológico Macuiltépetl",
        "Parque Natura",
        "Jardín Botánico Francisco Javier Clavijero",
        "Santuario del Bosque de Niebla",
        "Jardín de las Esculturas",
        "Parque Bicentenario",
        "Parque María Enriqueta",
        "Parque Elisa Godos",
        "Parque de la Señoría",
        "Parque Hundido de la USBI",
        "Área verde de la USBI / Unidad de Servicios Bibliotecarios",
        "Parque de la Piedra",
        "Estadio Xalapeño y alrededores",
        "Cerro de la Galaxia",
        "Barranca de Chavarrillo",
        "Cascada de Palo Gacho",
        "Cerro La Martinica (Banderilla)"
    ]
};

 
 

const imagenesCatalogo = {
    restaurantes:
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24",
    cultura:
        "https://images.unsplash.com/photo-1507676184212-d0330a15233c",
    arte:
        "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5",
    naturaleza:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
};

const descripcionesCatalogo = {
    restaurantes:
        "Descubre esta opción gastronómica de Xalapa. Consulta su ubicación, menú y horarios antes de visitarla.",
    cultura:
        "Conoce este espacio cultural de Xalapa. Consulta su programación y las condiciones de acceso.",
    arte:
        "Explora este espacio de arte, historia o patrimonio. Revisa las exposiciones y horarios disponibles.",
    naturaleza:
        "Conoce este espacio natural o recreativo de la región de Xalapa. Revisa las condiciones de acceso."
};

 

const textosEjemplo = {
    restaurantes: [
        "La experiencia me pareció agradable y regresaría.",
        "Me gustó el ambiente y disfruté la visita.",
        "En general tuve una buena experiencia.",
        "Me pareció una buena opción para visitar con amigos.",
        "Mi experiencia fue regular; considero que algunos aspectos podrían mejorar."
    ],
    cultura: [
        "Disfruté la visita y me pareció una experiencia interesante.",
        "Es el tipo de actividad cultural que recomendaría.",
        "Me gustó conocer un espacio diferente de la ciudad.",
        "Fue una experiencia entretenida y enriquecedora.",
        "La experiencia estuvo bien, aunque esperaba una mejor organización."
    ],
    arte: [
        "Disfruté recorrer el espacio y conocer sus propuestas.",
        "Me pareció una visita interesante y recomendable.",
        "Fue agradable dedicar un tiempo a conocer el lugar.",
        "Me gustó la experiencia cultural y visual.",
        "La visita fue regular; considero que podría haber más información para visitantes."
    ],
    naturaleza: [
        "Disfruté el paseo y el contacto con el entorno.",
        "Me pareció una opción agradable para salir a caminar.",
        "Fue una experiencia tranquila y la recomendaría.",
        "Me gustó dedicar un rato a recorrer el lugar.",
        "Mi experiencia fue regular; creo que podrían mejorarse algunos aspectos del mantenimiento."
    ]
};

function generarResenasEjemplo(categoria) {
    const puntuaciones = [5, 5, 4, 5, 2];

    return puntuaciones.map((puntuacion, indice) => ({
        autor: "Comunidad XalaPaseando " + (indice + 1),
        puntuacion,
        estrellas: "⭐".repeat(puntuacion),
        texto: textosEjemplo[categoria][indice]
    }));
}

 
function crearMapaLugar(nombre) {
    const ubicacion = nombre + ", Xalapa, Veracruz, México";

    return {
        mapaUrl:
            "https://www.google.com/maps?q=" +
            encodeURIComponent(ubicacion) +
            "&output=embed",

        mapaBusquedaUrl:
            "https://www.google.com/maps/search/?api=1&query=" +
            encodeURIComponent(ubicacion)
    };
}

 
window.catalogoLugares = [];

Object.entries(gruposCatalogo).forEach(([categoria, nombres]) => {
    nombres.forEach((nombre, indice) => {
        const mapas = crearMapaLugar(nombre);

        window.catalogoLugares.push({
            id: "extra-" + categoria + "-" + indice,
            categoria,
            nombre,
            desc: descripcionesCatalogo[categoria],
            tag: categoria === "restaurantes"
                ? "Gastronomía"
                : categoria === "cultura"
                ? "Cultura"
                : categoria === "arte"
                ? "Arte y patrimonio"
                : "Naturaleza",
            color: "roja",
            ubi: "Xalapa y región",
            precioTxt: "Consultar",
            nivelPrecio: "sin-datos",
            img: imagenesCatalogo[categoria],
            calificacion: "Sin calificación",
            estrellasNum: 0,
            horario: "Horario no verificado",
            mapaUrl: mapas.mapaUrl,
            mapaBusquedaUrl: mapas.mapaBusquedaUrl,
            resenas: generarResenasEjemplo(categoria),
            resenasFicticias: true
        });
    });
});
