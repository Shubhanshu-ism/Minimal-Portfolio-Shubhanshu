export const userData = {
    name: "Shubhanshu Jain",
    firstName: "Shubhanshu",
    role: "SDE · Backend Developer · AI Systems",
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
        profileImage: "/profile.webp",
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
            tagline: "SDE · Backend Developer · AI Systems",
            description: "SDE & Backend Developer from {location} (IIT ISM Dhanbad). Currently engineering scalable systems, microservices & analytics at <span class='text-accent font-semibold'>GoPaisa</span>.",
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
        projects: {
            title: "Engineering Projects",
            description: "Autonomous AI agent harnesses, self-healing infrastructure daemons, and high-performance applications built for scale and developer experience.",
            badges: {
                main: "Projects & Products"
            }
        },
        about: {
            title: "It's Me {firstName}",
            description: "I'm {name}, an {role} based in {location}. Graduate of IIT (ISM) Dhanbad. I specialize in building high-performance backend systems, distributed microservices, RAG pipelines, and autonomous agent harnesses with obsessive attention to latency, security, and developer experience.",
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
            highlights: [
                { rank: "Rank 14 / 32K+", contest: "Starters 199" },
                { rank: "Rank 22 / 35K+", contest: "Starters 204" }
            ],
            url: "https://www.codechef.com/users/shubh_jain_1"
        },
        {
            platform: "LeetCode",
            rating: "2010",
            label: "Knight",
            highlights: [
                { rank: "Rank 77 / 31K+", contest: "Weekly Contest 463" },
                { rank: "Rank 464 / 34K+", contest: "Weekly Contest 461" }
            ],
            url: "https://leetcode.com/u/sj_33/"
        },
        {
            platform: "Codeforces",
            rating: "1527",
            label: "Specialist",
            highlights: [
                { rank: "Rank 483 / 19.7K+", contest: "Round 1054 (Div. 3)" },
                { rank: "Rank 1480 / 14.2K+", contest: "Round 1060 (Div. 2)" }
            ],
            url: "https://codeforces.com/profile/Tanjiro_cp"
        }
    ],

    work: [
        {
            id: "gopaisa",
            client: "GoPaisa & PolicyBazaar",
            company: "GoPaisa",
            title: "GoPaisa",
            projectType: "Fintech ETL & Campaign BI Analytics",
            year: "2026",
            role: "Full Stack Engineer",
            duration: "Jan 2026 – Present",
            link: "http://myreport.gopaisa.com",
            summary: "Self-serve campaign analytics & BI reporting dashboard built for PolicyBazaar and major insurance campaigns (167K+ clicks) with drag-and-drop CSV ETL pipeline and payment panel 20s → 0.3s query optimization.",
            overviewParagraph: "Architected the campaign analytics and fintech payment infrastructure at GoPaisa. Spearheaded the creation of GoPaisa Report (myreport.gopaisa.com) for PolicyBazaar and enterprise partners to track 167K+ clicks across NRI health and investment campaigns, and revamped the CC Payment Panel to eliminate high-latency query bottlenecks.",
            caseMetrics: [
                { value: "66× Faster", label: "Query Latency", desc: "20s → 0.3s query optimization", tooltip: "Eliminated N+1 queries & optimized encrypted joins (20s → 0.3s)" },
                { value: "1.5M+", label: "Rows Streamed", desc: "In-memory export in <15s", tooltip: "Chunked streaming export with global concurrency locking" },
                { value: "167K+", label: "Clicks Tracked", desc: "Real-time PolicyBazaar reporting", tooltip: "Tracked across NRI Health & Investment campaigns" },
                { value: "92", label: "Active Campaigns", desc: "Multi-client analytics platform", tooltip: "Centralized tracking with Google OAuth 2.0 RBAC" }
            ],
            problemToSolve: "Business teams and partners like PolicyBazaar lacked self-serve visibility into high-volume affiliate campaigns (generating 167K+ clicks), relying on manual database extracts for reporting. Simultaneously, the fintech CC Payment Panel suffered from severe 20s latency caused by unoptimized database joins and unshielded concurrent CSV exports that risked crashing servers under heavy traffic.",
            solution: "Engineered GoPaisa Report from scratch (React, Node.js, MongoDB) featuring real-time Marketing Overview KPI cards, interactive date-range trend lines, and a guided drag-and-drop CSV ingestion pipeline with automated schema validation. Concurrently overhauled the CC Payment Panel to cut latency from 20s to 0.3s and streamed 1.5M+ rows in under 15s with global concurrency locking.",
            images: [
                "/projects/gopaisa-dashboard.png",
                "/projects/gopaisa-reports.png",
                "/projects/gopaisa-export-dark.png",
                "/projects/gopaisa-export-light.png",
                "/projects/gopaisa-upload.png"
            ],
            tech: "React.js, Node.js, MongoDB, Nginx, PM2, Redis, WebSockets, AES-256, Google OAuth 2.0",
            points: [
                "GoPaisa Report (myreport.gopaisa.com): Designed and deployed campaign reporting dashboard from scratch (React, Node.js, MongoDB) for PolicyBazaar and enterprise campaigns, tracking 167K+ live clicks across NRI health & investment campaigns with Google OAuth 2.0 RBAC.",
                "Guided CSV Ingestion Engine: Built an intuitive drag-and-drop CSV upload pipeline with client-side schema validation (supporting Date, Campaign Name, Campaign ID, Advertiser, Status, Clicks, Leads, Payout up to 9MB) and duplicate conflict detection.",
                "Marketing Overview & Real-Time Trend Charts: Created live KPI metric cards (Total Records, Clicks with +38.2% delta, Payout) and time-series performance graphs with instantaneous filtered CSV exports.",
                "CC Payment Panel Optimization: Cut page load latency from 20s to 0.3s (66× improvement) by eliminating N+1 database bottlenecks, streamlining encrypted multi-table joins, and caching frequent queries.",
                "High-Throughput Streaming Export: Built an in-memory CSV export service with Redis-based global concurrency locking to stream 1.5M+ rows in under 15 seconds without memory spikes.",
                "Microservices Infrastructure: Deployed an abuse-resistant file pipeline (SHA-256 duplicate detection, rate limiting), dynamic cron execution engine, and self-healing microservices on Nginx and PM2."
            ],
            diagrams: [
                {
                    id: "csv-pipeline",
                    tabTitle: "PolicyBazaar CSV Ingestion",
                    title: "3-Step Guided CSV Ingestion & Real-Time SSE Pipeline",
                    badge: "PolicyBazaar Microservice",
                    description: "Client buffer parsing with canonical header cleaning, MongoDB TTL upload session storage, compound conflict classification, and batched SSE streaming commits.",
                    chart: `flowchart TD
    A[Ops Lead drags & drops CSV, up to 9MB] --> B[POST /upload/preview]
    B --> C[cleanHeader & validate columns]
    C --> C1{Columns valid?}
    C1 -- No --> C2[Return column errors]
    C2 --> C3[Show error state, ask re-upload]
    C3 --> A
    C1 -- Yes --> D[Store normalized rows in Temp SessionStore, TTL 30m]
    D --> E[Return sessionId + total rows + preview]
    E --> F[Render preview table & column status]

    F --> G[POST /upload/check-conflicts]
    G --> G1{Session still valid?}
    G1 -- Expired/Not found --> G2[Return session expired error]
    G2 --> A
    G1 -- Valid --> H[Match compound keys against live records]
    H --> I[Query MongoDB: campaign_id, date, advertiser]
    I --> J[Return matched existing records]
    J --> K[Compute new_rows, conflicts, duplicates]
    K --> K1{Any conflicts found?}
    K1 -- No --> L0[Auto-mark all as new_rows]
    K1 -- Yes --> L[Prompt conflict resolution: Skip / Overwrite]
    L0 --> M[Ops confirms upload]
    L --> L1{Ops choice}
    L1 -- Skip --> L2[Mark conflicting rows to be skipped]
    L1 -- Overwrite --> L3[Mark conflicting rows to be overwritten]
    L1 -- Cancel --> A
    L2 --> M
    L3 --> M

    M --> N[GET /upload/commit, upgrade to SSE]
    N --> N1{SSE connection established?}
    N1 -- No --> N2[Return connection error, allow retry]
    N2 --> N
    N1 -- Yes --> O{More rows to write?}
    O -- Yes --> P[bulkWrite upsert, 100 rows/cycle]
    P --> P1{Batch write succeeded?}
    P1 -- No --> P2[SSE: error, rows_failed, reason]
    P2 --> P3{Retryable error?}
    P3 -- Yes --> P
    P3 -- No --> P4[Abort commit, keep session for retry]
    P4 --> S2[SSE: done true, result failed]
    P1 -- Yes --> Q[SSE: percent, rows_added, rows_overwritten]
    Q --> O
    O -- No --> R[deleteSession session_id]
    R --> S[SSE: done true, result success]`
                },
                {
                    id: "streaming-export",
                    tabTitle: "Transaction Download Backend",
                    title: "High-Throughput Streaming & Decryption Worker Pool",
                    badge: "Payment Panel Engine",
                    description: "1.5M+ row streaming export cutting query latency from 20s to 0.3s using Keyset pagination, Redis concurrency locks, and Worker Thread AES decryption.",
                    chart: `flowchart TD
    subgraph UI [dataexport.gopaisa.com UI]
        Req[User selects Date Range, Dataset & 21 Columns]
        Pass[Enters Export Password]
    end

    subgraph Security [Gatekeeper & Concurrency Guard]
        Auth[JWT & Passport Validation]
        Lock{Redis Global Lock<br/>export:lock:userId}
        Reject[429 Conflict / Export Active]
    end

    subgraph DB [Dual Database Engine]
        MongoBS[MongoDB Daily-Step<br/>Binary Search Indexer]
        PgKeyset[PostgreSQL Sequelize<br/>Keyset Cursor Pagination]
    end

    subgraph WorkerPool [DecryptWorkerPool - worker_threads]
        Pool[ThreadPool capped to CPU - 1]
        W1[Worker 1: AES-256 Decrypt PII]
        W2[Worker 2: Unmask Card Digits]
    end

    subgraph Streaming [Backpressure Stream Engine]
        Format[Format Rupee Currency & Dates]
        CSVStream[Transform to CSV Stream chunk-by-chunk]
        HTTPResp[HTTP 200 Stream Response<br/>Content-Disposition: attachment]
    end

    Req --> Pass --> Auth
    Auth --> Lock
    Lock -- Lock Acquired --> MongoBS
    Lock -- Lock Busy --> Reject
    MongoBS --> PgKeyset
    PgKeyset --> Pool
    Pool --> W1 & W2
    W1 & W2 --> Format
    Format --> CSVStream
    CSVStream --> HTTPResp
    HTTPResp -. On Complete .-> Release[Auto-Release Redis Lock]`
                },
                {
                    id: "file-upload",
                    tabTitle: "Native File-Upload Service",
                    title: "Native File-Upload Microservice (Images & PDFs)",
                    badge: "Native File-Upload Service",
                    description: "Abuse-resistant file pipeline for images and PDFs with dual-tier rate limiting, Multer in-memory validation, SHA-256 buffer deduplication, and lean MongoDB binary retrieval.",
                    chart: `flowchart TD
    A[Upload Request: Image/PDF] --> B[IP Rate Limiter<br/>1000 req/sec]
    B --> C[User Rate Limiter<br/>20 req/min per JWT]
    C --> D[Multer In-Memory Storage]
    D --> E{MIME & Size Check<br/>1MB max, PDF/Images}
    E -- Rejected --> F[400 Invalid File Type]
    E -- Valid --> G[SHA-256 Crypto Hash<br/>Buffer Digestion]
    G --> H{Check MongoDB<br/>userId + hash in 5min}
    H -- Exists --> I[Return Existing File<br/>duplicate: true]
    H -- New --> J[Insert File Document with Binary Buffer]
    J --> K[Return 201 Created<br/>duplicate: false]`
                }
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
                "/projects/tablesprint-platform.svg"
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
            projectType: "Autonomous Support AI (Intercom Fin Pattern)",
            year: "2025",
            role: "AI Intern (LLM Application Developer)",
            duration: "Jul 2025 – Oct 2025",
            summary: "Built autonomous multi-agent LLM systems with LangGraph and Flowise (comparable to Intercom Fin / Zendesk AI), cutting order cancellation churn for 35.7% of users and automating 60% of customer support load.",
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
                "/projects/incnut-analytics.svg",
                "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=720&q=75"
            ],
            tech: "LangGraph, Flowise, LangChain, Python, LLM APIs, Prompt Engineering",
            points: [
                "Built and optimized LLM agents (LangGraph, Flowise) for Vedix and SkinKraft.",
                "Refined prompt logic, cutting order cancellation blockers for 35.7% of users.",
                "Automated customer queries reducing support workload by 60%."
            ],
            diagrams: [
                {
                    id: "incnut-multi-agent-rag",
                    tabTitle: "LangGraph Multi-Agent Architecture",
                    title: "IncNut Multi-Agent LangGraph RAG & Ticket Routing Engine",
                    badge: "LangGraph State Machine",
                    description: "End-to-end multi-agent orchestration: Freshdesk webhook ingestion, gatekeeper customer verification, structured 12-specialist intent routing, cyclic ReAct tool execution, and post-graph reply structuring.",
                    chart: `flowchart TD
    subgraph Phase1["1. Ingestion & Identity Gatekeeper"]
        Start([Freshdesk Ticket In]) --> GK["gatekeeper_analyst<br/>(validates customer record)"]
        GK --> CheckCust{Customer found?}
        CheckCust -- No --> CNF["customer_not_found"] --> EndTicket([End / Close Ticket])
        CheckCust -- Yes --> DGA["data_gathering_analyst<br/>(fetches order history, profile & attachments)"]
    end

    subgraph Phase2["2. Intent Classification"]
        DGA --> Router{{"router<br/>(Structured LLM Routing Decision)"}}
    end

    subgraph Phase3["3. LangGraph Specialist Sub-Agents & Cyclic ToolNode"]
        Router -->|Cancellation| CA["cancellation_agent<br/>(Retention flow & 35.7% churn drop)"]
        Router -->|Orders & Refunds| OA["order_and_logistics_agent<br/>(Status, Tracking, Courier & Refunds)"]
        Router -->|Vedix / SkinKraft| HCA["hair_coach_agent<br/>(Personalized Regimen & Product Guidance)"]
        Router -->|Policy & FAQ RAG| QA["query_solver_agent<br/>(Vector Knowledge Base Retrieval)"]
        Router -->|Supervisor / Edge| SV["supervisor_agent<br/>(Human-in-the-Loop Fallback)"]

        CA & OA & HCA & QA & SV --> SpecDecide{Tool calls<br/>needed?}
        SpecDecide -- Yes --> TN[("central tool_node<br/>(DB, Shopify API, Vector DB)")]
        TN -->|Tool outputs & update state.next| SpecDecide
        SpecDecide -- No (final reply) --> EndNode(("END"))
    end

    subgraph Phase4["4. Post-Graph Guardrails & Delivery"]
        EndNode --> Guard{"Safety & Scope Check"}
        Guard -- Spam --> SpamOut["Return fixed spam JSON<br/>(status=closed, sub_category=spam)"]
        Guard -- "not my case" --> Escalation["Escalate to Human Agent Handoff"]
        Guard -- Valid Answer --> ReplyAgent["run_reply_agent()<br/>(Structures email_copy & ticket metadata)"]
        ReplyAgent --> FreshdeskUpdate["Update Freshdesk Ticket<br/>(Send response & set category/status)"]
    end`
                }
            ]
        }
    ],

    projects: [
        {
            id: "pm2-auto-recovery-alerts",
            client: "Open Source Tool",
            company: "Self",
            projectType: "Self-Hosted Infra APM & Auto-Recovery",
            year: "2025",
            title: "PM2 Auto Recovery Alerts",
            tech: "Node.js, MongoDB, SSH, Docker",
            badge: "DevOps APM (PM2 Plus Alternative)",
            github: "https://github.com/Shubhanshu-ism/pm2-auto-recovery-alerts",
            link: "https://github.com/Shubhanshu-ism/pm2-auto-recovery-alerts",
            summary: "Self-hosted infrastructure health-monitoring and auto-recovery daemon — open-source alternative to PM2 Plus and Datadog with automated SSH process restarts and multi-channel alerts.",
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
                "/projects/pm2-daemon.svg",
                "/projects/pm2-architecture.svg"
            ],
            points: [
                "Self-hosted health-monitoring and auto-recovery engine for Node.js production servers.",
                "SSH-based PM2 restart automation, reducing manual intervention and minimizing downtime.",
                "Secured target-management API with MongoDB and Docker containerization.",
                "Pluggable alerting integrations for Slack, Flock, and Telegram."
            ],
            diagrams: [
                {
                    id: "phoenix-recovery",
                    title: "Phoenix PM2 Auto-Recovery & Incident Remediation Pipeline",
                    badge: "DevOps & Self-Healing",
                    description: "Continuous health poller with failure tracking, distinction between 503 dependency failures and crashes, execFile SSH auto-restart, and multi-channel alert dispatch.",
                    chart: `flowchart TD
    Start[Cron Poller Trigger with Jitter] --> Lock{Poller Concurrency Lock}
    Lock -- Active --> Skip[Skip Cycle]
    Lock -- Free --> Probe[HTTP GET Health Probe<br/>x-health-token]

    Probe --> Status{HTTP Status Check}
    Status -- 200 OK --> Healthy[Record Success in FailureTracker]
    Status -- 503 Service Unavailable --> DepFail[Dependency Outage<br/>Log & Send Alert - Bypass Restart]
    Status -- 500 / Timeout / ECONNREFUSED --> Down[Process Crash Detected]

    Down --> SSH[Open SSH Channel to Remote Target VM]
    SSH --> Exec1[Execute: pm2 describe appName<br/>via execFile]
    Exec1 --> Exec2[Execute: pm2 restart appName --update-env]
    Exec2 --> Verify[Verification Health Probe after 3s]

    Verify --> ResCheck{Service Restored?}
    ResCheck -- Yes --> AlertOK[Compute MTTR & Dispatch Success Alert<br/>Flock FlockML / Slack Blocks / Telegram]
    ResCheck -- No --> Escalate[Trigger High-Severity Alert<br/>Update Target Status to FAILED in Mongo]`
                }
            ]
        },
        {
            id: "ai-compare",
            client: "Personal Project",
            company: "Self",
            projectType: "Real-Time LLM Benchmarking Suite",
            year: "2024",
            title: "AI Compare",
            tech: "React.js, Google Gemini, Deepseek",
            badge: "LLM Benchmark (Chatbot Arena Pattern)",
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
                "/projects/ai-compare-suite.svg",
                "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=720&q=75"
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
                "/projects/megablog-platform.svg",
                "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=720&q=75"
            ],
            points: [
                "Full-stack blogging platform with JWT auth, rich-text editor, and image uploads on a modular Appwrite backend.",
                "Redux Toolkit for state management and session caching.",
                "Protected navigation routes and responsive layout built with TailwindCSS."
            ]
        },
        {
            id: "gitlab-coding-agent",
            client: "Autonomous Dev Infrastructure",
            company: "Self",
            projectType: "Autonomous SWE Agent & Docker Sandbox",
            year: "2026",
            title: "AI GitLab Coding Agent",
            tech: "TypeScript, Next.js, Docker, PostgreSQL, Drizzle ORM, Anthropic, OpenAI",
            badge: "Autonomous SWE Agent (Devin Alternative)",
            github: "https://github.com/Shubhanshu-ism/gitlab-coding-agent",
            link: "https://github.com/Shubhanshu-ism/gitlab-coding-agent",
            summary: "Autonomous AI-powered software engineering agent (open-source Devin alternative) executing coding tasks inside hardened Docker sandboxes with state machines, tool policy verification, and automated GitLab MR workflows.",
            caseMetrics: [
                { value: "Hardened", label: "Docker Sandbox", desc: "2GB RAM & 2 CPU non-root isolation" },
                { value: "FSM", label: "State Machine", desc: "Monotonic atomic EventStore in PostgreSQL" },
                { value: "GitOps", label: "Automated MRs", desc: "Automated branch, commits & pipeline tracking" }
            ],
            description: "Production-ready coding agent harness orchestrating LLMs inside secure Docker containers with strict safety policies and GitLab integration.",
            overviewParagraph: "An AI-native development harness that connects to GitLab repositories, delegates complex software engineering tasks to foundation models (Claude / GPT-4o), safely executes code changes and test runs inside isolated Docker containers, and opens verified Merge Requests.",
            problemToSolve: "Allowing autonomous AI agents to edit code and run shell commands in production codebases risks catastrophic accidental file deletion, shell injection, runaway infinite loops, and untracked state mutations.",
            solution: "Architected a Next.js agent harness powered by a strict Finite State Machine and an atomic PostgreSQL EventStore. Designed a 3-tier command policy engine (SAFE, CONFIRM, BLOCKED) and isolated all workspace mutations in locked-down Docker containers with non-root execution and blocked docker.sock.",
            architecture: [
                "AgentHarness orchestrating lifecycle methods (run, cancel, resume) with monotonic event sequence counters.",
                "Atomic EventStore in PostgreSQL powering real-time client Server-Sent Events (SSE) with Last-Event-ID replay.",
                "Command Policy Engine enforcing human approval (PAUSED_FOR_TOOL_APPROVAL) on high-impact commands and outright blocking destructive operations.",
                "Hardened Docker execution container with non-root agent user, 2GB memory cap, and restricted host access."
            ],
            images: [
                "/projects/gitlab-agent-architecture.svg",
                "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=720&q=75"
            ],
            points: [
                "Autonomous coding agent harness with pluggable tool registry and command policy engine.",
                "Strict Finite State Machine backed by PostgreSQL event streaming with SSE replay.",
                "Sandboxed Docker workspace with resource quotas and non-root execution.",
                "Automated Git branching, atomic committing, and GitLab Merge Request creation with CI pipeline monitoring."
            ],
            diagrams: [
                {
                    id: "agent-architecture",
                    title: "Agent Harness, State Machine, Safety Policy & Docker Sandbox",
                    badge: "AI Agent Architecture",
                    description: "End-to-end task delegation lifecycle: user task dispatch, LLM reasoning, command policy evaluation, Docker sandbox execution, and PostgreSQL SSE event replay.",
                    chart: `flowchart TD
    User[Developer in UI] --> Task[Submit Coding Task]
    Task --> Harness[AgentHarness Controller]
    Harness --> FSM[RunStateMachine: PENDING -> RUNNING]

    FSM --> LLM[LLM Provider: Anthropic / OpenAI]
    LLM --> ToolCall[Agent Proposes Tool Call]
    ToolCall --> Policy{Command Policy Engine}

    Policy -- BLOCKED e.g. rm -rf --> Reject[Abort Tool Call & Log Error]
    Policy -- CONFIRM --> Pause[Transition to PAUSED_FOR_TOOL_APPROVAL]
    Pause --> UIApproval[Prompt Human Approval in UI]
    UIApproval -- Approved --> Resume[Resume Harness]

    Policy -- SAFE --> Exec[Execute Tool in Docker Sandbox Container]
    Resume --> Exec

    subgraph Sandbox [Hardened Docker Container Sandbox]
        NonRoot[Non-Root user: agent]
        Limits[Resource Quota: 2GB RAM / 2 CPUs]
        NoSock[Strictly Blocked docker.sock]
        GitOps[Git Branching, File Edits & Test Runner]
    end

    Exec --> Sandbox
    Sandbox --> EvStore[(PostgreSQL Atomic EventStore<br/>Monotonic Sequence ID)]
    EvStore --> SSE[Real-Time Server-Sent Events Stream]
    SSE --> User
    Sandbox --> MR[Push Agent Branch & Open GitLab Merge Request]`
                }
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
            items: ["LangChain", "LangGraph", "Flowise", "Agent Harnesses", "Multi-Agent RAG", "Google Gemini API", "OpenAI APIs", "DeepSeek", "n8n"]
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