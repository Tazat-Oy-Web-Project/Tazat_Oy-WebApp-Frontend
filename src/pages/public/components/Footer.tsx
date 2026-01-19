import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";

export function FooterComponent() {
  const { language } = useLanguage();
  
  return (
    <footer className="bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Subtle gradient orb in background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-600/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-linear-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">{language === "en" ? "Tazat Cleaning" : "Tazat Siivous"}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {language === "en" ? "Professional cleaning services across Finland. Your cleanliness, our priority." : "Ammattimaiset siivouspalvelut ympäri Suomen. Sinun puhtautesi, meidän prioriteettimme."}
            </p>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-orange-500 p-3 rounded-xl border border-white/10 hover:border-orange-500 transition-all duration-300 group"
              >
                <FaFacebookF className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-orange-500 p-3 rounded-xl border border-white/10 hover:border-orange-500 transition-all duration-300 group"
              >
                <FaInstagram className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-orange-500 p-3 rounded-xl border border-white/10 hover:border-orange-500 transition-all duration-300 group"
              >
                <FaLinkedinIn className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-orange-500 p-3 rounded-xl border border-white/10 hover:border-orange-500 transition-all duration-300 group"
              >
                <FaTwitter className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">{language === "en" ? "Our Services" : "Palvelumme"}</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services/faculty-cleaning" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-orange-500/50 rounded-full group-hover:bg-orange-400 transition-colors" />
                  {language === "en" ? "Faculty Cleaning" : "Oppilaitosten Siivous"}
                </Link>
              </li>
              <li>
                <Link to="/services/restaurant-cleaning" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-orange-500/50 rounded-full group-hover:bg-orange-400 transition-colors" />
                  {language === "en" ? "Restaurant Cleaning" : "Ravintolan Siivous"}
                </Link>
              </li>
              <li>
                <Link to="/services/office-cleaning" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-orange-500/50 rounded-full group-hover:bg-orange-400 transition-colors" />
                  {language === "en" ? "Office Cleaning" : "Toimiston Siivous"}
                </Link>
              </li>
              <li>
                <Link to="/services/residential-cleaning" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-orange-500/50 rounded-full group-hover:bg-orange-400 transition-colors" />
                  {language === "en" ? "Residential Cleaning" : "Kodin Siivous"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">{language === "en" ? "Quick Links" : "Pikalinkit"}</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-orange-500/50 rounded-full group-hover:bg-orange-400 transition-colors" />
                  {language === "en" ? "Home" : "Etusivu"}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-orange-500/50 rounded-full group-hover:bg-orange-400 transition-colors" />
                  {language === "en" ? "About Us" : "Meistä"}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-orange-500/50 rounded-full group-hover:bg-orange-400 transition-colors" />
                  {language === "en" ? "Blog" : "Blogi"}
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-orange-500/50 rounded-full group-hover:bg-orange-400 transition-colors" />
                  {language === "en" ? "Careers" : "Urat"}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-orange-500/50 rounded-full group-hover:bg-orange-400 transition-colors" />
                  {language === "en" ? "Contact Us" : "Ota Yhteyttä"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">{language === "en" ? "Contact Us" : "Yhteystiedot"}</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-0.5">📍</span>
                <span>Oulu, Finland</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-0.5">📞</span>
                <span>+358 XX XXX XXXX</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-0.5">📧</span>
                <span>info@tazatcleaning.fi</span>
              </li>
            </ul>
            <Link
              to="/quote"
              className="inline-block bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6 py-2.5 rounded-full transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/30 mt-4"
            >
              {language === "en" ? "Get a Quote" : "Pyydä Tarjous"}
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Tazat Cleaning Oy. {language === "en" ? "All rights reserved" : "Kaikki oikeudet pidätetään"}.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-500 hover:text-orange-400 transition-colors duration-200">
                {language === "en" ? "Privacy Policy" : "Tietosuojakäytäntö"}
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-orange-400 transition-colors duration-200">
                {language === "en" ? "Terms & Conditions" : "Käyttöehdot"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
