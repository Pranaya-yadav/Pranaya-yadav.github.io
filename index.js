/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }
}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

/* -----------------------------------------
  Back to Top Button Functionality 
 ---------------------------------------- */

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});

/* -----------------------------------------
  Scrapbook-style Interactions
 ---------------------------------------- */
 document.addEventListener('DOMContentLoaded', function() {
  const contactBtn = document.querySelector('.contact-note .btn');
  const contactNote = document.querySelector('.contact-note');
  
  if (contactBtn && contactNote) {
    contactBtn.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default link behavior
      
      // Add falling animation class
      contactNote.classList.add('falling');
      
      // Scroll to contact section after a delay
      setTimeout(function() {
        document.querySelector('#contact').scrollIntoView({ 
          behavior: 'smooth'
        });
        
        // Remove falling class when animation completes
        setTimeout(function() {
          contactNote.classList.remove('falling');
        }, 1000);
      }, 500);
    });
  }
});

// Add slight random rotation to pinned elements
document.addEventListener('DOMContentLoaded', () => {
  // Apply random rotation to work boxes
  const workBoxes = document.querySelectorAll('.work__box');
  workBoxes.forEach(box => {
    // Random rotation between -2 and 2 degrees
    const randomRotation = (Math.random() * 4 - 2);
    box.style.transform = `rotate(${randomRotation}deg)`;
    
    // Add original rotation value as a data attribute for hover effect
    box.dataset.originalRotation = randomRotation;
    
    // Hover effect
    box.addEventListener('mouseenter', () => {
      box.style.transform = 'rotate(0deg) translateY(-5px)';
    });
    
    box.addEventListener('mouseleave', () => {
      box.style.transform = `rotate(${box.dataset.originalRotation}deg)`;
    });
  });
  
  // Apply random rotation to polaroid images
  const polaroidImages = document.querySelectorAll('.polaroid-image');
  polaroidImages.forEach(polaroid => {
    // Random rotation between -3 and 3 degrees
    const randomRotation = (Math.random() * 6 - 3);
    polaroid.style.transform = `rotate(${randomRotation}deg)`;
    
    // Hover effect
    polaroid.addEventListener('mouseenter', () => {
      polaroid.style.transform = 'rotate(0deg) translateY(-3px)';
    });
    
    polaroid.addEventListener('mouseleave', () => {
      polaroid.style.transform = `rotate(${randomRotation}deg)`;
    });
  });
  
  // Add subtle float animation to pins and paperclips
  const pins = document.querySelectorAll('.pin');
  pins.forEach(pin => {
    // Random delay for animation
    const randomDelay = Math.random() * 2;
    pin.style.animation = `float 3s ease-in-out ${randomDelay}s infinite`;
  });
  
  const paperclips = document.querySelectorAll('.paperclip');
  paperclips.forEach(paperclip => {
    // Random delay for animation
    const randomDelay = Math.random() * 2;
    paperclip.style.animation = `float 4s ease-in-out ${randomDelay}s infinite`;
  });
  
  // Add subtle parallax effect for handwritten notes
  const handwrittenNotes = document.querySelectorAll('.handwritten-note, .photo-annotation');
  
  window.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    handwrittenNotes.forEach(note => {
      const offsetX = (mouseX - 0.5) * 10;
      const offsetY = (mouseY - 0.5) * 10;
      
      note.style.transform = `rotate(3deg) translate(${offsetX}px, ${offsetY}px)`;
    });
  });
});

// Add float animation to CSS
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);