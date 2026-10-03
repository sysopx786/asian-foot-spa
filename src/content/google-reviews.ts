export const googleReviewsUrl =
  "https://www.google.com/maps/place/Asian+Foot+Spa/@40.1355242,-75.5411721,17z/data=!4m8!3m7!1s0x89c68f9dcd5af255:0x851b8e9be0f49fa1!8m2!3d40.1355242!4d-75.5411721!9m1!1b1";

export const googleWriteReviewUrl =
  "https://www.google.com/search?q=Asian+Foot+Spa+245+Schuylkill+Rd+Phoenixville#lrd=0x89c68f9dcd5af255:0x851b8e9be0f49fa1,3";

export const googleRating = 4.4;
export const googleReviewCount = 47;

export type GoogleReview = {
  name: string;
  letter: string;
  color: string;
  meta: string;
  guide?: boolean;
  stars: number;
  when: string;
  label?: string;
  text?: string;
  more?: boolean;
  likes?: number;
  reply?: { when?: string; text: string };
};

export const barFills = [
  { stars: 5, width: "100%" },
  { stars: 4, width: "22%" },
  { stars: 3, width: "8%" },
  { stars: 2, width: "8%" },
  { stars: 1, width: "18%" },
];

const reviewCopy: Record<string, { es: string; zh: string }> = {
  "Wonderful! I was so relaxed I didn't want to leave. Next time full massage along with the reflexology!": {
    es: "Maravilloso. Estaba tan relajada que no quería irme. La próxima vez, un masaje completo junto con la reflexología.",
    zh: "很好。我放松得不想离开。下次要做一次全身按摩，再加上足底反射。",
  },
  "The BEST massage I have ever had! May is AWESOME": {
    es: "El MEJOR masaje que he recibido. May es excelente.",
    zh: "这是我做过的最好的按摩！May 非常好。",
  },
  "I am very particular that I need": {
    es: "Soy muy exigente con lo que necesito",
    zh: "我对自己需要的很挑剔",
  },
  "I will never visit this place again.": {
    es: "No volveré a este lugar.",
    zh: "我不会再来这里。",
  },
  "Outstanding deep tissue and pressure point experience. Don't let the demure stature of these women fool you. Clean, comforting atmosphere. Made sure pressure was what I wanted. Very grateful I listened to my friends experience there and went. Husband and I are hooked.": {
    es: "Una experiencia excelente de tejido profundo y puntos de presión. No se deje engañar por la figura menuda de estas mujeres. Ambiente limpio y acogedor. Se aseguraron de que la presión fuera la que yo quería. Me alegra haber hecho caso de la experiencia de mis amigos. Mi esposo y yo ya no podemos dejarlo.",
    zh: "深层组织和穴位按压都很出色。不要被她们娇小的身材骗了。环境干净、让人安心。压力按我要的来。很庆幸听了朋友的经验才来。我和丈夫都离不开这里了。",
  },
  "Excellent massage for being super affordable and convenient.": {
    es: "Un masaje excelente, y además muy asequible y práctico.",
    zh: "按摩很好，而且非常实惠、方便。",
  },
  "I need to talk . BEST massage therapist ever . OMG. If you are in doubt whether it is worth it or not. It's VERY worth it": {
    es: "Tengo que decirlo. La mejor masajista que he tenido. Si duda si vale la pena, vale MUCHO la pena.",
    zh: "我得说出来。最好的按摩师。如果您还在犹豫值不值，非常值。",
  },
  "Very nice massage and very professional": {
    es: "Un masaje muy agradable y muy profesional.",
    zh: "按摩很好，也很专业。",
  },
  "Incredibly clean and relaxing environment, and amazing massage therapists. Will definitely be coming back!": {
    es: "Un ambiente increíblemente limpio y relajante, y unas masajistas excelentes. Volveré sin duda.",
    zh: "环境非常干净、让人放松，按摩师也很出色。我一定会再来。",
  },
  "Great massage, peaceful spa music, clean, and friendly. Highly recommend": {
    es: "Muy buen masaje, música tranquila, limpio y un trato amable. Lo recomiendo.",
    zh: "按摩很好，店里音乐安静，干净，人也亲切。强烈推荐。",
  },
  "Massage was good. Cici was fairly strong. I will be back.": {
    es: "El masaje estuvo bien. Cici tenía bastante fuerza. Volveré.",
    zh: "按摩不错。Cici 手劲挺大。我会再来。",
  },
  "I literally just left it was amazing Amy was great. Definitely coming back": {
    es: "Acabo de salir. Fue increíble. Amy estuvo excelente. Volveré sin duda.",
    zh: "我刚离开。太好了。Amy 很棒。我一定会再来。",
  },
  "This Spa is not just feet! Received the most amazing full body professional massage here recently. Free hot stones at the end was a nice touch on a cold day. Left floating on a cloud of relaxation.": {
    es: "Este spa no es solo de pies. Hace poco recibí aquí un masaje de cuerpo completo profesional, de lo mejor. Las piedras calientes gratis al final fueron un buen detalle en un día frío. Salí flotando de lo relajada.",
    zh: "这家不只是做脚！最近在这里做了一次非常好的专业全身按摩。结束时的免费热石，在冷天里很舒服。离开时整个人都放松了。",
  },
  "The prices are": { es: "Los precios son", zh: "价格是" },
  "aches and pains.": { es: "dolores y molestias.", zh: "酸痛。" },
  "Just left this place and had to leave a review. The reflexology is amazing, the massage is good too. I mostly enjoyed the scalp massage. They use hot stones, hot towel and oil. All essentials, I would say. I will be back next week!": {
    es: "Acabo de salir y tenía que dejar una reseña. La reflexología es excelente y el masaje también está bien. Lo que más disfruté fue el masaje del cuero cabelludo. Usan piedras calientes, toalla caliente y aceite. Yo diría que son lo esencial. Volveré la semana que viene.",
    zh: "刚离开就想写评价。足底反射非常好，按摩也不错。我最喜欢头皮按摩。他们用热石、热毛巾和油。我觉得这些都该有。我下周还会来。",
  },
  "Not good at all .i used to go there , it was ok but last time i was there my massage was half way.it was deep tissue massage with hot stone but disappointing.will not go there any more .": {
    es: "Nada bien. Antes iba, y estaba aceptable, pero la última vez el masaje se quedó a la mitad. Era tejido profundo con piedras calientes, y decepcionó. No volveré.",
    zh: "一点都不好。我以前常去，那时还行，但上次按摩做到一半就停了。那是带热石的深层按摩，让人失望。我不会再去了。",
  },
  "Best massage I've ever had Professional and good price": {
    es: "El mejor masaje que he recibido. Profesional y a buen precio.",
    zh: "我做过的最好的按摩。专业，价格也好。",
  },
  "I was very happy with my visit. The reception area is very clean, cute and relaxing, and staff is friendly. I received an amazing massage from Amy!": {
    es: "Quedé muy contenta con la visita. La recepción está muy limpia, es agradable y relajante, y el personal es amable. Recibí un masaje excelente de Amy.",
    zh: "这次来我很满意。接待处很干净、舒服、让人放松，员工也亲切。Amy 给我做了一次很好的按摩。",
  },
  "would prefer to": { es: "preferiría", zh: "更希望" },
  "Me and my fiance went for a couples massage and it was so nice and relaxing! Felt Amazing!": {
    es: "Mi prometido y yo fuimos a un masaje en pareja y fue muy agradable y relajante. Nos sentimos de maravilla.",
    zh: "我和未婚夫去做了情侣按摩，很舒服、很放松。感觉非常好。",
  },
  "This is was my first time going to get a massage, thoroughly enjoyed it.": {
    es: "Era mi primera vez en un masaje y lo disfruté por completo.",
    zh: "这是我第一次来做按摩，非常喜欢。",
  },
  "rejuvenating experience": { es: "una experiencia que reanima", zh: "让人恢复精神的体验" },
  "in a while.": { es: "en mucho tiempo.", zh: "很久以来。" },
  "One of the best massages I've ever had!!!": {
    es: "Uno de los mejores masajes que he recibido.",
    zh: "我做过的最好的按摩之一。",
  },
};

export function reviewIn(lang: "en" | "es" | "zh", text: string | undefined): string | undefined {
  if (!text || lang === "en") return text;
  return reviewCopy[text]?.[lang] ?? text;
}

export const googleReviews: GoogleReview[] = [
  {
    name: "Shirley Wolf",
    letter: "S",
    color: "#f57c00",
    meta: "6 reviews",
    stars: 5,
    when: "11 months ago",
    text: "Wonderful! I was so relaxed I didn't want to leave. Next time full massage along with the reflexology!",
    likes: 2,
  },
  {
    name: "Karthikeyan Subramaniam",
    letter: "K",
    color: "#e8710a",
    meta: "8 reviews",
    stars: 5,
    when: "a year ago",
    label: "Great price",
  },
  {
    name: "Raja Hayajneh",
    letter: "R",
    color: "#1967d2",
    meta: "Local Guide · 769 reviews · 322 photos",
    guide: true,
    stars: 5,
    when: "a year ago",
    text: "The BEST massage I have ever had! May is AWESOME",
  },
  {
    name: "Grace Yi",
    letter: "G",
    color: "#9334e6",
    meta: "Local Guide · 24 reviews · 1 photo",
    guide: true,
    stars: 5,
    when: "2 years ago",
    text: "I am very particular that I need",
    more: true,
  },
  {
    name: "anwar hyder",
    letter: "a",
    color: "#c5221f",
    meta: "Local Guide · 23 reviews · 1 photo",
    guide: true,
    stars: 1,
    when: "2 years ago",
    text: "I will never visit this place again.",
    more: true,
  },
  {
    name: "Michelle Tague",
    letter: "M",
    color: "#137333",
    meta: "11 reviews",
    stars: 4,
    when: "2 years ago",
    text: "Outstanding deep tissue and pressure point experience. Don't let the demure stature of these women fool you. Clean, comforting atmosphere. Made sure pressure was what I wanted. Very grateful I listened to my friends experience there and went. Husband and I are hooked.",
  },
  {
    name: "Maria Palumbo",
    letter: "M",
    color: "#8430ce",
    meta: "Local Guide · 98 reviews · 28 photos",
    guide: true,
    stars: 4,
    when: "2 years ago",
    text: "Excellent massage for being super affordable and convenient.",
  },
  {
    name: "Tati Carneiro",
    letter: "T",
    color: "#007b83",
    meta: "6 reviews",
    stars: 5,
    when: "2 years ago",
    text: "I need to talk . BEST massage therapist ever . OMG. If you are in doubt whether it is worth it or not. It's VERY worth it",
  },
  {
    name: "Guillermo Galvis",
    letter: "G",
    color: "#b06000",
    meta: "13 reviews · 1 photo",
    stars: 5,
    when: "2 years ago",
    text: "Very nice massage and very professional",
  },
  {
    name: "George D.",
    letter: "G",
    color: "#3c4043",
    meta: "Local Guide · 94 reviews · 44 photos",
    guide: true,
    stars: 4,
    when: "3 years ago",
    text: "Incredibly clean and relaxing environment, and amazing massage therapists. Will definitely be coming back!",
  },
  {
    name: "Jim Walker",
    letter: "J",
    color: "#174ea6",
    meta: "Local Guide · 52 reviews",
    guide: true,
    stars: 5,
    when: "3 years ago",
    text: "Great massage, peaceful spa music, clean, and friendly. Highly recommend",
  },
  {
    name: "steve",
    letter: "S",
    color: "#d32f2f",
    meta: "Local Guide · 78 reviews",
    guide: true,
    stars: 4,
    when: "3 years ago",
    text: "Massage was good. Cici was fairly strong. I will be back.",
  },
  {
    name: "Candice Kane",
    letter: "C",
    color: "#a142f4",
    meta: "11 reviews · 4 photos",
    stars: 5,
    when: "3 years ago",
    text: "I literally just left it was amazing Amy was great. Definitely coming back",
  },
  {
    name: "rjprieto7",
    letter: "r",
    color: "#e91e63",
    meta: "2 reviews",
    stars: 5,
    when: "3 years ago",
    text: "This Spa is not just feet! Received the most amazing full body professional massage here recently. Free hot stones at the end was a nice touch on a cold day. Left floating on a cloud of relaxation.",
  },
  {
    name: "Meghan Murray",
    letter: "M",
    color: "#e8710a",
    meta: "Local Guide · 13 reviews · 13 photos",
    guide: true,
    stars: 5,
    when: "4 years ago",
    text: "The prices are",
    more: true,
  },
  {
    name: "Giacomo Toscano",
    letter: "G",
    color: "#c62828",
    meta: "3 reviews",
    stars: 5,
    when: "4 years ago",
    text: "aches and pains.",
    more: true,
  },
  {
    name: "Michelle",
    letter: "M",
    color: "#d93025",
    meta: "Local Guide · 11 reviews · 1 photo",
    guide: true,
    stars: 5,
    when: "4 years ago",
    text: "Just left this place and had to leave a review. The reflexology is amazing, the massage is good too. I mostly enjoyed the scalp massage. They use hot stones, hot towel and oil. All essentials, I would say. I will be back next week!",
  },
  {
    name: "Parvaneh Z",
    letter: "P",
    color: "#757575",
    meta: "Local Guide · 30 reviews · 3 photos",
    guide: true,
    stars: 1,
    when: "4 years ago",
    text: "Not good at all .i used to go there , it was ok but last time i was there my massage was half way.it was deep tissue massage with hot stone but disappointing.will not go there any more .",
  },
  {
    name: "Yassin Jawad",
    letter: "Y",
    color: "#d32f2f",
    meta: "2 reviews",
    stars: 5,
    when: "4 years ago",
    text: "Best massage I've ever had Professional and good price",
  },
  {
    name: "Renee Prieto",
    letter: "R",
    color: "#c62828",
    meta: "1 review",
    stars: 5,
    when: "4 years ago",
    text: "I was very happy with my visit. The reception area is very clean, cute and relaxing, and staff is friendly. I received an amazing massage from Amy!",
  },
  {
    name: "Ayyada Paavam",
    letter: "A",
    color: "#0d652d",
    meta: "Local Guide · 10 reviews",
    guide: true,
    stars: 2,
    when: "Edited 4 years ago",
    text: "would prefer to",
    more: true,
  },
  {
    name: "Ting Zhang",
    letter: "T",
    color: "#1976d2",
    meta: "1 review",
    stars: 5,
    when: "4 years ago",
    text: "Me and my fiance went for a couples massage and it was so nice and relaxing! Felt Amazing!",
  },
  {
    name: "Troy Quinn Jr",
    letter: "T",
    color: "#388e3c",
    meta: "Local Guide · 159 reviews · 1,510 photos",
    guide: true,
    stars: 5,
    when: "5 years ago",
    text: "This is was my first time going to get a massage, thoroughly enjoyed it.",
    reply: {
      when: "5 years ago",
      text: "We are very happy to get your approval! Looking forward to your next visit!",
    },
  },
  {
    name: "ago usa",
    letter: "a",
    color: "#6d4c41",
    meta: "1 review · 1 photo",
    stars: 5,
    when: "5 years ago",
    text: "rejuvenating experience",
    more: true,
    reply: { text: "Thank you for coming. We will try our best to do better, thank you" },
  },
  {
    name: "Keith Yurev",
    letter: "K",
    color: "#174ea6",
    meta: "10 reviews",
    stars: 5,
    when: "5 years ago",
    text: "in a while.",
    more: true,
    reply: { text: "Thank you for your approval! Looking forward to seeing you again!" },
  },
  {
    name: "Alison Gontowski",
    letter: "A",
    color: "#c26401",
    meta: "Local Guide · 31 reviews · 20 photos",
    guide: true,
    stars: 5,
    when: "5 years ago",
    text: "One of the best massages I've ever had!!!",
    reply: { text: "We are very happy to get your approval! Looking forward to your next visit!" },
  },
];
