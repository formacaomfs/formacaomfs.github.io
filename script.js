/*
 * CONFIGURAÇÃO RÁPIDA
 * 1. Cole o endereço da página de pagamento em CHECKOUT_URL.
 * 2. Se quiser exibir o preço, escreva-o em COURSE_PRICE (ex.: "R$ 197,00").
 *    Deixe vazio para manter a mensagem neutra atual.
 */
const CHECKOUT_URL = "";
const COURSE_PRICE = "";

const checkoutButtons = document.querySelectorAll(".js-checkout");
const coursePrice = document.querySelector("#course-price");
const year = document.querySelector("#current-year");
const header = document.querySelector(".site-header");
const mobileBuy = document.querySelector(".mobile-buy");
const revealItems = document.querySelectorAll(".reveal");
const accordionItems = document.querySelectorAll(".accordion details");

if (CHECKOUT_URL) {
  checkoutButtons.forEach((button) => {
    button.href = CHECKOUT_URL;
    button.target = "_blank";
    button.rel = "noopener noreferrer";
  });
}

if (COURSE_PRICE && coursePrice) {
  coursePrice.textContent = COURSE_PRICE;
}

if (year) {
  year.textContent = new Date().getFullYear();
}

const updateHeader = () => {
  header?.classList.toggle("scrolled", window.scrollY > 120);
  mobileBuy?.classList.toggle("visible", window.scrollY > 560);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -30px" },
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

accordionItems.forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;

    accordionItems.forEach((otherItem) => {
      if (otherItem !== item) otherItem.open = false;
    });
  });
});
