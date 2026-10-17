import { ChartColumn, LayoutGrid, Bot, Cpu, GitBranch, Sparkles, PenLine, Terminal } from 'lucide-react';

// One icon and accent per case study. Accents match the artwork in /public/projects.
const ICONS = {
    'gopaisa': [ChartColumn, 'text-blue-500'],
    'tablesprint': [LayoutGrid, 'text-emerald-500'],
    'incnut-digital': [Bot, 'text-violet-500'],
    'pm2-auto-recovery-alerts': [Cpu, 'text-amber-500'],
    'gitlab-coding-agent': [GitBranch, 'text-[#fc6d26]'],
    'ai-compare': [Sparkles, 'text-cyan-500'],
    'megablog': [PenLine, 'text-rose-500'],
};

export const ItemIcon = ({ item, size = 20 }) => {
    const [Icon, color] = ICONS[item.id] || [Terminal, 'text-accent'];
    return <Icon size={size} className={color} />;
};
