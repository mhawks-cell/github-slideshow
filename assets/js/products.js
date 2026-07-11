/* Shared product catalog used by flowers.html, cakes.html, shop.html,
   cart.html and checkout.html. Swap image URLs / prices / copy freely —
   every other page reads from this single source. */

const PRODUCTS = [
  // ---- Flowers ----
  {
    id: "fl-01",
    category: "flowers",
    tag: { es: "Más vendido", en: "Best seller" },
    name: { es: "Ramo Primavera", en: "Spring Bouquet" },
    desc: { es: "Rosas, alstroemerias y eucalipto en tonos rosa y blanco.", en: "Roses, alstroemeria and eucalyptus in pink and white tones." },
    price: 48,
  },
  {
    id: "fl-02",
    category: "flowers",
    tag: { es: "Bodas", en: "Weddings" },
    name: { es: "Ramo de Novia Elegancia", en: "Elegance Bridal Bouquet" },
    desc: { es: "Peonías y rosas blancas con follaje delicado.", en: "Peonies and white roses with delicate greenery." },
    price: 95,
  },
  {
    id: "fl-03",
    category: "flowers",
    tag: { es: "Bodas", en: "Weddings" },
    name: { es: "Centro de Mesa Boda", en: "Wedding Centerpiece" },
    desc: { es: "Arreglo bajo para mesas de recepción, a juego con el ramo.", en: "Low arrangement for reception tables, matches the bouquet." },
    price: 65,
  },
  {
    id: "fl-04",
    category: "flowers",
    tag: { es: "Fiestas", en: "Parties" },
    name: { es: "Flores para Fiesta Tropical", en: "Tropical Party Flowers" },
    desc: { es: "Aves del paraíso, ginger y follaje vibrante.", en: "Birds of paradise, ginger flowers and vibrant foliage." },
    price: 58,
  },
  {
    id: "fl-05",
    category: "flowers",
    tag: { es: "Cumpleaños", en: "Birthdays" },
    name: { es: "Arreglo Cumpleaños Alegre", en: "Cheerful Birthday Arrangement" },
    desc: { es: "Girasoles y gerberas en colores brillantes.", en: "Sunflowers and gerberas in bright colors." },
    price: 42,
  },
  {
    id: "fl-06",
    category: "flowers",
    tag: { es: "Todo el año", en: "Year-round" },
    name: { es: "Ramo Clásico de Rosas", en: "Classic Rose Bouquet" },
    desc: { es: "Docena de rosas rojas envueltas a mano.", en: "One dozen red roses, hand-wrapped." },
    price: 55,
  },

  // ---- Cakes ----
  {
    id: "ck-01",
    category: "cakes",
    tag: { es: "Bodas", en: "Weddings" },
    name: { es: "Pastel de Boda Clásico", en: "Classic Wedding Cake" },
    desc: { es: "Tres pisos, vainilla y relleno de frutos rojos.", en: "Three tiers, vanilla sponge with red berry filling." },
    price: 320,
  },
  {
    id: "ck-02",
    category: "cakes",
    tag: { es: "Más vendido", en: "Best seller" },
    name: { es: "Pastel Tres Leches", en: "Tres Leches Cake" },
    desc: { es: "Receta tradicional, húmedo y cubierto de crema chantilly.", en: "Traditional recipe, moist and topped with whipped cream." },
    price: 45,
  },
  {
    id: "ck-03",
    category: "cakes",
    tag: { es: "Fiestas", en: "Parties" },
    name: { es: "Pastel Temático de Fiesta", en: "Themed Party Cake" },
    desc: { es: "Diseño personalizado según el tema de tu evento.", en: "Custom design based on your event's theme." },
    price: 85,
  },
  {
    id: "ck-04",
    category: "cakes",
    tag: { es: "Para compartir", en: "Sharing size" },
    name: { es: "Cupcakes Surtidos (12u)", en: "Assorted Cupcakes (12ct)" },
    desc: { es: "Sabores variados: chocolate, vainilla y red velvet.", en: "Assorted flavors: chocolate, vanilla and red velvet." },
    price: 36,
  },
  {
    id: "ck-05",
    category: "cakes",
    tag: { es: "Cumpleaños", en: "Birthdays" },
    name: { es: "Pastel de Cumpleaños", en: "Birthday Cake" },
    desc: { es: "Chocolate belga con decoración personalizada.", en: "Belgian chocolate with custom decoration." },
    price: 52,
  },
  {
    id: "ck-06",
    category: "cakes",
    tag: { es: "A tu gusto", en: "Made to order" },
    name: { es: "Pastel Personalizado", en: "Custom Cake" },
    desc: { es: "Cuéntanos tu idea y la creamos contigo, sabor y diseño libres.", en: "Tell us your idea — any flavor, any design." },
    price: 0,
    priceLabel: { es: "Desde cotización", en: "Custom quote" },
  }
];
