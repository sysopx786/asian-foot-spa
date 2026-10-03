export type Lang = "en" | "es" | "zh";

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

const t = (en: string, es: string, zh: string): Localized => ({ en, es, zh });

/** Public file URL. GitHub Pages serves this site from /asian-foot-spa/. */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL || "/";
  return `${base}${path.replace(/^\//, "")}`;
}

export const brand = {
  name: "Asian Foot Spa",
  region: t("245 Schuylkill Road, Phoenixville", "245 Schuylkill Road, Phoenixville", "245 Schuylkill Road, Phoenixville"),
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
    name: t("Phoenixville", "Phoenixville", "Phoenixville"),
    street: "245 Schuylkill Rd",
    city: "Phoenixville",
    region: "PA",
    postal: "19460",
    phoneDisplay: "(215) 433-6969",
    phoneTel: "+12154336969",
    open: "10:00",
    close: "21:00",
    hours: t("Open 7 days, 10:00 a.m. – 9:00 p.m.", "Abierto los 7 días, 10:00 a. m. – 9:00 p. m.", "每周 7 天营业，上午 10:00 至晚上 9:00。"),
    hoursNote: t("Those hours are printed on the glass door: “Open 7 Days” and “10am–9pm,” under the phone number.", "Ese horario está impreso en la puerta de vidrio: “Open 7 Days” y “10am–9pm”, debajo del teléfono.", "这些时间印在玻璃门上：“Open 7 Days”和“10am–9pm”，在电话号码下面。"),
    blurb: t("The Phoenixville studio.", "El estudio de Phoenixville.", "Phoenixville 工作室。"),
    detail: t("The studio is at 245 Schuylkill Road. The sign reads Asian Foot Spa. The door has the phone and the hours.", "El estudio está en 245 Schuylkill Road. El letrero dice Asian Foot Spa. La puerta tiene el teléfono y el horario.", "工作室在 245 Schuylkill Road。招牌写着 Asian Foot Spa。门上有电话和营业时间。"),
    nearby: t("The studio is on Schuylkill Road in Phoenixville. Guests also come from Spring City, Royersford, Collegeville, and Oaks.", "El estudio está en Schuylkill Road, en Phoenixville. También llegan clientes desde Spring City, Royersford, Collegeville y Oaks.", "工作室在 Phoenixville 的 Schuylkill Road。也有客人从 Spring City、Royersford、Collegeville 和 Oaks 过来。"),
    email: "lulu831121@163.com",
    links: [
      { label: "Google", href: "https://www.google.com/search?q=Asian+Foot+Spa+245+Schuylkill+Rd+Phoenixville" },
      { label: "Yelp", href: "https://www.yelp.com/biz/asian-foot-spa-phoenixville" },
      { label: "Facebook", href: "https://www.facebook.com/massage2154336969/" },
    ],
    ratings: [
      {
        source: "Google",
        figure: t("4.4 · 47", "4.4 · 47", "4.4 · 47"),
        note: t(
          "Google’s review summary for this listing: 4.4 from 47 reviews. An older Birdeye page showed 4.6 from 177. Open Google for the live count. Ratings are separate from the room photographs.",
          "El resumen de reseñas de Google para este listado: 4.4 de 47 reseñas. Una página anterior de Birdeye mostraba 4.6 de 177. Abra Google para la cifra en vivo. Las calificaciones son aparte de las fotografías de las salas.",
          "这是该列表的 Google 评价摘要：47 条评价，4.4 分。较早的 Birdeye 页面显示 177 条、4.6 分。实时数字请看 Google。评分和房间照片是两回事。",
        ),
        href: "https://www.google.com/maps/place/Asian+Foot+Spa/@40.1355242,-75.5411721,17z/data=!4m8!3m7!1s0x89c68f9dcd5af255:0x851b8e9be0f49fa1!8m2!3d40.1355242!4d-75.5411721!9m1!1b1",
      },
      {
        source: "Yelp",
        figure: t("2.8 · 5", "2.8 · 5", "2.8 · 5"),
        note: t("Yelp’s page for this address, from a small set of reviews. It is not a description of the rooms.", "La página de Yelp de esta dirección, con un grupo pequeño de reseñas. No es una descripción de las salas.", "这是该地址的 Yelp 页面，评价数量不多。它不是对房间的描述。"),
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
    name: t("Foot reflexology", "Reflexología podal", "足底反射"),
    minutes: t("On the feet", "En los pies", "在足部"),
    summary: t("Thumb and finger pressure on mapped points of the feet. Not a full-body massage.", "Presión con pulgares y dedos en puntos mapeados de los pies. No es un masaje de cuerpo completo.", "用拇指和手指按足部已标出的点。不是全身按摩。"),
    body: t("Foot reflexology is pressure, usually with the thumbs and fingers, on specific points of the soles, arches, heels, the balls of the feet, and the toes. A reflexology chart maps those points to other areas of the body. The work stays on the feet. It does not diagnose illness, and it is not a substitute for medical care. A heated stone may rest against the foot during the session. The studio window calls this hot stone foot spa.", "La reflexología podal es presión, por lo general con los pulgares y los dedos, en puntos concretos de las plantas, los arcos, los talones, los metatarsos y los dedos. Un mapa de reflexología relaciona esos puntos con otras zonas del cuerpo. El trabajo se queda en los pies. No diagnostica una enfermedad y no sustituye la atención médica. Una piedra caliente puede apoyarse en el pie durante la sesión. La ventana del estudio lo llama spa de pies con piedras calientes.", "足底反射是按压，通常用拇指和手指，按足底、足弓、足跟、前脚掌和脚趾上的特定点。反射图把这些点对应到身体的其他部位。手法只在足部。它不诊断疾病，也不能代替医疗。做的时候，一块热石可能会靠在脚上。工作室橱窗把这项称为 hot stone foot spa。"),
    expect: t("Shoes and socks come off. You can stay dressed otherwise. Say if a point is too sharp.", "Se quitan zapatos y calcetines. Puede permanecer vestido en lo demás. Diga si un punto está demasiado agudo.", "脱掉鞋袜。其余可以穿着。如果某个点太疼，请说。"),
    goodFor: t("Someone who wants the session on the feet, not a full-body massage.", "Alguien que quiere la sesión en los pies, no un masaje de cuerpo completo.", "想把时间用在足部、而不是全身按摩的人。"),
    limit: t("Skip it, or say so first, if you have an open cut, a fresh foot injury, or a medical restriction on the feet.", "Evítala, o dígalo primero, si tiene un corte abierto, una lesión reciente en el pie o una restricción médica en los pies.", "如果足部有开放伤口、新伤，或医嘱限制足部操作，就不要做，或先说明。"),
    studios: t("At the Phoenixville studio. Time and price are on the menu.", "En el estudio de Phoenixville. El tiempo y el precio están en el menú.", "在 Phoenixville 工作室。时间和价格在菜单上。"),
  },
  {
    slug: "swedish",
    name: t("Swedish massage", "Masaje sueco", "瑞典式按摩"),
    minutes: t("On the table", "En la camilla", "在按摩床上"),
    summary: t("Classical Western massage: oil, gliding, kneading, and a light to moderate pressure.", "Masaje clásico occidental: aceite, deslizamiento, amasamiento y una presión de suave a moderada.", "西方古典按摩：用油，滑动、揉捏，压力轻到中等。"),
    body: t("Swedish massage is the classical Western massage. The therapist uses oil or lotion and the standard strokes: effleurage, long gliding along the muscle; petrissage, kneading and lifting the tissue; friction, small focused circles; tapotement, rhythmic tapping; and vibration. Pressure is generally light to moderate. The intent is to warm the superficial tissue, ease general tension, and help the body settle. You are draped, and only the area being worked is uncovered. It is not deep tissue, and it is not shiatsu.", "El masaje sueco es el masaje clásico occidental. La terapeuta usa aceite o loción y los movimientos básicos: effleurage, un deslizamiento largo a lo largo del músculo; petrissage, amasar y levantar el tejido; fricción, círculos pequeños y localizados; tapotement, percusión rítmica; y vibración. La presión suele ser de suave a moderada. La intención es entibiar el tejido superficial, aliviar la tensión general y ayudar al cuerpo a asentarse. Permanece cubierto, y solo se descubre la zona en la que se trabaja. No es tejido profundo y no es shiatsu.", "瑞典式按摩是西方古典按摩。技师使用按摩油或乳液，以及基本手法：effleurage，沿肌肉长距离滑动；petrissage，揉捏并提起组织；friction，小范围定点画圈；tapotement，有节奏地叩击；以及 vibration。压力一般为轻到中等。目的是让浅层组织变暖，缓解一般紧张，让身体安定下来。身体盖着布，只露出正在做的部位。它不是深层组织按摩，也不是指压。"),
    expect: t("Undress to your comfort and stay under the drape. Say if you want the pressure lighter or firmer.", "Desvístase hasta donde se sienta cómodo y permanezca bajo la sábana. Diga si quiere la presión más suave o más firme.", "按自己的舒适程度更衣，并留在盖布下面。如果想轻一点或重一点，请说。"),
    goodFor: t("A first full-body massage, or a session for general tension rather than one deep spot.", "Un primer masaje de cuerpo completo, o una sesión para la tensión general y no para un solo punto profundo.", "第一次做全身按摩，或想缓解一般紧张、而不是某一个深层部位。"),
    limit: t("It is not medical treatment. Say so if something should not be rubbed, pressed, or oiled.", "No es un tratamiento médico. Dígalo si algo no debe frotarse, presionarse o aceitarse.", "这不是医疗。如果某处不能揉、不能按、不能上油，请说明。"),
    studios: t("Ask for Swedish when you call. Time and price are on the menu.", "Pida el sueco cuando llame. El tiempo y el precio están en el menú.", "打电话时说要瑞典式。时间和价格在菜单上。"),
  },
  {
    slug: "deep-tissue",
    name: t("Deep tissue", "Tejido profundo", "深层组织按摩"),
    minutes: t("On the table", "En la camilla", "在按摩床上"),
    summary: t("Slow, sustained pressure into deeper muscle and fascia. Firm is not the same as painful.", "Presión lenta y sostenida en el músculo y la fascia más profundos. Firme no es lo mismo que doloroso.", "缓慢、持续地按入较深的肌肉和筋膜。有力不等于疼痛。"),
    body: t("Deep tissue massage works the deeper layers of muscle and connective tissue. The therapist uses slow strokes and sustained pressure, often with the fingers, knuckles, forearms, or elbows, following the direction of the muscle instead of gliding over it. The work is for chronic tightness and specific areas, not a light pass over the whole body. You should still be able to breathe and talk. It is not physical therapy, and it does not repair an injury.", "El masaje de tejido profundo trabaja las capas más profundas del músculo y del tejido conectivo. La terapeuta usa movimientos lentos y presión sostenida, a menudo con los dedos, los nudillos, los antebrazos o los codos, siguiendo la dirección del músculo en lugar de deslizarse por encima. El trabajo es para la tensión crónica y zonas concretas, no un pase suave por todo el cuerpo. Aun así debe poder respirar y hablar. No es fisioterapia y no repara una lesión.", "深层组织按摩做的是较深的肌肉和结缔组织。技师用缓慢的手法和持续的压力，常用手指、指节、前臂或肘，顺着肌肉的方向，而不是从表面滑过。针对的是长期紧绷和具体部位，不是在全身轻轻过一遍。你仍然应当能呼吸、能说话。它不是物理治疗，也不能修复损伤。"),
    expect: t("Point out the area before the work starts. Say less or more once the pressure is on you.", "Señale la zona antes de que empiece el trabajo. Diga menos o más cuando la presión ya esté sobre usted.", "开始之前指出部位。压力上去之后，说轻一点或重一点。"),
    goodFor: t("Ongoing tightness in the neck, shoulders, back, or hips, when you want slower, deeper work.", "Tensión persistente en el cuello, los hombros, la espalda o las caderas, cuando quiere un trabajo más lento y profundo.", "颈、肩、背或髋长期紧绷，想要更慢、更深的手法。"),
    limit: t("Skip it on a bruise, an acute injury, or anywhere you have been told to avoid pressure.", "Evítalo sobre un moretón, una lesión aguda o donde le hayan indicado evitar la presión.", "瘀青、急性损伤，或医嘱避免按压的地方，不要做。"),
    studios: t("Ask for deep tissue when you call. Time and price are on the menu.", "Pida tejido profundo cuando llame. El tiempo y el precio están en el menú.", "打电话时说要深层组织。时间和价格在菜单上。"),
  },
  {
    slug: "shiatsu",
    name: t("Shiatsu", "Shiatsu", "指压"),
    minutes: t("Usually clothed", "Por lo general vestido", "通常着衣"),
    summary: t("Japanese finger-pressure along meridians. Usually clothed, and usually without oil.", "Presión japonesa con los dedos a lo largo de los meridianos. Por lo general vestido, y por lo general sin aceite.", "沿经络做的日本指压。通常穿着衣服，通常不用油。"),
    body: t("Shiatsu is Japanese bodywork. The practitioner applies rhythmic, sustained pressure with the thumbs, fingers, and palms to points along meridian lines, and may add stretches or joint mobilization. Traditionally you stay clothed, the work is done without oil, and it is often given on a mat rather than with gliding strokes on a table. It is not Swedish massage. The meridians are a bodywork map, not a medical test, and shiatsu does not diagnose illness.", "El shiatsu es un trabajo corporal japonés. Quien lo aplica usa presión rítmica y sostenida con los pulgares, los dedos y las palmas en puntos a lo largo de los meridianos, y puede añadir estiramientos o movilización de las articulaciones. Por tradición permanece vestido, el trabajo se hace sin aceite y a menudo sobre una colchoneta, no con deslizamientos en una camilla. No es masaje sueco. Los meridianos son un mapa de trabajo corporal, no una prueba médica, y el shiatsu no diagnostica una enfermedad.", "指压是日本身体手法。施术者用拇指、手指和手掌，沿经络上的点做有节奏的持续按压，也可能加上拉伸或关节活动。传统上客人穿着衣服，不用油，常常在垫子上做，而不是在床上做滑动手法。它不是瑞典式按摩。经络是手法上的图，不是医学检查，指压也不诊断疾病。"),
    expect: t("Wear loose clothes. Say which areas you do not want pressed.", "Vista ropa holgada. Diga qué zonas no quiere que presionen.", "穿宽松的衣服。说明哪些部位不要按。"),
    goodFor: t("Someone who wants pressure and stretching without oil on the skin.", "Alguien que quiere presión y estiramiento sin aceite sobre la piel.", "想要按压和拉伸、又不想在皮肤上用油的人。"),
    limit: t("Skip pressure on an acute injury, a fracture, or where you have been told not to be pressed.", "Evite la presión sobre una lesión aguda, una fractura o donde le hayan indicado que no lo presionen.", "急性损伤、骨折，或医嘱不能按的地方，不要按。"),
    studios: t("Shiatsu is not named on the menu card. Call and ask if a therapist is offering it.", "El shiatsu no está nombrado en la tarjeta del menú. Llame y pregunte si una terapeuta lo ofrece.", "菜单卡上没有写指压。请打电话问是否有技师做。"),
  },
  {
    slug: "thai",
    name: t("Thai massage", "Masaje tailandés", "泰式按摩"),
    minutes: t("Usually clothed", "Por lo general vestido", "通常着衣"),
    summary: t("Pressure along sen lines, plus assisted stretches. Usually clothed, without oil.", "Presión a lo largo de las líneas sen, más estiramientos asistidos. Por lo general vestido, sin aceite.", "沿 sen 线按压，再加上辅助拉伸。通常着衣，不用油。"),
    body: t("Thai massage combines acupressure with assisted stretching. The practitioner presses with the palms, thumbs, elbows, knees, or feet along sen lines, then moves a limb through a slow stretch and holds it. You usually wear loose clothes and receive the work on a mat, without oil. It is active. It is not the same as lying still for a Swedish massage.", "El masaje tailandés combina la acupresión con estiramientos asistidos. Quien lo aplica presiona con las palmas, los pulgares, los codos, las rodillas o los pies a lo largo de las líneas sen, y luego mueve una extremidad en un estiramiento lento y lo sostiene. Por lo general viste ropa holgada y recibe el trabajo en una colchoneta, sin aceite. Es activo. No es lo mismo que quedarse quieto para un masaje sueco.", "泰式按摩把穴位按压和辅助拉伸放在一起。施术者用手掌、拇指、肘、膝或脚沿 sen 线按压，然后把肢体缓慢拉开并保持。通常穿宽松衣服，在垫子上做，不用油。过程是活动的。这和躺着不动做瑞典式按摩不是一回事。"),
    expect: t("Wear clothes you can move in. Name any joint you do not want stretched.", "Vista ropa en la que pueda moverse. Nombre cualquier articulación que no quiera que estiren.", "穿方便活动的衣服。说明哪个关节不要拉。"),
    goodFor: t("Someone who wants stretching in the session, not only hands on a still body.", "Alguien que quiere estiramientos en la sesión, no solo manos sobre un cuerpo quieto.", "想在过程里做拉伸，而不只是对手放在静止身体上的人。"),
    limit: t("Skip it if you have been told not to stretch, or if you want to stay still on the table.", "Evítalo si le han dicho que no se estire, o si quiere quedarse quieto en la camilla.", "如果医嘱不能拉伸，或你想躺在床上不动，就不要做。"),
    studios: t("Thai is not named on the menu card. Call and ask if it is offered.", "El tailandés no está nombrado en la tarjeta del menú. Llame y pregunte si se ofrece.", "菜单卡上没有写泰式。请打电话问是否提供。"),
  },
  {
    slug: "hot-stone",
    name: t("Hot stone", "Piedras calientes", "热石"),
    minutes: t("With a massage", "Con un masaje", "配合按摩"),
    summary: t("Heated stones placed on the body, or held in the hand, to warm the muscle.", "Piedras calientes colocadas sobre el cuerpo, o sostenidas en la mano, para entibiar el músculo.", "把加热的石头放在身上，或握在手里，用来温暖肌肉。"),
    body: t("Hot stone massage uses smooth basalt stones that have been heated. Stones are placed on the body, and the therapist may also hold a stone and massage with it. The heat is meant to warm the muscle so the tissue softens. A stone may also rest against the foot during foot work. The stones should feel warm, not burning. You can refuse them. This is part of a massage, not a medical heat treatment.", "El masaje con piedras calientes usa piedras de basalto lisas que se han calentado. Las piedras se colocan sobre el cuerpo, y la terapeuta también puede sostener una piedra y masajear con ella. El calor busca entibiar el músculo para que el tejido ceda. Una piedra también puede apoyarse en el pie durante el trabajo de pies. Las piedras deben sentirse tibias, no quemar. Puede rechazarlas. Esto es parte de un masaje, no un tratamiento médico con calor.", "热石按摩用的是加热过的光滑玄武岩石。石头放在身上，技师也可以握着石头来按。热的作用是让肌肉变暖、组织松一些。做足部时，石头也可能靠在脚上。石头应当是温的，不是烫的。你可以拒绝。这是按摩的一部分，不是医疗热疗。"),
    expect: t("Say immediately if a stone is too hot. You can decline the stones before they are used.", "Diga de inmediato si una piedra está demasiado caliente. Puede rechazar las piedras antes de que las usen.", "如果石头太烫，马上说。使用之前也可以拒绝。"),
    goodFor: t("A massage when you want heat on the back or the feet.", "Un masaje cuando quiere calor en la espalda o en los pies.", "想在背部或足部加温的一次按摩。"),
    limit: t("Do not use hot stones if you have reduced sensation, a burn, or a reason to avoid heat.", "No use piedras calientes si tiene menos sensibilidad, una quemadura o un motivo para evitar el calor.", "如果感觉减退、有烫伤，或有理由避免热，就不要用热石。"),
    studios: t("The window mentions hot stone. What is included is printed on the menu.", "La ventana menciona las piedras calientes. Lo que está incluido está impreso en el menú.", "橱窗提到了热石。包含哪些，印在菜单上。"),
  },
  {
    slug: "aromatherapy",
    name: t("Aromatherapy", "Aromaterapia", "芳香疗法"),
    minutes: t("With a massage", "Con un masaje", "配合按摩"),
    summary: t("Essential oil, diluted in a carrier oil, applied during a massage.", "Aceite esencial, diluido en un aceite base, aplicado durante un masaje.", "精油稀释在基础油里，在按摩时涂上。"),
    body: t("Aromatherapy massage is a massage in which essential oils, diluted in a carrier oil, are applied to the skin during the strokes. The method is still the massage. The oil adds a scent. It does not diagnose or treat illness, sleep, or mood. If fragrance is a problem, the oils are optional.", "El masaje de aromaterapia es un masaje en el que se aplican aceites esenciales, diluidos en un aceite base, sobre la piel durante los movimientos. El método sigue siendo el masaje. El aceite añade un aroma. No diagnostica ni trata una enfermedad, el sueño o el ánimo. Si la fragancia es un problema, los aceites son opcionales.", "芳香疗法按摩，是在按摩手法中把稀释于基础油的精油涂在皮肤上。方法仍然是按摩。油带来气味。它不诊断、也不治疗疾病、睡眠或情绪。如果不能接受香味，可以不用精油。"),
    expect: t("Say if you are sensitive to scent, pregnant, or want unscented oil only.", "Diga si es sensible al aroma, está embarazada o quiere solo aceite sin aroma.", "如果对气味敏感、怀孕，或只要无香的油，请说明。"),
    goodFor: t("A massage when you want the oil to carry a scent.", "Un masaje cuando quiere que el aceite lleve un aroma.", "想让按摩油带有气味的一次按摩。"),
    limit: t("Skip scented oil if fragrance bothers you. Scent is not medical care.", "Evite el aceite con aroma si la fragancia le molesta. El aroma no es atención médica.", "如果香味让你不舒服，就不要用有香的油。气味不是医疗。"),
    studios: t("Aromatherapy is not a separate line on the menu. Ask when you call.", "La aromaterapia no es una línea aparte en el menú. Pregunte cuando llame.", "芳香疗法不是菜单上的单独一行。打电话时问。"),
  },
  {
    slug: "couples",
    name: t("Couples massage", "Masaje en pareja", "情侣按摩"),
    minutes: t("Two guests", "Dos personas", "两位客人"),
    summary: t("Two people receive massage in the same appointment. Each person gets a massage.", "Dos personas reciben masaje en la misma cita. Cada persona recibe un masaje.", "两个人在同一次预约里接受按摩。每个人都有一次按摩。"),
    body: t("Couples massage means two people are booked for the same time, and each receives a massage. It is a way of booking, not a different technique. Each person can still ask for the kind of work they want. Call and ask how the studio sets up two guests.", "El masaje en pareja significa que dos personas se reservan para la misma hora y cada una recibe un masaje. Es una forma de reservar, no una técnica distinta. Cada persona puede pedir el tipo de trabajo que quiere. Llame y pregunte cómo acomoda el estudio a dos personas.", "情侣按摩是指两个人约在同一时间，每人接受一次按摩。这是预约方式，不是另一种手法。每个人仍可以要求自己想要的做法。请打电话问工作室如何安排两位客人。"),
    expect: t("Say that you are two people, and what each person wants.", "Diga que son dos personas y qué quiere cada una.", "说明是两个人，以及每个人要什么。"),
    goodFor: t("Two guests who want the same appointment.", "Dos clientes que quieren la misma cita.", "想约在同一时间的两位客人。"),
    limit: t("It is not a way to split one session between strangers.", "No es una forma de partir una sesión entre desconocidos.", "这不是把一次按摩分给不相识的人。"),
    studios: t("Couples massage is on the menu. Call and ask how both people are seated.", "El masaje en pareja está en el menú. Llame y pregunte cómo se sientan las dos personas.", "情侣按摩在菜单上。请打电话问两个人如何安排座位。"),
  },
  {
    slug: "cupping",
    name: t("Cupping", "Ventosas", "拔罐"),
    minutes: t("Suction", "Succión", "吸力"),
    summary: t("Cups on the skin create suction and lift the tissue. Not a gliding massage stroke.", "Las copas sobre la piel crean succión y levantan el tejido. No es un movimiento de masaje deslizante.", "罐子放在皮肤上产生吸力，把组织吸起来。不是滑动的按摩手法。"),
    body: t("Cupping places cups on the skin so the air inside creates suction. The suction lifts soft tissue into the cup. Cups may sit in one place, or glide over oiled skin, and are then removed. This is not a Swedish stroke. Circular marks can remain for a few days. Those marks are from the suction. Cupping is not medical treatment.", "Las ventosas colocan copas sobre la piel para que el aire interior cree succión. La succión levanta el tejido blando hacia la copa. Las copas pueden quedarse en un sitio, o deslizarse sobre la piel aceitada, y luego se retiran. Esto no es un movimiento sueco. Las marcas circulares pueden durar unos días. Esas marcas son de la succión. Las ventosas no son un tratamiento médico.", "拔罐是把罐子放在皮肤上，让罐内空气形成吸力。吸力把软组织吸进罐子里。罐子可以停在一处，也可以在涂了油的皮肤上滑动，然后取下。这不是瑞典式的滑动手法。圆形痕迹可能留几天。痕迹来自吸力。拔罐不是医疗。"),
    expect: t("Say if you want only a few cups, or none on a particular spot.", "Diga si solo quiere unas pocas copas, o ninguna en un punto concreto.", "如果只要几个罐子，或某个位置不要放，请说明。"),
    goodFor: t("Someone who wants suction on a tight area, along with massage or instead of hands alone.", "Alguien que quiere succión en una zona tensa, junto con el masaje o en lugar de solo las manos.", "想在紧绷的部位用吸力，可以和按摩一起，也可以不只用手。"),
    limit: t("Skip cupping on broken skin, a fresh injury, or if you have been told to avoid suction.", "Evite las ventosas sobre piel abierta, una lesión reciente o si le indicaron evitar la succión.", "破损的皮肤、新伤，或医嘱避免吸拔的地方，不要拔罐。"),
    studios: t("Cupping is on the menu.", "Las ventosas están en el menú.", "拔罐在菜单上。"),
  },
];

export const menuPhoto = {
  src: asset("media/menu.jpg"),
  alt: t("The menu.", "El menú.", "菜单。"),
  caption: t("The menu.", "El menú.", "菜单。"),
};

export const rates: Array<{ id: string; name: Localized; price: string; detail: Localized }> = [
  {
    id: "30",
    name: t("30 min, body or foot", "30 min, cuerpo o pies", "30 分钟，身体或足部"),
    price: "$50",
    detail: t("Printed as 30min body/foot.", "Impreso como 30min body/foot.", "印作 30min body/foot。"),
  },
  {
    id: "60",
    name: t("60 min, body or foot", "60 min, cuerpo o pies", "60 分钟，身体或足部"),
    price: "$70",
    detail: t("Printed as 60min body/foot.", "Impreso como 60min body/foot.", "印作 60min body/foot。"),
  },
  {
    id: "90",
    name: t("90 min, body or foot", "90 min, cuerpo o pies", "90 分钟，身体或足部"),
    price: "$100",
    detail: t("Printed as 90min body/foot.", "Impreso como 90min body/foot.", "印作 90min body/foot。"),
  },
  {
    id: "120",
    name: t("120 min, body or foot", "120 min, cuerpo o pies", "120 分钟，身体或足部"),
    price: "$130",
    detail: t("Printed as 120min body/foot.", "Impreso como 120min body/foot.", "印作 120min body/foot。"),
  },
  {
    id: "couples-60",
    name: t("Couples massage, 60 min", "Masaje en pareja, 60 min", "情侣按摩，60 分钟"),
    price: "$130",
    detail: t("Printed as Couples Massage 60min. Not marked per person.", "Impreso como Couples Massage 60min. No dice por persona.", "印作 Couples Massage 60min。没有标明每人。"),
  },
  {
    id: "couples-90",
    name: t("Couples massage, 90 min", "Masaje en pareja, 90 min", "情侣按摩，90 分钟"),
    price: "$190",
    detail: t("The 90min line under Couples Massage.", "La línea 90min bajo Couples Massage.", "Couples Massage 下面的 90min 那一行。"),
  },
  {
    id: "cupping",
    name: t("Cupping", "Ventosas", "拔罐"),
    price: "$15",
    detail: t("Its own line. No length is printed.", "Línea propia. No imprime duración.", "单独一行。没有印时长。"),
  },
];

export const cardFinePrint = t("The card says to pay the required rate on a credit or debit card. It does not mention cash. A second figure sits beside each rate: $3 on $50, $4.20 on $70, $6 on $100, $7.80 on $130, $11.40 on $190, and $0.90 on $15. Each is 6% of the number beside it. The card does not label those figures. The front window says Free Hot Stone. That is not a separate line on this card. Anything not printed here, ask by phone.", "La tarjeta dice que se pague la tarifa requerida con tarjeta de crédito o débito. No menciona efectivo. Una segunda cifra está junto a cada tarifa: $3 sobre $50, $4.20 sobre $70, $6 sobre $100, $7.80 sobre $130, $11.40 sobre $190 y $0.90 sobre $15. Cada una es el 6% del número de al lado. La tarjeta no etiqueta esas cifras. La ventana dice Free Hot Stone. Eso no es una línea aparte en esta tarjeta. Lo que no esté impreso aquí, pregunte por teléfono.", "卡片写明须用信用卡或借记卡支付规定价格。没有提到现金。每个价格旁另有一个数字：$50 旁是 $3，$70 旁是 $4.20，$100 旁是 $6，$130 旁是 $7.80，$190 旁是 $11.40，$15 旁是 $0.90。每个数字是旁边金额的 6%。卡片没有给这些数字加标签。橱窗写着 Free Hot Stone。那不是这张卡片上的单独一行。这里没印的，请打电话问。");

export const reviews: Array<{
  quote: Localized;
  name: string;
  source: string;
  where: Localized;
  href: string;
}> = [
  {
    quote: t("Amy and May are great. My hubby discovered this place and now we both love it. They took care of all my aches and pains and I left feeling very relaxed. It also included hot stones, a hot towel, and essential oils. Clean, neat, and professional.", "Amy y May son excelentes. Mi esposo descubrió el lugar y ahora a los dos nos encanta. Se ocuparon de todos mis dolores y salí muy relajada. También incluyó piedras calientes, una toalla caliente y aceites esenciales. Limpio, ordenado y profesional.", "Amy and May are great. My hubby discovered this place and now we both love it. They took care of all my aches and pains and I left feeling very relaxed. It also included hot stones, a hot towel, and essential oils. Clean, neat, and professional."),
    name: "Shubhada Menon",
    source: "Google",
    where: t("Phoenixville", "Phoenixville", "Phoenixville"),
    href: "https://reviews.birdeye.com/asian-foot-spa-169826051591637",
  },
  {
    quote: t("Wonderful. I was so relaxed I didn’t want to leave. Next time, a full massage along with the reflexology.", "Maravilloso. Estaba tan relajada que no quería irme. La próxima vez, un masaje completo junto con la reflexología.", "Wonderful. I was so relaxed I didn’t want to leave. Next time, a full massage along with the reflexology."),
    name: "Shirley Wolf",
    source: "Google",
    where: t("Phoenixville", "Phoenixville", "Phoenixville"),
    href: "https://reviews.birdeye.com/asian-foot-spa-169826051591637",
  },
  {
    quote: t("Friendly staff, great masseuses, and great pricing. I’d definitely recommend, and they typically can get you in the same day.", "Personal amable, muy buenas masajistas y buenos precios. Lo recomiendo, y por lo general pueden atenderle el mismo día.", "Friendly staff, great masseuses, and great pricing. I’d definitely recommend, and they typically can get you in the same day."),
    name: "Blake S.",
    source: "MapQuest",
    where: t("Phoenixville", "Phoenixville", "Phoenixville"),
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
    q: t("Where is the studio?", "¿Dónde está el estudio?", "工作室在哪里？"),
    a: t("245 Schuylkill Road, Phoenixville, PA 19460. The number 245 is on the glass beside the door, under the lighted sign that reads Asian Foot Spa. The phone on the door is (215) 433-6969.", "245 Schuylkill Road, Phoenixville, PA 19460. El número 245 está en el vidrio junto a la puerta, bajo el letrero iluminado que dice Asian Foot Spa. El teléfono de la puerta es (215) 433-6969.", "245 Schuylkill Road, Phoenixville, PA 19460。245 写在门边的玻璃上，在写着 Asian Foot Spa 的灯箱招牌下面。门上的电话是 (215) 433-6969。"),
  },
  {
    id: "hours",
    group: "visit",
    q: t("When are you open?", "¿Cuándo están abiertos?", "什么时候营业？"),
    a: t("The door says Open 7 Days, 10am–9pm. That is every day from 10:00 a.m. to 9:00 p.m. Call if you are arriving near the end of the night.", "La puerta dice Open 7 Days, 10am–9pm. Eso es todos los días de 10:00 a. m. a 9:00 p. m. Llame si llega cerca del final de la noche.", "门上写着 Open 7 Days, 10am–9pm。也就是每天上午 10:00 到晚上 9:00。如果接近晚上结束时才到，请先打电话。"),
  },
  {
    id: "appointment",
    group: "visit",
    q: t("Do I need an appointment?", "¿Necesito cita?", "需要预约吗？"),
    a: t("Call (215) 433-6969. Walk-ins are sometimes taken when a room is free, but the studio cannot promise that if you only show up. Say whether you want the feet or body work on the table.", "Llame al (215) 433-6969. A veces aceptan visitas sin cita si una sala está libre, pero el estudio no puede prometerlo si solo se presenta. Diga si quiere los pies o el trabajo corporal en la camilla.", "打 (215) 433-6969。房间空着时，有时可以接受没有预约的客人，但如果你只是直接上门，工作室不能保证有空。请说明要足部，还是床上的身体手法。"),
  },
  {
    id: "inside",
    group: "visit",
    q: t("What is inside?", "¿Qué hay adentro?", "里面有什么？"),
    a: t("A waiting room, a massage table, and a foot chair.", "Una sala de espera, una camilla y un sillón para los pies.", "等候室、一张按摩床，一把足部椅。"),
  },
  {
    id: "foot-does",
    group: "menu",
    q: t("What does foot reflexology do?", "¿Qué hace la reflexología podal?", "足底反射做什么？"),
    a: t("The therapist presses mapped points on the soles, arches, heels, and toes. It is work on the feet, not a full-body massage, and it does not diagnose illness. Time and price are on the menu.", "La terapeuta presiona puntos mapeados en las plantas, los arcos, los talones y los dedos. Es trabajo en los pies, no un masaje de cuerpo completo, y no diagnostica una enfermedad. El tiempo y el precio están en el menú.", "技师按足底、足弓、足跟和脚趾上已标出的点。这是足部的手法，不是全身按摩，也不诊断疾病。时间和价格在菜单上。"),
  },
  {
    id: "body-does",
    group: "menu",
    q: t("What is the difference between Swedish, deep tissue, and shiatsu?", "¿Cuál es la diferencia entre el sueco, el tejido profundo y el shiatsu?", "瑞典式、深层组织按摩和指压有什么不同？"),
    a: t("Swedish is oil massage with gliding and kneading at a light to moderate pressure. Deep tissue is slower pressure into deeper muscle, on specific tight areas. Shiatsu is Japanese finger pressure along meridians, usually clothed and without oil. Ask for the one you want. Time and price are on the menu.", "El sueco es masaje con aceite, deslizamiento y amasamiento, con presión de suave a moderada. El tejido profundo es presión más lenta en el músculo más profundo, en zonas tensas concretas. El shiatsu es presión japonesa con los dedos a lo largo de los meridianos, por lo general vestido y sin aceite. Pida el que quiere. El tiempo y el precio están en el menú.", "瑞典式是用油的按摩，滑动和揉捏，压力轻到中等。深层组织是更慢地按入较深的肌肉，做在具体紧绷的部位。指压是沿经络的日本指压，通常穿着衣服，不用油。要哪一种，请说。时间和价格在菜单上。"),
  },
  {
    id: "stones",
    group: "menu",
    q: t("What do hot stones do?", "¿Qué hacen las piedras calientes?", "热石做什么？"),
    a: t("Heated stones are placed on the body, or held in the hand, so the muscle warms. They should feel warm, not burning. You can decline them. What is included is on the menu.", "Las piedras calientes se colocan sobre el cuerpo, o se sostienen en la mano, para que el músculo se entibie. Deben sentirse tibias, no quemar. Puede rechazarlas. Lo que está incluido está en el menú.", "加热的石头放在身上，或握在手里，让肌肉变暖。应当是温的，不是烫的。可以拒绝。包含哪些，在菜单上。"),
  },
  {
    id: "thai-does",
    group: "menu",
    q: t("What does Thai massage do?", "¿Qué hace el masaje tailandés?", "泰式按摩做什么？"),
    a: t("Thai massage is pressure along sen lines plus assisted stretches. A limb is moved and held. You usually stay in loose clothes, without oil. It is not named on the menu card. Call and ask if it is offered.", "El masaje tailandés es presión a lo largo de las líneas sen más estiramientos asistidos. Una extremidad se mueve y se sostiene. Por lo general permanece con ropa holgada, sin aceite. No está nombrado en la tarjeta del menú. Llame y pregunte si se ofrece.", "泰式按摩是沿 sen 线的按压，加上辅助拉伸。肢体被移动并保持。通常穿宽松衣服，不用油。菜单卡上没有这一项。请打电话问是否提供。"),
  },
  {
    id: "couples-does",
    group: "menu",
    q: t("What is couples massage?", "¿Qué es el masaje en pareja?", "情侣按摩是什么？"),
    a: t("Two people receive massage in the same appointment. Each person gets a massage. It is on the menu. Call and ask how you will be seated.", "Dos personas reciben masaje en la misma cita. Cada persona recibe un masaje. Está en el menú. Llame y pregunte cómo se sentarán.", "两个人在同一次预约里接受按摩。每个人都有一次按摩。它在菜单上。请打电话问如何安排座位。"),
  },
  {
    id: "cupping-does",
    group: "menu",
    q: t("What does cupping do?", "¿Qué hacen las ventosas?", "拔罐做什么？"),
    a: t("Cups sit on the skin and lift the tissue with suction, then come off. It is not a gliding massage stroke. Marks can last a few days. Cupping is on the menu.", "Las copas se apoyan en la piel y levantan el tejido con succión, luego se retiran. No es un movimiento de masaje deslizante. Las marcas pueden durar unos días. Las ventosas están en el menú.", "罐子放在皮肤上，用吸力把组织吸起来，然后取下。这不是滑动的按摩手法。痕迹可能留几天。拔罐在菜单上。"),
  },
  {
    id: "price",
    group: "menu",
    q: t("What does a session cost?", "¿Cuánto cuesta una sesión?", "一次多少钱？"),
    a: t("Prices are on the menu. They are not repeated on the rest of the site.", "Los precios están en el menú. No se repiten en el resto del sitio.", "价格在菜单上。网站其他地方不再写一遍。"),
  },
  {
    id: "wear",
    group: "practical",
    q: t("What should I wear?", "¿Qué debo vestir?", "穿什么？"),
    a: t("For reflexology, ordinary clothes are fine; shoes and socks come off. For Swedish or deep tissue, undress to your comfort and stay draped. For shiatsu or Thai, wear clothes you can move in.", "Para la reflexología, la ropa de calle está bien; se quitan zapatos y calcetines. Para el sueco o el tejido profundo, desvístase hasta donde se sienta cómodo y permanezca cubierto. Para el shiatsu o el tailandés, vista ropa en la que pueda moverse.", "足底反射穿日常衣服即可，脱掉鞋袜。瑞典式或深层组织，按舒适程度更衣，并留在盖布下。指压或泰式，穿方便活动的衣服。"),
  },
  {
    id: "pay",
    group: "practical",
    q: t("How do I pay?", "¿Cómo pago?", "怎么付款？"),
    a: t(
      "Payment is explained on the menu. The card asks for a credit or debit card and does not mention cash. Credit cards, debit cards, and NFC mobile payments are accepted.",
      "El pago se explica en el menú. La tarjeta pide tarjeta de crédito o débito y no menciona efectivo. Se aceptan tarjetas de crédito, tarjetas de débito y pagos móviles NFC.",
      "付款写在菜单上。卡片要求信用卡或借记卡，没有提到现金。接受信用卡、借记卡和 NFC 移动支付。",
    ),
  },
  {
    id: "medical",
    group: "practical",
    q: t("Is this medical treatment?", "¿Esto es un tratamiento médico?", "这是医疗吗？"),
    a: t("No. Reflexology, Swedish, deep tissue, shiatsu, Thai, hot stones, aromatherapy, and cupping are bodywork, not a diagnosis or a substitute for a clinician. Mention pregnancy, blood clots, recent surgery, skin problems, or anything the therapist should not press or heat.", "No. La reflexología, el sueco, el tejido profundo, el shiatsu, el tailandés, las piedras calientes, la aromaterapia y las ventosas son trabajo corporal, no un diagnóstico ni un sustituto de un clínico. Mencione embarazo, coágulos, una cirugía reciente, problemas de la piel o cualquier cosa que la terapeuta no deba presionar o calentar.", "不是。足底反射、瑞典式、深层组织、指压、泰式、热石、芳香疗法和拔罐都是身体手法，不是诊断，也不能代替临床医师。请说明怀孕、血栓、近期手术、皮肤问题，以及技师不应当按或加热的地方。"),
  },
  {
    id: "photos",
    group: "visit",
    q: t("Are these photographs of the studio?", "¿Estas fotografías son del estudio?", "这些照片是工作室的吗？"),
    a: t("Yes. They are the Phoenixville studio.", "Sí. Son el estudio de Phoenixville.", "是。是 Phoenixville 工作室。"),
  },
];

export const gallery: Array<{
  src: string;
  frame: string;
  alt: Localized;
  caption: Localized;
}> = [
  {
    src: asset("media/storefront.jpg"),
    frame: "frame-square",
    alt: t("The front of the studio.", "La fachada del estudio.", "工作室门口。"),
    caption: t("The front of the studio.", "La fachada del estudio.", "工作室门口。"),
  },
  {
    src: asset("media/lounge.jpg"),
    frame: "frame-square",
    alt: t("The waiting room.", "La sala de espera.", "等候室。"),
    caption: t("The waiting room.", "La sala de espera.", "等候室。"),
  },
  {
    src: asset("media/table.jpg"),
    frame: "frame-square",
    alt: t("A massage table.", "Una camilla.", "一张按摩床。"),
    caption: t("A massage table.", "Una camilla.", "一张按摩床。"),
  },
  {
    src: asset("media/chair.jpg"),
    frame: "frame-square",
    alt: t("A foot chair.", "Un sillón para los pies.", "一把足部椅。"),
    caption: t("A foot chair.", "Un sillón para los pies.", "一把足部椅。"),
  },
  {
    src: asset("media/massage.jpg"),
    frame: "frame-square",
    alt: t("A massage on the table.", "Un masaje en la camilla.", "床上的一次按摩。"),
    caption: t("A massage on the table.", "Un masaje en la camilla.", "床上的一次按摩。"),
  },
  {
    src: asset("media/massage-side.jpg"),
    frame: "frame-square",
    alt: t("The same massage, from the side.", "El mismo masaje, de lado.", "同一次按摩，从侧面看。"),
    caption: t("The same massage, from the side.", "El mismo masaje, de lado.", "同一次按摩，从侧面看。"),
  },
  {
    src: asset("media/feet.jpg"),
    frame: "frame-square",
    alt: t("Foot work on the table.", "Trabajo de pies en la camilla.", "床上的足部手法。"),
    caption: t("Foot work on the table.", "Trabajo de pies en la camilla.", "床上的足部手法。"),
  },
  {
    src: asset("media/stones-session.jpg"),
    frame: "frame-square",
    alt: t("Hot stones on the back.", "Piedras calientes en la espalda.", "背上的热石。"),
    caption: t("Hot stones on the back.", "Piedras calientes en la espalda.", "背上的热石。"),
  },
];

export const ui = {
  skip: t("Skip to content", "Saltar al contenido", "跳到正文"),
  navServices: t("Services", "Servicios", "服务"),
  navStudios: t("Studio", "Estudio", "工作室"),
  navReviews: t("Reviews", "Reseñas", "评价"),
  navFaq: t("FAQ", "Preguntas", "问答"),
  navVisit: t("Visit", "Visita", "到店"),
  navGallery: t("Gallery", "Galería", "相册"),
  openMenu: t("Menu", "Menú", "菜单"),
  close: t("Close", "Cerrar", "关闭"),
  search: t("Search", "Buscar", "搜索"),
  searchLabel: t("Search this site", "Buscar en este sitio", "搜索本站"),
  searchEmpty: t("Nothing matches that.", "Nada coincide con eso.", "没有相符的内容。"),
  searchHint: t("Services, the studio, questions.", "Servicios, el estudio, preguntas.", "服务、工作室、问题。"),
  call: t("Call", "Llamar", "致电"),
  directions: t("Directions", "Cómo llegar", "路线"),
  showMap: t("Show map", "Ver mapa", "显示地图"),
  hideMap: t("Hide map", "Ocultar mapa", "隐藏地图"),
  mapTitle: t("Map", "Mapa", "地图"),
  openNow: t("Open now", "Abierto ahora", "营业中"),
  closedNow: t("Closed now", "Cerrado ahora", "已打烊"),
  hoursListed: t("Hours on the door", "Horario en la puerta", "门上的时间"),
  readServices: t("All services", "Todos los servicios", "全部服务"),
  bothStudios: t("The studio", "El estudio", "工作室"),
  backTop: t("Back to top", "Volver arriba", "回到顶部"),
  language: t("Language", "Idioma", "语言"),
  home: t("Home", "Inicio", "首页"),
  privacy: t("Privacy", "Privacidad", "隐私"),
  menuLabel: t("Posted menu", "Menú publicado", "张贴的菜单"),
  confirm: t("The card at the counter is the menu.", "La tarjeta del mostrador es el menú.", "柜台上的卡片就是菜单。"),
  illustrative: t("Photographs of the studio at 245 Schuylkill Road, Phoenixville.", "Fotografías del estudio en 245 Schuylkill Road, Phoenixville.", "245 Schuylkill Road, Phoenixville 工作室的照片。"),
  notMedical: t("Massage and reflexology here are not medical care.", "El masaje y la reflexología aquí no son atención médica.", "这里的按摩和足底反射不是医疗。"),
  viewSource: t("View on", "Ver en", "查看于"),
  related: t("Related", "Relacionado", "相关"),
  whatYouNeed: t("What do you need?", "¿Qué necesita?", "你需要什么？"),
  recommend: t("Start here", "Empiece aquí", "从这里开始"),
  groups: {
    visit: t("Visiting", "La visita", "到店"),
    menu: t("What the services do", "Qué hace cada servicio", "各项服务做什么"),
    practical: t("During the session", "Durante la sesión", "过程中"),
  },
  needs: [
    {
      id: "feet",
      label: t("Tired feet", "Pies cansados", "脚累了"),
      service: "reflexology" as ServiceSlug,
      note: t("Pressure on the points of the feet. Not a full-body massage.", "Presión en los puntos de los pies. No es un masaje de cuerpo completo.", "按足部的点。不是全身按摩。"),
    },
    {
      id: "knots",
      label: t("A stiff back", "Espalda rígida", "背发僵"),
      service: "deep-tissue" as ServiceSlug,
      note: t("Slow pressure into the deeper muscle, on the area that is tight.", "Presión lenta en el músculo más profundo, en la zona que está tensa.", "缓慢按入较深的肌肉，按在紧的地方。"),
    },
    {
      id: "easy",
      label: t("A full-body hour", "Una hora de cuerpo completo", "一小时全身"),
      service: "swedish" as ServiceSlug,
      note: t("Oil, gliding, and kneading at a light to moderate pressure.", "Aceite, deslizamiento y amasamiento, con presión de suave a moderada.", "用油，滑动和揉捏，压力轻到中等。"),
    },
    {
      id: "move",
      label: t("Stretching", "Estiramientos", "拉伸"),
      service: "thai" as ServiceSlug,
      note: t("Pressure plus assisted stretches. Usually clothed. Call and ask if Thai is offered.", "Presión más estiramientos asistidos. Por lo general vestido. Llame y pregunte si hay tailandés.", "按压加上辅助拉伸。通常着衣。请打电话问是否有泰式。"),
    },
    {
      id: "heat",
      label: t("Heat on the back", "Calor en la espalda", "背上加温"),
      service: "hot-stone" as ServiceSlug,
      note: t("Heated stones placed on the body so the muscle warms. You can decline them.", "Piedras calientes colocadas sobre el cuerpo para que el músculo se entibie. Puede rechazarlas.", "热石放在身上，让肌肉变暖。可以拒绝。"),
    },
    {
      id: "new",
      label: t("I’ve never been", "Nunca he ido", "我没来过"),
      service: "reflexology" as ServiceSlug,
      note: t("Foot reflexology is a simple first visit. Ask what you want when you call.", "La reflexología podal es una primera visita sencilla. Diga lo que quiere cuando llame.", "足底反射适合第一次来。打电话时说你要什么。"),
    },
  ],
};

function prefix(lang: Lang): string {
  if (lang === "en") return "";
  return `/${lang}`;
}

export function pathFor(lang: Lang, page: PageId): string {
  const root = prefix(lang);
  if (page === "home") return root || "/";
  return `${root}/${page}`;
}

export function servicePath(lang: Lang, slug: ServiceSlug): string {
  return `${prefix(lang)}/services/${slug}`;
}

export function locationPath(lang: Lang, slug: LocationSlug): string {
  return `${prefix(lang)}/locations/${slug}`;
}

export function langPaths(pathname: string): Record<Lang, string> {
  let bare = pathname;
  if (bare === "/es" || bare.startsWith("/es/")) bare = bare.slice(3) || "/";
  else if (bare === "/zh" || bare.startsWith("/zh/")) bare = bare.slice(3) || "/";
  if (!bare.startsWith("/")) bare = `/${bare}`;
  if (bare.length > 1 && bare.endsWith("/")) bare = bare.slice(0, -1);
  return {
    en: bare,
    es: bare === "/" ? "/es" : `/es${bare}`,
    zh: bare === "/" ? "/zh" : `/zh${bare}`,
  };
}

export const langLabel: Record<Lang, string> = { en: "EN", es: "ES", zh: "中文" };

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
  alternates: Record<Lang, string>;
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
    zh: {
      title: "Asian Foot Spa · Phoenixville",
      description:
        "足底反射和身体手法，地址 245 Schuylkill Road, Phoenixville。每周 7 天营业，上午 10:00 至晚上 9:00。电话 (215) 433-6969。",
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
    zh: {
      title: "按摩菜单 · Asian Foot Spa",
      description: "每种按摩是什么，以及张贴的菜单。地址 245 Schuylkill Road。",
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
    zh: {
      title: "Phoenixville 工作室 · Asian Foot Spa",
      description:
        "245 Schuylkill Rd, Phoenixville, PA 19460。店面、等候室、按摩床和足底反射椅。",
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
    zh: {
      title: "评价 · Asian Foot Spa",
      description: "Phoenixville 的 Asian Foot Spa，Google 评价摘要：47 条评价，4.4 分。",
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
    zh: {
      title: "问题 · Asian Foot Spa",
      description: "门上的营业时间、各项服务做什么、热石、穿什么，以及如何给 Phoenixville 工作室打电话。",
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
    zh: {
      title: "相册 · Asian Foot Spa",
      description: "Phoenixville 工作室的照片：店面、等候室、按摩床、足底反射椅和热石。",
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
    zh: {
      title: "安排到店 · Asian Foot Spa",
      description: "电话 (215) 433-6969。245 Schuylkill Road, Phoenixville。每周 7 天营业，上午 10:00 至晚上 9:00。",
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
    zh: {
      title: "隐私 · Asian Foot Spa",
      description: "本站收集什么、地图如何工作，以及如何联系 Phoenixville 工作室。",
    },
  },
};

export function pageSeo(lang: Lang, page: PageId): Seo {
  const copy = seoTable[page][lang];
  const alternates = { en: pathFor("en", page), es: pathFor("es", page), zh: pathFor("zh", page) };
  return {
    title: copy.title,
    description: copy.description,
    path: alternates[lang],
    alternates,
    lang,
  };
}

export function serviceSeo(lang: Lang, slug: string): Seo | undefined {
  const service = getService(slug);
  if (!service) return undefined;
  return {
    title: `${service.name[lang]} · Asian Foot Spa`,
    description: service.summary[lang],
    path: servicePath(lang, service.slug),
    alternates: {
      en: servicePath("en", service.slug),
      es: servicePath("es", service.slug),
      zh: servicePath("zh", service.slug),
    },
    lang,
  };
}

export function locationSeo(lang: Lang, slug: string): Seo | undefined {
  const loc = getLocation(slug);
  if (!loc) return undefined;
  return {
    title:
      lang === "zh"
        ? "Phoenixville 工作室 · Asian Foot Spa"
        : lang === "en"
          ? `${loc.name.en} studio · Asian Foot Spa`
          : `Estudio de ${loc.name.es} · Asian Foot Spa`,
    description: `${formatAddress(loc.slug)}. ${loc.phoneDisplay}. ${loc.hours[lang]}`,
    path: locationPath(lang, loc.slug),
    alternates: {
      en: locationPath("en", loc.slug),
      es: locationPath("es", loc.slug),
      zh: locationPath("zh", loc.slug),
    },
    lang,
  };
}

export function searchIndex(lang: Lang): Array<{ title: string; href: string; blurb: string }> {
  const pages: Array<{ title: Localized; href: PageId; blurb: Localized }> = [
    { title: t("Home", "Inicio", "首页"), href: "home", blurb: t("The Phoenixville studio and the posted menu.", "El estudio de Phoenixville y el menú publicado.", "Phoenixville 工作室和张贴的菜单。") },
    { title: t("Visit", "Visita", "到店"), href: "visit", blurb: t("How a visit works, the phone, and the address.", "Cómo es la visita, el teléfono y la dirección.", "一次到店怎么进行、电话和地址。") },
    { title: t("Reviews", "Reseñas", "评价"), href: "reviews", blurb: t("Public quotes and rating sources.", "Citas públicas y fuentes de calificación.", "公开引文和评分来源。") },
    { title: t("Gallery", "Galería", "相册"), href: "gallery", blurb: ui.illustrative },
    { title: t("Privacy", "Privacidad", "隐私"), href: "privacy", blurb: t("Maps, links, and what this site stores.", "Mapas, enlaces y qué guarda este sitio.", "地图、链接，以及本站保存什么。") },
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
  services: t("Services", "Servicios", "服务"),
  locations: t("Studio", "Estudio", "工作室"),
};

export const amenities: Array<{ title: Localized; items: Localized[] }> = [
  {
    title: t("Accessibility", "Accesibilidad", "无障碍"),
    items: [
      t(
        "Wheelchair accessible parking lot",
        "Estacionamiento accesible para silla de ruedas",
        "轮椅可到达的停车场",
      ),
    ],
  },
  {
    title: t("Payments", "Pagos", "付款"),
    items: [
      t("Credit cards", "Tarjetas de crédito", "信用卡"),
      t("Debit cards", "Tarjetas de débito", "借记卡"),
      t("NFC mobile payments", "Pagos móviles NFC", "NFC 移动支付"),
    ],
  },
];

export const pageCopy = {
  heroTitle: t(
    "Quiet rooms. A posted menu. Pressure you can ask for.",
    "Salas tranquilas. Un menú publicado. La presión que usted pide.",
    "安静的房间。柜台上的菜单。压力可以提出来。",
  ),
  heroLede: t(
    "Foot reflexology and body work at 245 Schuylkill Road. The door says open seven days, 10 a.m. to 9 p.m.",
    "Reflexología de pies y trabajo corporal en 245 Schuylkill Road. La puerta dice abierto los siete días, de 10 a. m. a 9 p. m.",
    "足底反射和身体手法，地址 245 Schuylkill Road。门上写着每周七天营业，上午 10:00 至晚上 9:00。",
  ),
  rooms: t("The rooms", "Las salas", "房间"),
  needIntro: t(
    "Pick the reason you are calling. The suggestion is a starting point, not a booking.",
    "Elija el motivo de la llamada. La sugerencia es un punto de partida, no una reserva.",
    "选出你打电话的原因。这只是起点，不是预约。",
  ),
  stonesHeading: t("Hot stones on the table", "Piedras calientes en la camilla", "床上的热石"),
  callBefore: t("Call before you come.", "Llame antes de venir.", "来之前先打电话。"),
  noForm: t(
    "There is no booking form. Call and say what you want.",
    "No hay formulario de reserva. Llame y diga lo que quiere.",
    "没有预约表。打电话，说你要什么。",
  ),
  expect: t("What to expect", "Qué esperar", "过程中会怎样"),
  goodFit: t("A good fit when", "Conviene cuando", "适合的时候"),
  notThis: t("Not this, if", "No es esto, si", "不要选这个，如果"),
  bookPhone: t("Book by phone", "Reserve por teléfono", "电话预约"),
  studio: t("The studio", "El estudio", "工作室"),
  locationsLede: t(
    "One address: 245 Schuylkill Road. The hours and the phone are printed on the door. The map loads only if you ask for it.",
    "Una dirección: 245 Schuylkill Road. El horario y el teléfono están impresos en la puerta. El mapa se carga solo si usted lo pide.",
    "一个地址：245 Schuylkill Road。时间和电话印在门上。地图只有在你要求时才加载。",
  ),
  closer: t("Who this desk is closer for", "Para quién queda más cerca", "谁离这里更近"),
  emailListed: t(
    "Email listed on the Phoenixville Facebook page: ",
    "Correo listado en la página de Facebook de Phoenixville: ",
    "Phoenixville 的 Facebook 页面上列出的邮箱：",
  ),
  ratings: t("Public ratings", "Calificaciones públicas", "公开评分"),
  faqHeading: t(
    "Questions worth a straight answer",
    "Preguntas que merecen una respuesta directa",
    "值得直接回答的问题",
  ),
  visitHeading: t("How a visit goes", "Cómo es una visita", "到店是怎样的"),
  visitLede: t(
    "No form, no chatbot, no deposit on this website. The appointment is a phone call.",
    "En este sitio no hay formulario, ni chatbot, ni depósito. La cita es una llamada.",
    "这个网站没有表格、没有聊天机器人、没有订金。预约就是一通电话。",
  ),
  notFound: t(
    "That page is not on the menu.",
    "Esa página no está en el menú.",
    "这一页不在菜单上。",
  ),
  privacyChecked: t(
    "Business details were checked against public listings on October 2, 2026. Hours, prices, and offers should still be confirmed by phone.",
    "Los datos del negocio se contrastaron con listados públicos el 2 de octubre de 2026. Horarios, precios y ofertas deben confirmarse por teléfono.",
    "经营信息于 2026 年 10 月 2 日与公开列表核对。营业时间、价格和优惠仍应以电话确认为准。",
  ),
  visitSteps: [
    {
      title: t("Call the studio", "Llame al estudio", "给工作室打电话"),
      body: t(
        "The only number is (215) 433-6969. Say feet or body work, the day, and whether you want hot stones.",
        "El único número es (215) 433-6969. Diga pies o trabajo corporal, el día y si quiere piedras calientes.",
        "唯一的号码是 (215) 433-6969。说明足部还是身体手法、哪一天，以及要不要热石。",
      ),
    },
    {
      title: t("Come to 245 Schuylkill Road", "Venga a 245 Schuylkill Road", "到 245 Schuylkill Road"),
      body: t(
        "The lighted sign is Asian Foot Spa. You will see the waiting room first: gray sofa, blue walls, yellow paper fans. The red recliner is in the room with the foot chart. Body work, the stones, and the photographed foot session are on the table with the white sheet.",
        "El letrero iluminado dice Asian Foot Spa. Primero verá la sala de espera: sofá gris, paredes azules, abanicos de papel amarillos. El sillón rojo está en la sala del cuadro de los pies. El trabajo corporal, las piedras y la sesión de pies fotografiada son en la camilla con la sábana blanca.",
        "灯箱招牌是 Asian Foot Spa。先进等候室：灰色沙发、蓝色墙、黄色纸扇。红色躺椅在有足部图的房间里。身体手法、热石，以及照片里的足部，都在铺白床单的按摩床上。",
      ),
    },
    {
      title: t("Say what you want in the room", "Diga lo que quiere en la sala", "在房间里说你要什么"),
      body: t(
        "Pressure, scent, and stones can all be changed once you are there. The stones should feel warm. If they do not, say so.",
        "La presión, el aroma y las piedras se pueden cambiar cuando ya está ahí. Las piedras deben sentirse tibias. Si no, dígalo.",
        "到了之后，压力、气味和热石都可以改。石头应当是温的。如果不是，请说。",
      ),
    },
  ],
  privacyBlocks: [
    {
      title: t("What this site is", "Qué es este sitio", "这个网站是什么"),
      body: t(
        "A public brochure for Asian Foot Spa. It does not take bookings, payments, newsletters, or accounts. There is no form that stores your name.",
        "Un folleto público de Asian Foot Spa. No toma reservas, pagos, boletines ni cuentas. No hay un formulario que guarde su nombre.",
        "Asian Foot Spa 的公开介绍。不接受预约、付款、通讯或账户。没有表格会保存你的名字。",
      ),
    },
    {
      title: t("Calls and email", "Llamadas y correo", "电话和邮箱"),
      body: t(
        "Phone links open your own dialer. The Phoenixville email is the address published on that studio’s Facebook page. Messages you send go to them, not to this website.",
        "Los enlaces de teléfono abren su propio marcador. El correo de Phoenixville es la dirección publicada en la página de Facebook de ese estudio. Los mensajes van a ellos, no a este sitio.",
        "电话链接打开你自己的拨号。Phoenixville 的邮箱是该工作室 Facebook 页面上公布的地址。你发出的信息到他们那里，不到这个网站。",
      ),
    },
    {
      title: t("Maps", "Mapas", "地图"),
      body: t(
        "Google Maps is not loaded until you press Show map. After that, Google receives the usual map request, including your IP address, under Google’s own terms.",
        "Google Maps no se carga hasta que pulsa Ver mapa. Después, Google recibe la solicitud habitual, incluida su dirección IP, según los términos de Google.",
        "在你按“显示地图”之前，不会加载 Google Maps。之后，Google 会按它自己的条款收到通常的地图请求，包括你的 IP 地址。",
      ),
    },
    {
      title: t("Outbound links", "Enlaces externos", "对外链接"),
      body: t(
        "Reviews, Facebook, Yelp, MapQuest, Tripadvisor, and directions leave this site. Those companies set their own cookies.",
        "Reseñas, Facebook, Yelp, MapQuest, Tripadvisor y las indicaciones salen de este sitio. Esas empresas ponen sus propias cookies.",
        "评价、Facebook、Yelp、MapQuest、Tripadvisor 和路线都会离开本站。那些公司设置自己的 cookie。",
      ),
    },
    {
      title: t("Photos", "Fotos", "照片"),
      body: t(
        "The photographs show the Phoenixville studio at 245 Schuylkill Road: the storefront, the waiting room, the treatment table, the reflexology chair, a foot session, and hot stones.",
        "Las fotografías muestran el estudio de Phoenixville en 245 Schuylkill Road: la fachada, la sala de espera, la camilla, el sillón de reflexología, una sesión de pies y las piedras calientes.",
        "照片是 245 Schuylkill Road 的 Phoenixville 工作室：店面、等候室、按摩床、足底反射椅、一次足部，以及热石。",
      ),
    },
    {
      title: t("Language", "Idioma", "语言"),
      body: t(
        "English, Spanish, and Chinese pages carry the same facts. The Spanish and Chinese text is a translation of the site, not a claim that every appointment is conducted in that language.",
        "Las páginas en inglés, español y chino llevan los mismos hechos. El texto en español y en chino es una traducción del sitio, no una afirmación de que cada cita se hace en ese idioma.",
        "英文、西班牙文和中文页面上的事实相同。西班牙文和中文是网站的译文，不是说每次预约都用那种语言进行。",
      ),
    },
  ],
};
