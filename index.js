const backdrop = document.getElementById("backdrop");
const closeBtn = document.getElementById("close-modal");
const openHeaderBtn = document.getElementById("order-call");

closeBtn.addEventListener("click", () => {
  backdrop.classList.remove("is-open");
});




openHeaderBtn.addEventListener("click", () => {
  backdrop.classList.add("is-open");
});




