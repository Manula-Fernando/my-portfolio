document.addEventListener("DOMContentLoaded", () => {
  // --- Tab functionality ---
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetTab = this.getAttribute("data-tab");
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));
      this.classList.add("active");
      document.getElementById(targetTab).classList.add("active");
    });
  });

  // --- Skill card interactions ---
  const skillCards = document.querySelectorAll(".skill-card");
  skillCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-4px)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });

    card.addEventListener("click", function () {
      const skillName = this.querySelector(".skill-name").textContent;
      const skillDesc = this.querySelector(".skill-desc").textContent;
      alert(`${skillName}\n\n${skillDesc}`); // In a real app, use a modal
    });
  });
  
  // --- Project Details Toggle Functionality ---
  document.querySelectorAll('.project-toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const details = document.getElementById(targetId);
        if (details) {
            // Check if it's currently hidden or not set
            const isHidden = details.style.display === 'none' || details.style.display === '';
            if (isHidden) {
                details.style.display = 'block';
                button.textContent = 'Hide Details';
            } else {
                details.style.display = 'none';
                button.textContent = 'View Details';
            }
        }
    });
  });

  // --- Smooth scrolling for internal links ---
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // --- Scroll effect for navigation ---
  let lastScrollTop = 0;
  const nav = document.querySelector(".nav-tabs");
  if (nav) {
    window.addEventListener("scroll", () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop && scrollTop > 100) {
          nav.style.transform = "translateY(-100%)"; // Scrolling down
        } else {
          nav.style.transform = "translateY(0)"; // Scrolling up
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
    });
  }

  // --- Intersection observer for fade-in animations ---
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target); // Optional: stop observing once animated
      }
    });
  }, observerOptions);

  document
    .querySelectorAll(".content-card, .education-item, .skill-card, .activity-item, .project-item")
    .forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(el);
    });
    
  // --- Hover effect for profile picture ---
  const profileImg = document.querySelector(".profile-img");
  if (profileImg) {
    profileImg.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)";
      this.style.transition = "transform 0.3s ease";
    });

    profileImg.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  }

  // --- Typing effect for main title ---
  const mainTitle = document.querySelector(".main-title");
  if (mainTitle) {
    const text = mainTitle.textContent;
    mainTitle.textContent = "";
    let i = 0;
    function typeWriter() {
      if (i < text.length) {
        mainTitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    }
    setTimeout(typeWriter, 500);
  }
});


// --- Contact button functionality (can stay outside as it's a global function) ---
function handleContactClick() {
  const email = "wwmsfernando@gmail.com";
  const subject = "Contact from CV Website";
  const body = "Hello Manula,\n\nI found your CV website and would like to get in touch.\n\nBest regards,";
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
}