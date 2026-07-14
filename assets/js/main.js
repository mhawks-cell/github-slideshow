/* Site-wide behavior: mobile nav, cart (localStorage demo), product
   rendering, gallery lightbox, checkout + review form stubs.
   None of this talks to a real backend yet — see checkout.html for
   where a payment gateway and delivery API would plug in. */

const CART_KEY = "fya_cart";

/* ---------------- Placeholder images (no external requests) ----------------
   Every photo slot in this template is a generated SVG placeholder so the
   site has zero external image dependencies. Swap in real photography by
   replacing the relevant <img data-ph="..."> with a normal src, or update
   the product/category images below. */
const PH_ICONS = {
  flower: '<circle cx="12" cy="12" r="3"/><path d="M12 2a3 3 0 0 1 0 6 3 3 0 0 1 0-6zM12 16a3 3 0 0 1 0 6 3 3 0 0 1 0-6zM2 12a3 3 0 0 1 6 0 3 3 0 0 1-6 0zM16 12a3 3 0 0 1 6 0 3 3 0 0 1-6 0z"/>',
  cake: '<path d="M4 21v-8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8"/><path d="M2 21h20"/><path d="M7 11V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4"/><path d="M12 5V2"/>',
  photo: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M21 15l-5-5-4 4-3-3-5 5"/>'
};
const PH_COLORS = {
  flower: ["#f7d6e0", "#eadfc4"],
  cake: ["#eadfc4", "#f7d6e0"],
  photo: ["#f7d6e0", "#fdf1ee"]
};

function placeholderDataUri(kind, w, h) {
  const icon = PH_ICONS[kind] || PH_ICONS.photo;
  const [c1, c2] = PH_COLORS[kind] || PH_COLORS.photo;
  const iconSize = Math.min(w, h) * 0.22;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/>
    </linearGradient></defs>
    <rect width="${w}" height="${h}" fill="url(#g)"/>
    <g transform="translate(${w / 2 - iconSize / 2}, ${h / 2 - iconSize / 2}) scale(${iconSize / 24})" fill="none" stroke="#b5194a" stroke-width="1.3" opacity="0.45">${icon}</g>
  </svg>`;
  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

function initPlaceholderImages(root) {
  (root || document).querySelectorAll("img[data-ph]").forEach((img) => {
    const kind = img.getAttribute("data-ph");
    const w = parseInt(img.getAttribute("data-ph-w"), 10) || 600;
    const h = parseInt(img.getAttribute("data-ph-h"), 10) || 450;
    img.src = placeholderDataUri(kind, w, h);
  });
}

function currentLang() {
  return localStorage.getItem("fya_lang") || "es";
}

function money(n) {
  return "$" + Number(n).toFixed(2);
}

/* ---------------- Mobile nav ---------------- */
function initNavToggle() {
  const btn = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!btn || !links) return;
  btn.addEventListener("click", () => links.classList.toggle("open"));
}

/* ---------------- Cart storage ---------------- */
function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  renderCartBadge();
}

function addToCart(id) {
  const cart = getCart();
  const existing = cart.find((i) => i.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id, qty: 1 });
  }
  saveCart(cart);
}

function removeFromCart(id) {
  saveCart(getCart().filter((i) => i.id !== id));
}

function setQty(id, qty) {
  const cart = getCart();
  const item = cart.find((i) => i.id === id);
  if (!item) return;
  item.qty = Math.max(1, parseInt(qty, 10) || 1);
  saveCart(cart);
}

function cartWithDetails() {
  return getCart()
    .map((line) => {
      const product = (typeof PRODUCTS !== "undefined" ? PRODUCTS : []).find((p) => p.id === line.id);
      if (!product) return null;
      return { ...line, product };
    })
    .filter(Boolean);
}

function cartTotal() {
  return cartWithDetails().reduce((sum, i) => sum + i.product.price * i.qty, 0);
}

function cartCount() {
  return getCart().reduce((sum, i) => sum + i.qty, 0);
}

function renderCartBadge() {
  document.querySelectorAll("[data-cart-count]").forEach((el) => {
    el.textContent = cartCount();
  });
}

/* ---------------- Product grid rendering ---------------- */
function renderProductGrid(container, category) {
  if (!container || typeof PRODUCTS === "undefined") return;
  const lang = currentLang();
  let items = PRODUCTS.filter((p) => p.category === category);
  const limit = parseInt(container.getAttribute("data-limit"), 10);
  if (!isNaN(limit)) items = items.slice(0, limit);

  const phKind = category === "cakes" ? "cake" : "flower";

  container.innerHTML = items
    .map((p) => {
      const price = p.priceLabel ? p.priceLabel[lang] : money(p.price);
      const addLabel = lang === "es" ? "Agregar" : "Add to cart";
      return `
        <div class="product-card" data-id="${p.id}">
          <div class="thumb"><img data-ph="${phKind}" data-ph-w="500" data-ph-h="375" alt="${p.name[lang]}" loading="lazy"></div>
          <div class="body">
            ${p.tag ? `<span class="tag">${p.tag[lang]}</span>` : ""}
            <h3>${p.name[lang]}</h3>
            <p class="desc">${p.desc[lang]}</p>
            <div class="price-row">
              <span class="price">${price}</span>
              <button class="btn btn-primary btn-sm" data-add="${p.id}">${addLabel}</button>
            </div>
          </div>
        </div>`;
    })
    .join("");
  initPlaceholderImages(container);

  container.querySelectorAll("[data-add]").forEach((btn) => {
    btn.addEventListener("click", () => {
      addToCart(btn.getAttribute("data-add"));
      const original = btn.textContent;
      btn.textContent = lang === "es" ? "¡Agregado!" : "Added!";
      setTimeout(() => (btn.textContent = original), 1200);
    });
  });
}

/* ---------------- Cart page rendering ---------------- */
function renderCartPage() {
  const body = document.querySelector("[data-cart-body]");
  const emptyState = document.querySelector("[data-cart-empty]");
  const summaryTotal = document.querySelector("[data-cart-total]");
  const summarySubtotal = document.querySelector("[data-cart-subtotal]");
  if (!body) return;

  const lang = currentLang();
  const items = cartWithDetails();

  if (items.length === 0) {
    body.innerHTML = "";
    if (emptyState) emptyState.style.display = "block";
    document.querySelectorAll("[data-cart-has-items]").forEach((el) => (el.style.display = "none"));
    if (summaryTotal) summaryTotal.textContent = money(0);
    if (summarySubtotal) summarySubtotal.textContent = money(0);
    return;
  }

  if (emptyState) emptyState.style.display = "none";
  document.querySelectorAll("[data-cart-has-items]").forEach((el) => (el.style.display = ""));

  body.innerHTML = items
    .map(
      (i) => `
      <tr data-row="${i.id}">
        <td>
          <div class="cart-item-info">
            <img data-ph="${i.product.category === "cakes" ? "cake" : "flower"}" data-ph-w="100" data-ph-h="100" alt="${i.product.name[lang]}">
            <span>${i.product.name[lang]}</span>
          </div>
        </td>
        <td>${i.product.priceLabel ? i.product.priceLabel[lang] : money(i.product.price)}</td>
        <td><input class="qty-input" type="number" min="1" value="${i.qty}" data-qty="${i.id}"></td>
        <td>${money(i.product.price * i.qty)}</td>
        <td><button class="remove-btn" data-remove="${i.id}">${lang === "es" ? "Eliminar" : "Remove"}</button></td>
      </tr>`
    )
    .join("");
  initPlaceholderImages(body);

  const total = cartTotal();
  if (summaryTotal) summaryTotal.textContent = money(total);
  if (summarySubtotal) summarySubtotal.textContent = money(total);

  body.querySelectorAll("[data-qty]").forEach((input) => {
    input.addEventListener("change", () => {
      setQty(input.getAttribute("data-qty"), input.value);
      renderCartPage();
    });
  });
  body.querySelectorAll("[data-remove]").forEach((btn) => {
    btn.addEventListener("click", () => {
      removeFromCart(btn.getAttribute("data-remove"));
      renderCartPage();
    });
  });
}

/* ---------------- Checkout summary + fake submit ---------------- */
function renderCheckoutSummary() {
  const list = document.querySelector("[data-checkout-items]");
  const totalEl = document.querySelector("[data-checkout-total]");
  if (!list) return;

  const lang = currentLang();
  const items = cartWithDetails();

  list.innerHTML = items
    .map(
      (i) => `
      <div class="summary-row">
        <span>${i.product.name[lang]} × ${i.qty}</span>
        <span>${money(i.product.price * i.qty)}</span>
      </div>`
    )
    .join("");

  if (totalEl) totalEl.textContent = money(cartTotal());
}

function initCheckoutForm() {
  const form = document.querySelector("#checkout-form");
  if (!form) return;
  const confirmation = document.querySelector("[data-order-confirmation]");
  const deliveryFields = document.querySelector("[data-delivery-fields]");
  const methodRadios = form.querySelectorAll('input[name="fulfillment"]');

  methodRadios.forEach((radio) => {
    radio.addEventListener("change", () => {
      if (!deliveryFields) return;
      deliveryFields.style.display = radio.value === "delivery" && radio.checked ? "grid" : "none";
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Demo only: no payment gateway or delivery API is wired up yet.
    // Swap this handler for a real Stripe/PayPal + delivery-logistics
    // integration when ready.
    localStorage.removeItem(CART_KEY);
    renderCartBadge();
    form.style.display = "none";
    if (confirmation) confirmation.style.display = "block";
  });
}

/* ---------------- Gallery ---------------- */
function initGallery() {
  const filterBtns = document.querySelectorAll("[data-gallery-filter]");
  const items = document.querySelectorAll(".gallery-item");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-gallery-filter");
      items.forEach((item) => {
        const match = filter === "all" || item.getAttribute("data-category") === filter;
        item.classList.toggle("hidden", !match);
      });
    });
  });

  const lightbox = document.querySelector(".lightbox");
  const lightboxImg = lightbox ? lightbox.querySelector("img") : null;
  items.forEach((item) => {
    item.addEventListener("click", () => {
      if (!lightbox || !lightboxImg) return;
      lightboxImg.src = item.querySelector("img").src;
      lightbox.classList.add("open");
    });
  });
  const closeBtn = document.querySelector(".lightbox-close");
  if (closeBtn) closeBtn.addEventListener("click", () => lightbox.classList.remove("open"));
  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) lightbox.classList.remove("open");
    });
  }
}

/* ---------------- Reviews form (demo, session only) ---------------- */
function initReviewForm() {
  const form = document.querySelector("#review-form");
  const list = document.querySelector("[data-review-list]");
  if (!form || !list) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const lang = currentLang();
    const name = form.querySelector("#review-name").value.trim();
    const occasion = form.querySelector("#review-occasion").value;
    const rating = form.querySelector("#review-rating").value;
    const comment = form.querySelector("#review-comment").value.trim();
    if (!name || !comment) return;

    const card = document.createElement("div");
    card.className = "review-card";
    card.innerHTML = `
      <div class="stars">${"★".repeat(rating)}${"☆".repeat(5 - rating)}</div>
      <p class="quote">"${comment}"</p>
      <div class="who">${name}</div>
      <div class="occasion">${occasion}</div>
    `;
    list.prepend(card);
    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initNavToggle();
  initPlaceholderImages();
  renderCartBadge();
  initGallery();
  initReviewForm();
  initCheckoutForm();

  const flowerGrid = document.querySelector("[data-product-grid='flowers']");
  const cakeGrid = document.querySelector("[data-product-grid='cakes']");
  if (flowerGrid) renderProductGrid(flowerGrid, "flowers");
  if (cakeGrid) renderProductGrid(cakeGrid, "cakes");

  renderCartPage();
  renderCheckoutSummary();
});
