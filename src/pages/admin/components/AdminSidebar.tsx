import { Link, useLocation } from "react-router-dom";

interface NavItem {
    label: string;              // Text shown in sidebar (e.g. "Dashboard")
    path: string;               // Route path (e.g. "/admin/dashboard")
    icon: React.ReactNode;      // SVG icon JSX
}

interface NavGroup {
    section: string;            // Section title (e.g. "Content", "Careers")
    items: NavItem[];           // Links inside that section
}

export default function AdminSidebar() {

    // useLocation() gives information about the current URL extracted from App.tsx routes when user navigates
    const location = useLocation(); 
    console.log("All admin sidebar location info:", location);

    
    // Define navigation groups and their items to use in JSX below
    // This Array has 5 Objects representing 5 sections in the sidebar: Overview, Content, Careers, Requests, Staff
    // ✅ This design is powerful because: To add a new sidebar link, just add an item here!
    const navGroups: NavGroup[] = [
        {
            section: "Overview",
            items: [
                {
                    label: "Dashboard",
                    path: "/staff/admin/dashboard",
                    icon: (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                    ),
                },
            ],
        },
        {
            section: "Content",
            items: [
                {
                    label: "Blog Posts",
                    path: "/staff/admin/posts",
                    icon: (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                    ),
                },
                {
                    label: "Staff News",
                    path: "/staff/admin/news",
                    icon: (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    ),
                },
                {
                    label: "Announcements",
                    path: "/staff/admin/announcements",
                    icon: (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                        </svg>
                    ),
                },
            ],
        },
        {
            section: "Careers",
            items: [
                {
                    label: "Job Postings",
                    path: "/staff/admin/jobs",
                    icon: (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    ),
                },
                {
                    label: "Applications",
                    path: "/staff/admin/applications",
                    icon: (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                    ),
                },
            ],
        },
        {
            section: "Requests",
            items: [
                {
                    label: "Quotes",
                    path: "/staff/admin/quotes",
                    icon: (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                    ),
                },
                {
                    label: "Contact Requests",
                    path: "/staff/admin/contacts",
                    icon: (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h6m-6 4h8m4-8v8a2 2 0 01-2 2H7l-4 4V6a2 2 0 012-2h12a2 2 0 012 2z" />
                        </svg>
                    ),
                },
            ],
        },
        {
            section: "Staff",
            items: [
                {
                    label: "Training",
                    path: "/staff/admin/training",
                    icon: (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    ),
                },
                {
                    label: "Users",
                    path: "/staff/admin/users",
                    icon: (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    ),
                },
            ],
        },
    ];


    // This compares current URL → location.pathname with sidebar item path → item.path; For example: "/admin/dashboard" === "/admin/dashboard"
    const isActive = (path: string) => location.pathname === path;

    return (
        <aside className="sticky top-0 hidden h-screen w-64 shrink-0 border-r border-slate-200 bg-white lg:block">
            {/* Logo / Brand */}
            <div className="flex h-16 items-center gap-3 border-b border-slate-200 px-6">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-600 text-white font-extrabold">
                    T
                </div>
                <div className="leading-tight">
                    <p className="text-sm font-extrabold text-slate-900">Tazat Admin</p>
                    <p className="text-xs text-slate-500">Management Panel</p>
                </div>
            </div>

            {/* Navigation */}
            <nav className="h-[calc(100vh-4rem)] overflow-y-auto px-3 py-4">

                {/* Navigation Groups - Loop through each group */}
                {navGroups.map((element) => (
                    <div key={element.section} className="mb-6">
                        <p className="mb-2 px-3 text-xs font-bold uppercase tracking-wide text-slate-400">
                            {element.section}
                        </p>
                        <div className="space-y-1">
                            {element.items.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    // Apply active styles when current route matches item path
                                    className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all ${
                                        isActive(item.path)
                                            ? "bg-blue-50 text-blue-700"
                                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                    }`}
                                >
                                    {item.icon}
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Logout Button */}
                <div className="mt-4 border-t border-slate-200 pt-4">
                    {/* Static logout action (wire up handler if needed) */}
                    <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Logout
                    </button>
                </div>
            </nav>
        </aside>
    );
}
