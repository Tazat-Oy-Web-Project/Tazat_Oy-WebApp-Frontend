// ---- Blog Articles Data ---- //
// This file contains all blog articles that can be imported across components

export interface Article {
    id: number;
    tag: string;
    date: string;
    title: string;
    excerpt: string;
    image: string;
    featured?: boolean;
}

export const articles: Article[] = [
    {
        id: 1,
        tag: "Home Cleaning",
        date: "Oct 24, 2023",
        title: "5 Ways to Remove Red Wine Stains Instantly",
        excerpt:
            "Spilled wine on your favorite carpet? Don't panic. Here are quick, practical methods to lift stains before they set.",
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
];
