import AdminNavbar from "../../components/AdminNavbar";
import AdminSidebar from "../../components/AdminSidebar";
import AdminFooter from "../../components/AdminFooter";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import jobsList from "../data/jobsList";

export default function AdminJobs() {

    const navigate = useNavigate();

    const [fetchedJobList, setFetchedJobList] = useState([])

    useEffect(() => {
        console.log("jobsList from DB: ", jobsList);
        setFetchedJobList(jobsList)
    }, [jobsList]);


    const handleSearch = (event:any)=>{

        const searchValue = event.target.value

        const newJobList = jobsList.filter((jobDataElement:any) => 
            
            jobDataElement.jobTitle.includes(searchValue) || 
            jobDataElement.jobDescription.some((jobDescriptionElement:any)=> jobDescriptionElement.includes(searchValue))
        )
        console.log("Searched Job List", newJobList)
        setFetchedJobList(newJobList)
    }


    const handleDeleteJob = (jobData:any)=>{
        //console.log("Delete Title: ", jobData.jobTitle 

        const newJobList = fetchedJobList.filter((element:any)=> element.jobTitle !==jobData.jobTitle)
        console.log("new job List: ", newJobList)

        setFetchedJobList(newJobList)

        jobsList.push(newJobList)
    }

    return (
        <div className="flex min-h-screen bg-slate-50">
            <AdminSidebar />
            
            <div className="flex flex-1 flex-col">
                <AdminNavbar />

                <main className="flex-1 px-4 py-8 lg:px-6">
                    <div className="mb-6">
                        <h1 className="text-3xl font-extrabold text-slate-900">Job Postings</h1>
                        <p className="mt-2 text-slate-600">Manage career opportunities</p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <p className="text-slate-600">Job postings management coming soon...</p>
                    </div>

                    <div>

                        {/* =============   SEARCH BAR ============= */}
                        <input
                            type="text"
                            placeholder="Search job postings..."
                            className="border-2 rounded-lg p-2"

                            onChange={handleSearch}
                        />
                        <button
                            className="border-2 rounded-lg"
                            onClick={()=> {console.log("Clicked"); navigate('/staff/admin/jobs/new')}}>
                                Create a New Job
                        </button>
                    </div>

                    {/* ================================================================= Job Postings List */}
                    <div>
                        <div className="grid grid-cols-2">
                            {
                                fetchedJobList.map((element:any)=>
                                <div className="flex flex-col border-2"> {/* need to add key element */}

                                    <p>{element.jobTitle}</p>

                                    {
                                        element.jobDescription.map((element:any)=>
                                        <div>
                                            <p><span>* </span>{element}</p>
                                        </div>)
                                    }

                                    <img src={element.jobPostImageURL} className="w-20 h-20" />

                                    <p>{element.jobLocation}</p>

                                    {
                                        element.jobType.map((element:any)=>
                                        <div>
                                            <p><span>- </span>{element}</p>
                                        </div>)
                                    }

                                    <div>
                                        <button
                                            className="border-2 rounded-lg"
                                            onClick={()=> handleDeleteJob(element)}
                                        >
                                            Delete
                                        </button>
                                    </div>

                                    

                                </div>
                                )
                            }
                        </div>
                    </div>
                </main>

                <AdminFooter />
            </div>
        </div>
    );
}
