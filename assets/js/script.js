("use strict");

// element toggle function
const elementToggle = function (element) {
  element.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarButton = document.querySelector("[data-sidebar-btn]");

// sidebar toggle for mobile
sidebarButton.addEventListener("click", function () {
  elementToggle(sidebar);
});

// testimonial variables
const testimonials = document.querySelectorAll("[data-testimonials-item]");
const modelContainer = document.querySelector("[data-modal-container]");
const modelCloseButton = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// model variable
const modelImage = document.querySelector("[data-modal-img]");
const modelTitle = document.querySelector("[data-modal-title]");
const modelText = document.querySelector("[data-modal-text]");

// model toggle function
const testimonialsModel = function () {
  modelContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// click event to all modal items
for (let i = 0; i < testimonials.length; i++) {
  testimonials[i].addEventListener("click", function () {
    modelImage.src = this.querySelector("[data-testimonials-avatar]").src;
    modelImage.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modelTitle.innerHTML = this.querySelector(
      "[data-testimonials-title]"
    ).innerHTML;
    modelText.innerHTML = this.querySelector(
      "[data-testimonials-text]"
    ).innerHTML;

    testimonialsModel();
  });
}

// add click event to model class button
modelCloseButton.addEventListener("click", testimonialsModel);
overlay.addEventListener("click", testimonialsModel);

// custom select variables
const select = document.querySelector("[data-select]");
const selectableItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterButtons = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggle(this);
});

// add event in all selected items
for (let i = 0; i < selectableItems.length; i++) {
  selectableItems[i].addEventListener("click", function () {
    let selected = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggle(select);
    filterWith(selected);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");
const filterWith = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterButtons[0];

for (let i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formButton = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // form validation
    if (form.checkValidity()) {
      formButton.removeAttribute("disabled");
    } else {
      formButton.setAttribute("disabled", "");
    }
  });
}

// page navigation variable
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all navigation link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}
