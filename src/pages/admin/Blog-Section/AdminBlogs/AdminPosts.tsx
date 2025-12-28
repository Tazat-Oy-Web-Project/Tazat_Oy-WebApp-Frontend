import AdminNavbar from "../../components/AdminNavbar";
import AdminSidebar from "../../components/AdminSidebar";
import AdminFooter from "../../components/AdminFooter";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import postsList from "../data/postsList";
import { FaPlus, FaSearch, FaTrash, FaTag } from "react-icons/fa";
import { MdArticle } from "react-icons/md";

export default function AdminPosts() {
    const navigate = useNavigate();

    const [fetchedPostList, setFetchedPostList] = useState([])

    useEffect(() => {
        console.log("postsList from DB: ", postsList);
        setFetchedPostList(postsList)
    }, [postsList]);

    const handleSearch = (event: any) => {
        const searchValue = event.target.value.toLowerCase();

        if (!searchValue) {
            setFetchedPostList(postsList);
            return;
        }

        const filtered = postsList.filter((post: any) => 
            post.title?.toLowerCase().includes(searchValue) || 
            post.category?.toLowerCase().includes(searchValue) ||
            post.content?.toLowerCase().includes(searchValue)
        );
        
        setFetchedPostList(filtered);
    }

    const handleDeletePost = (postData: any) => {
        if (!postData || !postData.title) {
            alert('Invalid post data');
            return;
        }

        if (!window.confirm(`Delete "${postData.title}"?`)) {
            return;
        }

        const postIndex = postsList.findIndex((post: any) => 
            post.title === postData.title && post.category === postData.category
        );

        if (postIndex !== -1) {
            postsList.splice(postIndex, 1);
            setFetchedPostList(postsList.filter(() => true));
            alert('Post deleted successfully');
        }
    }

    return (
        <div className="flex min-h-screen bg-slate-50">
            <AdminSidebar />
            
            <div className="flex flex-1 flex-col">
                <AdminNavbar />
                
                <main className="flex-1 px-4 py-8 lg:px-8 max-w-7xl mx-auto w-full">
                    {/* =============   HEADER SECTION ============= */}
                    <div className="mb-8">
                        <h1 className="text-4xl font-extrabold text-slate-900">Blog Posts</h1>
                        <p className="mt-2 text-lg text-slate-600">Manage public blog posts and cleaning tips</p>
                    </div>

                    {/* =============   SEARCH BAR ============= */}
                    <div className="mb-8 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1 relative">
                                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                                <input 
                                    type="text"
                                    placeholder="Search for posts..."
                                    className="w-full pl-10 pr-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    onChange={handleSearch}
                                />
                            </div>
                            <button
                                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 whitespace-nowrap flex items-center justify-center gap-2"
                                onClick={() => navigate('/staff/admin/posts/new')}
                            >
                                <FaPlus /> Create Post
                            </button>
                        </div>
                    </div>

                    {/* ================================================================= Posts List */}
                    <div>
                        {fetchedPostList.length === 0 ? (
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
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {fetchedPostList.map((element: any, index: number) => (
                                    <div key={index} className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                        
                                        {/* Post Image Header */}
                                        {element.postImageURL && (
                                            <div className="h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-slate-100">
                                                <img 
                                                    src={element.postImageURL} 
                                                    alt={element.title}
                                                    className="w-full h-full object-cover" 
                                                />
                                            </div>
                                        )}

                                        {/* Post Content */}
                                        <div className="p-6">
                                            {/* Category Badge */}
                                            <div className="flex items-center gap-2 mb-3">
                                                <FaTag className="text-blue-600" />
                                                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium capitalize">
                                                    {element.category?.replace('-', ' ')}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-2xl font-bold text-slate-900 mb-3">{element.title}</h3>

                                            {/* Content Preview */}
                                            <p className="text-slate-600 mb-4 line-clamp-3">
                                                {element.content}
                                            </p>

                                            {/* Actions */}
                                            <div className="pt-4 border-t border-slate-200">
                                                <button
                                                    className="w-full px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2"
                                                    onClick={() => handleDeletePost(element)}
                                                >
                                                    <FaTrash /> Delete Post
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </main>

                <AdminFooter />
            </div>
        </div>
    );
}