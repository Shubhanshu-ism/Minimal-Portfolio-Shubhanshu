import { useParams, Link } from 'react-router-dom';
import { userData } from '../data/user';
import { PageWrapper } from '../components/PageWrapper';
import { Footer } from '../components/Footer';
import { ArrowUpRight, ChevronRight, PlusCircle, Copy } from 'lucide-react';

const ProjectDetailsPage = () => {
    const { id } = useParams();

    // Find the project or work item by ID
    const project = userData.projects.find(p => p.id === id) || userData.work.find(w => w.id === id);

    if (!project) {
        return (
            <PageWrapper>
                <div className="flex flex-col items-center justify-center space-y-4 py-20 text-center">
                    <h1 className="text-3xl font-bold text-accent">Project Not Found</h1>
                    <p className="text-dim">The requested project could not be found.</p>
                    <Link to="/" className="text-blue-500 hover:underline">Return to Home</Link>
                </div>
            </PageWrapper>
        );
    }

    const title = project.title || project.company; // Handle both projects and work

    return (
        <PageWrapper>
            <div className="space-y-16">

                {/* Top Metadata Grid */}
                <section className="pt-8">
                    <div className="grid grid-cols-1 mb-12">
                        <div className="border-b border-subtle py-3 flex items-center justify-between text-xs sm:text-sm">
                            <span className="text-dim w-1/3">Client</span>
                            <span className="text-accent font-medium w-2/3">{project.client}</span>
                        </div>
                        <div className="border-b border-subtle py-3 flex items-center justify-between text-xs sm:text-sm">
                            <span className="text-dim w-1/3">Company</span>
                            <span className="text-accent font-medium w-2/3">{project.company}</span>
                        </div>
                        <div className="border-b border-subtle py-3 flex items-center justify-between text-xs sm:text-sm">
                            <span className="text-dim w-1/3">Project Type</span>
                            <span className="text-accent font-medium w-2/3">{project.projectType}</span>
                        </div>
                        <div className="border-b border-subtle py-3 flex items-center justify-between text-xs sm:text-sm">
                            <span className="text-dim w-1/3">Year</span>
                            <span className="text-accent font-medium w-2/3">{project.year}</span>
                        </div>
                    </div>

                    {/* Hero Information */}
                    <div className="space-y-6">
                        <div className="w-16 h-16 bg-white dark:bg-white/10 rounded-full flex items-center justify-center font-bold text-3xl text-accent shrink-0 shadow-sm border border-subtle">
                            {title[0]}
                        </div>

                        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-accent leading-tight">
                            {title}
                        </h1>

                        <p className="text-[17px] text-dim leading-relaxed">
                            {project.overviewParagraph}
                        </p>

                        {project.link && (
                            <div className="pt-1">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 bg-[#18181B] text-white dark:bg-white/10 dark:text-white border border-transparent dark:border-white/10 px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-all"
                                >
                                    Visit Website
                                    <ArrowUpRight size={16} />
                                </a>
                            </div>
                        )}
                    </div>
                </section>

                {/* Media and Content Flow */}
                <section className="space-y-12">
                    {/* First Image */}
                    {project.images && project.images[0] && (
                        <div className="w-full bg-bgCard rounded-[24px] overflow-hidden border border-subtle shadow-xl">
                            <img src={project.images[0]} alt={`${title} screenshot 1`} className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                        </div>
                    )}

                    {/* Optional extra intro context from points if needed, or repeat overview? The screenshot shows text before Problem */}
                    <p className="text-[17px] text-dim leading-relaxed">
                        A business owner enlisted my expertise as a product designer to develop a website that would boost their brand awareness and conversions. Crafting a modern, professional website, my priority was to set them apart from competitors and attract new customers.
                    </p>

                    {/* Second Image */}
                    {project.images && project.images[1] && (
                        <div className="w-full bg-bgCard rounded-[24px] overflow-hidden border border-subtle shadow-xl flex justify-center items-center py-8">
                            <img src={project.images[1]} alt={`${title} screenshot 2`} className="w-4/5 h-auto object-contain drop-shadow-2xl rounded-lg grayscale hover:grayscale-0 transition-all duration-500" />
                        </div>
                    )}

                    {/* Problem Section */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold text-accent">The Problems to Solve</h2>
                        <p className="text-[17px] text-dim leading-relaxed">
                            {project.problemToSolve}
                        </p>
                    </div>

                    {/* Third Image */}
                    {project.images && project.images[2] && (
                        <div className="w-full bg-bgCard rounded-[24px] overflow-hidden border border-subtle shadow-xl flex justify-center items-center py-8">
                            <img src={project.images[2]} alt={`${title} screenshot 3`} className="w-4/5 h-auto object-contain drop-shadow-2xl rounded-lg grayscale hover:grayscale-0 transition-all duration-500" />
                        </div>
                    )}

                    {/* Solution Section */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold text-accent">Our Solution</h2>
                        <p className="text-[17px] text-dim leading-relaxed">
                            {project.solution}
                        </p>
                    </div>
                </section>

                {/* Other Projects List */}
                <section className="space-y-6 pt-10 border-t border-subtle">
                    <div className="flex justify-between items-center px-1">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-dim rounded-full"></div>
                            <h2 className="text-sm font-medium text-dim">
                                Other Projects
                            </h2>
                        </div>
                        <Link to="/" className="text-[10px] font-bold tracking-widest uppercase bg-black/5 dark:bg-white/5 px-3 py-1.5 rounded-full border border-subtle text-dim hover:text-accent transition-colors flex items-center gap-1">
                            View All <ArrowUpRight size={12} />
                        </Link>
                    </div>

                    <div className="grid gap-3">
                        {userData.projects.map((p, i) => {
                            if (p.id === id) return null; // Don't show current project
                            return (
                                <Link
                                    key={i}
                                    to={`/project/${p.id}`}
                                    className="group bg-bgCard border border-subtle p-4 md:p-5 rounded-[20px] flex items-center justify-between hover:border-accent/20 transition-all cursor-pointer"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-white dark:bg-white/10 rounded-full flex items-center justify-center font-bold text-xl text-accent shrink-0 shadow-sm border border-subtle">
                                            {p.title[0]}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-accent text-lg">
                                                {p.title}
                                            </h3>
                                            <p className="text-sm text-dim mt-0.5">{p.projectType || p.tech}</p>
                                        </div>
                                    </div>
                                    <div className="text-dim group-hover:text-accent transition-colors pr-2">
                                        <ChevronRight size={18} />
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </section>

                {/* Follow Me Strip & Footer */}
                <Footer />

            </div>
        </PageWrapper>
    );
};

export default ProjectDetailsPage;
