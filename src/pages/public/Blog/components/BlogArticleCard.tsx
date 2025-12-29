import { Link } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageContext";


interface Article {
    id: string;
    categoryId: string;
    createdAt?: { _seconds: number; _nanoseconds: number };
    title: string;
    content: string;
    postImageURL?: string;
    featured?: boolean;
}

interface BlogArticleCardProps {
    article: Article;
}


function BlogArticleCard({ article }: BlogArticleCardProps) {
    const { language } = useLanguage();

    const formattedDate = article.createdAt?._seconds 
        ? new Date(article.createdAt._seconds * 1000).toLocaleDateString()
        : 'Unknown date';

    return (
        <Link to={`/blog/${article.id}`} className="block">
            <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md cursor-pointer">
            {/* Article Image */}
            <div className="aspect-video overflow-hidden bg-slate-100">
                {article.postImageURL && (
                <img
                    src={article.postImageURL}
                    alt={article.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                />
                )}
            </div>
            
            {/* Article Content */}
            <div className="p-4">
                {/* Tag and Date */}
                <div className="flex items-center gap-2 text-xs">
                    <span className="rounded-full bg-slate-100 px-2 py-1 font-semibold text-slate-700">
                        {article.categoryId?.toUpperCase().replace('-', ' ')}
                    </span>
                    <span className="text-slate-500">{formattedDate}</span>
                </div>
                
                {/* Article Title */}
                <h3 className="mt-2 text-base font-extrabold text-slate-900">
                    {article.title}
                </h3>
                
                {/* Article Excerpt */}
                <p className="mt-2 text-sm text-slate-600 line-clamp-2">{article.content}</p>
                
                {/* Read More Button */}
                <div className="mt-3 text-sm font-semibold text-amber-700 hover:text-amber-800">
                    {language === "en" ? "Read more" : "Lue lisää"}
                </div>
            </div>
            </article>
        </Link>
    );
}

export default BlogArticleCard;
