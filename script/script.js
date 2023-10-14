const massageIcon = document.querySelector(".user__massage-icon");
const massageBox = document.querySelector(".user__massage-box");
const closeMassageBox = document.querySelector(".close-btn");

const bookmarkIcon = document.querySelector(".user__bookmark-icon");
const bookmarkBox = document.querySelector(".user__bookmark-box");
const closeBookmarkBox = document.querySelector(".close-btn-bookmark");

massageIcon.addEventListener("click", () => {
  if (bookmarkBox.classList.contains("active-box")) {
    bookmarkBox.classList.toggle("active-box");
  }
  massageBox.classList.toggle("active-box");
});
bookmarkIcon.addEventListener("click", () => {
  if (massageBox.classList.contains("active-box")) {
    massageBox.classList.toggle("active-box");
  }
  bookmarkBox.classList.toggle("active-box");
});
closeMassageBox.addEventListener("click", () => {
  massageBox.classList.toggle("active-box");
});
closeBookmarkBox.addEventListener("click", () => {
  bookmarkBox.classList.toggle("active-box");
});
