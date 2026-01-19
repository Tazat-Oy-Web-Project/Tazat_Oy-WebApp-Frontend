/// <reference path="../../../types/model-viewer.d.ts" />

import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { useEffect } from "react";

export default function ToolsShowcase3D() {
  const { language } = useLanguage();

  // Load model-viewer script
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js';
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const content = {
    en: {
      title: "Tools We Use",
      subtitle: "Industrial-grade cleaning machines for exceptional results",
      benefits: [
        { 
          icon: "✨", 
          title: "Deep Clean", 
          description: "Professional-grade equipment delivers superior cleaning power that surpasses traditional methods"
        },
        { 
          icon: "⚡", 
          title: "Fast & Efficient", 
          description: "Complete large-scale cleaning projects in record time with our advanced machinery"
        },
        { 
          icon: "🌿", 
          title: "Eco-Friendly", 
          description: "Sustainable cleaning solutions that minimize water usage and environmental impact"
        }
      ]
    },
    fi: {
      title: "Työkalut Joita Käytämme",
      subtitle: "Teollisuusluokan puhdistuskoneet poikkeuksellisiin tuloksiin",
      benefits: [
        { 
          icon: "✨", 
          title: "Syvä Puhdistus", 
          description: "Ammattitason laitteet tarjoavat ylivoimaisen puhdistustehon perinteisiin menetelmiin verrattuna"
        },
        { 
          icon: "⚡", 
          title: "Nopea & Tehokas", 
          description: "Suorita laajamittaiset puhdistusprojektit ennätysajassa kehittyneillä koneilla"
        },
        { 
          icon: "🌿", 
          title: "Ympäristöystävällinen", 
          description: "Kestävät puhdistusratkaisut minimoivat vedenkulutuksen ja ympäristövaikutukset"
        }
      ]
    }
  };

  const t = language === "en" ? content.en : content.fi;

  return (
    <section className="relative overflow-hidden bg-[#1a1a1a] py-20 md:py-32">
      {/* Animated Orange Glow Blobs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-[140px] pointer-events-none"
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.08, 0.15]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600 rounded-full blur-[140px] pointer-events-none"
      />

      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 20, duration: 0.8 }}
        >
          {/* Glass Card Container */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Side - Text Content */}
              <div className="order-2 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                >
                  <div className="inline-block mb-4 px-4 py-1.5 bg-orange-500/20 border border-orange-500/30 rounded-full">
                    <span className="text-sm font-semibold text-orange-400">
                      {language === "en" ? "Our Equipment" : "Laitteistomme"}
                    </span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    {t.title}
                  </h2>
                  
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    {t.subtitle}
                  </p>

                  {/* Benefits List */}
                  <div className="space-y-6">
                    {t.benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 100 }}
                        className="flex gap-4 group"
                      >
                        <div className="flex items-center justify-center w-12 h-12 shrink-0 bg-linear-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-xl group-hover:scale-110 transition-transform duration-300">
                          <span className="text-2xl">{benefit.icon}</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">
                            {benefit.title}
                          </h3>
                          <p className="text-sm text-gray-400 leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right Side - 3D Model */}
              <div className="order-1 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 80, damping: 20 }}
                  className="relative"
                >
                  {/* 3D Model Viewer Container */}
                  <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-linear-to-br from-orange-500/10 via-transparent to-orange-600/10 pointer-events-none" />
                    
                    {/* Model Viewer */}
                    <div className="relative z-10">
                      {/* @ts-ignore - model-viewer is a web component */}
                      <model-viewer
                        src="/models/scrubber.glb"
                        alt="Industrial cleaning scrubber machine"
                        auto-rotate="true"
                        camera-controls="true"
                        rotation-per-second="30deg"
                        interaction-prompt="none"
                        loading="eager"
                        style={{
                          width: '100%',
                          height: '400px',
                          background: 'transparent'
                        }}
                        className="w-full h-[400px]"
                      />
                    </div>

                    {/* Model Label */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gray-400 mb-0.5">
                          {language === "en" ? "Featured Equipment" : "Esitelty Laite"}
                        </p>
                        <p className="text-sm font-bold text-white">
                          {language === "en" ? "Industrial Floor Scrubber" : "Teollisuuslattianpesukone"}
                        </p>
                      </div>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs text-gray-400 ml-1">
                          {language === "en" ? "3D View" : "3D Näkymä"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Interaction Hint */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="text-center text-sm text-gray-400 mt-4"
                  >
                    {language === "en" ? "🖱️ Drag to rotate • Scroll to zoom" : "🖱️ Vedä pyörittääksesi • Vieritä zoomataksesi"}
                  </motion.p>
                </motion.div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
