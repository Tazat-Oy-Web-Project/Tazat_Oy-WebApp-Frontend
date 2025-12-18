import { useMemo, useState } from "react";
import NavbarComponent from "../components/Navbar";
import BlogHero from "./components/BlogHero";
import BlogFeaturedArticle from "./components/BlogFeaturedArticle";
import BlogArticleCard from "./components/BlogArticleCard";
import BlogNewsletter from "./components/BlogNewsletter";
import BlogCategories from "./components/BlogCategories";
import BlogCTA from "./components/BlogCTA";
import { articles } from "./articlesData";


function Blog(){

    // ---- Search Query State Management ---- //
    const [query, setQuery] = useState("");


    // ---- Selected Category State Management ---- //
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);


    // ----------------- Filter Articles Based on Search Query and Category ----------------- //
    const filtered = useMemo(() => {
      
      const searchQuery = query.trim().toLowerCase();

      // Start with all articles
      let results = articles;

      // Filter by selected category if one is selected
      if (selectedCategory) {
        results = results.filter((element) => 
          element.tag.toLowerCase() === selectedCategory.toLowerCase()
        );
      }

      // Filter by search query if provided
      if (searchQuery) {
        results = results.filter((element) => {
          const searchableContent = [
            element.title,
            element.excerpt,
            element.tag
          ].join(' | ').toLowerCase();

          return searchableContent.includes(searchQuery);
        });
      }

      return results;
    }, [articles, query, selectedCategory]);

    console.log('Filtered Articles:', filtered);



    // ----------------- Categories Data ----------------- //
    // Here the backend provides article counts per category
    const categories = [
        { name: "Home Cleaning", count: 24 },
        { name: "Office Tips", count: 12 },
        { name: "Eco Cleaning", count: 8 },
        { name: "Organization", count: 15 },
        { name: "Company News", count: 5 },
    ];


    // ----------------- Separate Featured and Regular Articles ----------------- //
    // Step 1: Find the featured article
    // Look for an article marked as "featured: true", or fall back to the first article if none are marked
    const featured = filtered.find((element) => element.featured) ?? filtered[0];

    // Result: featured will be either:
    // - The first article with featured: true
    // - The first article in the filtered array (if no featured article exists)

    // Step 2: Extract all non-featured articles
    // Filter out the featured article from the list to avoid showing it twice
    const rest = filtered.filter((element) => element.id !== featured?.id);




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

                            {/* Featured Article Card */}
                            {featured ? <BlogFeaturedArticle article={featured} /> : null}

                            {/* Article Cards Grid */}
                            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                                {rest.map((element) => (
                                    <BlogArticleCard key={element.id} article={element} />
                                ))}
                            </div>
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
