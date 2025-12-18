import { Link } from "react-router-dom";


function BlogArticleTopBar() {


    return (
        <header className="sticky w-full border-b border-orange-200/30 bg-linear-to-r from-white via-orange-50 to-yellow-50">
            <div className="mx-auto max-w-4xl px-4 py-3">
                <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 rounded-lg px-2 py-1 text-sm font-semibold text-orange-700 hover:bg-orange-50 transition-all duration-300"
                >
                    <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M15 18L9 12L15 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    Back to Blog
                </Link>
            </div>
        </header>
    );
}

export default BlogArticleTopBar;
