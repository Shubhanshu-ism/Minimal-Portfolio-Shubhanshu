import { useState, useEffect, lazy, Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';
import { userData } from '../data/user';
import { PageWrapper } from '../components/PageWrapper';
import { Footer } from '../components/Footer';
import { ItemIcon } from '../components/ItemIcon';
import { ArrowUpRight, ChevronRight, Github, Cpu, CheckCircle2, ArrowLeft, Terminal, Workflow } from 'lucide-react';

const MermaidDiagram = lazy(() => import('../components/MermaidDiagram'));

const DiagramSkeleton = () => (
    <div className="w-full bg-bgCard border border-subtle rounded-3xl p-8 shadow-sm flex flex-col items-center justify-center min-h-[380px] animate-pulse space-y-4">
        <div className="h-5 w-44 bg-black/5 dark:bg-white/5 rounded-full" />
        <div className="h-4 w-72 bg-black/5 dark:bg-white/5 rounded-full" />
        <div className="h-48 w-full max-w-lg bg-black/5 dark:bg-white/5 rounded-2xl mt-4" />
    </div>
);

const svgCache = new Map();

const SafeImage = ({ src, alt, className }) => {
    // Both pieces of state remember which src they belong to, so a stale SVG or error
    // from the previous project never shows after navigating to another one.
    const [loaded, setLoaded] = useState(null);
    const [failedSrc, setFailedSrc] = useState(null);
    const isSvg = typeof src === 'string' && src.toLowerCase().endsWith('.svg');
    const svgContent = svgCache.get(src) ?? (loaded?.src === src ? loaded.text : null);
    const hasError = failedSrc === src;

    useEffect(() => {
        if (!isSvg || !src || svgCache.has(src)) return;

        let isMounted = true;
        fetch(src)
            .then(res => {
                if (!res.ok) throw new Error('Failed to load SVG');
                return res.text();
            })
            .then(text => {
                svgCache.set(src, text);
                if (isMounted) setLoaded({ src, text });
            })
            .catch(() => {
                if (isMounted) setFailedSrc(src);
            });

        return () => { isMounted = false; };
    }, [src, isSvg]);

    if (hasError || !src) {
        return (
            <div className="w-full h-full min-h-[200px] flex flex-col items-center justify-center bg-black/[0.02] dark:bg-white/[0.03] p-8 text-center text-dim space-y-2.5 select-none border border-subtle">
                <Terminal size={32} className="text-dim/50 stroke-[1.5]" />
                <span className="text-xs font-mono font-medium text-dim/70 max-w-sm leading-relaxed">{alt}</span>
            </div>
        );
    }

    if (isSvg) {
        // Inlined (not <img>) so the artwork picks up the current theme variables.
        return svgContent ? (
            <div
                className={`svg-theme-container ${className || ''}`}
                dangerouslySetInnerHTML={{ __html: svgContent }}
                role="img"
                aria-label={alt}
            />
        ) : (
            <div className={`${className || ''} bg-bgMain`} aria-busy="true" />
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            onError={() => setFailedSrc(src)}
            className={className}
            loading="lazy"
            decoding="async"
        />
    );
};

// "Title: detail" bullets render the title as a bold lead so long lists stay scannable.
const LeadText = ({ text }) => {
    const cut = text.indexOf(': ');
    if (cut <= 0 || cut > 48) return <span>{text}</span>;
    return (
        <span>
            <span className="block font-semibold text-accent">{text.slice(0, cut)}</span>
            <span className="block mt-0.5">{text.slice(cut + 2)}</span>
        </span>
    );
};

const ProjectDetailsPage = () => {
    const { id } = useParams();
    const [activeDiagramMap, setActiveDiagramMap] = useState({});
    const activeDiagramIndex = activeDiagramMap[id] || 0;

    // Check whether this item is from work experience or projects
    const isWorkItem = userData.work.some(w => w.id === id);
    const project = isWorkItem
        ? userData.work.find(w => w.id === id)
        : userData.projects.find(p => p.id === id) || userData.work.find(w => w.id === id);

    const backLink = isWorkItem ? "/work" : "/projects";
    const backLabel = isWorkItem ? "Back to Work Experience" : "Back to Projects";
    const relatedTitle = isWorkItem ? "Other Work Experience" : "Other Projects";
    const relatedItems = (isWorkItem ? userData.work : userData.projects)
        .filter(item => item.id !== id)
        .slice(0, 3);

    if (!project) {
        return (
            <PageWrapper>
                <div className="flex flex-col items-center justify-center space-y-4 py-20 text-center">
                    <h1 className="text-3xl font-bold text-accent">Case Study Not Found</h1>
                    <p className="text-dim">The requested case study or project could not be found.</p>
                    <Link to={backLink} className="text-blue-500 hover:underline flex items-center gap-1 font-semibold">
                        <ArrowLeft size={16} /> {backLabel}
                    </Link>
                </div>
            </PageWrapper>
        );
    }

    const title = project.title || project.company;
    const techList = project.tech ? project.tech.split(',') : [];

    return (
        <PageWrapper>
            <div className="space-y-12">

                {/* Back Navigation Breadcrumb */}
                <div>
                    <Link
                        to={backLink}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-dim hover:text-accent transition-colors group"
                    >
                        <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
                        <span>{backLabel}</span>
                    </Link>
                </div>

                {/* Top Metadata Grid (No Truncation) */}
                <header className="space-y-6">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-3.5 gap-x-4 p-5 rounded-3xl bg-bgCard border border-subtle shadow-sm text-xs">
                        <div>
                            <span className="text-[10px] font-mono uppercase tracking-wider text-dim block">Client / Scope</span>
                            <span className="text-accent font-semibold mt-1 block leading-tight">{project.client || project.company}</span>
                        </div>
                        <div>
                            <span className="text-[10px] font-mono uppercase tracking-wider text-dim block">Domain</span>
                            <span className="text-accent font-semibold mt-1 block leading-tight">{project.projectType}</span>
                        </div>
                        <div>
                            <span className="text-[10px] font-mono uppercase tracking-wider text-dim block">Timeline</span>
                            <span className="text-accent font-semibold mt-1 block font-mono leading-tight">{project.duration || project.year}</span>
                        </div>
                        <div>
                            <span className="text-[10px] font-mono uppercase tracking-wider text-dim block">Role</span>
                            <span className="text-accent font-semibold mt-1 block leading-tight">{project.role || "Creator / Engineer"}</span>
                        </div>
                    </div>

                    {/* Hero Title & Overview */}
                    <div className="space-y-5 pt-1">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-black/[0.03] dark:bg-white/[0.06] rounded-2xl flex items-center justify-center font-bold text-2xl text-accent shrink-0 shadow-sm border border-subtle">
                                <ItemIcon item={project} size={24} />
                            </div>
                            <div>
                                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-accent leading-tight">
                                    {title}
                                </h1>
                                <p className="text-xs sm:text-sm text-dim font-mono mt-0.5">
                                    {project.role} &middot; {project.company}
                                </p>
                            </div>
                        </div>

                        <p className="text-base sm:text-lg text-dim leading-relaxed max-w-2xl">
                            {project.overviewParagraph}
                        </p>

                        {/* Tech Stack Pills in Header */}
                        {techList.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 pt-1">
                                {techList.map((t, idx) => (
                                    <span
                                        key={idx}
                                        className="text-[10px] font-mono font-medium uppercase tracking-wider bg-black/[0.03] dark:bg-white/[0.05] border border-subtle px-3 py-1 rounded-full text-dim"
                                    >
                                        {t.trim()}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Action Buttons: Live Link & GitHub */}
                        <div className="flex flex-wrap items-center gap-3 pt-2">
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 bg-accent text-bgMain px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 active:scale-[0.96] transition-all shadow-sm"
                                >
                                    <span>{project.company === 'GoPaisa' ? 'Visit Live myreport.gopaisa.com' : 'Visit Live Deployment'}</span>
                                    <ArrowUpRight size={16} />
                                </a>
                            )}
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 bg-transparent border border-subtle text-accent px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-black/[0.04] dark:hover:bg-white/[0.06] active:scale-[0.96] transition-all"
                                >
                                    <Github size={16} />
                                    <span>View GitHub Repo</span>
                                </a>
                            )}
                        </div>
                    </div>
                </header>

                {/* Engineering Metrics */}
                {project.caseMetrics && project.caseMetrics.length > 0 && (
                    <section className="space-y-3">
                        <div className={`grid ${project.caseMetrics.length === 3 ? 'grid-cols-3' : 'grid-cols-2'} gap-3`}>
                            {project.caseMetrics.map((m, idx) => (
                                <div
                                    key={idx}
                                    className="bg-bgCard border border-subtle p-4 rounded-2xl text-center shadow-sm"
                                >
                                    <p className="text-2xl sm:text-3xl font-extrabold text-accent tracking-tight">{m.value}</p>
                                    <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-dim mt-1.5">{m.label}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Primary Hero Screenshot Preview */}
                {project.images && project.images[0] && (
                    <div className="w-full bg-bgCard rounded-3xl overflow-hidden border border-subtle shadow-sm aspect-[16/10]">
                        <SafeImage
                            src={project.images[0]}
                            alt={`${title} primary system preview`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}

                {/* Problem & Solution */}
                {(project.problemToSolve || project.solution) && (
                    <section className="space-y-8">
                        {project.problemToSolve && (
                            <div className="space-y-3">
                                <h2 className="text-xl font-bold text-accent">The Problem</h2>
                                <p className="text-base sm:text-[17px] text-dim leading-relaxed">
                                    {project.problemToSolve}
                                </p>
                            </div>
                        )}

                        {project.solution && (
                            <div className="space-y-3">
                                <h2 className="text-xl font-bold text-accent">What I Built</h2>
                                <p className="text-base sm:text-[17px] text-dim leading-relaxed">
                                    {project.solution}
                                </p>
                            </div>
                        )}
                    </section>
                )}

                {/* Key Accomplishments & Deliverables */}
                {project.points && project.points.length > 0 && (
                    <section className="space-y-4">
                        <div className="flex items-center gap-2 px-1">
                            <CheckCircle2 size={18} className="text-emerald-500" />
                            <h2 className="text-xl font-bold text-accent tracking-tight">Key Results</h2>
                        </div>
                        <div className="bg-bgCard border border-subtle p-6 sm:p-7 rounded-3xl shadow-sm">
                            <ul className="space-y-4">
                                {project.points.map((point, idx) => (
                                    <li key={idx} className="text-sm sm:text-[15px] text-dim leading-relaxed flex items-start gap-3">
                                        <span className="text-accent/60 text-xs mt-1 shrink-0">▸</span>
                                        <LeadText text={point} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                )}

                {/* System Architecture Section (if distinct decisions are specified) */}
                {project.architecture && (
                    <section className="space-y-4">
                        <div className="flex items-center gap-2 px-1">
                            <Cpu size={18} className="text-blue-500" />
                            <h2 className="text-xl font-bold text-accent tracking-tight">How It Works Under the Hood</h2>
                        </div>
                        <div className="bg-bgCard border border-subtle p-6 sm:p-7 rounded-3xl shadow-sm">
                            <div className="grid gap-4">
                                {project.architecture.map((arch, idx) => (
                                    <div key={idx} className="flex items-start gap-3 text-sm sm:text-[15px] text-dim leading-relaxed">
                                        <span className="text-blue-500 font-mono text-xs mt-1 shrink-0 font-bold">#{idx + 1}</span>
                                        <LeadText text={arch} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* System Architecture & Data Flows (Mermaid Diagrams) */}
                {project.diagrams && project.diagrams.length > 0 && (
                    <section className="space-y-5">
                        <div className="space-y-1 px-1">
                            <div className="flex items-center gap-2">
                                <Workflow size={20} className="text-blue-500" />
                                <h2 className="text-xl sm:text-2xl font-bold text-accent tracking-tight">System Architecture & Data Flows</h2>
                            </div>
                            <p className="text-xs sm:text-sm text-dim leading-relaxed">
                                End-to-end service lifecycles, database query strategies, and distributed execution pipelines directly verified from production codebases.
                            </p>
                        </div>

                        {/* Diagram Tabs: 2 columns for even counts, 3 for odd so no tab sits alone */}
                        {project.diagrams.length > 1 && (
                            <div className={`grid grid-cols-1 ${
                                project.diagrams.length % 2 === 0 ? 'sm:grid-cols-2' : 'sm:grid-cols-3'
                            } gap-2.5 p-1.5 rounded-3xl bg-black/[0.02] dark:bg-white/[0.03] border border-subtle`}>
                                {project.diagrams.map((diag, idx) => {
                                    const isActive = activeDiagramIndex === idx;
                                    return (
                                        <button
                                            key={diag.id || idx}
                                            onClick={() => setActiveDiagramMap(prev => ({ ...prev, [id]: idx }))}
                                            className={`flex flex-col items-start text-left p-3.5 rounded-2xl transition-all duration-200 border ${
                                                isActive
                                                    ? 'bg-bgCard border-accent/25 shadow-sm text-accent ring-1 ring-accent/10'
                                                    : 'border-transparent text-dim hover:text-accent hover:bg-black/[0.02] dark:hover:bg-white/[0.02]'
                                            }`}
                                        >
                                            <div className="flex items-center justify-between w-full">
                                                <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                                                    isActive ? 'bg-blue-500/15 text-blue-500' : 'bg-black/[0.04] dark:bg-white/[0.06] text-dim'
                                                }`}>
                                                    {diag.badge}
                                                </span>
                                                <span className="text-[10px] font-mono text-dim/60">0{idx + 1}</span>
                                            </div>
                                            <span className="font-semibold text-xs sm:text-sm mt-2 leading-snug">
                                                {diag.tabTitle || diag.title}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        )}

                        {/* Active Diagram Viewer */}
                        {project.diagrams[activeDiagramIndex] && (
                            <Suspense fallback={<DiagramSkeleton />}>
                                <MermaidDiagram
                                    key={project.diagrams[activeDiagramIndex].id || activeDiagramIndex}
                                    chart={project.diagrams[activeDiagramIndex].chart}
                                    title={project.diagrams[activeDiagramIndex].title}
                                    description={project.diagrams[activeDiagramIndex].description}
                                    badge={project.diagrams[activeDiagramIndex].badge}
                                />
                            </Suspense>
                        )}
                    </section>
                )}

                {/* Secondary Images */}
                {project.images && project.images.length > 1 && (
                    <div className="grid gap-4">
                        {project.images.slice(1).map((imgUrl, idx) => (
                            <div key={idx} className="bg-bgCard border border-subtle rounded-3xl overflow-hidden shadow-sm aspect-[16/10]">
                                <SafeImage
                                    src={imgUrl}
                                    alt={`${title} screenshot ${idx + 2}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                )}

                {/* Related Items / Other Projects List */}
                <section className="space-y-5 pt-8 border-t border-subtle">
                    <div className="flex justify-between items-center px-1">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-dim rounded-full"></div>
                            <h2 className="text-xs font-bold text-dim uppercase tracking-[0.18em] font-mono">
                                {relatedTitle}
                            </h2>
                        </div>
                        <Link
                            to={backLink}
                            className="text-[10px] font-bold tracking-widest uppercase bg-black/[0.04] dark:bg-white/[0.06] px-3.5 py-1.5 rounded-full border border-subtle text-dim hover:text-accent transition-colors flex items-center gap-1 font-mono active:scale-[0.96]"
                        >
                            View All <ArrowUpRight size={12} />
                        </Link>
                    </div>

                    <div className="grid gap-3">
                        {relatedItems.map((item, i) => {
                            const itemTitle = item.title || item.company;
                            return (
                                <Link
                                    key={i}
                                    to={`/project/${item.id}`}
                                    className="group bg-bgCard border border-subtle p-4 sm:p-5 rounded-3xl flex items-center justify-between hover:border-accent/25 hover:-translate-y-0.5 transition-all duration-200 active:scale-[0.98] shadow-sm"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-black/[0.03] dark:bg-white/[0.06] rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-subtle">
                                            <ItemIcon item={item} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-accent text-base sm:text-lg">
                                                {itemTitle}
                                            </h3>
                                            <p className="text-xs text-dim mt-0.5">{item.projectType || item.role}</p>
                                        </div>
                                    </div>
                                    <div className="text-dim group-hover:text-accent group-hover:translate-x-0.5 transition-all pr-2">
                                        <ChevronRight size={18} />
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </section>

                <Footer />

            </div>
        </PageWrapper>
    );
};

export default ProjectDetailsPage;
