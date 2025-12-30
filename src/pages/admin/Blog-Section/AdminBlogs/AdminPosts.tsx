import AdminNavbar from "../../components/AdminNavbar";
import AdminSidebar from "../../components/AdminSidebar";
import AdminFooter from "../../components/AdminFooter";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaPlus, FaSearch, FaTrash, FaTag, FaChevronLeft, FaChevronRight, FaEye } from "react-icons/fa";
import { MdArticle } from "react-icons/md";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function AdminPosts() {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true)                // Loading state for fetch operation   

    const [fetchedPostList, setFetchedPostList] = useState([])  // Posts fetched from backend stored here
    const [allPosts, setAllPosts] = useState([])                // All posts for search reset here -> example: when search bar is cleared we can go back to this full list

    // ===============  Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6; // 2 rows × 3 columns

    // ===============  Filter State
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');


    // ===============  1) When Page Loads, fetch all blog posts from backend

    useEffect(() => {

        try {

            setLoading(true); 

            fetch(`${API_BASE_URL}/blogPosts`)

                .then(response => response.json())

                .then(response => {

                    console.log("Fetched Posts: ", response);

                    setAllPosts(response);
                    setFetchedPostList(response);
                });        

                
            
        } 
        
        catch (error) {
            console.error('Error fetching posts:', error);
            alert('Failed to load posts');

        } 
        
        finally {
            setLoading(false);
        }

    }, []);




    // ===============  2) Search and Filter Functionality

    const applyFilters = () => {
        let filtered = [...allPosts];

        // Apply search filter
        if (searchQuery) {
            const searchLower = searchQuery.toLowerCase();
            filtered = filtered.filter((post: any) => 
                post.title?.toLowerCase().includes(searchLower) || 
                post.categoryId?.toLowerCase().includes(searchLower) ||
                post.content?.toLowerCase().includes(searchLower)
            );
        }

        // Apply category filter
        if (selectedCategory !== 'all') {
            filtered = filtered.filter((post: any) => 
                post.categoryId?.toLowerCase() === selectedCategory.toLowerCase()
            );
        }

        setFetchedPostList(filtered);
        setCurrentPage(1); // Reset to first page when filtering
    };

    // Apply filters whenever search or filter values change
    useEffect(() => {
        applyFilters();
    }, [searchQuery, selectedCategory, allPosts]);

    const handleSearch = (event: any) => {
        setSearchQuery(event.target.value);
    }

    const handleCategoryFilter = (event: any) => {
        setSelectedCategory(event.target.value);
    }

    // Get unique categories from all posts
    const uniqueCategories = Array.from(new Set(allPosts.map((post: any) => post.categoryId).filter(Boolean)));


    // ===============  3) Delete Post Functionality

    const handleDeletePost = async (postId: any) => {

        console.log("Delete Post Data: ", postId);

        if (!postId) {
            alert('Invalid post data');
            return;
        }

        if (!window.confirm(`Delete post with ID "${postId}"?`)) {
            return;
        }

        try {
            fetch(`${API_BASE_URL}/blogPosts/${postId}`, {
                method: 'DELETE'
            })

                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(response => {
                    console.log('Post deleted successfully:', response);
                })
                .catch(error => {
                    console.error('Error deleting post:', error);
                })
                .finally(() => {

                    // For now, just remove from local state                    
                    const updatedPosts = allPosts.filter((element: any) => element.id !== postId);
                    setAllPosts(updatedPosts);
                    setFetchedPostList(updatedPosts);
                    alert('Post deleted successfully');
                })
            
           
        } 
        
        catch (error) {
            console.error('Error deleting post:', error);
            alert('Failed to delete post');
        }
    }


    // ===============  4) Pagination Logic

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = fetchedPostList.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(fetchedPostList.length / postsPerPage);

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




    

    return (
        <div className="flex min-h-screen bg-slate-50">
            <AdminSidebar />
            
            <div className="flex flex-1 flex-col">
                <AdminNavbar />
                
                <main className="flex-1 px-4 py-8 lg:px-8 max-w-7xl mx-auto w-full">
                    {/* =============   HEADER SECTION ============= */}
                    <div className="mb-8 flex items-center justify-between">
                        <div>
                            <h1 className="text-4xl font-extrabold text-slate-900">Blog Posts</h1>
                            <p className="mt-2 text-lg text-slate-600">Manage public blog posts and cleaning tips</p>
                        </div>
                        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl px-6 py-3">
                            <p className="text-sm font-semibold text-blue-600">Total Posts</p>
                            <p className="text-3xl font-extrabold text-blue-700">{allPosts.length}</p>
                        </div>
                    </div>

                    {/* =============   SEARCH & FILTER BAR ============= */}
                    <div className="mb-8 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                        <div className="flex flex-col gap-4">
                            {/* Search Bar */}
                            <div className="flex-1 relative">
                                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                                <input 
                                    type="text"
                                    placeholder="Search for posts..."
                                    value={searchQuery}
                                    className="w-full pl-10 pr-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    onChange={handleSearch}
                                />
                            </div>

                            {/* Filters Row */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                {/* Category Filter */}
                                <div className="flex-1 relative">
                                    <FaTag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                                    <select
                                        value={selectedCategory}
                                        onChange={handleCategoryFilter}
                                        className="w-full pl-10 pr-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all appearance-none bg-white"
                                    >
                                        <option value="all">All Categories</option>
                                        {uniqueCategories.map((category: any) => (
                                            <option key={category} value={category}>
                                                {category.replace('-', ' ').toUpperCase()}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Create Button */}
                                <button
                                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 whitespace-nowrap flex items-center justify-center gap-2"
                                    onClick={() => navigate('/staff/admin/posts/new')}
                                >
                                    <FaPlus /> Create Post
                                </button>
                            </div>

                            {/* Active Filters Display */}
                            {(selectedCategory !== 'all' || searchQuery) && (
                                <div className="flex flex-wrap gap-2 items-center pt-2 border-t border-slate-200">
                                    <span className="text-sm font-semibold text-slate-600">Active Filters:</span>
                                    {searchQuery && (
                                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                                            Search: "{searchQuery}"
                                        </span>
                                    )}
                                    {selectedCategory !== 'all' && (
                                        <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                                            Category: {selectedCategory.replace('-', ' ').toUpperCase()}
                                        </span>
                                    )}
                                    <button
                                        onClick={() => {
                                            setSearchQuery('');
                                            setSelectedCategory('all');
                                        }}
                                        className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium hover:bg-red-200 transition-colors"
                                    >
                                        Clear All
                                    </button>
                                    <span className="text-sm text-slate-500 ml-auto">
                                        Showing {fetchedPostList.length} of {allPosts.length} posts
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* ================================================================= Posts List */}
                    <div>
                        {loading ? (
                            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-12 text-center">
                                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
                                <p className="text-slate-500">Loading posts...</p>
                            </div>
                        ) : fetchedPostList.length === 0 ? (
                            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-12 text-center">
                                <MdArticle className="text-6xl text-slate-300 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-slate-700 mb-2">No blog posts found</h3>
                                <p className="text-slate-500 mb-6">Create your first blog post to get started</p>
                                <button
                                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 inline-flex items-center gap-2"
                                    onClick={() => navigate('/staff/admin/posts/new')}
                                >
                                    <FaPlus /> Create Post
                                </button>
                            </div>
                        ) : (
                            <>
                            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                                {currentPosts.map((element: any, index: number) => (
                                    <div key={element.id || index} className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
                                        
                                        {/* Post Image Header */}
                                        {element.postImageURL && (
                                            <div className="h-48 overflow-hidden bg-linear-to-br from-blue-50 to-slate-100">
                                                <img 
                                                    src={element.postImageURL} 
                                                    alt={element.title}
                                                    className="w-full h-full object-cover" 
                                                />
                                            </div>
                                        )}

                                        {/* Post Content */}
                                        <div className="p-6 flex flex-col flex-1">
                                            {/* Category Badge */}
                                            <div className="flex items-center gap-2 mb-3">
                                                <FaTag className="text-blue-600" />
                                                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium capitalize">
                                                    {element.categoryId?.replace('-', ' ')}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-2xl font-bold text-slate-900 mb-3 line-clamp-2">{element.title}</h3>

                                            {/* Content Preview */}
                                            <p className="text-slate-600 mb-4 line-clamp-3 flex-1">
                                                {element.content}
                                            </p>

                                            {/* Actions */}
                                            <div className="pt-4 border-t border-slate-200 flex flex-col gap-2 mt-auto">
                                                <Link
                                                    to={`/staff/admin/posts/details/${element.id}`}
                                                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg border-2 border-blue-500 bg-white px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition-all duration-200"
                                                >
                                                    <FaEye /> Read More
                                                </Link>
                                                <button
                                                    className="w-full px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2"
                                                    onClick={() => handleDeletePost(element.id)}
                                                >
                                                    <FaTrash /> Delete Post
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* =============   PAGINATION ============= */}
                            {totalPages > 1 && (
                                <div className="mt-10 flex items-center justify-center gap-4">
                                    <button
                                        onClick={handlePrevPage}
                                        disabled={currentPage === 1}
                                        className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-blue-500 bg-white text-blue-600 font-semibold hover:bg-blue-50 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
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
                                        className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-blue-500 bg-white text-blue-600 font-semibold hover:bg-blue-50 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                                    >
                                        Next
                                        <FaChevronRight />
                                    </button>
                                </div>
                            )}
                            </>
                        )}
                    </div>
                </main>

                <AdminFooter />
            </div>
        </div>
    );
}