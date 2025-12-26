import AdminNavbar from "../../components/AdminNavbar";
import AdminSidebar from "../../components/AdminSidebar";
import AdminFooter from "../../components/AdminFooter";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import featuredImagesDb from "./data/imagesDb";
import jobsList from "../data/jobsList";
import { FaBriefcase, FaMapMarkerAlt, FaClock, FaCircle, FaImage, FaArrowLeft, FaCheck } from "react-icons/fa";
import { MdDescription } from "react-icons/md";

export default function AdminJobEditor() {
    const navigate = useNavigate();

    const [jobApplicationForm, setJobApplicationForm] = useState<any>({
        jobTitle : "",
        jobDescription : [],
        jobPostImage: "img1",
        jobPostImageURL: "", //if URL exist
        jobLocation: "",
        jobType : [],
        jobStatus : ""
    })
    console.log("Application Form", jobApplicationForm)

    const [jobDescriptionCurrentValue, setJobDescriptionCurrentValue] = useState("");
    const [jobLocationCurrentValue, setJobLocationCurrentValue] = useState("");




    const handleJobDecriptionAdd = ()=> {
        if (!jobDescriptionCurrentValue.trim()) {
            alert('Please enter a description');
            return;
        }
        setJobApplicationForm({...jobApplicationForm, jobDescription: [...jobApplicationForm.jobDescription, jobDescriptionCurrentValue] })
        setJobDescriptionCurrentValue("")
    }


    const handleLocationDropDown = (e:any)=>{
        setJobLocationCurrentValue(e.target.value);
        setJobApplicationForm({...jobApplicationForm, jobLocation : e.target.value})
    }

    const handleSubmit = () => {
        // Simple validation
        if (!jobApplicationForm.jobTitle) {
            alert('Please enter a job title');
            return;
        }
        if (jobApplicationForm.jobDescription.length === 0) {
            alert('Please add at least one description point');
            return;
        }
        if (!jobApplicationForm.jobLocation) {
            alert('Please select a location');
            return;
        }
        if (jobApplicationForm.jobType.length === 0) {
            alert('Please select at least one job type');
            return;
        }
        if (!jobApplicationForm.jobStatus) {
            alert('Please select a job status');
            return;
        }

        jobsList.push(jobApplicationForm);
        alert('Job posted successfully!');
        navigate('/staff/admin/jobs');
    }

    return (
        <div className="flex min-h-screen bg-slate-50">
            <AdminSidebar />
            
            <div className="flex flex-1 flex-col">
                <AdminNavbar />


                {/* Back Button */}
                <div className="px-4 py-4 lg:px-8"> 
                    <Link to={"/staff/admin/jobs"} className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors">
                        <FaArrowLeft className="mr-2" /> Back to Jobs
                    </Link>
                </div>

                <main className="flex-1 px-4 py-4 lg:px-8 pb-8 max-w-5xl mx-auto w-full">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-4xl font-extrabold text-slate-900">Job Editor</h1>
                        <p className="mt-2 text-lg text-slate-600">Create or edit job postings</p>
                    </div>

                    {/* Main Form Card */}
                    <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">
                        
                        {/* =============   JOB TITLE ============= */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                                <FaBriefcase className="mr-2" /> Job Title
                            </h2>
                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-slate-700">Enter Job Title</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Cleaning Supervisor"
                                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    value={jobApplicationForm.jobTitle}
                                    onChange={(e) => setJobApplicationForm({...jobApplicationForm, jobTitle: e.target.value})}
                                />
                            </div>
                        </div>

                        {/* =============   JOB DESCRIPTION ============= */}
                        <div className="mb-8 pb-8 border-b border-slate-200">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                                <MdDescription className="mr-2" /> Job Description
                            </h2>
                            <div className="space-y-4">
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        placeholder="Write bullet points..."
                                        className="flex-1 px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                        value={jobDescriptionCurrentValue}
                                        onChange={(e) => setJobDescriptionCurrentValue(e.target.value)}
                                    />
                                    <button 
                                        onClick={handleJobDecriptionAdd}
                                        className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
                                    >
                                        Add Line
                                    </button>
                                </div>

                                {/* Display Current Job Description */}
                                {jobApplicationForm.jobDescription.length > 0 && (
                                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                                        <div className="flex justify-between items-center mb-3">
                                            <h3 className="font-semibold text-slate-700">Current Description:</h3>
                                            <button 
                                                onClick={() => setJobApplicationForm({...jobApplicationForm , jobDescription: []})}
                                                className="px-3 py-1 text-sm bg-red-500 hover:bg-red-600 text-white rounded-md transition-all"
                                            >
                                                Clear All
                                            </button>
                                        </div>
                                        <ul className="space-y-2">
                                            {jobApplicationForm.jobDescription.map((element: any, index: number) => (
                                                <li key={index} className="flex items-start text-slate-700">
                                                    <span className="mr-2 text-blue-600">•</span>
                                                    <span>{element}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* =============   FEATURED IMAGE ============= */}
                        <div className="mb-8 pb-8 border-b border-slate-200">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                                <FaImage className="mr-2" /> Featured Image
                            </h2>
                            <p className="text-slate-600 mb-4">Select an image for your job posting</p>
                            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
                                {featuredImagesDb.map((element) => (
                                    <div key={element.id} className="relative group">
                                        <img 
                                            src={element.url}
                                            alt={`Image ${element.id}`}
                                            className={`w-full h-24 object-cover rounded-lg border-4 cursor-pointer transition-all ${
                                                jobApplicationForm.jobPostImage === element.id 
                                                    ? 'border-green-500 ring-2 ring-green-300 scale-105' 
                                                    : 'border-slate-300 hover:border-blue-400'
                                            }`}
                                            onClick={() => setJobApplicationForm({...jobApplicationForm, jobPostImage: element.id, jobPostImageURL: element.url})}
                                        />
                                        {jobApplicationForm.jobPostImage === element.id && (
                                            <div className="absolute top-1 right-1 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                                                <FaCheck />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* =============   LOCATION ============= */}
                        <div className="mb-8 pb-8 border-b border-slate-200">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                                <FaMapMarkerAlt className="mr-2" /> Location
                            </h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Choose from dropdown:</label>
                                    <select
                                        value={jobLocationCurrentValue}
                                        onChange={handleLocationDropDown}
                                        className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                                    >
                                        <option value="">Select a location</option>
                                        <option value="Oulu">Oulu</option>
                                        <option value="Helsinki">Helsinki</option>
                                    </select>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="h-px flex-1 bg-slate-300"></div>
                                    <span className="text-slate-500 font-medium">OR</span>
                                    <div className="h-px flex-1 bg-slate-300"></div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Enter custom location:</label>
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            placeholder="Enter location..."
                                            className="flex-1 px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                            value={jobLocationCurrentValue}
                                            onChange={(e) => setJobLocationCurrentValue(e.target.value)}
                                        />
                                        <button 
                                            onClick={() => setJobApplicationForm({...jobApplicationForm, jobLocation: jobLocationCurrentValue})}
                                            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
                                        >
                                            Set Location
                                        </button>
                                    </div>
                                </div>

                                {jobApplicationForm.jobLocation && (
                                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                                        <span className="text-blue-800 font-medium">Selected: {jobApplicationForm.jobLocation}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* =============   JOB TYPE   ============= */}
                        <div className="mb-8 pb-8 border-b border-slate-200">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                                <FaClock className="mr-2" /> Employment Type
                            </h2>
                            <p className="text-slate-600 mb-4">Select one or more employment types</p>
                            <div className="space-y-3">
                                {['part-time', 'full-time', 'both'].map((type) => (
                                    <label key={type} className="flex items-center p-4 border-2 border-slate-300 rounded-lg cursor-pointer hover:bg-slate-50 transition-all">
                                        <input 
                                            type="checkbox"
                                            className="w-5 h-5 text-blue-600 border-slate-300 rounded focus:ring-2 focus:ring-blue-500"
                                            onChange={(e) => {
                                                if (e.target.checked) {
                                                    setJobApplicationForm({
                                                        ...jobApplicationForm, 
                                                        jobType: [...jobApplicationForm.jobType, type]
                                                    });
                                                } else {
                                                    setJobApplicationForm({
                                                        ...jobApplicationForm, 
                                                        jobType: jobApplicationForm.jobType.filter((element: any) => element !== type)
                                                    });
                                                }
                                            }}
                                        />
                                        <span className="ml-3 font-medium text-slate-700 capitalize">{type.replace('-', ' ')}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* =============   STATUS   ============= */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                                <FaCircle className="mr-2" /> Job Status
                            </h2>
                            <p className="text-slate-600 mb-4">Set the current status of this position</p>
                            <div className="space-y-3">
                                <label className="flex items-center p-4 border-2 border-slate-300 rounded-lg cursor-pointer hover:bg-slate-50 transition-all">
                                    <input 
                                        type="radio"
                                        name="jobStatus"
                                        value="open"
                                        className="w-5 h-5 text-green-600 border-slate-300 focus:ring-2 focus:ring-green-500"
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                setJobApplicationForm({
                                                    ...jobApplicationForm,
                                                    jobStatus: "open"
                                                });
                                            }
                                        }}
                                    />
                                    <span className="ml-3 font-medium text-slate-700">Open - Accepting Applications</span>
                                </label>

                                <label className="flex items-center p-4 border-2 border-slate-300 rounded-lg cursor-pointer hover:bg-slate-50 transition-all">
                                    <input 
                                        type="radio"
                                        name="jobStatus"
                                        value="closed"
                                        className="w-5 h-5 text-red-600 border-slate-300 focus:ring-2 focus:ring-red-500"
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                setJobApplicationForm({
                                                    ...jobApplicationForm,
                                                    jobStatus: "closed"
                                                });
                                            }
                                        }}
                                    />
                                    <span className="ml-3 font-medium text-slate-700">Closed - Not Accepting Applications</span>
                                </label>
                            </div>
                        </div>

                        {/* =================================================================   SUBMIT BUTTON */}
                        <div className="pt-6 border-t border-slate-200">
                            <button 
                                className="w-full py-4 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
                                onClick={handleSubmit}
                            >
                                <FaCheck className="mr-2" /> Submit Job Posting
                            </button>
                        </div>
                    </div>
                </main>

                <AdminFooter />
            </div>
        </div>
    );
}
