import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";

export function FooterComponent() {
  const { language } = useLanguage();
  
  return (
    <footer className="bg-linear-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-orange-500">{language === "en" ? "Tazat Cleaning" : "Tazat Siivous"}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {language === "en" ? "Professional cleaning services across Finland. Your cleanliness, our priority." : "Ammattimaiset siivouspalvelut ympäri Suomen. Sinun puhtautesi, meidän prioriteettimme."}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 p-3 rounded-full transition"
              >
                <FaFacebookF className="text-white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 p-3 rounded-full transition"
              >
                <FaInstagram className="text-white" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 p-3 rounded-full transition"
              >
                <FaLinkedinIn className="text-white" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 p-3 rounded-full transition"
              >
                <FaTwitter className="text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-orange-500">{language === "en" ? "Our Services" : "Palvelumme"}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/faculty-cleaning" className="text-gray-400 hover:text-orange-500 transition">
                  {language === "en" ? "Faculty Cleaning" : "Oppilaitosten Siivous"}
                </Link>
              </li>
              <li>
                <Link to="/services/restaurant-cleaning" className="text-gray-400 hover:text-orange-500 transition">
                  {language === "en" ? "Restaurant Cleaning" : "Ravintolan Siivous"}
                </Link>
              </li>
              <li>
                <Link to="/services/office-cleaning" className="text-gray-400 hover:text-orange-500 transition">
                  {language === "en" ? "Office Cleaning" : "Toimiston Siivous"}
                </Link>
              </li>
              <li>
                <Link to="/services/residential-cleaning" className="text-gray-400 hover:text-orange-500 transition">
                  {language === "en" ? "Residential Cleaning" : "Kodin Siivous"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-orange-500">{language === "en" ? "Quick Links" : "Pikalinkit"}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-orange-500 transition">
                  {language === "en" ? "Home" : "Etusivu"}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-orange-500 transition">
                  {language === "en" ? "About Us" : "Meistä"}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-orange-500 transition">
                  {language === "en" ? "Blog" : "Blogi"}
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-orange-500 transition">
                  {language === "en" ? "Careers" : "Urat"}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-orange-500 transition">
                  {language === "en" ? "Contact Us" : "Ota Yhteyttä"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-orange-500">{language === "en" ? "Contact Us" : "Yhteystiedot"}</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">📍</span>
                <span>Oulu, Finland</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">📞</span>
                <span>+358 XX XXX XXXX</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">📧</span>
                <span>info@tazatcleaning.fi</span>
              </li>
            </ul>
            <Link
              to="/quote"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full transition mt-4"
            >
              {language === "en" ? "Get a Quote" : "Pyydä Tarjous"}
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Tazat Cleaning Oy. {language === "en" ? "All rights reserved" : "Kaikki oikeudet pidätetään"}.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-500 hover:text-orange-500 transition">
                {language === "en" ? "Privacy Policy" : "Tietosuojakäytäntö"}
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-orange-500 transition">
                {language === "en" ? "Terms & Conditions" : "Käyttöehdot"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
