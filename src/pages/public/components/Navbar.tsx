import { NavLink, Link } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import BrandLogo from "../../../assets/icons/brang-logo.jpg";


function NavbarComponent(){
    // Simplified active styling with clean transitions
    const activeClass = (isActive: boolean) => 
        isActive 
            ? "text-orange-600 font-bold text-lg md:text-xl px-4 py-2.5 rounded-lg bg-orange-100 border-b-2 border-orange-500 transition-all duration-300" 
            : "text-gray-700 hover:text-orange-600 font-medium text-lg md:text-xl px-4 py-2.5 rounded-lg transition-all duration-300 hover:bg-orange-50";

    return(
        <nav className="sticky top-0 z-50 backdrop-blur-md">
            <Navbar 
                fluid 
                className="bg-linear-to-r from-white via-orange-50/40 to-yellow-50/40 py-5 md:py-7 shadow-lg border-b-2 border-orange-200/30 backdrop-blur-xl"
            >
                {/** Brand Section */}
                <NavbarBrand>
                    <Link to="/" className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
                        <img 
                            src={BrandLogo} 
                            className="h-10 sm:h-14 md:h-16 drop-shadow-md" 
                            alt="Tazat Oy Logo" 
                        />
                        <span className="self-center whitespace-nowrap text-2xl md:text-3xl font-extrabold bg-linear-to-r from-orange-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                            Tazat Oy
                        </span>
                    </Link>
                </NavbarBrand>

                {/** Action Buttons */}
                <div className="flex md:order-2 gap-3 md:gap-5 items-center">
                    <Link to="/quote" className="group">
                        <button className="relative overflow-hidden bg-linear-to-r from-orange-500 to-yellow-500 text-white font-bold px-5 md:px-8 py-2.5 md:py-3.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 focus:ring-4 focus:ring-orange-300">
                            <span className="relative z-10">Get a Quote</span>
                            <span className="absolute inset-0 rounded-full bg-linear-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                        </button>
                    </Link>
                    <NavbarToggle className="text-orange-600 hover:text-white hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 rounded-lg p-3 transition-all duration-300 shadow-md" />
                </div>

                {/** Navigation Links */}
                <NavbarCollapse className="bg-white/95 md:bg-transparent rounded-xl md:rounded-none shadow-lg md:shadow-none mt-6 md:mt-0 p-6 md:p-0 backdrop-blur-xl border border-orange-100/50 md:border-0">
                    <NavbarLink>
                        <NavLink to="/" className={({ isActive }) => activeClass(isActive)} end>
                            Home
                        </NavLink>
                    </NavbarLink>
                    <NavbarLink>
                        <NavLink to="/services" className={({ isActive }) => activeClass(isActive)}>
                            Services
                        </NavLink>
                    </NavbarLink>
                    <NavbarLink>
                        <NavLink to="/about" className={({ isActive }) => activeClass(isActive)}>
                            About Us
                        </NavLink>
                    </NavbarLink>
                    <NavbarLink>
                        <NavLink to="/careers" className={({ isActive }) => activeClass(isActive)}>
                            Work With Us
                        </NavLink>
                    </NavbarLink>
                    <NavbarLink>
                        <NavLink to="/blog" className={({ isActive }) => activeClass(isActive)}>
                            Blog
                        </NavLink>
                    </NavbarLink>
                    <NavbarLink>
                        <NavLink to="/contact" className={({ isActive }) => activeClass(isActive)}>
                            Contact
                        </NavLink>
                    </NavbarLink>
                </NavbarCollapse>
            </Navbar>
        </nav>
    )
}

export default NavbarComponent;
