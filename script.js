const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const open = mobileMenu.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.textContent = open ? "×" : "☰";
  });

  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

/* ===== Featured Work quick view ===== */
const featuredProjects = {
  fmu: {
    number: "01",
    category: "Hardware / UAV",
    title: "FMU_F7H7 Flight Controller",
    description:
      "A 6-layer UAV flight-control PCB designed in Altium Designer, configured with ArduPilot and integrated with a Time-of-Flight sensor for low-altitude stability.",
    stack: ["Altium Designer", "ArduPilot", "Kakute H7", "6-Layer PCB", "ToF"],
    link: "projects.html#fmu"
  },
  vision: {
    number: "02",
    category: "Computer Vision",
    title: "Color Sorting System",
    description:
      "An edge-vision prototype that classifies product colors on a conveyor, runs on Sipeed MaixCAM Elite and sends count data to the controller over UART.",
    stack: ["Python", "MaixCAM", "Maix", "UART", "Computer Vision"],
    link: "projects.html#vision"
  },
  rtk: {
    number: "03",
    category: "Connected Systems",
    title: "RTK-GNSS LoRa Base",
    description:
      "A positioning and IoT architecture combining RTK-GNSS correction data with LoRa communications and a LoRaWAN gateway based on Raspberry Pi CM5 and RAK5146.",
    stack: ["RTK GNSS", "LoRaWAN", "ZED-F9P", "Raspberry Pi CM5", "RAK5146"],
    link: "projects.html#rtk"
  }
};

const featuredModal = document.getElementById("featuredModal");

if (featuredModal) {
  const modalNumber = document.getElementById("featuredModalNumber");
  const modalCategory = document.getElementById("featuredModalCategory");
  const modalTitle = document.getElementById("featuredModalTitle");
  const modalDescription = document.getElementById("featuredModalDescription");
  const modalStack = document.getElementById("featuredModalStack");
  const modalLink = document.getElementById("featuredModalLink");
  let lastTrigger = null;

  function openFeaturedModal(id, trigger) {
    const project = featuredProjects[id];
    if (!project) return;

    lastTrigger = trigger || null;
    modalNumber.textContent = project.number;
    modalCategory.textContent = project.category;
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalStack.innerHTML = project.stack.map(item => `<span>${item}</span>`).join("");
    modalLink.href = project.link;

    featuredModal.classList.add("open");
    featuredModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    requestAnimationFrame(() => {
      featuredModal.querySelector(".featured-modal-close")?.focus();
    });
  }

  function closeFeaturedModal() {
    featuredModal.classList.remove("open");
    featuredModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    lastTrigger?.focus();
  }

  document.querySelectorAll("[data-popup]").forEach(button => {
    button.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();
      openFeaturedModal(button.dataset.popup, button);
    });
  });

  featuredModal.querySelectorAll("[data-modal-close]").forEach(el => {
    el.addEventListener("click", closeFeaturedModal);
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && featuredModal.classList.contains("open")) {
      closeFeaturedModal();
    }
  });
}
