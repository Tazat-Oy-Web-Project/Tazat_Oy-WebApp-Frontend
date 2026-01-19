import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";

interface ContactFormProps {
  language: string;
}

export default function ContactForm({ language }: ContactFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    message: ""
  });
  
  const [showSuccess, setShowSuccess] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [buttonMagnet, setButtonMagnet] = useState({ x: 0, y: 0 });

  // Track form completion
  const requiredFields = ["fullName", "email", "phoneNumber", "message"];
  const completedFields = requiredFields.filter(field => formData[field as keyof typeof formData].trim() !== "");
  const completionPercentage = (completedFields.length / requiredFields.length) * 100;
  
  const getStatusText = () => {
    if (completionPercentage === 0) return language === "en" ? "Get started" : "Aloita täyttö";
    if (completionPercentage === 100) return language === "en" ? "Ready to send!" : "Valmis lähetettäväksi!";
    return language === "en" ? "Almost there" : "Melkein valmis";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phoneNumber: "",
        message: ""
      });
    }, 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Pointer-follow glow effect (desktop only)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!formRef.current || window.matchMedia("(pointer: coarse)").matches) return;
    
    const rect = formRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  // Magnetic button effect
  const handleButtonMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current || window.matchMedia("(pointer: coarse)").matches) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const magnetStrength = 0.3;
    setButtonMagnet({
      x: (mouseX - centerX) * magnetStrength,
      y: (mouseY - centerY) * magnetStrength
    });
  };

  const handleButtonMouseLeave = () => {
    setButtonMagnet({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.8 }}
      className="relative"
    >
      <div className="absolute -inset-6 bg-orange-500/10 rounded-3xl blur-3xl" />
      
      <div 
        ref={formRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="relative bg-white/80 backdrop-blur-lg border border-gray-200/60 rounded-2xl shadow-2xl p-8 md:p-10 hover:shadow-3xl transition-all duration-500 overflow-hidden"
      >
        {/* Pointer-follow glow effect */}
        {isHovering && !window.matchMedia("(pointer: coarse)").matches && (
          <div
            className="absolute inset-0 pointer-events-none opacity-40 transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(249, 115, 22, 0.15), transparent 40%)`
            }}
          />
        )}

        {/* Progress Bar */}
        <div className="relative mb-6">
          <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-linear-to-r from-orange-500 to-orange-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${completionPercentage}%` }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
            />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs font-semibold text-gray-600 mt-2 flex items-center gap-2"
          >
            <span className={`inline-block w-2 h-2 rounded-full ${completionPercentage === 100 ? 'bg-green-500' : 'bg-orange-500'} animate-pulse`} />
            {completedFields.length}/{requiredFields.length} {language === "en" ? "completed" : "täytetty"} • {getStatusText()}
          </motion.p>
        </div>

        <div className="border-b border-gray-200/50 pb-6 mb-8 relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
            {language === "en" ? "Send Us a Message" : "Lähetä Meille Viesti"}
          </h2>
          <p className="text-sm text-gray-600">
            {language === "en" ? "Fill out the form below and we'll get back to you shortly" : "Täytä alla oleva lomake, niin otamme sinuun yhteyttä pian"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="flex flex-col group">
              <label className="text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-orange-600 group-focus-within:-translate-y-0.5 transition-all duration-300">
                {language === "en" ? "Full Name" : "Koko Nimi"} <span className="text-red-500">*</span>
              </label>
              <input 
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder={language === "en" ? "Ryan Wick" : "Matti Meikäläinen"}
                className="border-2 border-gray-200 rounded-xl w-full px-4 py-3.5 text-gray-700 placeholder-gray-400 bg-gray-50 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 focus:bg-white transition-all duration-300 hover:border-gray-300"
              />
            </div>

            <div className="flex flex-col group">
              <label className="text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-orange-600 group-focus-within:-translate-y-0.5 transition-all duration-300">
                {language === "en" ? "Company Name" : "Yrityksen Nimi"} <span className="text-gray-400 text-xs font-normal">({language === "en" ? "optional" : "valinnainen"})</span>
              </label>
              <input 
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder={language === "en" ? "Your Company Ltd." : "Yrityksesi Oy"}
                className="border-2 border-gray-200 rounded-xl w-full px-4 py-3.5 text-gray-700 placeholder-gray-400 bg-gray-50 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 focus:bg-white transition-all duration-300 hover:border-gray-300"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="flex flex-col group">
              <label className="text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-orange-600 group-focus-within:-translate-y-0.5 transition-all duration-300">
                {language === "en" ? "Email Address" : "Sähköpostiosoite"} <span className="text-red-500">*</span>
              </label>
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={language === "en" ? "ryan@example.com" : "matti@esimerkki.fi"}
                className="border-2 border-gray-200 rounded-xl w-full px-4 py-3.5 text-gray-700 placeholder-gray-400 bg-gray-50 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 focus:bg-white transition-all duration-300 hover:border-gray-300"
              />
            </div>

            <div className="flex flex-col group">
              <label className="text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-orange-600 group-focus-within:-translate-y-0.5 transition-all duration-300">
                {language === "en" ? "Phone Number" : "Puhelinnumero"} <span className="text-red-500">*</span>
              </label>
              <input 
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                placeholder="0411234567"
                className="border-2 border-gray-200 rounded-xl w-full px-4 py-3.5 text-gray-700 placeholder-gray-400 bg-gray-50 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 focus:bg-white transition-all duration-300 hover:border-gray-300"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
            className="flex flex-col group"
          >
            <label className="text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-orange-600 group-focus-within:-translate-y-0.5 transition-all duration-300">
              {language === "en" ? "Your Message" : "Viestisi"} <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder={language === "en" ? "Tell us about your inquiry, questions, or how we can help you..." : "Kerro meille tiedustelustasi, kysymyksistäsi tai miten voimme auttaa sinua..."}
              className="border-2 border-gray-200 rounded-xl w-full px-4 py-3.5 text-gray-700 placeholder-gray-400 bg-gray-50 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 focus:bg-white resize-y min-h-40 transition-all duration-300 hover:border-gray-300"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
            className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-gray-200/50"
          >
            <p className="text-sm text-gray-500">
              <span className="text-red-500">*</span> {language === "en" ? "Required fields" : "Pakolliset kentät"}
            </p>
            <motion.button
              ref={buttonRef}
              type="submit"
              onMouseMove={handleButtonMouseMove}
              onMouseLeave={handleButtonMouseLeave}
              animate={{ x: buttonMagnet.x, y: buttonMagnet.y }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="group relative bg-linear-to-r from-orange-500 to-orange-600 text-white font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 w-full sm:w-auto overflow-hidden"
            >
              <motion.span 
                className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full"
                whileHover={{ translateX: "100%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
              
              <span className="relative flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
                {language === "en" ? "Send Message" : "Lähetä Viesti"}
              </span>
            </motion.button>
          </motion.div>
        </form>

        {/* Success Overlay */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center bg-white/40 backdrop-blur-md rounded-2xl z-50"
              aria-live="polite"
              aria-atomic="true"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
                animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                exit={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="bg-white/90 backdrop-blur-xl border-2 border-orange-500/30 rounded-3xl p-10 shadow-2xl max-w-sm mx-4"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
                  className="w-20 h-20 mx-auto mb-6 bg-linear-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/50"
                >
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
                    />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">
                  {language === "en" ? "Message Sent!" : "Viesti Lähetetty!"}
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  {language === "en" ? "We'll get back to you soon." : "Otamme yhteyttä pian."}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
