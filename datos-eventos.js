const CARPETA_EVENTOS = "Icons/";
const EXTENSION_EVENTOS = ".png";

function fotoEvento(numero) {
    return CARPETA_EVENTOS + "evento_" +
           numero + EXTENSION_EVENTOS;
}

const eventosXalapa = [
    {
        id: "enjambre",
        nombre: "Enjambre",
        dia: 5,
        mes: "DIC",
        fecha: "2026-12-05",
        hora: "21:00",
        lugar: "Auditorio de la Escuela Normal Veracruzana",
        ubicacion: "Xalapa, Veracruz",
        precio: "Consultar boletos",
        categoria: "Concierto",
        descripcion: "Presentación de Enjambre como parte de Daños Luz Tour 2026.",
        imagen: fotoEvento(1)
    },
    {
        id: "julianne-joy",
        nombre: "Julianne Joy",
        dia: 23,
        mes: "OCT",
        fecha: "2026-10-23",
        hora: "20:00",
        lugar: "Casa Elo",
        ubicacion: "José Joaquín Herrera 23, Zona Centro, Xalapa",
        precio: "Gratis",
        categoria: "Música",
        descripcion: "Presentación musical de Julianne Joy en Casa Elo.",
        imagen: fotoEvento(2)
    },
    {
        id: "pinta-calabaza",
        etiquetas: ["Halloween", "Día de Muertos"],
        nombre: "Pinta tu Calabaza (de Yeso)",
        dia: 23,
        mes: "OCT",
        fecha: "2026-10-23",
        hora: "18:00",
        lugar: "MalvArt / Villa Toscana",
        ubicacion: "Calle Apolinar Castillo esquina Zempoala 54, Xalapa",
        precio: "$450",
        categoria: "Taller",
        descripcion: "Taller de decoración de calabazas de yeso. Incluye proyección, mini pizza y bebida, según el cartel.",
        imagen: fotoEvento(3)
    },
    {
        id: "calabaza-otonal",
        etiquetas: ["Halloween", "Día de Muertos"],
        nombre: "Taller de Calabaza Otoñal",
        dia: 23,
        mes: "OCT",
        fecha: "2026-10-23",
        hora: "17:00",
        lugar: "Flor Catorce Ánimas",
        ubicacion: "Xalapa, Veracruz",
        precio: "$800",
        categoria: "Taller",
        descripcion: "Taller de arreglo floral otoñal con calabaza. Incluye materiales, según el cartel. Horario de 17:00 a 20:00.",
        imagen: fotoEvento(4)
    },
    {
        id: "lecturas-terror",
        etiquetas: ["Halloween", "Día de Muertos"],
        nombre: "Ilustrando lecturas de terror",
        dia: 23,
        mes: "OCT",
        fecha: "2026-10-23",
        hora: "17:00",
        lugar: "Tabby Café",
        ubicacion: "Xalapeños Ilustres 141, Col. Centro, Xalapa",
        precio: "$190",
        categoria: "Taller",
        descripcion: "Actividad de ilustración inspirada en lecturas de terror. El cartel indica un apartado de $50.",
        imagen: fotoEvento(5)
    },
    {
        id: "maquillaje-catrines",
        etiquetas: ["Halloween", "Día de Muertos"],
        nombre: "Taller Maquillaje de Catrines",
        dia: 24,
        mes: "OCT",
        fecha: "2026-10-24",
        hora: "11:00",
        lugar: "Jardín de las Ideas",
        ubicacion: "Calle Alvarado 12, Col. Centro, Xalapa",
        precio: "$350",
        categoria: "Taller",
        descripcion: "Taller de maquillaje de catrines para principiantes, con duración de tres horas. Apartado de $150.",
        imagen: fotoEvento(6)
    },
    {
        id: "corriendo-xalapa",
        nombre: "Corriendo por el Bien de Xalapa – 10.ª edición",
        dia: 30,
        mes: "OCT",
        fecha: "2026-10-30",
        hora: "18:45",
        lugar: "Palacio Municipal de Xalapa",
        ubicacion: "Zona Centro, Xalapa",
        precio: "Gratis",
        categoria: "Deporte",
        descripcion: "Actividad recreativa de 5 km por el bien de Xalapa. Consulta las condiciones de registro y participación en el cartel.",
        imagen: fotoEvento(7)
    },
    {
        id: "rock-disfraces",
        etiquetas: ["Halloween", "Día de Muertos"],
        nombre: "Rock y Disfraces",
        dia: 30,
        mes: "OCT",
        fecha: "2026-10-30",
        hora: "19:00",
        lugar: "La Cocina del Jey",
        ubicacion: "Pídora 24, José Ortiz de Domínguez, Xalapa",
        precio: "Desde $60",
        categoria: "Música",
        descripcion: "Noche de rock y disfraces. El cartel anuncia preventa de $60 y taquilla de $80.",
        imagen: fotoEvento(8)
    },
    {
        id: "llorona",
        etiquetas: ["Halloween", "Día de Muertos"],
        nombre: "La maldición de la llorona",
        dia: 29,
        mes: "OCT",
        fecha: "2026-10-29",
        hora: "18:00",
        lugar: "Casa Elo",
        ubicacion: "José Joaquín Herrera 23, Zona Centro, Xalapa",
        precio: "Gratis",
        categoria: "Cine",
        descripcion: "Proyección de La maldición de la llorona dentro del ciclo de cine de terror de Casa Elo.",
        imagen: fotoEvento(9)
    },
    {
        id: "semapa-suchil",
        nombre: "Camino de Sempa Suchil – Orquesta Universitaria de Música Popular",
        dia: 31,
        mes: "OCT",
        fecha: "2026-10-31",
        hora: "19:00",
        lugar: "Tlaqná Centro Cultural",
        ubicacion: "Xalapa, Veracruz",
        precio: "Gratis",
        categoria: "Música y Cultura",
        descripcion: "Presentación de la Orquesta Universitaria de Música Popular dentro de la programación cultural de octubre.",
        imagen: fotoEvento(10)
    },
    {
        id: "kpop-dance",
        nombre: "Kpop Fest All Stars – Concurso de Dance Cover",
        dia: 5,
        mes: "DIC",
        fecha: "2026-12-05",
        hora: "11:30",
        lugar: "Casino Xalapeño",
        ubicacion: "Xalapa, Veracruz",
        precio: "Desde $90",
        categoria: "Concurso",
        descripcion: "Concurso de Dance Cover del Kpop Fest All Stars.",
        imagen: fotoEvento(11)
    },
    {
        id: "kpop-fest",
        nombre: "Kpop Fest All Stars",
        dia: 5,
        mes: "DIC",
        fecha: "2026-12-05",
        hora: "11:30",
        lugar: "Casino Xalapeño",
        ubicacion: "Xalapa, Veracruz",
        precio: "$50",
        categoria: "Festival",
        descripcion: "Encuentro dedicado al K-pop en Xalapa, con actividades y concurso de baile.",
        imagen: fotoEvento(12)
    },
    {
        id: "taller-pokemon",
        nombre: "Taller de pintura: Pokémon",
        categoria: "Taller",
        etiquetas: ["Halloween"],
        descripcion: "Taller de pintura con temática de Pokémon. Aprenderás técnicas de pintura mediante este taller creativo.",
        imagen: fotoEvento(13),
        fecha: "2026-11-28",
        dia: "28",
        mes: "NOV",
        hora: "16:00",
        lugar: "Umbral Cafetería",
        ubicacion: "Xalapa, Ver.",
        precio: "Consultar Costo"
    },
    {
        id: "expo-decembrina",
        nombre: "Alternativo Expo - Venta Decembrina",
        categoria: "Arte",
        etiquetas: [],
        descripcion: "Expo-venta de arte y diseño con artistas, diseñadores y creadores. Selección especial de cerámica, escultura, grabado, ilustración, textiles, joyería y propuestas de autor. Espacio para encontrar regalos únicos, piezas para el hogar y conocer a los creadores.",
        imagen: fotoEvento(14),
        fecha: "2026-12-05",
        dia: "05",
        mes: "DIC",
        hora: "10:00",
        lugar: "Centro Recreativo Xalapeño",
        ubicacion: "Xalapa, Ver.",
        precio: "Entrada gratuita"
    },
    {
        id: "taller-laberinto-fauno",
        nombre: "Taller de escultura: Laberinto del Fauno",
        categoria: "Taller",
        etiquetas: [],
        descripcion: "Taller de escultura con técnicas de modelado. Aprenderás técnicas de modelado inspiradas en el fantástico mundo del Laberinto del Fauno.",
        imagen: fotoEvento(15),
        fecha: "2026-11-20",
        dia: "20",
        mes: "NOV",
        hora: "16:00",
        lugar: "Umbral Cafetería",
        ubicacion: "Xalapa, Ver.",
        precio: "Consultar Costo"
    },
    {
        id: "mau-teatro",
        nombre: "MAU - Obra de Teatro",
        categoria: "Teatro",
        etiquetas: [],
        descripcion: "Obra de teatro infantil sobre Mauricio, un gato callejero, y Nube, una gatita de casa, que viven una aventura que marca sus vidas. De Dylan Alarcón. Clasificación A.",
        imagen: fotoEvento(16),
        fecha: "2026-11-20",
        dia: "20",
        mes: "NOV",
        hora: "20:00",
        lugar: "Foro La Candileja",
        ubicacion: "Sexta de Juárez #214, Xalapa, Ver.",
        precio: "Preventa $120 / Taquilla $150"
    },
    {
        id: "cine-animadores-mexicanos",
        nombre: "Ciclo de Cine: Animadores Mexicanos (Juan José Medina)",
        categoria: "Cine",
        etiquetas: [],
        descripcion: "Proyección de cortometraje de animación dirigido por Juan José Medina. Duración: 15 minutos. Forma parte del ciclo dedicado a animadores mexicanos.",
        imagen: fotoEvento(17),
        fecha: "2026-11-21",
        dia: "21",
        mes: "NOV",
        hora: "19:00",
        lugar: "La Colmena",
        ubicacion: "Calle Constitución (junto a la delegación de tránsito), Banderilla, Ver.",
        precio: "Entrada libre"
    },
    {
        id: "son-ellas-concierto",
        nombre: "Son Ellas: Mujeres sonando contra la violencia",
        categoria: "Música",
        etiquetas: [],
        descripcion: "Concierto-conversatorio en conmemoración del Día Internacional de la Eliminación de la Violencia contra las Mujeres, organizado por la Universidad Veracruzana a través de la Coordinación de la Unidad de Género, la Dirección General de Difusión Cultural y la Casa del Lago UV.",
        imagen: fotoEvento(18),
        fecha: "2026-11-25",
        dia: "25",
        mes: "NOV",
        hora: "17:00",
        lugar: "Casa del Lago UV",
        ubicacion: "Xalapa, Ver.",
        precio: "Entrada libre"
    },
    {
        id: "club-lectura-degustadas",
        nombre: "Club de lectura: Lecturas Degustadas",
        categoria: "Taller",
        etiquetas: [],
        descripcion: "Club de lectura en Tabby Café donde compartir historias y experiencias de lectura en comunidad, conducido por las anfitrionas Andrea Montoya y Yolitzin Hernández. Un espacio para leer sin prisas, saborear distintas historias y descubrir qué nos pasa cuando leemos.",
        imagen: fotoEvento(19),
        fecha: "2026-11-14",
        dia: "14",
        mes: "NOV",
        hora: "17:00",
        lugar: "Tabby Café",
        ubicacion: "Xalapeños Ilustres #141 Col. Centro, Xalapa, Ver.",
        precio: "Entrada gratuita"
    }
];

function enlaceMapaEvento(evento) {
    return "https://www.google.com/maps/search/?api=1&query=" +
        encodeURIComponent(evento.lugar + ", " + evento.ubicacion);
}

function obtenerEvento(id) {
    return eventosXalapa.find(evento => evento.id === id);
}

function fechaEventoLarga(evento) {
    const fecha = new Date(evento.fecha + "T12:00:00");
    return new Intl.DateTimeFormat("es-MX", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    }).format(fecha);
}