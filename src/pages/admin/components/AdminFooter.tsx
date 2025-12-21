export default function AdminFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-slate-200 bg-white px-6 py-4">
            <div className="flex flex-col items-center justify-between gap-2 text-sm text-slate-500 sm:flex-row">
                <p>© {currentYear} Tazat Oy. All rights reserved.</p>
                <p>Admin Panel v1.0</p>
            </div>
        </footer>
    );
}
