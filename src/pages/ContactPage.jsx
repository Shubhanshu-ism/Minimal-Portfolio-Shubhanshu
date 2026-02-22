import { useState } from 'react';
import { userData } from '../data/user';
import { PageWrapper } from '../components/PageWrapper';
import { Footer } from '../components/Footer';
import { Send, CheckCircle2 } from 'lucide-react';

const ContactPage = () => {
    const [status, setStatus] = useState('default'); // default, sending, success

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const name = formData.get('userName');
        const email = formData.get('userEmail');
        const message = formData.get('userMessage');

        const subject = encodeURIComponent(`Engineering Inquiry from ${name}`);
        const body = encodeURIComponent(`Project Description :\n${message}\n\nRegards:\n${name}\nEmail: ${email}`);

        window.location.href = `mailto:${userData.email}?subject=${subject}&body=${body}`;

        setStatus('success');
        setTimeout(() => {
            setStatus('default');
            e.target.reset();
        }, 3000);
    };

    return (
        <PageWrapper>
            <div className="space-y-12">

                {/* Header Section */}
                <section className="space-y-6 text-center sm:text-left pt-10">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-2 bg-transparent border border-subtle px-3 py-1 rounded-full shadow-sm">
                            <div className="w-1.5 h-1.5 bg-[#22c55e] rounded-full animate-pulse-slow"></div>
                            <span className="text-[10px] uppercase tracking-[0.2em] text-dim font-bold font-mono">{userData.pages.contact.badges.main}</span>
                        </div>
                        <div className="text-[10px] uppercase text-[#22c55e] font-bold tracking-widest bg-[#22c55e]/10 px-3 py-1 rounded-full border border-[#22c55e]/20">
                            {userData.config.availability.badgeSecondary}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-[3.5rem] font-bold tracking-tight leading-[1.1] text-accent">{userData.pages.contact.title}</h1>
                        <p
                            className="text-lg text-dim leading-relaxed max-w-2xl"
                            dangerouslySetInnerHTML={{ __html: userData.pages.contact.description.replace('\n', '<br className="hidden sm:block" /> ') }}
                        />
                    </div>
                </section>

                {/* Form Card */}
                <section className="bg-bgCard border border-subtle p-6 sm:p-8 rounded-[40px] shadow-sm relative overflow-hidden mt-8">
                    <form onSubmit={handleSubmit} className="space-y-4 relative z-10 w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                                name="userName" type="text" required placeholder="Name"
                                className="w-full bg-black/5 dark:bg-white/5 border border-subtle rounded-3xl p-5 text-sm focus:outline-none focus:border-dim transition-all text-accent placeholder:text-dim/60 shadow-inner"
                            />
                            <input
                                name="userEmail" type="email" required placeholder="Email Address"
                                className="w-full bg-black/5 dark:bg-white/5 border border-subtle rounded-3xl p-5 text-sm focus:outline-none focus:border-dim transition-all text-accent placeholder:text-dim/60 shadow-inner"
                            />
                        </div>
                        <textarea
                            name="userMessage" rows="6" required placeholder="Project description..."
                            className="w-full bg-black/5 dark:bg-white/5 border border-subtle rounded-3xl p-5 text-sm focus:outline-none focus:border-dim transition-all text-accent placeholder:text-dim/60 resize-none shadow-inner"
                        ></textarea>

                        <button
                            type="submit"
                            disabled={status === 'success'}
                            className={`w-full py-5 rounded-3xl font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98] ${status === 'success' ? 'bg-green-600 text-white border-transparent' : 'bg-white text-black border border-subtle shadow-md hover:bg-gray-100 hover:shadow-lg dark:border-transparent'
                                }`}
                        >
                            {status === 'default' && <><Send size={18} strokeWidth={2.5} /> Submit Inquiry</>}
                            {status === 'sending' && <span className="animate-spin h-5 w-5 border-2 border-black border-t-transparent rounded-full" />}
                            {status === 'success' && <><CheckCircle2 size={18} strokeWidth={2.5} /> Message Sent Successfully</>}
                        </button>
                    </form>
                </section>

                <Footer showWorkTogether={false} />

            </div>
        </PageWrapper>
    );
};

export default ContactPage;
