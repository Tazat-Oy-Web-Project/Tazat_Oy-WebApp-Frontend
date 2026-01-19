import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface CTASectionProps {
  language: string;
}

export default function CTASection({ language }: CTASectionProps) {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Light Premium Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-br from-gray-50 via-orange-50/30 to-gray-100" />
      
      {/* Decorative Orange Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[100px]" />
      
      {/* Animated Decorative Lines */}
      <motion.div
        animate={{ 
          scaleX: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-0 w-full h-px bg-linear-to-r from-transparent via-orange-500/30 to-transparent"
      />
      
      {/* Glass CTA Card */}
      <div className="container mx-auto max-w-4xl px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl p-12 md:p-16 shadow-2xl text-center relative overflow-hidden"
        >
          {/* Subtle Inner Glow */}
          <div className="absolute inset-0 bg-linear-to-b from-orange-500/5 to-transparent rounded-3xl" />
          
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              {language === "en" ? "Ready to Experience the Difference?" : "Valmis Kokemaan Eron?"}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-gray-700 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              {language === "en"
                ? "Join hundreds of satisfied clients who trust Tazat Cleaning for their professional cleaning needs."
                : "Liity satojen tyytyväisten asiakkaiden joukkoon, jotka luottavat Tazat Siivoukseen ammattimaisissa siivostarpeissaan."}
            </motion.p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link to="/quote">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3,
                    boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-10 py-4 bg-linear-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full shadow-lg overflow-hidden"
                >
                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  <span className="relative z-10 flex items-center gap-2">
                    {language === "en" ? "Get a Free Quote" : "Pyydä Ilmainen Tarjous"}
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </motion.button>
              </Link>
              
              <Link to="/contact">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3,
                    backgroundColor: "rgb(249, 115, 22)",
                    color: "white"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-10 py-4 border-2 border-orange-500 text-orange-600 font-semibold rounded-full shadow-md hover:shadow-xl transition-all"
                >
                  <span className="flex items-center gap-2">
                    {language === "en" ? "Contact Us Today" : "Ota Yhteyttä Tänään"}
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
