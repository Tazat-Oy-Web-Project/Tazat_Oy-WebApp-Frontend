import NavbarComponent from "../components/Navbar";
import { FooterComponent } from "../components/Footer";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import cleaningImage1 from "./Cleaning-Images/Cleaning Services 1.jpeg";
import cleaningImage2 from "./Cleaning-Images/Cleaning Services 2.jpeg";
import cleaningImage3 from "./Cleaning-Images/Cleaning Services 3.jpeg";
import cleaningImage4 from "./Cleaning-Images/Cleaning Services 4.jpeg";

export default function Services() {
  const { language } = useLanguage();
  
  const services = [
    {
      id: 1,
      title: language === "en" ? "Faculty Cleaning" : "Oppilaitosten Siivous",
      description: language === "en" 
        ? "Professional cleaning services for educational institutions, universities, and training centers. We ensure a safe and hygienic learning environment."
        : "Ammattimaiset siivouspalvelut oppilaitoksille, yliopistoille ja koulutuskeskuksille. Varmistamme turvallisen ja hygieenisen oppimisympäristön.",
      icon: "🏫",
      path: "/services/faculty-cleaning",
      features: language === "en" 
        ? [
          "Classroom deep cleaning",
          "Restroom sanitization",
          "Hallway and common area maintenance",
          "Eco-friendly products",
        ]
        : [
          "Luokkahuoneiden perussiivous",
          "Vessojen desinfiointi",
          "Käytävien ja yhteisten tilojen huolto",
          "Ympäristöystävälliset tuotteet",
        ],
      image: cleaningImage1
    },
    {
      id: 2,
      title: language === "en" ? "Restaurant Cleaning" : "Ravintolan Siivous",
      description: language === "en"
        ? "Specialized cleaning for restaurants, cafes, and food service facilities. We maintain the highest standards of hygiene and cleanliness."
        : "Erikoistunut siivous ravintoloille, kahviloille ja ruokapalvelutiloille. Ylläpidämme korkeimpia hygienia- ja puhtausstandardeja.",
      icon: "🍽️",
      path: "/services/restaurant-cleaning",
      features: language === "en"
        ? [
          "Kitchen deep cleaning",
          "Dining area sanitization",
          "Equipment cleaning",
          "Compliance with health standards",
        ]
        : [
          "Keittiön perussiivous",
          "Ruokailutilan desinfiointi",
          "Laitteiden puhdistus",
          "Terveysstandardien noudattaminen",
        ],
      image: cleaningImage2
    },
    {
      id: 3,
      title: language === "en" ? "Office Cleaning" : "Toimiston Siivous",
      description: language === "en"
        ? "Complete office cleaning and maintenance for businesses of all sizes. Create a productive and healthy work environment for your team."
        : "Täydellinen toimiston siivous ja huolto kaikenkokoisille yrityksille. Luo tuottava ja terveellinen työympäristö tiimillesi.",
      icon: "🏢",
      path: "/services/office-cleaning",
      features: language === "en"
        ? [
          "Daily office maintenance",
          "Desk and workspace cleaning",
          "Meeting room sanitization",
          "Flexible scheduling",
        ]
        : [
          "Päivittäinen toimiston huolto",
          "Pöydän ja työpaikan siivous",
          "Kokoushuoneen desinfiointi",
          "Joustava aikataulutus",
        ],
      image: cleaningImage3
    },
    {
      id: 4,
      title: language === "en" ? "Residential Cleaning" : "Kodin Siivous",
      description: language === "en"
        ? "Home cleaning services to keep your living space spotless and fresh. Enjoy more free time while we take care of your home."
        : "Kodin siivouspalvelut pitävät asuintilasi moitteettomana ja raikkaana. Nauti enemmän vapaa-aikaa, kun hoidamme kotisi.",
      icon: "🏠",
      path: "/services/residential-cleaning",
      features: language === "en"
        ? [
          "Deep home cleaning",
          "Kitchen and bathroom sanitation",
          "Dusting and vacuuming",
          "Customized cleaning plans",
        ]
        : [
          "Kodin perussiivous",
          "Keittiön ja kylpyhuoneen saneeraus",
          "Pölyn pyyhkiminen ja imurointi",
          "Räätälöidyt siivoussuunnitelmat",
        ],
      image: cleaningImage4
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Navbar component */}
      <NavbarComponent />

      {/* Hero Section */}
      <section className="bg-linear-to-r from-orange-500 to-red-500 text-white py-16 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {language === "en" ? "Our Professional Cleaning Services" : "Ammattimaiset Siivouspalvelumme"}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            {language === "en" 
              ? "Comprehensive cleaning solutions for every need. From educational institutions to restaurants, offices to homes - we deliver exceptional results every time."
              : "Kattavat siivousratkaisut jokaiseen tarpeeseen. Oppilaitoksista ravintoloihin, toimistoista koteihin - toimitamme poikkeuksellisia tuloksia joka kerta."}
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="container mx-auto max-w-7xl px-6 md:px-12 py-16">
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 items-center`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 space-y-4">
                <div className="text-5xl mb-2">{service.icon}</div>
                <h2 className="text-3xl font-bold text-gray-800">
                  {service.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-orange-500 mr-2 font-bold">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  to={service.path}
                  className="inline-block bg-orange-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-orange-600 transition shadow-md hover:shadow-lg mt-4"
                >
                  {language === "en" ? `Learn More About ${service.title}` : `Lue Lisää ${service.title}`}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto max-w-6xl px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            {language === "en" ? "Why Choose Tazat Cleaning?" : "Miksi Valita Tazat Siivous?"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-5xl mb-4">👷‍♂️</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {language === "en" ? "Experienced Professionals" : "Kokeneet Ammattilaiset"}
              </h3>
              <p className="text-gray-600">
                {language === "en" 
                  ? "50+ skilled workers with extensive training and experience"
                  : "Yli 50 ammattitaitoista työntekijää laajalla koulutuksella ja kokemuksella"}
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {language === "en" ? "Eco-Friendly Approach" : "Ympäristöystävällinen Lähestymistapa"}
              </h3>
              <p className="text-gray-600">
                {language === "en"
                  ? "A trailblazer in environmental responsibility and sustainability"
                  : "Edelläkävijä ympäristövastuussa ja kestävyydessä"}
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {language === "en" ? "Finnish Family Business" : "Suomalainen Perheyritys"}
              </h3>
              <p className="text-gray-600">
                {language === "en"
                  ? "Local, trusted, and committed to quality service"
                  : "Paikallinen, luotettava ja sitoutunut laatupalveluun"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-500 text-white py-16">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === "en" ? "Ready to Get Started?" : "Valmis Aloittamaan?"}
          </h2>
          <p className="text-lg mb-8">
            {language === "en"
              ? "Contact us today for a free quote and experience the difference professional cleaning makes"
              : "Ota yhteyttä tänään saadaksesi ilmaisen tarjouksen ja koe ammattimaisen siivouksen ero"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quote"
              className="bg-white text-orange-500 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition shadow-lg"
            >
              {language === "en" ? "Get a Free Quote" : "Pyydä Ilmainen Tarjous"}
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-orange-500 transition"
            >
              {language === "en" ? "Contact Us" : "Ota Yhteyttä"}
            </Link>
          </div>
        </div>
      </section>

      {/* Footer component */}
      <FooterComponent />
    </div>
  );
}
