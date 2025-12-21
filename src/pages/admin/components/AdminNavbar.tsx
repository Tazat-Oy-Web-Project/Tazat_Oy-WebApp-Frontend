import { Link, useLocation } from "react-router-dom";

export default function AdminNavbar() {

    // useLocation() gives information about the current URL extracted from App.tsx routes when user navigates
    const location = useLocation();
    console.log("All admin navbar location info:", location);

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
        if (path.includes("training")) return "Training";
        if (path.includes("users")) return "Users";
        if (path.includes("profile")) return "Profile";
        return "Admin Panel";
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

                    {/* Profile Dropdown */}
                    <Link
                        to="/admin/profile"
                        className="flex items-center gap-2 rounded-xl px-3 py-2 hover:bg-slate-100"
                    >
                        <div className="h-8 w-8 rounded-full bg-blue-600 grid place-items-center text-white font-bold text-sm">
                            A
                        </div>
                        <span className="hidden text-sm font-semibold text-slate-700 sm:block">Admin</span>
                    </Link>
                </div>
            </div>
        </header>
    );
}
