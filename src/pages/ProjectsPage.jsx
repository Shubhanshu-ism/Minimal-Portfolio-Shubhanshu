import { useState } from 'react';
import { userData } from '../data/user';
import { PageWrapper } from '../components/PageWrapper';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Sparkles, Cpu, Layers, GitBranch, ArrowRight } from 'lucide-react';

const getItemIcon = (item) => {
    if (item.id === 'gitlab-coding-agent') return <GitBranch size={22} className="text-[#fc6d26]" />;
    if (item.id === 'pm2-auto-recovery-alerts') return <Cpu size={22} className="text-amber-500" />;
    if (item.id === 'ai-compare') return <Sparkles size={22} className="text-cyan-500" />;
    if (item.id === 'megablog') return <Layers size={22} className="text-rose-500" />;
    return <GitBranch size={22} className="text-accent" />;
};

const ProjectCard = ({ project }) => {
    const title = project.title;
    const techList = project.tech ? project.tech.split(',').slice(0, 5) : [];

    return (
        <div className="group bg-bgCard border border-subtle p-6 sm:p-8 rounded-[28px] hover:border-accent/30 transition-all duration-300 shadow-sm relative flex flex-col justify-between space-y-6">
            <div className="space-y-5">
                {/* Header: Icon, Titles & Badges */}
                <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4 min-w-0">
                        <div className="w-13 h-13 bg-black/[0.03] dark:bg-white/[0.06] rounded-2xl flex items-center justify-center font-bold text-xl text-accent shrink-0 shadow-sm border border-subtle">
                            {getItemIcon(project)}
                        </div>
                        <div className="min-w-0">
                            <h3 className="text-xl sm:text-2xl font-bold text-accent tracking-tight truncate">
                                {title}
                            </h3>
                            <p className="text-xs sm:text-sm text-dim font-mono mt-0.5">
                                {project.projectType || project.badge}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[10px] font-mono font-bold tracking-wider uppercase bg-blue-500/10 text-blue-500 dark:text-blue-400 border border-blue-500/20 px-2.5 py-1 rounded-full">
                            {project.badge || "Project"}
                        </span>
                        <span className="text-[11px] font-mono font-semibold text-dim uppercase">
                            {project.year}
                        </span>
                    </div>
                </div>

                {/* Summary / Description */}
                <p className="text-sm sm:text-base text-dim leading-relaxed">
                    {project.summary || project.description || project.overviewParagraph}
                </p>

                {/* Case Metrics Row if present */}
                {project.caseMetrics && project.caseMetrics.length > 0 && (
                    <div className="grid grid-cols-3 gap-2.5 pt-1">
                        {project.caseMetrics.map((m, idx) => (
                            <div
                                key={idx}
                                className="bg-black/[0.02] dark:bg-white/[0.03] border border-subtle p-3 rounded-[16px] text-center"
                            >
                                <p className="text-base sm:text-lg font-bold text-accent tracking-tight">{m.value}</p>
                                <p className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-dim mt-0.5 truncate">{m.label}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Footer: Tech Pills & Action Buttons */}
            <div className="space-y-4 pt-4 border-t border-subtle/70">
                {/* Tech Pills */}
                {techList.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                        {techList.map((t, idx) => (
                            <span
                                key={idx}
                                className="text-[10px] font-mono font-medium uppercase tracking-wider bg-black/[0.03] dark:bg-white/[0.05] border border-subtle px-2.5 py-1 rounded-full text-dim"
                            >
                                {t.trim()}
                            </span>
                        ))}
                    </div>
                )}

                {/* Actions */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                    <Link
                        to={`/project/${project.id}`}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-accent hover:text-blue-500 transition-colors group-hover:translate-x-0.5 duration-200"
                    >
                        <span>View System Architecture &amp; Case Study</span>
                        <ArrowUpRight size={15} />
                    </Link>

                    <div className="flex items-center gap-2">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="p-2 rounded-full border border-subtle text-dim hover:text-accent hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-all"
                                title="View GitHub Repository"
                            >
                                <Github size={16} />
                            </a>
                        )}
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1 text-xs font-mono font-medium text-dim hover:text-accent p-2 rounded-full border border-subtle hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-all"
                                title="Live Deployment"
                            >
                                <ArrowUpRight size={16} />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProjectsPage = () => {
    const [filter, setFilter] = useState('all');

    const filterTabs = [
        { id: 'all', label: 'All Projects', count: userData.projects.length },
        { id: 'ai', label: 'AI & Agents', count: userData.projects.filter(p => p.id === 'gitlab-coding-agent' || p.id === 'ai-compare').length },
        { id: 'infra', label: 'Infra & DevOps', count: userData.projects.filter(p => p.id === 'pm2-auto-recovery-alerts').length },
        { id: 'web', label: 'Full Stack', count: userData.projects.filter(p => p.id === 'megablog').length },
    ];

    const filteredProjects = userData.projects.filter(p => {
        if (filter === 'ai') return p.id === 'gitlab-coding-agent' || p.id === 'ai-compare';
        if (filter === 'infra') return p.id === 'pm2-auto-recovery-alerts';
        if (filter === 'web') return p.id === 'megablog';
        return true;
    });

    return (
        <PageWrapper>
            <div className="space-y-12">

                {/* Page Title & Intro */}
                <header className="space-y-4 pt-2">
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 dark:text-blue-400 border border-blue-500/20">
                            {userData.pages.projects?.badges?.main || "Projects & Products"}
                        </span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-[-0.03em] text-accent">
                        {userData.pages.projects?.title || "Engineering Projects"}
                    </h1>
                    <p className="text-base sm:text-lg text-dim leading-relaxed max-w-2xl">
                        {userData.pages.projects?.description || "Autonomous AI agent harnesses, self-healing infrastructure daemons, and high-performance applications built for scale and developer experience."}
                    </p>
                </header>

                {/* Filter Pills */}
                <div className="flex flex-wrap items-center gap-1.5 p-1 bg-black/[0.04] dark:bg-white/[0.06] rounded-full w-fit border border-subtle">
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
                                        layoutId="projectFilterPill"
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

                {/* Projects List */}
                <section className="grid gap-6">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </section>

                {/* Cross Link to Work Experience */}
                <div className="p-6 sm:p-7 rounded-[24px] bg-black/[0.02] dark:bg-white/[0.03] border border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                        <h4 className="font-bold text-accent text-base sm:text-lg">Looking for Production Experience?</h4>
                        <p className="text-xs sm:text-sm text-dim mt-0.5">Explore GoPaisa, PolicyBazaar campaigns, TableSprint, and IncNut Digital case studies.</p>
                    </div>
                    <Link
                        to="/work"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-accent text-bgMain hover:opacity-90 transition-all shrink-0"
                    >
                        <span>View Work Experience</span>
                        <ArrowRight size={14} />
                    </Link>
                </div>

                <Footer />

            </div>
        </PageWrapper>
    );
};

export default ProjectsPage;
