// assets/main.js

// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Project Gallery Data
const projectGalleries = {
  "social-media-campaign": {
    title: "Social Media Campaign",
    images: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=800&fit=crop",
    ],
  },
  "ad-campaign": {
    title: "Digital Ad Campaign",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=800&fit=crop",
    ],
  },
  "photo-manipulation": {
    title: "Photo Manipulation Design",
    images: [
      "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1607696829245-162d2d6d2f8c?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=800&h=800&fit=crop",
    ],
  },
  "motion-graphics": {
    title: "2D Motion Graphics",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=800&fit=crop",
    ],
  },
  "video-editing": {
    title: "Video Editing Project",
    images: [
      "https://images.unsplash.com/photo-1574267432553-8b4b88fa3297?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1593349480506-8433634cdcbe?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1556438064-2d7646166914?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1614680376573-df3480f65a38?w=800&h=800&fit=crop",
    ],
  },
  "brand-design": {
    title: "Brand Design Project",
    images: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1486025402772-bc179c8dfb0e?w=800&h=800&fit=crop",
    ],
  },
};

// Device detection
function isMobile() {
  return window.innerWidth <= 768;
}

function isTablet() {
  return window.innerWidth > 768 && window.innerWidth <= 1024;
}

function isTouchDevice() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}

// Page Loading Animation
window.addEventListener("load", () => {
  initLoader();
});

// Initialize Loading Animation
function initLoader() {
  const tl = gsap.timeline();

  // Initial setup - hide elements
  gsap.set(
    ".hero-description, .hero-stats, .hero-buttons, .profile-card, .scroll-indicator, .floating-icons",
    {
      opacity: 0,
      y: 50,
    }
  );

  // Set up title words for animation
  gsap.set(".word", {
    opacity: 0,
    y: 100,
  });

  gsap.set(".intro-badge", {
    opacity: 0,
    scale: 0.5,
  });

  // Animate intro badge
  tl.to(".intro-badge", {
    duration: 0.8,
    opacity: 1,
    scale: 1,
    ease: "back.out(1.7)",
  })

    // Animate title words with stagger
    .to(
      ".word",
      {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: "power3.out",
        stagger: 0.2, // Delay between each word
      },
      "-=0.3"
    )

    // Animate subtitle
    .to(
      ".subtitle",
      {
        duration: 0.8,
        opacity: 1,
        y: 0,
        ease: "power3.out",
      },
      "-=0.5"
    )

    // Animate description
    .to(
      ".hero-description",
      {
        duration: 0.8,
        opacity: 1,
        y: 0,
        ease: "power3.out",
      },
      "-=0.5"
    )

    // Animate stats
    .to(
      ".hero-stats",
      {
        duration: 0.8,
        opacity: 1,
        y: 0,
        ease: "power3.out",
      },
      "-=0.4"
    )

    // Animate buttons
    .to(
      ".hero-buttons",
      {
        duration: 0.8,
        opacity: 1,
        y: 0,
        ease: "power3.out",
      },
      "-=0.3"
    )

    // Animate profile card
    .to(
      ".profile-card",
      {
        duration: 1.2,
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "elastic.out(1, 0.8)",
      },
      "-=0.8"
    )

    // Animate floating icons
    .to(
      ".floating-icons",
      {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: "power3.out",
      },
      "-=0.5"
    )

    // Animate scroll indicator
    .to(
      ".scroll-indicator",
      {
        duration: 0.6,
        opacity: 1,
        y: 0,
        ease: "power3.out",
      },
      "-=0.3"
    );

  // Start counter animations and other effects after load
  setTimeout(() => {
    animateCounters();
    initScrollAnimations();
    initFloatingAnimation();
  }, 2000);
}

// Animate Statistics Counters
function animateCounters() {
  const counters = document.querySelectorAll(".stat-number");

  counters.forEach((counter) => {
    const target = parseInt(counter.getAttribute("data-count"));
    const duration = 2;

    gsap.to(counter, {
      duration: duration,
      textContent: target,
      roundProps: "textContent",
      ease: "power2.out",
      onUpdate: function () {
        const currentValue = Math.ceil(this.targets()[0].textContent);
        if (target >= 50) {
          counter.textContent = currentValue + "+";
        } else {
          counter.textContent = currentValue;
        }
      },
    });
  });
}

// Floating Elements Animation
function initFloatingAnimation() {
  // Animate background orbs
  gsap.utils.toArray(".gradient-orb").forEach((orb, index) => {
    gsap.to(orb, {
      duration: 20 + index * 5,
      rotation: 360,
      ease: "none",
      repeat: -1,
    });

    gsap.to(orb, {
      duration: 15 + index * 3,
      x: gsap.utils.random(-100, 100),
      y: gsap.utils.random(-100, 100),
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });
  });

  // Animate social icons
  gsap.utils.toArray(".social-icon").forEach((icon, index) => {
    gsap.to(icon, {
      duration: 4 + index * 0.5,
      y: gsap.utils.random(-20, -40),
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });

    gsap.to(icon, {
      duration: 8 + index * 0.3,
      rotation: gsap.utils.random(-15, 15),
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });
  });
}

// ScrollTrigger Animations
function initScrollAnimations() {
  // Section titles animation
  gsap.utils.toArray(".section-title").forEach((title) => {
    gsap.fromTo(
      title,
      {
        opacity: 0,
        y: 80,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: title,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  // Section subtitles animation
  gsap.utils.toArray(".section-subtitle").forEach((subtitle) => {
    gsap.fromTo(
      subtitle,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: subtitle,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  // About text animation
  gsap.fromTo(
    ".large-text",
    {
      opacity: 0,
      y: 60,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".large-text",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // Skills animation
  gsap.utils.toArray(".skill-item").forEach((item, index) => {
    gsap.fromTo(
      item,
      {
        opacity: 0,
        y: 80,
        rotation: 5,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        rotation: 0,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        delay: index * 0.1,
      }
    );
  });

  // Adobe tools animation
  gsap.utils.toArray(".tool-card").forEach((card, index) => {
    gsap.fromTo(
      card,
      {
        opacity: 0,
        x: index % 2 === 0 ? -100 : 100,
        rotation: index % 2 === 0 ? -10 : 10,
      },
      {
        opacity: 1,
        x: 0,
        rotation: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        delay: index * 0.15,
      }
    );
  });

  // Portfolio tabs animation
  gsap.fromTo(
    ".portfolio-tabs",
    {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".portfolio-tabs",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // Portfolio items animation
  gsap.utils.toArray(".portfolio-item").forEach((item, index) => {
    gsap.fromTo(
      item,
      {
        opacity: 0,
        y: 100,
        rotation: gsap.utils.random(-5, 5),
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        rotation: 0,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        delay: index * 0.1,
      }
    );
  });

  // Contact section animation
  gsap.fromTo(
    ".contact-card",
    {
      opacity: 0,
      y: 80,
      scale: 0.9,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      ease: "back.out(1.0)",
      scrollTrigger: {
        trigger: ".contact-card",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // Contact methods animation
  gsap.utils.toArray(".contact-method").forEach((method, index) => {
    gsap.fromTo(
      method,
      {
        opacity: 0,
        x: index % 2 === 0 ? -50 : 50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: method,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        delay: index * 0.2,
      }
    );
  });
}

// Portfolio Tabs Functionality
function initPortfolioTabs() {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  // Set initial state
  tabContents.forEach((content, index) => {
    if (index === 0) {
      content.style.display = "block";
      content.style.opacity = "1";
      content.classList.add("active");
    } else {
      content.style.display = "none";
      content.style.opacity = "0";
      content.classList.remove("active");
    }
  });

  // Add event listeners to tab buttons
  tabBtns.forEach((btn, btnIndex) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      const targetTab = btn.getAttribute("data-tab");

      // Remove active class from all buttons
      tabBtns.forEach((b) => b.classList.remove("active"));

      // Add active class to clicked button
      btn.classList.add("active");

      // Hide all tab contents with animation
      tabContents.forEach((content) => {
        content.classList.remove("active");
        gsap.to(content, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
          onComplete: () => {
            content.style.display = "none";
          },
        });
      });

      // Show target content after delay
      setTimeout(() => {
        const targetContent = document.getElementById(targetTab);
        if (targetContent) {
          targetContent.style.display = "block";
          targetContent.classList.add("active");

          // Animate content appearance
          gsap.fromTo(
            targetContent,
            {
              opacity: 0,
              y: 30,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power3.out",
              onComplete: () => {
                targetContent.style.opacity = "1";
              },
            }
          );

          // Animate portfolio items in the new tab
          const portfolioItems =
            targetContent.querySelectorAll(".portfolio-item");
          if (portfolioItems.length > 0) {
            gsap.fromTo(
              portfolioItems,
              {
                opacity: 0,
                y: 50,
                scale: 0.9,
                rotation: gsap.utils.random(-5, 5),
              },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                rotation: 0,
                duration: 0.6,
                ease: "back.out(1.7)",
                stagger: 0.1,
                delay: 0.2,
              }
            );
          }
        } else {
          // Target content not found
        }
      }, 350);
    });
  });
}

// Portfolio Gallery Functionality
function initPortfolioGallery() {
  const portfolioCards = document.querySelectorAll(".portfolio-card");
  const modal = document.getElementById("portfolioModal");
  const modalTitle = document.getElementById("modalTitle");
  const galleryGrid = document.getElementById("galleryGrid");
  const closeModal = document.getElementById("closeModal");
  const imageViewer = document.getElementById("imageViewer");
  const viewerImage = document.getElementById("viewerImage");
  const viewerClose = document.getElementById("viewerClose");
  const viewerPrev = document.getElementById("viewerPrev");
  const viewerNext = document.getElementById("viewerNext");

  let currentImageIndex = 0;
  let currentGalleryImages = [];

  // Add click event to portfolio cards
  portfolioCards.forEach((card) => {
    // For mobile and tablet, don't prevent the gallery from opening on card click
    if (isTouchDevice() || isMobile() || isTablet()) {
      card.addEventListener("click", (e) => {
        // Don't open modal if clicking on view gallery button
        if (e.target.closest(".view-gallery-btn")) {
          return;
        }

        const projectId = card.getAttribute("data-project");
        if (projectGalleries[projectId]) {
          openGalleryModal(projectId);
        }
      });
    } else {
      // Desktop behavior - only open on button click
      card.addEventListener("click", (e) => {
        if (e.target.closest(".view-gallery-btn")) {
          return;
        }

        const projectId = card.getAttribute("data-project");
        if (projectGalleries[projectId]) {
          openGalleryModal(projectId);
        }
      });
    }

    // Add click event to view gallery buttons
    const viewGalleryBtn = card.querySelector(".view-gallery-btn");
    if (viewGalleryBtn) {
      viewGalleryBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();
        const projectId = card.getAttribute("data-project");
        if (projectGalleries[projectId]) {
          openGalleryModal(projectId);
        }
      });

      // Prevent touch events from bubbling
      viewGalleryBtn.addEventListener("touchstart", (e) => {
        e.stopPropagation();
      });

      viewGalleryBtn.addEventListener("touchend", (e) => {
        e.stopPropagation();
        e.preventDefault();
        const projectId = card.getAttribute("data-project");
        if (projectGalleries[projectId]) {
          openGalleryModal(projectId);
        }
      });
    }
  });

  // Open gallery modal
  function openGalleryModal(projectId) {
    const project = projectGalleries[projectId];
    if (!project) return;

    modalTitle.textContent = project.title;
    galleryGrid.innerHTML = "";

    // Create gallery items
    project.images.forEach((imageSrc, index) => {
      const galleryItem = document.createElement("div");
      galleryItem.className = "gallery-item";
      galleryItem.innerHTML = `
        <img src="${imageSrc}" alt="${project.title} ${
        index + 1
      }" loading="lazy">
        <div class="gallery-item-overlay">
          <svg viewBox="0 0 24 24">
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
          </svg>
        </div>
      `;

      galleryItem.addEventListener("click", () => {
        openImageViewer(project.images, index);
      });

      // Touch events for mobile
      galleryItem.addEventListener("touchend", (e) => {
        e.preventDefault();
        openImageViewer(project.images, index);
      });

      galleryGrid.appendChild(galleryItem);
    });

    // Show modal with animation
    modal.style.display = "flex";
    document.body.style.overflow = "hidden"; // Prevent body scroll

    gsap.fromTo(
      modal,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: "power2.out" }
    );
    gsap.fromTo(
      ".modal-content",
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }
    );

    // Animate gallery items
    gsap.fromTo(
      ".gallery-item",
      { opacity: 0, y: 30, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.2,
      }
    );
  }

  // Open image viewer
  function openImageViewer(images, startIndex) {
    currentGalleryImages = images;
    currentImageIndex = startIndex;
    showCurrentImage();

    imageViewer.style.display = "flex";
    document.body.style.overflow = "hidden"; // Prevent body scroll

    gsap.fromTo(
      imageViewer,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: "power2.out" }
    );
  }

  // Show current image in viewer
  function showCurrentImage() {
    if (currentGalleryImages.length > 0) {
      viewerImage.src = currentGalleryImages[currentImageIndex];

      // Animate image change
      gsap.fromTo(
        viewerImage,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  }

  // Navigate to previous image
  function previousImage() {
    currentImageIndex =
      (currentImageIndex - 1 + currentGalleryImages.length) %
      currentGalleryImages.length;
    showCurrentImage();
  }

  // Navigate to next image
  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % currentGalleryImages.length;
    showCurrentImage();
  }

  // Close modal
  function closeGalleryModal() {
    gsap.to(modal, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.out",
      onComplete: () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Restore body scroll
      },
    });
  }

  // Close image viewer
  function closeImageViewer() {
    gsap.to(imageViewer, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.out",
      onComplete: () => {
        imageViewer.style.display = "none";
        document.body.style.overflow = "auto"; // Restore body scroll
      },
    });
  }

  // Event listeners
  closeModal.addEventListener("click", closeGalleryModal);
  viewerClose.addEventListener("click", closeImageViewer);
  viewerPrev.addEventListener("click", previousImage);
  viewerNext.addEventListener("click", nextImage);

  // Touch events for mobile
  closeModal.addEventListener("touchend", (e) => {
    e.preventDefault();
    closeGalleryModal();
  });

  viewerClose.addEventListener("touchend", (e) => {
    e.preventDefault();
    closeImageViewer();
  });

  viewerPrev.addEventListener("touchend", (e) => {
    e.preventDefault();
    previousImage();
  });

  viewerNext.addEventListener("touchend", (e) => {
    e.preventDefault();
    nextImage();
  });

  // Close modal when clicking outside
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeGalleryModal();
    }
  });

  // Close image viewer when clicking outside
  imageViewer.addEventListener("click", (e) => {
    if (e.target === imageViewer) {
      closeImageViewer();
    }
  });

  // Touch events for closing modals
  modal.addEventListener("touchend", (e) => {
    if (e.target === modal) {
      closeGalleryModal();
    }
  });

  imageViewer.addEventListener("touchend", (e) => {
    if (e.target === imageViewer) {
      closeImageViewer();
    }
  });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (imageViewer.style.display === "flex") {
      switch (e.key) {
        case "Escape":
          closeImageViewer();
          break;
        case "ArrowLeft":
          previousImage();
          break;
        case "ArrowRight":
          nextImage();
          break;
      }
    } else if (modal.style.display === "flex") {
      if (e.key === "Escape") {
        closeGalleryModal();
      }
    }
  });

  // Swipe gestures for mobile
  let startX = 0;
  let startY = 0;

  imageViewer.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  });

  imageViewer.addEventListener("touchmove", (e) => {
    e.preventDefault(); // Prevent scrolling
  });

  imageViewer.addEventListener("touchend", (e) => {
    if (!startX || !startY) return;

    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    const deltaX = startX - endX;
    const deltaY = startY - endY;

    // Only process horizontal swipes
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (Math.abs(deltaX) > 50) {
        // Minimum swipe distance
        if (deltaX > 0) {
          nextImage(); // Swiped left, show next image
        } else {
          previousImage(); // Swiped right, show previous image
        }
      }
    }

    startX = 0;
    startY = 0;
  });
}

// Button Interactions
function initButtonInteractions() {
  const viewWorkBtn = document.getElementById("viewWork");
  const getInTouchBtn = document.getElementById("getInTouch");

  if (viewWorkBtn) {
    viewWorkBtn.addEventListener("click", () => {
      // Button click animation
      gsap.to(viewWorkBtn, {
        duration: 0.1,
        scale: 0.95,
        ease: "power2.out",
        yoyo: true,
        repeat: 1,
      });

      // Smooth scroll to portfolio
      gsap.to(window, {
        duration: 1.5,
        scrollTo: ".portfolio",
        ease: "power2.inOut",
      });
    });
  }

  if (getInTouchBtn) {
    getInTouchBtn.addEventListener("click", () => {
      // Button click animation
      gsap.to(getInTouchBtn, {
        duration: 0.1,
        scale: 0.95,
        ease: "power2.out",
        yoyo: true,
        repeat: 1,
      });

      // Smooth scroll to contact
      gsap.to(window, {
        duration: 1.0,
        scrollTo: ".contact",
        ease: "power2.inOut",
      });
    });
  }
}

// Magnetic Button Effects (disabled on touch devices)
function initMagneticButtons() {
  if (isTouchDevice()) return; // Skip magnetic effects on touch devices

  const magneticElements = document.querySelectorAll(
    ".btn-primary, .btn-secondary, .tab-btn"
  );

  magneticElements.forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * 0.2;
      const deltaY = (e.clientY - centerY) * 0.2;

      gsap.to(el, {
        duration: 0.3,
        x: deltaX,
        y: deltaY,
        ease: "power2.out",
      });
    });

    el.addEventListener("mouseleave", () => {
      gsap.to(el, {
        duration: 0.6,
        x: 0,
        y: 0,
        ease: "elastic.out(1, 0.6)",
      });
    });
  });
}

// Card Hover Effects
function initCardHoverEffects() {
  // Portfolio cards
  const portfolioCards = document.querySelectorAll(".portfolio-card");
  portfolioCards.forEach((card) => {
    if (!isTouchDevice()) {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          duration: 0.3,
          y: -15,
          scale: 1.02,
          rotation: gsap.utils.random(-2, 2),
          ease: "power2.out",
        });

        // Animate the preview image
        const preview = card.querySelector(".project-preview");
        if (preview) {
          gsap.to(preview, {
            duration: 0.3,
            scale: 1.05,
            ease: "power2.out",
          });
        }
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          duration: 0.5,
          y: 0,
          scale: 1,
          rotation: 0,
          ease: "elastic.out(1, 0.6)",
        });

        // Reset preview image
        const preview = card.querySelector(".project-preview");
        if (preview) {
          gsap.to(preview, {
            duration: 0.5,
            scale: 1,
            ease: "elastic.out(1, 0.6)",
          });
        }
      });
    }
  });

  // Skill and tool cards
  const skillCards = document.querySelectorAll(".skill-item, .tool-card");
  skillCards.forEach((card) => {
    if (!isTouchDevice()) {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          duration: 0.3,
          y: -10,
          scale: 1.03,
          rotation: gsap.utils.random(-1, 1),
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          duration: 0.5,
          y: 0,
          scale: 1,
          rotation: 0,
          ease: "elastic.out(1, 0.6)",
        });
      });
    }
  });
}

// Parallax Effects (disabled on mobile for performance)
function initParallaxEffects() {
  if (isMobile()) return; // Skip parallax on mobile for better performance

  // Background orbs parallax
  gsap.utils.toArray(".gradient-orb").forEach((orb, index) => {
    gsap.to(orb, {
      yPercent: -30 * (index + 1),
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
  });

  // Profile image parallax
  gsap.to(".profile-image", {
    y: -50,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: 1,
    },
  });
}

// Text Reveal Animations - Simple fade in
function initTextAnimations() {
  // Simple fade in for text elements
  const textElements = document.querySelectorAll(
    ".hero-description, .large-text"
  );

  textElements.forEach((text) => {
    gsap.fromTo(
      text,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: text,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
}

// Initialize everything when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  // Initialize all functionality
  initButtonInteractions();
  initMagneticButtons();
  initCardHoverEffects();
  initParallaxEffects();
  initTextAnimations();
  initPortfolioGallery();
  initSocialIcons();

  // Initialize portfolio tabs after a short delay
  setTimeout(() => {
    initPortfolioTabs();
  }, 500);
});

// Social Icons Click Functionality
function initSocialIcons() {
  // WhatsApp functionality
  const whatsappIcon = document.querySelector('.social-icon.whatsapp');
  if (whatsappIcon) {
    whatsappIcon.addEventListener('click', () => {
      openWhatsApp();
    });
  }

  // Add click events to other social icons
  const instagramIcon = document.querySelector('.social-icon.instagram');
  if (instagramIcon) {
    instagramIcon.addEventListener('click', () => {
      window.open('https://www.instagram.com/m_8annam/', '_blank');
    });
  }

  const facebookIcon = document.querySelector('.social-icon.facebook');
  if (facebookIcon) {
    facebookIcon.addEventListener('click', () => {
      window.open('https://www.facebook.com/moghaannam', '_blank');
    });
  }

  const linkedinIcon = document.querySelector('.social-icon.linkedin');
  if (linkedinIcon) {
    linkedinIcon.addEventListener('click', () => {
      window.open('https://www.linkedin.com/in/8annam/', '_blank');
    });
  }
}

// WhatsApp Function
function openWhatsApp() {
  const phoneNumber = "201007209512";
  const message = "Hello! I'm interested in your design services.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// Handle window resize
window.addEventListener("resize", () => {
  ScrollTrigger.refresh();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: target,
        ease: "power2.inOut",
      });
    }
  });
});

// Add scroll progress indicator
function addScrollProgress() {
  const progressBar = document.createElement("div");
  progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 4px;
        background: linear-gradient(90deg, #dc2626, #ea580c, #7c2d12);
        z-index: 9999;
        transition: width 0.1s ease;
        box-shadow: 0 0 10px rgba(220, 38, 38, 0.5);
    `;
  document.body.appendChild(progressBar);

  window.addEventListener("scroll", () => {
    const scrolled =
      (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) *
      100;
    progressBar.style.width = scrolled + "%";
  });
}

// Initialize scroll progress
addScrollProgress();
