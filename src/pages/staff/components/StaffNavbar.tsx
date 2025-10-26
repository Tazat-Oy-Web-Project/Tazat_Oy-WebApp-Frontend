import { useState, useEffect } from "react";
import BrandLog from "../../../assets/icons/brang-logo.jpg"
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { Link } from "react-router-dom";

function StaffNavbar({navItemName}: {navItemName: string}) {

    const [navItem, setNavItem] = useState(navItemName);  //Current active nav item name
    console.log("Current nav item is: " + navItem);

    const [menuClicked, setMenuClicked] = useState(false);  //If this is true, close icon shows. If false, hamburger menu shows.

    const handleMenuClick = () => {
        // Logic to open side menu or navigation drawer
        console.log("Menu button clicked");
        setMenuClicked(!menuClicked);
    }

    useEffect(()=>{
        const handleResize = ()=>{
            if(window.innerWidth >= 768){
                setMenuClicked(false);
                //console.log("setMenu is: False")
                
            }
        }

        // Run once at start
        handleResize();

        // Run every time window resizes.       //Every browser has something like this built-in:  """window.dispatchEvent(new Event("resize"));"""  The browser runs this internally whenever we resize the window.   
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);

    }, []);   




    return(
        <section>
            {/* =============================== Desktop Menu =============================== */}

            <div className="flex flex-row justify-between items-center p-4 h-22 md:shadow-lg md:shadow-gray-400">

                {/*Brand Logo, Name, Menu Button*/}
                <div className="hidden md:flex flex-row w-40 h-full justify-center items-center gap-2">
                    {/*Brand Logo and Name*/}
                    <Link to="/staff/">
                        <div>
                            <img src={BrandLog} alt="Brand Logo" className="h-8 w-full  hover:cursor-pointer" />
                        </div>
                    </Link>
                    <Link to="/staff/">
                        <div className="bg-gradient-to-r from-gray-600 to-orange-500 bg-clip-text text-transparent transition-colors duration-500 hover:from-red-600 hover:to-amber-200 hover:cursor-pointer">
                            <h1 className="md:text-[20px] lg:text-[23px] font-bold tracking-tight ">Tazat Oy</h1>
                        </div>      
                    </Link>  
                </div>

                {/*Hamburger Menu Button and Close Button*/}
                <div 
                    className="md:hidden flex hover:cursor-pointer text-black text-2xl"
                    
                >
                    {
                        menuClicked ? <MdClose onClick={handleMenuClick}/> : <GiHamburgerMenu onClick={handleMenuClick}/>
                    }
                </div>

                {/*Nav Elements*/}
                <div className="flex flex-row flex-[8] justify-center h-full mx-auto">
                    <div className="hidden md:flex justify-center items-center md:px-0 lg:px-10 w-[25%]">
                        <Link to="/staff/">
                            <nav className={`font-bold md:text-lg lg:text-xl font-sans antialiased tracking-tight hover:border-b-3 border-amber-600 hover:cursor-pointer ${navItem === "Dashboard" ? "border-b-3" : ""}`}>
                                <div className="">
                                    Dashboard
                                </div>
                            </nav>
                        </Link>
                    </div>

                    <div className="hidden md:flex justify-center items-center px-10 w-[25%]">
                        <Link to="/staff/news">
                            <nav className={`font-bold text-xl font-sans antialiased tracking-tight hover:border-b-3 border-amber-600 hover:cursor-pointer ${navItem === "News" ? "border-b-3" : ""}`}>
                                <div className="">
                                    News
                                </div>
                            </nav>
                        </Link>
                    </div>

                    <div className="hidden md:flex justify-center items-center px-10 w-[25%]">
                        <Link to="/staff/training">
                            <nav className={`font-bold text-xl font-sans antialiased tracking-tight hover:border-b-3 border-amber-600 hover:cursor-pointer ${navItem === "Training" ? "border-b-3" : ""}`}>
                                <div className="">
                                    Training
                                </div>
                            </nav>
                        </Link>
                    </div>

                    <div className="hidden md:flex justify-center items-center px-10 w-[25%]">
                        <Link to="/staff/profile">
                            <nav className={`font-bold text-xl font-sans antialiased tracking-tight hover:border-b-3 border-amber-600 hover:cursor-pointer ${navItem === "Profile" ? "border-b-3" : ""}`}>
                                <div className="">
                                    Profile
                                </div>
                            </nav>
                        </Link>
                    </div>
                </div>

                {/*Logout button*/}
                <div className="flex flex-row w-20 h-full">
                    <div className="mx-auto my-auto text-black text-2xl hover:cursor-pointer hover:opacity-40">
                        <IoMdLogOut />
                    </div>
                </div>
            </div>




            
            {/* ==================== Mobile Menu with smooth animation ==================== */}

            <div
                className={`md:hidden transition-all duration-500 ease-in-out 
                    ${menuClicked ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="flex flex-col w-full">
                    <nav className="bg-amber-50 hover:bg-amber-100 p-4 text-lg font-bold font-sans">Dashboard</nav>
                    <nav className="bg-amber-50 hover:bg-amber-100 p-4 text-lg font-bold font-sans">News</nav>
                    <nav className="bg-amber-50 hover:bg-amber-100 p-4 text-lg font-bold font-sans">Training</nav>
                    <nav className="bg-amber-50 hover:bg-amber-100 p-4 text-lg font-bold font-sans">Profile</nav>
                </div>
            </div>            
            
        </section>
    )
}

export default StaffNavbar;
