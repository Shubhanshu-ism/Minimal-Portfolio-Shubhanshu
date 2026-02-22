import { NavLink, useLocation } from 'react-router-dom';
import { Home, User, Briefcase, Mail, Sun, Moon, PlusCircle } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const NavIcon = ({ to, icon, label }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => `relative group p-2.5 rounded-full transition-all flex items-center justify-center ${isActive ? 'bg-black/5 text-accent dark:bg-white/10 dark:text-white' : 'text-dim hover:text-accent hover:bg-black/5 dark:hover:bg-white/5'}`}
            aria-label={label}
        >
            {icon}
            <span className="absolute top-full mt-3 left-1/2 -translate-x-1/2 bg-[#18181B] dark:bg-white text-white dark:text-[#18181B] text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-all shadow-md z-50 whitespace-nowrap">
                {label}
            </span>
        </NavLink>
    );
};

export const PillNav = () => {
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();
    const isContactPage = location.pathname === '/contact';

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-folio">
            <div className="bg-white/80 dark:bg-[#212121]/80 backdrop-blur-xl border border-subtle rounded-[2rem] p-2 flex items-center justify-between shadow-sm dark:shadow-2xl">
                <div className="flex items-center gap-1">
                    <NavIcon to="/" icon={<Home size={20} strokeWidth={2} />} label="Home" />
                    <NavIcon to="/about" icon={<User size={20} strokeWidth={2} />} label="About" />
                    <NavIcon to="/work" icon={<Briefcase size={20} strokeWidth={2} />} label="Work" />
                    <NavIcon to="/contact" icon={<Mail size={20} strokeWidth={2} />} label="Contact" />
                </div>

                <div className="flex items-center gap-2 pr-1">
                    <button
                        onClick={toggleTheme}
                        className="relative group p-2.5 rounded-full text-dim hover:text-accent hover:bg-black/5 dark:hover:bg-white/5 transition-all outline-none"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? <Sun size={20} strokeWidth={2} /> : <Moon size={20} strokeWidth={2} />}
                        <span className="absolute top-full mt-3 left-1/2 -translate-x-1/2 bg-[#18181B] dark:bg-white text-white dark:text-[#18181B] text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-all shadow-md z-50 whitespace-nowrap">
                            Theme
                        </span>
                    </button>
                    {!isContactPage && (
                        <NavLink to="/contact" className="bg-[#18181B] text-white dark:bg-white/10 dark:text-white border border-transparent dark:border-white/10 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 hover:opacity-90 transition-all">
                            <PlusCircle size={16} /> Hire Me
                        </NavLink>
                    )}
                </div>
            </div>
        </nav>
    );
};
