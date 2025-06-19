// Navigation
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li a');

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    hamburger.classList.toggle('toggle');
});

// Close mobile menu when clicking a link
links.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('nav-active')) {
            navLinks.classList.remove('nav-active');
            hamburger.classList.remove('toggle');
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Active navigation link based on scroll position
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelector(`.nav-links a[href="#${sectionId}"]`).classList.add('active');
        } else {
            document.querySelector(`.nav-links a[href="#${sectionId}"]`).classList.remove('active');
        }
    });
});
const downloadResume = document.getElementById('download-resume');
    if (downloadResume) {
        downloadResume.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Change button text temporarily
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Downloading...';
            
            setTimeout(() => {
                const link = document.createElement('a');
                link.href = 'resume/meet_cv2.pdf';
                link.download = 'Meet_Patel_Resume.pdf'; // Custom filename for download
                link.target = '_blank'; // Open in new tab if download fails
                link.style.display = 'none'; // Hide the link element
                
                // Important: Add these attributes to force download
                link.setAttribute('download', '');
                link.setAttribute('type', 'application/pdf');
                
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                // Restore button text
                this.innerHTML = originalText;
                
                // Show download notification
                showDownloadNotification();
            }, 500);
        });
    }
    
    function showDownloadNotification() {
        const notification = document.createElement('div');
        notification.className = 'download-notification';
        notification.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>Resume downloaded successfully!</span>
        `;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('fade-out');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 500);
        }, 2500);
    }
// Back to top button
const backToTopBtn = document.createElement('div');
backToTopBtn.className = 'back-to-top';
backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('active');
    } else {
        backToTopBtn.classList.remove('active');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalBtnContent = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Get form data
    const formData = new FormData(this);
    
    // Submit to Web3Forms
    fetch(this.action, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Show success message
            document.getElementById('result').innerHTML = `
                <div class="success-message">
                    <i class="fas fa-check-circle"></i>
                    ${data.message || 'Thank you! Your message has been sent.'}
                </div>
            `;
            document.getElementById('result').classList.remove('hidden');
            this.reset();
        } else {
            // Show error message
            document.getElementById('result').innerHTML = `
                <div class="error-message">
                    <i class="fas fa-exclamation-circle"></i>
                    ${data.message || 'There was an error sending your message. Please try again.'}
                </div>
            `;
            document.getElementById('result').classList.remove('hidden');
        }
    })
    .catch(error => {
        document.getElementById('result').innerHTML = `
            <div class="error-message">
                <i class="fas fa-exclamation-circle"></i>
                There was an error sending your message. Please try again.
            </div>
        `;
        document.getElementById('result').classList.remove('hidden');
    })
    .finally(() => {
        // Restore button state
        submitBtn.innerHTML = originalBtnContent;
        submitBtn.disabled = false;
        
        // Scroll to result message
        document.getElementById('result').scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    });
});
// Form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you for your message, Alex will get back to you soon!');
        contactForm.reset();
    });
}

// Intersection Observer for animations
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.skill-card, .work-card, .about-content, .contact-content, .section-title');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
};

// Loading animation
const loadingAnimation = () => {
    const loading = document.createElement('div');
    loading.className = 'loading';
    loading.innerHTML = '<div class="loading-spinner"></div>';
    document.body.appendChild(loading);
    
    setTimeout(() => {
        loading.style.opacity = '0';
        setTimeout(() => {
            loading.remove();
        }, 500);
    }, 1000);
};

// Typing animation for hero section
const typeWriter = () => {
    const heroText = document.querySelector('.hero-content h1');
    if (heroText) {
        const text = heroText.textContent;
        heroText.textContent = '';
        
        let i = 0;
        const typing = () => {
            if (i < text.length) {
                heroText.textContent += text.charAt(i);
                i++;
                setTimeout(typing, 50);
            }
        };
        
        setTimeout(typing, 500);
    }
};

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadingAnimation();
    animateOnScroll();
    typeWriter();
    
    // Add current year to footer
    const year = new Date().getFullYear();
    document.querySelector('footer p').innerHTML = `&copy; ${year} Alex Carter. All rights reserved.`;
});