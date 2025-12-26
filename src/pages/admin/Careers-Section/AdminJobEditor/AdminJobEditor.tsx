import AdminNavbar from "../../components/AdminNavbar";
import AdminSidebar from "../../components/AdminSidebar";
import AdminFooter from "../../components/AdminFooter";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import featuredImagesDb from "./data/imagesDb";
import jobsList from "../data/jobsList";

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

        setJobApplicationForm({...jobApplicationForm, jobDescription: [...jobApplicationForm.jobDescription, jobDescriptionCurrentValue] })
        setJobDescriptionCurrentValue("")

    }


    const handleLocationDropDown = (e:any)=>{

        setJobLocationCurrentValue(e.target.value);
        setJobApplicationForm({...jobApplicationForm, jobLocation : e.target.value})
    }



    return (
        <div className="flex min-h-screen bg-slate-50">
            <AdminSidebar />
            
            <div className="flex flex-1 flex-col">
                <AdminNavbar />


                <div> 
                    <Link to={"/staff/admin/jobs"}>
                        <p>Go Back</p>
                    </Link>
                </div>


                
                <main className="flex-1 px-4 py-8 lg:px-6">
                    <div className="mb-6">
                        <h1 className="text-3xl font-extrabold text-slate-900">Job Editor</h1>
                        <p className="mt-2 text-slate-600">Create or edit job postings</p>
                    </div>

                    {/* =================================================================   JOB FORM */}
                    <div className="flex flex-col">

                        {/* =============   JOB TITLE ============= */}
                        <div>
                            <p className="mt-5 text-2xl">Job Title</p>

                            <label className="mt-2">Job Title</label>
                            <input
                                type="text"
                                placeholder="e.g. Cleaning Supervisor"
                                className="border-2 p-2 mt-2"

                                value={jobApplicationForm.jobTitle}
                                onChange={(e) => setJobApplicationForm({...jobApplicationForm, jobTitle: e.target.value})}
                            />
                        </div>


                        {/* =============   JOB DESCRIPTION ============= */}
                        <div>
                            <p className="mt-5 text-2xl">Job Description</p>

                            {/* Job Description Input */}
                            <label className="mt-2">Job Description</label>
                            <input
                                type="text"
                                placeholder="Write bulletpiints....."
                                className="border-2 p-2 mt-2"

                                value={jobDescriptionCurrentValue}
                                onChange={(e) => setJobDescriptionCurrentValue(e.target.value)}
                            />

                            <div>
                                <button 
                                    onClick={handleJobDecriptionAdd}
                                    className="border-2 rounded-md bg-amber-300 hover:bg-amber-600"
                                >
                                    Add Line
                                </button>
                            </div>

                            {/* Display Current Job Description */}
                            <p className="mt-5 mb-2">Current Description</p>
                            {
                                jobApplicationForm.jobDescription.map((element:any)=>
                                <div key={element}>
                                    <p>{element}</p>
                                </div>)
                            }
                            <div>
                                <button 
                                    onClick={()=> setJobApplicationForm({...jobApplicationForm , jobDescription: [""]})}
                                    className="border-2 rounded-md bg-amber-300 hover:bg-amber-600"
                                >
                                    Clear List
                                </button>
                            </div>
                        </div>


                        {/* =============   FEATURED IMAGE ============= */}
                        <div>
                            <p className="mt-5 text-2xl">Select a Featured Image</p>
                            <p className="mt-2">Featured Images</p>
                            <div className="grid grid-cols-4">
                                {
                                    featuredImagesDb.map((element)=>
                                    <div key={element.id}>
                                        <div >
                                            <img 
                                                src= {element.url}
                                                className= {`w-20 h-20 border-2 hover:border-yellow-300 ${jobApplicationForm.jobPostImage===element.id?"border-lime-500":"border-red-500"}`}
                                                onClick={() => setJobApplicationForm({...jobApplicationForm ,jobPostImage:element.id, jobPostImageURL: element.url})}
                                            />
                                        </div>
                                    </div>)
                                }
                            </div>
                        </div>
                        
                        {/* =============   LOCATION ============= */}
                        <div>
                            <p className="mt-5 text-2xl">Select a Location</p>
                            <p>Choose a location:</p>

                                <div>
                                    <select
                                        value={jobLocationCurrentValue}
                                        onChange={handleLocationDropDown}
                                    >
                                        <option value="Oulu">Oulu</option>
                                        <option value="Helsinki">Helsinki</option>
                                    </select>
                                </div>

                                <div>
                                    <p>Or Write</p>
                                    <input
                                        type="text"
                                        placeholder="location"
                                        className="border-2"
                                        
                                        value={jobLocationCurrentValue}
                                        onChange={(e)=> setJobLocationCurrentValue(e.target.value)}
                                    />
                                    <button 
                                        onClick={()=> setJobApplicationForm({...jobApplicationForm, jobLocation : jobLocationCurrentValue})}
                                        className="bg-amber-300"
                                    >
                                        Add Location
                                    </button>
                                </div>

                        </div>


                        {/* =============   JOB TYPE   ============= */}
                        <div>
                            <p className="mt-5 text-2xl">Select a Type</p>
                            <p>Choose a type:</p>

                            <div>          

                                <label>Part Time</label>                      
                                <input 
                                    type="checkbox"
                                    onChange={(e)=> {
                                        if (e.target.checked){
                                            setJobApplicationForm({
                                                ...jobApplicationForm , 
                                                jobType :[...jobApplicationForm.jobType, "part-time"]
                                            })
                                        }
                                        else{
                                            setJobApplicationForm({
                                                ...jobApplicationForm , 
                                                jobType : jobApplicationForm.jobType.filter((element:any) => element != "part-time")
                                            })
                                        }
                                    }}
                                />

                                <label>Full Time</label>                      
                                <input 
                                    type="checkbox"
                                    onChange={(e)=> {
                                        if (e.target.checked){
                                            setJobApplicationForm({
                                                ...jobApplicationForm , 
                                                jobType :[...jobApplicationForm.jobType, "full-time"]
                                            })
                                        }
                                        else{
                                            setJobApplicationForm({
                                                ...jobApplicationForm , 
                                                jobType : jobApplicationForm.jobType.filter((element:any) => element != "full-time")
                                            })
                                        }
                                    }}
                                />

                                <label>Both</label>                      
                                <input 
                                    type="checkbox"
                                    onChange={(e)=> {
                                        if (e.target.checked){
                                            setJobApplicationForm({
                                                ...jobApplicationForm , 
                                                jobType :[...jobApplicationForm.jobType, "both"]
                                            })
                                        }
                                        else{
                                            setJobApplicationForm({
                                                ...jobApplicationForm , 
                                                jobType : jobApplicationForm.jobType.filter((element:any) => element != "both")
                                            })
                                        }
                                    }}
                                />

                            </div>

                        </div>


                        {/* =============   STATUS   ============= */}
                        <div>
                            <p className="mt-5 text-2xl">Job Type</p>
                            <p>Choose a type:</p>
                            
                            <div>

                                <label>Open</label>
                                <input 
                                    type= "radio"
                                    name= "jobStatus"
                                    value= "open"
                                    onChange={(e)=> {
                                        if(e.target.checked){
                                            setJobApplicationForm({
                                                ...jobApplicationForm,
                                                jobStatus: "open"
                                            })
                                        }
                                        else{
                                            setJobApplicationForm({
                                                ...jobApplicationForm,
                                                jobStatus: ""
                                            })
                                        }
                                    } }
                                />

                                <label>Closed</label>
                                <input 
                                    type= "radio"
                                    name= "jobStatus"
                                    value= "closed"
                                    onChange={(e)=> {
                                        if(e.target.checked){
                                            setJobApplicationForm({
                                                ...jobApplicationForm,
                                                jobStatus: "closed"
                                            })
                                        }
                                        else{
                                            setJobApplicationForm({
                                                ...jobApplicationForm,
                                                jobStatus: ""
                                            })
                                        }
                                    } }
                                />


                            </div>
                        </div>


                    </div>



                    {/* =================================================================   JOB FORM */}
                    <div>
                        <button 
                            className="mt-10 border-2 rounded-md bg-amber-300 hover:bg-amber-600 p-2"
                            onClick={() => {
                                console.log(jobApplicationForm);
                                jobsList.push(jobApplicationForm);
                                alert('Job posted successfully!');
                                navigate('/staff/admin/jobs');
                            }}
                        >
                            Submit Post
                        </button>
                    </div>



                </main>

                <AdminFooter />
            </div>
        </div>
    );
}
