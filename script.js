
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

<script src="js/script.js"></script>
