import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PillNav } from './components/PillNav';
import { ThemeProvider } from './components/ThemeProvider';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import ContactPage from './pages/ContactPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen">
          <PillNav />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/project/:id" element={<ProjectDetailsPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
