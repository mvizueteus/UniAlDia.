export type ArticleSection = {
  heading?: string;
  paragraphs: string[];
};

export type Article = {
  slug: string;
  category: 'VIVIENDA' | 'UNIVERSIDAD' | 'OCIO' | 'SEVILLA' | 'GUIA';
  chipColor: 'coral' | 'blue' | 'yellow';
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  time: string;
  readingMinutes: number;
  author: string;
  date: string;
  body: ArticleSection[];
  keyPoints: { title: string; text: string }[];
};

const images = {
  city: 'https://images.pexels.com/photos/11829188/pexels-photo-11829188.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  campus: 'https://images.pexels.com/photos/16549991/pexels-photo-16549991.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  friends: 'https://images.pexels.com/photos/37894627/pexels-photo-37894627.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  seville: 'https://images.pexels.com/photos/29210948/pexels-photo-29210948.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  students: 'https://images.pexels.com/photos/34690994/pexels-photo-34690994.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
};

export const articles: Article[] = [
  {
    slug: 'alquilar-habitacion-sevilla-zonas',
    category: 'VIVIENDA',
    chipColor: 'coral',
    title: 'Alquilar una habitación en Sevilla ya cuesta más que nunca: estas son las zonas que aún respiran',
    subtitle: 'El precio medio de la habitación en la ciudad supera por primera vez los 450 € al mes. Repasamos en qué barrios todavía se puede encontrar algo asequible y qué trampas evitar al firmar.',
    description: 'El precio medio de la habitación supera los 450 € al mes. Repasamos los barrios donde aún se puede alquilar a un precio razonable y las trampas que debes evitar.',
    image: images.city,
    imageAlt: 'Edificio residencial en una calle de Sevilla',
    time: 'Hace 2 h',
    readingMinutes: 6,
    author: 'Redacción UniAlDía',
    date: '23 de noviembre de 2026',
    body: [
      {
        paragraphs: [
          'Buscar habitación en Sevilla se ha convertido en un deporte de resistencia. Según los últimos datos del mercado local, el precio medio de una habitación en piso compartido ha superado por primera vez los 450 € al mes sin gastos incluidos, un 12 % más que hace justo un año. La subida se nota especialmente en los barrios más cercanos al campus de la Universidad de Sevilla y en el centro, donde la demanda de estudiantes nacionales e internacionales no deja de crecer.',
          'El problema no es solo el precio: es la velocidad. Los anuncios que aparecen por la mañana a precios razonables suelen estar reservados esa misma tarde. Por eso, más que nunca, conviene tener clara la zona, el presupuesto real (con gastos) y la documentación antes de empezar a visitar pisos.',
        ],
      },
      {
        heading: 'Los barrios donde aún se respira',
        paragraphs: [
          'Triana Este y el Polígono San Pablo siguen siendo dos de las opciones con mejor relación precio-tiempo en bus. Las habitaciones rondan los 300-350 € y la conexión al centro en transporte público está por debajo de los 25 minutos. La cartuja, pese a su imagen de zona cara, conserva pisos de precios moderados cerca del campus, sobre todo en los bloques más alejados del río.',
          'Nervión y San Bernardo se han encarecido, pero todavía se encuentran habitaciones por 380-420 € si se busca en edificios sin ascensor o en pisos compartidos con tres o más habitaciones. En Macarena y Alameda el precio medio sube hasta los 430-460 €, aunque el ambiente y la cercanía al centro compensan para muchos estudiantes.',
        ],
      },
      {
        heading: 'Las trampas más comunes al firmar',
        paragraphs: [
          'Primera regla: nunca pagues nada antes de visitar el piso en persona o hacer una videollamada en directo con quien lo ofrece. Las estafas de alquiler con fianzas por adelantado han crecido un 40 % en portales de anuncios según los últimos partes de la policía local.',
          'Segunda: exige un contrato por escrito, aunque sea de arrendamiento de habitación. Verbalmente no existe. Y tercera: revisa qué incluye la renta. Un piso a 320 € con luz, agua e internet incluidos puede salir más barato que uno a 280 € con gastos aparte, que en Sevilla rondan los 50-70 € mensuales por persona.',
        ],
      },
      {
        heading: '¿Y ahora qué?',
        paragraphs: [
          'Si tu presupuesto se queda corto, la alternativa más realista hoy es el piso tutelado o la residencia universitaria pública, cuyas plazas se asignan por renta y expediente. También merece la pena mirar el programa de viviendas para estudiantes de la propia Universidad de Sevilla, que publica sus convocatorias al inicio de cada curso.',
          'El mercado no va a bajar por sí solo este curso. Armarse con información concreta, comparar barrios y leer bien el contrato antes de firmar es, de momento, la mejor defensa.',
        ],
      },
    ],
    keyPoints: [
      { title: 'Precio medio', text: 'Una habitación en Sevilla supera ya los 450 € al mes sin gastos. Con gastos, cuenta 50-70 € más.' },
      { title: 'Zonas más asequibles', text: 'Triana Este, Polígono San Pablo y la Cartuja aún ofrecen habitaciones por debajo de 350 €.' },
      { title: 'Nunca pagues antes de ver', text: 'Ninguna fianza se paga antes de visitar el piso o videollamar. Cero excepciones.' },
      { title: 'Contrato siempre', text: 'Exige contrato escrito aunque sea de habitación, y aclara por escrito qué gastos incluye la renta.' },
    ],
  },
  {
    slug: 'us-nuevas-ayudas-estudiantes',
    category: 'UNIVERSIDAD',
    chipColor: 'blue',
    title: 'La US activa nuevas ayudas para estudiantes: requisitos y fechas clave',
    subtitle: 'La Universidad de Sevilla ha aprobado un paquete de ayudas propias con hasta 1.800 € por curso para matrícula, transporte y material. Estas son las condiciones, los plazos y cómo pedirlo sin perder el tren.',
    description: 'Hasta 1.800 € por curso en ayudas propias de la Universidad de Sevilla: requisitos, plazos de solicitud y errores que provocan el rechazo de la mayoría de expedientes.',
    image: images.campus,
    imageAlt: 'Campus universitario de la Universidad de Sevilla',
    time: 'Hace 4 h',
    readingMinutes: 5,
    author: 'Redacción UniAlDía',
    date: '23 de noviembre de 2026',
    body: [
      {
        paragraphs: [
          'La Universidad de Sevilla ha puesto en marcha su convocatoria de ayudas propias para este curso, con partidas que van desde el apoyo a la matrícula hasta el transporte, el material académico y las prácticas curriculares. Las cuantías individuales llegan hasta los 1.800 € anuales en el caso combinado de renta baja y desplazamiento desde la localidad de origen.',
          'La clave, como cada año, está en el calendario: el plazo de solicitud abre el 1 de diciembre y cierra el 31 de enero, sin prórroga. Presentar fuera de plazo, incluso por un día, supone el archivo automático del expediente.',
        ],
      },
      {
        heading: 'Quién puede pedirlo',
        paragraphs: [
          'Pueden solicitarlas estudiantes matriculados en grados y másteres oficiales de la US con al menos 48 créditos aprobados en el caso de grados de segundo curso en adelante (los de primer curso acreditan renta y matrícula, sin mínimo de créditos). También se tienen en cuenta las titulaciones a tiempo parcial, prorrateando el mínimo.',
          'El umbral de renta familiar se calcula igual que en la beca general del Ministerio: la convocatoria hace referencia a los umbrales vigentes del curso en curso. Si ya solicitaste la beca estatal, buena parte de la documentación (certificado de renta, libro de familia) te servirá tal cual.',
        ],
      },
      {
        heading: 'Los errores que más rechazos provocan',
        paragraphs: [
          'El primero: no presentar la declaración responsable de no superar el umbral de patrimonio. El segundo: olvidar la justificación del empadronamiento cuando se solicita el complemento de desplazamiento. Y el tercero, el más absurdo pero el más frecuente: subir el PDF con el DNI caducado o ilegible. La convocatoria exige documento en vigor y legible por ambas caras.',
          'La resolución se publica por listados en la sede electrónica de la universidad, normalmente en abril. Si el resultado es favorable, el abono se hace por transferencia a la cuenta del solicitante, no de los padres, así que conviene tener los datos bancarios actualizados en el expediente académico.',
        ],
      },
      {
        heading: 'Dónde y cómo pedirla',
        paragraphs: [
          'Todo el trámite es en línea, desde la sede electrónica de la US con certificado digital o Cl@ve. No hay papel ni registro presencial. Desde UniAlDía recomendamos no dejarlo para la última semana: los registos electrónicos coinciden cada enero con caídas puntuales de la plataforma.',
          'Si tienes dudas concretas sobre tu caso, el servicio de atención al estudiante de la universidad atiende consultas por escrito y publica un documento de preguntas frecuentes que resuelve el 80 % de las dudas habituales.',
        ],
      },
    ],
    keyPoints: [
      { title: 'Cuantías', text: 'Hasta 1.800 € anuales combinando renta baja y desplazamiento desde la localidad de origen.' },
      { title: 'Plazo', text: 'Del 1 de diciembre al 31 de enero, sin prórroga. Fuera de plazo, archivo automático.' },
      { title: 'Mínimo de créditos', text: '48 créditos aprobados de segundo curso en adelante. Los de primero solo acreditan renta y matrícula.' },
      { title: 'Trámite 100 % en línea', text: 'Sede electrónica de la US con certificado digital o Cl@ve. Sin registro presencial.' },
    ],
  },
  {
    slug: 'terrazas-sevilla-fin-de-semana',
    category: 'OCIO',
    chipColor: 'yellow',
    title: 'Plan de finde: seis terrazas para sobrevivir al calor sin salir de Sevilla',
    subtitle: 'Del azotea con vistas a la Giralda al patio de vecindad convertido en bar de barrio: seis terrazas donde el precio del agua fría no arruina la tarde.',
    description: 'Seis terrazas y azoteas de Sevilla para este fin de semana: vistas, precios de estudiante y sitios donde el calor se lleva mejor.',
    image: images.friends,
    imageAlt: 'Grupo de amigos en una terraza al atardecer',
    time: 'Ayer',
    readingMinutes: 4,
    author: 'Redacción UniAlDía',
    date: '22 de noviembre de 2026',
    body: [
      {
        paragraphs: [
          'El verano sevillano no perdona, pero la ciudad ha aprendido a defenderse hacia arriba. Las azoteas y patios han proliferado en los últimos años, y ya no hace falta gastarse veinte euros en una copa para disfrutar de una tarde en altura: varios de los sitios que recomendamos siguen siendo francamente de estudiante.',
          'Hemos preparado la selección pensando en tres cosas: que el precio sea razonable, que haya buena sombra o ventilación, y que se pueda ir sin reserva en grupos pequeños. Algunas tienen concierto los viernes, así que llega pronto.',
        ],
      },
      {
        heading: 'Las seis de la lista',
        paragraphs: [
          'En el casco antiguo, la azotea junto a la catedral sigue siendo el clásico para llevar a visitas: cañas a precio de centro (algo más caras, ojo, pero con la mejor vista de la Giralda) y ambiente tranquilo hasta las diez de la noche.',
          'En Alameda de Hércules, dos terrazas de bar de barrio han transformado sus patios en puntos de tarde: buenas bebidas frías, comida a precio razonable y música en vinilo. En Triana, el local junto al mercado ha sumado mesas en la acera peatonal con ventadores que funcionan de maravilla al atardecer.',
          'Más hacia el este, en Nervión, la azotea de un centro comercial ha sorprendido con precios de barrio y programación de conciertos gratuitos los sábados. Y en la Alameda vieja, el clásico de tarde con bocadillos gigantes sigue siendo el plan más barato por persona de toda la lista: con menos de diez euros sales cenado.',
        ],
      },
      {
        heading: 'Consejos para el plan',
        paragraphs: [
          'Los viernes y sábados por la noche la mayoría piden reserva o grupo mínimo. En grupos pequeños y por la tarde, casi siempre hay sitio sin avisar. El agua se pide de jarra en varios de estos sitios: sale mucho más barata que por botella y no pasa nada por pedirla.',
          'Y un clásico: el sol de Sevilla aprieta hasta bien entrada la tarde. Las terrazas con toldo o pérgola aguantan mucho mejor las primeras horas; las orientadas a poniente brillan a partir de las siete.',
        ],
      },
    ],
    keyPoints: [
      { title: 'Mejor hora', text: 'A partir de las 19:00, cuando cae el sol y las terrazas de poniente se animan.' },
      { title: 'Presupuesto', text: 'Entre 6 y 15 € por persona en la mayoría de la selección, contando una bebida y algo de picar.' },
      { title: 'Sin reserva', text: 'En grupos pequeños por la tarde casi siempre hay sitio. Los viernes con concierto, llega pronto.' },
      { title: 'Agua fría', text: 'Pide agua de jarra: en varios sitios sale por la mitad de precio que la botella.' },
    ],
  },
  {
    slug: 'transporte-cambios-sevilla',
    category: 'SEVILLA',
    chipColor: 'blue',
    title: 'El transporte cambia: esto es lo que tienes que saber antes de subirte',
    subtitle: 'Nuevas frecuencias en la línea 2 del metro, recorridos de autobús modificados en el centro y cambios en el bono de estudiante. Todo lo que afecta a tu trayecto diario, explicado sin jerga.',
    description: 'Nuevas frecuencias de metro, recorridos de bus modificados y cambios en el abono de estudiante: cómo afectan a tu trayecto diario en Sevilla.',
    image: images.seville,
    imageAlt: 'Autobús urbano en una calle de Sevilla',
    time: 'Hace 1 día',
    readingMinutes: 5,
    author: 'Redacción UniAlDía',
    date: '22 de noviembre de 2026',
    body: [
      {
        paragraphs: [
          'Este mes llegan cambios al transporte urbano que afectan directamente al bolsillo y a la rutina de miles de estudiantes. Resumimos lo importante: qué líneas cambian, cuánto cuesta ahora moverte y qué suscripción conviene según tu trayecto habitual.',
        ],
      },
      {
        heading: 'Metro y tranvía',
        paragraphs: [
          'La línea 1 del metro refuerza frecuencias en hora punta, con un tren cada cuatro minutos en los tramos centrales. La línea 2 mantiene su recorrido habitual, pero suma un refuerzo en las franjas de entrada y salida de clases de las facultades más cercanas a las estaciones del sur.',
          'El tranvía conserva su trazado, aunque con cortes puntuales los domingos por obras en el centro. Cuando haya desvío, el servicio alternativo se cubre con autobuses lanzadera cada diez minutos.',
        ],
      },
      {
        heading: 'Buses: recorridos y tarifa',
        paragraphs: [
          'Varios recorridos del centro cambian para priorizar el bus en carriles reservados, lo que en teoría recorta tiempos pero obliga a mirar de nuevo la parada de siempre: algunas se han trasladado entre 50 y 150 metros.',
          'En tarifa, la buena noticia es el bono de estudiante: mantiene su descuento si estás matriculado y lo renuevas con el justificante del curso. Sin la renovación, la tarjeta pasa automáticamente a tarifa general, así que hazlo antes de empezar el segundo cuatrimestre.',
        ],
      },
      {
        heading: 'Qué suscripción te conviene',
        paragraphs: [
          'Si vas a diario al campus en transporte público, el abono de estudiante sale más a cuenta a partir del viaje once de la semana: en un horario normal de clases lo amortizas sin problema. Si solo vienes dos o tres días, el bono recargable con transbordo gratuito en una hora es más flexible y probablemente más barato.',
          'Para las rutas hacia el campus de Reina Mercedes y la Cartuja, los desplazamientos en bici pública siguen siendo la opción más rápida en hora punta: la ciudad suma nuevas estaciones este curso en ambas zonas.',
        ],
      },
    ],
    keyPoints: [
      { title: 'Metro', text: 'Línea 1 con tren cada 4 minutos en hora punta y refuerzos en la 2 en franjas de clase.' },
      { title: 'Buses', text: 'Recorridos del centro modificados: revisa si tu parada habitual se ha movido unos metros.' },
      { title: 'Bono de estudiante', text: 'Renueva el descuento con el justificante de matrícula o volverás a pagar tarifa general.' },
      { title: 'Bici pública', text: 'Nuevas estaciones en Reina Mercedes y la Cartuja: en hora punta, muchas veces gana al bus.' },
    ],
  },
  {
    slug: 'derechos-inquilino-guia',
    category: 'VIVIENDA',
    chipColor: 'coral',
    title: 'La guía rápida para entender tus derechos como inquilino',
    subtitle: 'Contratos, fianzas, visitas del casero y devolución de la depósito: lo que la ley dice, lo que se puede negociar y las respuestas claras a las dudas que llegan cada semana a nuestra comunidad.',
    description: 'Contratos, fianzas, visitas del casero y devolución del depósito: tus derechos como inquilino en Sevilla explicados de forma clara.',
    image: images.students,
    imageAlt: 'Reunión en una vivienda compartida',
    time: 'Hace 2 días',
    readingMinutes: 7,
    author: 'Redacción UniAlDía',
    date: '21 de noviembre de 2026',
    body: [
      {
        paragraphs: [
          'Alquilar por primera vez genera dudas de todo tipo: ¿me puede subir la renta a mitad de contrato? ¿Cada cuánto puede enseñar el piso? ¿Qué hago si no me devuelve la fianza? Esta guía resume las respuestas con la ley de alquileres vigente en la mano y sin lenguaje jurídico.',
        ],
      },
      {
        heading: 'El contrato: mínimo cinco años',
        paragraphs: [
          'En un alquiler de vivienda habitual, el contrato tiene una duración mínima obligatoria de cinco años (siete si el arrendador es una empresa), salvo que tú decidas irte antes: entonces basta con avisar con un mes de antelación. Que el contrato diga "de un año" no cambia esa mínima legal.',
          'La renta solo puede actualizarse una vez al año y según el índice que figure en el contrato. Cualquier subida pactada por encima de ese índice es negociable, no obligatoria.',
        ],
      },
      {
        heading: 'La fianza y el depósito',
        paragraphs: [
          'La fianza legal equivale a un mes de renta y se debe depositar en la administración autonómica correspondiente. Además de la fianza, es habitual pactar una garantía adicional de hasta dos meses más. Ambas deben devolverse al acabar el contrato, con los posibles daños descontados y justificados.',
          'El desgaste normal del uso no es daño. La pared que se ensucia con el paso del tiempo no se descuenta del depósito; la pared que se rompe con un mueble, sí. Exige el estado del piso por escrito al entrar, con fotos y fecha: es la mejor prueba para recuperar todo el dinero.',
        ],
      },
      {
        heading: 'Las visitas del casero',
        paragraphs: [
          'El piso alquilado es tu vivienda. El propietario puede enseñarlo a posibles compradores o inquilinos, pero previo acuerdo con ustedes y en horario razonable: no puede entrar sin tu permiso, aunque aparezca en el contrato una cláusula que diga lo contrario.',
          'Las reparaciones necesarias las asume el casero y deben avisar de las obras antes de hacerlas. Si la reparación es urgente (una fuga, un corte de suministro), no necesitas autorización previa y luego se pasa el coste al propietario.',
        ],
      },
      {
        heading: 'Si las cosas se tuercen',
        paragraphs: [
          'Antes de ir a juicio, en la mayoría de los casos conviene una reclamación por escrito y, si no hay respuesta, acudir al servicio de mediación o a la oficina de consumo de tu ayuntamiento. Guarda siempre copia de contratos, recibos de pago y mensajes: en un procedimiento posterior son la diferencia entre ganar o quedarte a dos velas.',
        ],
      },
    ],
    keyPoints: [
      { title: 'Duración mínima', text: '5 años si el casero es particular, 7 si es empresa. Puedes irte avisando con un mes.' },
      { title: 'Fianza', text: 'Un mes de garantía legal y hasta dos más si se pactan. El desgaste normal no se descuenta.' },
      { title: 'Privacidad', text: 'El casero no puede entrar sin tu permiso, esté o no en el contrato. Las visitas se acuerdan.' },
      { title: 'Pruebas', text: 'Fotos y registro escrito del estado del piso al entrar. Es lo que sostiene la devolución del depósito.' },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
