import NavbarComponent from "../components/Navbar";
import { FooterComponent } from "../components/Footer";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import residentialImage from "./Cleaning-Images/Cleaning Services 4.jpeg";

export default function ServiceFour() {
  const { language } = useLanguage();
  
  return (
    <div className="bg-white min-h-screen">
      {/* Navbar */}
      <NavbarComponent />

      {/* Header Section */}
      <section className="bg-linear-to-r from-orange-500 to-red-500 text-white py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center md:text-left">
          <div className="text-6xl mb-4">🏠</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {language === "en" ? "Residential Cleaning Services" : "Kodin Siivouspalvelut"}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            {language === "en"
              ? "Home cleaning services to keep your living space spotless and fresh. Enjoy more free time while we take care of your home with our professional residential cleaning services."
              : "Kodin siivouspalvelut pitävät asuintilasi moitteettomana ja raikkaana. Nauti enemmän vapaa-aikaa, kun hoidamme kotisi ammattimaisilla kodin siivouspalveluillamme."}
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="container mx-auto max-w-6xl px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left Column - Image */}
          <div className="space-y-6">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={residentialImage}
                alt="Residential Cleaning"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-8">
            
            {/* What We Offer */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{language === "en" ? "What We Offer" : "Mitä Tarjoamme"}</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">{language === "en" ? "Deep home cleaning and sanitization" : "Kodin perussiivous ja desinfiointi"}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">{language === "en" ? "Kitchen cleaning and degreasing" : "Keittiön siivous ja rasvanpoisto"}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">{language === "en" ? "Bathroom deep cleaning and sanitization" : "Kylpyhuoneen perussiivous ja desinfiointi"}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">{language === "en" ? "Living areas and bedrooms" : "Oleskelutilat ja makuuhuoneet"}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">{language === "en" ? "Dusting, mopping, and vacuuming" : "Pölyn pyyhkiminen, moppaus ja imurointi"}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">{language === "en" ? "Window and mirror cleaning" : "Ikkunoiden ja peilien puhdistus"}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">{language === "en" ? "Laundry and ironing (optional)" : "Pyykinpesu ja silitys (valinnainen)"}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">{language === "en" ? "Customized cleaning plans" : "Räätälöidyt siivoussuunnitelmat"}</span>
                </li>
              </ul>
            </div>

            {/* Why Choose Us */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{language === "en" ? "Why Choose Us?" : "Miksi Valita Meidät?"}</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">{language === "en" ? "Trusted and background-checked cleaners" : "Luotettavat ja taustaltaan tarkistetut siivoojat"}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">{language === "en" ? "Flexible scheduling to fit your life" : "Joustava aikataulutus elämäntyylisiisi"}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">{language === "en" ? "Eco-friendly cleaning products" : "Ympäristöystävälliset siivoustuotteet"}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">{language === "en" ? "100% satisfaction guarantee" : "100% tyytyväisyystakuu"}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">{language === "en" ? "Pricing" : "Hinnoittelu"}</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 text-center mb-6">
              {language === "en"
                ? "Prices vary depending on the size of your home, frequency of service, and specific cleaning requirements. Contact us for a customized quote tailored to your household needs."
                : "Hinnat vaihtelevat kotisi koon, palvelun tiheyden ja erityisten siivousvaatimusten mukaan. Ota yhteyttä saadaksesi räätälöidyn tarjouksen kotitaloutesi tarpeisiin."}
            </p>

            <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-6 text-center">
              <p className="text-gray-800 font-semibold text-xl mb-4">{language === "en" ? "Starting from €29/hour" : "Alkaen 29€/tunti"}</p>
              <p className="text-gray-600 mb-6">
                {language === "en"
                  ? "Special rates available for recurring weekly or bi-weekly service"
                  : "Erikoishinnat saatavilla viikoittaiselle tai joka toinen viikko palvelulle"}
              </p>
              <Link
                to="/quote"
                className="inline-block px-8 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition shadow-md hover:shadow-lg"
              >
                {language === "en" ? "Get a Free Quote" : "Pyydä Ilmainen Tarjous"}
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-gray-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">{language === "en" ? "Our Approach to Residential Cleaning" : "Lähestymistapamme Kodin Siivoukseen"}</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {language === "en"
              ? "At Tazat Cleaning, we treat your home with the same care and respect we would our own. Our professional cleaners are thoroughly trained and background-checked to ensure your peace of mind."
              : "Tazat Siivouksessa kohtelemme kotiasi samalla huolella ja kunnioituksella kuin omaamme. Ammattimaiset siivoojamme ovat perusteellisesti koulutettuja ja taustaltaan tarkistettuja varmistaaksemme mielenrauhasi."}
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            {language === "en"
              ? "We understand that every home is unique, which is why we offer customized cleaning plans tailored to your specific needs and preferences. Whether you need a one-time deep clean or regular maintenance, we've got you covered."
              : "Ymmärrämme, että jokainen koti on ainutlaatuinen, minkä vuoksi tarjoamme räätälöityjä siivoussuunnitelmia erityistarpeisiisi ja mieltymyksiisi. Tarvitsetpa kertaluonteista perussiivousta tai säännöllistä huoltoa, me autamme sinua."}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {language === "en"
              ? "All our cleaning products are eco-friendly and safe for your family and pets, while still delivering exceptional cleaning results that will leave your home sparkling."
              : "Kaikki siivoustuotteemme ovat ympäristöystävällisiä ja turvallisia perheellesi ja lemmikkieläimille, samalla kun toimitamme poikkeuksellisia siivoustuloksia, jotka jättävät kotisi kimaltelevaksi."}
          </p>
        </div>

        {/* Service Packages */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">{language === "en" ? "Popular Service Packages" : "Suositut Palvelupaketit"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-orange-500 transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{language === "en" ? "Basic Clean" : "Perussiivous"}</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>✓ {language === "en" ? "Dusting and vacuuming" : "Pölyn pyyhkiminen ja imurointi"}</li>
                <li>✓ {language === "en" ? "Kitchen surface cleaning" : "Keittiön pintojen siivous"}</li>
                <li>✓ {language === "en" ? "Bathroom cleaning" : "Kylpyhuoneen siivous"}</li>
                <li>✓ {language === "en" ? "Floor mopping" : "Lattian moppaus"}</li>
              </ul>
              <p className="text-gray-800 font-semibold">{language === "en" ? "From €29/hour" : "Alkaen 29€/tunti"}</p>
            </div>
            <div className="bg-orange-50 border-2 border-orange-500 rounded-xl p-6 shadow-md">
              <div className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-2">
                {language === "en" ? "MOST POPULAR" : "SUOSITUIN"}
              </div>
              <h3 className="text-xl font-semibold text-orange-500 mb-4">{language === "en" ? "Deep Clean" : "Syväsiivous"}</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>✓ {language === "en" ? "Everything in Basic Clean" : "Kaikki perussiivouksesta"}</li>
                <li>✓ {language === "en" ? "Inside appliances" : "Laitteiden sisäpuoli"}</li>
                <li>✓ {language === "en" ? "Cabinet cleaning" : "Kaappien siivous"}</li>
                <li>✓ {language === "en" ? "Detailed bathroom scrub" : "Yksityiskohtainen kylpyhuoneen hankaus"}</li>
                <li>✓ {language === "en" ? "Window cleaning" : "Ikkunoiden puhdistus"}</li>
              </ul>
              <p className="text-gray-800 font-semibold">{language === "en" ? "From €35/hour" : "Alkaen 35€/tunti"}</p>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-orange-500 transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{language === "en" ? "Move In/Out" : "Muutto Siivous"}</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>✓ {language === "en" ? "Complete deep cleaning" : "Täydellinen syväsiivous"}</li>
                <li>✓ {language === "en" ? "All surfaces and appliances" : "Kaikki pinnat ja laitteet"}</li>
                <li>✓ {language === "en" ? "Inside cabinets & drawers" : "Kaappien ja laatikoiden sisäpuoli"}</li>
                <li>✓ {language === "en" ? "All windows" : "Kaikki ikkunat"}</li>
                <li>✓ {language === "en" ? "Detailed everywhere" : "Yksityiskohtaista kaikkialla"}</li>
              </ul>
              <p className="text-gray-800 font-semibold">{language === "en" ? "Custom Quote" : "Räätälöity Tarjous"}</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{language === "en" ? "Experience a Spotless Home" : "Koe Moitteeton Koti"}</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            {language === "en"
              ? "Contact us today to discuss your home cleaning needs and receive a customized cleaning plan."
              : "Ota yhteyttä tänään keskustellaksesi kotisi siivostarpeista ja saadaksesi räätälöidyn siivoussuunnitelman."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block bg-orange-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-orange-600 transition shadow-md hover:shadow-lg"
            >
              {language === "en" ? "Contact Us" : "Ota Yhteyttä"}
            </Link>
            <Link
              to="/services"
              className="inline-block border-2 border-orange-500 text-orange-500 font-semibold px-8 py-3 rounded-full hover:bg-orange-500 hover:text-white transition"
            >
              {language === "en" ? "View All Services" : "Näytä Kaikki Palvelut"}
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <FooterComponent />
    </div>
  );
}
