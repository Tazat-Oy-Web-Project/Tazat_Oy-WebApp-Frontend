import { useLanguage } from "../../../context/LanguageContext";

interface BlogArticleHeaderProps {
    title: string;
    tag: string;
    date: string;
}


function BlogArticleHeader({ title, tag, date }: BlogArticleHeaderProps) {
    const { language } = useLanguage();


    return (
        <header className="relative overflow-hidden w-full">
            {/* Background with gradient overlay */}
            <div className="bg-linear-to-r from-amber-50 via-orange-50 to-yellow-50 py-8 sm:py-12 shadow-md border-b-2 border-orange-200/30">
                <div className="relative mx-auto max-w-4xl px-4">
                    {/* Breadcrumb / Tag */}
                    <div className="mb-3">
                        <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-700 border border-amber-200">
                            {tag.toUpperCase()}
                        </span>
                    </div>
                    
                    {/* Article Title */}
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-2">
                        {title}
                    </h1>
                    
                    {/* Article Date */}
                    <p className="text-sm text-gray-600">
                        {language === "en" ? "Published on" : "Julkaistu"} {date}
                    </p>
                </div>
            </div>
        </header>
    );
}

export default BlogArticleHeader;
