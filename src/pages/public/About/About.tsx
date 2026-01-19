import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { motion } from "framer-motion";
import teamImage from "../Services/Cleaning-Images/Cleaning Services 4.jpeg";
import professionalismGif from "./about-page.gif/professionalism.gif";
import sustainabilityGif from "./about-page.gif/sustainability.gif";
import trustGif from "./about-page.gif/trust.gif";
import qualityGif from "./about-page.gif/quality.gif";
import excellenceGif from "./about-page.gif/excellence.gif";
import careGif from "./about-page.gif/care.gif";
import WhyChooseUs from "./components/WhyChooseUs";
import TeamStats from "./components/TeamStats";
import CTASection from "./components/CTASection";

function About() {
  const { language } = useLanguage();
  
  const coreValues = [
    {
      icon: professionalismGif,
      title: language === "en" ? "Professionalism" : "Ammattimaisuus",
      description: language === "en"
        ? "We maintain the highest standards of professionalism in every aspect of our work, ensuring reliable and consistent service delivery."
        : "Ylläpidämme korkeimpia ammattimaisuuden standardeja jokaisessa työmme osa-alueessa, varmistaen luotettavan ja johdonmukaisen palvelun."
    },
    {
      icon: sustainabilityGif,
      title: language === "en" ? "Sustainability" : "Kestävyys",
      description: language === "en"
        ? "Environmental responsibility is at the heart of our operations. We use eco-friendly products and sustainable practices."
        : "Ympäristövastuu on toimintamme ytimessä. Käytämme ympäristöystävällisiä tuotteita ja kestäviä käytäntöjä."
    },
    {
      icon: trustGif,
      title: language === "en" ? "Trust" : "Luottamus",
      description: language === "en"
        ? "Building long-term relationships based on trust and transparency with our clients and partners is our priority."
        : "Pitkäaikaisten suhteiden rakentaminen luottamuksen ja läpinäkyvyyden pohjalta asiakkaidemme ja kumppaneidemme kanssa on prioriteettimme."
    },
    {
      icon: qualityGif,
      title: language === "en" ? "Quality" : "Laatu",
      description: language === "en"
        ? "We never compromise on quality. Every job is completed to the highest standards with attention to detail."
        : "Emme koskaan tingi laadusta. Jokainen työ suoritetaan korkeimpien standardien mukaisesti huomioiden yksityiskohdat."
    },
    {
      icon: excellenceGif,
      title: language === "en" ? "Excellence" : "Erinomaisuus",
      description: language === "en"
        ? "We strive for excellence in everything we do, continuously improving our services and training our team."
        : "Pyrimme erinomaisuuteen kaikessa mitä teemme, parantaen jatkuvasti palveluitamme ja kouluttaen tiimiämme."
    },
    {
      icon: careGif,
      title: language === "en" ? "Care" : "Välittäminen",
      description: language === "en"
        ? "We treat every space we clean as if it were our own, with care, respect, and dedication."
        : "Kohtaamme jokaisen siivoamamme tilan kuin se olisi meidän oma, välittäen, kunnioittaen ja omistautuneena."
    }
  ];
  
  return (
    <>
      {/* Wave Separator at Top */}
      <div className="relative h-24 -mb-1">
        <svg
          className="absolute bottom-0 w-full h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="#1a1a1a"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          ></path>
        </svg>
      </div>

      {/* Dark Futuristic Hero Section */}
      <section className="relative overflow-hidden bg-[#1a1a1a] py-24 md:py-32">
        {/* Subtle Orange Glow Accents */}
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-[120px]"
        />
        <div 
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/15 rounded-full blur-[120px]"
        />
        
        {/* Noise/Grain Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          }}
        />

        {/* Glass Panel Content */}
        <div className="container mx-auto max-w-4xl px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-16 shadow-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full mb-6"
            >
              <span className="text-orange-400 text-sm font-semibold uppercase tracking-wide">
                {language === "en" ? "About Us" : "Tietoa Meistä"}
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              {language === "en" ? "About Tazat Cleaning" : "Tietoa Tazat Siivouksesta"}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-gray-300 text-lg md:text-xl leading-relaxed"
            >
              {language === "en" 
                ? "Your trusted partner for professional cleaning services in Finland"
                : "Luotettava kumppanisi ammattimaisiin siivouspalveluihin Suomessa"}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section - Modern Storytelling Layout */}
      <section className="container mx-auto max-w-7xl px-6 md:px-12 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold text-gray-900"
            >
              {language === "en" ? "Our Story" : "Tarinamme"}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-gray-700 leading-relaxed text-lg"
            >
              {language === "en"
                ? "Tazat Cleaning Oy is a Finnish family business committed to delivering exceptional cleaning services across Finland. With over a decade of experience, we have built our reputation on reliability, quality, and customer satisfaction."
                : "Tazat Siivous Oy on suomalainen perheyritys, joka on sitoutunut toimittamaan poikkeuksellisia siivouspalveluja ympäri Suomen. Yli vuosikymmenen kokemuksella olemme rakentaneet maineemme luotettavuuteen, laatuun ja asiakastyytyväisyyteen."}
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-gray-700 leading-relaxed text-lg"
            >
              {language === "en"
                ? "What started as a small local cleaning company has grown into a trusted name in the industry, serving educational institutions, restaurants, offices, and homes throughout the region."
                : "Alun perin pieni paikallinen siivousyritys on kasvanut toimialan luotettavaksi nimeksi, palvellen oppilaitoksia, ravintoloita, toimistoja ja koteja koko alueella."}
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-gray-700 leading-relaxed text-lg"
            >
              {language === "en"
                ? "Our team of over 50 skilled professionals is dedicated to maintaining the highest standards of cleanliness while prioritizing environmental responsibility and sustainability in everything we do."
                : "Yli 50 ammattitaitoisen ammattilaisen tiimimme on omistautunut korkeimpien puhtausstandardien ylläpitämiseen, samalla kun priorisoimme ympäristövastuuta ja kestävyyttä kaikessa tekemisessämme."}
            </motion.p>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">10+</div>
                <p className="text-gray-600 text-sm md:text-base">
                  {language === "en" ? "Years" : "Vuotta"}
                </p>
              </div>
              <div className="text-center border-l border-r border-gray-200">
                <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">50+</div>
                <p className="text-gray-600 text-sm md:text-base">
                  {language === "en" ? "Workers" : "Työntekijää"}
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">1000+</div>
                <p className="text-gray-600 text-sm md:text-base">
                  {language === "en" ? "Clients" : "Asiakasta"}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Premium Media Card with Orange Glow */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Orange Glow Behind Image */}
            <div className="absolute -inset-4 bg-orange-500/20 rounded-3xl blur-2xl" />
            
            {/* Media Card */}
            <div className="relative bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <img
                src={teamImage}
                alt={language === "en" ? "Our Team" : "Tiimimme"}
                className="w-full h-[500px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Core Values Section - Glassmorphism Cards */}
      <section className="relative overflow-hidden py-20 md:py-28">
        {/* Background */}
        <div className="absolute inset-0 bg-linear-to-b from-gray-50 to-white" />
        
        <div className="container mx-auto max-w-7xl px-6 md:px-12 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-16"
          >
            {language === "en" ? "Our Core Values" : "Ydinarvomme"}
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(249, 115, 22, 0.2)" }}
                className="group bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-3xl p-8 shadow-lg hover:border-orange-400 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="mb-6 flex justify-center"
                >
                  <img 
                    src={value.icon} 
                    alt="" 
                    className="w-16 h-16 object-contain"
                  />
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {value.title}
                </h3>
                
                <p className="text-gray-600 text-center leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs language={language} />

      {/* Team Stats Section */}
      <TeamStats language={language} />

      {/* CTA Section */}
      <CTASection language={language} />
    </>
  );
}

export default About;