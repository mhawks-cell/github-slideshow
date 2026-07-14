/* Bilingual dictionary (Spanish-first, English secondary) + tiny i18n
   engine. Every page includes this file, tags translatable elements
   with data-i18n="dotted.key" (or data-i18n-placeholder for inputs),
   and this script fills them in based on the saved language. */

const I18N = {
  es: {
    nav: {
      home: "Inicio", about: "Nosotros", gallery: "Galería", flowers: "Flores",
      cakes: "Pasteles", shop: "Tienda", reviews: "Reseñas", cart: "Carrito", order: "Ordenar Ahora"
    },
    brand: { tagline: "Flores &amp; Pasteles" },
    footer: {
      about: "Flores y pasteles hechos a mano en Miami, para bodas, fiestas y toda ocasión especial.",
      linksTitle: "Enlaces",
      link: { home: "Inicio", about: "Nosotros", gallery: "Galería", flowers: "Flores", cakes: "Pasteles", shop: "Tienda", reviews: "Reseñas" },
      contactTitle: "Contacto",
      contact: { phoneLabel: "Teléfono", emailLabel: "Correo", addressLabel: "Dirección", address: "123 Calle Flor, Miami, FL" },
      hoursTitle: "Horario",
      hours: { weekdays: "Lun – Vie", weekdaysValue: "9:00 am – 6:00 pm", weekend: "Sáb – Dom", weekendValue: "10:00 am – 4:00 pm" },
      rights: "Todos los derechos reservados."
    },
    home: {
      hero: {
        eyebrow: "Flores &amp; Pasteles a la medida",
        title: "Diseños llenos de color, pasión y ritmo",
        subtitle: "Arreglos florales y pasteles artesanales para bodas, quinceañeras, cumpleaños y toda celebración que merezca un poco de magia.",
        cta1: "Ver Flores", cta2: "Ver Pasteles"
      },
      highlights: {
        eyebrow: "Por qué elegirnos", title: "Todo lo que necesitas para celebrar",
        flowers: { title: "Flores frescas cada día", desc: "Seleccionadas y arregladas a mano el mismo día de tu entrega." },
        cakes: { title: "Pasteles artesanales", desc: "Recetas propias, ingredientes de calidad y diseños personalizados." },
        events: { title: "Para toda ocasión", desc: "Bodas, quinceañeras, cumpleaños, aniversarios y eventos corporativos." }
      },
      featured: {
        eyebrow: "Catálogo", title: "Nuestros favoritos", subtitle: "Una probadita de lo que puedes encontrar en la tienda.",
        viewFlowers: "Ver todas las flores", viewCakes: "Ver todos los pasteles"
      },
      occasions: {
        eyebrow: "Ocasiones", title: "Creamos para cada momento especial",
        weddings: "Bodas", parties: "Fiestas", birthdays: "Cumpleaños", corporate: "Eventos Corporativos"
      },
      delivery: {
        eyebrow: "Entregas", title: "Entrega puntual, directo a tu evento",
        desc: "Coordinamos la entrega el día y hora exacta que necesites, con seguimiento de tu pedido de principio a fin.",
        cta: "Conoce cómo funciona"
      },
      testimonials: { eyebrow: "Clientes felices", title: "Lo que dicen nuestras clientas y clientes", cta: "Leer todas las reseñas" },
      cta: { title: "¿Lista para celebrar?", subtitle: "Empieza tu pedido hoy y nosotros nos encargamos del resto.", button: "Empezar mi pedido" }
    },
    about: {
      header: { eyebrow: "Nuestra historia", title: "Sobre Flor &amp; Azúcar", subtitle: "Una tienda familiar donde las flores y los pasteles se crean con el mismo ritmo y pasión." },
      story: {
        eyebrow: "Cómo empezamos", title: "Nuestra Historia",
        p1: "Flor &amp; Azúcar nació de una idea sencilla: cada celebración merece flores frescas y un pastel hecho con cariño. Empezamos en la cocina de casa, armando ramos y horneando pasteles para amigas y familia.",
        p2: "Hoy seguimos siendo un negocio familiar, pero ahora acompañamos bodas, quinceañeras y fiestas de toda la ciudad, siempre cuidando cada detalle a mano.",
        p3: "Marisol, nuestra fundadora, creció bailando salsa y bachata, y ese mismo ritmo — el movimiento, el color, la manera en que una falda se mueve al girar — es lo que inspira el estilo fluido y vibrante de nuestros arreglos y pasteles."
      },
      owner: { role: "Fundadora &amp; Diseñadora Principal", name: "Marisol Reyes", bio: "Marisol combina más de diez años de experiencia en floristería y repostería con un ojo para el color y el movimiento. Cuando no está en el taller, la encuentras en clases de baile — la misma energía que lleva a la pista la lleva a cada arreglo." },
      values: {
        eyebrow: "Lo que nos guía", title: "Nuestros Valores",
        v1: { title: "Frescura", desc: "Trabajamos con proveedores locales y flores de temporada." },
        v2: { title: "Hecho a mano", desc: "Cada ramo y cada pastel se arma y decora a mano, sin prisa." },
        v3: { title: "Personalización", desc: "Adaptamos colores, sabores y diseños a tu evento." },
        v4: { title: "Puntualidad", desc: "Tu entrega llega cuando la necesitas, sin excusas." }
      },
      cta: { title: "Conversemos sobre tu evento", subtitle: "Cuéntanos qué estás celebrando y diseñamos algo único para ti.", button: "Contáctanos" }
    },
    gallery: {
      header: { eyebrow: "Galería", title: "Momentos que hemos creado", subtitle: "Una muestra de bodas, fiestas y pedidos recientes." },
      filter: { all: "Todas", weddings: "Bodas", cakes: "Pasteles", bouquets: "Ramos", events: "Eventos" }
    },
    flowers: {
      header: { eyebrow: "Tienda · Flores", title: "Nuestras Flores", subtitle: "Ramos, arreglos y centros de mesa para cada ocasión." },
      note: "¿Buscas algo diferente? Escríbenos y creamos un arreglo personalizado para ti."
    },
    cakes: {
      header: { eyebrow: "Tienda · Pasteles", title: "Nuestros Pasteles", subtitle: "Pasteles artesanales para bodas, cumpleaños y celebraciones." },
      note: "También hacemos pasteles totalmente personalizados: cuéntanos tu idea y te enviamos una cotización."
    },
    shop: {
      header: { eyebrow: "Tienda", title: "Bienvenida a la tienda", subtitle: "Explora nuestras flores y pasteles, agrega tus favoritos al carrito y coordina tu entrega en minutos." },
      cat: {
        flowers: { title: "Flores", desc: "Ramos, arreglos de boda y centros de mesa.", cta: "Explorar Flores" },
        cakes: { title: "Pasteles", desc: "Pasteles de boda, cumpleaños y personalizados.", cta: "Explorar Pasteles" }
      },
      info: {
        title: "Cómo funciona la tienda",
        delivery: "Entrega o recogida: elige la opción que más te convenga al finalizar tu compra.",
        payment: "Pago seguro: plantilla lista para conectar tu proveedor de pagos (Stripe, PayPal, etc.).",
        custom: "Pedidos personalizados: para diseños a la medida, contáctanos directamente."
      }
    },
    cart: {
      header: { eyebrow: "Tu pedido", title: "Carrito de Compras" },
      table: { product: "Producto", price: "Precio", qty: "Cantidad", subtotal: "Subtotal", remove: "" },
      empty: { title: "Tu carrito está vacío", desc: "Agrega flores o pasteles desde la tienda para comenzar.", cta: "Ir a la Tienda" },
      summary: { title: "Resumen del Pedido", subtotal: "Subtotal", delivery: "Entrega", deliveryValue: "Se calcula al finalizar", total: "Total" },
      checkoutBtn: "Continuar al Pago", continueShopping: "Seguir Comprando"
    },
    checkout: {
      header: { eyebrow: "Último paso", title: "Pago &amp; Entrega", subtitle: "Completa tus datos para coordinar la entrega y el pago de tu pedido." },
      section: { contact: "Datos de Contacto", fulfillment: "Entrega o Recogida", payment: "Método de Pago" },
      field: {
        name: "Nombre completo", phone: "Teléfono", email: "Correo electrónico",
        address: "Dirección de entrega", city: "Ciudad", date: "Fecha", time: "Hora preferida", notes: "Instrucciones especiales",
        cardName: "Nombre en la tarjeta", cardNumber: "Número de tarjeta", expiry: "Vencimiento", cvv: "CVV"
      },
      fulfillment: { delivery: "Entrega a domicilio", pickup: "Recoger en tienda" },
      payment: { notice: "Plantilla de pago: aquí se conectará un proveedor real (Stripe, PayPal, etc.). No se procesan pagos todavía." },
      summary: { title: "Resumen", total: "Total" },
      placeOrder: "Confirmar Pedido",
      confirmation: { title: "¡Gracias por tu pedido!", desc: "Esto es una plantilla de demostración — aún no se ha procesado ningún pago ni entrega real.", button: "Volver a la Tienda" }
    },
    reviews: {
      header: { eyebrow: "Testimonios", title: "Reseñas de Clientes", subtitle: "Estas son algunas experiencias de quienes han celebrado con nosotros." },
      form: { title: "Deja tu Reseña" },
      field: { name: "Tu nombre", occasion: "Ocasión", rating: "Calificación", comment: "Tu comentario" },
      submit: "Enviar Reseña"
    }
  },

  en: {
    nav: {
      home: "Home", about: "About", gallery: "Gallery", flowers: "Flowers",
      cakes: "Cakes", shop: "Shop", reviews: "Reviews", cart: "Cart", order: "Order Now"
    },
    brand: { tagline: "Flowers &amp; Cakes" },
    footer: {
      about: "Handmade flowers and cakes in Miami, for weddings, parties, and every special occasion.",
      linksTitle: "Links",
      link: { home: "Home", about: "About", gallery: "Gallery", flowers: "Flowers", cakes: "Cakes", shop: "Shop", reviews: "Reviews" },
      contactTitle: "Contact",
      contact: { phoneLabel: "Phone", emailLabel: "Email", addressLabel: "Address", address: "123 Flor Street, Miami, FL" },
      hoursTitle: "Hours",
      hours: { weekdays: "Mon – Fri", weekdaysValue: "9:00 am – 6:00 pm", weekend: "Sat – Sun", weekendValue: "10:00 am – 4:00 pm" },
      rights: "All rights reserved."
    },
    home: {
      hero: {
        eyebrow: "Flowers &amp; Cakes, made to order",
        title: "Designs full of color, passion, and rhythm",
        subtitle: "Floral arrangements and artisan cakes for weddings, quinceañeras, birthdays, and every celebration that deserves a little magic.",
        cta1: "Shop Flowers", cta2: "Shop Cakes"
      },
      highlights: {
        eyebrow: "Why choose us", title: "Everything you need to celebrate",
        flowers: { title: "Fresh flowers daily", desc: "Selected and hand-arranged the same day as your delivery." },
        cakes: { title: "Artisan cakes", desc: "Original recipes, quality ingredients, and custom designs." },
        events: { title: "For every occasion", desc: "Weddings, quinceañeras, birthdays, anniversaries, and corporate events." }
      },
      featured: {
        eyebrow: "Catalog", title: "Our favorites", subtitle: "A taste of what you'll find in the shop.",
        viewFlowers: "View all flowers", viewCakes: "View all cakes"
      },
      occasions: {
        eyebrow: "Occasions", title: "We create for every special moment",
        weddings: "Weddings", parties: "Parties", birthdays: "Birthdays", corporate: "Corporate Events"
      },
      delivery: {
        eyebrow: "Delivery", title: "On-time delivery, straight to your event",
        desc: "We coordinate delivery for the exact day and time you need, with order tracking from start to finish.",
        cta: "See how it works"
      },
      testimonials: { eyebrow: "Happy customers", title: "What our clients are saying", cta: "Read all reviews" },
      cta: { title: "Ready to celebrate?", subtitle: "Start your order today and we'll take care of the rest.", button: "Start My Order" }
    },
    about: {
      header: { eyebrow: "Our story", title: "About Flor &amp; Azúcar", subtitle: "A family shop where flowers and cakes are created with the same rhythm and passion." },
      story: {
        eyebrow: "How we started", title: "Our Story",
        p1: "Flor &amp; Azúcar began with a simple idea: every celebration deserves fresh flowers and a cake made with care. We started in a home kitchen, arranging bouquets and baking cakes for friends and family.",
        p2: "Today we're still a family business, now trusted with weddings, quinceañeras, and parties across the city — always crafted by hand, one detail at a time.",
        p3: "Marisol, our founder, grew up dancing salsa and bachata, and that same rhythm — the movement, the color, the way a skirt flows as it turns — is what inspires the fluid, vibrant style behind every arrangement and cake."
      },
      owner: { role: "Founder &amp; Lead Designer", name: "Marisol Reyes", bio: "Marisol brings over ten years of floristry and baking experience together with an eye for color and movement. When she's not in the studio, you'll find her in dance class — the same energy she brings to the floor shows up in every arrangement." },
      values: {
        eyebrow: "What guides us", title: "Our Values",
        v1: { title: "Freshness", desc: "We work with local suppliers and seasonal flowers." },
        v2: { title: "Handmade", desc: "Every bouquet and cake is assembled and decorated by hand, unhurried." },
        v3: { title: "Personalization", desc: "We tailor colors, flavors, and designs to your event." },
        v4: { title: "Punctuality", desc: "Your delivery arrives when you need it, no excuses." }
      },
      cta: { title: "Let's talk about your event", subtitle: "Tell us what you're celebrating and we'll design something unique for you.", button: "Contact Us" }
    },
    gallery: {
      header: { eyebrow: "Gallery", title: "Moments we've created", subtitle: "A look at recent weddings, parties, and orders." },
      filter: { all: "All", weddings: "Weddings", cakes: "Cakes", bouquets: "Bouquets", events: "Events" }
    },
    flowers: {
      header: { eyebrow: "Shop · Flowers", title: "Our Flowers", subtitle: "Bouquets, arrangements, and centerpieces for every occasion." },
      note: "Looking for something different? Message us and we'll create a custom arrangement for you."
    },
    cakes: {
      header: { eyebrow: "Shop · Cakes", title: "Our Cakes", subtitle: "Artisan cakes for weddings, birthdays, and celebrations." },
      note: "We also make fully custom cakes — tell us your idea and we'll send you a quote."
    },
    shop: {
      header: { eyebrow: "Shop", title: "Welcome to the shop", subtitle: "Browse our flowers and cakes, add your favorites to the cart, and arrange delivery in minutes." },
      cat: {
        flowers: { title: "Flowers", desc: "Bouquets, wedding arrangements, and centerpieces.", cta: "Shop Flowers" },
        cakes: { title: "Cakes", desc: "Wedding, birthday, and custom cakes.", cta: "Shop Cakes" }
      },
      info: {
        title: "How the shop works",
        delivery: "Delivery or pickup: choose whichever works best for you at checkout.",
        payment: "Secure payment: template ready to connect your payment provider (Stripe, PayPal, etc.).",
        custom: "Custom orders: for made-to-order designs, contact us directly."
      }
    },
    cart: {
      header: { eyebrow: "Your order", title: "Shopping Cart" },
      table: { product: "Product", price: "Price", qty: "Quantity", subtotal: "Subtotal", remove: "" },
      empty: { title: "Your cart is empty", desc: "Add flowers or cakes from the shop to get started.", cta: "Go to Shop" },
      summary: { title: "Order Summary", subtotal: "Subtotal", delivery: "Delivery", deliveryValue: "Calculated at checkout", total: "Total" },
      checkoutBtn: "Continue to Checkout", continueShopping: "Continue Shopping"
    },
    checkout: {
      header: { eyebrow: "Last step", title: "Payment &amp; Delivery", subtitle: "Fill in your details to arrange delivery and payment for your order." },
      section: { contact: "Contact Details", fulfillment: "Delivery or Pickup", payment: "Payment Method" },
      field: {
        name: "Full name", phone: "Phone", email: "Email address",
        address: "Delivery address", city: "City", date: "Date", time: "Preferred time", notes: "Special instructions",
        cardName: "Name on card", cardNumber: "Card number", expiry: "Expiry", cvv: "CVV"
      },
      fulfillment: { delivery: "Home delivery", pickup: "Store pickup" },
      payment: { notice: "Payment template: a real provider (Stripe, PayPal, etc.) connects here. No payments are processed yet." },
      summary: { title: "Summary", total: "Total" },
      placeOrder: "Place Order",
      confirmation: { title: "Thank you for your order!", desc: "This is a demo template — no real payment or delivery has been processed.", button: "Back to Shop" }
    },
    reviews: {
      header: { eyebrow: "Testimonials", title: "Customer Reviews", subtitle: "A few experiences from people who've celebrated with us." },
      form: { title: "Leave a Review" },
      field: { name: "Your name", occasion: "Occasion", rating: "Rating", comment: "Your comment" },
      submit: "Submit Review"
    }
  }
};

function getNested(obj, path) {
  return path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : null), obj);
}

function applyTranslations() {
  const lang = localStorage.getItem("fya_lang") || "es";
  document.documentElement.setAttribute("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = getNested(I18N[lang], el.getAttribute("data-i18n"));
    if (value !== null) el.innerHTML = value;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const value = getNested(I18N[lang], el.getAttribute("data-i18n-placeholder"));
    if (value !== null) el.setAttribute("placeholder", value);
  });

  document.querySelectorAll(".lang-toggle button").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  // Re-render dynamic, JS-generated content so it picks up the new language.
  if (typeof renderProductGrid === "function") {
    const flowerGrid = document.querySelector("[data-product-grid='flowers']");
    const cakeGrid = document.querySelector("[data-product-grid='cakes']");
    if (flowerGrid) renderProductGrid(flowerGrid, "flowers");
    if (cakeGrid) renderProductGrid(cakeGrid, "cakes");
  }
  if (typeof renderCartPage === "function") renderCartPage();
  if (typeof renderCheckoutSummary === "function") renderCheckoutSummary();
}

function setLang(lang) {
  localStorage.setItem("fya_lang", lang);
  applyTranslations();
}

function initLangToggle() {
  document.querySelectorAll(".lang-toggle button").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.getAttribute("data-lang")));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initLangToggle();
  applyTranslations();
});
