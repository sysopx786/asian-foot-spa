export type Lang = "en" | "es";

export type Localized = Record<Lang, string>;

export type ServiceSlug =
  | "reflexology"
  | "swedish"
  | "deep-tissue"
  | "shiatsu"
  | "thai"
  | "hot-stone"
  | "aromatherapy"
  | "couples"
  | "cupping";

export type LocationSlug = "phoenixville";

export type PageId =
  | "home"
  | "services"
  | "locations"
  | "reviews"
  | "faq"
  | "gallery"
  | "visit"
  | "privacy";

const t = (en: string, es: string): Localized => ({ en, es });

export const brand = {
  name: "Asian Foot Spa",
  region: t("245 Schuylkill Road, Phoenixville", "245 Schuylkill Road, Phoenixville"),
};

export const locations: Array<{
  slug: LocationSlug;
  name: Localized;
  street: string;
  city: string;
  region: string;
  postal: string;
  phoneDisplay: string;
  phoneTel: string;
  open: string;
  close: string;
  hours: Localized;
  hoursNote: Localized;
  blurb: Localized;
  detail: Localized;
  nearby: Localized;
  email?: string;
  links: Array<{ label: string; href: string }>;
  ratings: Array<{ source: string; figure: Localized; note: Localized; href: string }>;
}> = [
  {
    slug: "phoenixville",
    name: t("Phoenixville", "Phoenixville"),
    street: "245 Schuylkill Rd",
    city: "Phoenixville",
    region: "PA",
    postal: "19460",
    phoneDisplay: "(215) 433-6969",
    phoneTel: "+12154336969",
    open: "10:00",
    close: "21:00",
    hours: t("Open 7 days, 10:00 a.m. – 9:00 p.m.", "Abierto los 7 días, 10:00 a. m. – 9:00 p. m."),
    hoursNote: t(
      "Those hours are printed on the glass door: “Open 7 Days” and “10am–9pm,” under the phone number.",
      "Ese horario está impreso en la puerta de vidrio: “Open 7 Days” y “10am–9pm”, debajo del teléfono.",
    ),
    blurb: t("The Phoenixville studio.", "El estudio de Phoenixville."),
    detail: t(
      "The studio is at 245 Schuylkill Road. The sign reads Asian Foot Spa. The door has the phone and the hours.",
      "El estudio está en 245 Schuylkill Road. El letrero dice Asian Foot Spa. La puerta tiene el teléfono y el horario.",
    ),
    nearby: t(
      "The studio is on Schuylkill Road in Phoenixville. Guests also come from Spring City, Royersford, Collegeville, and Oaks.",
      "El estudio está en Schuylkill Road, en Phoenixville. También llegan clientes desde Spring City, Royersford, Collegeville y Oaks.",
    ),
    email: "lulu831121@163.com",
    links: [
      { label: "Google", href: "https://www.google.com/search?q=Asian+Foot+Spa+245+Schuylkill+Rd+Phoenixville" },
      { label: "Yelp", href: "https://www.yelp.com/biz/asian-foot-spa-phoenixville" },
      { label: "Facebook", href: "https://www.facebook.com/massage2154336969/" },
    ],
    ratings: [
      {
        source: "Google",
        figure: t("4.4 · 47", "4.4 · 47"),
        note: t(
          "Google’s review summary for this listing: 4.4 from 47 reviews. An older Birdeye page showed 4.6 from 177. Open Google for the live count. Ratings are separate from the room photographs.",
          "El resumen de reseñas de Google para este listado: 4.4 de 47 reseñas. Una página anterior de Birdeye mostraba 4.6 de 177. Abra Google para la cifra en vivo. Las calificaciones son aparte de las fotografías de las salas.",
        ),
        href: "https://www.google.com/search?q=Asian+Foot+Spa+245+Schuylkill+Rd+Phoenixville",
      },
      {
        source: "Yelp",
        figure: t("2.8 · 5", "2.8 · 5"),
        note: t(
          "Yelp’s page for this address, from a small set of reviews. It is not a description of the rooms.",
          "La página de Yelp de esta dirección, con un grupo pequeño de reseñas. No es una descripción de las salas.",
        ),
        href: "https://www.yelp.com/biz/asian-foot-spa-phoenixville",
      },
    ],
  },
];

export const services: Array<{
  slug: ServiceSlug;
  name: Localized;
  minutes: Localized;
  summary: Localized;
  body: Localized;
  expect: Localized;
  goodFor: Localized;
  limit: Localized;
  studios: Localized;
}> = [
  {
    slug: "reflexology",
    name: t("Foot reflexology", "Reflexología podal"),
    minutes: t("On the feet", "En los pies"),
    summary: t(
      "Thumb and finger pressure on mapped points of the feet. Not a full-body massage.",
      "Presión con pulgares y dedos en puntos mapeados de los pies. No es un masaje de cuerpo completo.",
    ),
    body: t(
      "Foot reflexology is pressure, usually with the thumbs and fingers, on specific points of the soles, arches, heels, the balls of the feet, and the toes. A reflexology chart maps those points to other areas of the body. The work stays on the feet. It does not diagnose illness, and it is not a substitute for medical care. A heated stone may rest against the foot during the session. The studio window calls this hot stone foot spa.",
      "La reflexología podal es presión, por lo general con los pulgares y los dedos, en puntos concretos de las plantas, los arcos, los talones, los metatarsos y los dedos. Un mapa de reflexología relaciona esos puntos con otras zonas del cuerpo. El trabajo se queda en los pies. No diagnostica una enfermedad y no sustituye la atención médica. Una piedra caliente puede apoyarse en el pie durante la sesión. La ventana del estudio lo llama spa de pies con piedras calientes.",
    ),
    expect: t(
      "Shoes and socks come off. You can stay dressed otherwise. Say if a point is too sharp.",
      "Se quitan zapatos y calcetines. Puede permanecer vestido en lo demás. Diga si un punto está demasiado agudo.",
    ),
    goodFor: t(
      "Someone who wants the session on the feet, not a full-body massage.",
      "Alguien que quiere la sesión en los pies, no un masaje de cuerpo completo.",
    ),
    limit: t(
      "Skip it, or say so first, if you have an open cut, a fresh foot injury, or a medical restriction on the feet.",
      "Evítala, o dígalo primero, si tiene un corte abierto, una lesión reciente en el pie o una restricción médica en los pies.",
    ),
    studios: t(
      "At the Phoenixville studio. Time and price are on the menu.",
      "En el estudio de Phoenixville. El tiempo y el precio están en el menú.",
    ),
  },
  {
    slug: "swedish",
    name: t("Swedish massage", "Masaje sueco"),
    minutes: t("On the table", "En la camilla"),
    summary: t(
      "Classical Western massage: oil, gliding, kneading, and a light to moderate pressure.",
      "Masaje clásico occidental: aceite, deslizamiento, amasamiento y una presión de suave a moderada.",
    ),
    body: t(
      "Swedish massage is the classical Western massage. The therapist uses oil or lotion and the standard strokes: effleurage, long gliding along the muscle; petrissage, kneading and lifting the tissue; friction, small focused circles; tapotement, rhythmic tapping; and vibration. Pressure is generally light to moderate. The intent is to warm the superficial tissue, ease general tension, and help the body settle. You are draped, and only the area being worked is uncovered. It is not deep tissue, and it is not shiatsu.",
      "El masaje sueco es el masaje clásico occidental. La terapeuta usa aceite o loción y los movimientos básicos: effleurage, un deslizamiento largo a lo largo del músculo; petrissage, amasar y levantar el tejido; fricción, círculos pequeños y localizados; tapotement, percusión rítmica; y vibración. La presión suele ser de suave a moderada. La intención es entibiar el tejido superficial, aliviar la tensión general y ayudar al cuerpo a asentarse. Permanece cubierto, y solo se descubre la zona en la que se trabaja. No es tejido profundo y no es shiatsu.",
    ),
    expect: t(
      "Undress to your comfort and stay under the drape. Say if you want the pressure lighter or firmer.",
      "Desvístase hasta donde se sienta cómodo y permanezca bajo la sábana. Diga si quiere la presión más suave o más firme.",
    ),
    goodFor: t(
      "A first full-body massage, or a session for general tension rather than one deep spot.",
      "Un primer masaje de cuerpo completo, o una sesión para la tensión general y no para un solo punto profundo.",
    ),
    limit: t(
      "It is not medical treatment. Say so if something should not be rubbed, pressed, or oiled.",
      "No es un tratamiento médico. Dígalo si algo no debe frotarse, presionarse o aceitarse.",
    ),
    studios: t(
      "Ask for Swedish when you call. Time and price are on the menu.",
      "Pida el sueco cuando llame. El tiempo y el precio están en el menú.",
    ),
  },
  {
    slug: "deep-tissue",
    name: t("Deep tissue", "Tejido profundo"),
    minutes: t("On the table", "En la camilla"),
    summary: t(
      "Slow, sustained pressure into deeper muscle and fascia. Firm is not the same as painful.",
      "Presión lenta y sostenida en el músculo y la fascia más profundos. Firme no es lo mismo que doloroso.",
    ),
    body: t(
      "Deep tissue massage works the deeper layers of muscle and connective tissue. The therapist uses slow strokes and sustained pressure, often with the fingers, knuckles, forearms, or elbows, following the direction of the muscle instead of gliding over it. The work is for chronic tightness and specific areas, not a light pass over the whole body. You should still be able to breathe and talk. It is not physical therapy, and it does not repair an injury.",
      "El masaje de tejido profundo trabaja las capas más profundas del músculo y del tejido conectivo. La terapeuta usa movimientos lentos y presión sostenida, a menudo con los dedos, los nudillos, los antebrazos o los codos, siguiendo la dirección del músculo en lugar de deslizarse por encima. El trabajo es para la tensión crónica y zonas concretas, no un pase suave por todo el cuerpo. Aun así debe poder respirar y hablar. No es fisioterapia y no repara una lesión.",
    ),
    expect: t(
      "Point out the area before the work starts. Say less or more once the pressure is on you.",
      "Señale la zona antes de que empiece el trabajo. Diga menos o más cuando la presión ya esté sobre usted.",
    ),
    goodFor: t(
      "Ongoing tightness in the neck, shoulders, back, or hips, when you want slower, deeper work.",
      "Tensión persistente en el cuello, los hombros, la espalda o las caderas, cuando quiere un trabajo más lento y profundo.",
    ),
    limit: t(
      "Skip it on a bruise, an acute injury, or anywhere you have been told to avoid pressure.",
      "Evítalo sobre un moretón, una lesión aguda o donde le hayan indicado evitar la presión.",
    ),
    studios: t(
      "Ask for deep tissue when you call. Time and price are on the menu.",
      "Pida tejido profundo cuando llame. El tiempo y el precio están en el menú.",
    ),
  },
  {
    slug: "shiatsu",
    name: t("Shiatsu", "Shiatsu"),
    minutes: t("Usually clothed", "Por lo general vestido"),
    summary: t(
      "Japanese finger-pressure along meridians. Usually clothed, and usually without oil.",
      "Presión japonesa con los dedos a lo largo de los meridianos. Por lo general vestido, y por lo general sin aceite.",
    ),
    body: t(
      "Shiatsu is Japanese bodywork. The practitioner applies rhythmic, sustained pressure with the thumbs, fingers, and palms to points along meridian lines, and may add stretches or joint mobilization. Traditionally you stay clothed, the work is done without oil, and it is often given on a mat rather than with gliding strokes on a table. It is not Swedish massage. The meridians are a bodywork map, not a medical test, and shiatsu does not diagnose illness.",
      "El shiatsu es un trabajo corporal japonés. Quien lo aplica usa presión rítmica y sostenida con los pulgares, los dedos y las palmas en puntos a lo largo de los meridianos, y puede añadir estiramientos o movilización de las articulaciones. Por tradición permanece vestido, el trabajo se hace sin aceite y a menudo sobre una colchoneta, no con deslizamientos en una camilla. No es masaje sueco. Los meridianos son un mapa de trabajo corporal, no una prueba médica, y el shiatsu no diagnostica una enfermedad.",
    ),
    expect: t(
      "Wear loose clothes. Say which areas you do not want pressed.",
      "Vista ropa holgada. Diga qué zonas no quiere que presionen.",
    ),
    goodFor: t(
      "Someone who wants pressure and stretching without oil on the skin.",
      "Alguien que quiere presión y estiramiento sin aceite sobre la piel.",
    ),
    limit: t(
      "Skip pressure on an acute injury, a fracture, or where you have been told not to be pressed.",
      "Evite la presión sobre una lesión aguda, una fractura o donde le hayan indicado que no lo presionen.",
    ),
    studios: t(
      "Shiatsu is not named on the menu card. Call and ask if a therapist is offering it.",
      "El shiatsu no está nombrado en la tarjeta del menú. Llame y pregunte si una terapeuta lo ofrece.",
    ),
  },
  {
    slug: "thai",
    name: t("Thai massage", "Masaje tailandés"),
    minutes: t("Usually clothed", "Por lo general vestido"),
    summary: t(
      "Pressure along sen lines, plus assisted stretches. Usually clothed, without oil.",
      "Presión a lo largo de las líneas sen, más estiramientos asistidos. Por lo general vestido, sin aceite.",
    ),
    body: t(
      "Thai massage combines acupressure with assisted stretching. The practitioner presses with the palms, thumbs, elbows, knees, or feet along sen lines, then moves a limb through a slow stretch and holds it. You usually wear loose clothes and receive the work on a mat, without oil. It is active. It is not the same as lying still for a Swedish massage.",
      "El masaje tailandés combina la acupresión con estiramientos asistidos. Quien lo aplica presiona con las palmas, los pulgares, los codos, las rodillas o los pies a lo largo de las líneas sen, y luego mueve una extremidad en un estiramiento lento y lo sostiene. Por lo general viste ropa holgada y recibe el trabajo en una colchoneta, sin aceite. Es activo. No es lo mismo que quedarse quieto para un masaje sueco.",
    ),
    expect: t(
      "Wear clothes you can move in. Name any joint you do not want stretched.",
      "Vista ropa en la que pueda moverse. Nombre cualquier articulación que no quiera que estiren.",
    ),
    goodFor: t(
      "Someone who wants stretching in the session, not only hands on a still body.",
      "Alguien que quiere estiramientos en la sesión, no solo manos sobre un cuerpo quieto.",
    ),
    limit: t(
      "Skip it if you have been told not to stretch, or if you want to stay still on the table.",
      "Evítalo si le han dicho que no se estire, o si quiere quedarse quieto en la camilla.",
    ),
    studios: t(
      "Thai is not named on the menu card. Call and ask if it is offered.",
      "El tailandés no está nombrado en la tarjeta del menú. Llame y pregunte si se ofrece.",
    ),
  },
  {
    slug: "hot-stone",
    name: t("Hot stone", "Piedras calientes"),
    minutes: t("With a massage", "Con un masaje"),
    summary: t(
      "Heated stones placed on the body, or held in the hand, to warm the muscle.",
      "Piedras calientes colocadas sobre el cuerpo, o sostenidas en la mano, para entibiar el músculo.",
    ),
    body: t(
      "Hot stone massage uses smooth basalt stones that have been heated. Stones are placed on the body, and the therapist may also hold a stone and massage with it. The heat is meant to warm the muscle so the tissue softens. A stone may also rest against the foot during foot work. The stones should feel warm, not burning. You can refuse them. This is part of a massage, not a medical heat treatment.",
      "El masaje con piedras calientes usa piedras de basalto lisas que se han calentado. Las piedras se colocan sobre el cuerpo, y la terapeuta también puede sostener una piedra y masajear con ella. El calor busca entibiar el músculo para que el tejido ceda. Una piedra también puede apoyarse en el pie durante el trabajo de pies. Las piedras deben sentirse tibias, no quemar. Puede rechazarlas. Esto es parte de un masaje, no un tratamiento médico con calor.",
    ),
    expect: t(
      "Say immediately if a stone is too hot. You can decline the stones before they are used.",
      "Diga de inmediato si una piedra está demasiado caliente. Puede rechazar las piedras antes de que las usen.",
    ),
    goodFor: t(
      "A massage when you want heat on the back or the feet.",
      "Un masaje cuando quiere calor en la espalda o en los pies.",
    ),
    limit: t(
      "Do not use hot stones if you have reduced sensation, a burn, or a reason to avoid heat.",
      "No use piedras calientes si tiene menos sensibilidad, una quemadura o un motivo para evitar el calor.",
    ),
    studios: t(
      "The window mentions hot stone. What is included is printed on the menu.",
      "La ventana menciona las piedras calientes. Lo que está incluido está impreso en el menú.",
    ),
  },
  {
    slug: "aromatherapy",
    name: t("Aromatherapy", "Aromaterapia"),
    minutes: t("With a massage", "Con un masaje"),
    summary: t(
      "Essential oil, diluted in a carrier oil, applied during a massage.",
      "Aceite esencial, diluido en un aceite base, aplicado durante un masaje.",
    ),
    body: t(
      "Aromatherapy massage is a massage in which essential oils, diluted in a carrier oil, are applied to the skin during the strokes. The method is still the massage. The oil adds a scent. It does not diagnose or treat illness, sleep, or mood. If fragrance is a problem, the oils are optional.",
      "El masaje de aromaterapia es un masaje en el que se aplican aceites esenciales, diluidos en un aceite base, sobre la piel durante los movimientos. El método sigue siendo el masaje. El aceite añade un aroma. No diagnostica ni trata una enfermedad, el sueño o el ánimo. Si la fragancia es un problema, los aceites son opcionales.",
    ),
    expect: t(
      "Say if you are sensitive to scent, pregnant, or want unscented oil only.",
      "Diga si es sensible al aroma, está embarazada o quiere solo aceite sin aroma.",
    ),
    goodFor: t(
      "A massage when you want the oil to carry a scent.",
      "Un masaje cuando quiere que el aceite lleve un aroma.",
    ),
    limit: t(
      "Skip scented oil if fragrance bothers you. Scent is not medical care.",
      "Evite el aceite con aroma si la fragancia le molesta. El aroma no es atención médica.",
    ),
    studios: t(
      "Aromatherapy is not a separate line on the menu. Ask when you call.",
      "La aromaterapia no es una línea aparte en el menú. Pregunte cuando llame.",
    ),
  },
  {
    slug: "couples",
    name: t("Couples massage", "Masaje en pareja"),
    minutes: t("Two guests", "Dos personas"),
    summary: t(
      "Two people receive massage in the same appointment. Each person gets a massage.",
      "Dos personas reciben masaje en la misma cita. Cada persona recibe un masaje.",
    ),
    body: t(
      "Couples massage means two people are booked for the same time, and each receives a massage. It is a way of booking, not a different technique. Each person can still ask for the kind of work they want. Call and ask how the studio sets up two guests.",
      "El masaje en pareja significa que dos personas se reservan para la misma hora y cada una recibe un masaje. Es una forma de reservar, no una técnica distinta. Cada persona puede pedir el tipo de trabajo que quiere. Llame y pregunte cómo acomoda el estudio a dos personas.",
    ),
    expect: t(
      "Say that you are two people, and what each person wants.",
      "Diga que son dos personas y qué quiere cada una.",
    ),
    goodFor: t(
      "Two guests who want the same appointment.",
      "Dos clientes que quieren la misma cita.",
    ),
    limit: t(
      "It is not a way to split one session between strangers.",
      "No es una forma de partir una sesión entre desconocidos.",
    ),
    studios: t(
      "Couples massage is on the menu. Call and ask how both people are seated.",
      "El masaje en pareja está en el menú. Llame y pregunte cómo se sientan las dos personas.",
    ),
  },
  {
    slug: "cupping",
    name: t("Cupping", "Ventosas"),
    minutes: t("Suction", "Succión"),
    summary: t(
      "Cups on the skin create suction and lift the tissue. Not a gliding massage stroke.",
      "Las copas sobre la piel crean succión y levantan el tejido. No es un movimiento de masaje deslizante.",
    ),
    body: t(
      "Cupping places cups on the skin so the air inside creates suction. The suction lifts soft tissue into the cup. Cups may sit in one place, or glide over oiled skin, and are then removed. This is not a Swedish stroke. Circular marks can remain for a few days. Those marks are from the suction. Cupping is not medical treatment.",
      "Las ventosas colocan copas sobre la piel para que el aire interior cree succión. La succión levanta el tejido blando hacia la copa. Las copas pueden quedarse en un sitio, o deslizarse sobre la piel aceitada, y luego se retiran. Esto no es un movimiento sueco. Las marcas circulares pueden durar unos días. Esas marcas son de la succión. Las ventosas no son un tratamiento médico.",
    ),
    expect: t(
      "Say if you want only a few cups, or none on a particular spot.",
      "Diga si solo quiere unas pocas copas, o ninguna en un punto concreto.",
    ),
    goodFor: t(
      "Someone who wants suction on a tight area, along with massage or instead of hands alone.",
      "Alguien que quiere succión en una zona tensa, junto con el masaje o en lugar de solo las manos.",
    ),
    limit: t(
      "Skip cupping on broken skin, a fresh injury, or if you have been told to avoid suction.",
      "Evite las ventosas sobre piel abierta, una lesión reciente o si le indicaron evitar la succión.",
    ),
    studios: t(
      "Cupping is on the menu.",
      "Las ventosas están en el menú.",
    ),
  },
];

export const menuPhoto = {
  src: "/media/menu.jpg",
  alt: t("The menu.", "El menú."),
  caption: t("The menu.", "El menú."),
};

export const rates: Array<{ id: string; name: Localized; price: string; detail: Localized }> = [
  {
    id: "30",
    name: t("30 min, body or foot", "30 min, cuerpo o pies"),
    price: "$50",
    detail: t("Printed as 30min body/foot.", "Impreso como 30min body/foot."),
  },
  {
    id: "60",
    name: t("60 min, body or foot", "60 min, cuerpo o pies"),
    price: "$70",
    detail: t("Printed as 60min body/foot.", "Impreso como 60min body/foot."),
  },
  {
    id: "90",
    name: t("90 min, body or foot", "90 min, cuerpo o pies"),
    price: "$100",
    detail: t("Printed as 90min body/foot.", "Impreso como 90min body/foot."),
  },
  {
    id: "120",
    name: t("120 min, body or foot", "120 min, cuerpo o pies"),
    price: "$130",
    detail: t("Printed as 120min body/foot.", "Impreso como 120min body/foot."),
  },
  {
    id: "couples-60",
    name: t("Couples massage, 60 min", "Masaje en pareja, 60 min"),
    price: "$130",
    detail: t("Printed as Couples Massage 60min. Not marked per person.", "Impreso como Couples Massage 60min. No dice por persona."),
  },
  {
    id: "couples-90",
    name: t("Couples massage, 90 min", "Masaje en pareja, 90 min"),
    price: "$190",
    detail: t("The 90min line under Couples Massage.", "La línea 90min bajo Couples Massage."),
  },
  {
    id: "cupping",
    name: t("Cupping", "Ventosas"),
    price: "$15",
    detail: t("Its own line. No length is printed.", "Línea propia. No imprime duración."),
  },
];

export const cardFinePrint = t(
  "The card says to pay the required rate on a credit or debit card. It does not mention cash. A second figure sits beside each rate: $3 on $50, $4.20 on $70, $6 on $100, $7.80 on $130, $11.40 on $190, and $0.90 on $15. Each is 6% of the number beside it. The card does not label those figures. The front window says Free Hot Stone. That is not a separate line on this card. Anything not printed here, ask by phone.",
  "La tarjeta dice que se pague la tarifa requerida con tarjeta de crédito o débito. No menciona efectivo. Una segunda cifra está junto a cada tarifa: $3 sobre $50, $4.20 sobre $70, $6 sobre $100, $7.80 sobre $130, $11.40 sobre $190 y $0.90 sobre $15. Cada una es el 6% del número de al lado. La tarjeta no etiqueta esas cifras. La ventana dice Free Hot Stone. Eso no es una línea aparte en esta tarjeta. Lo que no esté impreso aquí, pregunte por teléfono.",
);

export const reviews: Array<{
  quote: Localized;
  name: string;
  source: string;
  where: Localized;
  href: string;
}> = [
  {
    quote: t(
      "Amy and May are great. My hubby discovered this place and now we both love it. They took care of all my aches and pains and I left feeling very relaxed. It also included hot stones, a hot towel, and essential oils. Clean, neat, and professional.",
      "Amy y May son excelentes. Mi esposo descubrió el lugar y ahora a los dos nos encanta. Se ocuparon de todos mis dolores y salí muy relajada. También incluyó piedras calientes, una toalla caliente y aceites esenciales. Limpio, ordenado y profesional.",
    ),
    name: "Shubhada Menon",
    source: "Google",
    where: t("Phoenixville", "Phoenixville"),
    href: "https://reviews.birdeye.com/asian-foot-spa-169826051591637",
  },
  {
    quote: t(
      "Wonderful. I was so relaxed I didn’t want to leave. Next time, a full massage along with the reflexology.",
      "Maravilloso. Estaba tan relajada que no quería irme. La próxima vez, un masaje completo junto con la reflexología.",
    ),
    name: "Shirley Wolf",
    source: "Google",
    where: t("Phoenixville", "Phoenixville"),
    href: "https://reviews.birdeye.com/asian-foot-spa-169826051591637",
  },
  {
    quote: t(
      "Friendly staff, great masseuses, and great pricing. I’d definitely recommend, and they typically can get you in the same day.",
      "Personal amable, muy buenas masajistas y buenos precios. Lo recomiendo, y por lo general pueden atenderle el mismo día.",
    ),
    name: "Blake S.",
    source: "MapQuest",
    where: t("Phoenixville", "Phoenixville"),
    href: "https://www.mapquest.com/us/pennsylvania/asian-foot-spa-429106757",
  },
];

export const faqs: Array<{
  id: string;
  group: "visit" | "menu" | "practical";
  q: Localized;
  a: Localized;
}> = [
  {
    id: "where",
    group: "visit",
    q: t("Where is the studio?", "¿Dónde está el estudio?"),
    a: t(
      "245 Schuylkill Road, Phoenixville, PA 19460. The number 245 is on the glass beside the door, under the lighted sign that reads Asian Foot Spa. The phone on the door is (215) 433-6969.",
      "245 Schuylkill Road, Phoenixville, PA 19460. El número 245 está en el vidrio junto a la puerta, bajo el letrero iluminado que dice Asian Foot Spa. El teléfono de la puerta es (215) 433-6969.",
    ),
  },
  {
    id: "hours",
    group: "visit",
    q: t("When are you open?", "¿Cuándo están abiertos?"),
    a: t(
      "The door says Open 7 Days, 10am–9pm. That is every day from 10:00 a.m. to 9:00 p.m. Call if you are arriving near the end of the night.",
      "La puerta dice Open 7 Days, 10am–9pm. Eso es todos los días de 10:00 a. m. a 9:00 p. m. Llame si llega cerca del final de la noche.",
    ),
  },
  {
    id: "appointment",
    group: "visit",
    q: t("Do I need an appointment?", "¿Necesito cita?"),
    a: t(
      "Call (215) 433-6969. Walk-ins are sometimes taken when a room is free, but the studio cannot promise that if you only show up. Say whether you want the feet or body work on the table.",
      "Llame al (215) 433-6969. A veces aceptan visitas sin cita si una sala está libre, pero el estudio no puede prometerlo si solo se presenta. Diga si quiere los pies o el trabajo corporal en la camilla.",
    ),
  },
  {
    id: "inside",
    group: "visit",
    q: t("What is inside?", "¿Qué hay adentro?"),
    a: t(
      "A waiting room, a massage table, and a foot chair.",
      "Una sala de espera, una camilla y un sillón para los pies.",
    ),
  },
  {
    id: "foot-does",
    group: "menu",
    q: t("What does foot reflexology do?", "¿Qué hace la reflexología podal?"),
    a: t(
      "The therapist presses mapped points on the soles, arches, heels, and toes. It is work on the feet, not a full-body massage, and it does not diagnose illness. Time and price are on the menu.",
      "La terapeuta presiona puntos mapeados en las plantas, los arcos, los talones y los dedos. Es trabajo en los pies, no un masaje de cuerpo completo, y no diagnostica una enfermedad. El tiempo y el precio están en el menú.",
    ),
  },
  {
    id: "body-does",
    group: "menu",
    q: t("What is the difference between Swedish, deep tissue, and shiatsu?", "¿Cuál es la diferencia entre el sueco, el tejido profundo y el shiatsu?"),
    a: t(
      "Swedish is oil massage with gliding and kneading at a light to moderate pressure. Deep tissue is slower pressure into deeper muscle, on specific tight areas. Shiatsu is Japanese finger pressure along meridians, usually clothed and without oil. Ask for the one you want. Time and price are on the menu.",
      "El sueco es masaje con aceite, deslizamiento y amasamiento, con presión de suave a moderada. El tejido profundo es presión más lenta en el músculo más profundo, en zonas tensas concretas. El shiatsu es presión japonesa con los dedos a lo largo de los meridianos, por lo general vestido y sin aceite. Pida el que quiere. El tiempo y el precio están en el menú.",
    ),
  },
  {
    id: "stones",
    group: "menu",
    q: t("What do hot stones do?", "¿Qué hacen las piedras calientes?"),
    a: t(
      "Heated stones are placed on the body, or held in the hand, so the muscle warms. They should feel warm, not burning. You can decline them. What is included is on the menu.",
      "Las piedras calientes se colocan sobre el cuerpo, o se sostienen en la mano, para que el músculo se entibie. Deben sentirse tibias, no quemar. Puede rechazarlas. Lo que está incluido está en el menú.",
    ),
  },
  {
    id: "thai-does",
    group: "menu",
    q: t("What does Thai massage do?", "¿Qué hace el masaje tailandés?"),
    a: t(
      "Thai massage is pressure along sen lines plus assisted stretches. A limb is moved and held. You usually stay in loose clothes, without oil. It is not named on the menu card. Call and ask if it is offered.",
      "El masaje tailandés es presión a lo largo de las líneas sen más estiramientos asistidos. Una extremidad se mueve y se sostiene. Por lo general permanece con ropa holgada, sin aceite. No está nombrado en la tarjeta del menú. Llame y pregunte si se ofrece.",
    ),
  },
  {
    id: "couples-does",
    group: "menu",
    q: t("What is couples massage?", "¿Qué es el masaje en pareja?"),
    a: t(
      "Two people receive massage in the same appointment. Each person gets a massage. It is on the menu. Call and ask how you will be seated.",
      "Dos personas reciben masaje en la misma cita. Cada persona recibe un masaje. Está en el menú. Llame y pregunte cómo se sentarán.",
    ),
  },
  {
    id: "cupping-does",
    group: "menu",
    q: t("What does cupping do?", "¿Qué hacen las ventosas?"),
    a: t(
      "Cups sit on the skin and lift the tissue with suction, then come off. It is not a gliding massage stroke. Marks can last a few days. Cupping is on the menu.",
      "Las copas se apoyan en la piel y levantan el tejido con succión, luego se retiran. No es un movimiento de masaje deslizante. Las marcas pueden durar unos días. Las ventosas están en el menú.",
    ),
  },
  {
    id: "price",
    group: "menu",
    q: t("What does a session cost?", "¿Cuánto cuesta una sesión?"),
    a: t(
      "Prices are on the menu. They are not repeated on the rest of the site.",
      "Los precios están en el menú. No se repiten en el resto del sitio.",
    ),
  },
  {
    id: "wear",
    group: "practical",
    q: t("What should I wear?", "¿Qué debo vestir?"),
    a: t(
      "For reflexology, ordinary clothes are fine; shoes and socks come off. For Swedish or deep tissue, undress to your comfort and stay draped. For shiatsu or Thai, wear clothes you can move in.",
      "Para la reflexología, la ropa de calle está bien; se quitan zapatos y calcetines. Para el sueco o el tejido profundo, desvístase hasta donde se sienta cómodo y permanezca cubierto. Para el shiatsu o el tailandés, vista ropa en la que pueda moverse.",
    ),
  },
  {
    id: "pay",
    group: "practical",
    q: t("How do I pay?", "¿Cómo pago?"),
    a: t(
      "Payment is explained on the menu. The card asks for a credit or debit card and does not mention cash.",
      "El pago se explica en el menú. La tarjeta pide tarjeta de crédito o débito y no menciona efectivo.",
    ),
  },
  {
    id: "medical",
    group: "practical",
    q: t("Is this medical treatment?", "¿Esto es un tratamiento médico?"),
    a: t(
      "No. Reflexology, Swedish, deep tissue, shiatsu, Thai, hot stones, aromatherapy, and cupping are bodywork, not a diagnosis or a substitute for a clinician. Mention pregnancy, blood clots, recent surgery, skin problems, or anything the therapist should not press or heat.",
      "No. La reflexología, el sueco, el tejido profundo, el shiatsu, el tailandés, las piedras calientes, la aromaterapia y las ventosas son trabajo corporal, no un diagnóstico ni un sustituto de un clínico. Mencione embarazo, coágulos, una cirugía reciente, problemas de la piel o cualquier cosa que la terapeuta no deba presionar o calentar.",
    ),
  },
  {
    id: "photos",
    group: "visit",
    q: t("Are these photographs of the studio?", "¿Estas fotografías son del estudio?"),
    a: t(
      "Yes. They are the Phoenixville studio.",
      "Sí. Son el estudio de Phoenixville.",
    ),
  },
];

export const gallery: Array<{
  src: string;
  frame: string;
  alt: Localized;
  caption: Localized;
}> = [
  {
    src: "/media/storefront.jpg",
    frame: "frame-square",
    alt: t("The front of the studio.", "La fachada del estudio."),
    caption: t("The front of the studio.", "La fachada del estudio."),
  },
  {
    src: "/media/lounge.jpg",
    frame: "frame-square",
    alt: t("The waiting room.", "La sala de espera."),
    caption: t("The waiting room.", "La sala de espera."),
  },
  {
    src: "/media/table.jpg",
    frame: "frame-square",
    alt: t("A massage table.", "Una camilla."),
    caption: t("A massage table.", "Una camilla."),
  },
  {
    src: "/media/chair.jpg",
    frame: "frame-square",
    alt: t("A foot chair.", "Un sillón para los pies."),
    caption: t("A foot chair.", "Un sillón para los pies."),
  },
  {
    src: "/media/massage.jpg",
    frame: "frame-square",
    alt: t("A massage on the table.", "Un masaje en la camilla."),
    caption: t("A massage on the table.", "Un masaje en la camilla."),
  },
  {
    src: "/media/massage-side.jpg",
    frame: "frame-square",
    alt: t("The same massage, from the side.", "El mismo masaje, de lado."),
    caption: t("The same massage, from the side.", "El mismo masaje, de lado."),
  },
  {
    src: "/media/feet.jpg",
    frame: "frame-square",
    alt: t("Foot work on the table.", "Trabajo de pies en la camilla."),
    caption: t("Foot work on the table.", "Trabajo de pies en la camilla."),
  },
  {
    src: "/media/stones-session.jpg",
    frame: "frame-square",
    alt: t("Hot stones on the back.", "Piedras calientes en la espalda."),
    caption: t("Hot stones on the back.", "Piedras calientes en la espalda."),
  },
];

export const ui = {
  skip: t("Skip to content", "Saltar al contenido"),
  navServices: t("Services", "Servicios"),
  navStudios: t("Studio", "Estudio"),
  navReviews: t("Reviews", "Reseñas"),
  navFaq: t("FAQ", "Preguntas"),
  navVisit: t("Visit", "Visita"),
  navGallery: t("Gallery", "Galería"),
  openMenu: t("Menu", "Menú"),
  close: t("Close", "Cerrar"),
  search: t("Search", "Buscar"),
  searchLabel: t("Search this site", "Buscar en este sitio"),
  searchEmpty: t("Nothing matches that.", "Nada coincide con eso."),
  searchHint: t("Services, the studio, questions.", "Servicios, el estudio, preguntas."),
  call: t("Call", "Llamar"),
  directions: t("Directions", "Cómo llegar"),
  showMap: t("Show map", "Ver mapa"),
  hideMap: t("Hide map", "Ocultar mapa"),
  mapTitle: t("Map", "Mapa"),
  openNow: t("Open now", "Abierto ahora"),
  closedNow: t("Closed now", "Cerrado ahora"),
  hoursListed: t("Hours on the door", "Horario en la puerta"),
  readServices: t("All services", "Todos los servicios"),
  bothStudios: t("The studio", "El estudio"),
  backTop: t("Back to top", "Volver arriba"),
  language: t("Language", "Idioma"),
  home: t("Home", "Inicio"),
  privacy: t("Privacy", "Privacidad"),
  menuLabel: t("Posted menu", "Menú publicado"),
  confirm: t(
    "The card at the counter is the menu.",
    "La tarjeta del mostrador es el menú.",
  ),
  illustrative: t(
    "Photographs of the studio at 245 Schuylkill Road, Phoenixville.",
    "Fotografías del estudio en 245 Schuylkill Road, Phoenixville.",
  ),
  notMedical: t(
    "Massage and reflexology here are not medical care.",
    "El masaje y la reflexología aquí no son atención médica.",
  ),
  viewSource: t("View on", "Ver en"),
  related: t("Related", "Relacionado"),
  whatYouNeed: t("What do you need?", "¿Qué necesita?"),
  recommend: t("Start here", "Empiece aquí"),
  groups: {
    visit: t("Visiting", "La visita"),
    menu: t("What the services do", "Qué hace cada servicio"),
    practical: t("During the session", "Durante la sesión"),
  },
  needs: [
    {
      id: "feet",
      label: t("Tired feet", "Pies cansados"),
      service: "reflexology" as ServiceSlug,
      note: t(
        "Pressure on the points of the feet. Not a full-body massage.",
        "Presión en los puntos de los pies. No es un masaje de cuerpo completo.",
      ),
    },
    {
      id: "knots",
      label: t("A stiff back", "Espalda rígida"),
      service: "deep-tissue" as ServiceSlug,
      note: t(
        "Slow pressure into the deeper muscle, on the area that is tight.",
        "Presión lenta en el músculo más profundo, en la zona que está tensa.",
      ),
    },
    {
      id: "easy",
      label: t("A full-body hour", "Una hora de cuerpo completo"),
      service: "swedish" as ServiceSlug,
      note: t(
        "Oil, gliding, and kneading at a light to moderate pressure.",
        "Aceite, deslizamiento y amasamiento, con presión de suave a moderada.",
      ),
    },
    {
      id: "move",
      label: t("Stretching", "Estiramientos"),
      service: "thai" as ServiceSlug,
      note: t(
        "Pressure plus assisted stretches. Usually clothed. Call and ask if Thai is offered.",
        "Presión más estiramientos asistidos. Por lo general vestido. Llame y pregunte si hay tailandés.",
      ),
    },
    {
      id: "heat",
      label: t("Heat on the back", "Calor en la espalda"),
      service: "hot-stone" as ServiceSlug,
      note: t(
        "Heated stones placed on the body so the muscle warms. You can decline them.",
        "Piedras calientes colocadas sobre el cuerpo para que el músculo se entibie. Puede rechazarlas.",
      ),
    },
    {
      id: "new",
      label: t("I’ve never been", "Nunca he ido"),
      service: "reflexology" as ServiceSlug,
      note: t(
        "Foot reflexology is a simple first visit. Ask what you want when you call.",
        "La reflexología podal es una primera visita sencilla. Diga lo que quiere cuando llame.",
      ),
    },
  ],
};

export function pathFor(lang: Lang, page: PageId): string {
  const root = lang === "es" ? "/es" : "";
  if (page === "home") return root || "/";
  return `${root}/${page}`;
}

export function servicePath(lang: Lang, slug: ServiceSlug): string {
  const root = lang === "es" ? "/es" : "";
  return `${root}/services/${slug}`;
}

export function locationPath(lang: Lang, slug: LocationSlug): string {
  const root = lang === "es" ? "/es" : "";
  return `${root}/locations/${slug}`;
}

export function otherLangPath(pathname: string): { lang: Lang; href: string } {
  const es = pathname === "/es" || pathname.startsWith("/es/");
  if (es) {
    const stripped = pathname.replace(/^\/es/, "") || "/";
    return { lang: "en", href: stripped };
  }
  if (pathname === "/") return { lang: "es", href: "/es" };
  return { lang: "es", href: `/es${pathname}` };
}

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getLocation(slug: string) {
  return locations.find((l) => l.slug === slug);
}

export function formatAddress(slug: LocationSlug): string {
  const loc = locations.find((l) => l.slug === slug)!;
  return `${loc.street}, ${loc.city}, ${loc.region} ${loc.postal}`;
}

export type Seo = {
  title: string;
  description: string;
  path: string;
  altPath: string;
  lang: Lang;
};

const seoTable: Record<PageId, Record<Lang, { title: string; description: string }>> = {
  home: {
    en: {
      title: "Asian Foot Spa · Phoenixville",
      description:
        "Foot reflexology and body work at 245 Schuylkill Road, Phoenixville. Open 7 days, 10 a.m. to 9 p.m. Call (215) 433-6969.",
    },
    es: {
      title: "Asian Foot Spa · Phoenixville",
      description:
        "Reflexología de pies y trabajo corporal en 245 Schuylkill Road, Phoenixville. Abierto los 7 días, de 10 a. m. a 9 p. m. Llame al (215) 433-6969.",
    },
  },
  services: {
    en: {
      title: "Massage menu · Asian Foot Spa",
      description:
        "What each massage is, and the posted menu, at 245 Schuylkill Road.",
    },
    es: {
      title: "Menú de masajes · Asian Foot Spa",
      description:
        "Qué es cada masaje, y el menú publicado, en 245 Schuylkill Road.",
    },
  },
  locations: {
    en: {
      title: "The Phoenixville studio · Asian Foot Spa",
      description:
        "245 Schuylkill Rd, Phoenixville, PA 19460. The storefront, waiting room, treatment table, and reflexology chair.",
    },
    es: {
      title: "El estudio de Phoenixville · Asian Foot Spa",
      description:
        "245 Schuylkill Rd, Phoenixville, PA 19460. La fachada, la sala de espera, la camilla y el sillón de reflexología.",
    },
  },
  reviews: {
    en: {
      title: "Reviews · Asian Foot Spa",
      description:
        "Google review summary for Asian Foot Spa in Phoenixville: 4.4 from 47 reviews.",
    },
    es: {
      title: "Reseñas · Asian Foot Spa",
      description:
        "Comentarios públicos seleccionados y las cifras de Google y Yelp de Asian Foot Spa en 245 Schuylkill Road.",
    },
  },
  faq: {
    en: {
      title: "Questions · Asian Foot Spa",
      description:
        "Hours on the door, what each service does, hot stones, what to wear, and how to call the Phoenixville studio.",
    },
    es: {
      title: "Preguntas · Asian Foot Spa",
      description:
        "El horario de la puerta, qué hace cada servicio, las piedras calientes, qué vestir y cómo llamar al estudio de Phoenixville.",
    },
  },
  gallery: {
    en: {
      title: "Gallery · Asian Foot Spa",
      description:
        "Photographs of the Phoenixville studio: the storefront, waiting room, massage table, reflexology chair, and hot stones.",
    },
    es: {
      title: "Galería · Asian Foot Spa",
      description:
        "Fotografías del estudio de Phoenixville: la fachada, la sala de espera, la camilla, el sillón de reflexología y las piedras.",
    },
  },
  visit: {
    en: {
      title: "Plan a visit · Asian Foot Spa",
      description:
        "Call (215) 433-6969. 245 Schuylkill Road, Phoenixville. Open 7 days, 10 a.m. to 9 p.m.",
    },
    es: {
      title: "Planear la visita · Asian Foot Spa",
      description:
        "Llame al (215) 433-6969. 245 Schuylkill Road, Phoenixville. Abierto los 7 días, de 10 a. m. a 9 p. m.",
    },
  },
  privacy: {
    en: {
      title: "Privacy · Asian Foot Spa",
      description:
        "What this website collects, how the map works, and how to reach the Phoenixville studio.",
    },
    es: {
      title: "Privacidad · Asian Foot Spa",
      description:
        "Qué recoge este sitio, cómo funciona el mapa y cómo contactar al estudio de Phoenixville.",
    },
  },
};

export function pageSeo(lang: Lang, page: PageId): Seo {
  const copy = seoTable[page][lang];
  return {
    title: copy.title,
    description: copy.description,
    path: pathFor("en", page),
    altPath: pathFor("es", page),
    lang,
  };
}

export function serviceSeo(lang: Lang, slug: string): Seo | undefined {
  const service = getService(slug);
  if (!service) return undefined;
  return {
    title: `${service.name[lang]} · Asian Foot Spa`,
    description: service.summary[lang],
    path: servicePath("en", service.slug),
    altPath: servicePath("es", service.slug),
    lang,
  };
}

export function locationSeo(lang: Lang, slug: string): Seo | undefined {
  const loc = getLocation(slug);
  if (!loc) return undefined;
  return {
    title:
      lang === "en"
        ? `${loc.name.en} studio · Asian Foot Spa`
        : `Estudio de ${loc.name.es} · Asian Foot Spa`,
    description: `${formatAddress(loc.slug)}. ${loc.phoneDisplay}. ${loc.hours[lang]}`,
    path: locationPath("en", loc.slug),
    altPath: locationPath("es", loc.slug),
    lang,
  };
}

export function searchIndex(lang: Lang): Array<{ title: string; href: string; blurb: string }> {
  const pages: Array<{ title: Localized; href: PageId; blurb: Localized }> = [
    { title: t("Home", "Inicio"), href: "home", blurb: t("The Phoenixville studio and the posted menu.", "El estudio de Phoenixville y el menú publicado.") },
    { title: t("Visit", "Visita"), href: "visit", blurb: t("How a visit works, the phone, and the address.", "Cómo es la visita, el teléfono y la dirección.") },
    { title: t("Reviews", "Reseñas"), href: "reviews", blurb: t("Public quotes and rating sources.", "Citas públicas y fuentes de calificación.") },
    { title: t("Gallery", "Galería"), href: "gallery", blurb: ui.illustrative },
    { title: t("Privacy", "Privacidad"), href: "privacy", blurb: t("Maps, links, and what this site stores.", "Mapas, enlaces y qué guarda este sitio.") },
  ];
  return [
    ...pages.map((p) => ({ title: p.title[lang], href: pathFor(lang, p.href), blurb: p.blurb[lang] })),
    ...services.map((s) => ({ title: s.name[lang], href: servicePath(lang, s.slug), blurb: s.summary[lang] })),
    ...locations.map((l) => ({
      title: l.name[lang],
      href: locationPath(lang, l.slug),
      blurb: `${l.street}, ${l.phoneDisplay}`,
    })),
    ...faqs.map((f) => ({ title: f.q[lang], href: `${pathFor(lang, "faq")}#${f.id}`, blurb: f.a[lang].slice(0, 140) })),
  ];
}

export const crumbs = {
  services: t("Services", "Servicios"),
  locations: t("Studio", "Estudio"),
};
