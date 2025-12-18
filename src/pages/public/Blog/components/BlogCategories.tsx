interface Category {
    name: string;
    count: number;
}

interface BlogCategoriesProps {
    categories: Category[];
    selectedCategory: string | null;
    onCategorySelect: (category: string | null) => void;
}


function BlogCategories({ categories, selectedCategory, onCategorySelect }: BlogCategoriesProps) {


    // ---- Handle Category Click ---- //
    const handleCategoryClick = (categoryName: string) => {
        // If clicking the already selected category, deselect it (show all)
        if (selectedCategory === categoryName) {
            onCategorySelect(null);
        } else {
            onCategorySelect(categoryName);
        }
    };


    return (
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            {/* Categories Title */}
            <div className="flex items-center justify-between">
                <h3 className="text-sm font-extrabold text-slate-900">Categories</h3>
                {selectedCategory && (
                    <button 
                        onClick={() => onCategorySelect(null)}
                        className="text-xs text-amber-600 hover:text-amber-700 font-medium"
                    >
                        Clear
                    </button>
                )}
            </div>
            
            {/* Categories List */}
            <ul className="mt-3 space-y-2">
                {categories.map((c) => {
                    const isActive = selectedCategory === c.name;
                    return (
                        <li key={c.name}>
                            <button 
                                onClick={() => handleCategoryClick(c.name)}
                                className={`group flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm transition-all duration-300 hover:cursor-pointer hover:scale-105 hover:shadow-md ${
                                    isActive 
                                        ? "bg-amber-100 text-amber-700 font-semibold border border-amber-200 hover:bg-amber-200 hover:border-amber-300" 
                                        : "text-slate-700 hover:bg-linear-to-r hover:from-amber-50 hover:to-orange-50 hover:text-amber-700"
                                }`}
                            >
                                <span className="transition-transform duration-300 group-hover:translate-x-1">{c.name}</span>
                                <span className={`text-xs font-semibold transition-all duration-300 group-hover:scale-110 ${
                                    isActive ? "text-amber-600" : "text-slate-500 group-hover:text-amber-600"
                                }`}>
                                    {c.count}
                                </span>
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default BlogCategories;
