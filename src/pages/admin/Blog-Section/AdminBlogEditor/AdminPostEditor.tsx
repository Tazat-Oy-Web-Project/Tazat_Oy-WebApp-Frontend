import AdminNavbar from "../../components/AdminNavbar";
import AdminSidebar from "../../components/AdminSidebar";
import AdminFooter from "../../components/AdminFooter";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import featuredImagesDb from "./data/imageDb";
import postsList from "../data/postsList";
import { FaNewspaper, FaTag, FaImage, FaArrowLeft, FaCheck } from "react-icons/fa";
import { MdDescription } from "react-icons/md";

export default function AdminPostEditor() {
    const navigate = useNavigate();

    const [postForm, setPostForm] = useState({
        category : "",
        title : "",
        content : "",
        postImage : "img1",
        postImageURL : "",
    })

    console.log("Post Form is: ", postForm)

    const handleSubmit = () => {
        // Simple validation
        if (!postForm.category) {
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

        postsList.push(postForm);
        alert('Post published successfully!');
        navigate('/staff/admin/posts');
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
                        <h1 className="text-4xl font-extrabold text-slate-900">Blog Post Editor</h1>
                        <p className="mt-2 text-lg text-slate-600">Create or edit blog posts</p>
                    </div>

                    {/* ========================== FORM AREA  ==========================*/}
                    <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">

                        {/* =============   CATEGORY SELECT ============= */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                                <FaTag className="mr-2" /> Category
                            </h2>
                            <select
                                value={postForm.category}
                                onChange={(e)=> setPostForm({...postForm, category: e.target.value})}
                                className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                            >
                                <option value="">Select a Category</option>
                                <option value="home-cleaning">Home Cleaning</option>
                                <option value="office-cleaning">Office Cleaning</option>
                                <option value="carpet-cleaning">Carpet Cleaning</option>
                                <option value="window-cleaning">Window Cleaning</option>
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
                                                postForm.postImage === element.id 
                                                    ? 'border-green-500 ring-2 ring-green-300 scale-105' 
                                                    : 'border-slate-300 hover:border-blue-400'
                                            }`}
                                            onClick={() => setPostForm({...postForm, postImage: element.id, postImageURL: element.url})}
                                        />
                                        {postForm.postImage === element.id && (
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
                                className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
                                onClick={handleSubmit}
                            >
                                <FaCheck className="mr-2" /> Publish Post
                            </button>
                        </div>
                    </div>
                </main>

                <AdminFooter />
            </div>
        </div>
    );
}
