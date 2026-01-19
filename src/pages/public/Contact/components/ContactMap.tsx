import { motion } from "framer-motion";

interface ContactMapProps {
  language: string;
}

export default function ContactMap({ language }: ContactMapProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
      whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)" }}
      className="relative w-full bg-white border border-gray-200/60 rounded-2xl shadow-lg overflow-hidden transition-all duration-300"
    >
      {/* Top Overlay Badge */}
      <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md border border-orange-500/30 rounded-full px-4 py-2 shadow-lg">
        <p className="text-sm font-semibold text-gray-900">
          {language === "en" ? "Oulu, Finland" : "Oulu, Suomi"}
        </p>
      </div>

      {/* Map Iframe */}
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1746.2589562826354!2d25.500124217763967!3d65.00950399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4681cdbae5178bbb%3A0x47e18d5d98103083!2sYlioppilaantie%208%2C%2090130%20Oulu!5e0!3m2!1sen!2sfi!4v1732442400000!5m2!1sen!2sfi"
        width="100%" 
        height="300" 
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Tazat Oy Location"
      />
    </motion.div>
  );
}
