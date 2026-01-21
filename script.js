
  const form = document.getElementById("reviewForm");
  const reviewList = document.getElementById("reviewList");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    const review = document.createElement("div");
    review.classList.add("review-item");

    review.innerHTML = `
      <strong>${name}</strong>
      <p>${message}</p>
    `;

    reviewList.prepend(review);
    form.reset();
  });
  
  
<script>
function showCategory(cat, btn) {

    // Sembunyikan semua menu
    document.querySelectorAll('.menu-card').forEach(card => card.style.display = 'none');

    // Tunjuk menu yang sesuai kategori
    document.querySelectorAll('.' + cat).forEach(card => card.style.display = 'block');

    // Highlight sidebar active
    document.querySelectorAll('.side-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Tukar title kategori
    const titles = {
        coffee: 'COFFEE SERIES',
        matcha: 'MATCHA',
        chocolate: 'CHOCOLATE',
        vietnamese: 'VIETNAMESE TEA',
        taro: 'TARO',
        frappe: 'FRAPPE SERIES',
        dessert: 'DESSERT – CAKE & CROISSANT'
    };

    document.getElementById('categoryTitle').innerText = titles[cat];
}
</script>
<script src="js/script.js"></script>