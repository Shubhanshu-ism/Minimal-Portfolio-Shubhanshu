import { NavLink } from 'react-router-dom';
import { PlusCircle } from 'lucide-react';

export const PillNav = () => {
    const linkClass = ({ isActive }) =>
        `px-4 py-2 rounded-xl text-sm font-medium transition-all ${isActive ? 'bg-white/10 text-white' : 'text-dim hover:text-white hover:bg-white/5'}`;

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-folio">
            <div className="bg-bgCard/80 backdrop-blur-md border border-subtle rounded-2xl p-2 flex items-center justify-between shadow-2xl">
                <div className="flex items-center gap-1">
                    <NavLink to="/" className={linkClass}>Home</NavLink>
                    <NavLink to="/about" className={linkClass}>About</NavLink>
                    <NavLink to="/work" className={linkClass}>Work</NavLink>
                </div>
                <NavLink to="/contact" className="bg-accent text-bgMain px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 hover:scale-105 transition-transform active:scale-95">
                    <PlusCircle size={16} /> Hire Me
                </NavLink>
            </div>
        </nav>
    );
};
