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

interface BlogFeaturedArticleProps {
    article: Article;
}


function BlogFeaturedArticle({ article }: BlogFeaturedArticleProps) {
    const { language } = useLanguage();

    const formattedDate = article.createdAt?._seconds 
        ? new Date(article.createdAt._seconds * 1000).toLocaleDateString()
        : 'Unknown date';

    return (
    <Link to={`/blog/${article.id}`} className="block">
        <article className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer">
      <div className="aspect-16/7 w-full overflow-hidden bg-slate-100">
        {article.postImageURL && (
        <img
          src={article.postImageURL}
          alt={article.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        )}
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2 text-xs">
          <span className="rounded-full bg-amber-100 px-2 py-1 font-semibold text-amber-700">
            {article.categoryId?.toUpperCase().replace('-', ' ')}
          </span>
          <span className="text-slate-500">{formattedDate}</span>
        </div>

        <h3 className="mt-3 text-xl font-extrabold text-slate-900">
          {article.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 line-clamp-2">
          {article.content}
        </p>

        <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-700 hover:text-amber-800">
          {language === "en" ? "Read full article" : "Lue koko artikkeli"}
          <span aria-hidden="true">→</span>
        </div>
      </div>
        </article>
    </Link>
  );
}

export default BlogFeaturedArticle;
