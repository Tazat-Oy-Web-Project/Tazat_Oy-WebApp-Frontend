import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FaBriefcase, FaMapMarkerAlt, FaClock, FaArrowLeft, FaTrash } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import AdminNavbar from "../components/AdminNavbar";
import AdminSidebar from "../components/AdminSidebar";
import AdminFooter from "../components/AdminFooter";


function AdminJobDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [job, setJob] = useState<any>(null);

    // ================================================================= FETCH JOB FROM BACKEND
    useEffect(() => {
        if (!id) return;

        setLoading(true);
        
        fetch(`http://localhost:3000/jobPosts/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Job not found');
                }
                return response.json();
            })
            .then(data => {
                setJob(data);
            })
            .catch(error => {
                console.error('Error fetching job:', error);
                setJob(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    // ================================================================= DELETE JOB FUNCTIONALITY
    const handleDeleteJob = async () => {
        if (!job?.id) {
            alert('Invalid job data');
            return;
        }

        if (!window.confirm(`Are you sure you want to delete "${job.jobTitle}"?`)) {
            return;
        }

        try {
            const response = await fetch(`http://localhost:3000/jobPosts/${job.id}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error('Failed to delete job');
            }

            alert('Job deleted successfully');
            navigate('/staff/admin/jobs');
        } catch (error) {
            console.error('Error deleting job:', error);
            alert('Failed to delete job');
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
                            to="/staff/admin/jobs"
                            className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50 border border-blue-200 transition-all duration-200"
                        >
                            <FaArrowLeft className="h-4 w-4" />
                            Back to Job Listings
                        </Link>
                    </div>

                    {/* =================================================================   JOB CONTENT */}
                    {loading ? (
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-12 text-center">
                            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
                            <p className="text-slate-500">Loading job details...</p>
                        </div>
                    ) : job ? (
                        <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
                            {/* Job Image Header */}
                            {job.jobPostImageURL && (
                                <div className="relative h-64 overflow-hidden bg-linear-to-br from-blue-50 to-slate-100">
                                    <img
                                        src={job.jobPostImageURL}
                                        alt={job.jobTitle}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent"></div>
                                    
                                    {/* Status Badge */}
                                    <div className="absolute top-4 right-4">
                                        <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                                            job.jobStatus === 'open' 
                                                ? 'bg-green-100 text-green-700 border border-green-200' 
                                                : 'bg-red-100 text-red-700 border border-red-200'
                                        }`}>
                                            {job.jobStatus?.toUpperCase()}
                                        </span>
                                    </div>
                                </div>
                            )}

                            {/* Job Details Content */}
                            <div className="p-8">
                                {/* Job Title */}
                                <h1 className="text-4xl font-extrabold text-slate-900 mb-6">
                                    {job.jobTitle}
                                </h1>

                                {/* Job Meta Info */}
                                <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-slate-200">
                                    <div className="flex items-center gap-2 text-slate-700">
                                        <FaMapMarkerAlt className="text-blue-600" />
                                        <span className="font-medium">{job.jobLocation}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-700">
                                        <FaClock className="text-blue-600" />
                                        <span className="font-medium">{job.jobType?.join(', ')}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-700">
                                        <FaBriefcase className="text-blue-600" />
                                        <span className="font-medium">ID: {job.id}</span>
                                    </div>
                                </div>

                                {/* Job Description */}
                                <div className="mb-8">
                                    <h2 className="text-2xl font-extrabold text-slate-900 mb-4 flex items-center gap-2">
                                        <MdWork className="text-blue-600" />
                                        Job Description
                                    </h2>
                                    
                                    <ul className="space-y-3">
                                        {job.jobDescription?.map((desc: string, idx: number) => (
                                            <li key={idx} className="flex items-start text-slate-700">
                                                <span className="mr-3 text-blue-600 font-bold mt-1">•</span>
                                                <span className="text-base leading-relaxed">{desc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* =============   DELETE BUTTON ============= */}
                                <div className="pt-6 border-t border-slate-200">
                                    <button
                                        onClick={handleDeleteJob}
                                        className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2"
                                    >
                                        <FaTrash /> Delete This Job
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                            <h1 className="text-3xl font-bold text-slate-900 mb-4">
                                Job Not Found
                            </h1>
                            <p className="text-slate-600 mb-6">
                                The job you're looking for doesn't exist or has been removed.
                            </p>
                            <Link
                                to="/staff/admin/jobs"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all"
                            >
                                <FaArrowLeft />
                                Back to All Jobs
                            </Link>
                        </div>
                    )}
                </main>

                <AdminFooter />
            </div>
        </div>
    );
}

export default AdminJobDetails;
