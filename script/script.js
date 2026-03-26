function toggleMobileMenu() {
    const panel = document.getElementById("mobileMenu");
    const overlay = document.getElementById("mobileOverlay");
    const toggleBtn = document.querySelector(".menu-toggle");

    const isOpen = panel.classList.contains("open");

    panel.classList.toggle("open");
    overlay.classList.toggle("show");

    toggleBtn.setAttribute("aria-expanded", !isOpen);
    panel.setAttribute("aria-hidden", isOpen);
  }