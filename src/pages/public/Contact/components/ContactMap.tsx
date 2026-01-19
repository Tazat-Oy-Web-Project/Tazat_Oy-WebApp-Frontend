import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface ContactMapProps {
  language: string;
}

export default function ContactMap({ language }: ContactMapProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showCopyToast, setShowCopyToast] = useState(false);

  const address = "Ylioppilaantie 8 A 15, 90130 Oulu, Finland";
  const googleMapsUrl = "https://www.google.com/maps/place/Ylioppilaantie+8,+90130+Oulu/@65.009504,25.5001242,17z/data=!3m1!4b1!4m6!3m5!1s0x4681cdbae5178bbb:0x47e18d5d98103083!8m2!3d65.009504!4d25.5026991!16s%2Fg%2F11vzfc5mt8?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D";
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Ylioppilaantie+8+A+15,+90130+Oulu,+Finland";

  // ESC key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isExpanded) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isExpanded]);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setShowCopyToast(true);
      setTimeout(() => setShowCopyToast(false), 2000);
    } catch (err) {
      console.error("Failed to copy address:", err);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
        whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(249, 115, 22, 0.2)" }}
        className="relative w-full bg-white border border-gray-100 rounded-2xl shadow-lg shadow-black/5 overflow-hidden transition-all duration-500 group hover:shadow-xl hover:shadow-orange-500/10"
      >
        {/* Glass Overlay Top Bar */}
        <div className="absolute top-0 left-0 right-0 z-10 bg-white/95 backdrop-blur-xl border-b border-gray-100 px-4 py-3 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-linear-to-br from-orange-500 to-orange-600 rounded-lg shadow-md shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-gray-900 truncate">
                {language === "en" ? "Oulu, Finland" : "Oulu, Suomi"}
              </p>
              <p className="text-xs text-gray-600 truncate">
                Ylioppilaantie 8 A 15
              </p>
            </div>
          </div>
        </div>

        {/* Map Iframe */}
        <div className="relative" style={{ paddingTop: "60px" }}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1746.2589562826354!2d25.500124217763967!3d65.00950399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4681cdbae5178bbb%3A0x47e18d5d98103083!2sYlioppilaantie%208%2C%2090130%20Oulu!5e0!3m2!1sen!2sfi!4v1732442400000!5m2!1sen!2sfi"
            width="100%" 
            height="300" 
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Tazat Oy Location"
            className="w-full"
          />
        </div>

        {/* Floating Action Buttons */}
        <div className="absolute bottom-4 right-4 z-10 flex flex-col gap-2">
          {/* Expand Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsExpanded(true)}
            className="flex items-center gap-2 bg-white/95 backdrop-blur-md border border-gray-200 rounded-full px-4 py-2.5 shadow-lg hover:shadow-xl hover:border-orange-500/50 transition-all duration-300 group/btn"
            title={language === "en" ? "Expand map" : "Laajenna kartta"}
          >
            <svg className="w-4 h-4 text-gray-700 group-hover/btn:text-orange-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            <span className="text-sm font-semibold text-gray-700 group-hover/btn:text-orange-600 transition-colors">
              {language === "en" ? "Expand" : "Laajenna"}
            </span>
          </motion.button>

          {/* Open in Maps */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/95 backdrop-blur-md border border-gray-200 rounded-full px-4 py-2.5 shadow-lg hover:shadow-xl hover:border-orange-500/50 transition-all duration-300 group/btn"
            title={language === "en" ? "Open in Google Maps" : "Avaa Google Mapsissa"}
          >
            <svg className="w-4 h-4 text-gray-700 group-hover/btn:text-orange-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <span className="text-sm font-semibold text-gray-700 group-hover/btn:text-orange-600 transition-colors">
              {language === "en" ? "Maps" : "Kartat"}
            </span>
          </motion.a>

          {/* Directions */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/95 backdrop-blur-md border border-gray-200 rounded-full px-4 py-2.5 shadow-lg hover:shadow-xl hover:border-orange-500/50 transition-all duration-300 group/btn"
            title={language === "en" ? "Get directions" : "Hae reitti"}
          >
            <svg className="w-4 h-4 text-gray-700 group-hover/btn:text-orange-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <span className="text-sm font-semibold text-gray-700 group-hover/btn:text-orange-600 transition-colors">
              {language === "en" ? "Directions" : "Reitti"}
            </span>
          </motion.a>

          {/* Copy Address */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCopyAddress}
            className="flex items-center gap-2 bg-white/95 backdrop-blur-md border border-gray-200 rounded-full px-4 py-2.5 shadow-lg hover:shadow-xl hover:border-orange-500/50 transition-all duration-300 group/btn relative"
            title={language === "en" ? "Copy address" : "Kopioi osoite"}
          >
            <svg className="w-4 h-4 text-gray-700 group-hover/btn:text-orange-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <span className="text-sm font-semibold text-gray-700 group-hover/btn:text-orange-600 transition-colors">
              {language === "en" ? "Copy" : "Kopioi"}
            </span>
          </motion.button>
        </div>

        {/* Copy Toast Notification */}
        <AnimatePresence>
          {showCopyToast && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-40 right-4 z-20 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-semibold"
            >
              ✓ {language === "en" ? "Address copied!" : "Osoite kopioitu!"}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Full-Screen Modal */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              exit={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between bg-white/90 backdrop-blur-md border-b border-gray-200/60 px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 bg-linear-to-br from-orange-500 to-orange-600 rounded-lg shadow-md">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {language === "en" ? "Our Location" : "Sijaintimme"}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Ylioppilaantie 8 A 15, 90130 Oulu, Finland
                    </p>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsExpanded(false)}
                  className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                  aria-label="Close modal"
                >
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

              {/* Modal Map */}
              <div className="relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1746.2589562826354!2d25.500124217763967!3d65.00950399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4681cdbae5178bbb%3A0x47e18d5d98103083!2sYlioppilaantie%208%2C%2090130%20Oulu!5e0!3m2!1sen!2sfi!4v1732442400000!5m2!1sen!2sfi"
                  width="100%" 
                  height="600" 
                  style={{ border: 0, height: "80vh" }}
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tazat Oy Location - Expanded View"
                  className="w-full"
                />
              </div>

              {/* Modal Footer Actions */}
              <div className="flex items-center justify-between bg-white/90 backdrop-blur-md border-t border-gray-200/60 px-6 py-4">
                <p className="text-sm text-gray-600">
                  {language === "en" 
                    ? "Press ESC or click outside to close" 
                    : "Paina ESC tai klikkaa ulkopuolelta sulkeaksesi"}
                </p>
                <div className="flex items-center gap-3">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-linear-to-r from-orange-500 to-orange-600 text-white font-semibold px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    {language === "en" ? "Get Directions" : "Hae Reitti"}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
