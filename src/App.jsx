import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { PillNav } from './components/PillNav';
import { ThemeProvider } from './components/ThemeProvider';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const WorkPage = lazy(() => import('./pages/WorkPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ProjectDetailsPage = lazy(() => import('./pages/ProjectDetailsPage'));

const routeTitles = {
  '/': 'Shubhanshu Jain | SDE, Backend Developer & AI Engineer (IIT ISM)',
  '/about': 'About Shubhanshu Jain | SDE & AI Developer (IIT ISM Dhanbad)',
  '/work': 'Work & Experience | Shubhanshu Jain',
  '/projects': 'Engineering Projects & Products | Shubhanshu Jain',
  '/contact': 'Contact & Engineering Inquiry | Shubhanshu Jain',
};

const projectTitles = {
  gopaisa: 'GoPaisa Case Study | Shubhanshu Jain - Backend & Analytics',
  'incnut-digital': 'IncNut Digital AI Case Study | Shubhanshu Jain - LLM Agents & RAG',
  'gitlab-coding-agent': 'AI GitLab Coding Agent | Shubhanshu Jain - Autonomous PR Reviews & Multi-Agent',
  'pm2-auto-recovery-alerts': 'PM2 Auto Recovery | Shubhanshu Jain - DevOps & Self-Healing Infra',
  'ai-compare': 'AI Compare | Shubhanshu Jain - Real-Time LLM Benchmarking',
  megablog: 'MegaBlog Platform | Shubhanshu Jain - Full Stack Architecture',
  tablesprint: 'TableSprint Case Study | Shubhanshu Jain - Engineering',
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
