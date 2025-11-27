import React, {useEffect, useRef, useState} from 'react';
import {
    ArrowUp,
    ArrowUpRight,
    Brain,
    ChevronRight,
    Code,
    Cpu,
    Database,
    Download,
    ExternalLink,
    FileText,
    Github,
    Globe,
    Heart,
    Languages,
    Linkedin,
    Mail,
    Menu,
    Moon,
    Phone,
    Send,
    Server,
    Shield,
    Sun,
    Terminal,
    User,
    X
} from 'lucide-react';
import {initAmplitude, trackAmplitudeEvent} from './amplitude';

// --- Typdefinitionen ---

type Socials = {
    github: string;
    linkedin: string;
};

type PersonalInfo = {
    name: string;
    email: string;
    phone: string;
    socials: Socials;
};

type NavTranslation = {
    home: string;
    skills: string;
    experience: string;
    personal: string; // Neu
    projects: string;
    contact: string;
};

type HeroTranslation = {
    status: string;
    tagline: string;
    subTagline: string;
    ctaProject: string;
    ctaCV: string;
};

type SkillCategories = {
    frontend: string;
    backend: string;
    devops: string;
    ai: string;
    data: string;
};

type SkillsTranslation = {
    title: string;
    subtitle: string;
    categories: SkillCategories;
};

type Job = {
    id: number;
    title: string;
    company: string;
    period: string;
    description: string;
    tech: string[];
};

type ExperienceTranslation = {
    title: string;
    jobs: Job[];
};

type EducationItem = {
    id: number;
    degree: string;
    institution: string;
    period: string;
};

type EducationTranslation = {
    title: string;
    items: EducationItem[];
};

type LanguageItem = {
    name: string;
    level: string;
    percent: number;
};

type PersonalTranslation = {
    title: string;
    subtitle: string; // Neu
    langTitle: string;
    languages: LanguageItem[];
    interestTitle: string;
    interests: string[];
};

type ProjectItem = {
    id: number;
    title: string;
    category: string;
    type: string;
    description: string;
    tech: string[];
    link: string;
    color: string;
    image: string;
};

type ProjectsTranslation = {
    title: string;
    subtitle: string;
    filterAll: string;
    items: ProjectItem[];
};

type ContactFormTranslation = {
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
};

type ContactTranslation = {
    title: string;
    text: string;
    form: ContactFormTranslation;
    emailLabel: string;
    phoneLabel: string;
    ctaMobile: string;
};

type FooterTranslation = {
    imprint: string;
    privacy: string;
    copyright: string;
};

type Translation = {
    meta: {
        title: string;
        description: string;
    };
    nav: NavTranslation;
    hero: HeroTranslation;
    skills: SkillsTranslation;
    experience: ExperienceTranslation;
    education: EducationTranslation;
    personal: PersonalTranslation;
    projects: ProjectsTranslation;
    contact: ContactTranslation;
    footer: FooterTranslation;
};

type Translations = {
    de: Translation;
    en: Translation;
};

// --- Globale Styles ---
const GlobalStyles = () => (
    <style>{`
    html {
      scroll-behavior: smooth;
      scroll-padding-top: 0;
    }
    /* Light Mode Scrollbar */
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      background: #f3f4f6;
    }
    ::-webkit-scrollbar-thumb {
      background: #d1d5db;
      border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #06b6d4;
    }

    /* Dark Mode Scrollbar via CSS Class Strategy */
    .dark ::-webkit-scrollbar-track {
      background: #0a0a0a;
    }
    .dark ::-webkit-scrollbar-thumb {
      background: #333;
    }
    
    body.menu-open, body.modal-open {
      overflow: hidden;
    }
  `}</style>
);

// --- Übersetzungen & Daten ---

const translations: Translations = {
    de: {
        meta: {
            title: "Mauritz Langer - Software Entwickler | Full Stack & DevOps",
            description: "Portfolio von Mauritz Langer, Full Stack Software Engineer spezialisiert auf Web, App & DevOps Architekturen. Entdecken Sie Projekte und Fähigkeiten."
        },
        nav: {
            home: "Home",
            skills: "Skills",
            experience: "Werdegang",
            personal: "Persönliches",
            projects: "Projekte",
            contact: "Kontakt"
        },
        hero: {
            status: "Verfügbar für Projekte",
            tagline: "Zukunft gestalten mit Code.",
            subTagline: "Full Stack Software Engineer spezialisiert auf Web, App & DevOps Architekturen.",
            ctaProject: "Arbeit ansehen",
            ctaCV: "CV Download"
        },
        skills: {
            title: "Tech Stack",
            subtitle: "Werkzeuge und Technologien, die ich meistere",
            categories: {
                frontend: "Frontend & Mobile",
                backend: "Backend Services",
                devops: "DevOps & Cloud",
                ai: "AI & Machine Learning",
                data: "Data & Tools"
            }
        },
        experience: {
            title: "Berufserfahrung",
            jobs: [
                {
                    id: 1,
                    title: "IT Professional",
                    company: "Flender GmbH",
                    period: "02.2024 - Heute",
                    description: "Administration und Weiterentwicklung von geschäftskritischen Applikationen rund um die Teamcenter Schnittstelle. Fokus auf Performance-Optimierung und Systemstabilität.",
                    tech: ["Teamcenter", "Java", "AWS", "Oracle"]
                },
                {
                    id: 2,
                    title: "Fachinformatiker Anwendungsentwicklung",
                    company: "Flender GmbH",
                    period: "01.2022 - 02.2024",
                    description: "Entwicklung einer komplexen Schnittstelle zwischen Teamcenter und diversen Business Applikationen. Implementierung von Automatisierungsprozessen.",
                    tech: ["C#", ".NET", "SQL"]
                },
                {
                    id: 3,
                    title: "Ausbildung Fachinformatiker",
                    company: "Flender GmbH",
                    period: "07.2020 - 01.2022",
                    description: "Duale Ausbildung mit Schwerpunkten in PLM und Infrastruktur. Frühe Übernahme von Verantwortung im Bereich der REST-API-Entwicklung.",
                    tech: ["Python", "REST API", "Linux"]
                }
            ]
        },
        education: {
            title: "Ausbildung",
            items: [
                {
                    id: 1,
                    degree: "M.Sc. Informatik - Intelligente Systeme",
                    institution: "Westfälische Hochschule",
                    period: "09.2024 - Heute"
                },
                {
                    id: 2,
                    degree: "B.A. Wirtschaftsinformatik",
                    institution: "Westfälische Hochschule",
                    period: "07.2020 - 02.2024"
                },
                {id: 3, degree: "VWA Betriebswirt", institution: "IHK Münster", period: "07.2020 - 10.2023"},
                {
                    id: 4,
                    degree: "Fachinformatiker Anwendungsentwicklung",
                    institution: "IHK Nordwestfalen",
                    period: "07.2020 - 01.2022"
                }
            ]
        },
        personal: {
            title: "Persönliches",
            subtitle: "Sprachen & Interessen",
            langTitle: "Sprachen",
            languages: [
                {name: "Deutsch", level: "Muttersprache", percent: 100},
                {name: "Englisch", level: "Fließend (C1)", percent: 90}
            ],
            interestTitle: "Interessen",
            interests: ["Wasserball", "Segeln", "Tech Trends", "Programmieren"]
        },
        projects: {
            title: "Ausgewählte Projekte",
            subtitle: "Einblicke in meine privaten und Open-Source Arbeiten",
            filterAll: "Alle",
            items: [
                {
                    id: 1,
                    title: "DrinkDoors",
                    category: "Mobile App",
                    type: "Mobile",
                    description: "Eine interaktive Trinkspiel-App, die mit React Native für iOS und Android entwickelt wurde. Backend-Services basieren auf FastAPI und garantieren Echtzeit-Performance.",
                    tech: ["React Native", "FastAPI", "Postgres"],
                    link: "https://www.drinkdoors.com",
                    color: "from-pink-500 to-rose-500",
                    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=800"
                },
                {
                    id: 2,
                    title: "Wasserball Live",
                    category: "Progressive Web App",
                    type: "Web",
                    description: "Eine PWA zur optimierten Darstellung von DSV-Tabellen auf Mobilgeräten. Fokus auf Offline-First-Ansatz und schnelle Ladezeiten.",
                    tech: ["Angular", "PWA", "TypeScript"],
                    link: "https://wasserball-tabelle.mauritzlanger.de",
                    color: "from-blue-400 to-cyan-300",
                    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&q=80&w=800"
                },
                {
                    id: 3,
                    title: "Thesis Template",
                    category: "Open Source",
                    type: "Open Source",
                    description: "Ein hochgradig anpassbares LaTeX-Template für akademische Abschlussarbeiten. Weit verbreitet und aktiv von der Community genutzt.",
                    tech: ["LaTeX", "CI/CD"],
                    link: "https://github.com/Mauritz-Langer/ThesisTemplate",
                    color: "from-emerald-400 to-teal-500",
                    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
                },
                {
                    id: 4,
                    title: "Mein Portfolio",
                    category: "Web Development",
                    type: "Web",
                    description: "Diese Website selbst! Entwickelt mit React und Tailwind CSS. Fokus auf Performance, Dark Mode, i18n und responsives Design.",
                    tech: ["React", "Tailwind", "Vite"],
                    link: "https://github.com/Mauritz-Langer/portfolio",
                    color: "from-slate-500 to-slate-700",
                    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800"
                }
            ]
        },
        contact: {
            title: "Lass uns sprechen!",
            text: "Ich bin immer offen für spannende Projekte, neue Technologien oder einfach einen entspannten Tech-Talk.",
            form: {
                name: "Name",
                namePlaceholder: "Dein Name",
                email: "Email",
                emailPlaceholder: "deine@email.com",
                message: "Nachricht",
                messagePlaceholder: "Wie kann ich helfen?",
                submit: "Nachricht senden"
            },
            emailLabel: "Email",
            phoneLabel: "Telefon",
            ctaMobile: "Jetzt Kontaktieren"
        },
        footer: {
            imprint: "Impressum",
            privacy: "Datenschutz",
            copyright: "Entwickelt mit React & Tailwind."
        }
    },
    en: {
        meta: {
            title: "Mauritz Langer - Software Developer | Full Stack & DevOps",
            description: "Portfolio of Mauritz Langer, Full Stack Software Engineer specializing in Web, App & DevOps Architectures. Discover projects and skills."
        },
        nav: {
            home: "Home",
            skills: "Skills",
            experience: "Experience",
            personal: "Personal",
            projects: "Projects",
            contact: "Contact"
        },
        hero: {
            status: "Available for projects",
            tagline: "Building the future with code.",
            subTagline: "Full Stack Software Engineer specializing in Web, App & DevOps Architectures.",
            ctaProject: "View Work",
            ctaCV: "Download CV"
        },
        skills: {
            title: "Tech Stack",
            subtitle: "Tools and technologies I master",
            categories: {
                frontend: "Frontend & Mobile",
                backend: "Backend Services",
                devops: "DevOps & Cloud",
                ai: "AI & Machine Learning",
                data: "Data & Tools"
            }
        },
        experience: {
            title: "Experience",
            jobs: [
                {
                    id: 1,
                    title: "IT Professional",
                    company: "Flender GmbH",
                    period: "02/2024 - Present",
                    description: "Administration and further development of business-critical applications around the Teamcenter interface. Focus on performance optimization and system stability.",
                    tech: ["Teamcenter", "Java", "AWS", "Oracle"]
                },
                {
                    id: 2,
                    title: "Application Development Specialist",
                    company: "Flender GmbH",
                    period: "01/2022 - 02/2024",
                    description: "Development of a complex interface between Teamcenter and various business applications. Implementation of automation processes.",
                    tech: ["C#", ".NET", "SQL"]
                },
                {
                    id: 3,
                    title: "Apprenticeship IT Specialist",
                    company: "Flender GmbH",
                    period: "07/2020 - 01/2022",
                    description: "Dual training with focus on PLM and infrastructure. Early assumption of responsibility in REST API development.",
                    tech: ["Python", "REST API", "Linux"]
                }
            ]
        },
        education: {
            title: "Education",
            items: [
                {
                    id: 1,
                    degree: "M.Sc. Computer Science - Intelligent Systems",
                    institution: "Westphalian University of Applied Sciences",
                    period: "09/2024 - Present"
                },
                {
                    id: 2,
                    degree: "B.A. Business Informatics",
                    institution: "Westphalian University of Applied Sciences",
                    period: "07/2020 - 02/2024"
                },
                {id: 3, degree: "VWA Business Administrator", institution: "IHK Münster", period: "07/2020 - 10/2023"},
                {
                    id: 4,
                    degree: "IT Specialist Application Development",
                    institution: "IHK North Westphalia",
                    period: "07/2020 - 01/2022"
                }
            ]
        },
        personal: {
            title: "Personal",
            subtitle: "Languages & Interests",
            langTitle: "Languages",
            languages: [
                {name: "German", level: "Native", percent: 100},
                {name: "English", level: "Fluent (C1)", percent: 90}
            ],
            interestTitle: "Interests",
            interests: ["Water Polo", "Sailing", "Tech Trends", "Programming"]
        },
        projects: {
            title: "Featured Projects",
            subtitle: "Insights into my private and open-source work",
            filterAll: "All",
            items: [
                {
                    id: 1,
                    title: "DrinkDoors",
                    category: "Mobile App",
                    type: "Mobile",
                    description: "An interactive drinking game app developed with React Native for iOS and Android. Backend services rely on FastAPI ensuring real-time performance.",
                    tech: ["React Native", "FastAPI", "Postgres"],
                    link: "https://www.drinkdoors.com",
                    color: "from-pink-500 to-rose-500",
                    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=800"
                },
                {
                    id: 2,
                    title: "Water Polo Live",
                    category: "Progressive Web App",
                    type: "Web",
                    description: "A PWA for optimized display of DSV tables on mobile devices. Focus on offline-first approach and fast loading times.",
                    tech: ["Angular", "PWA", "TypeScript"],
                    link: "https://wasserball-tabelle.mauritzlanger.de",
                    color: "from-blue-400 to-cyan-300",
                    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&q=80&w=800"
                },
                {
                    id: 3,
                    title: "Thesis Template",
                    category: "Open Source",
                    type: "Open Source",
                    description: "A highly customizable LaTeX template for academic theses. Widely used and actively used by the community.",
                    tech: ["LaTeX", "CI/CD"],
                    link: "https://github.com/Mauritz-Langer/ThesisTemplate",
                    color: "from-emerald-400 to-teal-500",
                    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
                },
                {
                    id: 4,
                    title: "My Portfolio",
                    category: "Web Development",
                    type: "Web",
                    description: "This website itself! Built with React and Tailwind CSS. Focusing on performance, dark mode, i18n, and responsive design.",
                    tech: ["React", "Tailwind", "Vite"],
                    link: "https://github.com/Mauritz-Langer/portfolio",
                    color: "from-slate-500 to-slate-700",
                    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800"
                }
            ]
        },
        contact: {
            title: "Let's talk!",
            text: "I am always open for exciting projects, new technologies, or just a relaxed tech talk.",
            form: {
                name: "Name",
                namePlaceholder: "Your Name",
                email: "Email",
                emailPlaceholder: "your@email.com",
                message: "Message",
                messagePlaceholder: "How can I help?",
                submit: "Send Message"
            },
            emailLabel: "Email",
            phoneLabel: "Phone",
            ctaMobile: "Contact Now"
        },
        footer: {
            imprint: "Imprint",
            privacy: "Privacy Policy",
            copyright: "Developed with React & Tailwind."
        }
    }
};

const personalInfo: PersonalInfo = {
    name: "Mauritz Langer",
    email: "mauritz@langer-net.de",
    phone: "+49 175 5589077",
    socials: {
        github: "https://github.com/Mauritz-Langer",
        linkedin: "https://de.linkedin.com/in/mauritz-langer-17555b220"
    }
};

// Kleiner Helfer für Icons
function ContainerIcon(props: React.ComponentProps<typeof Database>) {
    return <Database {...props} />;
}

// --- UI Components ---

const FadeIn: React.FC<{ children: React.ReactNode; delay?: number }> = ({children, delay = 0}) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), delay);
                }
            });
        });
        if (domRef.current) observer.observe(domRef.current);
        return () => observer.disconnect();
    }, [delay]);

    return (
        <div
            ref={domRef}
            className={`transition-all duration-1000 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
            {children}
        </div>
    );
};

const GradientText: React.FC<{ children: React.ReactNode; className?: string }> = ({children, className = ""}) => (
    <span
        className={`bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-600 ${className}`}>
    {children}
  </span>
);

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({isOpen, onClose, title, children}) => {
    if (!isOpen) return null;
    return (
        <div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 dark:bg-black/80 backdrop-blur-sm animate-in fade-in duration-200 text-slate-800 dark:text-slate-300">
            <div
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200">
                <div
                    className="sticky top-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur border-b border-gray-200 dark:border-white/10 p-6 flex justify-between items-center z-10">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h3>
                    <button
                        onClick={onClose}
                        aria-label="Schließen"
                        className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 p-2 rounded-full"
                    >
                        <X size={20}/>
                    </button>
                </div>
                <div className="p-6 leading-relaxed space-y-4">
                    {children}
                </div>
            </div>
        </div>
    );
};

// --- Main Application ---

export default function App() {
    const [language, setLanguage] = useState<'de' | 'en'>('de');
    const [isDarkMode, setIsDarkMode] = useState(true); // true = Dark, false = Light
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const [projectFilter, setProjectFilter] = useState('Alle');
    const [activeModal, setActiveModal] = useState<'impressum' | 'datenschutz' | null>(null);

    // State für Kontaktformular
    const [formData, setFormData] = useState({name: '', email: '', message: ''});

    const t = translations[language];

    useEffect(() => {
        initAmplitude();
    }, []);

    // SEO: Update Title & Meta Description + JSON-LD + Lang Attribute
    useEffect(() => {
        // Title & Description
        document.title = t.meta.title;
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            document.head.appendChild(metaDesc);
        }
        metaDesc.setAttribute('content', t.meta.description);

        // Lang Attribute
        document.documentElement.lang = language;

        // JSON-LD Structure Data
        const scriptId = "json-ld-person";
        let script = document.getElementById(scriptId);
        if (!script) {
            script = document.createElement('script');
            script.id = scriptId;
            script.setAttribute('type', 'application/ld+json');
            document.head.appendChild(script);
        }

        const personSchema = {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": personalInfo.name,
            "jobTitle": "Software Entwickler",
            "worksFor": {
                "@type": "Organization",
                "name": "Flender GmbH"
            },
            "url": "https://mauritz-langer.de", // Platzhalter URL
            "sameAs": [
                personalInfo.socials.github,
                personalInfo.socials.linkedin
            ]
        };

        script.innerText = JSON.stringify(personSchema);

    }, [language, t]);

    const skills = [
        {
            name: t.skills.categories.frontend,
            icon: Code,
            colorDark: "text-cyan-400",
            bgDark: "bg-cyan-500/10",
            borderDark: "border-cyan-500/20",
            dotDark: "bg-cyan-400",
            colorLight: "text-cyan-600",
            bgLight: "bg-cyan-50",
            borderLight: "border-cyan-200",
            dotLight: "bg-cyan-500",
            items: ["React", "Angular", "TypeScript", "Tailwind", "React Native", "Dart"]
        },
        {
            name: t.skills.categories.backend,
            icon: Server,
            colorDark: "text-violet-400",
            bgDark: "bg-violet-500/10",
            borderDark: "border-violet-500/20",
            dotDark: "bg-violet-400",
            colorLight: "text-violet-600",
            bgLight: "bg-violet-50",
            borderLight: "border-violet-200",
            dotLight: "bg-violet-500",
            items: ["Java / Spring", "C# / .NET", "Python / FastAPI", "Node.js"]
        },
        {
            name: t.skills.categories.devops,
            icon: Terminal,
            colorDark: "text-emerald-400",
            bgDark: "bg-emerald-500/10",
            borderDark: "border-emerald-500/20",
            dotDark: "bg-emerald-400",
            colorLight: "text-emerald-600",
            bgLight: "bg-emerald-50",
            borderLight: "border-emerald-200",
            dotLight: "bg-emerald-500",
            items: ["Docker", "Kubernetes", "AWS", "Azure", "Terraform", "GitHub Actions", "GitLab CI/CD"]
        },
        {
            name: t.skills.categories.ai,
            icon: Brain,
            colorDark: "text-rose-400",
            bgDark: "bg-rose-500/10",
            borderDark: "border-rose-500/20",
            dotDark: "bg-rose-400",
            colorLight: "text-rose-600",
            bgLight: "bg-rose-50",
            borderLight: "border-rose-200",
            dotLight: "bg-rose-500",
            items: ["AWS Bedrock", "Azure Cognitive Services", "RAG", "MCP"]
        },
        {
            name: t.skills.categories.data,
            icon: ContainerIcon,
            colorDark: "text-amber-400",
            bgDark: "bg-amber-500/10",
            borderDark: "border-amber-500/20",
            dotDark: "bg-amber-400",
            colorLight: "text-amber-600",
            bgLight: "bg-amber-50",
            borderLight: "border-amber-200",
            dotLight: "bg-amber-500",
            items: ["PostgreSQL", "MongoDB", "MySQL", "Git", "Linux", "Postman"]
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setScrolled(scrollY > 50);
            setShowScrollTop(scrollY > 500);

            const sections = ['home', 'skills', 'experience', 'personal', 'projects', 'contact'];
            const offset = 120;

            let current = 'home';
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= offset + 50 && rect.bottom >= offset) {
                        current = section;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [language]);

    useEffect(() => {
        // Toggle class on html element
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        trackAmplitudeEvent('Theme Changed', {theme: isDarkMode ? 'dark' : 'light'});
    }, [isDarkMode]);

    useEffect(() => {
        setProjectFilter(t.projects.filterAll);
        trackAmplitudeEvent('Language Changed', {language});
    }, [language]);

    useEffect(() => {
        if (isMenuOpen || activeModal) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
        return () => document.body.classList.remove('menu-open');
    }, [isMenuOpen, activeModal]);

    const navLinks = [
        {name: t.nav.home, target: "home"},
        {name: t.nav.skills, target: "skills"},
        {name: t.nav.experience, target: "experience"},
        {name: t.nav.personal, target: "personal"},
        {name: t.nav.projects, target: "projects"},
    ];

    const scrollTo = (id: string) => {
        setIsMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            trackAmplitudeEvent('Scroll To Section', {section: id});
            element.scrollIntoView({behavior: 'smooth'});
        } else if (id === 'top') {
            trackAmplitudeEvent('Scroll To Top');
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
    };

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'de' ? 'en' : 'de');
    };

    const toggleDarkMode = () => {
        setIsDarkMode(prev => !prev);
    };

    const getNavClasses = () => {
        if (isMenuOpen) {
            return 'bg-transparent border-transparent py-6';
        }
        if (scrolled) {
            return 'bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl border-gray-200 dark:border-white/5 shadow-lg py-4';
        }
        return 'bg-transparent border-transparent py-6';
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        trackAmplitudeEvent('Contact Form Submitted', {
            name: formData.name,
            email: formData.email,
        });
        const subject = encodeURIComponent(`Anfrage über Portfolio: ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nNachricht:\n${formData.message}`);
        window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    };

    const filteredProjects = projectFilter === t.projects.filterAll
        ? t.projects.items
        : t.projects.items.filter(p => p.type === projectFilter);

    const projectCategories = [t.projects.filterAll, ...new Set(t.projects.items.map(p => p.type))];

    return (
        // Wrapper Div with 'dark' class condition
        <div className={`${isDarkMode ? 'dark' : ''}`}>
            <div
                className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] text-slate-600 dark:text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-900 dark:selection:text-cyan-100 overflow-x-hidden relative transition-colors duration-300">
                <GlobalStyles/>

                {/* Dynamic Background */}
                <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                    <div
                        className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-200/40 dark:bg-blue-600/20 rounded-full blur-[120px] animate-pulse"/>
                    <div
                        className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-200/40 dark:bg-purple-600/20 rounded-full blur-[120px] animate-pulse"
                        style={{animationDelay: '2s'}}/>
                    {/* Grid Pattern - opacity adjusted for light mode */}
                    <div
                        className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 dark:opacity-20"></div>
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(rgba(0,0,0,0.05) 1px, transparent 1px)',
                        backgroundSize: '30px 30px'
                    }}></div>
                    <div className="dark:hidden absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(rgba(0,0,0,0.05) 1px, transparent 1px)',
                        backgroundSize: '30px 30px'
                    }}></div>
                    <div className="hidden dark:block absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
                        backgroundSize: '30px 30px'
                    }}></div>
                </div>

                {/* Navbar */}
                <nav
                    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${getNavClasses()}`}>
                    <div className="container mx-auto px-6 flex justify-between items-center relative z-50">

                        {/* Logo */}
                        <div
                            className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-white cursor-pointer group"
                            onClick={() => scrollTo('home')}>
                            Mauritz<span
                            className="text-cyan-500 dark:text-cyan-400 transition-transform group-hover:inline-block group-hover:-translate-y-1 group-hover:rotate-12">.</span>Langer
                        </div>

                        {/* Desktop Nav */}
                        <div
                            className="hidden lg:flex items-center gap-4 bg-white/60 dark:bg-white/5 p-1.5 rounded-full border border-gray-200 dark:border-white/10 backdrop-blur-lg shadow-sm dark:shadow-none">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => scrollTo(link.target)}
                                    className={`
                    px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 relative
                    ${activeSection === link.target
                                        ? 'text-cyan-900 dark:text-white bg-cyan-50 dark:bg-white/10 shadow-inner'
                                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'
                                    }
                  `}
                                >
                                    {link.name}
                                    {activeSection === link.target && (
                                        <span
                                            className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-500 dark:bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]"/>
                                    )}
                                </button>
                            ))}

                            {/* Controls Divider */}
                            <div className="h-6 w-px bg-gray-300 dark:bg-white/10 mx-1"></div>

                            {/* Theme Switcher Desktop */}
                            <button
                                onClick={toggleDarkMode}
                                className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all"
                                aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                            >
                                {isDarkMode ? <Sun size={18}/> : <Moon size={18}/>}
                            </button>

                            {/* Language Switcher Desktop */}
                            <button
                                onClick={toggleLanguage}
                                className="flex items-center gap-2 px-3 py-1 rounded-full text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all"
                                aria-label="Toggle Language"
                            >
                                <Languages size={16} className="text-cyan-500 dark:text-cyan-400"/>
                                {language.toUpperCase()}
                            </button>
                        </div>

                        <div className="hidden lg:block">
                            <button
                                onClick={() => scrollTo('contact')}
                                className="px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border
                bg-cyan-50 text-cyan-600 border-cyan-200 hover:bg-cyan-500 hover:text-white hover:shadow-lg
                dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-500/20 dark:hover:bg-cyan-500 dark:hover:text-black dark:hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                            >
                                {t.nav.contact}
                            </button>
                        </div>

                        {/* Mobile Controls */}
                        <div className="lg:hidden flex items-center gap-3">
                            <button
                                onClick={toggleDarkMode}
                                className="p-2 rounded-full bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-slate-600 dark:text-white"
                                aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                            >
                                {isDarkMode ? <Sun size={18}/> : <Moon size={18}/>}
                            </button>

                            <button
                                onClick={toggleLanguage}
                                className="flex items-center gap-1 px-3 py-2 rounded-full bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm font-bold text-slate-600 dark:text-white"
                                aria-label="Toggle Language"
                            >
                                {language.toUpperCase()}
                            </button>

                            <button
                                className="relative z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-slate-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-label="Menu"
                            >
                                {isMenuOpen ? <X size={20}/> : <Menu size={20}/>}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Overlay */}
                    <div
                        className={`fixed inset-0 bg-white/95 dark:bg-[#050505]/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center gap-8 transition-all duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                        {navLinks.map((link, index) => (
                            <button
                                key={link.name}
                                onClick={() => scrollTo(link.target)}
                                className={`text-3xl font-bold transition-all duration-300 flex items-center gap-3 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                                style={{transitionDelay: `${index * 100}ms`}}
                            >
                                <span
                                    className={`text-2xl ${activeSection === link.target ? 'text-cyan-500 dark:text-cyan-400' : 'text-slate-400 dark:text-slate-600'}`}>0{index + 1}</span>
                                <span
                                    className={activeSection === link.target ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}>{link.name}</span>
                            </button>
                        ))}
                        <div
                            className={`w-full max-w-xs pt-8 border-t border-gray-200 dark:border-white/10 mt-4 transition-all duration-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                            style={{transitionDelay: '400ms'}}>
                            <button onClick={() => scrollTo('contact')}
                                    className="w-full py-4 bg-cyan-500 text-white dark:text-black rounded-xl font-bold hover:bg-cyan-600 dark:hover:bg-cyan-400 transition-colors shadow-lg">
                                {t.contact.ctaMobile}
                            </button>
                        </div>
                    </div>
                </nav>

                <button
                    onClick={() => scrollTo('top')}
                    className={`fixed bottom-8 right-8 z-40 p-3 rounded-full bg-cyan-500 text-white dark:text-black shadow-lg shadow-cyan-500/20 hover:bg-cyan-600 dark:hover:bg-cyan-400 hover:scale-110 transition-all duration-300 ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}
                    aria-label="Scroll to top"
                >
                    <ArrowUp size={24}/>
                </button>

                {/* Hero Section */}
                <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 z-10 scroll-mt-32">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
                            <div className="flex-1 text-center lg:text-left">
                                <FadeIn>
                                    <div
                                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-bold tracking-wider uppercase mb-6">
                                        <span
                                            className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse"/>
                                        {t.hero.status}
                                    </div>
                                    <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
                                        {t.hero.tagline.split(' ').map((word, i) => (
                                            <span key={i}
                                                  className={i > 1 ? "block text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-400 dark:from-slate-400 dark:to-slate-600" : ""}>
                        {i === 1 ? <GradientText>{word} </GradientText> : word + " "}
                      </span>
                                        ))}
                                    </h1>
                                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                                        {t.hero.subTagline}
                                    </p>
                                    <div
                                        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start flex-wrap">
                                        <button
                                            onClick={() => scrollTo('projects')}
                                            className="px-8 py-4 bg-cyan-600 dark:bg-white text-white dark:text-black rounded-full font-bold hover:bg-cyan-700 dark:hover:bg-slate-200 transition-all flex items-center justify-center gap-2 shadow-lg dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                                        >
                                            {t.hero.ctaProject} <ChevronRight size={18}/>
                                        </button>
                                        <a
                                            href="#"
                                            hidden={true}
                                            className="px-8 py-4 bg-white dark:bg-white/5 text-slate-700 dark:text-white border border-gray-200 dark:border-white/10 rounded-full font-bold hover:bg-gray-50 dark:hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <Download size={18}/> {t.hero.ctaCV}
                                        </a>
                                        <div className="flex items-center justify-center gap-4 px-2">
                                            <a href={personalInfo.socials.github} target="_blank" rel="noreferrer"
                                               className="p-3 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-all"
                                               aria-label="GitHub">
                                                <Github size={22}/>
                                            </a>
                                            <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer"
                                               className="p-3 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-all"
                                               aria-label="LinkedIn">
                                                <Linkedin size={22}/>
                                            </a>
                                        </div>
                                    </div>
                                </FadeIn>
                            </div>
                            <div
                                className="flex-1 relative w-full max-w-md lg:max-w-full flex justify-center lg:justify-end">
                                <FadeIn delay={200}>
                                    <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
                                        <div
                                            className="absolute inset-0 border border-cyan-200 dark:border-cyan-500/20 rounded-full animate-[spin_10s_linear_infinite]"/>
                                        <div
                                            className="absolute inset-4 border border-purple-200 dark:border-purple-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"/>
                                        <div
                                            className="absolute inset-0 bg-gradient-to-tr from-cyan-200 to-purple-200 dark:from-cyan-500/20 dark:to-purple-500/20 rounded-full blur-2xl opacity-40"/>
                                        <img
                                            src="assets/img/Foto_Mauritz_Langer.jpeg"
                                            alt="Mauritz Langer"
                                            className="absolute inset-0 w-full h-full object-cover rounded-full border-4 border-white dark:border-white/20 shadow-xl dark:shadow-[0_0_30px_rgba(255,255,255,0.1)] z-20"
                                        />
                                        <div
                                            className="absolute -right-2 top-8 md:-right-4 md:top-10 bg-white/90 dark:bg-gray-900/90 backdrop-blur border border-gray-100 dark:border-white/10 p-2 md:p-3 rounded-xl shadow-xl animate-bounce duration-[3000ms] z-30">
                                            <Code className="text-cyan-600 dark:text-cyan-400 w-5 h-5 md:w-6 md:h-6"/>
                                        </div>
                                        <div
                                            className="absolute -left-2 bottom-16 md:-left-4 md:bottom-20 bg-white/90 dark:bg-gray-900/90 backdrop-blur border border-gray-100 dark:border-white/10 p-2 md:p-3 rounded-xl shadow-xl animate-bounce duration-[4000ms] z-30">
                                            <Server
                                                className="text-purple-600 dark:text-purple-400 w-5 h-5 md:w-6 md:h-6"/>
                                        </div>
                                        <div
                                            className="absolute left-0 top-0 md:-left-2 md:-top-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur border border-gray-100 dark:border-white/10 p-2 md:p-3 rounded-xl shadow-xl animate-bounce duration-[3500ms] z-30 delay-700">
                                            <Database
                                                className="text-emerald-600 dark:text-emerald-400 w-5 h-5 md:w-6 md:h-6"/>
                                        </div>
                                        <div
                                            className="absolute right-4 bottom-0 md:right-8 md:-bottom-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur border border-gray-100 dark:border-white/10 p-2 md:p-3 rounded-xl shadow-xl animate-bounce duration-[4500ms] z-30 delay-500">
                                            <Terminal
                                                className="text-amber-600 dark:text-amber-400 w-5 h-5 md:w-6 md:h-6"/>
                                        </div>
                                        <div
                                            className="absolute -left-4 top-1/2 md:-left-8 bg-white/90 dark:bg-gray-900/90 backdrop-blur border border-gray-100 dark:border-white/10 p-2 md:p-3 rounded-xl shadow-xl animate-bounce duration-[5000ms] z-30 delay-1000 hidden sm:block">
                                            <Cpu className="text-pink-600 dark:text-pink-400 w-5 h-5 md:w-6 md:h-6"/>
                                        </div>
                                    </div>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="py-24 relative z-10 scroll-mt-32">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">{t.skills.title}</h2>
                            <p className="text-slate-600 dark:text-slate-400">{t.skills.subtitle}</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                            {skills.map((skill, index) => (
                                <FadeIn key={skill.name} delay={index * 100}>
                                    <div
                                        className={`h-full p-6 rounded-2xl border ${isDarkMode ? skill.borderDark : skill.borderLight} ${isDarkMode ? 'bg-gray-900/50' : 'bg-white/60'} backdrop-blur-sm hover:bg-white dark:hover:bg-gray-900/80 transition-all duration-300 group hover:shadow-xl shadow-sm dark:shadow-none`}>
                                        <div className="flex items-center gap-4 mb-6">
                                            <div
                                                className={`p-3 rounded-xl ${isDarkMode ? skill.bgDark : skill.bgLight} ${isDarkMode ? skill.colorDark : skill.colorLight} group-hover:scale-110 transition-transform duration-300 border ${isDarkMode ? 'border-white/5' : 'border-gray-100'}`}>
                                                <skill.icon size={24}/>
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{skill.name}</h3>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {skill.items.map(item => (
                                                <div key={item}
                                                     className={`flex items-center gap-2 px-3 py-2 rounded-lg ${isDarkMode ? 'bg-white/5 hover:bg-white/10 border-white/5' : 'bg-gray-50 hover:bg-gray-100 border-gray-200'} border transition-all cursor-default group/item`}>
                                                    <div
                                                        className={`w-1.5 h-1.5 rounded-full ${isDarkMode ? skill.dotDark : skill.dotLight} group-hover/item:scale-125 transition-transform`}/>
                                                    <span
                                                        className="text-sm text-slate-600 dark:text-slate-300 group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Experience Section */}
                <section id="experience" className="py-24 bg-white/50 dark:bg-white/5 relative z-10 scroll-mt-32">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                                    <Terminal className="text-cyan-600 dark:text-cyan-400"/> {t.experience.title}
                                </h3>
                                <div
                                    className="space-y-12 border-l border-gray-200 dark:border-white/10 ml-3 pl-8 relative">
                                    {t.experience.jobs.map((job, index) => (
                                        <FadeIn key={job.id} delay={index * 100}>
                                            <div className="relative group">
                                                <span
                                                    className="absolute -left-[39px] top-2 w-5 h-5 rounded-full bg-gray-50 dark:bg-[#0a0a0a] border-4 border-cyan-500 dark:border-cyan-500/50 group-hover:border-cyan-600 dark:group-hover:border-cyan-400 transition-colors"/>
                                                <span
                                                    className="text-sm text-cyan-600 dark:text-cyan-400 font-mono mb-1 block">{job.period}</span>
                                                <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-700 dark:group-hover:text-cyan-100 transition-colors">{job.title}</h4>
                                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">{job.company}</p>
                                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{job.description}</p>
                                                <div className="flex gap-2">
                                                    {job.tech.map(t => (
                                                        <span key={t}
                                                              className="text-[10px] uppercase tracking-wide text-slate-500 font-bold border border-gray-200 dark:border-slate-800 rounded px-1.5 py-0.5">{t}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </FadeIn>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                                    <ExternalLink className="text-purple-600 dark:text-purple-400"/> {t.education.title}
                                </h3>
                                <div
                                    className="space-y-12 border-l border-gray-200 dark:border-white/10 ml-3 pl-8 relative mb-16">
                                    {t.education.items.map((edu, index) => (
                                        <FadeIn key={edu.id} delay={index * 100}>
                                            <div className="relative group">
                                                <span
                                                    className="absolute -left-[39px] top-2 w-5 h-5 rounded-full bg-gray-50 dark:bg-[#0a0a0a] border-4 border-purple-500 dark:border-purple-500/50 group-hover:border-purple-600 dark:group-hover:border-purple-400 transition-colors"/>
                                                <span
                                                    className="text-sm text-purple-600 dark:text-purple-400 font-mono mb-1 block">{edu.period}</span>
                                                <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-100 transition-colors">{edu.degree}</h4>
                                                <p className="text-slate-600 dark:text-slate-400">{edu.institution}</p>
                                            </div>
                                        </FadeIn>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Personal Section (NEU: Eigene Sektion) */}
                <section id="personal" className="py-24 relative z-10 scroll-mt-32">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">{t.personal.title}</h2>
                            <p className="text-slate-600 dark:text-slate-400">{t.personal.subtitle}</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {/* Languages */}
                            <FadeIn>
                                <div
                                    className="bg-white/60 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-200 dark:border-white/5 backdrop-blur-sm shadow-sm dark:shadow-none h-full">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                        <Globe className="text-amber-500 dark:text-amber-400"
                                               size={20}/> {t.personal.langTitle}
                                    </h3>
                                    <div className="space-y-4">
                                        {t.personal.languages.map(lang => (
                                            <div key={lang.name}>
                                                <div className="flex justify-between text-sm mb-1.5">
                                                    <span
                                                        className="text-slate-700 dark:text-slate-200">{lang.name}</span>
                                                    <span
                                                        className="text-slate-500 dark:text-slate-400 text-xs">{lang.level}</span>
                                                </div>
                                                <div
                                                    className="h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"
                                                        style={{width: `${lang.percent}%`}}></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </FadeIn>

                            {/* Interests */}
                            <FadeIn delay={200}>
                                <div
                                    className="bg-white/60 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-200 dark:border-white/5 backdrop-blur-sm shadow-sm dark:shadow-none h-full">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                        <Heart
                                            className="text-red-500 dark:text-red-400 fill-red-500/20 dark:fill-red-400/20"
                                            size={20}/> {t.personal.interestTitle}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {t.personal.interests.map(interest => (
                                            <span key={interest}
                                                  className="px-3 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white transition-colors cursor-default">
                        {interest}
                      </span>
                                        ))}
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="py-24 bg-white/50 dark:bg-white/5 relative z-10 scroll-mt-32">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{t.projects.title}</h2>
                                <p className="text-slate-600 dark:text-slate-400">{t.projects.subtitle}</p>
                            </div>
                            <a href={personalInfo.socials.github} target="_blank" rel="noreferrer"
                               className="group flex items-center gap-2 text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                               aria-label="GitHub Profile">
                                GitHub Profil <ArrowUpRight
                                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                                size={18}/>
                            </a>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-8">
                            {projectCategories.map(category => (
                                <button
                                    key={category}
                                    onClick={() => {
                                        setProjectFilter(category);
                                        trackAmplitudeEvent('Project Filter Changed', {category});
                                    }}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                                        projectFilter === category
                                            ? 'bg-cyan-500 text-white dark:text-black border-cyan-500 shadow-lg shadow-cyan-500/20'
                                            : 'bg-white/60 dark:bg-white/5 text-slate-600 dark:text-slate-400 border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white'
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                        <div className="grid lg:grid-cols-3 gap-8">
                            {filteredProjects.map((project, index) => (
                                <FadeIn key={project.id} delay={index * 100}>
                                    <div
                                        className="group relative h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden hover:border-gray-300 dark:hover:border-white/20 transition-all hover:-translate-y-2 shadow-sm dark:shadow-none hover:shadow-xl">
                                        <div className="relative h-48 overflow-hidden">
                                            <div
                                                className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 group-hover:opacity-0 transition-opacity z-10`}/>
                                            {/* Added loading lazy to project images */}
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                loading="lazy"
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                            />
                                            <div
                                                className="absolute top-4 right-4 bg-white/80 dark:bg-black/60 backdrop-blur border border-gray-200 dark:border-white/10 px-3 py-1 rounded-full text-xs font-medium text-slate-900 dark:text-white z-20">
                                                {project.category}
                                            </div>
                                        </div>
                                        <div className="p-6 flex flex-col h-[calc(100%-192px)]">
                                            <div className="flex justify-between items-start mb-4">
                                                <div>
                                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                                                </div>
                                                <a href={project.link} target="_blank" rel="noreferrer"
                                                   className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-white hover:bg-gray-200 dark:hover:bg-white hover:text-slate-900 dark:hover:text-black transition-colors"
                                                   aria-label={`View ${project.title}`}>
                                                    <ArrowUpRight size={20}/>
                                                </a>
                                            </div>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow line-clamp-3">
                                                {project.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2 mt-auto">
                                                {project.tech.map(t => (
                                                    <span key={t}
                                                          className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-gray-200 dark:border-white/5">
                            {t}
                          </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact CTA with Form */}
                <section id="contact" className="py-24 relative z-10 overflow-hidden scroll-mt-32">
                    <div
                        className="absolute inset-0 bg-gradient-to-b from-gray-50 to-blue-50 dark:from-[#0a0a0a] dark:to-blue-900/20 pointer-events-none"/>
                    <div className="container mx-auto px-6 relative">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">

                            {/* Left: Text & Info */}
                            <div>
                                <FadeIn>
                                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">{t.contact.title}</h2>
                                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                        {t.contact.text}
                                    </p>
                                    <div className="space-y-4 mb-8">
                                        <a href={`mailto:${personalInfo.email}`}
                                           className="flex items-center gap-4 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                                            <div
                                                className="w-12 h-12 rounded-full bg-white/60 dark:bg-white/5 flex items-center justify-center border border-gray-200 dark:border-transparent">
                                                <Mail size={20}/>
                                            </div>
                                            <div>
                                                <div
                                                    className="text-sm text-slate-500 uppercase font-bold tracking-wider">{t.contact.emailLabel}</div>
                                                <div className="font-medium">{personalInfo.email}</div>
                                            </div>
                                        </a>
                                        <a href={`tel:${personalInfo.phone}`}
                                           className="flex items-center gap-4 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                                            <div
                                                className="w-12 h-12 rounded-full bg-white/60 dark:bg-white/5 flex items-center justify-center border border-gray-200 dark:border-transparent">
                                                <Phone size={20}/>
                                            </div>
                                            <div>
                                                <div
                                                    className="text-sm text-slate-500 uppercase font-bold tracking-wider">{t.contact.phoneLabel}</div>
                                                <div className="font-medium">{personalInfo.phone}</div>
                                            </div>
                                        </a>
                                    </div>
                                </FadeIn>
                            </div>

                            {/* Right: Form */}
                            <div>
                                <FadeIn delay={200}>
                                    <form onSubmit={handleSubmit}
                                          className="bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-white/10 p-8 rounded-2xl shadow-2xl">
                                        <div className="space-y-6">
                                            <div>
                                                <label htmlFor="name"
                                                       className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">{t.contact.form.name}</label>
                                                <div className="relative">
                                                    <div
                                                        className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                                                        <User size={18}/>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        required
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-lg py-3 pl-10 pr-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                                                        placeholder={t.contact.form.namePlaceholder}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="email"
                                                       className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">{t.contact.form.email}</label>
                                                <div className="relative">
                                                    <div
                                                        className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                                                        <Mail size={18}/>
                                                    </div>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        required
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-lg py-3 pl-10 pr-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                                                        placeholder={t.contact.form.emailPlaceholder}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="message"
                                                       className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">{t.contact.form.message}</label>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    required
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-lg py-3 px-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                                                    placeholder={t.contact.form.messagePlaceholder}
                                                ></textarea>
                                            </div>
                                            <button
                                                type="submit"
                                                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2"
                                            >
                                                <Send size={20}/> {t.contact.form.submit}
                                            </button>
                                        </div>
                                    </form>
                                </FadeIn>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer
                    className="py-8 border-t border-gray-200 dark:border-white/10 bg-white dark:bg-[#050505] relative z-10">
                    <div
                        className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                        <div className="mb-4 md:mb-0">
                            &copy; {new Date().getFullYear()} Mauritz Langer. {t.footer.copyright}
                        </div>
                        <div className="flex gap-6" hidden={true}>
                            <button
                                onClick={() => {
                                    setActiveModal('impressum');
                                    trackAmplitudeEvent('Modal Opened', {modal: 'impressum'});
                                }}
                                className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1"
                            >
                                <FileText size={14}/> {t.footer.imprint}
                            </button>
                            <button
                                onClick={() => {
                                    setActiveModal('datenschutz');
                                    trackAmplitudeEvent('Modal Opened', {modal: 'datenschutz'});
                                }}
                                className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1"
                            >
                                <Shield size={14}/> {t.footer.privacy}
                            </button>
                        </div>
                    </div>
                </footer>

                {/* Modals */}
                <Modal
                    isOpen={activeModal === 'impressum'}
                    onClose={() => setActiveModal(null)}
                    title={t.footer.imprint}
                >
                    <p><strong>Angaben gemäß § 5 TMG</strong></p>
                    <p>{personalInfo.name}<br/>Münchener Str.1<br/>46414 Rhede</p>
                    <p>
                        <strong>{t.contact.title}</strong><br/>{t.contact.phoneLabel}: {personalInfo.phone}<br/>{t.contact.emailLabel}: {personalInfo.email}
                    </p>
                </Modal>

                <Modal
                    isOpen={activeModal === 'datenschutz'}
                    onClose={() => setActiveModal(null)}
                    title={t.footer.privacy}
                >
                    <p><strong>Allgemeiner Hinweis</strong></p>
                    <p>Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und die datenschutzrechtlichen
                        Bestimmungen des Bundes (Datenschutzgesetz, DSG) hat jede Person Anspruch auf Schutz ihrer
                        Privatsphäre sowie auf Schutz vor Missbrauch ihrer persönlichen Daten.</p>
                    <p><strong>Datenerfassung auf dieser Website</strong></p>
                    <p>Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit
                        auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen)
                        erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis.</p>
                    <p className="text-xs text-slate-500 mt-4">*Dies ist ein Platzhalter. Bitte füge hier deine echten
                        Daten ein.*</p>
                </Modal>

            </div>
        </div>
    );
}