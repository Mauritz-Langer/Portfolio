// Initialize Lucide icons
lucide.createIcons();

// Language translations
const translations = {
    de: {
        docTitle: "Mauritz Langer | Digitales Portfolio",
        metaDescription: "Portfolio von Mauritz Langer, einem Full Stack Softwareentwickler mit Expertise in Wirtschaftsinformatik, DevOps und Performance Engineering.",
        ogTitle: "Mauritz Langer | Digitales Portfolio",
        ogDescription: "Entdecken Sie die Projekte und Fähigkeiten von Mauritz Langer, einem Full Stack Softwareentwickler, der technische Exzellenz mit Geschäftsstrategie verbindet.",
        navAbout: "Über Mich",
        navExperience: "Erfahrung",
        navEducation: "Ausbildung",
        navSkills: "Fähigkeiten",
        navProjects: "Projekte",
        navContact: "Kontakt",
        heroName: "Mauritz Langer",
        heroSlogan: "Technologie trifft auf <span class='gradient-text'>Geschäftswert</span>.",
        typingPhrases: ["Full Stack Software Developer", "Wirtschaftsinformatik-Student", "DevOps & Performance Engineering"],
        heroButton: "Meine Arbeit ansehen",
        aboutHeadline: "Hallo, ich bin Mauritz.",
        aboutParagraph1: "Als Full Stack Softwareentwickler mit Fachkenntnissen in Wirtschaftsinformatik und einer Leidenschaft für Performance Engineering und skalierbare Lösungen, spezialisiere ich mich darauf, die Lücke zwischen technischer Implementierung und geschäftlichen Anforderungen zu schließen.",
        aboutParagraph2: "Mein Ziel ist es, effiziente und skalierbare Lösungen zu schaffen, die einen echten Geschäftswert generieren, indem ich technische Exzellenz mit strategischem Geschäftsverständnis verbinde.",
        experienceTitle: "Berufserfahrung",
        experienceSubtitle: "Meine bisherigen Stationen in der Berufswelt.",
        educationTitle: "Akademische Ausbildung",
        educationSubtitle: "Mein akademischer und schulischer Werdegang.",
        exp3Title: "IT Professional",
        exp3Company: "Flender GmbH",
        exp3Date: "Feb 2024 - Heute",
        exp3Desc: "Verantwortlich für die Administration und strategische Weiterentwicklung unternehmenskritischer Applikationen im Umfeld der Teamcenter-Schnittstelle zur Optimierung von Engineering-Prozessen.",
        exp2Title: "Fachinformatiker Anwendungsentwicklung",
        exp2Company: "Flender GmbH",
        exp2Date: "Jan 2022 - Feb 2024",
        exp2Desc: "Konzeption und Entwicklung einer zentralen Middleware-Schnittstelle (Java, Spring) zur Anbindung diverser Business-Applikationen an Teamcenter, wodurch die Datenkonsistenz und Prozessautomatisierung verbessert wurden.",
        exp1Title: "Ausbildung zum Fachinformatiker",
        exp1Company: "Flender GmbH",
        exp1Date: "Jul 2020 - Jan 2022",
        exp1Desc: "Mitarbeit in den Bereichen PLM und Infrastruktur; praktische Erfahrung in der Konzeption und Implementierung von REST-APIs zur Unterstützung von Automatisierungsprojekten.",
        edu5Title: "M.Sc. Informatik - Intelligente Systeme",
        edu5Uni: "Westfälische Hochschule",
        edu5Date: "Sep 2024 - Heute",
        edu4Title: "B.A. Wirtschaftsinformatik",
        edu4Uni: "Westfälische Hochschule / IHK Münster",
        edu4Date: "Jul 2020 - Feb 2024",
        edu3Title: "VWA Betriebswirt",
        edu3Uni: "IHK Münster",
        edu3Date: "Jul 2020 - Okt 2023",
        edu2Title: "Abschluss Fachinformatiker",
        edu2Uni: "IHK Nordwestfalen",
        edu2Date: "Jul 2020 - Jan 2022",
        edu1Title: "Abitur",
        edu1Uni: "Gymnasium Mariengarden",
        edu1Date: "Aug 2012 - Jun 2020",
        skillsTitle: "Technische Fähigkeiten",
        skillsSubtitle: "Ein Überblick über meine Kernkompetenzen und Werkzeuge.",
        projectsTitle: "Ausgewählte Projekte",
        projectsSubtitle: "Ein Blick auf einige meiner Arbeiten.",
        project1Title: "Version Control Backend",
        project1Desc: "Ein robustes Backend-System für die Versionskontrolle, entwickelt mit einem Fokus auf Performance und Skalierbarkeit.",
        project2Title: "Portfolio Website",
        project2Desc: "Eine moderne, interaktive Portfolio-Website mit KI-Integration zur Präsentation meiner Projekte und Fähigkeiten.",
        project3Title: "Wasserball Tabelle",
        project3Desc: "Eine Webanwendung zur Anzeige und Verwaltung von Wasserball-Liga-Tabellen und Spielergebnissen in Echtzeit.",
        project4Title: "Thesis Template",
        project4Desc: "Eine flexible und wiederverwendbare LaTeX-Vorlage zur Erstellung wissenschaftlicher Arbeiten und Abschlussarbeiten.",
        projectLink: "Details ansehen",
        contactTitle: "Kontaktieren Sie mich! ✨",
        contactSubtitle: "Stellen Sie eine schnelle Frage an meinen KI-Assistenten oder schreiben Sie mir direkt eine Nachricht.",
        aiChatTitle: "Fragen Sie die KI",
        aiName: "KI-Assistent",
        aiGreeting: "Hallo! Ich bin der KI-Assistent von Mauritz. Stellen Sie mir gerne Fragen zu seinen Fähigkeiten oder Projekten.",
        aiPlaceholder: "Fragen Sie etwas...",
        contactFormTitle: "Schreiben Sie mir eine Nachricht",
        formNameLabel: "Ihr Name",
        formEmailLabel: "Ihre E-Mail",
        formMessageLabel: "Ihre Nachricht",
        formSubmitButton: "Nachricht senden",
        contactOr: "Oder finden Sie mich auf:",
        footerText: `&copy; ${new Date().getFullYear()} Mauritz Langer. Alle Rechte vorbehalten.`,
        modalProblemTitle: "Problemstellung",
        modalRoleTitle: "Meine Rolle & Lösungsansatz",
        modalChallengeTitle: "Technische Herausforderung & Lösung",
        modalResultTitle: "Ergebnis",
        modalGithubLink: "Code auf GitHub ansehen",
        p1ModalProblem: "Standard-Versionskontrollsysteme wie Git sind für große Binärdateien ineffizient. Ziel war es, ein hochperformantes, eigenes System für solche Anwendungsfälle zu schaffen.",
        p1ModalRole: "Als Backend-Architekt und Hauptentwickler war ich für das Design der Systemarchitektur und die Kernimplementierung mit Java und Spring Boot verantwortlich.",
        p1ModalChallenge: "Die größte Herausforderung war die Entwicklung eines effizienten Diffing-Algorithmus für Binärdaten. Ich habe eine Lösung implementiert, die auf Block-Hashing basiert, um nur geänderte Teile zu übertragen und so die Performance drastisch zu steigern.",
        p1ModalResult: "Ein skalierbares Backend, das Push- und Pull-Operationen für große Dateien signifikant beschleunigt und als robuste Grundlage für komplexe Engineering-Workflows dient.",
        p2ModalProblem: "Ein statischer Lebenslauf reicht heute nicht mehr aus. Ziel war es, ein modernes, dynamisches und interaktives Portfolio zu schaffen, das meine Fähigkeiten eindrucksvoll demonstriert.",
        p2ModalRole: "Als Full-Stack-Entwickler war ich für das gesamte Projekt verantwortlich – vom Design bis zur finalen Implementierung.",
        p2ModalChallenge: "Die Integration der Gemini API für einen live KI-Assistenten und die nahtlose Implementierung eines Dark/Light-Modes mit CSS-Variablen in einer einzigen, portablen HTML-Datei waren die spannendsten Aufgaben.",
        p2ModalResult: "Die interaktive Webseite, die Sie gerade sehen. Sie kombiniert ansprechendes Design mit moderner Technologie und bietet ein einzigartiges Benutzererlebnis.",
        p3ModalProblem: "Für lokale Wasserball-Ligen fehlte eine moderne Plattform, um Ergebnisse und Tabellen in Echtzeit anzuzeigen und zu verwalten.",
        p3ModalRole: "Ich habe als Full-Stack-Entwickler eine entkoppelte Architektur mit Angular (Frontend) und FastAPI (Python-Backend) konzipiert und umgesetzt.",
        p3ModalChallenge: "Die Echtzeit-Aktualisierung der Spielstände für alle verbundenen Clients war entscheidend. Ich habe dies erfolgreich mit WebSockets gelöst, um eine sofortige und zuverlässige Datenübertragung zu gewährleisten.",
        p3ModalResult: "Eine schnelle, responsive Web-App, die nun aktiv von der lokalen Wasserball-Community genutzt wird und die manuelle Tabellenpflege überflüssig macht.",
        p4ModalProblem: "Das wiederholte und fehleranfällige Einrichten von LaTeX-Umgebungen für wissenschaftliche Arbeiten stiehlt wertvolle Zeit.",
        p4ModalRole: "Ich übernahm die Rolle des Automatisierungs- und DevOps-Experten, um den gesamten Prozess zu optimieren.",
        p4ModalChallenge: "Die Herausforderung lag darin, nicht nur eine Vorlage zu erstellen, sondern den kompletten Kompilierungsprozess zu automatisieren. Ich habe eine CI/CD-Pipeline mit GitHub Actions aufgebaut.",
        p4ModalResult: "Eine wiederverwendbare Vorlage und eine Pipeline, die bei jedem 'git push' automatisch ein perfekt formatiertes PDF generiert. Dies reduziert den Einrichtungsaufwand auf null und sichert professionelle Ergebnisse."
    },
    en: {
        docTitle: "Mauritz Langer | Digital Portfolio",
        metaDescription: "Portfolio of Mauritz Langer, a Full Stack Software Developer with expertise in Business Informatics, DevOps, and Performance Engineering.",
        ogTitle: "Mauritz Langer | Digital Portfolio",
        ogDescription: "Discover the projects and skills of Mauritz Langer, a Full Stack Software Developer connecting technical excellence with business strategy.",
        navAbout: "About Me",
        navExperience: "Experience",
        navEducation: "Education",
        navSkills: "Skills",
        navProjects: "Projects",
        navContact: "Contact",
        heroName: "Mauritz Langer",
        heroSlogan: "Connecting Technology with <span class='gradient-text'>Business Value</span>.",
        typingPhrases: ["Full Stack Software Developer", "Business Informatics Student", "DevOps & Performance Engineering"],
        heroButton: "View My Work",
        aboutHeadline: "Hi, I'm Mauritz.",
        aboutParagraph1: "As a Full Stack Software Developer with expertise in Business Informatics and a passion for performance engineering and scalable solutions, I specialize in bridging the gap between technical implementation and business requirements.",
        aboutParagraph2: "My goal is to create efficient, scalable solutions that drive business value by combining technical excellence with business strategy.",
        experienceTitle: "Work Experience",
        experienceSubtitle: "My professional milestones.",
        educationTitle: "Education",
        educationSubtitle: "My academic and educational background.",
        exp3Title: "IT Professional",
        exp3Company: "Flender GmbH",
        exp3Date: "Feb 2024 - Present",
        exp3Desc: "Responsible for the administration and strategic development of business-critical applications within the Teamcenter interface ecosystem to optimize engineering processes.",
        exp2Title: "IT Specialist Application Development",
        exp2Company: "Flender GmbH",
        exp2Date: "Jan 2022 - Feb 2024",
        exp2Desc: "Architected and developed a central middleware interface (Java, Spring) to connect diverse business applications with Teamcenter, thereby improving data consistency and process automation.",
        exp1Title: "Apprenticeship as IT Specialist",
        exp1Company: "Flender GmbH",
        exp1Date: "Jul 2020 - Jan 2022",
        exp1Desc: "Collaborated in PLM and infrastructure departments; gained practical experience in designing and implementing REST APIs to support automation projects.",
        edu5Title: "M.Sc. Computer Science - Intelligent Systems",
        edu5Uni: "Westphalian University of Applied Sciences",
        edu5Date: "Sep 2024 - Present",
        edu4Title: "B.A. Business Informatics",
        edu4Uni: "Westphalian University of Applied Sciences / IHK Münster",
        edu4Date: "Jul 2020 - Feb 2024",
        edu3Title: "Business Administration Diploma (VWA)",
        edu3Uni: "IHK Münster",
        edu3Date: "Jul 2020 - Oct 2023",
        edu2Title: "Certified IT Specialist",
        edu2Uni: "IHK Nordwestfalen",
        edu2Date: "Jul 2020 - Jan 2022",
        edu1Title: "A-Levels (Abitur)",
        edu1Uni: "Gymnasium Mariengarden",
        edu1Date: "Aug 2012 - Jun 2020",
        skillsTitle: "Technical Skills",
        skillsSubtitle: "An overview of my core competencies and tools.",
        projectsTitle: "Featured Projects",
        projectsSubtitle: "A look at some of my work.",
        project1Title: "Version Control Backend",
        project1Desc: "A robust backend system for version control, developed with a focus on performance and scalability.",
        project2Title: "Portfolio Website",
        project2Desc: "A modern, interactive portfolio website with AI integration to showcase my projects and skills.",
        project3Title: "Water Polo Table",
        project3Desc: "A web application for displaying and managing water polo league tables and match results in real-time.",
        project4Title: "Thesis Template",
        project4Desc: "A flexible and reusable LaTeX template for creating scientific papers and theses.",
        projectLink: "View Details",
        contactTitle: "Let's Get in Touch! ✨",
        contactSubtitle: "Ask my AI assistant a quick question or send me a message directly.",
        aiChatTitle: "Ask the AI",
        aiName: "AI Assistant",
        aiGreeting: "Hello! I'm Mauritz's AI assistant. Feel free to ask any questions about his skills or projects.",
        aiPlaceholder: "Ask something...",
        contactFormTitle: "Send me a message",
        formNameLabel: "Your Name",
        formEmailLabel: "Your Email",
        formMessageLabel: "Your Message",
        formSubmitButton: "Send Message",
        contactOr: "Or find me on:",
        footerText: `&copy; ${new Date().getFullYear()} Mauritz Langer. All rights reserved.`,
        modalProblemTitle: "Problem Statement",
        modalRoleTitle: "My Role & Approach",
        modalChallengeTitle: "Technical Challenge & Solution",
        modalResultTitle: "Outcome",
        modalGithubLink: "View Code on GitHub",
        p1ModalProblem: "Standard version control systems like Git are inefficient for large binary files. The goal was to create a high-performance, custom system for such use cases.",
        p1ModalRole: "As the backend architect and lead developer, I was responsible for designing the system architecture and the core implementation using Java and Spring Boot.",
        p1ModalChallenge: "The main challenge was developing an efficient diffing algorithm for binary data. I implemented a solution based on block hashing to transfer only changed parts, drastically improving performance.",
        p1ModalResult: "A scalable backend that significantly accelerates push and pull operations for large files and serves as a robust foundation for complex engineering workflows.",
        p2ModalProblem: "A static resume is no longer sufficient today. The goal was to create a modern, dynamic, and interactive portfolio that impressively demonstrates my skills.",
        p2ModalRole: "As a full-stack developer, I was responsible for the entire project – from the design to the final implementation.",
        p2ModalChallenge: "Integrating the Gemini API for a live AI assistant and seamlessly implementing a dark/light mode with CSS variables in a single, portable HTML file were the most exciting tasks.",
        p2ModalResult: "The interactive website you are currently viewing. It combines appealing design with modern technology and offers a unique user experience.",
        p3ModalProblem: "Local water polo leagues lacked a modern platform to display and manage results and standings in real-time.",
        p3ModalRole: "As a full-stack developer, I designed and implemented a decoupled architecture with Angular (frontend) and FastAPI (Python backend).",
        p3ModalChallenge: "Real-time updating of scores for all connected clients was crucial. I successfully solved this using WebSockets to ensure instant and reliable data transmission.",
        p3ModalResult: "A fast, responsive web app that is now actively used by the local water polo community, making manual table maintenance obsolete.",
        p4ModalProblem: "The repetitive and error-prone process of setting up LaTeX environments for academic papers steals valuable time.",
        p4ModalRole: "I took on the role of an automation and DevOps expert to optimize the entire process.",
        p4ModalChallenge: "The challenge was not just to create a template, but to automate the entire compilation process. I built a CI/CD pipeline using GitHub Actions.",
        p4ModalResult: "A reusable template and a pipeline that automatically generates a perfectly formatted PDF on every 'git push'. This reduces setup effort to zero and ensures professional results."
    }
};

// Global variables
let currentLanguage = 'de';
let typingTimeout;

// Language Management
function setLanguage(lang) {
    localStorage.setItem('language', lang);
    if (!['de', 'en'].includes(lang)) return;
    currentLanguage = lang;
    document.documentElement.lang = lang;

    const translation = translations[lang];
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.dataset.langKey;
        if (translation[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translation[key];
            } else if (el.tagName === 'META') {
                el.content = translation[key];
            } else {
                el.innerHTML = translation[key];
            }
        }
    });

    clearTimeout(typingTimeout);
    resetTypingEffect();
    updateLangButtons();
}

function updateLangButtons() {
    const langDeBtns = [document.getElementById('lang-de'), document.getElementById('lang-de-mobile')];
    const langEnBtns = [document.getElementById('lang-en'), document.getElementById('lang-en-mobile')];
    const activeClasses = ['font-bold', 'text-black', 'dark:text-white'];
    const inactiveClasses = ['font-semibold', 'text-muted'];

    if (currentLanguage === 'de') {
        langDeBtns.forEach(btn => {
            btn.disabled = true;
            btn.classList.add(...activeClasses);
            btn.classList.remove(...inactiveClasses);
        });
        langEnBtns.forEach(btn => {
            btn.disabled = false;
            btn.classList.add(...inactiveClasses);
            btn.classList.remove(...activeClasses);
        });
    } else {
        langEnBtns.forEach(btn => {
            btn.disabled = true;
            btn.classList.add(...activeClasses);
            btn.classList.remove(...inactiveClasses);
        });
        langDeBtns.forEach(btn => {
            btn.disabled = false;
            btn.classList.add(...inactiveClasses);
            btn.classList.remove(...activeClasses);
        });
    }
}

// Theme Management
const themeToggleBtns = [document.getElementById('theme-toggle'), document.getElementById('theme-toggle-mobile')];
const darkIcons = [document.getElementById('theme-toggle-dark-icon'), document.getElementById('theme-toggle-dark-icon-mobile')];
const lightIcons = [document.getElementById('theme-toggle-light-icon'), document.getElementById('theme-toggle-light-icon-mobile')];

function updateThemeIcons() {
    if (document.documentElement.classList.contains('dark')) {
        darkIcons.forEach(i => i.classList.remove('hidden'));
        lightIcons.forEach(i => i.classList.add('hidden'));
    } else {
        darkIcons.forEach(i => i.classList.add('hidden'));
        lightIcons.forEach(i => i.classList.remove('hidden'));
    }
}

themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
        updateThemeIcons();
        initParticles();
    });
});

// Typing Animation
const typingTextElement = document.getElementById('typing-text');
let phrases = [];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentPhrase = phrases[phraseIndex];
    if(!currentPhrase) return;

    if (isDeleting) {
        typingTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typingTimeout = setTimeout(type, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingTimeout = setTimeout(type, 500);
    } else {
        const typingSpeed = isDeleting ? 50 : 150;
        typingTimeout = setTimeout(type, typingSpeed);
    }
}

function resetTypingEffect() {
    phrases = translations[currentLanguage].typingPhrases;
    phraseIndex = 0;
    charIndex = 0;
    isDeleting = false;
    typingTextElement.textContent = '';
    clearTimeout(typingTimeout);
    type();
}

// Scroll Animations
const scrollTargets = document.querySelectorAll('.scroll-target');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

scrollTargets.forEach(target => {
    observer.observe(target);
});

// Header and Scroll Effects
const header = document.getElementById('header');
const scrollToTopBtn = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
    const isScrolled = window.scrollY > 50;
    header.classList.toggle('scrolled', isScrolled);
    header.classList.toggle('backdrop-blur-sm', isScrolled);
    scrollToTopBtn.classList.toggle('visible', window.scrollY > 300);
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Mobile Menu
const mobileMenu = document.getElementById('mobile-menu');
const toggleMenu = () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
};

[document.getElementById('mobile-menu-btn'), document.getElementById('close-mobile-menu-btn'), ...document.querySelectorAll('.menu-link')].forEach(el => {
    el.addEventListener('click', () => {
        if (mobileMenu.classList.contains('flex')) {
            toggleMenu();
        }
    });
});

document.getElementById('mobile-menu-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
});

// Particles Animation
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particlesArray;

window.addEventListener('resize', function(){
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    initParticles();
});

class Particle {
    constructor(x, y, dX, dY, s) {
        this.x = x;
        this.y = y;
        this.directionX = dX;
        this.directionY = dY;
        this.size = s;
    }

    draw(color) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = color;
        ctx.fill();
    }

    update(color) {
        if(this.x > canvas.width || this.x < 0) {
            this.directionX = -this.directionX;
        }
        if(this.y > canvas.height || this.y < 0) {
            this.directionY = -this.directionY;
        }
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw(color);
    }
}

function initParticles() {
    particlesArray = [];
    let num = (canvas.height * canvas.width) / 9000;
    for(let i = 0; i < num; i++) {
        let s = (Math.random() * 2) + 1;
        let x = (Math.random() * ((innerWidth - s * 2) - (s * 2)) + s * 2);
        let y = (Math.random() * ((innerHeight - s * 2) - (s * 2)) + s * 2);
        let dX = (Math.random() * .4) - .2;
        let dY = (Math.random() * .4) - .2;
        particlesArray.push(new Particle(x, y, dX, dY, s));
    }
}

function animateParticles() {
    const particleRgb = getComputedStyle(document.documentElement).getPropertyValue('--particle-rgb').trim();
    const particleColor = `rgba(${particleRgb}, 0.6)`;
    requestAnimationFrame(animateParticles);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for(let i = 0; i < particlesArray.length; i++){
        particlesArray[i].update(particleColor);
    }
    connectParticles(particleRgb);
}

function connectParticles(rgb) {
    let opacityValue = 1;
    for(let a = 0; a < particlesArray.length; a++){
        for(let b = a; b < particlesArray.length; b++){
            let dist = ((particlesArray[a].x - particlesArray[b].x) ** 2) + ((particlesArray[a].y - particlesArray[b].y) ** 2);
            if(dist < (canvas.width / 7) * (canvas.height / 7)){
                opacityValue = 1 - (dist / 20000);
                ctx.strokeStyle = `rgba(${rgb},${opacityValue})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
    }
}

// Modal Management
function initModals() {
    const openModalButtons = document.querySelectorAll('[data-modal-target]');
    const closeModalButtons = document.querySelectorAll('[data-modal-close]');
    const overlays = document.querySelectorAll('.modal-overlay');

    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = document.querySelector("#" + button.dataset.modalTarget);
            openModal(modal);
        });
    });

    overlays.forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeModal(overlay);
            }
        });
    });

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal-overlay');
            closeModal(modal);
        });
    });

    function openModal(modal) {
        if (modal == null) return;
        modal.classList.add('active');
        document.body.style.overflowY = 'hidden';
    }

    function closeModal(modal) {
        if (modal == null) return;
        modal.classList.remove('active');
        document.body.style.overflowY = 'auto';
    }
}

// AI Chat Functionality
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatBox = document.getElementById('chat-box');
const chatSubmitBtn = document.getElementById('chat-submit-btn');

function addMessage(message, sender) {
    const messageDiv = document.createElement('div');
    if (sender === 'user') {
        messageDiv.className = 'flex items-start gap-3 justify-end';
        messageDiv.innerHTML = `<div><p class="font-bold text-right text-gray-800 dark:text-slate-300">${currentLanguage === 'de' ? 'Sie' : 'You'}</p><div class="bg-blue-500 text-white rounded-lg p-3 mt-1 inline-block"><p>${message}</p></div></div><div class="bg-slate-300 dark:bg-slate-600 p-2 rounded-full flex-shrink-0"><i data-lucide="user" class="w-5 h-5 text-black dark:text-white"></i></div>`;
    } else {
        messageDiv.className = 'flex items-start gap-3';
        const thinkingText = currentLanguage === 'de' ? 'Denke nach...' : 'Thinking...';
        const content = sender === 'loading'
            ? `<div class="bg-gray-200 dark:bg-slate-700 rounded-lg p-3 mt-1 inline-block"><div class="flex items-center gap-2"><span>${thinkingText}</span><div class="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></div><div class="w-2 h-2 bg-sky-400 rounded-full animate-pulse delay-75"></div><div class="w-2 h-2 bg-sky-400 rounded-full animate-pulse delay-150"></div></div></div>`
            : `<div class="bg-gray-200 dark:bg-slate-700 rounded-lg p-3 mt-1 inline-block"><p>${message}</p></div>`;

        messageDiv.innerHTML = `<div class="bg-sky-500 p-2 rounded-full flex-shrink-0"><i data-lucide="sparkles" class="w-5 h-5 text-white"></i></div><div><p class="font-bold text-sky-500" data-lang-key="aiName">${translations[currentLanguage].aiName}</p>${content}</div>`;
    }
    chatBox.appendChild(messageDiv);
    lucide.createIcons();
    chatBox.scrollTop = chatBox.scrollHeight;
    return messageDiv;
}

async function callGeminiAPI(userQuery) {
    const apiKey = ""; // Add your Gemini API key here
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

    const aboutText = translations[currentLanguage].aboutParagraph1 + " " + translations[currentLanguage].aboutParagraph2;
    const skills = Array.from(document.querySelectorAll('#skills h3')).map(el => el.innerText).join(', ');
    const projects = Object.keys(translations[currentLanguage]).filter(k => k.startsWith('project') && k.endsWith('Desc')).map(key => {
        const titleKey = key.replace('Desc', 'Title');
        return `- ${translations[currentLanguage][titleKey]}: ${translations[currentLanguage][key]}`;
    }).join('\n');
    const experience = Object.keys(translations[currentLanguage]).filter(k => k.startsWith('exp') && k.endsWith('Title')).map(key => {
        const base = key.replace('Title', '');
        return `- ${translations[currentLanguage][key]} at ${translations[currentLanguage][base+'Company']} (${translations[currentLanguage][base+'Date']}): ${translations[currentLanguage][base+'Desc']}`;
    }).join('\n');
    const education = Object.keys(translations[currentLanguage]).filter(k => k.startsWith('edu') && k.endsWith('Title')).map(key => {
        const base = key.replace('Title', '');
        return `- ${translations[currentLanguage][key]} from ${translations[currentLanguage][base+'Uni']} (${translations[currentLanguage][base+'Date']})`;
    }).join('\n');

    const systemPrompt = `Sie sind ein KI-Assistent für das Portfolio von Mauritz Langer. Antworten Sie in ${currentLanguage === 'de' ? 'deutscher' : 'englischer'} Sprache auf Fragen über Mauritz. Hier sind die wichtigsten Informationen:

Über Mauritz:
${aboutText}

Berufserfahrung:
${experience}

Ausbildung:
${education}

Technische Fähigkeiten:
${skills}

Projekte:
${projects}

Antworten Sie freundlich, professionell und hilfsreich. Fokussieren Sie sich auf die bereitgestellten Informationen über Mauritz.`;

    const payload = {
        contents: [{ parts: [{ text: userQuery }] }],
        systemInstruction: { parts: [{ text: systemPrompt }] },
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`API error: ${response.statusText}`);
        }

        const result = await response.json();
        return result.candidates?.[0]?.content?.parts?.[0]?.text || (currentLanguage === 'de' ? "Entschuldigung, ich konnte keine Antwort finden." : "Sorry, I couldn't find an answer.");
    } catch (error) {
        console.error("Gemini API call failed:", error);
        return currentLanguage === 'de' ? "Es tut mir leid, es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut." : "I'm sorry, an error occurred. Please try again later.";
    }
}

chatForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    const userInput = chatInput.value.trim();
    if (!userInput) return;

    addMessage(userInput, 'user');
    chatInput.value = '';
    chatSubmitBtn.disabled = true;

    const loadingMessage = addMessage('', 'loading');
    const aiResponse = await callGeminiAPI(userInput);
    loadingMessage.remove();
    addMessage(aiResponse, 'ai');

    chatSubmitBtn.disabled = false;
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(localStorage.getItem('language') || 'de');

    [document.getElementById('lang-de'), document.getElementById('lang-de-mobile')].forEach(b =>
        b.addEventListener('click', () => setLanguage('de'))
    );
    [document.getElementById('lang-en'), document.getElementById('lang-en-mobile')].forEach(b =>
        b.addEventListener('click', () => setLanguage('en'))
    );

    updateThemeIcons();

    document.body.style.overflow = 'hidden';
    const firstTarget = document.querySelector('.scroll-target');
    if(firstTarget) {
        firstTarget.classList.add('visible');
    }

    initParticles();
    animateParticles();
    initModals();
});

// Preloader
window.onload = () => {
    document.getElementById('preloader').classList.add('loaded');
    document.body.style.overflow = 'auto';
};
