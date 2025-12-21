import { Link } from "react-router-dom";
import AdminNavbar from "./components/AdminNavbar";
import AdminSidebar from "./components/AdminSidebar";
import AdminFooter from "./components/AdminFooter";

const stats = [
    {
        label: "New quote requests",
        value: "12",
        change: "+4 this week",
        icon: (
            <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        label: "Active job posts",
        value: "6",
        change: "2 drafts",
        icon: (
            <svg className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        label: "Pending applications",
        value: "18",
        change: "5 new",
        icon: (
            <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
        ),
    },
    {
        label: "Published posts",
        value: "24",
        change: "3 scheduled",
        icon: (
            <svg className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
        ),
    },
];

const quickActions = [
    { label: "Create blog post", path: "/admin/posts", color: "bg-blue-600 hover:bg-blue-700" },
    { label: "Review applications", path: "/admin/applications", color: "bg-emerald-600 hover:bg-emerald-700" },
    { label: "Post announcement", path: "/admin/announcements", color: "bg-indigo-600 hover:bg-indigo-700" },
    { label: "View quotes", path: "/admin/quotes", color: "bg-amber-600 hover:bg-amber-700" },
];

const activity = [
    { title: "New quote request from M. Kallio", time: "15 minutes ago" },
    { title: "Job post edited: Weekend Cleaner", time: "1 hour ago" },
    { title: "Announcement published: Winter schedule", time: "Yesterday" },
    { title: "Application received: J. Niemi", time: "Yesterday" },
];

const reminders = [
    "Review 5 pending applications.",
    "Update staff news for December.",
    "Confirm training schedule with supervisors.",
];

export default function AdminDashboard() {
    return (
        <div className="flex min-h-screen bg-slate-50">
            <AdminSidebar />

            <div className="flex flex-1 flex-col">
                <AdminNavbar />

                <main className="flex-1 px-4 py-8 lg:px-6">
                    <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <h1 className="text-3xl font-extrabold text-slate-900">Dashboard</h1>
                            <p className="mt-2 text-slate-600">Snapshot of admin activity and quick actions.</p>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-600 shadow-sm">
                            Next staff meeting: Tue 09:00
                        </div>
                    </div>

                    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                        {stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-semibold text-slate-500">{stat.label}</p>
                                        <p className="mt-2 text-3xl font-extrabold text-slate-900">{stat.value}</p>
                                    </div>
                                    <div className="rounded-xl bg-slate-50 p-3">{stat.icon}</div>
                                </div>
                                <p className="mt-4 text-xs font-semibold text-slate-500">{stat.change}</p>
                            </div>
                        ))}
                    </section>

                    <section className="mt-8 grid gap-6 lg:grid-cols-3">
                        <div className="lg:col-span-2">
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                <div className="mb-4 flex items-center justify-between">
                                    <h2 className="text-lg font-bold text-slate-900">Recent activity</h2>
                                    <span className="text-sm font-semibold text-slate-500">Last 24 hours</span>
                                </div>
                                <div className="space-y-4">
                                    {activity.map((item) => (
                                        <div
                                            key={item.title}
                                            className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-4 py-3"
                                        >
                                            <p className="text-sm font-semibold text-slate-700">{item.title}</p>
                                            <span className="text-xs font-semibold text-slate-400">{item.time}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                <h2 className="text-lg font-bold text-slate-900">Quick actions</h2>
                                <div className="mt-4 space-y-3">
                                    {quickActions.map((action) => (
                                        <Link
                                            key={action.label}
                                            to={action.path}
                                            className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-white ${action.color}`}
                                        >
                                            {action.label}
                                            <span aria-hidden="true">→</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                <h2 className="text-lg font-bold text-slate-900">Reminders</h2>
                                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                                    {reminders.map((item) => (
                                        <li key={item} className="flex items-start gap-2">
                                            <span className="mt-1 h-2 w-2 rounded-full bg-blue-600"></span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>
                </main>

                <AdminFooter />
            </div>
        </div>
    );
}
