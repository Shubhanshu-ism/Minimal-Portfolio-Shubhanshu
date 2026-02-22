import { userData } from '../data/user';
import { PageWrapper } from '../components/PageWrapper';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { ExternalLink, ArrowUpRight, Terminal, Zap, Code } from 'lucide-react';

const WorkPage = () => {
    return (
        <PageWrapper>
            <div className="space-y-20">

                {/* Page Title */}
                <header className="space-y-4">
                    <h1 className="text-5xl font-semibold tracking-tight">{userData.pages.work.title}</h1>
                    <p className="text-lg text-dim leading-relaxed max-w-[480px]">
                        {userData.pages.work.description}
                    </p>
                </header>

                {/* Section: Professional Experience */}
                <section className="space-y-8">
                    <div className="flex items-center gap-4 px-1">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        <h2 className="text-[11px] font-bold text-dim uppercase tracking-[0.2em] font-mono">{userData.pages.work.badges.experience}</h2>
                    </div>

                    <div className="space-y-4">
                        {userData.work.map((exp, i) => (
                            <Link to={`/project/${exp.id}`} key={i} className="block bg-bgCard border border-subtle p-8 rounded-2xl group transition-all hover:border-accent/20">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-white dark:bg-white/10 rounded-full flex items-center justify-center font-bold text-xl text-accent shrink-0 shadow-sm border border-subtle">
                                            {exp.company === "GoPaisa" ? <Terminal size={20} className="text-[#3b82f6]" /> : <Zap size={20} className="text-[#f97316]" />}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-accent">{exp.company}</h3>
                                            <p className="text-sm text-dim font-medium">{exp.role}</p>
                                        </div>
                                    </div>
                                    <span className="text-[10px] font-bold text-dim uppercase tracking-widest">{exp.duration}</span>
                                </div>

                                <ul className="space-y-3 mt-4">
                                    {exp.points.map((point, idx) => (
                                        <li key={idx} className="text-[14px] text-dim leading-relaxed flex items-start gap-4">
                                            <span className="text-dim/40 text-[10px] mt-1.5">●</span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Section: Personal Products */}
                <section className="space-y-8 pb-10">
                    <div className="flex items-center gap-4 px-1">
                        <div className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full"></div>
                        <h2 className="text-[11px] font-bold text-dim uppercase tracking-[0.2em] font-mono">{userData.pages.work.badges.projects}</h2>
                    </div>

                    <div className="grid gap-6">
                        {userData.projects.map((project, i) => (
                            <Link
                                key={i}
                                to={`/project/${project.id}`}
                                className="group bg-bgCard border border-subtle p-8 rounded-[32px] flex flex-col justify-between hover:border-accent/20 transition-all font-sans relative overflow-hidden"
                            >
                                <div className="flex justify-between items-start relative z-10">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-white dark:bg-white/10 rounded-full flex items-center justify-center font-bold text-xl text-accent shrink-0 shadow-sm border border-subtle">
                                                {project.title[0]}
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-accent">{project.title}</h3>
                                            </div>
                                        </div>

                                        <p className="text-[15px] md:text-[16px] text-dim font-medium leading-relaxed max-w-xl">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {project.tech.split(',').map((t, idx) => (
                                                <span key={idx} className="text-[10px] font-bold uppercase tracking-widest bg-black/5 dark:bg-white/5 border border-subtle px-3 py-1 rounded-full text-dim">
                                                    {t.trim()}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <ArrowUpRight size={22} strokeWidth={2} className="text-dim group-hover:text-accent transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </div>

                                {/* Subtle Radial Glow */}
                                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-accent/5 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                        ))}
                    </div>
                </section>

                <Footer />

            </div>
        </PageWrapper>
    );
};

export default WorkPage;
