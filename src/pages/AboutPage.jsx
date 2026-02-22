import { userData } from '../data/user';
import { PageWrapper } from '../components/PageWrapper';
import { Copy, ArrowUpRight, PlusCircle, X, Instagram, Linkedin, GitMerge, BookOpen, Award } from 'lucide-react';

const AboutPage = () => {
    return (
        <PageWrapper>
            <div className="space-y-16">

                {/* Intro Section */}
                <section className="space-y-8 flex flex-col pt-8">

                    {/* Top Badges Row */}
                    <div className="flex items-center gap-2 px-1">
                        <div className="w-1.5 h-1.5 bg-dim rounded-full"></div>
                        <span className="text-sm text-dim font-medium">About</span>
                    </div>

                    <div className="space-y-6">
                        <h1 className="text-[2.75rem] md:text-5xl font-semibold tracking-tight leading-[1.1]">
                            It's Me {userData.firstName}
                        </h1>
                        <p className="text-lg text-dim leading-relaxed">
                            I'm {userData.name}, a {userData.role.toLowerCase()} with over 3 years of
                            experience, currently residing in {userData.location}. I have a
                            deep passion for crafting purposeful products and scalable architectures.
                            My main goal is to bridge the divide between complex technical requirements and
                            meaningful, seamless experiences.
                        </p>
                    </div>

                    {/* Image Placeholder */}
                    <div className="w-full rounded-[24px] border border-subtle overflow-hidden shadow-xl bg-bgCard mt-4">
                        <img
                            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000"
                            alt="Shubhanshu Portrait"
                            className="w-full aspect-[4/3] sm:aspect-video object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                </section>

                {/* Education & Academic Stats */}
                <section className="space-y-6">
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold flex items-center gap-2 text-accent">
                            Education
                        </h2>
                        <div className="bg-bgCard border border-subtle p-6 rounded-[24px] space-y-4 shadow-sm hover:border-accent/20 transition-all">
                            <div>
                                <h3 className="text-lg font-bold text-accent">{userData.education.institution}</h3>
                                <p className="text-dim text-sm">{userData.education.degree}</p>
                                <p className="text-xs text-dim font-mono mt-1">{userData.education.duration}</p>
                            </div>
                            <div className="pt-4 border-t border-subtle flex gap-4">
                                <div className="space-y-1">
                                    <p className="text-[10px] text-dim uppercase font-bold tracking-widest">JEE Advanced</p>
                                    <p className="text-sm font-semibold text-accent">Top 0.7%</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] text-dim uppercase font-bold tracking-widest">JEE Mains</p>
                                    <p className="text-sm font-semibold text-accent">99%ile</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Competitive Programming Grid */}
                <section className="space-y-6">
                    <h2 className="text-xl font-bold flex items-center gap-2 text-accent">
                        Coding Prowess
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {userData.stats.map((stat, i) => (
                            <div key={i} className="bg-bgCard border border-subtle p-5 rounded-[20px] flex flex-col justify-between group hover:border-accent/20 transition-all shadow-sm">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-sm font-bold text-dim uppercase tracking-widest">{stat.platform}</h3>
                                    <span className="text-[10px] bg-black/5 dark:bg-white/5 px-2 py-1 rounded-full text-accent border border-subtle">{stat.label}</span>
                                </div>
                                <div className="mt-4">
                                    <p className="text-2xl font-bold text-accent tracking-tighter">{stat.rating}</p>
                                    <p className="text-xs text-dim mt-1">{stat.rank}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* My Side Projects */}
                <section className="space-y-6">
                    <h2 className="text-xl font-bold text-accent">My Side Projects</h2>
                    <p className="text-[17px] text-dim leading-relaxed">
                        I did passion side projects in the weekend, please take a look you will love it (i hope).
                    </p>

                    <div className="grid gap-3 pt-2">
                        {userData.projects.map((project, i) => (
                            <a
                                key={i}
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                className="group bg-bgCard border border-subtle p-4 md:p-5 rounded-[20px] flex items-center justify-between hover:border-accent/20 transition-all"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white dark:bg-white/10 rounded-full flex items-center justify-center font-bold text-xl text-black dark:text-white shrink-0 shadow-md border border-subtle">
                                        {project.title[0]}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-accent text-lg">
                                            {project.title}
                                        </h3>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="hidden sm:inline-block text-[10px] font-bold tracking-widest uppercase border border-subtle px-3 py-1 rounded-full text-dim">
                                        React App
                                    </span>
                                    <div className="text-dim group-hover:text-accent transition-colors pr-2">
                                        <ArrowUpRight size={18} />
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                {/* Let's Work Together Footer Block */}
                <section className="mt-20 pt-16 flex flex-col items-center text-center space-y-6 pb-8">
                    <div className="space-y-3">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-accent">Let's work together.</h2>
                        <p className="text-dim">Creating excellent user experiences and high performance web apps</p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                        <button className="bg-[#18181B] text-white dark:bg-white/10 dark:text-white border border-transparent dark:border-white/10 px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:opacity-90 transition-all">
                            <PlusCircle size={16} /> Hire Me
                        </button>
                        <button className="bg-transparent border border-subtle text-accent px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-black/5 dark:hover:bg-white/5 transition-all">
                            <Copy size={16} /> Copy Email
                        </button>
                    </div>
                </section>

                {/* Follow Me Strip */}
                <section className="bg-bgCard border border-subtle rounded-[24px] p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-dim rounded-full"></div>
                        <span className="text-sm font-medium text-accent">Follow Me</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <a href={userData.socials.twitter} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-subtle flex items-center justify-center text-dim hover:text-accent hover:bg-black/5 dark:hover:bg-white/5 transition-all">
                            <X size={16} />
                        </a>
                        <a href={userData.socials.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-subtle flex items-center justify-center text-dim hover:text-accent hover:bg-black/5 dark:hover:bg-white/5 transition-all">
                            <Instagram size={16} />
                        </a>
                        <a href={userData.socials.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-subtle flex items-center justify-center text-dim hover:text-accent hover:bg-black/5 dark:hover:bg-white/5 transition-all">
                            <GitMerge size={16} />
                        </a>
                        <a href={userData.socials.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-subtle flex items-center justify-center text-dim hover:text-accent hover:bg-black/5 dark:hover:bg-white/5 transition-all">
                            <Linkedin size={16} />
                        </a>
                    </div>
                </section>

                {/* Final Footer Text */}
                <footer className="pt-8 pb-12 flex flex-col sm:flex-row items-center justify-between text-xs text-dim text-center sm:text-left border-t border-subtle gap-4">
                    <div className="space-y-1">
                        <p>&copy; 2026 {userData.name} &mdash; Portfolio Template</p>
                        <p>by <span className="underline underline-offset-2">Shubhanshu</span> // <span className="underline underline-offset-2">React Vite</span> // <span className="underline underline-offset-2">Tailwind</span></p>
                    </div>
                </footer>

            </div>
        </PageWrapper>
    );
};

export default AboutPage;
