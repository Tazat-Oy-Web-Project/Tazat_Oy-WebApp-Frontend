interface BlogHeroProps {
    query: string;
    onQueryChange: (value: string) => void;
}


function BlogHero({ query, onQueryChange }: BlogHeroProps) {


    return (
    <header className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?auto=format&fit=crop&w=1800&q=70)",
        }}
      />
      <div className="absolute inset-0 bg-slate-900/60" />
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-2xl text-center text-white">
                    {/* Title */}
                    <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                        News &amp; Cleaning Tips
                    </h1>
                    
                    {/* Subtitle */}
                    <p className="mt-3 text-sm text-white/80 sm:text-base">
                        Stay updated with the latest cleaning advice, offers, and company updates
                        to keep spaces sparkling.
                    </p>

                    {/* Search Bar */}
                    <div className="mt-6 flex items-center rounded-xl bg-white p-2 shadow-lg">
                        <div className="flex w-full items-center gap-2 rounded-lg bg-slate-50 px-3 py-2">
                            {/* Search Icon */}
                            <svg
                                className="h-4 w-4 text-slate-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9 3a6 6 0 104.472 10.03l2.249 2.25a1 1 0 001.414-1.415l-2.25-2.249A6 6 0 009 3zm-4 6a4 4 0 118 0 4 4 0 01-8 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            {/* Search Input */}
                            <input
                                value={query}
                                onChange={(e) => onQueryChange(e.target.value)}
                                placeholder="Search for tips, tricks, and news..."
                                className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                            />
                        </div>
                        {/* Search Button */}
                        <button className="ml-2 rounded-lg bg-amber-600 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-700 active:bg-amber-800">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default BlogHero;
