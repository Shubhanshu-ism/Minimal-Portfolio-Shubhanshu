export const userData = {
    name: "Shubhanshu Jain",
    firstName: "Shubhanshu",
    role: "Full Stack & Backend Engineer",
    location: "Noida, Uttar Pradesh",
    email: "shubhanshujain2233@gmail.com",

    resumeUrl: "/resume.pdf",

    socials: {
        github: "https://github.com/Shubhanshu-ism",
        linkedin: "https://www.linkedin.com/in/shubhanshu-jain-iit-ism",
        portfolio: "https://minimal-portfolio-shubhanshu-dark-l.vercel.app/",
        codeforces: "https://codeforces.com/profile/Tanjiro_cp",
        codechef: "https://www.codechef.com/users/shubh_jain_1",
        leetcode: "https://leetcode.com/u/sj_33/",
        twitter: "https://x.com/Shubhanshu2233",
        instagram: "https://www.instagram.com/shubhanshu33j/"
    },

    config: {
        profileImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000",
        availability: {
            status: true,
            badgeMain: "Available for Work",
            badgeSecondary: "Currently Available",
        },
    },

    metrics: [
        {
            value: "66× Faster",
            label: "Latency Reduction",
            sublabel: "Cut CC Payment Panel query latency from 20s to 0.3s via join & N+1 fixes"
        },
        {
            value: "1.5M+",
            label: "Rows Exported",
            sublabel: "In-memory streaming in <15s with global concurrency locks"
        },
        {
            value: "60%",
            label: "Support Automated",
            sublabel: "Multi-agent LLM systems at IncNut (Vedix & SkinKraft)"
        },
        {
            value: "228K+",
            label: "Campaign Clicks",
            sublabel: "Self-serve analytics dashboard across 92 campaigns"
        }
    ],

    pages: {
        home: {
            title: "I'm {firstName}",
            tagline: "Full Stack & Backend Engineer",
            description: "Full Stack & Backend Engineer from {location}. Currently engineering scalable systems, microservices & analytics at <span class='text-accent font-semibold'>GoPaisa</span>.",
            badges: {
                metrics: "Key Impact Metrics",
                experience: "Work Experience",
                projects: "Featured Projects"
            }
        },
        work: {
            title: "Selected Works",
            description: "A deep dive into production systems I've engineered — from high-throughput fintech pipelines to multi-agent AI systems.",
            badges: {
                experience: "Professional Experience",
                projects: "Engineered Products"
            }
        },
        about: {
            title: "It's Me {firstName}",
            description: "I'm {name}, a {role} based in {location}. Graduate of IIT (ISM) Dhanbad. I specialize in building high-performance backend systems, distributed microservices, and autonomous LLM agents with obsessive attention to latency, security, and developer experience.",
            badges: {
                education: "Education",
                coding: "Competitive Programming & Problem Solving",
                skills: "Technical Expertise",
                projects: "My Side Projects"
            },
            projectsDescription: "I build side projects to explore new technologies — from infrastructure self-healing daemons to multi-model AI benchmarking tools."
        },
        contact: {
            title: "Engineering Inquiry",
            description: "Looking to build a scalable microservice, optimize critical database queries, or deploy multi-agent AI systems?\nReach out and let's build together.",
            badges: {
                main: "Hire Me"
            }
        }
    },

    components: {
        footer: {
            ctaTitle: "Let's work together.",
            ctaSubtitle: "Building high-performance architectures and scalable digital products",
            followMeTitle: "Connect & Follow",
            followMeSubtitle: "@Shubhanshu-ism everywhere",
            copyrightInstitution: "IIT (ISM) Dhanbad"
        }
    },

    education: {
        institution: "Indian Institute of Technology (ISM), Dhanbad",
        location: "Dhanbad, Jharkhand, India",
        degree: "B.Tech - Electrical Engineering",
        duration: "2021 – 2025",
        achievements: "JEE Main: 99%ile; JEE Advanced: Top 0.7% among JEE Main-qualified aspirants"
    },

    stats: [
        {
            platform: "CodeChef",
            rating: "2029",
            label: "5 Star",
            rank: "Starters 204: Rank 22/35K+ · Starters 199: Rank 14/32K",
            url: "https://www.codechef.com/users/shubh_jain_1"
        },
        {
            platform: "LeetCode",
            rating: "2010",
            label: "Knight",
            rank: "Weekly 463: Rank 77/31K+ · Weekly 461: Rank 464/34K+",
            url: "https://leetcode.com/u/sj_33/"
        },
        {
            platform: "Codeforces",
            rating: "1527",
            label: "Specialist",
            rank: "Round 1054 (Div. 3): Rank 483/19.7K+ · Round 1060 (Div. 2): Rank 1480/14.2K+",
            url: "https://codeforces.com/profile/Tanjiro_cp"
        }
    ],

    work: [
        {
            id: "gopaisa",
            client: "GoPaisa",
            company: "GoPaisa",
            title: "GoPaisa",
            projectType: "Fintech & Analytics",
            year: "2026",
            role: "Full Stack Engineer",
            duration: "Jan 2026 – Present",
            link: "http://myreport.gopaisa.com",
            summary: "Campaign analytics dashboard for 92 campaigns (228K+ clicks) and fintech payment panel optimized from 20s to 0.3s query latency.",
            overviewParagraph: "Architecting campaign analytics and fintech payment infrastructure at GoPaisa. Spearheaded the creation of GoPaisa Report (myreport.gopaisa.com) and revamped the CC Payment Panel to eliminate high-latency query bottlenecks and concurrency crashes.",
            caseMetrics: [
                { value: "66× Faster", label: "Query Latency", desc: "20s → 0.3s query optimization", tooltip: "Eliminated N+1 queries & optimized encrypted joins (20s → 0.3s)" },
                { value: "1.5M+", label: "Rows Streamed", desc: "In-memory export in <15s", tooltip: "Chunked streaming export with global concurrency locking" },
                { value: "228K+", label: "Clicks Tracked", desc: "Self-serve analytics platform", tooltip: "Real-time client reporting with conflict detection" },
                { value: "92", label: "Active Campaigns", desc: "Live multi-client tracking", tooltip: "Centralized tracking with Google OAuth 2.0 RBAC" }
            ],
            problemToSolve: "Business teams and external clients lacked self-serve visibility into 92 affiliate campaigns generating 228K+ clicks, requiring manual database extracts for performance reporting. Simultaneously, the fintech CC Payment Panel suffered from severe 20s page load latency driven by N+1 database queries, unoptimized multi-table joins, and unshielded concurrent CSV exports that risked crashing the server under load.",
            solution: "Engineered GoPaisa Report from scratch (React, Node.js, MongoDB) with Google OAuth 2.0 RBAC and conflict-resistant guided CSV upload. Concurrently overhauled the CC Payment Panel backend to cut latency from 20s to 0.3s, implemented in-memory streaming for 1.5M+ rows in under 15s with global concurrency locks, and deployed resilient microservices including SHA-256 duplicate-detecting file pipelines and dynamic cron engines.",
            images: [
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
                "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200"
            ],
            tech: "React.js, Node.js, MongoDB, Nginx, PM2, Redis, WebSockets, AES-256, Google OAuth 2.0",
            points: [
                "GoPaisa Report (myreport.gopaisa.com): Launched campaign analytics dashboard from scratch (React, Node.js, MongoDB) giving client self-serve reporting on 92 campaigns and 228K+ clicks, secured with Google OAuth 2.0 and role-based access control.",
                "GoPaisa Report: Designed KPI views and trend analytics (time-series, period-over-period growth, top-campaign rankings) on a guided CSV upload flow with conflict detection and live progress; deployed on Nginx + PM2 with a hardened database.",
                "CC Payment Panel: Reduced page load time from 20s to 0.3s by eliminating N+1 queries, optimizing multi-table joins, and streamlining encrypted data processing.",
                "CC Payment Panel: Engineered a high-performance CSV export service generating in-memory reports from transaction, user, and beneficiary data, enforcing row limits and global locking to prevent concurrent export overload; handled 1.5M+ rows in under 15 seconds.",
                "CC Payment Panel: Implemented AES-encrypted TOTP-based two-factor authentication to secure payment workflows of fintech services.",
                "Microservices: Architected resilient microservices from scratch: an abuse-resistant file upload pipeline (SHA-256 duplicate detection, rate limiting), a dynamic cron-job engine (concurrent API execution), and a health-monitoring engine."
            ]
        },
        {
            id: "tablesprint",
            client: "TableSprint",
            company: "TableSprint",
            title: "TableSprint",
            projectType: "Enterprise CRM Platform (Frontend)",
            year: "2025",
            role: "Full Stack Developer Trainee",
            duration: "Nov 2025 – Dec 2025",
            summary: "Onboarded to a production MERN CRM codebase and resolved cross-device responsive UI and layout alignment issues.",
            overviewParagraph: "Joined as a developer trainee working on the frontend of an enterprise MERN-based CRM platform. Spent the initial period understanding the existing component architecture and code patterns, then resolved UI responsiveness bugs to ensure clean visual consistency across mobile and desktop screens.",
            problemToSolve: "The CRM dashboard featured dense data tables and multi-pane layouts that had minor layout misalignment and horizontal overflow issues on smaller laptop and mobile viewports.",
            solution: "Explored the existing React and Tailwind CSS codebase, diagnosed responsive layout conflicts, and updated component styling and breakpoint classes to fix alignment issues across varying screen sizes.",
            images: [
                "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200"
            ],
            tech: "React.js, Tailwind CSS, JavaScript, MERN Stack",
            points: [
                "Onboarded to an enterprise MERN CRM codebase, studying component hierarchies and design conventions.",
                "Fixed responsive UI issues across mobile and desktop views, improving layout consistency and eliminating overflow bugs.",
                "Standardized responsive breakpoints and component alignment for dashboard screens."
            ]
        },
        {
            id: "incnut-digital",
            client: "IncNut Digital",
            company: "IncNut Digital",
            title: "IncNut Digital",
            projectType: "Autonomous LLM Agents",
            year: "2025",
            role: "AI Intern (LLM Application Developer)",
            duration: "Jul 2025 – Oct 2025",
            summary: "Built autonomous multi-agent LLM systems with LangGraph and Flowise, cutting order cancellation churn for 35.7% of users and reducing support load by 60%.",
            overviewParagraph: "Engineered and optimized multi-agent LLM systems for leading D2C wellness brands Vedix and SkinKraft using LangGraph and Flowise.",
            caseMetrics: [
                { value: "60%", label: "Support Automated", desc: "Routine inquiries handled by LLM agents" },
                { value: "35.7%", label: "Cancellation Boost", desc: "Blockers removed with LangGraph state flows" },
                { value: "2 Brands", label: "Production Scale", desc: "Deployed for Vedix & SkinKraft" }
            ],
            problemToSolve: "High customer query volume created substantial human support ticket backlog, while rigid order cancellation funnels caused user frustration and high cancellation abandonment.",
            solution: "Built and orchestrated production LLM agents using LangGraph and Flowise. Refined prompt logic, state transitions, and fallback paths, cutting order cancellation blockers for 35.7% of users and automating 60% of routine customer support tickets.",
            architecture: [
                "LangGraph state machine orchestrating intent classification, retrieval, and automated agent handoffs.",
                "Flowise visual workflow integration with custom Python tool execution hooks and webhook notifications.",
                "Dynamic prompt optimization and fallback routing minimizing cancellation churn for 35.7% of users."
            ],
            images: [
                "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200",
                "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200"
            ],
            tech: "LangGraph, Flowise, LangChain, Python, LLM APIs, Prompt Engineering",
            points: [
                "Built and optimized LLM agents (LangGraph, Flowise) for Vedix and SkinKraft.",
                "Refined prompt logic, cutting order cancellation blockers for 35.7% of users.",
                "Automated customer queries reducing support workload by 60%."
            ]
        }
    ],

    projects: [
        {
            id: "pm2-auto-recovery-alerts",
            client: "Open Source Tool",
            company: "Self",
            projectType: "DevOps & Self-Healing Infra",
            year: "2025",
            title: "PM2 Auto Recovery Alerts",
            tech: "Node.js, MongoDB, SSH, Docker",
            badge: "DevOps / Infra",
            github: "https://github.com/Shubhanshu-ism/pm2-auto-recovery-alerts",
            link: "https://github.com/Shubhanshu-ism/pm2-auto-recovery-alerts",
            summary: "Self-hosted infrastructure health-monitoring and auto-recovery daemon with automated SSH process restarts and multi-channel alerts.",
            caseMetrics: [
                { value: "Auto-SSH", label: "Self Healing", desc: "Automated remote PM2 process restarts" },
                { value: "Docker", label: "Containerized", desc: "Hardened environment with REST API" },
                { value: "3 Channels", label: "Alert Dispatch", desc: "Slack, Flock, and Telegram webhooks" }
            ],
            description: "Self-hosted health-monitoring and auto-recovery engine — SSH-based PM2 restart automation, secured target-management API, pluggable Slack/Flock/Telegram alerting.",
            overviewParagraph: "A self-hosted infrastructure daemon that continuously monitors remote virtual machines, detects crashed or degraded PM2 Node.js processes, triggers automated SSH self-healing restarts, and notifies teams across Slack, Flock, or Telegram.",
            problemToSolve: "Distributed Node.js microservices deployed across remote servers frequently experience silent crashes from memory spikes or unhandled rejections. Without active self-healing, services remain down until an engineer logs in manually via SSH.",
            solution: "Architected a containerized Node.js service running in Docker that securely executes SSH remote commands without exposed keys, stores server targets in MongoDB via an authenticated REST API, and dispatches rich alert payloads across multiple communication webhooks.",
            architecture: [
                "Continuous health daemon polling target server endpoints and PM2 process tables via SSH.",
                "Self-healing SSH execution channel automatically issuing `pm2 restart <service>` upon failure detection.",
                "Target management REST API backed by MongoDB for dynamically registering remote server instances.",
                "Pluggable alerting dispatcher supporting webhooks for Slack, Flock, and Telegram."
            ],
            images: [
                "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200",
                "https://images.unsplash.com/photo-1618401471353-b98aedd04e11?q=80&w=1200"
            ],
            points: [
                "Self-hosted health-monitoring and auto-recovery engine for Node.js production servers.",
                "SSH-based PM2 restart automation, reducing manual intervention and minimizing downtime.",
                "Secured target-management API with MongoDB and Docker containerization.",
                "Pluggable alerting integrations for Slack, Flock, and Telegram."
            ]
        },
        {
            id: "ai-compare",
            client: "Personal Project",
            company: "Self",
            projectType: "AI & LLM Benchmarking",
            year: "2024",
            title: "AI Compare",
            tech: "React.js, Google Gemini, Deepseek",
            badge: "AI / React",
            link: "https://ai-compare-steel.vercel.app/",
            github: "https://github.com/Shubhanshu-ism/AI-Compare",
            summary: "Dual-stream comparative LLM benchmark evaluating Google Gemini and DeepSeek models side-by-side in real-time.",
            caseMetrics: [
                { value: "Dual Stream", label: "Real-Time Sync", desc: "Simultaneous model evaluation" },
                { value: "Dual Models", label: "Gemini + DeepSeek", desc: "Direct latency & token benchmark" },
                { value: "Extensible", label: "Plugin System", desc: "Pluggable AI provider architecture" }
            ],
            description: "Side-by-side AI response comparison tool integrating Deepseek and Gemini APIs supporting plug-in of other AI providers.",
            overviewParagraph: "A real-time side-by-side LLM benchmark and comparison tool allowing prompt engineers and developers to evaluate output fidelity, reasoning quality, and latency between Google Gemini and DeepSeek models simultaneously.",
            problemToSolve: "Benchmarking prompt effectiveness across foundation models requires jumping between separate provider playgrounds, making direct comparative analysis slow and subjective.",
            solution: "Designed a split-pane reactive interface in React.js that dispatches parallel asynchronous requests to Gemini and DeepSeek APIs, presenting synchronized streaming responses with latency metrics and an extensible architecture for new AI providers.",
            images: [
                "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200",
                "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200"
            ],
            points: [
                "Side-by-side AI response comparison tool integrating Deepseek and Gemini APIs.",
                "Extensible architecture supporting easy plug-in of additional AI providers.",
                "Real-time dual-stream comparison with latency and output metrics."
            ]
        },
        {
            id: "megablog",
            client: "Personal Project",
            company: "Self",
            projectType: "Full Stack Publishing",
            year: "2024",
            title: "MegaBlog",
            tech: "React.js, Redux Toolkit, Appwrite, React Router, TailwindCSS",
            badge: "Full Stack / BaaS",
            link: "https://mega-blog-two-indol.vercel.app/",
            github: "https://github.com/Shubhanshu-ism/MegaBlog",
            summary: "Full-stack publishing platform with modular Appwrite BaaS backend, JWT auth, rich-text editing, and Redux Toolkit state.",
            caseMetrics: [
                { value: "Full Stack", label: "Appwrite BaaS", desc: "Modular database & auth services" },
                { value: "Redux", label: "Global State", desc: "Centralized session & article caching" },
                { value: "JWT Auth", label: "Security", desc: "Protected client-side routing" }
            ],
            description: "Full-stack blogging platform with JWT auth, rich-text editor, and image uploads on a modular Appwrite backend; Redux Toolkit for state, React Router for protected navigation.",
            overviewParagraph: "A modern full-stack content publishing web app engineered with React, Redux Toolkit, and Appwrite BaaS, featuring secure authentication, rich-text composition, responsive image storage, and dynamic article routing.",
            problemToSolve: "Creating a production-ready publishing platform without cumbersome backend boilerplate, while maintaining a clean separation between UI components and BaaS SDK calls.",
            solution: "Engineered service abstraction wrappers around Appwrite services (auth, database, file storage) paired with Redux Toolkit for centralized state and protected React Router routes.",
            architecture: [
                "Service abstraction layer decoupling UI from Appwrite SDK calls.",
                "Redux Toolkit store managing authentication state, active sessions, and post caches.",
                "Protected client-side routing with TinyMCE rich text integration."
            ],
            images: [
                "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200",
                "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1200"
            ],
            points: [
                "Full-stack blogging platform with JWT auth, rich-text editor, and image uploads on a modular Appwrite backend.",
                "Redux Toolkit for state management and session caching.",
                "Protected navigation routes and responsive layout built with TailwindCSS."
            ]
        }
    ],

    skills: {
        backend: {
            title: "Backend & Testing",
            items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "WebSockets", "SSE", "PM2", "PostgreSQL", "MongoDB", "Docker"]
        },
        tools: {
            title: "Tools & Practices",
            items: ["Linux", "Kubernetes", "CI/CD", "Jenkins", "Git", "Postman", "Nginx", "System Design", "OOP", "Design & Patterns"]
        },
        ai_data: {
            title: "AI & Data",
            items: ["LangChain", "LangGraph", "Flowise", "Google Gemini API", "OpenAI APIs", "Multi-Agent RAG", "n8n", "DeepSeek"]
        },
        languages: {
            title: "Languages",
            items: ["C", "C++", "JavaScript (ES6+)", "TypeScript", "Python", "SQL", "HTML5", "CSS3"]
        },
        frontend: {
            title: "Frontend",
            items: ["React.js", "Tailwind CSS", "Redux", "Material UI", "React Virtuoso"]
        },
        concepts: {
            title: "Software Engineering Concepts",
            items: ["Data Structures & Algorithms", "DBMS", "Operating Systems", "SDLC"]
        }
    }
};