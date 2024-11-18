// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Sample Skills Data
const skills = [
    { 
        name: 'AI Development', 
        level: '90%', 
        description: 'OpenAI API, LangChain, Hugging Face',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg'
    },
    { 
        name: 'Frontend Development', 
        level: '85%', 
        description: 'React.js, Next.js, TypeScript',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    { 
        name: 'Backend Development', 
        level: '85%', 
        description: 'Node.js, Python, FastAPI',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },
    { 
        name: 'Machine Learning', 
        level: '80%', 
        description: 'NLP, Computer Vision, PyTorch',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    }
];

// Sample Projects Data
const projects = [
    {
        title: 'Interactive Portfolio Website',
        description: 'Developed a modern, responsive portfolio website using pure HTML, CSS, and JavaScript. Implemented smooth scrolling, dynamic content loading, interactive animations, and a dark mode toggle. Created a responsive design that works seamlessly across all devices.',
        image: 'https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_1280.png',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Web Animation API']
    },
    {
        title: 'No-Code Watson Assistant Chatbot',
        description: 'Designed and implemented an intelligent customer service chatbot using IBM Watson Assistant. Created custom intents, entities, and dialog flows without programming. Integrated natural language understanding for improved user interaction and implemented context-aware responses for a more personalized experience.',
        image: 'https://raw.githubusercontent.com/IBM/watson-assistant-wordpress-plugin/master/screenshots/chat-example.png',
        technologies: ['IBM Watson Assistant', 'Natural Language Understanding', 'Dialog Flow Design', 'Customer Service Automation']
    },
    {
        title: 'AI-Powered Content Generator',
        description: 'Developed a web application that leverages OpenAI\'s GPT API to generate various types of content including blog posts, marketing copy, and social media content. Implemented features for tone adjustment, length control, and content formatting.',
        image: 'https://cdn.pixabay.com/photo/2017/05/19/06/22/desktop-2325627_1280.png',
        technologies: ['OpenAI GPT API', 'Node.js', 'Express.js', 'React.js']
    },
    {
        title: 'Image Generation Platform',
        description: 'Created a platform that utilizes DALL-E API for generating and manipulating images based on text descriptions. Implemented features for style transfer, image variations, and custom image editing.',
        image: 'https://cdn.pixabay.com/photo/2016/11/30/20/44/computer-1873831_1280.png',
        technologies: ['DALL-E API', 'Python', 'FastAPI', 'React.js']
    }
];

// Sample Recommendations Data
const recommendations = [
    {
        name: 'Sarah Chen',
        role: 'Senior AI Engineer at TechCorp',
        image: 'https://cdn.pixabay.com/photo/2017/02/16/23/10/smile-2072907_1280.jpg',
        text: 'Omotayo is an exceptional developer who brings both technical expertise and innovative thinking to every project. His work on our AI implementations was outstanding, delivering solutions that exceeded expectations.'
    },
    {
        name: 'James Rodriguez',
        role: 'Lead Developer at InnovateTech',
        image: 'https://cdn.pixabay.com/photo/2017/08/12/18/31/male-2634974_1280.jpg',
        text: 'Working with Omotayo was a great experience. His deep understanding of full-stack development and AI technologies, combined with his ability to solve complex problems, makes him a valuable asset to any team.'
    },
    {
        name: 'Emily Thompson',
        role: 'Product Manager at AI Solutions',
        image: 'https://cdn.pixabay.com/photo/2017/02/16/23/10/smile-2072907_1280.jpg',
        text: 'Omotayo demonstrated exceptional skills in developing our AI-powered platform. His attention to detail and commitment to delivering high-quality code was impressive. He has a rare combination of technical expertise and excellent communication skills.'
    },
    {
        name: 'Michael Chang',
        text: 'Brilliant problem solver with a knack for innovative solutions. Always delivers beyond expectations!'
    }
];

// Populate Skills Section
const skillsGrid = document.querySelector('.skills-grid');
skills.forEach(skill => {
    const skillItem = document.createElement('div');
    skillItem.className = 'skill-item fade-in';
    skillItem.innerHTML = `
        <div class="skill-header">
            <img src="${skill.logo}" alt="${skill.name} icon" class="skill-logo">
            <h3>${skill.name}</h3>
        </div>
        <p>${skill.description}</p>
        <div class="skill-level">
            <div class="skill-progress" style="width: ${skill.level}"></div>
        </div>
    `;
    skillsGrid.appendChild(skillItem);
});

// Populate Projects Section
const projectsGrid = document.querySelector('.projects-grid');
projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card fade-in';
    projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project-image">
        <div class="project-info">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-technologies">
                ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
            </div>
        </div>
    `;
    projectsGrid.appendChild(projectCard);
});

// Populate Recommendations Section
const recommendationsGrid = document.querySelector('.recommendations-grid');
recommendations.forEach(recommendation => {
    const recommendationCard = document.createElement('div');
    recommendationCard.className = 'recommendation-card fade-in';
    recommendationCard.innerHTML = `
        <div class="recommendation-header">
            <img src="${recommendation.image}" alt="${recommendation.name}" class="recommender-image">
            <div class="recommender-info">
                <h3>${recommendation.name}</h3>
                <p class="role">${recommendation.role}</p>
            </div>
        </div>
        <div class="recommendation-content">
            <p>${recommendation.text}</p>
        </div>
    `;
    recommendationsGrid.appendChild(recommendationCard);
});

// Handle recommendation form visibility
const toggleFormBtn = document.getElementById('toggleFormBtn');
const closeFormBtn = document.getElementById('closeFormBtn');
const cancelFormBtn = document.getElementById('cancelFormBtn');
const formWrapper = document.getElementById('recommendationFormWrapper');

function showForm() {
    formWrapper.classList.remove('hidden');
    formWrapper.style.display = 'block';
    setTimeout(() => {
        formWrapper.style.opacity = '1';
        formWrapper.style.transform = 'translateY(0)';
    }, 10);
}

function hideForm() {
    formWrapper.style.opacity = '0';
    formWrapper.style.transform = 'translateY(-20px)';
    setTimeout(() => {
        formWrapper.style.display = 'none';
        formWrapper.classList.add('hidden');
    }, 300);
}

toggleFormBtn?.addEventListener('click', showForm);
closeFormBtn?.addEventListener('click', hideForm);
cancelFormBtn?.addEventListener('click', hideForm);

// Handle recommendation form submission
document.getElementById('recommendationForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    
    // Create new recommendation card
    const newRecommendation = {
        name: formData.get('name'),
        text: formData.get('text')
    };
    
    const recommendationCard = document.createElement('div');
    recommendationCard.className = 'recommendation-card fade-in';
    recommendationCard.innerHTML = `
        <div class="recommendation-content">
            <p>${newRecommendation.text}</p>
            <p class="recommender-name">- ${newRecommendation.name}</p>
        </div>
    `;
    
    // Add the new card to the grid
    const recommendationsGrid = document.querySelector('.recommendations-grid');
    recommendationsGrid.appendChild(recommendationCard);
    
    // Reset form and hide it
    this.reset();
    hideForm();
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for Fade-in Animation
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(element => {
    element.style.opacity = 0;
    element.style.transform = 'translateY(20px)';
    observer.observe(element);
});
