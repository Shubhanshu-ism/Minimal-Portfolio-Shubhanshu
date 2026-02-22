import { useState } from 'react';
import { userData } from '../data/user';
import { Link } from 'react-router-dom';
import { Twitter, Github, Linkedin, Instagram, PlusCircle, Copy, CheckCircle2 } from 'lucide-react';

const SocialIcon = ({ href, icon }) => (
    <a href={href} target="_blank" rel="noreferrer" className="w-[50px] h-[50px] rounded-full border border-subtle flex items-center justify-center text-dim hover:text-accent hover:bg-black/5 dark:hover:bg-white/5 transition-all shadow-sm">
        {icon}
    </a>
);

export const Footer = ({ showWorkTogether = true }) => {
    const [emailCopied, setEmailCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('shubhanshujain2233@gmail.com');
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
    };

    return (
        <div className="pt-10 pb-12 space-y-12 sm:space-y-16">
            {showWorkTogether && (
                <section className="flex flex-col items-center text-center space-y-6">
                    <div className="space-y-3">
                        <h2 className="text-4xl md:text-[2.75rem] font-bold tracking-tight text-accent font-sans">Let’s work together.</h2>
                        <p className="text-[17px] text-dim">Creating user experience and visual appealing design</p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
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
                </section>
            )}

            <section className="bg-bgCard border border-subtle p-8 sm:py-10 sm:px-12 rounded-[40px] flex flex-col sm:flex-row items-center justify-between gap-8 shadow-sm">
                <div className="space-y-2 text-center sm:text-left">
                    <h2 className="text-[14px] font-bold text-dim uppercase tracking-[0.2em] font-mono">Follow Me</h2>
                    <p className="text-[14px] text-dim/80 italic font-medium">@Shubhanshu-ism everywhere</p>
                </div>
                <div className="flex gap-4 justify-center">
                    <SocialIcon href={userData.socials.twitter} icon={<Twitter size={20} strokeWidth={1.5} />} />
                    <SocialIcon href={userData.socials.github} icon={<Github size={20} strokeWidth={1.5} />} />
                    <SocialIcon href={userData.socials.linkedin} icon={<Linkedin size={20} strokeWidth={1.5} />} />
                    <SocialIcon href={userData.socials.instagram} icon={<Instagram size={20} strokeWidth={1.5} />} />
                </div>
            </section>

            <footer className="text-center text-[10px] sm:text-[11px] text-dim/80 uppercase tracking-[0.3em] font-bold font-mono">
                &copy; 2026 {userData.name} \u2014 IIT ISM Dhanbad
            </footer>
        </div>
    );
};
