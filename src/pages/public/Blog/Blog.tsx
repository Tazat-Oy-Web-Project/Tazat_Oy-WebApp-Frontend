import { useMemo, useState, useEffect } from "react";
import NavbarComponent from "../components/Navbar";
import BlogHero from "./components/BlogHero";
import BlogFeaturedArticle from "./components/BlogFeaturedArticle";
import BlogArticleCard from "./components/BlogArticleCard";
import BlogNewsletter from "./components/BlogNewsletter";
import BlogCategories from "./components/BlogCategories";
import BlogCTA from "./components/BlogCTA";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


function Blog(){

    const [loading, setLoading] = useState(true);
    const [articles, setArticles] = useState<any[]>([]);

    // ---- Fetch Blog Posts from Backend ---- //
    useEffect(() => {
        try {
            setLoading(true);
            
            fetch(`${API_BASE_URL}/blogPosts`)
                .then(response => response.json())
                .then(response => {
                    console.log("Fetched Blog Posts for Public:", response);
                    setArticles(response);
                })
                .catch(error => {
                    console.error('Error fetching blog posts:', error);
                })
                .finally(() => {
                    setLoading(false);
                });
        } catch (error) {
            console.error('Error:', error);
            setLoading(false);
        }
    }, []);

    // ---- Search Query State Management ---- //
    const [query, setQuery] = useState("");


    // ---- Selected Category State Management ---- //
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);


    // ---- Pagination State Management ---- //
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 2; // Featured + 2 regular articles


    // ----------------- Filter Articles Based on Search Query and Category ----------------- //
    const filtered = useMemo(() => {
      
      const searchQuery = query.trim().toLowerCase();

      // Start with all articles
      let results = articles;

      // Filter by selected category if one is selected
      if (selectedCategory) {
        results = results.filter((element: any) => 
          element.categoryId?.toLowerCase() === selectedCategory.toLowerCase()
        );
      }

      // Filter by search query if provided
      if (searchQuery) {
        results = results.filter((element: any) => {
          const searchableContent = [
            element.title,
            element.content,
            element.categoryId
          ].join(' | ').toLowerCase();

          return searchableContent.includes(searchQuery);
        });
      }

      return results;
    }, [articles, query, selectedCategory]);

    console.log('Filtered Articles:', filtered);



    // ----------------- Pagination Logic ----------------- //
    // Separate Featured and Regular Articles
    const featured = filtered.find((element) => element.featured) ?? filtered[0];
    const rest = filtered.filter((element) => element.id !== featured?.id);

    // Paginate regular articles (not featured)
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = rest.slice(indexOfFirstArticle, indexOfLastArticle);
    const totalPages = Math.ceil(rest.length / articlesPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    // Reset pagination when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [query, selectedCategory]);



    // ----------------- Categories Data ----------------- //
    // Here the backend provides article counts per category
    const categories = [
        { name: "Home Cleaning", count: 24 },
        { name: "Office Tips", count: 12 },
        { name: "Eco Cleaning", count: 8 },
        { name: "Organization", count: 15 },
        { name: "Company News", count: 5 },
    ];




    return(
        <div>
            {/** --------------------------------------------------------------------------------------- 
                1.0 Navbar Component 
            --------------------------------------------------------------------------------------- **/}
            <NavbarComponent />

            <div className="min-h-screen bg-slate-50">
                
                {/** --------------------------------------------------------------------------------------- 
                    2.0 Hero Section with Search 
                --------------------------------------------------------------------------------------- **/}
                <BlogHero query={query} onQueryChange={setQuery} />

                {/** --------------------------------------------------------------------------------------- 
                    3.0 Main Content Area 
                --------------------------------------------------------------------------------------- **/}
                <main className="mx-auto max-w-6xl px-4 py-8">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                        
                        {/* 3.1 Left Column - Articles Section */}
                        <section className="lg:col-span-8">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-bold text-slate-900">Latest Articles</h2>
                            </div>

                            {/* Loading State */}
                            {loading ? (
                                <div className="mt-6 flex justify-center items-center py-12">
                                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
                                </div>
                            ) : filtered.length === 0 ? (
                                <div className="mt-6 text-center py-12 bg-white rounded-2xl border border-slate-200">
                                    <p className="text-slate-600">No articles found</p>
                                </div>
                            ) : (
                                <>
                                    {/* Featured Article Card */}
                                    {featured ? <BlogFeaturedArticle article={featured} /> : null}

                                    {/* Article Cards Grid */}
                                    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                                        {currentArticles.map((element: any) => (
                                            <BlogArticleCard key={element.id} article={element} />
                                        ))}
                                    </div>

                                    {/* =============   PAGINATION ============= */}
                                    {totalPages > 1 && (
                                        <div className="mt-10 flex items-center justify-center gap-4">
                                            <button
                                                onClick={handlePrevPage}
                                                disabled={currentPage === 1}
                                                className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-orange-500 bg-white text-orange-600 font-semibold hover:bg-orange-50 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                                            >
                                                <FaChevronLeft />
                                                Previous
                                            </button>

                                            <div className="flex items-center gap-2">
                                                <span className="text-sm font-medium text-slate-600">
                                                    Page {currentPage} of {totalPages}
                                                </span>
                                            </div>

                                            <button
                                                onClick={handleNextPage}
                                                disabled={currentPage === totalPages}
                                                className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-orange-500 bg-white text-orange-600 font-semibold hover:bg-orange-50 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                                            >
                                                Next
                                                <FaChevronRight />
                                            </button>
                                        </div>
                                    )}
                                </>
                            )}
                        </section>

                        {/* 3.2 Right Column - Sidebar Widgets */}
                        <aside className="lg:col-span-4">
                            <BlogNewsletter />
                            <BlogCategories 
                                categories={categories} 
                                selectedCategory={selectedCategory}
                                onCategorySelect={setSelectedCategory}
                            />
                            <BlogCTA />
                        </aside>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Blog;
