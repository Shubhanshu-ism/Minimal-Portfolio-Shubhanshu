import { userData } from '../data/user';
import { PageWrapper } from '../components/PageWrapper';
import { Github, Linkedin, Twitter, Award, BookOpen, User } from 'lucide-react';

const AboutPage = () => {
    return (
        <PageWrapper>
            <div className="space-y-16">

                {/* Intro Section */}
                <section className="space-y-8">
                    <div className="flex items-center gap-2 bg-white/5 border border-subtle w-fit px-3 py-1 rounded-full">
                        <User size={12} className="text-gray-500" />
                        <span className="text-[10px] uppercase tracking-[0.2em] text-dim font-bold font-mono">
                            About
                        </span>
                    </div>

                    <div className="space-y-6">
                        <h1 className="text-5xl font-semibold tracking-tight leading-[1.1]">
                            It's Me {userData.firstName}
                        </h1>
                        <p className="text-lg text-dim leading-relaxed">
                            I am a Full Stack Engineer at <span className="text-white">GoPaisa</span> and an IIT (ISM) Dhanbad graduate.
                            My journey is rooted in a deep analytical approach, having ranked in the
                            <span className="text-white font-medium"> top 0.7% of over a million aspirants</span> in JEE Advanced.
                        </p>
                    </div>

                    {/* Grayscale Profile Image */}
                    <div className="aspect-[16/10] w-full rounded-3xl border border-subtle overflow-hidden bg-[#212121] relative group shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000"
                            alt="Workspace"
                            className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                        />
                    </div>
                </section>

                {/* Education & Academic Stats */}
                <section className="space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold flex items-center gap-2">
                            <BookOpen size={20} className="text-blue-400" /> Education
                        </h2>
                        <div className="bg-bgCard border border-subtle p-6 rounded-2xl space-y-4">
                            <div>
                                <h3 className="text-lg font-bold">{userData.education.institution}</h3>
                                <p className="text-dim text-sm">{userData.education.degree}</p>
                                <p className="text-xs text-gray-600 font-mono mt-1">{userData.education.duration}</p>
                            </div>
                            <div className="pt-4 border-t border-white/5 flex gap-4">
                                <div className="space-y-1">
                                    <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">JEE Advanced</p>
                                    <p className="text-sm font-semibold text-white">Top 0.7%</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">JEE Mains</p>
                                    <p className="text-sm font-semibold text-white">99%ile</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Competitive Programming Grid */}
                <section className="space-y-6">
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                        <Award size={20} className="text-orange-400" /> Coding Prowess
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {userData.stats.map((stat, i) => (
                            <div key={i} className="bg-bgCard border border-subtle p-5 rounded-2xl flex flex-col justify-between group hover:border-white/20 transition-all">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest">{stat.platform}</h3>
                                    <span className="text-[10px] bg-white/5 px-2 py-1 rounded text-white border border-white/5">{stat.label}</span>
                                </div>
                                <div className="mt-4">
                                    <p className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors tracking-tighter">{stat.rating}</p>
                                    <p className="text-xs text-gray-600 mt-1">{stat.rank}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </PageWrapper>
    );
};

export default AboutPage;
