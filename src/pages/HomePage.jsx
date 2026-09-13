import { useState } from 'react';
import { userData } from '../data/user';
import { PageWrapper } from '../components/PageWrapper';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';
import { Copy, ChevronRight, ArrowUpRight, PlusCircle, CheckCircle2, FileText, Zap, ExternalLink } from 'lucide-react';

const HomePage = () => {
    const [emailCopied, setEmailCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(userData.email);
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
    };

    return (
        <PageWrapper>
            <div className="space-y-16">

                {/* Hero Section */}
                <section className="space-y-8 flex flex-col pt-2">

                    {/* Top Badges Row */}
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-dim rounded-full"></div>
                            <span className="text-xs sm:text-sm text-dim font-medium tracking-wide">{userData.role}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse-slow"></div>
                            <span className="text-[10px] uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold font-mono">
                                {userData.config.availability.badgeMain}
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 sm:gap-10">
                        {/* Text & Action Buttons */}
                        <div className="space-y-5 flex-1">
                            <h1 className="text-[2.75rem] sm:text-5xl md:text-[3.25rem] font-bold tracking-[-0.03em] leading-[1.08]">
                                {userData.pages.home.title.replace('{firstName}', userData.firstName)}
                            </h1>
                            <p
                                className="text-base sm:text-lg text-dim leading-relaxed max-w-lg"
                                dangerouslySetInnerHTML={{ __html: userData.pages.home.description.replace('{location}', userData.location) }}
                            />

                            <div className="flex flex-wrap items-center gap-3 pt-2">
                                <Link
                                    to="/contact"
                                    className="bg-[#0F172A] text-white dark:bg-white dark:text-[#0F172A] px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:opacity-90 active:scale-[0.96] transition-all shadow-sm"
                                >
                                    <PlusCircle size={16} strokeWidth={2.2} /> Hire Me
                                </Link>
                                <button
                                    onClick={handleCopyEmail}
                                    className="bg-transparent border border-subtle text-accent px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] active:scale-[0.96] transition-all"
                                    aria-label="Copy Email Address"
                                >
                                    {emailCopied ? <CheckCircle2 size={16} strokeWidth={2} className="text-emerald-500" /> : <Copy size={16} strokeWidth={2} />}
                                    <span>{emailCopied ? 'Copied!' : 'Copy Email'}</span>
                                </button>
                                <Link
                                    to="/about"
                                    className="bg-black/[0.03] dark:bg-white/[0.05] border border-subtle text-dim hover:text-accent px-4 py-2.5 rounded-full text-sm font-semibold flex items-center gap-1.5 active:scale-[0.96] transition-all"
                                >
                                    <FileText size={15} /> Resume & Bio
                                </Link>
                            </div>
                        </div>

                        {/* Avatar Portrait */}
                        <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full border border-subtle overflow-hidden shrink-0 shadow-lg p-2 bg-bgCard">
                            <img
                                src={userData.config.profileImage}
                                alt={`${userData.name} profile portrait`}
                                width="176"
                                height="176"
                                fetchPriority="high"
                                className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </div>
                </section>

                {/* Standout Impact Metrics */}
                <section className="space-y-4">
                    <div className="flex items-center gap-2 px-1">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        <h2 className="text-xs font-bold text-dim uppercase tracking-[0.18em] font-mono">
                            {userData.pages.home.badges.metrics}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {userData.metrics.map((metric, i) => (
                            <div
                                key={i}
                                className="bg-bgCard border border-subtle p-5 sm:p-6 rounded-[22px] flex flex-col justify-between hover:border-accent/25 hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
                            >
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-[11px] font-bold text-dim uppercase tracking-wider font-mono">{metric.label}</span>
                                    <Zap size={14} className="text-amber-500/80" />
                                </div>
                                <div>
                                    <p className="text-2xl sm:text-3xl font-extrabold text-accent tracking-[-0.02em]">{metric.value}</p>
                                    <p className="text-xs sm:text-sm text-dim mt-1.5 leading-snug">{metric.sublabel}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Work Experience Section */}
                <section className="space-y-5">
                    <div className="flex justify-between items-center px-1">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-dim rounded-full"></div>
                            <h2 className="text-xs font-bold text-dim uppercase tracking-[0.18em] font-mono">
                                {userData.pages.home.badges.experience}
                            </h2>
                        </div>
                        <Link
                            to="/work"
                            className="text-xs text-dim hover:text-accent font-medium transition-colors flex items-center gap-1 bg-black/[0.04] dark:bg-white/[0.06] px-3.5 py-1.5 rounded-full border border-subtle active:scale-[0.96]"
                        >
                            View All <ChevronRight size={14} />
                        </Link>
                    </div>

                    <div className="grid gap-3">
                        {userData.work.map((job, i) => (
                            <Link
                                key={i}
                                to={`/project/${job.id}`}
                                aria-label={`View ${job.company} case study`}
                                className="group bg-bgCard border border-subtle p-4 sm:p-5 rounded-[22px] flex items-center justify-between hover:border-accent/25 hover:-translate-y-0.5 transition-all duration-200 active:scale-[0.98] shadow-sm"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-black/[0.03] dark:bg-white/[0.06] rounded-2xl flex items-center justify-center font-bold text-lg text-accent shrink-0 shadow-sm border border-subtle">
                                        {job.company[0]}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h3 className="font-semibold text-accent text-base sm:text-lg">
                                                {job.company}
                                            </h3>
                                            {job.link && (
                                                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-blue-500 font-mono font-medium">
                                                    Live <ExternalLink size={10} />
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-xs sm:text-sm text-dim mt-0.5">{job.role}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-[11px] text-dim font-mono uppercase tracking-wider hidden sm:inline-block">
                                        {job.duration}
                                    </span>
                                    <div className="text-dim group-hover:text-accent group-hover:translate-x-0.5 transition-all pr-1">
                                        <ChevronRight size={18} />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Featured Projects Section */}
                <section className="space-y-5">
                    <div className="flex justify-between items-center px-1">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-dim rounded-full"></div>
                            <h2 className="text-xs font-bold text-dim uppercase tracking-[0.18em] font-mono">
                                {userData.pages.home.badges.projects}
                            </h2>
                        </div>
                        <Link
                            to="/work"
                            className="text-xs text-dim hover:text-accent font-medium transition-colors flex items-center gap-1 bg-black/[0.04] dark:bg-white/[0.06] px-3.5 py-1.5 rounded-full border border-subtle active:scale-[0.96]"
                        >
                            All Projects <ChevronRight size={14} />
                        </Link>
                    </div>

                    <div className="grid gap-3">
                        {userData.projects.map((project, i) => (
                            <Link
                                key={i}
                                to={`/project/${project.id}`}
                                aria-label={`View ${project.title} project details`}
                                className="group bg-bgCard border border-subtle p-4 sm:p-5 rounded-[22px] flex items-center justify-between hover:border-accent/25 hover:-translate-y-0.5 transition-all duration-200 active:scale-[0.98] shadow-sm"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-black/[0.03] dark:bg-white/[0.06] rounded-2xl flex items-center justify-center font-bold text-lg text-accent shrink-0 shadow-sm border border-subtle">
                                        {project.title[0]}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-accent text-base sm:text-lg">
                                            {project.title}
                                        </h3>
                                        <p className="text-xs text-dim line-clamp-1 max-w-[280px] sm:max-w-md mt-0.5">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 shrink-0">
                                    <span className="hidden sm:inline-block text-[10px] font-bold tracking-wider uppercase border border-subtle px-3 py-1 rounded-full text-dim font-mono">
                                        {project.badge || "Project"}
                                    </span>
                                    <div className="text-dim group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all pr-2">
                                        <ArrowUpRight size={18} />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Follow Me Strip & Footer */}
                <Footer />

            </div>
        </PageWrapper>
    );
};

export default HomePage;
