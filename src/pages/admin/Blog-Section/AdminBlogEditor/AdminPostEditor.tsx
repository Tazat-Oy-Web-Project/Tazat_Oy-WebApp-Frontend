import AdminNavbar from "../../components/AdminNavbar";
import AdminSidebar from "../../components/AdminSidebar";
import AdminFooter from "../../components/AdminFooter";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import featuredImagesDb from "./data/imageDb";
import { FaNewspaper, FaTag, FaImage, FaArrowLeft, FaCheck } from "react-icons/fa";
import { MdDescription } from "react-icons/md";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function AdminPostEditor() {

    const navigate = useNavigate();
    const { id } = useParams();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [loading, setLoading] = useState(false);

    const [postForm, setPostForm] = useState({
        categoryId : "",
        title : "",
        content : "",
        featuredImageId : "blog-img-1",
        postImageURL : "",
    })

    console.log("Post Form is: ", postForm)

    // Fetch existing blog post if editing
    useEffect(() => {
        if (!id) return; // Creating new post, no need to fetch

        setLoading(true);
        
        fetch(`${API_BASE_URL}/blogPosts/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Blog post not found');
                }
                return response.json();
            })
            .then(data => {
                setPostForm({
                    categoryId: data.categoryId || "",
                    title: data.title || "",
                    content: data.content || "",
                    featuredImageId: data.featuredImageId || "blog-img-1",
                    postImageURL: data.postImageURL || "",
                });
            })
            .catch(error => {
                console.error('Error fetching blog post:', error);
                alert('Failed to load blog post. Please try again.');
                navigate('/staff/admin/posts');
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    const handleSubmit = async () => {
        
        // Simple validation
        if (!postForm.categoryId) {
            alert('Please select a category');
            return;
        }
        if (!postForm.title) {
            alert('Please enter a title');
            return;
        }
        if (!postForm.content) {
            alert('Please enter content');
            return;
        }

        setIsSubmitting(true);

        try {
            const url = id ? `${API_BASE_URL}/blogPosts/${id}` : `${API_BASE_URL}/blogPosts`;
            const method = id ? 'PUT' : 'POST';

            fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    categoryId: postForm.categoryId,
                    title: postForm.title,
                    content: postForm.content,
                    featuredImageId: postForm.featuredImageId,
                    postImageURL: postForm.postImageURL,
                })
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(id ? 'Failed to update post' : 'Failed to create post');
                    }
                    return response.json();
                })
                .then(response => {
                    console.log(id ? 'Post updated:' : 'Post created:', response);
                    alert(id ? 'Post updated successfully!' : 'Post published successfully!');
                    navigate('/staff/admin/posts');
                })
                .catch(error => {
                    console.error(id ? 'Error updating post:' : 'Error creating post:', error);
                    alert(id ? 'Failed to update post. Please try again.' : 'Failed to publish post. Please try again.');
                })
                .finally(() => {
                    setIsSubmitting(false);
                });
        }
        catch (error) {
            console.error('Error during submission:', error);
            setIsSubmitting(false);
        }
    }

    return (
        <div className="flex min-h-screen bg-slate-50">
            <AdminSidebar />
            
            <div className="flex flex-1 flex-col">
                <AdminNavbar />

                {/* =============   BACK BUTTON ============= */}
                <div className="px-4 py-4 lg:px-8">
                    <Link to={"/staff/admin/posts/"} className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors">
                        <FaArrowLeft className="mr-2" /> Back to Posts
                    </Link>
                </div>
                
                <main className="flex-1 px-4 py-4 lg:px-8 pb-8 max-w-5xl mx-auto w-full">
                    <div className="mb-8">
                        <h1 className="text-4xl font-extrabold text-slate-900">{id ? 'Edit Blog Post' : 'Create Blog Post'}</h1>
                        <p className="mt-2 text-lg text-slate-600">{id ? 'Update your blog post' : 'Create a new blog post'}</p>
                    </div>

                    {/* ========================== FORM AREA  ==========================*/}
                    {loading ? (
                        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 text-center">
                            <p className="text-slate-600">Loading blog post...</p>
                        </div>
                    ) : (
                    <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">

                        {/* =============   CATEGORY SELECT ============= */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                                <FaTag className="mr-2" /> Category
                            </h2>
                            <select
                                value={postForm.categoryId}
                                onChange={(e)=> setPostForm({...postForm, categoryId: e.target.value})}
                                className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                            >
                                <option value="">Select a Category</option>                                
                                <option value="cleaning-tips">Cleaning Tips</option>
                                <option value="company-news">Company News</option>
                                <option value="sustainability">Sustainability</option>
                                <option value="home-cleaning">Home Cleaning</option>
                                <option value="office-cleaning">Office Cleaning</option>
                            </select>
                        </div>

                        {/* =============   TITLE WRITE ============= */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                                <FaNewspaper className="mr-2" /> Title
                            </h2>
                            <input 
                                type="text"
                                placeholder="Write title..."
                                className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                value={postForm.title}
                                onChange={(e)=> setPostForm({...postForm, title: e.target.value})}                            
                            />
                        </div>

                        {/* =============   CONTENT WRITE ============= */}
                        <div className="mb-8 pb-8 border-b border-slate-200">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                                <MdDescription className="mr-2" /> Content
                            </h2>
                            <textarea 
                                placeholder="Write content..."
                                className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all min-h-[200px]"
                                value={postForm.content}
                                onChange={(e)=> setPostForm({...postForm, content: e.target.value})}                            
                            />
                        </div>

                        {/* =============   FEATURED IMAGE ============= */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                                <FaImage className="mr-2" /> Featured Image
                            </h2>
                            <p className="text-slate-600 mb-4">Select an image for your blog post</p>
                            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
                                {featuredImagesDb.map((element: any) => (
                                    <div key={element.id} className="relative group">
                                        <img
                                            src={element.url}
                                            alt={`Image ${element.id}`}
                                            className={`w-full h-24 object-cover rounded-lg border-4 cursor-pointer transition-all ${
                                                postForm.featuredImageId === element.id 
                                                    ? 'border-green-500 ring-2 ring-green-300 scale-105' 
                                                    : 'border-slate-300 hover:border-blue-400'
                                            }`}
                                            onClick={() => setPostForm({...postForm, featuredImageId: element.id, postImageURL: element.url})}
                                        />
                                        {postForm.featuredImageId === element.id && (
                                            <div className="absolute top-1 right-1 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                                                <FaCheck />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* =================================================================   SUBMIT BUTTON */}
                        <div className="pt-6 border-t border-slate-200">
                            <button 
                                className={`w-full py-4 text-white text-lg font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center ${
                                    isSubmitting 
                                        ? 'bg-gray-400 cursor-not-allowed' 
                                        : 'bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'
                                }`}
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                            >
                                <FaCheck className="mr-2" /> {isSubmitting ? (id ? 'Updating...' : 'Publishing...') : (id ? 'Update Post' : 'Publish Post')}
                            </button>
                        </div>
                    </div>
                    )}
                </main>

                <AdminFooter />
            </div>
        </div>
    );
}
