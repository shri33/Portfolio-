```javascript
document.addEventListener('DOMContentLoaded', () => {
    const aboutMeContent = `Innovative Front-End Developer with 3+ years of experience. Skilled in building responsive UIs using React.js,
Next.js, Redux, and modern web technologies. Adept at leveraging cutting-edge tools and frameworks to create
engaging user experiences.`;

    const skills = [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "React.js",
        "Next.js",
        "Redux",
        "Git",
        "Webpack",
        "Babel",
        "ESLint",
        "Java",
        "C",
        "Figma",
        "Chrome DevTools",
        "Jira",
        "Trello",
        "Postman",
        "VS Code",
        "SQL",
        "MongoDB",
        "Responsive Design",
        "Cross-Browser Compatibility",
        "Accessibility",
        "Performance Optimization"
    ];

    const projects = [
        {
            title: "NFT Marketing Website",
            description: "Developed using HTML5, CSS3, JavaScript, and React.js. Visit the website."
        }
    ];

    const experience = [
        {
            title: "Front-End Developer",
            company: "Web3",
            date: "01/2023 - Present",
            description: "Developed React apps for blockchain/Web3 projects. Optimized UI performance and code quality. Collaborated with designers to implement wireframes and prototypes using Figma and Adobe XD."
        },
        {
            title: "Front-End Developer",
            company: "Freelancer",
            date: "05/2022 - 07/2023",
            description: "Built responsive websites using React.js, Next.js, and modern CSS frameworks. Implemented state management and asynchronous data fetching using Redux. Gathered requirements and delivered high-quality projects."
        },
        {
            title: "Intern",
            company: "CrowdUpss",
            date: "06/2021 - 12/2021",
            description: "Assisted in web app development using HTML, CSS, and JavaScript. Integrated new features and optimized existing functionality. Performed manual testing and documented bugs in Jira."
        },
        {
            title: "QA Test Engineer",
            company: "Upwork",
            date: "10/2021 - 05/2022",
            description: "Conducted comprehensive manual testing for web, mobile, and desktop apps. Wrote detailed test cases and maintained test documentation. Reported and tracked defects using bug tracking tools."
        }
    ];

    const education = [
        {
            degree: "BSc Computer Science",
            institution: "Birla Institute of Technology and Science, Pilani",
            date: "2023 - 2026",
            description: "Relevant Courses: Software Engineering, Web Development, Databases, Data Structures and Algorithms"
        },
        {
            degree: "Certifications",
            institution: "Various",
            date: "",
            description: `Modern JS: ES6 Basics - Coursera (2023)
                        Introduction to HTML5 - Coursera (2023)
                        AWS S3 Basics - Coursera (2023)
                        Foundations of Cybersecurity - Google (2023)
                        Play It Safe: Manage Security Risks - Google (2024)`
        }
    ];

    document.getElementById('about-me').textContent = aboutMeContent;

    const skillsList = document.getElementById('skills-list');
    skills.forEach(skill => {
        const listItem = document.createElement('li');
        listItem.textContent = skill;
        skillsList.appendChild(listItem);
    });

    const projectsContainer = document.getElementById('projects-container');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        projectsContainer.appendChild(projectCard);
    });

    const experienceContainer = document.getElementById('experience-container');
    experience.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.className = 'experience-card';
        jobCard.innerHTML = `
            <h3>${job.title}</h3>
            <h4>${job.company} - ${job.date}</h4>
            <p>${job.description}</p>
        `;
        experienceContainer.appendChild(jobCard);
    });

    const educationContainer = document.getElementById('education-container');
    education.forEach(edu => {
        const eduCard = document.createElement('div');
        eduCard.className = 'education-card';
        eduCard.innerHTML = `
            <h3>${edu.degree}</h3>
            <h4>${edu.institution} - ${edu.date}</h4>
            <p>${edu.description}</p>
        `;
        educationContainer.appendChild(eduCard);
    });

    const modeToggle = document.getElementById('mode-toggle');
    modeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
    });
});
