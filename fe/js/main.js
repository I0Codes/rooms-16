document.addEventListener('DOMContentLoaded', () => {
  // Додаємо спільний Header
  fetch('common/header.html')
    .then(response => response.text())
    .then(html => {
      const headerEl = document.getElementById('header-placeholder');
      if (headerEl) {
        headerEl.innerHTML = html;
      }
    })
    .catch(err => console.error('Помилка завантаження header:', err));

  // Додаємо спільний Footer
  fetch('common/footer.html')
    .then(response => response.text())
    .then(html => {
      const footerEl = document.getElementById('footer-placeholder');
      if (footerEl) {
        footerEl.innerHTML = html;
      }
    })
    .catch(err => console.error('Помилка завантаження footer:', err));
});
