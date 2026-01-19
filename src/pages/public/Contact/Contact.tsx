import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { useLanguage } from "../../context/LanguageContext";
import ContactForm from "./components/ContactForm";
import ContactInfoCards from "./components/ContactInfoCards";
import ContactMap from "./components/ContactMap";
import ContactSocialMedia from "./components/ContactSocialMedia";

type ContactMethod = "call" | "email" | "visit";

function Contact() {
  const { language } = useLanguage();
  const [activeMethod, setActiveMethod] = useState<ContactMethod>("call");
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const stickyY = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <div className="relative flex flex-col justify-start items-center w-full">
      {/* Section Divider Wave */}
      <div className="relative w-full h-24 -mb-1">
        <svg
          className="absolute bottom-0 w-full h-24 opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="url(#wave-gradient)"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          >
            <animate
              attributeName="d"
              dur="8s"
              repeatCount="indefinite"
              values="
                M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z;
                M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z;
                M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              />
          </path>
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#9ca3af" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#f97316" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Dark Futuristic Hero Section */}
      <section className="relative overflow-hidden bg-[#1a1a1a] py-24 md:py-32 w-full">
        {/* Animated Orange Glow Blobs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.1, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600 rounded-full blur-[120px]"
        />
        
        {/* Noise Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          }}
        />

        {/* Glass Panel Content */}
        <div className="container mx-auto max-w-4xl px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ type: "spring", stiffness: 100, damping: 20, duration: 1 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 md:p-14 shadow-2xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 15, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-white text-center mb-6"
            >
              {language === "en" ? "Contact Us" : "Ota Yhteyttä"}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-gray-300 text-center text-base md:text-lg leading-relaxed mb-8"
            >
              {language === "en" 
                ? "We're here to help! Whether you have questions about our services, need a quote, or want to provide feedback, feel free to reach out. Our team is ready to assist you with any inquiries you may have."
                : "Olemme täällä auttamassa! Olitpa sitten kysymässä palveluistamme, tarvitset tarjouksen tai haluat antaa palautetta, ota rohkeasti yhteyttä. Tiimimme on valmis auttamaan sinua kaikissa kysymyksissäsi."}
            </motion.p>

            {/* Contact Chips Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
              className="flex flex-wrap justify-center gap-3 md:gap-4"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-orange-500/30 rounded-full backdrop-blur-sm">
                <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm text-gray-300 font-medium">+358 41 123 4567</span>
              </div>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-orange-500/30 rounded-full backdrop-blur-sm">
                <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm text-gray-300 font-medium">support@tazat.com</span>
              </div>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-orange-500/30 rounded-full backdrop-blur-sm">
                <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm text-gray-300 font-medium">Oulu, Finland</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Data Section */}
      <div ref={containerRef} className="w-full bg-linear-to-b from-gray-50 via-orange-50/20 to-white px-4 md:px-8 py-16 md:py-24">
        <div className="container mx-auto max-w-7xl">
          {/* Contact Method Switcher */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
            className="flex justify-center mb-12"
          >
            <div className="inline-flex bg-white/80 backdrop-blur-lg rounded-full p-1.5 shadow-lg border border-gray-200/60">
              {[
                { id: "call" as ContactMethod, label: language === "en" ? "Call" : "Soita", icon: (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                )},
                { id: "email" as ContactMethod, label: language === "en" ? "Email" : "Sähköposti", icon: (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )},
                { id: "visit" as ContactMethod, label: language === "en" ? "Visit" : "Käy", icon: (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
              ].map((method) => (
                <motion.button
                  key={method.id}
                  onClick={() => setActiveMethod(method.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2 w-full sm:w-auto ${
                    activeMethod === method.id
                      ? "text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {activeMethod === method.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-linear-to-r from-orange-500 to-orange-600 rounded-full shadow-lg"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {method.icon}
                    {method.label}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 xl:grid-cols-10 gap-8">
            
            {/* Left Column - Form (70%) */}
            <div className="xl:col-span-7">
              <ContactForm language={language} />
            </div>

            {/* Right Column - Sticky Info Panel (30%) */}
            <motion.div 
              style={{ y: stickyY }}
              className="xl:col-span-3 xl:sticky xl:top-24 xl:self-start flex flex-col gap-6 h-fit"
            >
              <ContactInfoCards language={language} activeMethod={activeMethod} />
              <ContactMap language={language} />
              <ContactSocialMedia language={language} />
            </motion.div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
