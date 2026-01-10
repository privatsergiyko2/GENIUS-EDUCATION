const backdrop = document.getElementById("backdrop");
const openBtn = document.getElementById("open-modal");
const closeBtn = document.getElementById("close-modal");

openBtn.addEventListener("click", () => {
  backdrop.classList.add("is-open");
});

closeBtn.addEventListener("click", () => {
  backdrop.classList.remove("is-open");
});