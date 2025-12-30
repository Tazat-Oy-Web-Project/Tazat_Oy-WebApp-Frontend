import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { FaSignOutAlt } from "react-icons/fa";

export default function AdminNavbar() {

    const { currentUser, signOut } = useAuth();
    const navigate = useNavigate();

    // useLocation() gives information about the current URL extracted from App.tsx routes when user navigates
    const location = useLocation();
    //console.log("All admin navbar location info:", location);

    // Function to determine Page Title on navbar based on current route
    const getPageTitle = () => {

        // useLocation() gives information about the current URL
        const path = location.pathname; //example: path === "/staff/admin/dashboard" or "/staff/admin/posts/123"
                                        // This path extraccted from App.tsx routes when user navigates

        if (path.includes("dashboard")) return "Dashboard";     // This matched with "/staff/admin/dashboard"
        if (path.includes("posts")) return "Blog Posts";        // This matched with "/staff/admin/posts" and "/staff/admin/posts/:id"
        if (path.includes("news")) return "Staff News";
        if (path.includes("announcements")) return "Announcements";
        if (path.includes("jobs")) return "Job Postings";
        if (path.includes("applications")) return "Applications";
        if (path.includes("quotes")) return "Quotes";
        if (path.includes("contacts")) return "Contact Requests";
        if (path.includes("training")) return "Training";
        if (path.includes("users")) return "Users";
        if (path.includes("profile")) return "Profile";
        return "Admin Panel";
    };

    // Handle logout
    const handleLogout = async () => {
        if (window.confirm('Are you sure you want to sign out?')) {
            try {
                await signOut();
                navigate('/staff/admin/login');
            } catch (error) {
                console.error('Error signing out:', error);
            }
        }
    };

    return (
        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
            <div className="flex h-16 items-center justify-between px-4 lg:px-6">
                {/* Left: Page Title */}
                <div className="flex items-center gap-4">
                    <h1 className="text-lg font-bold text-yellow-500">{getPageTitle()}</h1>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-3">

                    {/* Links to View Website and Staff Portal */}
                    <Link
                        to="/"
                        className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 sm:flex"
                    >
                        View Website
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3h7v7m0-7L10 14m-4 7h12a2 2 0 002-2V9" />
                        </svg>
                    </Link>
                    <Link
                        to="/staff"
                        className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 sm:flex"
                    >
                        View Staff Portal
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 0c-2.761 0-5 2.239-5 5v3h10v-3c0-2.761-2.239-5-5-5z" />
                        </svg>
                    </Link>

                    {/* Profile & Logout */}
                    <div className="flex items-center gap-2">
                        <Link
                            to="/staff/admin/profile"
                            className="flex items-center gap-2 rounded-xl px-3 py-2 hover:bg-slate-100 transition-colors"
                        >
                            <div className="h-8 w-8 rounded-full bg-blue-600 grid place-items-center text-white font-bold text-sm">
                                {currentUser?.email?.charAt(0).toUpperCase() || 'A'}
                            </div>
                            <span className="hidden text-sm font-semibold text-slate-700 sm:block">
                                {currentUser?.email?.split('@')[0] || 'Admin'}
                            </span>
                        </Link>

                        {/* Logout Button */}
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 rounded-xl border border-red-200 bg-white px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 transition-all"
                            title="Sign Out"
                        >
                            <FaSignOutAlt />
                            <span className="hidden sm:block">Logout</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
