import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { articles } from "../Blog/articlesData";
import BlogArticleHeader from "./components/BlogArticleHeader";
import BlogArticleTopBar from "./components/BlogArticleTopBar";


function BlogArticleDetailPage() {

    // ---- Get Article ID from URL ---- //
    const { id } = useParams();

    // ---- Find Article by ID ---- //
    const article = articles.find((a) => a.id === Number(id));


    // ---- Always Start at Top on Article Open ---- //
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, [id]);


    return (
        <div>
            {/** --------------------------------------------------------------------------------------- 
                1.0 Top Bar
            --------------------------------------------------------------------------------------- **/}
            <BlogArticleTopBar />

            <div className="min-h-screen bg-slate-50">

                {/** --------------------------------------------------------------------------------------- 
                    2.0 Article Header
                --------------------------------------------------------------------------------------- **/}
                {article ? (
                    <BlogArticleHeader
                        title={article.title}
                        tag={article.tag}
                        date={article.date}
                    />
                ) : null}

                {/** --------------------------------------------------------------------------------------- 
                    3.0 Article Content 
                --------------------------------------------------------------------------------------- **/}
                <main className="mx-auto max-w-4xl px-4 py-8">
                    {article ? (
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">

                            {/* Article Image */}
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-64 object-cover rounded-lg mb-6"
                            />

                            {/* Article Excerpt */}
                            <p className="text-lg text-slate-700 leading-relaxed">
                                {article.excerpt}
                            </p>

                            {/* Placeholder for full content */}
                            <div className="mt-6 pt-6 border-t border-slate-200">
                                <p className="text-slate-600">
                                    Full article content will be displayed here...
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
                            <h1 className="text-3xl font-bold text-slate-900 mb-4">
                                Article Not Found
                            </h1>
                            <p className="text-slate-600">
                                The article you're looking for doesn't exist.
                            </p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}

export default BlogArticleDetailPage;
