import { useState } from 'react';
import { userData } from '../data/user';
import { PageWrapper } from '../components/PageWrapper';
import { Footer } from '../components/Footer';
import { Send, CheckCircle2, Mail, MapPin, Copy, MessageSquare } from 'lucide-react';

const ContactPage = () => {
    const [status, setStatus] = useState('default'); // default, sending, success
    const [copiedItem, setCopiedItem] = useState(null);

    const handleCopy = (text, type) => {
        navigator.clipboard.writeText(text);
        setCopiedItem(type);
        setTimeout(() => setCopiedItem(null), 2000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const name = formData.get('userName');
        const email = formData.get('userEmail');
        const message = formData.get('userMessage');

        const subject = encodeURIComponent(`Engineering Inquiry from ${name}`);
        const body = encodeURIComponent(`Project / Inquiry Details:\n${message}\n\nSender Information:\nName: ${name}\nEmail: ${email}`);

        window.location.href = `mailto:${userData.email}?subject=${subject}&body=${body}`;

        setStatus('success');
        setTimeout(() => {
            setStatus('default');
            e.target.reset();
        }, 3500);
    };

    return (
        <PageWrapper>
            <div className="space-y-10">

                {/* Header Section */}
                <header className="space-y-4 pt-2">
                    <div className="flex items-center gap-2">
                        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1 rounded-full">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse-slow"></div>
                            <span className="text-[10px] uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold font-mono">
                                Available for Work &middot; Open to Opportunities
                            </span>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h1 className="text-4xl sm:text-5xl font-bold tracking-[-0.03em] leading-[1.08] text-accent">
                            {userData.pages.contact.title}
                        </h1>
                        <p className="text-base sm:text-lg text-dim leading-relaxed max-w-xl">
                            Looking to build a scalable microservice, optimize critical database queries, or deploy multi-agent AI systems? Reach out and let's build together.
                        </p>
                    </div>
                </header>

                {/* Contact Direct Channels */}
                <section className="space-y-3">
                    <div className="flex items-center gap-2 px-1">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        <h2 className="text-xs font-bold text-dim uppercase tracking-[0.18em] font-mono">
                            Direct Contact Channels
                        </h2>
                    </div>

                    <div className="grid gap-3">
                        {/* Email Card */}
                        <div className="bg-bgCard border border-subtle p-4 sm:p-5 rounded-[22px] flex items-center justify-between shadow-sm hover:border-accent/25 transition-all">
                            <div className="flex items-center gap-4 min-w-0">
                                <div className="w-11 h-11 rounded-xl bg-black/[0.03] dark:bg-white/[0.06] flex items-center justify-center text-accent shrink-0 border border-subtle">
                                    <Mail size={18} />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[10px] font-mono uppercase tracking-wider text-dim">Email Address</p>
                                    <a
                                        href={`mailto:${userData.email}`}
                                        className="text-sm sm:text-base font-semibold text-accent hover:underline block truncate"
                                    >
                                        {userData.email}
                                    </a>
                                </div>
                            </div>
                            <button
                                onClick={() => handleCopy(userData.email, 'email')}
                                className="p-2.5 rounded-xl border border-subtle hover:bg-black/[0.04] dark:hover:bg-white/[0.06] text-dim hover:text-accent active:scale-[0.92] transition-all shrink-0 ml-2"
                                aria-label="Copy email address"
                                title="Copy email address"
                            >
                                {copiedItem === 'email' ? <CheckCircle2 size={16} className="text-emerald-500" /> : <Copy size={16} />}
                            </button>
                        </div>


                        {/* Location Card */}
                        <div className="bg-bgCard border border-subtle p-4 sm:p-5 rounded-[22px] flex items-center gap-4 shadow-sm hover:border-accent/25 transition-all">
                            <div className="w-11 h-11 rounded-xl bg-black/[0.03] dark:bg-white/[0.06] flex items-center justify-center text-accent shrink-0 border border-subtle">
                                <MapPin size={18} />
                            </div>
                            <div>
                                <p className="text-[10px] font-mono uppercase tracking-wider text-dim">Location</p>
                                <p className="text-sm sm:text-base font-semibold text-accent">{userData.location}, India</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Form Card */}
                <section className="space-y-3">
                    <div className="flex items-center gap-2 px-1">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <h2 className="text-xs font-bold text-dim uppercase tracking-[0.18em] font-mono">
                            Send Direct Message
                        </h2>
                    </div>

                    <div className="bg-bgCard border border-subtle p-6 sm:p-7 rounded-[26px] shadow-sm relative overflow-hidden">
                        <form onSubmit={handleSubmit} className="space-y-4 relative z-10 w-full">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-mono font-medium text-dim uppercase tracking-wider">Your Name</label>
                                    <input
                                        name="userName"
                                        type="text"
                                        required
                                        placeholder="Alex Morgan"
                                        className="w-full bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] rounded-xl p-3.5 text-sm focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/10 transition-all text-accent placeholder:text-dim/50"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-mono font-medium text-dim uppercase tracking-wider">Your Email Address</label>
                                    <input
                                        name="userEmail"
                                        type="email"
                                        required
                                        placeholder="alex@company.com"
                                        className="w-full bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] rounded-xl p-3.5 text-sm focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/10 transition-all text-accent placeholder:text-dim/50"
                                    />
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[11px] font-mono font-medium text-dim uppercase tracking-wider">Project / Inquiry Details</label>
                                <textarea
                                    name="userMessage"
                                    rows="4"
                                    required
                                    placeholder="Tell me about your project, engineering challenge, architecture need, or timeline..."
                                    className="w-full bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] rounded-xl p-3.5 text-sm focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/10 transition-all text-accent placeholder:text-dim/50 resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'success'}
                                className={`w-full py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98] ${
                                    status === 'success'
                                        ? 'bg-emerald-600 text-white border-transparent'
                                        : 'bg-[#0F172A] text-white dark:bg-white dark:text-[#0F172A] hover:opacity-90 shadow-sm'
                                }`}
                            >
                                {status === 'default' && (
                                    <>
                                        <Send size={15} strokeWidth={2.2} />
                                        <span>Send Engineering Inquiry</span>
                                    </>
                                )}
                                {status === 'sending' && (
                                    <span className="animate-spin h-5 w-5 border-2 border-white dark:border-black border-t-transparent rounded-full" />
                                )}
                                {status === 'success' && (
                                    <>
                                        <CheckCircle2 size={16} strokeWidth={2.2} />
                                        <span>Inquiry Ready &middot; Opening Mail App...</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </section>

                <Footer showWorkTogether={false} />

            </div>
        </PageWrapper>
    );
};

export default ContactPage;
