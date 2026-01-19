import { Link } from "react-router-dom";
import heroImage1 from "../../../assets/icons/hero-banner-5.png";
import heroImage2 from "../../../assets/icons/hero-banner-6.png";
import homeGif from "./hero-banner-images/home.gif";
import workerGif from "./hero-banner-images/worker.gif";
import earthGif from "./hero-banner-images/earth.gif";
import { useLanguage } from "../../context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function HeroBanner() {
  const { language } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = [heroImage1, heroImage2];

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Staggered text animations
  const labelVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }
    }
  };

  const headlineVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }
    }
  };

  const subtextVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, delay: 0.3 }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const}
    }
  };

  return (
    <section className="relative overflow-hidden">
      
      {/* Animated Gradient Background with Depth */}
      <motion.div 
        className="absolute inset-0 bg-linear-to-br from-orange-500 via-orange-600 to-red-600"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" as const}}
        style={{ backgroundSize: '200% 200%' }}
      />
      
      {/* Vignette Effect */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/30" />
      
      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
        }}
      />

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
      <div className="container mx-auto px-6 md:px-12 py-12 md:py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between gap-8 min-h-[300px] md:min-h-[350px]">
          
          {/* Left Content - Text */}
          <div className="w-full md:w-1/2 space-y-4 text-center md:text-left flex flex-col justify-center">
            
            {/* Small Label - Fades in first */}
            <motion.p 
              variants={labelVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-orange-200 text-xs md:text-sm uppercase tracking-widest font-semibold"
            >
              {language === "en" ? "Professional Cleaning Services" : "Ammattimaiset Siivouspalvelut"}
            </motion.p>
            
            {/* Headline - Slides up */}
            <motion.h1 
              variants={headlineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            >
              {language === "en" ? "Cleanliness You Can Trust, Service You Can Count On" : "Puhtaus Johon Voit Luottaa, Palvelu Johon Voit Laskea"}
            </motion.h1>
            
            {/* Subtext - Fades in */}
            <motion.p 
              variants={subtextVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-white/90 text-sm md:text-base max-w-lg leading-relaxed"
            >
              {language === "en" 
                ? "From homes to offices, restaurants to schools - we deliver spotless results with eco-friendly solutions."
                : "Kodeista toimistoihin, ravintoloista kouluihin - toimitamme moitteettomat tulokset ympäristöystävällisin ratkaisuin."}
            </motion.p>

            {/* CTA Buttons - Appear last with scale */}
            <motion.div 
              variants={buttonVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-2"
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl text-sm"
                >
                  {language === "en" ? "Contact Us" : "Ota Yhteyttä"}
                </motion.button>
              </Link>
              <Link to="/careers">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all text-sm"
                >
                  {language === "en" ? "Work With Us" : "Työskentele Kanssamme"}
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Animated Image Carousel */}
          <motion.div 
            className="w-full md:w-1/2 flex justify-center md:justify-end items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative h-64 md:h-80 lg:h-96 w-full flex items-center justify-center md:justify-end">
              {/* Glow Effect Behind Image */}
              <div className="absolute inset-0 bg-white/20 blur-3xl -z-10 scale-75" />
              
              {/* Crossfading Images */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={heroImages[currentImageIndex]}
                  alt="Professional Cleaning Team"
                  className="absolute h-64 md:h-80 lg:h-96 w-auto object-contain drop-shadow-2xl"
                  initial={{ opacity: 0, scale: 1.03, y: 5 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -5 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Glassmorphism Stats Panel */}
      <div className="relative z-10 pb-8 md:pb-12">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-6 md:p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              
              {/* Stat 1 */}
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -4 }}
              >
                <motion.div 
                  className="flex justify-center mb-2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <img 
                    src={homeGif} 
                    alt="Home" 
                    className="h-12 w-12 md:h-14 md:w-14 object-contain"
                  />
                </motion.div>
                <h3 className="text-white text-base md:text-lg font-bold mb-1">
                  {language === "en" ? "1000+ Happy Clients" : "1000+ Tyytyväistä Asiakasta"}
                </h3>
                <p className="text-white/70 text-xs md:text-sm">
                  {language === "en" ? "Trusted by homes and businesses" : "Kotien ja yritysten luottama"}
                </p>
              </motion.div>

              {/* Stat 2 */}
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -4 }}
              >
                <motion.div 
                  className="flex justify-center mb-2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <img 
                    src={workerGif} 
                    alt="Worker" 
                    className="h-12 w-12 md:h-14 md:w-14 object-contain"
                  />
                </motion.div>
                <h3 className="text-white text-base md:text-lg font-bold mb-1">
                  {language === "en" ? "50+ Skilled Workers" : "50+ Ammattitaitoista Työntekijää"}
                </h3>
                <p className="text-white/70 text-xs md:text-sm">
                  {language === "en" ? "Experienced cleaning professionals" : "Kokeneita siivousammattilaisia"}
                </p>
              </motion.div>

              {/* Stat 3 */}
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -4 }}
              >
                <motion.div 
                  className="flex justify-center mb-2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <img 
                    src={earthGif} 
                    alt="Earth" 
                    className="h-12 w-12 md:h-14 md:w-14 object-contain"
                  />
                </motion.div>
                <h3 className="text-white text-base md:text-lg font-bold mb-1">
                  {language === "en" ? "Eco-Friendly Approach" : "Ympäristöystävällinen Lähestymistapa"}
                </h3>
                <p className="text-white/70 text-xs md:text-sm">
                  {language === "en" ? "A trailblazer in environmental responsibility" : "Edelläkävijä ympäristövastuussa"}
                </p>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
