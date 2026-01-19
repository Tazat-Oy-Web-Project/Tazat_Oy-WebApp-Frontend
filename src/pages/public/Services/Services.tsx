import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import cleaningImage1 from "./Cleaning-Images/Cleaning Services 1.jpeg";
import cleaningImage2 from "./Cleaning-Images/Cleaning Services 2.jpeg";
import cleaningImage3 from "./Cleaning-Images/Cleaning Services 3.jpeg";
import cleaningImage4 from "./Cleaning-Images/Cleaning Services 4.jpeg";
import facultyGif from "./services-gif/faculty.gif";
import restaurantGif from "./services-gif/resturant.gif";
import officeGif from "./services-gif/office.gif";
import residentialGif from "./services-gif/residential.gif";
import workerGif from "../Home/hero-banner-images/worker.gif";
import earthGif from "../Home/hero-banner-images/earth.gif";
import homeGif from "../Home/hero-banner-images/home.gif";

export default function Services() {
  const { language } = useLanguage();
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const services = [
    {
      id: 1,
      title: language === "en" ? "Faculty Cleaning" : "Oppilaitosten Siivous",
      description: language === "en" 
        ? "Professional cleaning services for educational institutions, universities, and training centers. We ensure a safe and hygienic learning environment."
        : "Ammattimaiset siivouspalvelut oppilaitoksille, yliopistoille ja koulutuskeskuksille. Varmistamme turvallisen ja hygieenisen oppimisympäristön.",
      icon: facultyGif,
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
      icon: restaurantGif,
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
      icon: officeGif,
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
      icon: residentialGif,
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

  // Intersection Observer for scroll storytelling
  useEffect(() => {
    const observers = serviceRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveServiceIndex(index);
            }
          });
        },
        { threshold: 0.5, rootMargin: "-100px 0px -100px 0px" }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (observer && serviceRefs.current[index]) {
          observer.unobserve(serviceRefs.current[index]!);
        }
      });
    };
  }, []);

  return (
    <>
      {/* Premium Hero Section with Glass Panel */}
      <section className="relative overflow-hidden py-24 md:py-32">
        {/* Animated Gradient Background */}
        <div
          className="absolute inset-0 bg-linear-to-br from-orange-500 via-orange-600 to-red-600"
          style={{
            backgroundSize: "400% 400%",
            animation: "gradient 15s ease infinite",
          }}
        />
        
        {/* Vignette Overlay */}
        <div 
          className="absolute inset-0" 
          style={{
            background: "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.3) 100%)"
          }}
        />
        
        {/* Noise Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          }}
        />

        {/* Glass Panel Content */}
        <div className="container mx-auto max-w-5xl px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 md:p-16 shadow-2xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-white text-center mb-6"
            >
              {language === "en" ? "Professional Cleaning Services" : "Ammattimaiset Siivouspalvelut"}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-white/90 text-lg md:text-xl text-center max-w-3xl mx-auto leading-relaxed"
            >
              {language === "en"
                ? "Premium cleaning solutions for educational facilities, restaurants, offices, and homes. Tailored to meet your specific needs."
                : "Premium siivousratkaisut oppilaitoksille, ravintoloille, toimistoille ja koteihin. Räätälöity vastaamaan erityistarpeisiisi."}
            </motion.p>
          </motion.div>
        </div>

        <style>{`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
      </section>

      {/* Scroll Storytelling Services Section - Desktop */}
      <section className="container mx-auto max-w-7xl px-6 md:px-12 py-20 md:py-32">
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Service Details */}
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                ref={(el) => { serviceRefs.current[index] = el; }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 min-h-[600px]"
              >
                {/* Icon Badge */}
                <motion.div 
                  className="inline-flex items-center gap-3 mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <img src={service.icon} alt="" className="w-12 h-12 object-contain" />
                  <span className="text-sm font-semibold text-orange-500 uppercase tracking-wide">
                    {`0${index + 1}`}
                  </span>
                </motion.div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-8">
                  {service.description}
                </p>

                {/* Features List with Pill Checkmarks */}
                <motion.ul className="space-y-4 mb-8">
                  {service.features.map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <span className="shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mt-0.5">
                        <svg className="w-3.5 h-3.5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-700 text-base">{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* CTA Button with Arrow Animation */}
                <Link to={service.path}>
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group w-full px-8 py-4 bg-linear-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    {language === "en" ? `Learn More` : `Lue Lisää`}
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Sticky Changing Image */}
          <div className="sticky top-24 h-fit">
            <motion.div
              key={activeServiceIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src={services[activeServiceIndex].image}
                alt={services[activeServiceIndex].title}
                className="w-full h-[700px] object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>

        {/* Mobile Layout - Stacked */}
        <div className="lg:hidden space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <img src={service.icon} alt="" className="w-10 h-10 object-contain" />
                  <span className="text-xs font-semibold text-orange-500 uppercase tracking-wide">
                    {`0${index + 1}`}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-gray-900">
                  {service.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="shrink-0 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to={service.path}>
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-4 px-6 py-3 bg-linear-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    {language === "en" ? `Learn More` : `Lue Lisää`}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section with Glassmorphism */}
      <section className="relative overflow-hidden py-20 md:py-28">
        {/* Background */}
        <div className="absolute inset-0 bg-linear-to-b from-gray-50 to-white" />
        
        <div className="container mx-auto max-w-7xl px-6 md:px-12 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-16"
          >
            {language === "en" ? "Why Choose Tazat Oy?" : "Miksi Valita Tazat Oy?"}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: workerGif,
                title: language === "en" ? "Expert Team" : "Asiantuntijatiimi",
                description: language === "en"
                  ? "Our trained professionals deliver exceptional results every time"
                  : "Koulutetut ammattilaisemme toimittavat poikkeuksellisia tuloksia joka kerta"
              },
              {
                icon: earthGif,
                title: language === "en" ? "Eco-Friendly" : "Ympäristöystävällinen",
                description: language === "en"
                  ? "We use sustainable, environmentally safe cleaning products"
                  : "Käytämme kestäviä, ympäristöturvallisia siivoustuotteita"
              },
              {
                icon: homeGif,
                title: language === "en" ? "Trusted Service" : "Luotettava Palvelu",
                description: language === "en"
                  ? "Reliable and consistent service you can count on"
                  : "Luotettava ja johdonmukainen palvelu, johon voit luottaa"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white/60 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all text-center"
              >
                <img src={item.icon} alt="" className="w-20 h-20 mx-auto mb-6 object-contain" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="relative overflow-hidden py-20 md:py-28">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-linear-to-r from-orange-500 to-orange-600" />
        
        <div className="container mx-auto max-w-4xl px-6 md:px-12 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            {language === "en" ? "Ready to Get Started?" : "Valmis Aloittamaan?"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed"
          >
            {language === "en"
              ? "Contact us today for a free quote and experience the difference professional cleaning makes"
              : "Ota yhteyttä tänään saadaksesi ilmaisen tarjouksen ja koe ammattimaisen siivouksen ero"}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link to="/quote">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group px-10 py-4 bg-white text-orange-600 font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center gap-2"
              >
                {language === "en" ? "Get a Free Quote" : "Pyydä Ilmainen Tarjous"}
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group px-10 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-orange-600 transition-all flex items-center gap-2"
              >
                {language === "en" ? "Contact Us" : "Ota Yhteyttä"}
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
