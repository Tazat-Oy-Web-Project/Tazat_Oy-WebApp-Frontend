import NavbarComponent from "../components/Navbar";
import { FooterComponent } from "../components/Footer";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import facultyImage from "./Cleaning-Images/Cleaning Services 1.jpeg";

export default function ServiceOne() {
  const { language } = useLanguage();
  
  return (
    <div className="bg-white min-h-screen">
      {/* Navbar */}
      <NavbarComponent />

      {/* Header Section */}
      <section className="bg-linear-to-r from-orange-500 to-red-500 text-white py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center md:text-left">
          <div className="text-6xl mb-4">🏫</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {language === "en" ? "Faculty Cleaning Services" : "Oppilaitosten Siivouspalvelut"}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            {language === "en"
              ? "Professional cleaning services for educational institutions, universities, and training centers. We ensure a safe, hygienic, and conducive learning environment for students and staff."
              : "Ammattimaiset siivouspalvelut oppilaitoksille, yliopistoille ja koulutuskeskuksille. Varmistamme turvallisen, hygieenisen ja oppimista edistävän ympäristön opiskelijoille ja henkilökunnalle."}
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
                src={facultyImage}
                alt="Faculty Cleaning"
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
                  <span className="text-gray-700">{language === "en" ? "Classroom deep cleaning and sanitization" : "Luokkahuoneiden perussiivous ja desinfiointi"}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">{language === "en" ? "Restroom cleaning and disinfection" : "Vessojen siivous ja desinfiointi"}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">{language === "en" ? "Hallway and common area maintenance" : "Käytävien ja yhteisten tilojen huolto"}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">{language === "en" ? "Library and study area cleaning" : "Kirjaston ja opiskelualueiden siivous"}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">{language === "en" ? "Laboratory and specialized room cleaning" : "Laboratorion ja erikoishuoneiden siivous"}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">{language === "en" ? "Eco-friendly cleaning products" : "Ympäristöystävälliset siivoustuotteet"}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">{language === "en" ? "Flexible scheduling (after hours, weekends)" : "Joustava aikataulutus (työajan jälkeen, viikonloput)"}</span>
                </li>
              </ul>
            </div>

            {/* Why Choose Us */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{language === "en" ? "Why Choose Us?" : "Miksi Valita Meidät?"}</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">{language === "en" ? "Experience with educational facilities" : "Kokemusta oppilaitoksista"}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">{language === "en" ? "Insured and background-checked staff" : "Vakuutettu ja taustaltaan tarkistettu henkilöstö"}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">{language === "en" ? "Compliance with health and safety standards" : "Terveys- ja turvastandardien noudattaminen"}</span>
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
                ? "Prices vary depending on the size of the facility, frequency of service, and specific requirements. Contact us for a customized quote tailored to your educational institution."
                : "Hinnat vaihtelevat laitoksen koon, palvelun tiheyden ja erityisvaatimusten mukaan. Ota yhteyttä saadaksesi räätälöidyn tarjouksen oppilaitoksellesi."}
            </p>

            <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-6 text-center">
              <p className="text-gray-800 font-semibold text-xl mb-4">{language === "en" ? "Starting from €35/hour" : "Alkaen 35€/tunti"}</p>
              <p className="text-gray-600 mb-6">
                {language === "en"
                  ? "Special rates available for long-term contracts and large facilities"
                  : "Erikoishinnat saatavilla pitkäaikaisille sopimuksille ja suurille laitoksille"}
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
          <h2 className="text-3xl font-bold text-gray-800 mb-6">{language === "en" ? "Our Approach to Faculty Cleaning" : "Lähestymistapamme Oppilaitosten Siivoukseen"}</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {language === "en"
              ? "At Tazat Cleaning, we understand that educational institutions require special attention to detail. We work around your schedule to minimize disruption to classes and activities, ensuring that students and staff return to a clean, fresh, and healthy environment."
              : "Tazat Siivouksessa ymmärrämme, että oppilaitokset vaativat erityistä huomiota yksityiskohtiin. Työskentelemme aikataulusi mukaan minimoidaksemme häiriöt oppitunneille ja toiminnoille, varmistaen että opiskelijat ja henkilökunta palaavat puhtaaseen, raikkaiseen ja terveelliseen ympäristöön."}
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            {language === "en"
              ? "Our team is trained in the specific needs of educational facilities, from handling sensitive equipment in laboratories to maintaining the cleanliness of high-traffic areas like cafeterias and restrooms."
              : "Tiimimme on koulutettu oppilaitosten erityistarpeisiin, laboratorioiden herkkien laitteiden käsittelystä vilkkaiden alueiden, kuten ruokaloiden ja vessojen, puhtauden ylläpitämiseen."}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {language === "en"
              ? "We use eco-friendly cleaning products that are safe for students, staff, and the environment, while still delivering exceptional results."
              : "Käytämme ympäristöystävällisiä siivoustuotteita, jotka ovat turvallisia opiskelijoille, henkilökunnalle ja ympäristölle, samalla kun toimitamme poikkeuksellisia tuloksia."}
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{language === "en" ? "Ready to Transform Your Facility?" : "Valmis Muuttamaan Laitoksesi?"}</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            {language === "en"
              ? "Contact us today to discuss your faculty cleaning needs and receive a customized cleaning plan."
              : "Ota yhteyttä tänään keskustellaksesi oppilaitoksesi siivostarpeista ja saadaksesi räätälöidyn siivoussuunnitelman."}
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
