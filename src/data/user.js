export const userData = {
    name: "Shubhanshu Jain",
    firstName: "Shubhanshu",
    role: "Full Stack Engineer",
    location: "Noida",
    email: "shubhanshujain2233@gmail.com",

    socials: {
        github: "https://github.com/Shubhanshu-ism",
        linkedin: "https://www.linkedin.com/in/shubhanshu-jain-iit-ism",
        twitter: "https://x.com/Shubhanshu2233",
        instagram: "https://www.instagram.com/shubhanshu33j/",
        portfolio: "https://shubhanshu-portfolio-one.vercel.app/",
        codeforces: "https://codeforces.com/profile/Tanjiro_cp"
    },

    config: {
        profileImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000",
        availability: {
            status: true,
            badgeMain: "Available for Work",
            badgeSecondary: "Currently Available",
        },
    },

    pages: {
        home: {
            title: "I'm {firstName}",
            description: "Full Stack Engineer from {location}.\nCurrently building at <span>GoPaisa</span>.",
            badges: {
                experience: "Experience",
                projects: "Products"
            }
        },
        work: {
            title: "Selected Works",
            description: "A deep dive into my professional journey and the digital products I've engineered.",
            badges: {
                experience: "Professional Experience",
                projects: "Personal Products"
            }
        },
        about: {
            title: "It's Me {firstName}",
            description: "I'm {name}, a {role}, currently residing in {location}. I have a deep passion for crafting purposeful products and scalable architectures. My main goal is to bridge the divide between complex technical requirements and meaningful, seamless experiences.",
            badges: {
                education: "Education",
                coding: "Coding Prowess",
                projects: "My Side Projects"
            },
            projectsDescription: "I build side projects during weekends to explore new tech—from UI libraries to AI agents. Take a look!"
        },
        contact: {
            title: "Engineering Inquiry",
            description: "Have a complex logic problem or an AI agent you need to build?\nReach out and let's build the future together.",
            badges: {
                main: "Hire Me"
            }
        }
    },

    components: {
        footer: {
            ctaTitle: "Let's work together.",
            ctaSubtitle: "Creating user experience and visually appealing design",
            followMeTitle: "Follow Me",
            followMeSubtitle: "@Shubhanshu-ism everywhere",
            copyrightInstitution: "IIT (ISM) Dhanbad"
        }
    },

    education: {
        institution: "Indian Institute of Technology (ISM), Dhanbad",
        degree: "B.Tech - Electrical Engineering",
        duration: "2021 – 2025",
        achievements: "JEE Advanced: Top 0.7% (All India), JEE Mains: 99%ile"
    },

    stats: [
        { platform: "CodeChef", rating: "2029", label: "5 Star", rank: "Global Rank 14/32K (Starters 199)" },
        { platform: "LeetCode", rating: "2010", label: "Knight", rank: "Rank 77/31K (Weekly 463)" },
        { platform: "Codeforces", rating: "1527", label: "Specialist", rank: "Top 2.5% (Rank 483/19.7K)" },
        { platform: "AtCoder", rating: "1393", label: "Regular", rank: "Rank 66/12.8K (ABC 421)" }
    ],

    work: [
        {
            id: "gopaisa-portal",
            client: "GoPaisa",
            company: "GoPaisa",
            projectType: "Internal Tooling, WebSockets",
            year: "2026",
            role: "Full Stack Engineer",
            duration: "Jan 2026 – Present",
            overviewParagraph: "Developing an internal management portal to boost operational efficiency within GoPaisa. I am building a robust, trackable dashboard focused on deep technical observability and API management.",
            problemToSolve: "The goal was to establish data transparency and innovation within the team. This required a high-performance support ecosystem using low-latency WebSocket integrations and React-Query caching.",
            solution: "Engineered a user-centric digital platform showcasing real-time performance metrics and critical API statuses, incorporating material design principles and a custom cURL parser.",
            images: [
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
                "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1200"
            ],
            points: [
                "Engineered an API management portal with a custom cURL parser.",
                "Built a real-time support dashboard using WebSockets for tracking.",
                "Developed MERN-based internal tools with React-Query and Material UI."
            ]
        },
        {
            id: "incnut-veda",
            client: "IncNut Digital",
            company: "IncNut Digital",
            projectType: "AI Agent Development",
            year: "2025",
            role: "AI Intern (LLM Developer)",
            duration: "July 2025 – Oct 2025",
            overviewParagraph: "Optimized AI architecture by restructuring LLM agents to reduce order cancellation blockers and automate high-volume support tasks.",
            problemToSolve: "Inefficient query routing led to slow response times. I analyzed bottlenecks within LangGraph workflows and optimized Flowise configurations for proactive AI interaction.",
            solution: "Optimized the Veda LLM agent and built the SkinKraft AI agent from scratch, reducing support workload by 60% and improving brand empathy in automated responses.",
            images: [
                "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200",
                "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200",
                "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200"
            ],
            points: [
                "Optimized Veda LLM agent using LangGraph and Flowise.",
                "Reduced order cancellation blockers for 35.7% of users.",
                "Built SkinKraft AI agent, cutting support workload by 60%."
            ]
        },
        {
            id: "udovibe-intern",
            client: "Udovibe",
            company: "Udovibe",
            projectType: "Full Stack Development",
            year: "2024",
            role: "Web Development Intern",
            duration: "May 2024 – July 2024",
            overviewParagraph: "Focused on developing intuitive UI components and backend services for a social networking platform.",
            problemToSolve: "Streamlined data fetching and optimized frontend performance to ensure a seamless user experience during high traffic.",
            solution: "Integrated RESTful APIs and built responsive layouts using React and Tailwind CSS.",
            images: [
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200"
            ],
            points: [
                "Developed responsive UI components using React and Tailwind.",
                "Optimized API response handling for improved load times.",
                "Collaborated on feature integration for social networking modules."
            ]
        }
    ],

    projects: [
        {
            id: "ai-compare",
            client: "Personal Project",
            company: "Self",
            projectType: "Web Application, AI Integration",
            year: "2024",
            title: "AI Compare",
            tech: "React, Deepseek, Gemini API",
            link: "https://ai-compare-steel.vercel.app/",
            description: "Chatbot for real-time comparative analysis of AI models.",
            overviewParagraph: "A tool to evaluate multiple LLMs simultaneously, providing a side-by-side view of responses to identical prompts.",
            problemToSolve: "Unifying disparate API architectures (Deepseek, Gemini) under a single React interface while managing parallel async requests.",
            solution: "Designed a split-pane view with rapid API integrations, showcasing response timing and token usage metrics.",
            images: [
                "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200"
            ]
        },
        {
            id: "stickit",
            client: "Personal Project",
            company: "Self",
            projectType: "Productivity Tool",
            year: "2024",
            title: "StickIt",
            tech: "React, Redux, React Beautiful DnD",
            link: "https://github.com/Shubhanshu-ism/StickIt",
            description: "Trello-style task management board with drag-and-drop functionality.",
            overviewParagraph: "A task management application built to explore complex state management and drag-and-drop interactions.",
            problemToSolve: "Handling real-time state updates across multiple columns while maintaining smooth animations.",
            solution: "Utilized Redux for global state and React Beautiful DnD for a seamless, interactive user experience.",
            images: [
                "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=1200"
            ]
        },
        {
            id: "megablog",
            client: "Personal Project",
            company: "Self",
            projectType: "Full Stack Blog Platform",
            year: "2024",
            title: "MegaBlog",
            tech: "React, Redux, Appwrite, Tailwind CSS",
            link: "https://mega-blog-two-indol.vercel.app/",
            description: "Scalable blogging platform with secure API abstraction and modular architecture.",
            overviewParagraph: "A content management platform using Appwrite's BaaS to prioritize secure authentication and fast delivery.",
            problemToSolve: "Abstracting Appwrite SDK logic away from UI components to avoid vendor locking.",
            solution: "Crafted a centralized global state using Redux for user sessions and cached article data.",
            images: [
                "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200"
            ]
        }
    ],

    skills: {
        languages: ["C++", "JavaScript", "TypeScript", "Python", "SQL"],
        frontend: ["React.js", "Next.js", "Tailwind CSS", "Redux Toolkit", "Material UI"],
        backend: ["Node.js", "Express.js", "FastAPI", "Appwrite", "MongoDB", "PostgreSQL"],
        ai_ml: ["LangChain", "LangGraph", "Flowise", "Gemini API", "OpenAI APIs"],
        tools: ["Docker", "Git", "Postman", "n8n", "BigQuery", "Jest"]
    }
};