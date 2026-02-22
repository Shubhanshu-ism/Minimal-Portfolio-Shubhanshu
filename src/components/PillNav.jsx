import { NavLink } from 'react-router-dom';
import { Home, User, Briefcase, Mail, Sun, Moon, PlusCircle } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export const PillNav = () => {
    const { theme, toggleTheme } = useTheme();

    const linkClass = ({ isActive }) =>
        `p-2.5 rounded-full transition-all flex items-center justify-center ${isActive ? 'bg-black/5 text-accent dark:bg-white/10 dark:text-white' : 'text-dim hover:text-accent hover:bg-black/5 dark:hover:bg-white/5'}`;

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-folio">
            <div className="bg-white/80 dark:bg-[#212121]/80 backdrop-blur-xl border border-subtle rounded-[2rem] p-2 flex items-center justify-between shadow-sm dark:shadow-2xl">
                <div className="flex items-center gap-1">
                    <NavLink to="/" className={linkClass} aria-label="Home">
                        <Home size={20} strokeWidth={2} />
                    </NavLink>
                    <NavLink to="/about" className={linkClass} aria-label="About">
                        <User size={20} strokeWidth={2} />
                    </NavLink>
                    <NavLink to="/work" className={linkClass} aria-label="Work">
                        <Briefcase size={20} strokeWidth={2} />
                    </NavLink>
                    <NavLink to="/contact" className={linkClass} aria-label="Contact">
                        <Mail size={20} strokeWidth={2} />
                    </NavLink>
                </div>

                <div className="flex items-center gap-2 pr-1">
                    <button
                        onClick={toggleTheme}
                        className="p-2.5 rounded-full text-dim hover:text-accent hover:bg-black/5 dark:hover:bg-white/5 transition-all outline-none"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? <Sun size={20} strokeWidth={2} /> : <Moon size={20} strokeWidth={2} />}
                    </button>
                    <NavLink to="/contact" className="bg-[#18181B] text-white dark:bg-white/10 dark:text-white border border-transparent dark:border-white/10 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 hover:opacity-90 transition-all">
                        <PlusCircle size={16} /> Hire Me
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};
