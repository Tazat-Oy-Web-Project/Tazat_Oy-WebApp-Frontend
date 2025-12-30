import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FaTag, FaArrowLeft, FaTrash, FaCalendar } from "react-icons/fa";
import { MdArticle } from "react-icons/md";
import AdminNavbar from "../../components/AdminNavbar";
import AdminSidebar from "../../components/AdminSidebar";
import AdminFooter from "../../components/AdminFooter";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


function AdminBlogDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState<any>(null);

    // ================================================================= FETCH POST FROM BACKEND
    useEffect(() => {
        if (!id) return;

        setLoading(true);
        
        fetch(`${API_BASE_URL}/blogPosts/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Post not found');
                }
                return response.json();
            })
            .then(data => {
                setPost(data);
            })
            .catch(error => {
                console.error('Error fetching post:', error);
                setPost(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    // ================================================================= DELETE POST FUNCTIONALITY
    const handleDeletePost = async () => {
        if (!post?.id) {
            alert('Invalid post data');
            return;
        }

        if (!window.confirm(`Are you sure you want to delete "${post.title}"?`)) {
            return;
        }

        try {
            const response = await fetch(`${API_BASE_URL}/blogPosts/${post.id}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error('Failed to delete post');
            }

            alert('Post deleted successfully');
            navigate('/staff/admin/posts');
        } catch (error) {
            console.error('Error deleting post:', error);
            alert('Failed to delete post');
        }
    };

    // ================================================================= ALWAYS START AT TOP
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, [id]);

    return (
        <div className="flex min-h-screen bg-slate-50">
            <AdminSidebar />
            
            <div className="flex flex-1 flex-col">
                <AdminNavbar />

                <main className="flex-1 px-4 py-8 lg:px-8 max-w-7xl mx-auto w-full">
                    {/* =================================================================   TOP BAR */}
                    <div className="mb-6">
                        <Link
                            to="/staff/admin/posts"
                            className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50 border border-blue-200 transition-all duration-200"
                        >
                            <FaArrowLeft className="h-4 w-4" />
                            Back to Blog Posts
                        </Link>
                    </div>

                    {/* =================================================================   POST CONTENT */}
                    {loading ? (
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-12 text-center">
                            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
                            <p className="text-slate-500">Loading post details...</p>
                        </div>
                    ) : post ? (
                        <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
                            {/* Post Image Header */}
                            {post.postImageURL && (
                                <div className="relative h-96 overflow-hidden bg-linear-to-br from-blue-50 to-slate-100">
                                    <img
                                        src={post.postImageURL}
                                        alt={post.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent"></div>
                                    
                                    {/* Category Badge */}
                                    <div className="absolute top-4 right-4">
                                        <span className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold border border-blue-200">
                                            <FaTag />
                                            {post.categoryId?.replace('-', ' ').toUpperCase()}
                                        </span>
                                    </div>
                                </div>
                            )}

                            {/* Post Details Content */}
                            <div className="p-8">
                                {/* Post Title */}
                                <h1 className="text-4xl font-extrabold text-slate-900 mb-6">
                                    {post.title}
                                </h1>

                                {/* Post Meta Info */}
                                <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-slate-200">
                                    <div className="flex items-center gap-2 text-slate-700">
                                        <FaTag className="text-blue-600" />
                                        <span className="font-medium capitalize">{post.categoryId?.replace('-', ' ')}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-700">
                                        <MdArticle className="text-blue-600" />
                                        <span className="font-medium">ID: {post.id}</span>
                                    </div>
                                    {post.createdAt && (
                                        <div className="flex items-center gap-2 text-slate-700">
                                            <FaCalendar className="text-blue-600" />
                                            <span className="font-medium">{new Date(post.createdAt).toLocaleDateString()}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Post Content */}
                                <div className="mb-8">
                                    <h2 className="text-2xl font-extrabold text-slate-900 mb-4 flex items-center gap-2">
                                        <MdArticle className="text-blue-600" />
                                        Article Content
                                    </h2>
                                    
                                    <div className="prose prose-lg max-w-none">
                                        <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">
                                            {post.content}
                                        </p>
                                    </div>
                                </div>

                                {/* Additional Content Sections */}
                                {post.sections && post.sections.length > 0 && (
                                    <div className="mb-8">
                                        <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
                                            Additional Sections
                                        </h2>
                                        {post.sections.map((section: any, idx: number) => (
                                            <div key={idx} className="mb-6">
                                                <h3 className="text-xl font-bold text-slate-800 mb-2">
                                                    {section.title}
                                                </h3>
                                                <p className="text-slate-700 leading-relaxed">
                                                    {section.content}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* =============   DELETE BUTTON ============= */}
                                <div className="pt-6 border-t border-slate-200">
                                    <button
                                        onClick={handleDeletePost}
                                        className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2"
                                    >
                                        <FaTrash /> Delete This Post
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                            <h1 className="text-3xl font-bold text-slate-900 mb-4">
                                Post Not Found
                            </h1>
                            <p className="text-slate-600 mb-6">
                                The blog post you're looking for doesn't exist or has been removed.
                            </p>
                            <Link
                                to="/staff/admin/posts"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all"
                            >
                                <FaArrowLeft />
                                Back to All Posts
                            </Link>
                        </div>
                    )}
                </main>

                <AdminFooter />
            </div>
        </div>
    );
}

export default AdminBlogDetails;
