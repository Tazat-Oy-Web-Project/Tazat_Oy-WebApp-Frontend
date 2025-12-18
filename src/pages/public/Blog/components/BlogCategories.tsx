interface Category {
    name: string;
    count: number;
}

interface BlogCategoriesProps {
    categories: Category[];
}


function BlogCategories({ categories }: BlogCategoriesProps) {


    return (
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            {/* Categories Title */}
            <h3 className="text-sm font-extrabold text-slate-900">Categories</h3>
            
            {/* Categories List */}
            <ul className="mt-3 space-y-2">
                {categories.map((c) => (
                    <li key={c.name}>
                        <button className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">
                            <span>{c.name}</span>
                            <span className="text-xs font-semibold text-slate-500">
                                {c.count}
                            </span>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BlogCategories;
