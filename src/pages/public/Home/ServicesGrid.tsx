import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { motion } from "framer-motion";

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
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-6 md:px-12 text-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          {language === "en" ? "Our Services" : "Palvelumme"}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto mb-10"
        >
          {language === "en" 
            ? "Comprehensive cleaning solutions tailored to your needs"
            : "Kattavat siivousratkaisut räätälöity tarpeisiisi"}
        </motion.p>

        {/* Grid layout with staggered animations */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={cardVariants}>
              <Link 
                to={service.path}
                className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 block group relative overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-orange-600/10 transition-all duration-300 rounded-xl" />
                
                <motion.div 
                  className="text-5xl mb-4 relative z-10"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 relative z-10">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm relative z-10">
                  {service.description}
                </p>
                <div className="mt-4 text-orange-500 font-semibold group-hover:text-orange-600 relative z-10">
                  {language === "en" ? "Learn More" : "Lue Lisää"} →
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Link to="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-orange-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-orange-600 transition shadow-md hover:shadow-lg"
            >
              {language === "en" ? "View All Services" : "Näytä Kaikki Palvelut"}
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
