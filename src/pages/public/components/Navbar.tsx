import { NavLink, Link } from "react-router-dom";
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import BrandLogo from "../../../assets/icons/brang-logo.jpg";


function NavbarComponent(){
    // Use NavLink to apply active styling from react-router
    const activeClass = (isActive: boolean) => isActive ? "text-orange-600 font-sans text-2xl border-b-2 border-orange-500 pb-1" : "text-gray-700 hover:text-yellow-600 font-sans text-2xl";

    return(
        <nav>
            <Navbar fluid className="bg-white-500 py-6 dark:bg-white-600 shadow-xl/10">
                {/** Use Link inside NavbarBrand because NavbarBrand doesn't accept `to` prop */}
                <NavbarBrand>
                    <Link to="/" className="flex items-center">
                        <img src={BrandLogo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                        <span className="self-center whitespace-nowrap text-xl font-semibold text-black-50">Tazat Oy</span>
                    </Link>
                </NavbarBrand>
                <div className="flex md:order-2">
                    <Link to="/quote">
                        <Button className="bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 text-gray-900 hover:bg-gradient-to-bl focus:ring-red-100 dark:focus:ring-red-400">Get a Quote</Button>
                    </Link>
                    <NavbarToggle className="text-orange-600 hover:text-yellow-600 focus:ring-2 focus:ring-orange-300" />

                </div>
                <NavbarCollapse>
                    <NavbarLink>
                        <NavLink to="/" className={({ isActive }) => activeClass(isActive)} end>
                            Home
                        </NavLink>
                    </NavbarLink>
                    <NavbarLink href="#">
                        <NavLink to="/services" className={({ isActive }) => activeClass(isActive)}>
                            Services
                        </NavLink>
                    </NavbarLink>
                    <NavbarLink href="#">
                        <NavLink to="/about" className={({ isActive }) => activeClass(isActive)}>
                            About Us
                        </NavLink>
                    </NavbarLink>
                    <NavbarLink href="#">
                        <NavLink to="/careers" className={({ isActive }) => activeClass(isActive)}>
                            Work With Us
                        </NavLink>
                    </NavbarLink>
                    <NavbarLink href="#">
                        <NavLink to="/blog" className={({ isActive }) => activeClass(isActive)}>
                            Blog
                        </NavLink>
                    </NavbarLink>
                    <NavbarLink href="#">
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
