const massageIcon = document.querySelector(".user__massage-icon");
const massageBox = document.querySelector(".user__massage-box");
const closeMassageBox = document.querySelector(".close-btn");
massageIcon.addEventListener("click", () => {
  massageBox.classList.toggle("active-box");
});
closeMassageBox.addEventListener("click", () => {
  massageBox.classList.toggle("active-box");
});
