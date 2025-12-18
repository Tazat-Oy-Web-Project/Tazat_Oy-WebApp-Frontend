import { useMemo, useState } from "react";
import NavbarComponent from "../components/Navbar";
import BlogHero from "./components/BlogHero";
import BlogFeaturedArticle from "./components/BlogFeaturedArticle";
import BlogArticleCard from "./components/BlogArticleCard";
import BlogNewsletter from "./components/BlogNewsletter";
import BlogCategories from "./components/BlogCategories";
import BlogPopular from "./components/BlogPopular";
import BlogCTA from "./components/BlogCTA";


function Blog(){

    // ---- Search Query State Management ---- //
    const [query, setQuery] = useState("");


    // ----------------- Articles Data ----------------- //
    const articles = useMemo(
        () => [
        {
            id: 1,
            tag: "Home Cleaning",
            date: "Oct 24, 2023",
            title: "5 Ways to Remove Red Wine Stains Instantly",
            excerpt:
            "Spilled wine on your favorite carpet? Don’t panic. Here are quick, practical methods to lift stains before they set.",
            image:
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=70",
            featured: true,
        },
        {
            id: 2,
            tag: "Office Tips",
            date: "Oct 20, 2023",
            title: "Why Deep Cleaning Boosts Productivity",
            excerpt:
            "A clean office supports focus and well-being. Discover how a tidy space impacts team performance and comfort.",
            image:
            "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=70",
        },
        {
            id: 3,
            tag: "Eco Cleaning",
            date: "Oct 15, 2023",
            title: "The Best Eco-Friendly Products of 2023",
            excerpt:
            "From safer sprays to smart refills, these options keep spaces fresh while reducing environmental impact.",
            image:
            "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=70",
        },
        {
            id: 4,
            tag: "Organization",
            date: "Oct 10, 2023",
            title: "A Simple Weekly Reset Routine",
            excerpt:
            "A 30-minute routine that keeps homes and offices consistently clean without feeling overwhelming.",
            image:
            "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=70",
        },
        ],
        []
    );


    // ----------------- Filter Articles Based on Search Query ----------------- //
    const filtered = useMemo(() => {
      
      const searchQuery = query.trim().toLowerCase();

      // If search is empty, show all articles
      if (!searchQuery) {
        return articles;
      }

      // Filter articles that match the search query
      const results = articles.filter((element) => {
        const searchableContent = [
          element.title,
          element.excerpt,
          element.tag
        ].join(' | ').toLowerCase();

        //console.log('Searchable Content:', searchableContent);

        return searchableContent.includes(searchQuery);
      });

      //Search Query
      //console.log('Search query:', searchQuery);

      //Search results with matched articles
      //console.log('Filtered results:', results);

      return results;
    }, [articles, query]);

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


    // ----------------- Popular Posts Data ----------------- //
    // Here the backend provides popular articles based on views or engagement
    const popular = [
        { title: "The Ultimate Spring Cleaning Checklist", minutes: 5 },
        { title: "5 DIY Cleaners You Can Make at Home", minutes: 4 },
        { title: "Are Robot Vacuums Worth It?", minutes: 7 },
    ];


    // ----------------- Separate Featured and Regular Articles ----------------- //
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
                            <BlogCategories categories={categories} />
                            <BlogPopular popular={popular} />
                            <BlogCTA />
                        </aside>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Blog;
