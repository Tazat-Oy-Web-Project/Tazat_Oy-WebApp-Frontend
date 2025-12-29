import AdminNavbar from "../../components/AdminNavbar";
import AdminSidebar from "../../components/AdminSidebar";
import AdminFooter from "../../components/AdminFooter";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaPlus, FaSearch, FaTrash, FaMapMarkerAlt, FaChevronLeft, FaChevronRight, FaEye } from "react-icons/fa";
import { MdWork } from "react-icons/md";

export default function AdminJobs() {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true)                // Loading state for fetch operation   

    const [fetchedJobList, setFetchedJobList] = useState([])    // Jobs fetched from backend stored here
    const [allJobs, setAllJobs] = useState([])                  // All jobs for search reset here -> example: when search bar is cleared we can go back to this full list

    // ===============  Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 12; // 2 rows × 6 columns on xl screens

    

    // ===============  1) When Page Loads, fetch all job postings from backend

    useEffect(() => {

        try {

            setLoading(true); 

            fetch('http://localhost:3000/jobPosts')

                .then(response => response.json())

                .then(response => {

                    console.log("Fetched Jobs: ", response);

                    setAllJobs(response);
                    setFetchedJobList(response);
                });        

                
            
        } 
        
        catch (error) {
            console.error('Error fetching jobs:', error);
            alert('Failed to load jobs');

        } 
        
        finally {
            setLoading(false);
        }

    }, []);




    // ===============  2) Search Functionality

    const handleSearch = (event: any) => {
        const searchValue = event.target.value.toLowerCase();

        if (!searchValue) {
            setFetchedJobList(allJobs);
            return;
        }

        const filtered = allJobs.filter((job: any) => 
            job.jobTitle?.toLowerCase().includes(searchValue) || 
            job.jobLocation?.toLowerCase().includes(searchValue) ||
            job.jobDescription?.some((desc: any) => desc?.toLowerCase().includes(searchValue))
        );
        
        setFetchedJobList(filtered);
    }


    // ===============  3) Delete Job Functionality

    const handleDeleteJob = async (jobId: any) => {
        if (!jobId) {
            alert('Invalid job data');
            return;
        }

        if (!window.confirm(`Delete job with ID "${jobId}"?`)) {
            return;
        }

        try {
            
            fetch(`http://localhost:3000/jobPosts/${jobId}`, {
                method: 'DELETE'
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to delete job');
                    }
                    return response.json();
                })
                .then(() => {
                    const updatedJobs = allJobs.filter((job: any) => job.id !== jobId);
                    setAllJobs(updatedJobs);
                    setFetchedJobList(updatedJobs);
                    alert('Job deleted successfully');
                })
                .catch(error => {
                    console.error('Error deleting job:', error);
                    alert('Failed to delete job');
                });

        } catch (error) {
            console.error('Error deleting job:', error);
            alert('Failed to delete job');
        }
    }


    // ===============  4) Pagination Logic

    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = fetchedJobList.slice(indexOfFirstJob, indexOfLastJob);
    const totalPages = Math.ceil(fetchedJobList.length / jobsPerPage);

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
                    {/* Header Section */}
                    <div className="mb-8">
                        <h1 className="text-4xl font-extrabold text-slate-900">Job Postings</h1>
                        <p className="mt-2 text-lg text-slate-600">Manage career opportunities and job listings</p>
                    </div>

                    {/* =============   SEARCH BAR ============= */}
                    <div className="mb-8 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1 relative">
                                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="Search job postings..."
                                    className="w-full pl-10 pr-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    onChange={handleSearch}
                                />
                            </div>
                            <button
                                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 whitespace-nowrap flex items-center justify-center gap-2"
                                onClick={() => navigate('/staff/admin/jobs/new')}
                            >
                                <FaPlus /> Create New Job
                            </button>
                        </div>
                    </div>

                    {/* ================================================================= Job Postings List */}
                    <div>
                        {loading ? (
                            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-12 text-center">
                                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
                                <p className="text-slate-500">Loading jobs...</p>
                            </div>
                        ) : fetchedJobList.length === 0 ? (
                            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-12 text-center">
                                <MdWork className="text-6xl text-slate-300 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-slate-700 mb-2">No job postings found</h3>
                                <p className="text-slate-500 mb-6">Create your first job posting to get started</p>
                                <button
                                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 inline-flex items-center gap-2"
                                    onClick={() => navigate('/staff/admin/jobs/new')}
                                >
                                    <FaPlus /> Create Job Posting
                                </button>
                            </div>
                        ) : (
                            <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-6">
                                {currentJobs.map((element: any, index: number) => (
                                    <div key={element.id || index} className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
                                        
                                        {/* Job Image Header */}
                                        {element.jobPostImageURL && (
                                            <div className="relative h-40 overflow-hidden bg-linear-to-br from-blue-50 to-slate-100">
                                                <img 
                                                    src={element.jobPostImageURL} 
                                                    alt={element.jobTitle}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                                                />
                                                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent"></div>
                                                
                                                {/* Status Badge */}
                                                <div className="absolute top-2 right-2">
                                                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                                                        element.jobStatus === 'open' 
                                                            ? 'bg-green-100 text-green-700 border border-green-200' 
                                                            : 'bg-red-100 text-red-700 border border-red-200'
                                                    }`}>
                                                        {element.jobStatus?.toUpperCase()}
                                                    </span>
                                                </div>
                                            </div>
                                        )}

                                        {/* Job Content */}
                                        <div className="p-4 flex-1 flex flex-col">
                                            {/* Title */}
                                            <h3 className="text-lg font-extrabold text-slate-900 mb-2 flex items-start gap-2">
                                                <MdWork className="text-blue-600 shrink-0 mt-1" />
                                                <span className="line-clamp-2">{element.jobTitle}</span>
                                            </h3>

                                            {/* Location */}
                                            <div className="flex items-center gap-1 text-xs text-slate-600 mb-3">
                                                <FaMapMarkerAlt className="text-blue-600" />
                                                <span className="font-medium truncate">{element.jobLocation}</span>
                                            </div>

                                            {/* Job Types */}
                                            <div className="flex flex-wrap gap-1 mb-3">
                                                {element.jobType?.slice(0, 2).map((type: any, idx: number) => (
                                                    <span key={idx} className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                                                        {type}
                                                    </span>
                                                ))}
                                                {element.jobType?.length > 2 && (
                                                    <span className="px-2 py-0.5 text-xs text-slate-500">+{element.jobType.length - 2}</span>
                                                )}
                                            </div>

                                            {/* Job Description Preview */}
                                            <div className="mb-4 flex-1">
                                                <ul className="space-y-1">
                                                    {element.jobDescription?.slice(0, 2).map((desc: any, idx: number) => (
                                                        <li key={idx} className="flex items-start text-xs text-slate-600">
                                                            <span className="mr-1.5 text-blue-600 mt-0.5">•</span>
                                                            <span className="line-clamp-1">{desc}</span>
                                                        </li>
                                                    ))}
                                                    {element.jobDescription?.length > 2 && (
                                                        <li className="text-xs text-slate-500 italic pl-3">
                                                            + {element.jobDescription.length - 2} more
                                                        </li>
                                                    )}
                                                </ul>
                                            </div>

                                            {/* Actions */}
                                            <div className="flex flex-col gap-2 mt-auto">
                                                <Link
                                                    to={`/staff/admin/jobs/details/${element.id}`}
                                                    className="w-full inline-flex items-center justify-center gap-1 rounded-lg border-2 border-blue-500 bg-white px-3 py-2 text-xs font-bold text-blue-600 hover:bg-blue-50 transition-all duration-300"
                                                >
                                                    <FaEye className="text-xs" />
                                                    View Details
                                                </Link>
                                                <button
                                                    className="w-full px-3 py-2 bg-red-500 hover:bg-red-600 text-white text-xs font-bold rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center gap-1"
                                                    onClick={() => handleDeleteJob(element.id)}
                                                >
                                                    <FaTrash className="text-xs" /> Delete
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
