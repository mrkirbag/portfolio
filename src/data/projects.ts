export interface Project {
    id: string;
    image: string;
    technologies: string[];
    github: string;
    link: string;
}

export const projectsData: Project[] = [
    {
        id: "cinemagamer",
        image: "/assets/projects/cinemagamer.png",
        technologies: ["CMS", "Node.js", "UI/UX", "React"],
        github: "https://github.com/mrkirbag/cinema-gamer",
        link: "https://cinemagamer.com"
    },
    {
        id: "landing-spabella",
        image: "/assets/projects/landing-spabella.png",
        technologies: ["Astro", "Landing Page", "SEO"],
        github: "https://github.com/mrkirbag/spabella-spa",
        link: "https://spabellastetic.com"
    },
    {
        id: "sistema-ventas",
        image: "/assets/projects/sistema-ventas.png",
        technologies: ["Astro", "Node.js", "Auth", "SQLite", "Chart.js"],
        github: "https://github.com/mrkirbag/sistema-ventas-demo",
        link: "https://fk-sistemaventas-demo.netlify.app/login"
    },
    {
        id: "sistema-medico",
        image: "/assets/projects/sistema-medico.png",
        technologies: ["Astro", "Node.js", "Auth", "Cloudfare R2", "SQLite"],
        github: "https://github.com/mrkirbag/dra-valentina-benavides",
        link: "https://dra-valentina-benavides.netlify.app/login"
    },
    {
        id: "landing-savi",
        image: "/assets/projects/landing-savi.png",
        technologies: ["Astro", "Node.js", "Tailwind", "ChatGPT", "Resend"],
        github: "https://github.com/mrkirbag/landing-sistemaadm",
        link: "https://fadikirbag-savi.netlify.app/"
    },
    {
        id: "sneak-shoes",
        image: "/assets/projects/sneak-shoes.png",
        technologies: ["Astro", "Shopping Cart", "React", "Tailwind", "WhatsApp Sales"],
        github: "https://github.com/mrkirbag/sneak-shoes-ecommerce",
        link: "https://sneakshoes-venezuela.netlify.app/"
    }
];