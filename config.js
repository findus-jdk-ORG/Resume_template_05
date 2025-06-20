// Portfolio Configuration Data
const portfolioConfig = {
    // Personal Information
    personalInfo: {
        name: "Alex Carter",
        title: "Full Stack Developer & UI/UX Enthusiast",
        description: "Passionate about creating elegant solutions to complex problems. Specializing in modern web technologies and delivering exceptional user experiences.",
        email: "alex.carter@example.com",
        phone: "+1 (555) 123-4567",
        location: "San Francisco, CA",
        experienceYears: "5+",
        projectsCompleted: "50+",
        happyClients: "20+",
        aboutText1: "I'm a passionate Full Stack Developer with 5+ years of experience building web applications. I specialize in JavaScript technologies across the whole stack (MERN stack).",
        aboutText2: "My expertise includes developing scalable backend services, creating responsive front-end interfaces, and implementing robust database solutions. I'm committed to writing clean, efficient code and staying updated with the latest industry trends.",
        resumeFile: "resume/meet_cv2.pdf",
        socialLinks: [
            { name: "GitHub", icon: "fab fa-github", url: "https://github.com" },
            { name: "LinkedIn", icon: "fab fa-linkedin", url: "https://linkedin.com" },
            { name: "Twitter", icon: "fab fa-twitter", url: "https://twitter.com" },
            { name: "CodePen", icon: "fab fa-codepen", url: "https://codepen.io" }
        ]
    },

    // Skills
    skills: [
        { name: "HTML5", icon: "fab fa-html5", description: "Semantic markup, accessibility, SEO optimization" },
        { name: "CSS3", icon: "fab fa-css3-alt", description: "Flexbox, Grid, animations, responsive design" },
        { name: "JavaScript", icon: "fab fa-js", description: "ES6+, functional programming, async operations" },
        { name: "React", icon: "fab fa-react", description: "Hooks, Context API, Redux, Next.js" },
        { name: "Node.js", icon: "fab fa-node-js", description: "Express, REST APIs, authentication" },
        { name: "MongoDB", icon: "fas fa-database", description: "Schema design, aggregation, indexing" },
        { name: "Git", icon: "fab fa-git-alt", description: "Version control, collaboration workflows" },
        { name: "AWS", icon: "fas fa-server", description: "EC2, S3, Lambda, deployment" }
    ],

    // Projects
    projects: [
        {
            title: "E-commerce Platform",
            description: "Full-featured online store with payment integration, admin dashboard, and product management.",
            imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            technologies: ["React", "Node.js", "MongoDB"]
        },
        {
            title: "Task Management App",
            description: "Collaborative task management solution with real-time updates and team features.",
            imageUrl: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            technologies: ["React", "Firebase", "Redux"]
        },
        {
            title: "Analytics Dashboard",
            description: "Data visualization dashboard with interactive charts and custom reporting.",
            imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            technologies: ["D3.js", "Express", "PostgreSQL"]
        }
    ],

    // Contact Form
    contactForm: {
        accessKey: "a2710f77-4610-4beb-9ae9-893489bf6c56",
        subject: "New Contact Form Submission"
    },

    // Footer
    footer: {
        copyrightText: "&copy; 2024 Alex Carter. All rights reserved."
    }
};

// Initialize the portfolio when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load personal information
    document.querySelector('.hero-content h1 .highlight').textContent = portfolioConfig.personalInfo.name;
    document.querySelector('.hero-content p:nth-of-type(1)').textContent = portfolioConfig.personalInfo.title;
    document.querySelector('.hero-description').textContent = portfolioConfig.personalInfo.description;
    
    // Load about section
    document.querySelector('.about-text p:nth-of-type(1)').textContent = portfolioConfig.personalInfo.aboutText1;
    document.querySelector('.about-text p:nth-of-type(2)').textContent = portfolioConfig.personalInfo.aboutText2;
    document.querySelector('.exp-item:nth-of-type(1) h3').textContent = portfolioConfig.personalInfo.experienceYears;
    document.querySelector('.exp-item:nth-of-type(2) h3').textContent = portfolioConfig.personalInfo.projectsCompleted;
    document.querySelector('.exp-item:nth-of-type(3) h3').textContent = portfolioConfig.personalInfo.happyClients;
    
    // Load contact information
    document.querySelector('.contact-item:nth-of-type(1) p').textContent = portfolioConfig.personalInfo.email;
    document.querySelector('.contact-item:nth-of-type(2) p').textContent = portfolioConfig.personalInfo.phone;
    document.querySelector('.contact-item:nth-of-type(3) p').textContent = portfolioConfig.personalInfo.location;
    
    // Update resume download link
    const downloadLinks = document.querySelectorAll('#download-resume');
    downloadLinks.forEach(link => {
        link.setAttribute('href', portfolioConfig.personalInfo.resumeFile);
        link.setAttribute('download', portfolioConfig.personalInfo.resumeFile.split('/').pop());
    });
    
    // Load skills
    const skillsGrid = document.querySelector('.skills-grid');
    portfolioConfig.skills.forEach(skill => {
        skillsGrid.innerHTML += `
            <div class="skill-card">
                <i class="${skill.icon}"></i>
                <h3>${skill.name}</h3>
                <p>${skill.description}</p>
            </div>
        `;
    });
    
    // Load projects
    const workGrid = document.querySelector('.work-grid');
    portfolioConfig.projects.forEach(project => {
        workGrid.innerHTML += `
            <div class="work-card">
                <img src="${project.imageUrl}" alt="${project.title}">
                <div class="work-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="tech-used">
                        ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                    </div>
                    <a href="#" class="btn secondary">View Project</a>
                </div>
            </div>
        `;
    });
    
    // Load social links
    const socialContainers = [
        document.querySelector('.social-icons'),
        document.querySelector('.social-links')
    ];
    
    portfolioConfig.personalInfo.socialLinks.forEach(link => {
        socialContainers.forEach(container => {
            if (container) {
                container.innerHTML += `
                    <a href="${link.url}" target="_blank"><i class="${link.icon}"></i></a>
                `;
            }
        });
    });
    
    // Update footer
    document.querySelector('footer p').innerHTML = portfolioConfig.footer.copyrightText;
    
    // Set up contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.querySelector('input[name="access_key"]').value = portfolioConfig.contactForm.accessKey;
        contactForm.querySelector('input[name="subject"]').value = portfolioConfig.contactForm.subject;
    }
});

// Make config available globally
window.portfolioConfig = portfolioConfig;