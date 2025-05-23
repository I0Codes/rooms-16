console.log("Сторінка акцій завантажена"

document.addEventListener("DOMContentLoaded", () => {
  const promos = document.querySelectorAll('.promo');
  promos.forEach(promo => {
    promo.addEventListener('click', () => {
      alert("Деталі акції: " + promo.querySelector('h2').innerText);
    });
  });
});

