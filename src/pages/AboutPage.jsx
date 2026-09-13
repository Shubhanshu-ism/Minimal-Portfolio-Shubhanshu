import { userData } from '../data/user';
import { PageWrapper } from '../components/PageWrapper';
import { Footer } from '../components/Footer';
import { ArrowUpRight, GraduationCap, Trophy, Code2, Cpu, Server, Wrench, Sparkles, Terminal, Layout, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const categoryIcons = {
    backend: Server,
    tools: Wrench,
    ai_data: Sparkles,
    languages: Terminal,
    frontend: Layout,
    concepts: BookOpen,
};

const AboutPage = () => {
    return (
        <PageWrapper>
            <div className="space-y-16">

                {/* Intro Section */}
                <section className="space-y-8 flex flex-col pt-2">

                    {/* Top Badges Row */}
                    <div className="flex items-center gap-2 px-1">
                        <div className="w-1.5 h-1.5 bg-dim rounded-full"></div>
                        <span className="text-xs sm:text-sm text-dim font-medium tracking-wide">About Me</span>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-4xl sm:text-5xl font-bold tracking-[-0.03em] leading-[1.08]">
                            {userData.pages.about.title.replace('{firstName}', userData.firstName)}
                        </h1>
                        <p
                            className="text-base sm:text-lg text-dim leading-relaxed"
                            dangerouslySetInnerHTML={{
                                __html: userData.pages.about.description
                                    .replace('{name}', userData.name)
                                    .replace('{role}', userData.role)
                                    .replace('{location}', userData.location)
                            }}
                        />
                    </div>

                    {/* Portrait Image */}
                    <div className="w-full rounded-[24px] border border-subtle overflow-hidden shadow-lg bg-bgCard mt-2">
                        <img
                            src={userData.config.profileImage}
                            alt={`${userData.firstName} Portrait`}
                            loading="lazy"
                            decoding="async"
                            className="w-full aspect-[16/10] sm:aspect-[16/9] object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                </section>

                {/* Technical Skills Section */}
                <section className="space-y-6">
                    <div className="flex items-center gap-2.5 px-1">
                        <Cpu size={18} className="text-accent" />
                        <h2 className="text-xl font-bold text-accent tracking-tight">
                            {userData.pages.about.badges.skills}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.entries(userData.skills).map(([key, category]) => {
                            const IconComponent = categoryIcons[key] || Cpu;
                            return (
                                <div
                                    key={key}
                                    className="bg-bgCard border border-subtle p-5 sm:p-6 rounded-[22px] space-y-3.5 shadow-sm hover:border-accent/25 hover:-translate-y-0.5 transition-all duration-200"
                                >
                                    <div className="flex items-center gap-2">
                                        <IconComponent size={14} className="text-dim" />
                                        <h3 className="text-xs font-bold text-dim uppercase tracking-wider font-mono">
                                            {category.title}
                                        </h3>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {category.items.map((skill, idx) => (
                                            <span
                                                key={idx}
                                                className="text-xs font-medium bg-black/[0.03] dark:bg-white/[0.05] border border-subtle px-2.5 py-1 rounded-full text-accent transition-colors hover:border-accent/30"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Competitive Programming & Achievements */}
                <section className="space-y-6">
                    <div className="flex items-center gap-2.5 px-1">
                        <Trophy size={18} className="text-amber-500" />
                        <h2 className="text-xl font-bold text-accent tracking-tight">
                            {userData.pages.about.badges.coding}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                        {userData.stats.map((stat, i) => (
                            <a
                                key={i}
                                href={stat.url}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`${stat.platform} profile — ${stat.label} rating ${stat.rating}`}
                                className="bg-bgCard border border-subtle p-5 rounded-[22px] flex flex-col justify-between text-center group hover:border-accent/30 hover:-translate-y-0.5 transition-all duration-200 shadow-sm active:scale-[0.98]"
                            >
                                <div className="flex justify-between items-center w-full">
                                    <h3 className="text-xs font-bold text-dim uppercase tracking-widest font-mono">{stat.platform}</h3>
                                    <span className="text-[10px] font-bold font-mono bg-black/[0.04] dark:bg-white/[0.06] px-2 py-0.5 rounded-full text-accent border border-subtle">
                                        {stat.label}
                                    </span>
                                </div>

                                <div className="my-4 text-center">
                                    <p className="text-3xl sm:text-4xl font-extrabold text-accent tracking-tight">{stat.rating}</p>
                                    <p className="text-[10px] font-mono text-dim uppercase tracking-wider mt-0.5">Rating</p>
                                </div>

                                {stat.highlights && (
                                    <div className="space-y-1.5 w-full pt-3 border-t border-subtle/70">
                                        {stat.highlights.map((h, idx) => (
                                            <div key={idx} className="bg-black/[0.02] dark:bg-white/[0.03] border border-subtle/80 rounded-xl px-2.5 py-1.5 text-center">
                                                <p className="text-xs font-semibold text-accent font-mono">{h.rank}</p>
                                                <p className="text-[10px] text-dim font-mono">{h.contest}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <div className="flex items-center justify-center gap-1 text-[11px] font-semibold text-dim group-hover:text-accent transition-colors pt-3 border-t border-subtle/50 mt-3">
                                    <span>View Profile</span>
                                    <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                {/* Education & Academic Stats */}
                <section className="space-y-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2.5 px-1">
                            <GraduationCap size={18} className="text-accent" />
                            <h2 className="text-xl font-bold text-accent tracking-tight">
                                {userData.pages.about.badges.education}
                            </h2>
                        </div>
                        <div className="bg-bgCard border border-subtle p-6 sm:p-7 rounded-[24px] space-y-5 shadow-sm hover:border-accent/25 transition-all duration-200">
                            <div className="space-y-1.5">
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                    <h3 className="text-lg font-bold text-accent">{userData.education.institution}</h3>
                                    <span className="text-xs font-mono font-semibold text-dim bg-black/[0.04] dark:bg-white/[0.06] px-3 py-1 rounded-full border border-subtle">
                                        {userData.education.duration}
                                    </span>
                                </div>
                                <p className="text-dim text-sm">{userData.education.degree} &middot; {userData.education.location}</p>
                            </div>
                            <div className="pt-4 border-t border-subtle grid grid-cols-1 sm:grid-cols-2 gap-3 text-center">
                                <div className="space-y-1 p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-subtle">
                                    <p className="text-[10px] text-dim uppercase font-bold tracking-widest font-mono">JEE Advanced</p>
                                    <p className="text-xl font-extrabold text-accent">Top 0.7%</p>
                                    <p className="text-[11px] text-dim">Among JEE Main-qualified aspirants</p>
                                </div>
                                <div className="space-y-1 p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-subtle">
                                    <p className="text-[10px] text-dim uppercase font-bold tracking-widest font-mono">JEE Main</p>
                                    <p className="text-xl font-extrabold text-accent">99.0%ile</p>
                                    <p className="text-[11px] text-dim">All India Engineering Entrance</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* My Side Projects */}
                <section className="space-y-6">
                    <div className="flex items-center gap-2.5 px-1">
                        <Code2 size={18} className="text-accent" />
                        <h2 className="text-xl font-bold text-accent tracking-tight">{userData.pages.about.badges.projects}</h2>
                    </div>
                    <p className="text-base text-dim leading-relaxed">
                        {userData.pages.about.projectsDescription}
                    </p>

                    <div className="grid gap-3 pt-1">
                        {userData.projects.map((project, i) => (
                            <Link
                                key={i}
                                to={`/project/${project.id}`}
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
                                        <p className="text-xs text-dim mt-0.5 line-clamp-1">
                                            {project.tech}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="hidden sm:inline-block text-[10px] font-bold tracking-wider uppercase border border-subtle px-3 py-1 rounded-full text-dim font-mono">
                                        {project.badge}
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

export default AboutPage;
