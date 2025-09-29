// Вставьте сюда ваш Measurement ID из Google Analytics (GA4)
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', GA_MEASUREMENT_ID);

// функция перехода на checkout с передачей товара
function goToCheckout(productName) {
  window.location.href = "checkout.html?product=" + encodeURIComponent(productName);
}
