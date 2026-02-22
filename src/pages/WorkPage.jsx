import { userData } from '../data/user';
import { PageWrapper } from '../components/PageWrapper';
import { ExternalLink, ArrowUpRight, Terminal, Zap, Code } from 'lucide-react';

const WorkPage = () => {
    return (
        <PageWrapper>
            <div className="space-y-20">

                {/* Page Title */}
                <header className="space-y-4">
                    <h1 className="text-5xl font-semibold tracking-tight">Selected Works</h1>
                    <p className="text-lg text-dim leading-relaxed max-w-[480px]">
                        A deep dive into my professional journey and the digital products I've engineered.
                    </p>
                </header>

                {/* Section: Professional Experience */}
                <section className="space-y-8">
                    <div className="flex items-center gap-2 px-1">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        <h2 className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em] font-mono">Professional Experience</h2>
                    </div>

                    <div className="space-y-4">
                        {userData.work.map((exp, i) => (
                            <div key={i} className="bg-bgCard border border-subtle p-8 rounded-2xl space-y-4 group transition-all hover:border-white/10">
                                <div className="flex justify-between items-start">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center">
                                            {exp.company === "GoPaisa" ? <Terminal size={20} className="text-blue-400" /> : <Zap size={20} className="text-orange-400" />}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                                            <p className="text-sm text-dim font-medium">{exp.role}</p>
                                        </div>
                                    </div>
                                    <span className="text-[10px] font-bold text-gray-600 uppercase font-mono tracking-wider">{exp.duration}</span>
                                </div>

                                <ul className="space-y-2 pt-2">
                                    {exp.points.map((point, idx) => (
                                        <li key={idx} className="text-sm text-dim leading-relaxed flex gap-2">
                                            <span className="text-accent/20">•</span> {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section: Personal Products */}
                <section className="space-y-8 pb-10">
                    <div className="flex items-center gap-2 px-1">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <h2 className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em] font-mono">Personal Products</h2>
                    </div>

                    <div className="grid gap-6">
                        {userData.projects.map((project, i) => (
                            <a
                                key={i}
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                className="group bg-bgCard border border-subtle p-8 rounded-[32px] flex flex-col justify-between hover:border-white/20 transition-all relative overflow-hidden"
                            >
                                <div className="flex justify-between items-start relative z-10">
                                    <div className="space-y-3">
                                        <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:text-black transition-all">
                                            <Code size={18} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                                            <p className="text-sm text-dim mt-1 max-w-[400px]">{project.description}</p>
                                        </div>
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {project.tech.split(',').map((t, idx) => (
                                                <span key={idx} className="text-[9px] px-2 py-1 bg-white/5 border border-white/5 rounded-md text-gray-400 font-bold uppercase tracking-wider font-mono leading-none">
                                                    {t.trim()}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <ArrowUpRight size={24} className="text-gray-700 group-hover:text-white transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </div>

                                {/* Subtle Radial Glow */}
                                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-accent/5 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                        ))}
                    </div>
                </section>

            </div>
        </PageWrapper>
    );
};

export default WorkPage;
