document.querySelectorAll('.links a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

    

        function sendMessage(event) {
            event.preventDefault();
            alert("Thank you for your message! I'll get back to you soon. You can also reach me directly via email or phone.");
            event.target.reset();
        }

        // Add scroll animation
        window.addEventListener('scroll', function() {
            const elements = document.querySelectorAll('.skill-category, .project-card, .contact-info');
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        });

        document.querySelectorAll('.skill-category, .project-card, .contact-info').forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 0.6s ease';
        });

        function toggleMobileMenu() {
            const links = document.querySelector('.links');
            links.style.display = links.style.display === 'none' ? 'flex' : 'none';
        }

        window.addEventListener('scroll', function() {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.links a');
            
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });
            
        });
        let btn=document.querySelector(".secondary");
        btn.addEventListener("click",function(){
             alert("Resume download feature will be available soon! Please contact me directly for my resume.");            
        })
        