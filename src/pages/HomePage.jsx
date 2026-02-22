import { userData } from '../data/user';
import { PageWrapper } from '../components/PageWrapper';
import { ExternalLink, Copy, FileText } from 'lucide-react';

const HomePage = () => {
    return (
        <PageWrapper>
            <div className="space-y-16">

                {/* Hero Section */}
                <section className="space-y-8">
                    <div className="flex items-center gap-2 bg-white/5 border border-subtle w-fit px-3 py-1 rounded-full">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse-slow"></div>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-dim font-bold font-mono">
                            {userData.role}
                        </span>
                    </div>

                    <div className="space-y-6">
                        <h1 className="text-5xl font-semibold tracking-tight leading-[1.1]">
                            It's Me {userData.firstName}
                        </h1>
                        <p className="text-lg text-dim leading-relaxed max-w-[480px]">
                            Full Stack Engineer specializing in high-performance API portals and LLM agents.
                            Currently building the future of commerce tools at <span className="text-white">GoPaisa</span>.
                        </p>

                        <div className="flex flex-wrap gap-3 pt-2">
                            <button className="bg-accent text-bgMain px-6 py-3 rounded-xl text-sm font-bold hover:opacity-90 transition-all flex items-center gap-2">
                                <FileText size={18} /> Resume
                            </button>
                            <button className="bg-white/5 border border-subtle text-white px-6 py-3 rounded-xl text-sm font-medium flex items-center gap-2 hover:bg-white/10 transition-all">
                                <Copy size={18} /> Copy Email
                            </button>
                        </div>
                    </div>
                </section>

                {/* Featured Projects Section */}
                <section className="space-y-6">
                    <div className="flex justify-between items-center px-1">
                        <h2 className="text-[11px] font-bold text-gray-600 uppercase tracking-[0.2em] font-mono">
                            Featured Projects
                        </h2>
                        <button className="text-xs text-gray-500 hover:text-white transition-colors">
                            View All
                        </button>
                    </div>

                    <div className="grid gap-3">
                        {userData.projects.slice(0, 2).map((project, i) => (
                            <a
                                key={i}
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                className="group bg-bgCard border border-subtle p-5 rounded-2xl flex items-center justify-between hover:border-white/10 transition-all"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white/5 rounded-xl border border-subtle flex items-center justify-center font-bold text-xl text-white group-hover:scale-110 transition-transform">
                                        {project.title[0]}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-xs text-gray-500 mt-0.5">{project.tech}</p>
                                    </div>
                                </div>
                                <div className="text-gray-700 group-hover:text-white transition-colors pr-1">
                                    <ExternalLink size={18} />
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

            </div>
        </PageWrapper>
    );
};

export default HomePage;
