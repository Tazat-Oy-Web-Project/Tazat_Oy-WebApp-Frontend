import AdminNavbar from "../../components/AdminNavbar";
import AdminSidebar from "../../components/AdminSidebar";
import AdminFooter from "../../components/AdminFooter";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import jobsList from "../data/jobsList";
import { FaPlus, FaSearch, FaTrash, FaMapMarkerAlt } from "react-icons/fa";
import { MdWork } from "react-icons/md";

export default function AdminJobs() {

    const navigate = useNavigate();

    const [fetchedJobList, setFetchedJobList] = useState([])

    useEffect(() => {
        console.log("jobsList from DB: ", jobsList);
        setFetchedJobList(jobsList)
    }, [jobsList]);


    const handleSearch = (event: any) => {
        const searchValue = event.target.value.toLowerCase();

        if (!searchValue) {
            setFetchedJobList(jobsList);
            return;
        }

        const filtered = jobsList.filter((job: any) => 
            job.jobTitle?.toLowerCase().includes(searchValue) || 
            job.jobLocation?.toLowerCase().includes(searchValue) ||
            job.jobDescription?.some((desc: any) => desc?.toLowerCase().includes(searchValue))
        );
        
        setFetchedJobList(filtered);
    }


    const handleDeleteJob = (jobData: any) => {
        if (!jobData || !jobData.jobTitle) {
            alert('Invalid job data');
            return;
        }

        if (!window.confirm(`Delete "${jobData.jobTitle}"?`)) {
            return;
        }

        const jobIndex = jobsList.findIndex((job: any) => 
            job.jobTitle === jobData.jobTitle && job.jobLocation === jobData.jobLocation
        );

        if (jobIndex !== -1) {
            jobsList.splice(jobIndex, 1);
            setFetchedJobList(jobsList.filter(() => true));
            alert('Job deleted successfully');
        }
    }

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
                        {fetchedJobList.length === 0 ? (
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
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {fetchedJobList.map((element: any, index: number) => (
                                    <div key={index} className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                        
                                        {/* Job Image Header */}
                                        {element.jobPostImageURL && (
                                            <div className="h-48 overflow-hidden bg-linear-to-br from-blue-50 to-slate-100">
                                                <img 
                                                    src={element.jobPostImageURL} 
                                                    alt={element.jobTitle}
                                                    className="w-full h-full object-cover" 
                                                />
                                            </div>
                                        )}

                                        {/* Job Content */}
                                        <div className="p-6">
                                            {/* Title and Status */}
                                            <div className="flex justify-between items-start mb-4">
                                                <h3 className="text-2xl font-bold text-slate-900">{element.jobTitle}</h3>
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                                    element.jobStatus === 'open' 
                                                        ? 'bg-green-100 text-green-700' 
                                                        : 'bg-red-100 text-red-700'
                                                }`}>
                                                    {element.jobStatus?.toUpperCase()}
                                                </span>
                                            </div>

                                            {/* Location */}
                                            <div className="flex items-center text-slate-600 mb-4">
                                                <FaMapMarkerAlt className="mr-2" />
                                                <span className="font-medium">{element.jobLocation}</span>
                                            </div>

                                            {/* Job Types */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {element.jobType.map((type: any, idx: number) => (
                                                    <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                                                        {type}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Job Description */}
                                            <div className="mb-4">
                                                <h4 className="font-semibold text-slate-700 mb-2">Description:</h4>
                                                <ul className="space-y-1">
                                                    {element.jobDescription.map((desc: any, idx: number) => (
                                                        <li key={idx} className="flex items-start text-slate-600">
                                                            <span className="mr-2 text-blue-500">•</span>
                                                            <span className="text-sm">{desc}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Actions */}
                                            <div className="pt-4 border-t border-slate-200">
                                                <button
                                                    className="w-full px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2"
                                                    onClick={() => handleDeleteJob(element)}
                                                >
                                                    <FaTrash /> Delete Job
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
