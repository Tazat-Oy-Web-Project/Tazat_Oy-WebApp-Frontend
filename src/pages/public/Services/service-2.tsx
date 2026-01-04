import NavbarComponent from "../components/Navbar";
import { FooterComponent } from "../components/Footer";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import restaurantImage from "./Cleaning-Images/Cleaning Services 2.jpeg";

export default function ServiceTwo() {
  const { language } = useLanguage();
  
  return (
    <div className="bg-white min-h-screen">
      {/* Navbar */}
      <NavbarComponent />

      {/* Header Section */}
      <section className="bg-linear-to-r from-orange-500 to-red-500 text-white py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center md:text-left">
          <div className="text-6xl mb-4">🍽️</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {language === "en" ? "Restaurant Cleaning Services" : "Ravintolan Siivouspalvelut"}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            {language === "en"
              ? "Specialized cleaning for restaurants, cafes, and food service facilities. We maintain the highest standards of hygiene and cleanliness to ensure your business meets all health regulations."
              : "Erikoistunut siivous ravintoloille, kahviloille ja ruokapalvelutiloille. Ylläpidämme korkeimpia hygienia- ja puhtausstandardeja varmistaaksemme, että yrityksesi täyttää kaikki terveyssäännökset."}
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
                src={restaurantImage}
                alt="Restaurant Cleaning"
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
                  <span className="text-gray-700">{language === "en" ? "Kitchen deep cleaning and degreasing" : "Keittiön perussiivous ja rasvanpoisto"}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">{language === "en" ? "Dining area sanitization" : "Ruokailutilan desinfiointi"}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">{language === "en" ? "Equipment and appliance cleaning" : "Laitteiden ja koneiden puhdistus"}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">{language === "en" ? "Floor cleaning and maintenance" : "Lattian siivous ja huolto"}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">{language === "en" ? "Restroom deep cleaning" : "Vessojen perussiivous"}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">{language === "en" ? "Waste disposal and recycling management" : "Jätteenkäsittely ja kierrätyshallinta"}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">{language === "en" ? "Compliance with food safety standards" : "Elintarviketurvallisuusstandardien noudattaminen"}</span>
                </li>
              </ul>
            </div>

            {/* Why Choose Us */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{language === "en" ? "Why Choose Us?" : "Miksi Valita Meidät?"}</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">{language === "en" ? "Experience with food service facilities" : "Kokemusta ruokapalvelutiloista"}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">{language === "en" ? "Trained in food safety regulations" : "Koulutettu elintarviketurvallisuussääntöihin"}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">{language === "en" ? "Flexible scheduling (after hours)" : "Joustava aikataulutus (työajan jälkeen)"}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">{language === "en" ? "Food-safe cleaning products" : "Elintarviketurvall iset siivoustuotteet"}</span>
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
                ? "Prices vary depending on the size of your facility, frequency of service, and specific cleaning requirements. Contact us for a customized quote tailored to your restaurant or food service business."
                : "Hinnat vaihtelevat laitoksesi koon, palvelun tiheyden ja erityisten siivousvaatimusten mukaan. Ota yhteyttä saadaksesi räätälöidyn tarjouksen ravintolallesi tai ruokapalveluyrityksellesi."}
            </p>

            <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-6 text-center">
              <p className="text-gray-800 font-semibold text-xl mb-4">{language === "en" ? "Starting from €40/hour" : "Alkaen 40€/tunti"}</p>
              <p className="text-gray-600 mb-6">
                {language === "en"
                  ? "Special rates available for daily or weekly service contracts"
                  : "Erikoishinnat saatavilla päivittäisille tai viikoittaisille palvelusopimuksille"}
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
          <h2 className="text-3xl font-bold text-gray-800 mb-6">{language === "en" ? "Our Approach to Restaurant Cleaning" : "Lähestymistapamme Ravintolan Siivoukseen"}</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {language === "en"
              ? "At Tazat Cleaning, we understand that cleanliness is crucial in the food service industry. Our team is specially trained in restaurant and kitchen cleaning, ensuring that every surface meets the highest standards of hygiene."
              : "Tazat Siivouksessa ymmärrämme, että puhtaus on ratkaisevan tärkeää ruokapalvelualalla. Tiimimme on erityiskoulutettu ravintolan ja keittiön siivoukseen, varmistaen että jokainen pinta täyttää korkeimmat hygieniastandardit."}
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            {language === "en"
              ? "We work around your operating hours to minimize disruption to your business. Whether you need daily cleaning, deep cleaning, or specialized services, we have you covered."
              : "Työskentelemme aukioloaikojesi mukaan minimoidaksemme häiriöt liiketoiminnallesi. Tarvitsetpa päivittäistä siivousta, perussiivousta tai erikoispalveluita, me autamme sinua."}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {language === "en"
              ? "All our cleaning products are food-safe and comply with Finnish health and safety regulations, giving you peace of mind that your establishment is in good hands."
              : "Kaikki siivoustuotteemme ovat elintarviketurvallisia ja noudattavat Suomen terveys- ja turvamääräyksiä, antaen sinulle mielenrauhan siitä, että laitoksesi on hyvässä hoivassa."}
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{language === "en" ? "Keep Your Restaurant Spotless" : "Pidä Ravintolasi Moitteettomana"}</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            {language === "en"
              ? "Contact us today to discuss your restaurant cleaning needs and receive a customized cleaning plan."
              : "Ota yhteyttä tänään keskustellaksesi ravintolasi siivostarpeista ja saadaksesi räätälöidyn siivoussuunnitelman."}
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
