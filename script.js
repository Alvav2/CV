// Animación suave en scroll
document.addEventListener("scroll", () => {
  document.querySelectorAll("section").forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top >= 0 && rect.top < window.innerHeight / 1.5) {
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    }
  });
});

// Estado inicial de animación
document.querySelectorAll("section").forEach(sec => {
  sec.style.opacity = "0";
  sec.style.transform = "translateY(40px)";
  sec.style.transition = "all 0.8s ease-out";
});
