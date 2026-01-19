import { motion } from "framer-motion";

interface WhyChooseUsProps {
  language: string;
}

export default function WhyChooseUs({ language }: WhyChooseUsProps) {
  const features = [
    {
      title: language === "en" ? "Experienced Team" : "Kokenut Tiimi",
      description: language === "en"
        ? "Our team of 50+ professionals is thoroughly trained, background-checked, and experienced in all types of cleaning services."
        : "Yli 50 ammattilaisen tiimimme on perusteellisesti koulutettu, taustaltaan tarkistettu ja kokenut kaikenlaisissa siivouspalveluissa.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: language === "en" ? "Eco-Friendly Products" : "Ympäristöystävälliset Tuotteet",
      description: language === "en"
        ? "We prioritize the environment by using eco-friendly, biodegradable cleaning products that are safe for people and pets."
        : "Priorisoimme ympäristöä käyttämällä ympäristöystävällisiä, biohajoavia siivoustuotteita, jotka ovat turvallisia ihmisille ja lemmikkieläimille.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: language === "en" ? "Flexible Scheduling" : "Joustava Aikataulutus",
      description: language === "en"
        ? "We work around your schedule with flexible booking options, including after-hours and weekend services."
        : "Työskentelemme aikataulusi mukaan joustavilla varausvaihtoehdoilla, mukaan lukien työajan jälkeiset ja viikonlopun palvelut.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: language === "en" ? "Satisfaction Guarantee" : "Tyytyväisyystakuu",
      description: language === "en"
        ? "We stand behind our work with a 100% satisfaction guarantee. If you're not happy, we'll make it right."
        : "Seisomme työmme takana 100% tyytyväisyystakuulla. Jos et ole tyytyväinen, korjaamme sen.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: language === "en" ? "Competitive Pricing" : "Kilpailukykyinen Hinnoittelu",
      description: language === "en"
        ? "We offer transparent, competitive pricing with no hidden fees. Get a customized quote for your specific needs."
        : "Tarjoamme läpinäkyvän, kilpailukykyisen hinnoittelun ilman piilokuluja. Hanki räätälöity tarjous erityistarpeisiisi.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: language === "en" ? "Local Family Business" : "Paikallinen Perheyritys",
      description: language === "en"
        ? "As a Finnish family business, we're deeply rooted in our community and committed to serving our neighbors."
        : "Suomalaisena perheyrityksenä olemme syvästi juurtuneita yhteisöömme ja sitoutuneita palvelemaan naapureitamme.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-[#fafafa]" />
      
      <div className="container mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-[#0a0a0a] text-center mb-16"
        >
          {language === "en" ? "Why Choose Tazat Cleaning?" : "Miksi Valita Tazat Siivous?"}
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(249, 115, 22, 0.15)" }}
              className="group bg-white/95 backdrop-blur-lg border border-gray-100 rounded-2xl p-8 shadow-lg shadow-black/5 hover:shadow-2xl hover:shadow-orange-500/10 hover:border-orange-400/50 transition-all duration-500"
            >
              <div className="flex items-start gap-5">
                {/* Icon Badge */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="shrink-0 w-14 h-14 rounded-full bg-linear-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg group-hover:shadow-orange-500/50"
                >
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </motion.div>
                
                {/* Content */}
                <div className="space-y-3 flex-1">
                  <h3 className="text-xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
