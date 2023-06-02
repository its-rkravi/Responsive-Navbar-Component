const toggleBtn = document.querySelector(".nav-icon");
const toggleCloseBtn = document.querySelector(".nav-icon i");
const dropDownMenu = document.querySelector(".side-nav");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const checkIsOpen = dropDownMenu.classList.contains("open");

  toggleCloseBtn.classList = checkIsOpen
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars-staggered";
};
