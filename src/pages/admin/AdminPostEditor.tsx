import AdminNavbar from "./components/AdminNavbar";
import AdminSidebar from "./components/AdminSidebar";
import AdminFooter from "./components/AdminFooter";

export default function AdminPostEditor() {
    return (
        <div className="flex min-h-screen bg-slate-50">
            <AdminSidebar />
            
            <div className="flex flex-1 flex-col">
                <AdminNavbar />
                
                <main className="flex-1 px-4 py-8 lg:px-6">
                    <div className="mb-6">
                        <h1 className="text-3xl font-extrabold text-slate-900">Blog Post Editor</h1>
                        <p className="mt-2 text-slate-600">Create or edit blog posts</p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <p className="text-slate-600">Post editor coming soon...</p>
                    </div>
                </main>

                <AdminFooter />
            </div>
        </div>
    );
}
