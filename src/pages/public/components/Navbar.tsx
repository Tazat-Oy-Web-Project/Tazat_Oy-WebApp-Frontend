import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

function NavbarComponent() {
    const { language, setLanguage } = useLanguage();
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
    const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
    const [isUpdatesDropdownOpen, setIsUpdatesDropdownOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsCompanyDropdownOpen(false);
        setIsUpdatesDropdownOpen(false);
    }, [location]);

    const changeLanguage = (lang: "en" | "fi") => {
        setLanguage(lang);
        setIsLanguageDropdownOpen(false);
    };

    const companyLinks = [
        { to: "/", label: language === "en" ? "Home" : "Etusivu" },
        { to: "/services", label: language === "en" ? "Services" : "Palvelut" },
        { to: "/about", label: language === "en" ? "About" : "Tietoa Meistä" },
        { to: "/contact", label: language === "en" ? "Contact" : "Yhteystiedot" }
    ];

    const updatesLinks = [
        { to: "/blog", label: language === "en" ? "Blog" : "Blogi" },
        { to: "/careers", label: language === "en" ? "Work With Us" : "Töihin Meille" }
    ];

    return (
        <motion.nav 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled 
                    ? 'bg-[#0a0a0a]/95 backdrop-blur-xl shadow-lg shadow-black/10 border-b border-white/5' 
                    : 'bg-white/90 backdrop-blur-md shadow-sm'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    
                    {/* Logo */}
                    <Link to="/" className="group flex items-center space-x-2">
                        <motion.span 
                            whileHover={{ scale: 1.05 }}
                            className={`text-2xl font-bold transition-colors duration-300 ${
                                scrolled 
                                    ? 'text-orange-500' 
                                    : 'bg-linear-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent'
                            }`}
                        >
                            Tazat
                        </motion.span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        
                        {/* Company Dropdown */}
                        <div className="relative group">
                            <button
                                onMouseEnter={() => setIsCompanyDropdownOpen(true)}
                                onMouseLeave={() => setIsCompanyDropdownOpen(false)}
                                className={`px-4 py-2 text-sm font-medium transition-colors flex items-center gap-1 ${
                                    scrolled 
                                        ? 'text-gray-300 hover:text-orange-400' 
                                        : 'text-gray-700 hover:text-orange-600'
                                }`}
                            >
                                {language === "en" ? "Company" : "Yritys"}
                                <svg className={`w-4 h-4 transition-transform ${isCompanyDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            
                            <AnimatePresence>
                                {isCompanyDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        onMouseEnter={() => setIsCompanyDropdownOpen(true)}
                                        onMouseLeave={() => setIsCompanyDropdownOpen(false)}
                                        className="absolute left-0 mt-1 w-48 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100/50 py-2 overflow-hidden"
                                    >
                                        {companyLinks.map((link, index) => (
                                            <motion.div
                                                key={link.to}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.05 }}
                                            >
                                                <NavLink
                                                    to={link.to}
                                                    end={link.to === "/"}
                                                    className={({ isActive }) =>
                                                        `block px-4 py-2 text-sm transition-colors ${
                                                            isActive
                                                                ? 'text-orange-600 bg-orange-50 font-medium'
                                                                : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
                                                        }`
                                                    }
                                                >
                                                    {link.label}
                                                </NavLink>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Updates Dropdown */}
                        <div className="relative group">
                            <button
                                onMouseEnter={() => setIsUpdatesDropdownOpen(true)}
                                onMouseLeave={() => setIsUpdatesDropdownOpen(false)}
                                className={`px-4 py-2 text-sm font-medium transition-colors flex items-center gap-1 ${
                                    scrolled 
                                        ? 'text-gray-300 hover:text-orange-400' 
                                        : 'text-gray-700 hover:text-orange-600'
                                }`}
                            >
                                {language === "en" ? "Updates" : "Päivitykset"}
                                <svg className={`w-4 h-4 transition-transform ${isUpdatesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            
                            <AnimatePresence>
                                {isUpdatesDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        onMouseEnter={() => setIsUpdatesDropdownOpen(true)}
                                        onMouseLeave={() => setIsUpdatesDropdownOpen(false)}
                                        className="absolute left-0 mt-1 w-48 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100/50 py-2 overflow-hidden"
                                    >
                                        {updatesLinks.map((link, index) => (
                                            <motion.div
                                                key={link.to}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.05 }}
                                            >
                                                <NavLink
                                                    to={link.to}
                                                    className={({ isActive }) =>
                                                        `block px-4 py-2.5 text-sm transition-all duration-200 ${
                                                            isActive
                                                                ? 'text-orange-600 bg-orange-50/80 font-medium'
                                                                : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50/80 hover:pl-5'
                                                        }`
                                                    }
                                                >
                                                    {link.label}
                                                </NavLink>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center space-x-3">
                        
                        {/* Language Selector */}
                        <div className="relative">
                            <button
                                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                                className={`flex items-center gap-1 px-3 py-1.5 text-sm transition-colors ${
                                    scrolled
                                        ? 'text-gray-300 hover:text-orange-400'
                                        : 'text-gray-700 hover:text-orange-600'
                                }`}
                            >
                                <span className="uppercase font-medium">{language}</span>
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            
                            <AnimatePresence>
                                {isLanguageDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="absolute right-0 mt-2 w-32 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100/50 overflow-hidden"
                                    >
                                        <button
                                            onClick={() => changeLanguage("en")}
                                            className={`w-full px-4 py-2 text-left text-sm flex items-center gap-2 transition-colors ${
                                                language === "en" ? "bg-orange-50 text-orange-600" : "hover:bg-gray-50"
                                            }`}
                                        >
                                            <span>🇬🇧</span>
                                            English
                                        </button>
                                        <button
                                            onClick={() => changeLanguage("fi")}
                                            className={`w-full px-4 py-2 text-left text-sm flex items-center gap-2 transition-colors ${
                                                language === "fi" ? "bg-orange-50 text-orange-600" : "hover:bg-gray-50"
                                            }`}
                                        >
                                            <span>🇫🇮</span>
                                            Finnish
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Get Quote Button */}
                        <Link to="/quote">
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(249, 115, 22, 0.5)" }}
                                whileTap={{ scale: 0.95 }}
                                className="relative px-6 py-2.5 text-sm font-semibold text-white bg-linear-to-r from-orange-600 to-orange-500 rounded-full overflow-hidden group shadow-lg shadow-orange-500/25"
                            >
                                <span className="relative z-10">{language === "en" ? "Get Quote" : "Tarjous"}</span>
                                <div className="absolute inset-0 bg-linear-to-r from-orange-500 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                            </motion.button>
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`md:hidden p-2 transition-colors ${
                                scrolled
                                    ? 'text-gray-300 hover:text-orange-400'
                                    : 'text-gray-700 hover:text-orange-600'
                            }`}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className={`md:hidden border-t ${
                            scrolled 
                                ? 'bg-[#0a0a0a]/98 backdrop-blur-xl border-white/10' 
                                : 'bg-white/98 backdrop-blur-xl border-gray-100'
                        }`}
                    >
                        <div className="px-4 py-4 space-y-1">
                            {/* Company Section */}
                            <div className="py-2">
                                <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${
                                    scrolled ? 'text-gray-500' : 'text-gray-500'
                                }`}>
                                    {language === "en" ? "Company" : "Yritys"}
                                </p>
                                {companyLinks.map(link => (
                                    <NavLink
                                        key={link.to}
                                        to={link.to}
                                        end={link.to === "/"}
                                        className={({ isActive }) =>
                                            `block px-3 py-2.5 rounded-xl text-sm transition-all duration-200 ${
                                                isActive
                                                    ? 'text-orange-500 bg-orange-500/10 font-medium'
                                                    : scrolled 
                                                        ? 'text-gray-300 hover:bg-white/5 hover:text-orange-400'
                                                        : 'text-gray-700 hover:bg-gray-50'
                                            }`
                                        }
                                    >
                                        {link.label}
                                    </NavLink>
                                ))}
                            </div>
                            
                            {/* Updates Section */}
                            <div className="py-2">
                                <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${
                                    scrolled ? 'text-gray-500' : 'text-gray-500'
                                }`}>
                                    {language === "en" ? "Updates" : "Päivitykset"}
                                </p>
                                {updatesLinks.map(link => (
                                    <NavLink
                                        key={link.to}
                                        to={link.to}
                                        className={({ isActive }) =>
                                            `block px-3 py-2.5 rounded-xl text-sm transition-all duration-200 ${
                                                isActive
                                                    ? 'text-orange-500 bg-orange-500/10 font-medium'
                                                    : scrolled 
                                                        ? 'text-gray-300 hover:bg-white/5 hover:text-orange-400'
                                                        : 'text-gray-700 hover:bg-gray-50'
                                            }`
                                        }
                                    >
                                        {link.label}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}

export default NavbarComponent;
