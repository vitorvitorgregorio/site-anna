const hamburguer = document.querySelector(".hamburguer");


hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("active");
  navLinks.classList.toggle("active");
})

