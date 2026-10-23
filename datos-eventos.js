 



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
