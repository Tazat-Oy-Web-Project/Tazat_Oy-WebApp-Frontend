interface PopularPost {
    title: string;
    minutes: number;
}

interface BlogPopularProps {
    popular: PopularPost[];
}


function BlogPopular({ popular }: BlogPopularProps) {


    return (
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            {/* Popular Posts Title */}
            <h3 className="text-sm font-extrabold text-slate-900">Most Popular</h3>
            
            {/* Popular Posts List */}
            <div className="mt-3 space-y-3">
                {popular.map((p) => (
                    <button
                        key={p.title}
                        className="flex w-full items-center gap-3 rounded-xl p-2 text-left hover:bg-slate-50"
                    >
                        {/* Thumbnail Placeholder */}
                        <div className="h-12 w-12 flex-none overflow-hidden rounded-lg bg-slate-200" />
                        
                        {/* Post Info */}
                        <div className="min-w-0">
                            <p className="truncate text-sm font-semibold text-slate-900">
                                {p.title}
                            </p>
                            <p className="text-xs text-slate-500">{p.minutes} min read</p>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default BlogPopular;
