import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { motion } from "framer-motion";
import service1Img from "../Services/service-card-images/our-services-1.png";
import service2Img from "../Services/service-card-images/our-services-2.png";
import service3Img from "../Services/service-card-images/our-services-3.png";
import service4Img from "../Services/service-card-images/our-services-4.png";

export default function ServicesGrid() {
  const { language } = useLanguage();

  const services = [
    {
      id: 1,
      title: language === "en" ? "Faculty Cleaning" : "Oppilaitosten Siivous",
      description: language === "en" 
        ? "Professional cleaning for schools, universities, and training centers"
        : "Ammattimaiset siivouspalvelut kouluille, yliopistoille ja koulutuskeskuksille",
      image: service1Img,
      path: "/services/faculty-cleaning"
    },
    {
      id: 2,
      title: language === "en" ? "Restaurant Cleaning" : "Ravintolan Siivous",
      description: language === "en"
        ? "Specialized cleaning for restaurants and food service facilities"
        : "Erikoistunut siivous ravintoloille ja ruokapalvelutiloille",
      image: service2Img,
      path: "/services/restaurant-cleaning"
    },
    {
      id: 3,
      title: language === "en" ? "Office Cleaning" : "Toimiston Siivous",
      description: language === "en"
        ? "Complete office cleaning and maintenance for businesses"
        : "Täydellinen toimiston siivous ja huolto yrityksille",
      image: service3Img,
      path: "/services/office-cleaning"
    },
    {
      id: 4,
      title: language === "en" ? "Residential Cleaning" : "Kodin Siivous",
      description: language === "en"
        ? "Home cleaning services to keep your living space spotless"
        : "Kodin siivouspalvelut pitävät asuintilasi moitteettomana",
      image: service4Img,
      path: "/services/residential-cleaning"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  return (
    <section className="bg-linear-to-b from-white to-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-orange-500 uppercase tracking-widest text-sm font-semibold mb-2">
              {language === "en" ? "What We Offer" : "Mitä Tarjoamme"}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {language === "en" ? "Our Services" : "Palvelumme"}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {language === "en" 
                ? "Comprehensive cleaning solutions tailored to your needs"
                : "Kattavat siivousratkaisut räätälöity tarpeisiisi"}
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={cardVariants}>
              <Link to={service.path} className="block group">
                <motion.div
                  className="relative h-80 rounded-2xl overflow-hidden shadow-lg"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Image */}
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/60 transition-all duration-300" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h3 className="text-white text-2xl font-bold mb-2 transform group-hover:-translate-y-2 transition-transform duration-300">
                      {service.title}
                    </h3>
                    <p className="text-white/90 text-sm mb-4 line-clamp-2 transform group-hover:-translate-y-2 transition-transform duration-300">
                      {service.description}
                    </p>
                    
                    {/* Explore Button - appears on hover */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <span className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-gray-900 font-semibold rounded-full text-sm hover:bg-orange-500 hover:text-white transition-colors">
                        {language === "en" ? "Explore Service" : "Tutustu Palveluun"}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </motion.div>
                  </div>
                  
                  {/* Hover Shadow Enhancement */}
                  <div className="absolute inset-0 shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Link to="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-4 bg-linear-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                {language === "en" ? "View All Services" : "Näytä Kaikki Palvelut"}
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-orange-600 to-orange-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
