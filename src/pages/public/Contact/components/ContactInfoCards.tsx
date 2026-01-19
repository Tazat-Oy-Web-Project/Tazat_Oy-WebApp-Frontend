import { motion, AnimatePresence } from "framer-motion";

interface ContactInfoCardsProps {
  language: string;
  activeMethod?: "call" | "email" | "visit";
}

export default function ContactInfoCards({ language, activeMethod = "call" }: ContactInfoCardsProps) {
  const contactInfo = [
    {
      id: "call",
      title: language === "en" ? "Call Us" : "Soita Meille",
      value: "+358 41 123 4567",
      href: "tel:+358411234567",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>
      )
    },
    {
      id: "email",
      title: language === "en" ? "Email Us" : "Lähetä Sähköpostia",
      value: "support@tazat.com",
      href: "mailto:support@tazat.com",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      )
    },
    {
      id: "visit",
      title: language === "en" ? "Visit Us" : "Käy Luonamme",
      value: "Ylioppilaantie 8 A 15",
      href: "https://www.google.com/maps/place/Ylioppilaantie+8,+90130+Oulu/@65.009504,25.5001242,17z/data=!3m1!4b1!4m6!3m5!1s0x4681cdbae5178bbb:0x47e18d5d98103083!8m2!3d65.009504!4d25.5026991!16s%2Fg%2F11vzfc5mt8?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
      )
    }
  ];

  return (
    <div className="flex flex-col gap-4">
      <AnimatePresence mode="wait">
        {contactInfo.map((info, index) => {
          const isActive = info.id === activeMethod;
          
          return (
            <motion.a
              key={info.id}
              href={info.href}
              target={info.href.startsWith("http") ? "_blank" : undefined}
              rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ 
                opacity: isActive ? 1 : 0.5,
                scale: isActive ? 1 : 0.95,
                y: 0,
                filter: "blur(0px)"
              }}
              whileInView={{ opacity: isActive ? 1 : 0.5, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02, opacity: 1, boxShadow: "0 20px 40px rgba(249, 115, 22, 0.2)" }}
              className={`group flex flex-row gap-4 p-5 bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg border transition-all duration-300 ${
                isActive 
                  ? "border-orange-500 ring-2 ring-orange-500/30 shadow-orange-500/20" 
                  : "border-gray-200/60 hover:border-orange-400/50"
              }`}
            >
              {/* Icon Badge with Pulse */}
              <motion.div
                animate={{ 
                  scale: isActive ? [1, 1.1, 1] : [1, 1.05, 1]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ rotate: 5, scale: 1.1 }}
                className={`flex items-center justify-center w-14 h-14 bg-linear-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg transition-all duration-300 ${
                  isActive ? "shadow-orange-500/60 ring-4 ring-orange-400/30" : "group-hover:shadow-orange-500/50"
                }`}
              >
                <div className="text-white">
                  {info.icon}
                </div>
              </motion.div>
              
              <div className="flex flex-col justify-center">
                <p className={`text-sm font-semibold transition-colors duration-300 ${
                  isActive ? "text-orange-600" : "text-gray-700 group-hover:text-orange-600"
                }`}>
                  {info.title}
                </p>
                <p className="text-base font-bold text-gray-900">
                  {info.value}
                </p>
              </div>
            </motion.a>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
