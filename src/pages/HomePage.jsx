import { useState } from 'react';
import { userData } from '../data/user';
import { PageWrapper } from '../components/PageWrapper';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';
import { ExternalLink, Copy, FileText, ChevronRight, ArrowUpRight, PlusCircle, CheckCircle2 } from 'lucide-react';

const HomePage = () => {
    const [emailCopied, setEmailCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('shubhanshujain2233@gmail.com');
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
    };

    return (
        <PageWrapper>
            <div className="space-y-16">

                {/* Hero Section */}
                <section className="space-y-8 flex flex-col pt-8">

                    {/* Top Badges Row */}
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-dim rounded-full"></div>
                            <span className="text-sm text-dim font-medium">{userData.role}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-3 py-1 rounded-full">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse-slow"></div>
                            <span className="text-[10px] uppercase tracking-widest text-green-500 font-bold">
                                Available for Work
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
                        {/* Text & Buttons */}
                        <div className="space-y-6 flex-1">
                            <h1 className="text-[2.75rem] md:text-5xl font-semibold tracking-tight leading-[1.1]">
                                I'm {userData.firstName}
                            </h1>
                            <p className="text-lg text-dim leading-relaxed max-w-[400px]">
                                Full Stack Engineer from {userData.location}.
                                Currently building at <span>GoPaisa</span>.
                            </p>

                            <div className="flex flex-wrap gap-3 pt-2">
                                <Link to="/contact" className="bg-[#18181B] text-white dark:bg-[#1C1C1E] dark:text-white border border-transparent dark:border-white/10 px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:opacity-90 transition-all shadow-sm">
                                    <PlusCircle size={16} strokeWidth={2} /> Hire Me
                                </Link>
                                <button
                                    onClick={handleCopyEmail}
                                    className="bg-transparent border border-subtle text-accent px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-black/5 dark:hover:bg-white/5 transition-all"
                                >
                                    {emailCopied ? <CheckCircle2 size={16} strokeWidth={2} className="text-green-500" /> : <Copy size={16} strokeWidth={2} />}
                                    {emailCopied ? 'Copied!' : 'Copy Email'}
                                </button>
                            </div>
                        </div>

                        {/* Avatar Placeholder */}
                        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border border-subtle overflow-hidden shrink-0 shadow-xl p-2 bg-bgCard">
                            <img
                                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000"
                                alt="Avatar"
                                className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </div>
                </section>

                {/* Work Experience Section (Mirroring Projects in Screenshot) */}
                <section className="space-y-6">
                    <div className="flex justify-between items-center px-1">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-dim rounded-full"></div>
                            <h2 className="text-sm font-medium text-dim">
                                Experience
                            </h2>
                        </div>
                        <button className="text-xs text-dim hover:text-accent font-medium transition-colors flex items-center gap-1 bg-black/5 dark:bg-white/5 px-3 py-1.5 rounded-full border border-subtle">
                            View All <ChevronRight size={14} />
                        </button>
                    </div>

                    <div className="grid gap-3">
                        {userData.work.map((job, i) => (
                            <Link
                                key={i}
                                to={`/project/${job.id}`}
                                className="group bg-bgCard border border-subtle p-4 md:p-5 rounded-[20px] flex items-center justify-between hover:border-accent/20 transition-all cursor-pointer"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white dark:bg-white/10 rounded-full flex items-center justify-center font-bold text-xl text-accent shrink-0 shadow-sm border border-subtle">
                                        {job.company[0]}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-accent text-lg">
                                            {job.company}
                                        </h3>
                                        <p className="text-sm text-dim mt-0.5">{job.role}</p>
                                    </div>
                                </div>
                                <div className="text-dim group-hover:text-accent transition-colors pr-2">
                                    <ChevronRight size={18} />
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Featured Projects Section (Mirroring Products in Screenshot) */}
                <section className="space-y-6">
                    <div className="flex items-center gap-2 px-1">
                        <div className="w-1.5 h-1.5 bg-dim rounded-full"></div>
                        <h2 className="text-sm font-medium text-dim">
                            Products
                        </h2>
                    </div>

                    <div className="grid gap-3">
                        {userData.projects.map((project, i) => (
                            <Link
                                key={i}
                                to={`/project/${project.id}`}
                                className="group bg-bgCard border border-subtle p-4 md:p-5 rounded-[20px] flex items-center justify-between hover:border-accent/20 transition-all"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white dark:bg-white/10 rounded-full flex items-center justify-center font-bold text-xl text-accent shrink-0 shadow-sm border border-subtle">
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
