// Shared JavaScript: mobile navigation, active link support, footer year, and form validation.
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
      menuButton.textContent = isOpen ? "✕" : "☰";
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation menu");
        menuButton.textContent = "☰";
      });
    });
  }

  document.querySelectorAll(".current-year").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  const contactForm = document.querySelector("#contactForm");
  const formStatus = document.querySelector("#formStatus");

  if (contactForm && formStatus) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      formStatus.classList.remove("error");

      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        formStatus.textContent = "Please complete all required fields with valid information.";
        formStatus.classList.add("error");
        return;
      }

      const name = contactForm.elements.fullName.value.trim();
      formStatus.textContent = `Thanks, ${name}! Your form passed validation. This demo does not send data to a server yet.`;
      contactForm.reset();
    });
  }
});
