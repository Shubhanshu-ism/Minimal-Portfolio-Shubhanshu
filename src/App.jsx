import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { PillNav } from './components/PillNav';
import { ThemeProvider } from './components/ThemeProvider';

import HomePage from './pages/HomePage';

const AboutPage = lazy(() => import('./pages/AboutPage'));
const WorkPage = lazy(() => import('./pages/WorkPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ProjectDetailsPage = lazy(() => import('./pages/ProjectDetailsPage'));

const routeTitles = {
  '/': 'Shubhanshu Jain | SDE, Backend Developer & Gen AI Engineer (IIT ISM Dhanbad)',
  '/about': 'About Shubhanshu Jain | SDE, Competitive Programmer (IIT ISM Dhanbad)',
  '/work': 'Work & Experience | High-Throughput Systems & AI Engineering',
  '/projects': 'Engineering Projects | Autonomous Agents & Open Source APM',
  '/contact': 'Contact & Engineering Inquiries | Shubhanshu Jain',
};

const projectTitles = {
  gopaisa: 'GoPaisa Case Study | 66x Query Optimization & Streaming Export (Fivetran Pattern)',
  'incnut-digital': 'IncNut Digital AI Case Study | LangGraph Multi-Agent RAG (Intercom Fin Pattern)',
  'gitlab-coding-agent': 'GitLab Coding Agent | Autonomous SWE Agent with Docker Sandboxing (Devin Alternative)',
  'pm2-auto-recovery-alerts': 'PM2 Auto Recovery | Self-Hosted DevOps Monitoring (PM2 Plus Alternative)',
  'ai-compare': 'AI Compare | Real-Time LLM Benchmarking Suite (Chatbot Arena Pattern)',
  megablog: 'MegaBlog Platform | Full-Stack Appwrite BaaS Publishing',
  tablesprint: 'TableSprint Case Study | Enterprise CRM Platform Engineering',
};

const SkeletonBlock = ({ className }) => (
  <div className={`bg-black/[0.04] dark:bg-white/[0.06] rounded-xl animate-pulse ${className}`} />
);

const PageLoader = () => (
  <div className="max-w-folio mx-auto pt-32 pb-20 px-4 space-y-10" aria-label="Loading page">
    {/* Back link skeleton */}
    <SkeletonBlock className="w-40 h-4 rounded-full" />

    {/* Metadata row */}
    <div className="grid grid-cols-4 gap-3">
      {[...Array(4)].map((_, i) => (
        <SkeletonBlock key={i} className="h-14 rounded-2xl" />
      ))}
    </div>

    {/* Title block */}
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <SkeletonBlock className="w-14 h-14 rounded-2xl shrink-0" />
        <div className="space-y-2 flex-1">
          <SkeletonBlock className="w-2/3 h-8 rounded-xl" />
          <SkeletonBlock className="w-1/3 h-4 rounded-lg" />
        </div>
      </div>
      <SkeletonBlock className="w-full h-16 rounded-xl" />
      <div className="flex gap-2">
        {[...Array(5)].map((_, i) => (
          <SkeletonBlock key={i} className="w-16 h-6 rounded-full" />
        ))}
      </div>
    </div>

    {/* Metric cards */}
    <div className="grid grid-cols-2 gap-3">
      {[...Array(4)].map((_, i) => (
        <SkeletonBlock key={i} className="h-20 rounded-[20px]" />
      ))}
    </div>

    {/* Hero image placeholder */}
    <SkeletonBlock className="w-full aspect-video rounded-[24px]" />

    {/* Text paragraphs */}
    <div className="space-y-3">
      <SkeletonBlock className="w-48 h-6 rounded-xl" />
      <SkeletonBlock className="w-full h-20 rounded-xl" />
    </div>
  </div>
);

function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path.startsWith('/project/')) {
      const id = path.replace('/project/', '');
      document.title = projectTitles[id] || 'Project Details | Shubhanshu Jain';
    } else {
      document.title = routeTitles[path] || 'Shubhanshu Jain | SDE, Backend Developer & AI Engineer';
    }
  }, [location.pathname]);

  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/project/:id" element={<ProjectDetailsPage />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-bgMain text-accent selection:bg-accent selection:text-bgMain">
          <PillNav />
          <AnimatedRoutes />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
