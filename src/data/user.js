export const userData = {
    name: "Shubhanshu Jain",
    firstName: "Shubhanshu",
    role: "Full Stack Engineer",
    location: "Noida, Uttar Pradesh",
    email: "shubhanshujain2233@gmail.com",
    phone: "+91 8770900865",

    socials: {
        github: "https://github.com/Shubhanshu-ism",
        linkedin: "https://www.linkedin.com/in/shubhanshu-jain-iit-ism",
        twitter: "https://x.com/Shubhanshu2233",
        instagram: "https://www.instagram.com/shubhanshu33j/",
        portfolio: "https://shubhanshu-portfolio-one.vercel.app/",
        codeforces: "https://codeforces.com/profile/Tanjiro_cp"
    },

    education: {
        institution: "Indian Institute of Technology (ISM), Dhanbad",
        degree: "B.Tech - Electrical Engineering",
        duration: "2021 \u2013 2025",
        achievements: "JEE Advanced: Top 0.7%, JEE Mains: 99%ile"
    },

    stats: [
        { platform: "CodeChef", rating: "2029", label: "5 Star", rank: "Rank 14/32K" },
        { platform: "LeetCode", rating: "2010", label: "Knight", rank: "Rank 77/31K" },
        { platform: "Codeforces", rating: "1527", label: "Specialist", rank: "Top 2.5%" },
        { platform: "AtCoder", rating: "1393", label: "Regular", rank: "Rank 66/12.8K" }
    ],

    work: [
        {
            id: "gopaisa-portal",
            client: "GoPaisa",
            company: "GoPaisa",
            projectType: "Internal Tooling, WebSockets",
            year: "2026",
            role: "Full Stack Engineer",
            duration: "Jan 2026 \u2013 Present",
            overviewParagraph: "A business owner enlisted my expertise as a full stack engineer to develop an internal management portal that would boost operational efficiency within GoPaisa. Crafting a modern, robust, and trackable dashboard, my priority was to set them apart by establishing deep technical observability and API management.",
            problemToSolve: "To tackle this endeavor, our approach revolved around shaping a unique internal identity that adeptly conveyed data transparency, innovation, and authenticity. Our team devoted meticulous attention to crafting a robust React-Query caching mechanism alongside low-latency WebSocket integrations, geared towards establishing a visually captivating and highly performant support ecosystem.",
            solution: "Through thoughtful product design, we ensured that the new portal\'s offerings seamlessly aligned with their core data tracking requirements, incorporating material design principles and a custom cURL parser. Concurrently, our development team crafted a user-centric digital platform that not only showcased performance metrics but also effectively conveyed critical API statuses, fostering authentic engagement for support staff.",
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
            duration: "July 2025 \u2013 Oct 2025",
            overviewParagraph: "I collaborated with IncNut Digital to optimize their existing AI architecture. The project demanded restructuring LLM agents to drastically reduce order cancellation blockers and automate high-volume support tasks, streamlining the entire customer interaction pipeline.",
            problemToSolve: "The core problem was inefficient routing of customer queries and slow response times that led to order cancellations. Attention was devoted to analyzing the bottleneck within the LangGraph workflows and optimizing the Flowise configuration, shifting from a reactive approach to a visually and functionally proactive AI agent.",
            solution: "By optimizing the Veda LLM agent and building the SkinKraft AI agent from scratch, we ensured that the digital support framework aligned with their conversion goals. The user-centric conversational interface not only handled massive support workloads autonomously but also effectively conveyed brand empathy.",
            images: [
                "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200",
                "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200",
                "https://images.unsplash.com/photo-1531297172867-11dcdfe15682?q=80&w=1200"
            ],
            points: [
                "Optimized Veda LLM agent using LangGraph and Flowise.",
                "Reduced order cancellation blockers for 35.7% of users.",
                "Built SkinKraft AI agent, cutting support workload by 60%."
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
            overviewParagraph: "AI Compare was built from a personal need to evaluate multiple large language models simultaneously. Crafting a modern, comparative interface, my priority was to give users an immediate, bias-free look into how different AI engines respond to identical prompts side-by-side.",
            problemToSolve: "To tackle this endeavor, the approach revolved around unifying disparate API architectures (Deepseek, Gemini) under a single cohesive React interface. Meticulous attention was devoted to managing parallel async requests, error states, and rendering unpredictable markdown outputs flawlessly.",
            solution: "Through thoughtful product design, the application aligns a split-pane view with rapid API integrations. The user-centric platform not only showcases the raw capabilities of competing LLMs but also effectively conveys detailed token usage metrics and response timing.",
            images: [
                "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200",
                "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1200",
                "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200"
            ]
        },
        {
            id: "megablog",
            client: "Personal Project",
            company: "Self",
            projectType: "Full Stack Blog Platform",
            year: "2024",
            title: "MegaBlog",
            tech: "React, Redux, Appwrite",
            link: "https://mega-blog-two-indol.vercel.app/",
            description: "Scalable blogging platform with secure API abstraction.",
            overviewParagraph: "MegaBlog is a robust content management platform leveraging Appwrite\'s BaaS capabilities. Developing this website meant prioritizing secure authentication routing, fast asset delivery, and providing creators with a distraction-free, rich text editing environment.",
            problemToSolve: "The main challenge involved abstracting complex Appwrite SDK logic away from the UI components. We devoted meticulous attention to crafting a centralized global state using Redux, encompassing user sessions and cached article data, geared towards establishing a visually captivating and highly responsive frontend.",
            solution: "Through thoughtful product design, we ensured that the blog\'s state management seamlessly aligned with modern React paradigms. Concurrently, the routing layer not only guarded protected assets but also effectively conveyed a smooth, uninterrupted reading experience for visitors.",
            images: [
                "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200",
                "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1200",
                "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=1200"
            ]
        },
        {
            id: "ai-coaching-agent",
            client: "Personal Project",
            company: "Self",
            projectType: "EdTech, Voice AI",
            year: "2025",
            title: "AI Coaching Agent",
            tech: "Next.js, Convex, WebSpeech API",
            link: "https://ai-coaching-agent-gk53.vercel.app/dashboard",
            description: "Hands-free, voice-based AI self-learning tool.",
            overviewParagraph: "The AI Coaching Agent redefines autonomous learning by utilizing native browser voice APIs to facilitate a hands-free conversational interface. Crafting a modern, accessible web app, my priority was to set learners apart by offering instant, spoken feedback on their verbal responses.",
            problemToSolve: "Our approach revolved around shaping a unique interactive identity that adeptly captured real-time continuous speech, handled sudden pauses, and seamlessly passed transcripts to the reasoning engine. We devoted meticulous attention to synchronizing the WebSpeech API with Convex\'s real-time database.",
            solution: "Through thoughtful product design, we ensured that the real-time transcription seamlessly aligned with immediate AI insights. Concurrently, our Next.js architecture crafted a user-centric dashboard that not only showcased performance metrics but also fostered authentic, conversational engagement with the educational material.",
            images: [
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
                "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=1200",
                "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200"
            ]
        }
    ],

    skills: {
        languages: ["C++", "JavaScript", "TypeScript", "Python"],
        frontend: ["React.js", "Tailwind CSS", "Redux"],
        backend: ["Node.js", "Express.js", "LangChain", "FastAPI"],
        tools: ["Docker", "Git", "Postman", "n8n"]
    }
};
