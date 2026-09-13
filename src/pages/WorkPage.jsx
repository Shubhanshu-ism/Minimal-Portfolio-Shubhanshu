import { useState } from 'react';
import { userData } from '../data/user';
import { PageWrapper } from '../components/PageWrapper';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';
import { ArrowUpRight, Terminal, Layers, Sparkles, Cpu } from 'lucide-react';

const getItemIcon = (item) => {
    if (item.company === 'GoPaisa') return <Terminal size={20} className="text-[#3b82f6]" />;
    if (item.company === 'TableSprint') return <Layers size={20} className="text-[#10b981]" />;
    if (item.company === 'IncNut Digital') return <Sparkles size={20} className="text-[#8b5cf6]" />;
    if (item.id === 'pm2-auto-recovery-alerts') return <Cpu size={20} className="text-amber-500" />;
    if (item.id === 'ai-compare') return <Sparkles size={20} className="text-cyan-500" />;
    if (item.id === 'megablog') return <Layers size={20} className="text-rose-500" />;
    return <Terminal size={20} className="text-accent" />;
};

const WorkCard = ({ item, badgeLabel }) => {
    const title = item.title || item.company;
    const subtitle = item.role || item.projectType;
    const yearOrDuration = item.duration || item.year;
    const techList = item.tech ? item.tech.split(',').slice(0, 4) : [];

    return (
        <Link
            to={`/project/${item.id}`}
            className="group block bg-bgCard border border-subtle p-6 sm:p-7 rounded-[26px] hover:border-accent/30 hover:-translate-y-0.5 active:scale-[0.99] transition-all duration-200 shadow-sm relative"
        >
            <div className="flex flex-col justify-between h-full space-y-4">
                {/* Header: Icon, Titles, and Badge */}
                <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-4 min-w-0">
                        <div className="w-12 h-12 bg-black/[0.03] dark:bg-white/[0.06] rounded-2xl flex items-center justify-center font-bold text-xl text-accent shrink-0 shadow-sm border border-subtle">
                            {getItemIcon(item)}
                        </div>
                        <div className="min-w-0">
                            <h3 className="text-xl sm:text-2xl font-bold text-accent tracking-tight truncate">
                                {title}
                            </h3>
                            <p className="text-xs sm:text-sm text-dim font-medium truncate mt-0.5">
                                {subtitle}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                        {badgeLabel && (
                            <span className="hidden xs:inline-block text-[10px] font-bold tracking-wider uppercase font-mono bg-black/[0.03] dark:bg-white/[0.05] border border-subtle px-2.5 py-1 rounded-full text-dim">
                                {badgeLabel}
                            </span>
                        )}
                        <span className="text-[11px] font-mono font-semibold text-dim uppercase tracking-wider">
                            {yearOrDuration}
                        </span>
                    </div>
                </div>

                {/* Curated 1-2 sentence teaser summary */}
                <p className="text-sm sm:text-base text-dim leading-relaxed line-clamp-2">
                    {item.summary || item.description || item.overviewParagraph}
                </p>

                {/* Footer: Tech tags and Case Study link arrow */}
                <div className="flex items-center justify-between pt-2 border-t border-subtle/70">
                    <div className="flex flex-wrap gap-1.5">
                        {techList.map((t, idx) => (
                            <span
                                key={idx}
                                className="text-[10px] font-mono font-medium uppercase tracking-wider bg-black/[0.03] dark:bg-white/[0.05] border border-subtle px-2.5 py-0.5 rounded-full text-dim"
                            >
                                {t.trim()}
                            </span>
                        ))}
                    </div>

                    <div className="inline-flex items-center gap-1 text-xs font-semibold text-accent group-hover:text-blue-500 transition-colors shrink-0 ml-3">
                        <span>Case Study</span>
                        <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                </div>
            </div>
        </Link>
    );
};

const WorkPage = () => {
    const [filter, setFilter] = useState('all'); // 'all', 'experience', 'projects'

    const filterTabs = [
        { id: 'all', label: 'All Works', count: userData.work.length + userData.projects.length },
        { id: 'experience', label: 'Experience', count: userData.work.length },
        { id: 'projects', label: 'Products', count: userData.projects.length },
    ];

    const showExperience = filter === 'all' || filter === 'experience';
    const showProjects = filter === 'all' || filter === 'projects';

    return (
        <PageWrapper>
            <div className="space-y-12">

                {/* Page Title & Intro */}
                <header className="space-y-4 pt-2">
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-[-0.03em]">{userData.pages.work.title}</h1>
                    <p className="text-base sm:text-lg text-dim leading-relaxed max-w-xl">
                        {userData.pages.work.description}
                    </p>
                </header>

                {/* Apple-Style Segmented Control (Tabs) */}
                <div className="flex items-center gap-1.5 p-1 bg-black/[0.04] dark:bg-white/[0.06] rounded-full w-fit border border-subtle">
                    {filterTabs.map((tab) => {
                        const isSelected = filter === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setFilter(tab.id)}
                                className={`relative px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 active:scale-[0.96] flex items-center gap-1.5 ${
                                    isSelected
                                        ? 'text-accent font-bold'
                                        : 'text-dim hover:text-accent'
                                }`}
                            >
                                {isSelected && (
                                    <motion.div
                                        layoutId="workTabPill"
                                        className="absolute inset-0 bg-white dark:bg-[#1E1E22] rounded-full shadow-sm"
                                        transition={{
                                            type: 'spring',
                                            stiffness: 450,
                                            damping: 32,
                                        }}
                                    />
                                )}
                                <span className="relative z-10">{tab.label}</span>
                                <span className="relative z-10 text-[10px] opacity-60 font-mono">({tab.count})</span>
                            </button>
                        );
                    })}
                </div>

                {/* Section: Professional Experience */}
                {showExperience && (
                    <motion.section
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-4"
                    >
                        <div className="flex items-center gap-2 px-1">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                            <h2 className="text-xs font-bold text-dim uppercase tracking-[0.18em] font-mono">
                                {userData.pages.work.badges.experience}
                            </h2>
                        </div>

                        <div className="grid gap-4">
                            {userData.work.map((exp) => (
                                <WorkCard key={exp.id} item={exp} badgeLabel="Experience" />
                            ))}
                        </div>
                    </motion.section>
                )}

                {/* Section: Personal Products / Case Studies */}
                {showProjects && (
                    <motion.section
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-4 pb-4"
                    >
                        <div className="flex items-center gap-2 px-1">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            <h2 className="text-xs font-bold text-dim uppercase tracking-[0.18em] font-mono">
                                {userData.pages.work.badges.projects}
                            </h2>
                        </div>

                        <div className="grid gap-4">
                            {userData.projects.map((project) => (
                                <WorkCard key={project.id} item={project} badgeLabel={project.badge || "Product"} />
                            ))}
                        </div>
                    </motion.section>
                )}

                <Footer />

            </div>
        </PageWrapper>
    );
};

export default WorkPage;
