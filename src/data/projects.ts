export interface Project {
    id: string;
    image: string;
    technologies: string[];
    github: string;
    link: string;
}

export const projectsData: Project[] = [
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
        id: "rincon-postres",
        image: "/assets/projects/rincon-postres.png",
        technologies: ["Astro", "CSS", "Shopping Cart", "WhatsApp Sales"],
        github: "https://github.com/mrkirbag/rincondelospostres",
        link: "https://rincondelospostres.netlify.app/"
    }
];