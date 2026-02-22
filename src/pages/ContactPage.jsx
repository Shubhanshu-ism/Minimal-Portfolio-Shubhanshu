import { useState } from 'react';
import { userData } from '../data/user';
import { PageWrapper } from '../components/PageWrapper';
import { Github, Linkedin, Twitter, Instagram, Send, CheckCircle2 } from 'lucide-react';

const SocialIcon = ({ href, icon }) => (
    <a href={href} target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center bg-white/5 border border-subtle rounded-full text-gray-400 hover:bg-white hover:text-black hover:border-white transition-all duration-300">
        {icon}
    </a>
);

const ContactPage = () => {
    const [status, setStatus] = useState('default'); // default, sending, success

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        // Simulate API call
        setTimeout(() => setStatus('success'), 1500);
    };

    return (
        <PageWrapper>
            <div className="space-y-12">

                {/* Header Section */}
                <section className="space-y-6 text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-2 bg-white/5 border border-subtle px-3 py-1 rounded-full">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse-slow"></div>
                            <span className="text-[10px] uppercase tracking-[0.2em] text-dim font-bold font-mono">Hire Me</span>
                        </div>
                        <p className="text-[10px] uppercase text-green-500 font-bold tracking-widest bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
                            Currently Available
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h1 className="text-5xl font-semibold tracking-tight leading-[1.1]">Engineering Inquiry</h1>
                        <p className="text-lg text-dim leading-relaxed">
                            Have a complex logic problem or an AI agent you need to build? Reach out and let's build the future together.
                        </p>
                    </div>
                </section>

                {/* Form Card */}
                <section className="bg-bgCard border border-subtle p-8 rounded-[32px] shadow-2xl relative overflow-hidden">
                    <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                                type="text" required placeholder="Name"
                                className="w-full bg-bgInput border border-subtle rounded-2xl p-4 text-sm focus:outline-none focus:border-white/20 transition-all placeholder:text-gray-700 text-white"
                            />
                            <input
                                type="email" required placeholder="Email Address"
                                className="w-full bg-bgInput border border-subtle rounded-2xl p-4 text-sm focus:outline-none focus:border-white/20 transition-all placeholder:text-gray-700 text-white"
                            />
                        </div>
                        <textarea
                            rows="5" required placeholder="Project description..."
                            className="w-full bg-bgInput border border-subtle rounded-2xl p-4 text-sm focus:outline-none focus:border-white/20 transition-all placeholder:text-gray-700 text-white resize-none"
                        ></textarea>

                        <button
                            type="submit"
                            disabled={status === 'success'}
                            className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98] ${status === 'success' ? 'bg-green-600 text-white' : 'bg-white text-black hover:bg-gray-200'
                                }`}
                        >
                            {status === 'default' && <><Send size={18} /> Submit Inquiry</>}
                            {status === 'sending' && <span className="animate-spin h-5 w-5 border-2 border-black border-t-transparent rounded-full" />}
                            {status === 'success' && <><CheckCircle2 size={18} /> Message Sent Successfully</>}
                        </button>
                    </form>
                </section>

                {/* Social Card */}
                <section className="bg-bgCard border border-subtle p-8 rounded-[32px] flex flex-col sm:flex-row items-center justify-between gap-8">
                    <div className="space-y-1 text-center sm:text-left">
                        <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest font-mono">Follow Me</h2>
                        <p className="text-xs text-gray-600 italic">@Shubhanshu-ism everywhere</p>
                    </div>
                    <div className="flex gap-3">
                        <SocialIcon href={userData.socials.twitter} icon={<Twitter size={20} />} />
                        <SocialIcon href={userData.socials.github} icon={<Github size={20} />} />
                        <SocialIcon href={userData.socials.linkedin} icon={<Linkedin size={20} />} />
                        <SocialIcon href={userData.socials.instagram} icon={<Instagram size={20} />} />
                    </div>
                </section>

                <footer className="pt-10 text-center text-[10px] text-gray-700 uppercase tracking-[0.4em] font-bold">
                    © 2026 {userData.name} \u2014 IIT ISM Dhanbad
                </footer>

            </div>
        </PageWrapper>
    );
};

export default ContactPage;
