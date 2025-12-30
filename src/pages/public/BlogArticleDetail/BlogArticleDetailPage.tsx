import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogArticleHeader from "./components/BlogArticleHeader";
import BlogArticleTopBar from "./components/BlogArticleTopBar";
import { useLanguage } from "../../context/LanguageContext";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


function BlogArticleDetailPage() {
    const { language } = useLanguage();

    // ---- Get Article ID from URL ---- //
    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [article, setArticle] = useState<any>(null);

    // ---- Fetch Article from Backend ---- //
    useEffect(() => {
        if (!id) return;

        try {
            setLoading(true);
            
            fetch(`${API_BASE_URL}/blogPosts`)
                .then(response => response.json())
                .then(response => {
                    const foundArticle = response.find((a: any) => a.id === id);
                    setArticle(foundArticle);
                })
                .catch(error => {
                    console.error('Error fetching article:', error);
                })
                .finally(() => {
                    setLoading(false);
                });
        } catch (error) {
            console.error('Error:', error);
            setLoading(false);
        }
    }, [id]);


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
                        tag={article.categoryId}
                        date={article.createdAt?._seconds ? new Date(article.createdAt._seconds * 1000).toLocaleDateString() : 'Unknown date'}
                    />
                ) : null}

                {/** --------------------------------------------------------------------------------------- 
                    3.0 Article Content 
                --------------------------------------------------------------------------------------- **/}
                <main className="mx-auto max-w-4xl px-4 py-8">
                    {loading ? (
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-12 text-center">
                            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-600 mx-auto mb-4"></div>
                            <p className="text-slate-500">{language === "en" ? "Loading article..." : "Ladataan artikkelia..."}</p>
                        </div>
                    ) : article ? (
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">

                            {/* Article Image */}
                            {article.postImageURL && (
                                <img
                                    src={article.postImageURL}
                                    alt={article.title}
                                    className="w-full h-64 object-cover rounded-lg mb-6"
                                />
                            )}

                            {/* Article Content */}
                            <div className="prose prose-slate max-w-none">
                                <p className="text-lg text-slate-700 leading-relaxed whitespace-pre-wrap">
                                    {article.content}
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
                            <h1 className="text-3xl font-bold text-slate-900 mb-4">
                                {language === "en" ? "Article Not Found" : "Artikkelia Ei Löydy"}
                            </h1>
                            <p className="text-slate-600">
                                {language === "en" ? "The article you're looking for doesn't exist." : "Etsimääsi artikkelia ei ole olemassa."}
                            </p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}

export default BlogArticleDetailPage;
