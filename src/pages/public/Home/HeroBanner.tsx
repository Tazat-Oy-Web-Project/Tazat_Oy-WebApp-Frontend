import { Link } from "react-router-dom";
import heroImage from "../../../assets/icons/hero-banner-5.png";
import { useLanguage } from "../../context/LanguageContext";
import { motion } from "framer-motion";

export default function HeroBanner() {
  const { language } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, easeInOut: 0.6 }
    }
  };

  return (
    <section className="bg-linear-to-r from-orange-500 to-red-500 text-white relative overflow-hidden mt-16">
      
      {/* Animated Background Shapes */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.2, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-yellow-300/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Hero Section */}
      <div className="container mx-auto px-6 md:px-12 py-0 md:py-3 sm:py-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between gap-8 min-h-[400px] md:min-h-[450px]">
          
          {/* Left Content - Text */}
          <motion.div 
            className="w-full md:w-1/2 space-y-4 text-center md:text-left flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p 
              variants={itemVariants}
              className="text-sm md:text-base uppercase tracking-wider font-semibold"
            >
              {language === "en" ? "Professional Cleaning Services" : "Ammattimaiset Siivouspalvelut"}
            </motion.p>
            
            <motion.h1 
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            >
              {language === "en" ? "Cleanliness You Can Trust, Service You Can Count On" : "Puhtaus Johon Voit Luottaa, Palvelu Johon Voit Laskea"}
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-base md:text-lg text-white/90 max-w-lg"
            >
              {language === "en" 
                ? "From homes to offices, restaurants to schools - we deliver spotless results with eco-friendly solutions."
                : "Kodeista toimistoihin, ravintoloista kouluihin - toimitamme moitteettomat tulokset ympäristöystävällisin ratkaisuin."}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-2"
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-orange-500 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition shadow-lg"
                >
                  {language === "en" ? "Contact Us" : "Ota Yhteyttä"}
                </motion.button>
              </Link>
              <Link to="/careers">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-orange-500 transition"
                >
                  {language === "en" ? "Work With Us" : "Työskentele Kanssamme"}
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div 
            className="w-full md:w-1/2 flex justify-center md:justify-end items-stretch"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="h-full flex items-center justify-end">
              <motion.img
                src={heroImage}
                alt="Professional Cleaning Team"
                className="h-[140%] w-auto md:h-[130%] object-contain object-right"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-red-600 py-6 md:py-8 border-t border-red-700 relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20 gap-6 md:gap-0">
            
            {/* Stat 1 */}
            <motion.div 
              className="text-center py-4 md:py-0 md:px-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="text-4xl mb-2"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                🏠
              </motion.div>
              <h3 className="text-base md:text-lg font-semibold">
                {language === "en" ? "1000+ Happy Clients" : "1000+ Tyytyväistä Asiakasta"}
              </h3>
              <p className="text-sm text-white/80 mt-1">
                {language === "en" ? "Trusted by homes and businesses" : "Kotien ja yritysten luottama"}
              </p>
            </motion.div>

            {/* Stat 2 */}
            <motion.div 
              className="text-center py-4 md:py-0 md:px-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="text-4xl mb-2"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, delay: 0.5 }}
              >
                👷‍♂️
              </motion.div>
              <h3 className="text-base md:text-lg font-semibold">
                {language === "en" ? "50+ Skilled Workers" : "50+ Ammattitaitoista Työntekijää"}
              </h3>
              <p className="text-sm text-white/80 mt-1">
                {language === "en" ? "Experienced cleaning professionals" : "Kokeneita siivousammattilaisia"}
              </p>
            </motion.div>

            {/* Stat 3 */}
            <motion.div 
              className="text-center py-4 md:py-0 md:px-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="text-4xl mb-2"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, delay: 1 }}
              >
                🌍
              </motion.div>
              <h3 className="text-base md:text-lg font-semibold">
                {language === "en" ? "Eco-Friendly Approach" : "Ympäristöystävällinen Lähestymistapa"}
              </h3>
              <p className="text-sm text-white/80 mt-1">
                {language === "en" ? "A trailblazer in environmental responsibility" : "Edelläkävijä ympäristövastuussa"}
              </p>
            </motion.div>

          </div>
        </div>
      </div>

    </section>
  );
}
