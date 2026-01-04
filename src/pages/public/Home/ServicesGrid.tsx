import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

export default function ServicesGrid() {
  const { language } = useLanguage();

  const services = [
    {
      id: 1,
      title: language === "en" ? "Faculty Cleaning" : "Oppilaitosten Siivous",
      description: language === "en" 
        ? "Professional cleaning for schools, universities, and training centers"
        : "Ammattimaiset siivouspalvelut kouluille, yliopistoille ja koulutuskeskuksille",
      icon: "🏫",
      path: "/services/faculty-cleaning"
    },
    {
      id: 2,
      title: language === "en" ? "Restaurant Cleaning" : "Ravintolan Siivous",
      description: language === "en"
        ? "Specialized cleaning for restaurants and food service facilities"
        : "Erikoistunut siivous ravintoloille ja ruokapalvelutiloille",
      icon: "🍽️",
      path: "/services/restaurant-cleaning"
    },
    {
      id: 3,
      title: language === "en" ? "Office Cleaning" : "Toimiston Siivous",
      description: language === "en"
        ? "Complete office cleaning and maintenance for businesses"
        : "Täydellinen toimiston siivous ja huolto yrityksille",
      icon: "🏢",
      path: "/services/office-cleaning"
    },
    {
      id: 4,
      title: language === "en" ? "Residential Cleaning" : "Kodin Siivous",
      description: language === "en"
        ? "Home cleaning services to keep your living space spotless"
        : "Kodin siivouspalvelut pitävät asuintilasi moitteettomana",
      icon: "🏠",
      path: "/services/residential-cleaning"
    }
  ];

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-6 md:px-12 text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          {language === "en" ? "Our Services" : "Palvelumme"}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          {language === "en" 
            ? "Comprehensive cleaning solutions tailored to your needs"
            : "Kattavat siivousratkaisut räätälöity tarpeisiisi"}
        </p>

        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Link 
              key={service.id}
              to={service.path}
              className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {service.description}
              </p>
              <div className="mt-4 text-orange-500 font-semibold group-hover:text-orange-600">
                {language === "en" ? "Learn More" : "Lue Lisää"} →
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <Link
            to="/services"
            className="inline-block bg-orange-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-orange-600 transition shadow-md hover:shadow-lg"
          >
            {language === "en" ? "View All Services" : "Näytä Kaikki Palvelut"}
          </Link>
        </div>
      </div>
    </section>
  );
}
