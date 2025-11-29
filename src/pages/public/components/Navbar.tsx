import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import BrandLogo from "../../../assets/icons/brang-logo.jpg";

function NavbarComponent() {
    // State to control mobile menu visibility
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Toggle mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Close mobile menu when a link is clicked
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    // Active link styling function
    const activeClass = (isActive: boolean) => 
        isActive 
            ? "text-orange-600 font-bold text-sm md:text-base lg:text-lg 2xl:text-xl px-2 md:px-3 lg:px-4 2xl:px-6 py-2 md:py-2.5 2xl:py-3 rounded-lg bg-orange-100 md:w-full lg:w-auto border-b-2 border-orange-500 transition-all duration-300 md:text-center lg:text-left" 
            : "text-gray-700 hover:text-orange-600 font-medium text-sm md:text-base lg:text-md xl:text-lg 2xl:text-xl px-2 md:px-1 lg:px-2 xl:px-5 2xl:px-6 py-2 md:py-2.5 2xl:py-3 rounded-lg transition-all duration-300 hover:bg-orange-50 md:w-full lg:w-auto md:text-center lg:text-left";

    return (
        <>
            {/** Making the whole Navbar Sticky that stays at top when scrolling */}
            <nav className="sticky top-0 z-50 backdrop-blur-md">
                {/** This is the Main Full navbar container */}
                <div className="bg-linear-to-r from-white via-orange-50/40 to-yellow-50/40 py-3 md:py-5 lg:py-7 shadow-lg border-b-2 border-orange-200/30 backdrop-blur-xl">
                    {/** Whele Contents part (logo + navigation links + Get Quote button). This container takes for full width of the screen*/}
                    <div className="bg-amber-0 w-full px-4 sm:px-6 lg:px-8 2xl:px-12">
                        {/** Now the actual contents part: Brand on left, Nav links in center (desktop), Actions on right */}
                        <div className="bg-red-0 flex items-center justify-between">
                        
                            {/** Brand Section - Left Side */}
                            <Link 
                                to="/" 
                                className="flex items-center gap-2 md:gap-3 hover:scale-105 transition-transform duration-300"
                            >
                                <img 
                                    src={BrandLogo} 
                                    className="h-8 sm:h-10 md:h-11 lg:h-12 xl:h-14 drop-shadow-md" 
                                    alt="Tazat Oy Logo" 
                                />
                                <span className="self-center whitespace-nowrap text-lg sm:text-md md:text-lg lg:text-xl font-extrabold bg-linear-to-r from-orange-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                                    Tazat Oy
                                </span>
                            </Link>

                            {/** Desktop Navigation Links - Center (hidden on mobile/tablet = shown after 1024px) */}
                            <div className="hidden lg:flex lg:items-center lg:gap-4 xl:gap-6 2xl:gap-8">
                                <NavLink 
                                    to="/" 
                                    className={({ isActive }) => activeClass(isActive)} 
                                    end
                                >
                                    Home
                                </NavLink>
                                <NavLink 
                                    to="/services" 
                                    className={({ isActive }) => activeClass(isActive)}
                                >
                                    Services
                                </NavLink>
                                <NavLink 
                                    to="/about" 
                                    className={({ isActive }) => activeClass(isActive)}
                                >
                                    About Us
                                </NavLink>
                                <NavLink 
                                    to="/careers" 
                                    className={({ isActive }) => activeClass(isActive)}
                                >
                                    Work With Us
                                </NavLink>
                                <NavLink 
                                    to="/blog" 
                                    className={({ isActive }) => activeClass(isActive)}
                                >
                                    Blog
                                </NavLink>
                                <NavLink 
                                    to="/contact" 
                                    className={({ isActive }) => activeClass(isActive)}
                                >
                                    Contact
                                </NavLink>
                            </div>

                            {/** Action Buttons - Right Side */}
                            <div className="flex items-center gap-2 md:gap-5">
                                {/** Get a Quote Button */}
                                <Link to="/quote" className="group">
                                    <button className="relative overflow-hidden bg-linear-to-r from-orange-500 to-yellow-500 text-white font-bold text-xs sm:text-sm md:text-sm lg:text-base px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-2.5 lg:py-3.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 focus:ring-4 focus:ring-orange-300">
                                        <span className="relative z-10">Get a Quote</span>
                                        <span className="absolute inset-0 rounded-full bg-linear-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                                    </button>
                                </Link>

                                {/** Mobile Menu Toggle Button (only visible before md = shown at less than 768px) */}
                                <button
                                    onClick={toggleMobileMenu}
                                    className="md:hidden bg-pink-0 text-orange-600 hover:text-white hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 rounded-lg p-2 sm:p-2.5 transition-all duration-300 shadow-md scale-90 sm:scale-95"
                                    aria-label="Toggle navigation menu"
                                >
                                    {isMobileMenuOpen ? (
                                        // Close Icon (X)
                                        <svg 
                                            className="w-6 h-6" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                strokeWidth={2} 
                                                d="M6 18L18 6M6 6l12 12" 
                                            />
                                        </svg>
                                    ) : (
                                        // Hamburger Icon (3 lines)
                                        <svg 
                                            className="w-6 h-6" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                strokeWidth={2} 
                                                d="M4 6h16M4 12h16M4 18h16" 
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/** Mobile/Tablet Navigation Menu (visible on sm and md, 2-row grid) */}
                        <div 
                            className={`
                                ${isMobileMenuOpen ? 'flex flex-col' : 'hidden'}
                                md:grid md:grid-cols-3 md:gap-x-4 md:gap-y-2 md:justify-items-center
                                lg:hidden
                                mt-4 p-3 sm:p-4
                                bg-white sm:bg-pink-0
                                rounded-xl sm:rounded-none 
                                shadow-lg sm:shadow-none 
                                backdrop-blur-xl 
                                border border-orange-100/50 sm:border-0
                            `}
                        >
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => activeClass(isActive)} 
                            onClick={closeMobileMenu}
                            end
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            to="/services" 
                            className={({ isActive }) => activeClass(isActive)}
                            onClick={closeMobileMenu}
                        >
                            Services
                        </NavLink>
                        <NavLink 
                            to="/about" 
                            className={({ isActive }) => activeClass(isActive)}
                            onClick={closeMobileMenu}
                        >
                            About Us
                        </NavLink>
                        <NavLink 
                            to="/careers" 
                            className={({ isActive }) => activeClass(isActive)}
                            onClick={closeMobileMenu}
                        >
                            Work With Us
                        </NavLink>
                        <NavLink 
                            to="/blog" 
                            className={({ isActive }) => activeClass(isActive)}
                            onClick={closeMobileMenu}
                        >
                            Blog
                        </NavLink>
                        <NavLink 
                            to="/contact" 
                            className={({ isActive }) => activeClass(isActive)}
                            onClick={closeMobileMenu}
                        >
                            Contact
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
        </>
    );
}

export default NavbarComponent;
