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
            sublabel: "Cut CC Payment Panel query latency from 20s to 0.3s by eliminating sub-queries via join optimization & dynamic pruning"
        },
        {
            value: "2M Rows",
            label: "Hard-Cap Stream",
            sublabel: "High-throughput worker pool streaming in <1min with global concurrency locks"
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
            projectType: "Fintech Payments & Partner Reporting",
            year: "2026",
            role: "Full Stack Engineer",
            duration: "Jan 2026 – Present",
            link: "http://myreport.gopaisa.com",
            summary: "Built PolicyBazaar's self-serve campaign report (167K+ clicks), made a key payments screen 66× faster, and created a live monitor for the payment services.",
            overviewParagraph: "At GoPaisa I build the systems behind payments and partner reporting. I created GoPaisa Report so partners like PolicyBazaar can track their campaign results (167K+ clicks) on their own, made a key payments screen load in 0.3 seconds instead of 20, rebuilt report downloads to handle up to 2 million rows safely, and built API Pulse, a live monitor that shows problems in the payment services the moment they happen.",
            caseMetrics: [
                { value: "66× Faster", label: "Payment Screen Load", desc: "20s → 0.3s query optimization", tooltip: "Replaced correlated sub-queries with pre-aggregated LEFT JOINs & dynamic pruning (20s → 0.3s)" },
                { value: "2M Rows", label: "Per Report Download", desc: "Backpressure HTTP streaming", tooltip: "Chunked streaming export with worker_threads AES-256 decryption & concurrency locking" },
                { value: "167K+", label: "Clicks Tracked", desc: "Real-time PolicyBazaar reporting", tooltip: "Tracked across NRI Health & Investment campaigns" },
                { value: "~79 Columns", label: "Pick-What-You-Need Exports", desc: "Dynamic dependency planner", tooltip: "Resolves ~79 columns across transactions, users & beneficiaries; prunes joins dynamically" }
            ],
            problemToSolve: "Partners like PolicyBazaar had no way to check their own campaign results, so engineers pulled the numbers from the database by hand. At the same time, a key payments screen took about 20 seconds to load, and large report downloads could overload the servers when several people ran them at once.",
            solution: "I built GoPaisa Report, a self-serve dashboard with live campaign numbers, trend charts and a guided spreadsheet upload. On the payments side, I rewrote how the slowest screen looks up data so it loads in 0.3 seconds instead of 20, and rebuilt report downloads to handle up to 2 million rows safely while card and PAN details stay encrypted. I also built API Pulse, which lets the team watch the health of the payment services live.",
            images: [
                "/projects/gopaisa-analytics.svg",
                "/projects/gopaisa-api-pulse.svg"
            ],
            tech: "React.js, Node.js, PostgreSQL (pg-cursor), worker_threads, MongoDB, Redis, Nginx, PM2, AES-256, HMAC Auth, WebSockets, Server-Sent Events, Google OAuth 2.0",
            points: [
                "Self-Serve Campaign Reports: PolicyBazaar's team used to wait for engineers to pull campaign numbers by hand. I built a dashboard where they sign in with Google and track 167K+ clicks on their own, any time.",
                "Safe Spreadsheet Uploads: Uploading campaign data used to risk bad or duplicate entries. Every file is now checked, duplicates are flagged before anything is saved, and progress shows live.",
                "Results at a Glance: Headline numbers and trend charts that answer “how are our campaigns doing?” in seconds, with one-click downloads.",
                "Payment Screen 66× Faster: A key screen for the payments team took about 20 seconds to load. After I reworked how it fetches data, it loads in 0.3 seconds.",
                "Huge Downloads Without Crashes: Big report downloads could overload the servers. They now handle up to 2 million rows smoothly, and sensitive card and PAN details stay encrypted until the last step.",
                "No Wasted Work: If someone closes the page mid-download, the work on the server stops right away instead of quietly using up resources.",
                "API Pulse, a Live Health Monitor: One screen that shows every failing or slow request across the payment services as it happens, plus a health status for each service, so problems are spotted in seconds instead of dug out of logs later.",
                "Alerts and Payment Tools: Instant chat alerts when a server logs an error, a service that sends payouts and verifies bank details, a one-time-code check before money goes out, and a task system that makes sure support calls customers back on time."
            ],
            architecture: [
                "Fetch Only What's Needed: Users pick from ~79 columns, and the system pulls in only the related tables those columns actually need (dynamic join pruning).",
                "One Lookup Instead of Thousands: The slow screen ran a separate check for every single row. It now does one combined lookup up front (a pre-aggregated join), which is where the 66× speed-up came from.",
                "Decrypt Each Value Once, in Parallel: Sensitive fields are decrypted on background workers, and repeated values are decrypted only once, so the main server stays responsive (worker threads).",
                "Steady Memory for Big Downloads: Data is read 5,000 rows at a time and sent only as fast as the user's connection can take it, so memory stays flat even at 2 million rows (backpressure streaming).",
                "Locked-Down Exports: Each download needs a short-lived signed ticket, only one heavy export runs at a time, and closing the tab cancels the database work.",
                "Monitoring That Can't Hurt Payments: The monitoring hook reports in the background and gives up quickly when needed, so it can never slow down or break a payment. A service that goes quiet for over a minute is flagged."
            ],
            diagrams: [
                {
                    id: "payment-panel",
                    tabTitle: "CC Payment Panel & Support Ops",
                    title: "CC Payment Panel Operations & Real-Time Support Engine",
                    badge: "Core Platform",
                    description: "Dual-database fintech operations platform (PostgreSQL + MongoDB) orchestrating real-time Socket.IO ticket synchronization, immutable mutation audit logging (auditMutationLogger), SLA escalation watchdogs, and click-to-call phone unmasking.",
                    chart: `flowchart TD
    %% ==========================================
    %% 1. CLIENT & SUPPORT AGENT UI
    %% ==========================================
    subgraph UI ["Client UI: CC Payment Panel & Support Ops (React + MUI)"]
        Dashboard["Payment Dashboard & Live Analytics<br/>(Settlements, Volume, Status Breakdown)"]
        ToCallHub["To-Call Task Management Board<br/>(Unassigned, Assigned, In-Progress, Escalated)"]
        PhoneReveal["Click-to-Call Phone Unmasking<br/>(Audit-Confirmed Decryption Request)"]
        SocketHook["useToCallSocket() & React Query<br/>(Socket.IO Real-Time Event Sync)"]
    end

    %% ==========================================
    %% 2. GATEWAY, AUTH & AUDIT MIDDLEWARE
    %% ==========================================
    subgraph Gateway ["API Gateway & Compliance Middlewares (Node.js)"]
        PassportAuth["Passport.js Session Auth & RBAC<br/>(SuperAdmin, Operations, Support Agent)"]
        AuditSnapshot["auditLoadBeforeSnapshot<br/>(Captures Pre-Mutation DB State)"]
        AuditLogger["auditMutationLogger<br/>(Immutable MongoDB Mutation Audit Trail)"]
        JoiValidator["Joi Schema Validation & Sanitization"]
    end

    %% ==========================================
    %% 3. BUSINESS LOGIC & SERVICE LAYER
    %% ==========================================
    subgraph Services ["Core Payment Panel Services"]
        QuerySvc["queryService.js<br/>Parallel Multi-DB Reads & SLA Counts"]
        AgentSvc["agentService.js<br/>Phone Decryption & Call Outcomes"]
        IngestSvc["ingestService.js<br/>Auto-Task Creation on Payment Failure"]
        CronSvc["cronScheduler.js<br/>SLA Breach & Escalation Watchdog"]
    end

    %% ==========================================
    %% 4. REAL-TIME EVENT ENGINE
    %% ==========================================
    subgraph RealTime ["Real-Time WebSocket Engine (Socket.IO)"]
        SocketServer["Socket.IO Server<br/>(Rooms: agent:id, role:support)"]
        LiveEvents["Live Broadcasts:<br/>• task:assigned • task:resolved • sla:escalated"]
    end

    %% ==========================================
    %% 5. DUAL DATABASE STORAGE ENGINE
    %% ==========================================
    subgraph Storage ["Dual-Database Architecture"]
        PG[("PostgreSQL (ACID Transactions)<br/>• transactions • users • beneficiaries<br/>• settlements • credit_cards")]
        Mongo[("MongoDB (Operational & Audit Data)<br/>• support_to_call_tasks • audit_logs<br/>• agent_history • support_qna")]
    end

    %% ==========================================
    %% CONNECTIONS & FLOW
    %% ==========================================
    Dashboard & ToCallHub & PhoneReveal --> Gateway
    SocketServer <-->|"Bidirectional WebSocket"| SocketHook
    Gateway --> PassportAuth --> AuditSnapshot --> AuditLogger --> JoiValidator --> Services

    IngestSvc -->|"Trigger on Payment Failure"| SocketServer
    CronSvc -->|"SLA Timeout Check"| SocketServer
    SocketServer --> LiveEvents

    Services --> Storage
    QuerySvc -->|"Financial Ledgers"| PG
    QuerySvc -->|"Task States & SLA Counts"| Mongo
    AgentSvc -->|"Update Call Outcome"| Mongo
    AgentSvc -->|"Fetch Masked Customer Data"| PG
    AuditLogger -->|"Immutable Log Write"| Mongo`
                },
                {
                    id: "streaming-export",
                    tabTitle: "Transaction Download Backend",
                    title: "High-Throughput Streaming & Decryption Worker Pool",
                    badge: "Payment Panel Engine",
                    description: "High-throughput backpressure streaming pipeline handling up to 2,000,000 rows across ~79 columns with scoped HMAC export tickets, precision SQL dependency planning, dynamic join pruning for card label optimization (eliminating correlated sub-queries), multi-threaded worker pool AES-256 decryption across 3 sensitive fields (Sender PAN, Beneficiary PAN, Card Last4), and safe query abort cancellation.",
                    chart: `flowchart TD
    %% ==========================================
    %% 1. CLIENT & UI LAYER
    %% ==========================================
    subgraph UI ["Client UI (Payment Panel & Data Export Portal)"]
        Req["User selects Date Range, Filters & Columns<br/>(Searchable Across ~79 Multi-Table Columns)"]
        TicketReq["Request Scoped Export Ticket<br/>POST /platform-users/transactions/export-ticket"]
        DirectPass["Or Direct Authentication<br/>(Password Rate-Limited)"]
    end

    %% ==========================================
    %% 2. GATEWAY & SECURITY GUARD
    %% ==========================================
    subgraph Security ["Gatekeeper & Concurrency Guard"]
        VerifyTicket["Verify Scoped HMAC Export Ticket<br/>(verifyExportTicket Middleware)"]
        LimitCheck{"Row Limit Validation<br/>(Hard Cap: 2,000,000 Rows)"}
        GlobalLock{"Global Concurrency Lock<br/>(export:lock:userId)"}
        Reject400["400 Bad Request / Exceeds Limit"]
        Reject429["429 Conflict / Export Active"]
    end

    %% ==========================================
    %% 3. PRECISION DEPENDENCY PLANNER
    %% ==========================================
    subgraph Planner ["Precision Dependency Planner & Query Optimization"]
        CompilePlan["compileExportPlan()"]
        ColumnResolve["Resolve Selection from ~79 Columns<br/>& Cross-Table Dependencies (dependsOn)"]
        CardLabelOpt["Card Label Query Optimization (20s → 0.3s)<br/>• Eliminated correlated EXISTS sub-queries<br/>• Removed redundant v.id != t.id inequality<br/>• Attached pre-aggregated verification_child_parent LEFT JOIN"]
        DynamicJoin["Dynamic JOIN Pruning<br/>(LEFT JOIN users / beneficiaries / vcp ONLY if needed)"]
        OrderIndex["Index-Aligned Sorting<br/>(ORDER BY t.created_at DESC)"]
    end

    %% ==========================================
    %% 4. DATABASE STREAMING ENGINE
    %% ==========================================
    subgraph DB ["Database Streaming Engine (pg-cursor)"]
        PgCursor["PostgreSQL Native Cursor (pg-cursor)<br/>DECLARE export_cur NO SCROLL CURSOR"]
        FetchBatch["Fetch Bounded Batch<br/>(5,000 rows/batch cursor.read)"]
        MongoStream["MongoDB Cursor Stream<br/>(In-Place Document Flattening)"]
    end

    %% ==========================================
    %% 5. BATCH-LEVEL WORKER DECRYPTION POOL
    %% ==========================================
    subgraph CryptoLayer ["Batch-Level Decryption Pipeline"]
        Dedup["Batch-Local Ciphertext Deduplication<br/>collectAllUniqueCiphertexts() across 3 fields<br/>(Sender PAN, Beneficiary PAN, Card Last-4)"]

        subgraph WorkerPool ["DecryptWorkerPool (worker_threads)"]
            Chunker["Sub-Batch Chunker<br/>(250 unique ciphertexts/batch)"]
            JobQueue["Pending Job Queue<br/>[Job 1: 250, Job 2: 250, Job 3: 250...]"]
            Dispatcher{"Thread Dispatcher<br/>Capped to min(4, CPU - 1)"}
            W1["Worker Thread 1<br/>(AES-256 / PBKDF2)"]
            W2["Worker Thread 2<br/>(AES-256 / PBKDF2)"]
            W3["Worker Thread 3<br/>(AES-256 / PBKDF2)"]
            Aggregator["Promise.all().flat()<br/>Assemble Decrypted Payloads"]
        end

        DecMap["In-Memory DecryptMap<br/>Map(ciphertext → plaintext)"]
        ApplyMap["applyDecryptMapToAllRows()<br/>Fast In-Place Row Hydration in O(1)"]
    end

    %% ==========================================
    %% 6. BACKPRESSURE & CSV STREAMING
    %% ==========================================
    subgraph Streaming ["Backpressure HTTP Streaming Engine"]
        FormatCells["Format Cells: Rupee Amounts, IST Dates & Enums"]
        CSVTransform["csvRowToLine() Chunk Generator"]
        WriteCheck{"writeWithBackpressure()<br/>res.write(chunk) == false?"}
        DrainWait["Pause Cursor & Await 'drain' Event"]
        HTTPResp["HTTP 200 Chunked Stream<br/>Transfer-Encoding: chunked<br/>X-Export-Total-Rows"]
    end

    %% ==========================================
    %% 7. TELEMETRY & CANCELLATION
    %% ==========================================
    subgraph Telemetry ["Live Telemetry & Cancellation"]
        ProgressReg["In-Memory Progress Registry<br/>(Track rows exported, throughput & elapsed time)"]
        ProgressPoll["GET /exports/:id/progress<br/>(Live Progress Bar in Modal)"]
        AbortHandler{"Client Disconnect or User Abort?<br/>res.on('close') / POST /:id/cancel"}
        CancelPg["safeCancelPgClient() & CLOSE cursor<br/>(Zero DB Leak / Rollback)"]
    end

    %% ==========================================
    %% CONNECTIONS & FLOW
    %% ==========================================
    Req --> TicketReq & DirectPass
    TicketReq & DirectPass --> VerifyTicket
    VerifyTicket --> LimitCheck
    LimitCheck -- "> 2M Rows" --> Reject400
    LimitCheck -- "<= 2M Rows" --> GlobalLock
    GlobalLock -- "Lock Busy" --> Reject429
    GlobalLock -- "Lock Acquired" --> CompilePlan

    CompilePlan --> ColumnResolve --> CardLabelOpt --> DynamicJoin --> OrderIndex
    OrderIndex --> PgCursor & MongoStream

    PgCursor --> FetchBatch
    FetchBatch --> Dedup
    Dedup --> Chunker
    Chunker --> JobQueue
    JobQueue --> Dispatcher
    Dispatcher --> W1 & W2 & W3
    W1 & W2 & W3 --> Aggregator
    Aggregator --> DecMap
    DecMap --> ApplyMap
    ApplyMap --> FormatCells

    FormatCells --> CSVTransform
    CSVTransform --> WriteCheck

    WriteCheck -- "Buffer Saturated" --> DrainWait
    DrainWait -.->|"Resume on 'drain'"| FetchBatch
    WriteCheck -- "Stream Ready" --> HTTPResp

    %% Telemetry & Cancellation links
    FetchBatch -. "Batch Update" .-> ProgressReg
    ProgressReg -. "Polls Metrics" .-> ProgressPoll
    HTTPResp -. "User Closes / Aborts" .-> AbortHandler
    AbortHandler -- "Yes" --> CancelPg
    CancelPg -. "Terminates Query" .-> PgCursor
    HTTPResp -. "On Complete" .-> ReleaseLock["Auto-Release Lock & Close Connection"]`
                },
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
                    id: "api-pulse",
                    tabTitle: "API Pulse Live Monitoring",
                    title: "API Pulse: Real-Time API Monitoring for Payment Microservices",
                    badge: "Observability & SSE",
                    description: "Drop-in Express middleware reports errors and slow requests plus 30s traffic heartbeats; the API Pulse server validates, stores and streams them over SSE to a live golden-signals dashboard.",
                    chart: `flowchart TD
    subgraph Services ["Payment Microservices (Express)"]
        PC["payment-collection<br/>monitoring middleware"]
        PB["payment-panel-backend<br/>monitoring middleware"]
    end

    PC & PB --> Hook["res.on('finish') hook<br/>status, latency, route, error message"]
    Hook --> Window["In-memory 30s rolling window<br/>req/s, success, errors, avg latency"]
    Hook --> Gate{"Status >= 400<br/>or latency > 2s?"}
    Gate -- No --> CountOnly["Counted in window only"]
    Gate -- Yes --> Event["Build event<br/>UUIDv7 id, severity, sanitized context"]

    Window -->|"POST /ingest/heartbeats every 30s"| Ingest
    Event -->|"POST /ingest/events, fire-and-forget"| Ingest

    subgraph Pulse ["API Pulse Server"]
        Ingest["Ingestion API<br/>internal API key"] --> Registry{"Registered project,<br/>environment and service?"}
        Registry -- No --> Reject["400 UNREGISTERED_SERVICE"]
        Registry -- Yes --> Store[("MongoDB<br/>api_events, 7-day TTL<br/>service_health")]
        Store --> Broadcast["SSE broadcast<br/>api-event, health-update"]
        Store --> Summary["Summary API<br/>error rate, P50 / P95 / P99"]
        Summary --> HealthCheck{"Last heartbeat age"}
        HealthCheck -- "< 60s" --> Healthy["healthy"]
        HealthCheck -- "60-120s" --> Warn["warning"]
        HealthCheck -- "> 120s" --> Critical["critical"]
    end

    Broadcast --> Dash["Live Dashboard<br/>event stream, filters, search, details drawer"]
    Summary --> Dash`
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
            projectType: "Mobile-Friendly Data Screens",
            year: "2025",
            role: "Full Stack Developer Trainee",
            duration: "Nov 2025 – Dec 2025",
            summary: "Made data-heavy screens work on phones, so filtered lists show the same records on every device with nothing cut off.",
            overviewParagraph: "At TableSprint I fixed how data-heavy screens behave on phones and tablets. Lists that open with filters already applied (like status or date) now show exactly the same records on every screen size, and wide tables turn into readable cards on mobile instead of being cut off or scrolling sideways.",
            caseMetrics: [
                { value: "100%", label: "Same Data on Every Device", desc: "Identical filtered data across desktop & mobile" },
                { value: "0", label: "Sideways Scrolling", desc: "Eliminated horizontal scroll & layout breaks" },
                { value: "Mobile-First", label: "Tables Become Cards", desc: "Seamless table-to-card layout with active filters" }
            ],
            problemToSolve: "Data screens that open with filters already applied (for example “active enterprise deals”) behaved differently on phones: filters could reset, columns got cut off, and pages scrolled sideways. Mobile users could end up seeing different or incomplete data.",
            solution: "I rebuilt these screens so every screen size reads the same filter settings, and wide tables turn into easy-to-read cards on phones. The result: the same records on every device and no sideways scrolling.",
            architecture: [
                "One Source of Truth for Filters: Desktop, tablet and phone all read the same filter state, so counts and results always match.",
                "Layout Changes, Data Doesn't: Below 640px the table switches to cards, but every field from the table is still shown.",
                "Shared Screen-Size Rules: One consistent set of breakpoint rules across components (Tailwind CSS), which fixed overflow bugs at their source."
            ],
            images: [
                "/projects/tablesprint-platform.svg"
            ],
            tech: "React.js, Tailwind CSS, JavaScript, Responsive Design, Mobile-First UI, MERN Stack",
            points: [
                "Same Data on Every Screen: Lists that open with filters already applied now show exactly the same records on a phone as on a laptop.",
                "Tables That Work on Phones: Wide data tables turn into easy-to-tap cards on small screens without losing any information or active filters.",
                "No Sideways Scrolling: Fixed layouts that spilled off the edge of mobile screens, so nothing is cut off.",
                "Filters Stay Put: Resizing the window or rotating a phone never resets the filters or changes the record count."
            ],
            diagrams: [
                {
                    id: "tablesprint-responsive-flow",
                    title: "Cross-Device Data Consistency & Responsive Filtered Component Pipeline",
                    badge: "Responsive Architecture (Mobile & Desktop)",
                    description: "Data flow illustrating how pre-applied filter state is ingested, synchronized across breakpoints, and adaptively rendered as a full multi-column grid on desktop and an optimized card stack on mobile viewports.",
                    chart: `flowchart TD
    subgraph Ingestion ["1. Pre-Applied Filter State Ingestion"]
        Dataset["Enterprise CRM Dataset<br/>(94 Total Records)"] --> FilterEngine["Filter Engine<br/>• Status: Active Deals<br/>• Tier: Enterprise<br/>• Region: APAC & EMEA"]
        FilterEngine --> FilteredState["Filtered State (18 Matched Records)<br/>Persistent Query State & Active Chips"]
    end

    subgraph Breakpoint ["2. Viewport Breakpoint Detector"]
        FilteredState --> VPCheck{"Viewport Width<br/>Breakpoint Evaluation"}
    end

    subgraph DesktopFlow ["3A. Desktop Viewport (>= 1024px)"]
        VPCheck -->|Desktop Screen| DTView["Full Multi-Column Data Grid<br/>• 5 Columns (Account, Stage, Tier, Value, Status)<br/>• Sortable Headers & Horizontal Alignment<br/>• 18 Filtered Rows Displayed"]
        DTView --> DTMetric["✔ 0 Layout Shift | Full Horizontal Space"]
    end

    subgraph MobileFlow ["3B. Mobile Viewport (< 640px)"]
        VPCheck -->|Mobile Screen| MBView["Adaptive Filtered Card Stack<br/>• Table Columns Transformed to Compact Cards<br/>• Touch-Friendly Filter Sheet Drawer<br/>• 18 Identical Filtered Records"]
        MBView --> MBMetric["✔ 0px Horizontal Overflow | Touch-Optimized"]
    end

    subgraph Validation ["4. Data Parity & State Verification"]
        DTMetric & MBMetric --> ParityCheck{"Cross-Device Data Parity<br/>Verification"}
        ParityCheck --> ParitySuccess["100% Data Consistency Across Devices<br/>(Zero Filter State Drop Across Breakpoints)"]
    end`
                }
            ]
        },
        {
            id: "incnut-digital",
            client: "IncNut Digital",
            company: "IncNut Digital",
            title: "IncNut Digital",
            projectType: "AI Customer Support",
            year: "2025",
            role: "AI Intern (LLM Application Developer)",
            duration: "Jul 2025 – Oct 2025",
            summary: "Built AI support assistants for wellness brands Vedix and SkinKraft that now handle 60% of routine customer tickets and cut order cancellations for 35.7% of users.",
            overviewParagraph: "At IncNut Digital I built AI assistants that answer customer support tickets for two wellness brands, Vedix and SkinKraft. I proved the idea with a quick visual prototype (FlowiseAI), then rebuilt it as a reliable production system (LangGraph) where every conversation can be reviewed (LangSmith). It now handles 60% of routine questions and cut order cancellations for 35.7% of users.",
            caseMetrics: [
                { value: "60%", label: "Tickets Handled by AI", desc: "Routine inquiries handled by LLM agents" },
                { value: "35.7%", label: "Fewer Cancellations", desc: "Blockers removed with LangGraph state flows" },
                { value: "2 Brands", label: "Live in Production", desc: "Deployed for Vedix & SkinKraft" }
            ],
            problemToSolve: "Support teams at two wellness brands were buried under a growing backlog of customer tickets, and the cancellation process was so rigid that frustrated customers simply cancelled their orders.",
            solution: "I built AI support assistants that read each ticket, check who the customer is, look up their orders and reply. I first proved the idea with a quick visual prototype (FlowiseAI), then rebuilt it as a reliable production system (LangGraph) where every conversation can be reviewed (LangSmith). It now handles 60% of routine tickets, and a smarter cancellation flow cut order cancellations for 35.7% of users.",
            architecture: [
                "From Prototype to Reliable System: The visual prototype was great for testing ideas, but production needed exact control over every step, so I moved it into code (FlowiseAI → LangGraph).",
                "Every Conversation Is Traceable: Each AI conversation is recorded step by step, making it easy to see why the AI answered a certain way and what it cost (LangSmith).",
                "Check, Then Answer: The AI confirms who the customer is, looks up their orders, decides what they need, and only then uses tools like order lookups to reply.",
                "Smarter Cancellation Path: Before processing a cancellation, the AI tries to solve the problem behind it, such as suggesting a better-suited product."
            ],
            images: [
                "/projects/incnut-analytics.svg"
            ],
            tech: "LangGraph, LangSmith, FlowiseAI, LangChain, Python, LLM APIs (GPT-4o), Prompt Engineering, React, Freshdesk Webhooks",
            points: [
                "AI Support for Two Brands: Built AI assistants that answer customer support tickets for Vedix and SkinKraft, now handling 60% of routine questions without a human.",
                "Prototype First: Proved the idea quickly in a visual tool (FlowiseAI), where a “manager” AI hands each question to specialist AIs that can search the web and the brand's product knowledge.",
                "Built for Production: Rebuilt it in code (LangGraph) so the AI follows reliable, predictable steps and sorts each ticket into one of 12 request types, with every conversation reviewable (LangSmith).",
                "Fewer Cancellations: Redesigned how the AI handles “I want to cancel” requests so it tries to fix the real problem first, which cut order cancellations for 35.7% of users."
            ],
            diagrams: [
                {
                    id: "incnut-multi-agent-rag",
                    tabTitle: "LangGraph & LangSmith Production (V2)",
                    title: "Production LangGraph Cyclic State Machine & LangSmith Observability",
                    badge: "Production V2 (LangGraph)",
                    description: "Production state-graph engine monitored with LangSmith: Freshdesk webhook ingestion, gatekeeper customer verification, structured 12-specialist intent routing, cyclic ReAct ToolNode execution, and post-graph reply structuring.",
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
                },
                {
                    id: "flowise-supervisor-flow",
                    tabTitle: "FlowiseAI Initial Architecture (V1)",
                    title: "Initial FlowiseAI Multi-Agentic RAG Architecture (Supervisor-Worker Pattern)",
                    badge: "Initial V1 (FlowiseAI)",
                    description: "The initial multi-agent RAG prototype built with FlowiseAI: A ChatOpenAI-powered Supervisor AI orchestrating specialized Worker AI personas (Lead/Customer Research with Google Search, Retention & Solutions drafting) under single-task-at-a-time execution and recursion limit guardrails.",
                    chart: `flowchart TD
    %% ==========================================
    %% 1. USER & INGESTION
    %% ==========================================
    subgraph Client ["User / Channel Entrypoint"]
        User["User Inquiry / Support Ticket<br/>(D2C Customer Query for Vedix / SkinKraft)"]
    end

    %% ==========================================
    %% 2. MODEL & TOOL CONFIG NODES
    %% ==========================================
    subgraph ConfigNodes ["Flowise Canvas Configuration Nodes"]
        ChatModel["ChatOpenAI Node<br/>• Model: gpt-4o<br/>• Temperature: 0.9<br/>• Function Calling Enabled"]
        SearchTool["Google Custom Search Tool<br/>(API Credential & Web Retrieval)"]
        KBRag["Knowledge Base Vector Store<br/>(Vedix & SkinKraft Regimen Data)"]
    end

    %% ==========================================
    %% 3. SUPERVISOR NODE (ORCHESTRATOR)
    %% ==========================================
    subgraph SupervisorNode ["Flowise Supervisor AI Node (Orchestrator)"]
        Sup["Supervisor Agent<br/>• System Prompt with {team_members} variable<br/>• 'FINISH' Directive Termination Signal<br/>• Recursion Limit Guardrail"]
        StateMem["Agent Memory Node<br/>(Preserves State Across Handoffs)"]
    end

    %% ==========================================
    %% 4. WORKER AI TEAM (SPECIALIZED AGENTS)
    %% ==========================================
    subgraph WorkerTeam ["Flowise Worker AI Team (Sequential Execution)"]
        W1["Worker 1: Customer & Product Research<br/>• Prompt: Explore digital landscape & customer history<br/>• Tools: Google Search & Brand Knowledge Base<br/>• Max Iterations Guardrail"]
        W2["Worker 2: Resolution & Retention Specialist<br/>• Prompt: Formulate personalized solutions & email drafts<br/>• Tool: CRM / Retention Voucher API<br/>• Max Iterations Guardrail"]
    end

    %% ==========================================
    %% 5. DELIVERY & COMPLETION
    %% ==========================================
    subgraph Delivery ["Final Resolution Flow"]
        FinalResp["Supervisor Validates Output<br/>Issues 'FINISH' Directive"]
        UserOut["Personalized Resolution Delivered<br/>(Sent to Support Agent / Customer)"]
    end

    %% ==========================================
    %% CONNECTIONS & FLOW
    %% ==========================================
    User --> Sup
    ChatModel -->|"Tool Calling Chat Model"| Sup
    ChatModel -.->|"Inherited Chat Model"| W1 & W2
    SearchTool & KBRag -->|"Connected Tools"| W1

    Sup -->|"Step 1: Delegate Research Task"| W1
    W1 -->|"Return Research Findings"| Sup
    Sup -->|"Step 2: Delegate Solution Task"| W2
    W2 -->|"Return Formulated Draft / Solution"| Sup

    Sup --> FinalResp
    FinalResp --> UserOut`
                }
            ]
        }
    ],


    projects: [
        {
            id: "pm2-auto-recovery-alerts",
            client: "Open Source Tool",
            company: "Self",
            projectType: "Server Monitoring & Auto-Recovery",
            year: "2025",
            title: "PM2 Auto Recovery Alerts",
            tech: "Node.js, MongoDB, SSH, Docker",
            badge: "DevOps APM (PM2 Plus Alternative)",
            github: "https://github.com/Shubhanshu-ism/pm2-auto-recovery-alerts",
            link: "https://github.com/Shubhanshu-ism/pm2-auto-recovery-alerts",
            summary: "Watches your servers, restarts crashed apps automatically and alerts your team on Slack, Flock or Telegram. An open-source alternative to PM2 Plus.",
            caseMetrics: [
                { value: "Auto-Restart", label: "Self-Healing Apps", desc: "Automated remote PM2 process restarts" },
                { value: "Docker", label: "One-Step Setup", desc: "Hardened environment with REST API" },
                { value: "3 Channels", label: "Slack · Flock · Telegram", desc: "Slack, Flock, and Telegram webhooks" }
            ],
            description: "Watches your servers, restarts crashed apps automatically and alerts your team.",
            overviewParagraph: "A small, self-hosted service that keeps an eye on apps running on remote servers. When one crashes, it restarts it automatically and tells the team on Slack, Flock or Telegram, so nobody has to log in and fix it by hand.",
            problemToSolve: "Apps running on remote servers sometimes crash quietly, for example when they run out of memory. Without something watching them, they stay down until an engineer notices, logs in and restarts them by hand.",
            solution: "I built a small always-on service that checks every app on a schedule, restarts any that have crashed, and tells the team on Slack, Flock or Telegram what happened. Servers are added through a secure API, and the whole thing runs in a single Docker container.",
            architecture: [
                "Regular Health Checks: Pings each app's health check on a schedule and reads its process status on the server (over SSH).",
                "Knows a Crash From an Outage: If an app is up but a service it depends on is down, it alerts instead of restarting, so it never restarts a healthy app.",
                "Server List in a Database: The servers to watch are stored in MongoDB and managed through a REST API.",
                "Pluggable Alerts: New alert channels are easy to add; Slack, Flock and Telegram are built in."
            ],
            images: [
                "/projects/pm2-daemon.svg",
                "/projects/pm2-architecture.svg"
            ],
            points: [
                "Apps That Fix Themselves: Watches production apps around the clock and automatically restarts any that crash.",
                "Less Manual Firefighting: No more waiting for an engineer to log in and restart a service by hand, which cuts downtime.",
                "Easy to Add Servers: New servers are added through a simple, secured API, and everything runs in one Docker container.",
                "Instant Team Alerts: Sends a message to Slack, Flock or Telegram whenever something fails or recovers."
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
            projectType: "AI Model Comparison",
            year: "2024",
            title: "AI Compare",
            tech: "React.js, Google Gemini, Deepseek",
            badge: "LLM Benchmark (Chatbot Arena Pattern)",
            link: "https://ai-compare-steel.vercel.app/",
            github: "https://github.com/Shubhanshu-ism/AI-Compare",
            summary: "Ask one question and watch Google Gemini and DeepSeek answer side by side in real time, with the response speed of each.",
            caseMetrics: [
                { value: "Side by Side", label: "Live Answers", desc: "Simultaneous model evaluation" },
                { value: "Dual Models", label: "Gemini + DeepSeek", desc: "Direct latency & token benchmark" },
                { value: "Extensible", label: "Add Any AI Provider", desc: "Pluggable AI provider architecture" }
            ],
            description: "Compare answers from Google Gemini and DeepSeek side by side.",
            overviewParagraph: "A web app for comparing AI models fairly. You type a question once and watch Google Gemini and DeepSeek answer side by side as they write, along with how quickly each one responded. New AI providers can be added easily.",
            problemToSolve: "Comparing AI models meant pasting the same question into separate websites and switching back and forth, which made fair, side-by-side judgement slow and guesswork-heavy.",
            solution: "I built one screen where you ask a question once and watch Google Gemini and DeepSeek answer side by side in real time, with how fast each one responded. New AI providers can be plugged in without rewriting the app.",
            images: [
                "/projects/ai-compare-suite.svg"
            ],
            points: [
                "Compare Answers Side by Side: Ask one question and watch Google Gemini and DeepSeek answer at the same time.",
                "Easy to Add More AIs: Built so new AI providers can be plugged in without rewriting the app.",
                "Speed and Quality at a Glance: Shows how quickly each model responded next to its answer."
            ]
        },
        {
            id: "megablog",
            client: "Personal Project",
            company: "Self",
            projectType: "Blogging Platform",
            year: "2024",
            title: "MegaBlog",
            tech: "React.js, Redux Toolkit, Appwrite, React Router, TailwindCSS",
            badge: "Full Stack / BaaS",
            link: "https://mega-blog-two-indol.vercel.app/",
            github: "https://github.com/Shubhanshu-ism/MegaBlog",
            summary: "A complete blogging platform: sign up, write with a rich text editor, upload images and publish, all on a hosted backend.",
            caseMetrics: [
                { value: "Full Stack", label: "Hosted Backend", desc: "Modular database & auth services" },
                { value: "Redux", label: "Fast, Synced Pages", desc: "Centralized session & article caching" },
                { value: "Secure", label: "Sign-In & Private Pages", desc: "Protected client-side routing" }
            ],
            description: "A complete blogging platform for writing and publishing posts.",
            overviewParagraph: "A full blogging website where people can create an account, write posts in a rich text editor, add images and publish. It runs on a hosted backend (Appwrite), so accounts, posts and images work without a custom server.",
            problemToSolve: "Building a real blogging platform usually means writing and maintaining a whole backend for accounts, posts and image storage, which slows everything else down.",
            solution: "I built MegaBlog on a hosted backend (Appwrite) that handles accounts, posts and images, kept all backend calls in one small layer so the interface stays clean, and added a central store (Redux Toolkit) so pages load fast and stay in sync.",
            architecture: [
                "Backend Kept Separate: All Appwrite calls live in small service files, so the interface never depends directly on the backend.",
                "One Central Store: Redux Toolkit holds login sessions and post data in one place.",
                "Protected Pages: Writing and editing pages require sign-in, with a TinyMCE rich text editor."
            ],
            images: [
                "/projects/megablog-platform.svg"
            ],
            points: [
                "A Complete Blogging Platform: Sign up, write posts in a rich text editor, upload images and publish, all on a hosted Appwrite backend.",
                "Fast, Consistent Pages: Login state and posts live in one central store (Redux Toolkit), so pages load quickly and stay in sync.",
                "Private Pages Stay Private: Only signed-in users can reach writing and editing pages, and the layout works on any screen size."
            ]
        },
        {
            id: "gitlab-coding-agent",
            client: "Autonomous Dev Infrastructure",
            company: "Self",
            projectType: "AI Coding Assistant",
            year: "2026",
            title: "AI GitLab Coding Agent",
            tech: "TypeScript, Next.js, Docker, PostgreSQL, Drizzle ORM, Anthropic, OpenAI",
            badge: "Autonomous SWE Agent (Devin Alternative)",
            github: "https://github.com/Shubhanshu-ism/gitlab-coding-agent",
            link: "https://github.com/Shubhanshu-ism/gitlab-coding-agent",
            summary: "An AI coding assistant that writes and tests code in a locked-down sandbox, checks every command for safety, and opens a merge request for review.",
            caseMetrics: [
                { value: "Sandboxed", label: "Isolated Workspace", desc: "2GB RAM & 2 CPU non-root isolation" },
                { value: "3 Levels", label: "Command Safety Checks", desc: "Monotonic atomic EventStore in PostgreSQL" },
                { value: "Auto MRs", label: "Ready for Review", desc: "Automated branch, commits & pipeline tracking" }
            ],
            description: "An AI that writes and tests code safely, then opens a merge request.",
            overviewParagraph: "An AI coding assistant that connects to GitLab projects. Give it a task and it reads the code, makes changes and runs the tests inside an isolated sandbox, asking a human before anything risky, then opens a merge request for review. It works with leading AI models (Claude and GPT-4o).",
            problemToSolve: "Letting an AI edit code and run commands on a real project is risky: one wrong command could delete files, run forever, or change things nobody can trace.",
            solution: "I built a system where the AI works only inside a locked-down sandbox, every command it wants to run is checked first (safe ones run, risky ones wait for a human, destructive ones are blocked), and every step is recorded. When it's done, it opens a merge request for a developer to review.",
            architecture: [
                "Clear Run States: Each run moves through defined stages (running, paused for approval, finished), so it can be stopped or resumed cleanly.",
                "Recorded Event Log: Every step is saved in order in PostgreSQL and streamed live to the browser, even after a reconnect.",
                "Three-Level Safety Policy: Commands are classed as safe, needs approval, or blocked before they ever run.",
                "Hardened Sandbox: Runs as a non-admin user with 2GB memory and 2 CPUs, and can't reach the host machine's Docker."
            ],
            images: [
                "/projects/gitlab-agent-architecture.svg"
            ],
            points: [
                "An AI That Codes Safely: Give it a coding task and it reads the code, makes changes, runs the tests and opens a merge request for review.",
                "Guardrails on Every Command: Every command is checked first. Safe ones run, risky ones wait for human approval, and destructive ones (like deleting files) are blocked.",
                "Isolated Workspace: The AI works inside a locked-down container with limited memory and no admin rights, so it can't harm the real system.",
                "Full Live History: Every step is recorded and streamed live, so developers can watch, and later replay, exactly what the AI did."
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