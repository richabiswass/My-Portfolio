tailwind.config = {
    darkMode: 'class',
        theme: {
            extend: {
                colors: {
                    primary: {
                        light: '#0ea5e9',
                        dark: '#38bdf8'
                    }
                }
            }
        }
}


// Mobile Menu Toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Active Navigation Link
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('.section');
        
        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === current) {
                    link.classList.add('active');
                }
            });
        });
        
        // Back to Top Button
        const backToTopButton = document.getElementById('back-to-top');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.remove('opacity-0', 'invisible');
                backToTopButton.classList.add('opacity-100', 'visible');
            } else {
                backToTopButton.classList.remove('opacity-100', 'visible');
                backToTopButton.classList.add('opacity-0', 'invisible');
            }
        });
        
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Theme Toggle (Light/Dark Mode)
        const themeToggle = document.getElementById('theme-toggle');
        const html = document.documentElement;
        
        // Check if user has a saved preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            if (savedTheme === 'light') {
                html.classList.remove('dark');
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            } else {
                html.classList.add('dark');
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            }
        } else {
            // Set initial icon based on current mode
            if (html.classList.contains('dark')) {
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            }
        }
        
        themeToggle.addEventListener('click', () => {
            html.classList.toggle('dark');
            
            if (html.classList.contains('dark')) {
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
                localStorage.setItem('theme', 'dark');
            } else {
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
                localStorage.setItem('theme', 'light');
            }
        });
        
        // Contact Form Submission
        const contactForm = document.getElementById('contact-form');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // In a real application, you would send this data to a server
            // For demo purposes, we'll just show an alert
            alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon.`);
            
            // Reset form
            contactForm.reset();
        });
        
        // Typing Animation

        const typingText = document.getElementById('typing-text');
        const phrases = ['Richa Biswas', 'Richa Biswas'];
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;
        
        function typeEffect() {
            const currentPhrase = phrases[phraseIndex];
            
            if (isDeleting) {
                typingText.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                typingText.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100;
            }
            
            if (!isDeleting && charIndex === currentPhrase.length) {
                isDeleting = true;
                typingSpeed = 1000; // Pause at end
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typingSpeed = 500; // Pause before typing next phrase
            }
            
            setTimeout(typeEffect, typingSpeed);
        }
        
        // Start the typing animation
        setTimeout(typeEffect, 1000);
        
        // Initialize animated background
        function createBackgroundElements() {
            const animatedBg = document.querySelector('.animated-bg');
            const count = 15;
            
            for (let i = 0; i < count; i++) {
                const size = Math.random() * 30 + 10;
                const posX = Math.random() * 100;
                const posY = Math.random() * 100;
                const delay = Math.random() * 10;
                const duration = Math.random() * 10 + 15;
                const color = i % 3 === 0 ? 'rgba(56, 189, 248, 0.1)' : 
                              i % 3 === 1 ? 'rgba(139, 92, 246, 0.1)' : 
                              'rgba(236, 72, 153, 0.1)';
                
                const span = document.createElement('span');
                span.style.width = `${size}px`;
                span.style.height = `${size}px`;
                span.style.background = color;
                span.style.left = `${posX}%`;
                span.style.top = `${posY}%`;
                span.style.animationDelay = `${delay}s`;
                span.style.animationDuration = `${duration}s`;
                
                animatedBg.appendChild(span);
            }
        }
        
        createBackgroundElements();
        
        // Download Resume Button
        document.getElementById('download-resume').addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create a sample resume PDF (in a real scenario, this would be a link to an actual file)
            // For demo purposes, we'll just show an alert
            // alert('Resume download started!');
            
            // In a real application, you would use:
            window.location.href = 'RichaBiswas-July2025.pdf';
        });
        
        // Profile Image Functionality
        const changeImageBtn = document.getElementById('change-image-btn');
        const imageUploadModal = document.getElementById('image-upload-modal');
        const cancelImageBtn = document.getElementById('cancel-image-btn');
        const saveImageBtn = document.getElementById('save-image-btn');
        const imageUrlInput = document.getElementById('image-url-input');
        const initialsInput = document.getElementById('initials-input');
        const bgColorInput = document.getElementById('bg-color-input');
        const profileImageContainer = document.getElementById('profile-image-container');
        
        // Open image upload modal
        changeImageBtn.addEventListener('click', () => {
            imageUploadModal.classList.remove('hidden');
        });
        
        // Close image upload modal
        cancelImageBtn.addEventListener('click', () => {
            imageUploadModal.classList.add('hidden');
        });
        
        // Save image
        saveImageBtn.addEventListener('click', () => {
            const imageUrl = imageUrlInput.value.trim();
            const initials = initialsInput.value.trim().toUpperCase();
            const bgColor = bgColorInput.value;
            
            if (imageUrl) {
                // Use the provided image URL
                profileImageContainer.innerHTML = `
                    <img src="${imageUrl}" alt="Profile" class="profile-image w-full h-full object-cover">
                `;
            } else if (initials) {
                // Create an SVG with initials
                profileImageContainer.innerHTML = `
                    <svg class="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="100" cy="100" r="100" fill="${bgColor}" />
                        <text x="100" y="125" text-anchor="middle" fill="#ffffff" font-size="60" font-weight="bold">${initials}</text>
                    </svg>
                `;
            } else {
                // If no input, create a default avatar
                profileImageContainer.innerHTML = `
                    <div class="profile-placeholder">
                        <i class="fas fa-user text-4xl"></i>
                    </div>
                `;
            }
        });
        
        (function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9672fbc2f139a09b',t:'MTc1Mzg1ODg3My4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();