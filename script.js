document.addEventListener("DOMContentLoaded", () => {
  // سال فوتر به صورت خودکار به‌روز می‌شود
  const year = new Intl.DateTimeFormat("fa-IR", { year: "numeric" }).format(new Date());
  const footerYear = document.querySelector("footer .footer-inner > p");
  if (footerYear) footerYear.textContent = `© ${year} زاراوین`;

  // انیمیشن ساده ورود کارت‌ها هنگام اسکرول
  const items = document.querySelectorAll(".card, .work-card, .contact-item");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.12});

  items.forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "translateY(18px)";
    item.style.transition = "opacity .6s ease, transform .6s ease";
    observer.observe(item);
  });
});
