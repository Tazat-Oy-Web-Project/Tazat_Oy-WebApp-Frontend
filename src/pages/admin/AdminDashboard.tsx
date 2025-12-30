import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AdminNavbar from "./components/AdminNavbar";
import AdminSidebar from "./components/AdminSidebar";
import AdminFooter from "./components/AdminFooter";
import { FaBriefcase, FaNewspaper } from "react-icons/fa";
import { MdArticle } from "react-icons/md";


export default function AdminDashboard() {

    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState({
        totalBlogPosts: 0,
        totalJobPosts: 0,
    });


    // ===============  1) Fetch stats from backend

    useEffect(() => {
        const fetchStats = async () => {
            try {
                setLoading(true);

                // Fetch blog posts count
                const blogResponse = await fetch('http://localhost:3000/blogPosts');
                const blogPosts = await blogResponse.json();

                // Fetch job posts count
                const jobResponse = await fetch('http://localhost:3000/jobPosts');
                const jobPosts = await jobResponse.json();

                setStats({
                    totalBlogPosts: blogPosts.length,
                    totalJobPosts: jobPosts.length,
                });

            } catch (error) {
                console.error('Error fetching dashboard stats:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);


    const quickActions = [
        { 
            label: "Create Blog Post", 
            path: "/staff/admin/posts/new", 
            color: "bg-blue-600 hover:bg-blue-700",
            icon: <MdArticle className="text-xl" />
        },
        { 
            label: "Create Job Post", 
            path: "/staff/admin/jobs/new", 
            color: "bg-emerald-600 hover:bg-emerald-700",
            icon: <FaBriefcase className="text-xl" />
        },
        { 
            label: "View All Blog Posts", 
            path: "/staff/admin/posts", 
            color: "bg-indigo-600 hover:bg-indigo-700",
            icon: <FaNewspaper className="text-xl" />
        },
        { 
            label: "View All Job Posts", 
            path: "/staff/admin/jobs", 
            color: "bg-amber-600 hover:bg-amber-700",
            icon: <FaBriefcase className="text-xl" />
        },
    ];

    return (
        <div className="flex min-h-screen bg-slate-50">
            <AdminSidebar />

            <div className="flex flex-1 flex-col">
                <AdminNavbar />

                <main className="flex-1 px-4 py-8 lg:px-6">
                    {/* =============   HEADER SECTION ============= */}
                    <div className="mb-8">
                        <h1 className="text-4xl font-extrabold text-slate-900">Dashboard</h1>
                        <p className="mt-2 text-lg text-slate-600">Overview of blog posts and job postings</p>
                    </div>

                    {/* =============   STATS SECTION ============= */}
                    {loading ? (
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-12 text-center mb-8">
                            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
                            <p className="text-slate-500">Loading statistics...</p>
                        </div>
                    ) : (
                        <section className="grid gap-6 sm:grid-cols-2 mb-8">
                            {/* Blog Posts Stats */}
                            <Link 
                                to="/staff/admin/posts"
                                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-semibold text-slate-500">Total Blog Posts</p>
                                        <p className="mt-2 text-4xl font-extrabold text-slate-900">{stats.totalBlogPosts}</p>
                                        <p className="mt-3 text-sm font-medium text-blue-600 group-hover:text-blue-700">
                                            View all posts →
                                        </p>
                                    </div>
                                    <div className="rounded-xl bg-blue-50 p-4 group-hover:bg-blue-100 transition-colors">
                                        <MdArticle className="text-4xl text-blue-600" />
                                    </div>
                                </div>
                            </Link>

                            {/* Job Posts Stats */}
                            <Link 
                                to="/staff/admin/jobs"
                                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-semibold text-slate-500">Total Job Posts</p>
                                        <p className="mt-2 text-4xl font-extrabold text-slate-900">{stats.totalJobPosts}</p>
                                        <p className="mt-3 text-sm font-medium text-emerald-600 group-hover:text-emerald-700">
                                            View all jobs →
                                        </p>
                                    </div>
                                    <div className="rounded-xl bg-emerald-50 p-4 group-hover:bg-emerald-100 transition-colors">
                                        <FaBriefcase className="text-4xl text-emerald-600" />
                                    </div>
                                </div>
                            </Link>
                        </section>
                    )}

                    {/* =============   QUICK ACTIONS SECTION ============= */}
                    <section>
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Quick Actions</h2>
                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                {quickActions.map((action) => (
                                    <Link
                                        key={action.label}
                                        to={action.path}
                                        className={`flex flex-col items-center justify-center gap-3 rounded-xl px-6 py-5 text-sm font-semibold text-white ${action.color} shadow-md hover:shadow-lg transition-all duration-200`}
                                    >
                                        {action.icon}
                                        <span className="text-center">{action.label}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                </main>

                <AdminFooter />
            </div>
        </div>
    );
}
