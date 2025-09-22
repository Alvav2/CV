// Función para mostrar secciones al hacer scroll
function mostrarSecciones() {
  document.querySelectorAll("section").forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top >= 0 && rect.top < window.innerHeight / 1.2) {
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    }
  });
}

// Estado inicial
document.querySelectorAll("section").forEach(sec => {
  sec.style.opacity = "0";
  sec.style.transform = "translateY(40px)";
  sec.style.transition = "all 0.8s ease-out";
});

// Ejecutar una vez al cargar
window.addEventListener("load", mostrarSecciones);

// Ejecutar al hacer scroll
document.addEventListener("scroll", mostrarSecciones);
