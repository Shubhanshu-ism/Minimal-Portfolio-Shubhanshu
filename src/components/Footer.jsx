import { useState } from 'react';
import { userData } from '../data/user';
import { Link } from 'react-router-dom';
import { Twitter, Github, Linkedin, PlusCircle, Copy, CheckCircle2, Code2, Instagram } from 'lucide-react';

const SocialIcon = ({ href, icon, label }) => (
    <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="w-[46px] h-[46px] rounded-full border border-subtle flex items-center justify-center text-dim hover:text-accent hover:bg-black/5 dark:hover:bg-white/5 transition-all shadow-sm"
        aria-label={label}
    >
        {icon}
    </a>
);

export const Footer = ({ showWorkTogether = true }) => {
    const [emailCopied, setEmailCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(userData.email);
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
    };

    return (
        <div className="pt-8 pb-12 space-y-12 sm:space-y-16">
            {showWorkTogether && (
                <section className="flex flex-col items-center text-center space-y-6">
                    <div className="text-center space-y-3 pt-8 pb-8 border-b border-subtle w-full">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-accent">
                            {userData.components.footer.ctaTitle}
                        </h2>
                        <p className="text-sm sm:text-base text-dim max-w-md mx-auto leading-relaxed">
                            {userData.components.footer.ctaSubtitle}
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
                        <Link
                            to="/contact"
                            className="bg-[#18181B] text-white dark:bg-[#1C1C1E] dark:text-white border border-transparent dark:border-white/10 px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:opacity-90 transition-all shadow-sm active:scale-[0.98]"
                        >
                            <PlusCircle size={16} strokeWidth={2} /> Hire Me
                        </Link>
                        <button
                            onClick={handleCopyEmail}
                            className="bg-transparent border border-subtle text-accent px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-black/5 dark:hover:bg-white/5 transition-all active:scale-[0.98]"
                            aria-label="Copy Email"
                        >
                            {emailCopied ? <CheckCircle2 size={16} strokeWidth={2} className="text-green-500" /> : <Copy size={16} strokeWidth={2} />}
                            {emailCopied ? 'Copied!' : 'Copy Email'}
                        </button>
                    </div>
                </section>
            )}

            <section className="flex flex-col sm:flex-row items-center justify-between gap-6 py-8 border-b border-subtle">
                <div className="space-y-1 text-center sm:text-left">
                    <h3 className="text-xl font-bold text-accent">{userData.components.footer.followMeTitle}</h3>
                    <p className="text-xs text-dim font-mono">{userData.components.footer.followMeSubtitle}</p>
                </div>
                <div className="flex gap-3 justify-center flex-wrap">
                    <SocialIcon href={userData.socials.github} icon={<Github size={18} strokeWidth={1.8} />} label="GitHub" />
                    <SocialIcon href={userData.socials.linkedin} icon={<Linkedin size={18} strokeWidth={1.8} />} label="LinkedIn" />
                    <SocialIcon href={userData.socials.codeforces} icon={<Code2 size={18} strokeWidth={1.8} />} label="Codeforces" />
                    <SocialIcon href={userData.socials.twitter} icon={<Twitter size={18} strokeWidth={1.8} />} label="Twitter" />
                    <SocialIcon href={userData.socials.instagram} icon={<Instagram size={18} strokeWidth={1.8} />} label="Instagram" />
                </div>
            </section>

            <footer className="text-center text-[10px] sm:text-[11px] text-dim/70 uppercase tracking-[0.25em] font-medium font-mono space-y-1">
                <p>&copy; {new Date().getFullYear()} {userData.name} &middot; {userData.components.footer.copyrightInstitution}</p>
            </footer>
        </div>
    );
};
