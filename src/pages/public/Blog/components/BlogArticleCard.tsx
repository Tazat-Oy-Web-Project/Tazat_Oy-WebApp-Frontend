import { Link } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageContext";


interface Article {
    id: number;
    tag: string;
    date: string;
    title: string;
    excerpt: string;
    image: string;
    featured?: boolean;
}

interface BlogArticleCardProps {
    article: Article;
}


function BlogArticleCard({ article }: BlogArticleCardProps) {
    const { language } = useLanguage();


    return (
        <Link to={`/blog/${article.id}`} className="block">
            <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md cursor-pointer">
            {/* Article Image */}
            <div className="aspect-video overflow-hidden bg-slate-100">
                <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                />
            </div>
            
            {/* Article Content */}
            <div className="p-4">
                {/* Tag and Date */}
                <div className="flex items-center gap-2 text-xs">
                    <span className="rounded-full bg-slate-100 px-2 py-1 font-semibold text-slate-700">
                        {article.tag.toUpperCase()}
                    </span>
                    <span className="text-slate-500">{article.date}</span>
                </div>
                
                {/* Article Title */}
                <h3 className="mt-2 text-base font-extrabold text-slate-900">
                    {article.title}
                </h3>
                
                {/* Article Excerpt */}
                <p className="mt-2 text-sm text-slate-600">{article.excerpt}</p>
                
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
