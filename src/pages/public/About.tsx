import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import teamImage from "./Services/Cleaning-Images/Cleaning Services 4.jpeg";

function About() {
  const { language } = useLanguage();
  
  return (
    <>
      {/* Hero Section */}
      <section className="bg-linear-to-r from-orange-500 to-red-500 text-white py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {language === "en" ? "About Tazat Cleaning" : "Tietoa Tazat Siivouksesta"}
          </h1>
          <p className="text-lg md:text-xl">
            {language === "en" 
              ? "Your trusted partner for professional cleaning services in Finland"
              : "Luotettava kumppanisi ammattimaisiin siivouspalveluihin Suomessa"}
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="container mx-auto max-w-6xl px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              {language === "en" ? "Our Story" : "Tarinamme"}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {language === "en"
                ? "Tazat Cleaning Oy is a Finnish family business committed to delivering exceptional cleaning services across Finland. With over a decade of experience, we have built our reputation on reliability, quality, and customer satisfaction."
                : "Tazat Siivous Oy on suomalainen perheyritys, joka on sitoutunut toimittamaan poikkeuksellisia siivouspalveluja ympäri Suomen. Yli vuosikymmenen kokemuksella olemme rakentaneet maineemme luotettavuuteen, laatuun ja asiakastyytyväisyyteen."}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {language === "en"
                ? "What started as a small local cleaning company has grown into a trusted name in the industry, serving educational institutions, restaurants, offices, and homes throughout the region."
                : "Alun perin pieni paikallinen siivousyritys on kasvanut toimialan luotettavaksi nimeksi, palvellen oppilaitoksia, ravintoloita, toimistoja ja koteja koko alueella."}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {language === "en"
                ? "Our team of over 50 skilled professionals is dedicated to maintaining the highest standards of cleanliness while prioritizing environmental responsibility and sustainability in everything we do."
                : "Yli 50 ammattitaitoisen ammattilaisen tiimimme on omistautunut korkeimpien puhtausstandardien ylläpitämiseen, samalla kun priorisoimme ympäristövastuuta ja kestävyyttä kaikessa tekemisessämme."}
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={teamImage}
              alt={language === "en" ? "Our Team" : "Tiimimme"}
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto max-w-6xl px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            {language === "en" ? "Our Core Values" : "Ydinarvomme"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Value 1 */}
            <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {language === "en" ? "Professionalism" : "Ammattimaisuus"}
              </h3>
              <p className="text-gray-600">
                {language === "en"
                  ? "We maintain the highest standards of professionalism in every aspect of our work, ensuring reliable and consistent service delivery."
                  : "Ylläpidämme korkeimpia ammattimaisuuden standardeja jokaisessa työmme osa-alueessa, varmistaen luotettavan ja johdonmukaisen palvelun."}
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {language === "en" ? "Sustainability" : "Kestävyys"}
              </h3>
              <p className="text-gray-600">
                {language === "en"
                  ? "Environmental responsibility is at the heart of our operations. We use eco-friendly products and sustainable practices."
                  : "Ympäristövastuu on toimintamme ytimessä. Käytämme ympäristöystävällisiä tuotteita ja kestäviä käytäntöjä."}
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {language === "en" ? "Trust" : "Luottamus"}
              </h3>
              <p className="text-gray-600">
                {language === "en"
                  ? "Building long-term relationships based on trust and transparency with our clients and partners is our priority."
                  : "Pitkäaikaisten suhteiden rakentaminen luottamuksen ja läpinäkyvyyden pohjalta asiakkaidemme ja kumppaneidemme kanssa on prioriteettimme."}
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {language === "en" ? "Quality" : "Laatu"}
              </h3>
              <p className="text-gray-600">
                {language === "en"
                  ? "We never compromise on quality. Every job is completed to the highest standards with attention to detail."
                  : "Emme koskaan tingi laadusta. Jokainen työ suoritetaan korkeimpien standardien mukaisesti huomioiden yksityiskohdat."}
              </p>
            </div>

            {/* Value 5 */}
            <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {language === "en" ? "Excellence" : "Erinomaisuus"}
              </h3>
              <p className="text-gray-600">
                {language === "en"
                  ? "We strive for excellence in everything we do, continuously improving our services and training our team."
                  : "Pyrimme erinomaisuuteen kaikessa mitä teemme, parantaen jatkuvasti palveluitamme ja kouluttaen tiimiämme."}
              </p>
            </div>

            {/* Value 6 */}
            <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {language === "en" ? "Care" : "Välittäminen"}
              </h3>
              <p className="text-gray-600">
                {language === "en"
                  ? "We treat every space we clean as if it were our own, with care, respect, and dedication."
                  : "Kohtaamme jokaisen siivoamamme tilan kuin se olisi meidän oma, välittäen, kunnioittaen ja omistautuneena."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container mx-auto max-w-6xl px-6 md:px-12 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
          {language === "en" ? "Why Choose Tazat Cleaning?" : "Miksi Valita Tazat Siivous?"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Feature 1 */}
          <div className="flex items-start space-x-4">
            <div className="shrink-0">
              <div className="bg-orange-100 rounded-full p-3">
                <span className="text-2xl">✓</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {language === "en" ? "Experienced Team" : "Kokenut Tiimi"}
              </h3>
              <p className="text-gray-600">
                {language === "en"
                  ? "Our team of 50+ professionals is thoroughly trained, background-checked, and experienced in all types of cleaning services."
                  : "Yli 50 ammattilaisen tiimimme on perusteellisesti koulutettu, taustaltaan tarkistettu ja kokenut kaikenlaisissa siivouspalveluissa."}
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start space-x-4">
            <div className="shrink-0">
              <div className="bg-orange-100 rounded-full p-3">
                <span className="text-2xl">✓</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {language === "en" ? "Eco-Friendly Products" : "Ympäristöystävälliset Tuotteet"}
              </h3>
              <p className="text-gray-600">
                {language === "en"
                  ? "We prioritize the environment by using eco-friendly, biodegradable cleaning products that are safe for people and pets."
                  : "Priorisoimme ympäristöä käyttämällä ympäristöystävällisiä, biohajoavia siivoustuotteita, jotka ovat turvallisia ihmisille ja lemmikkieläimille."}
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start space-x-4">
            <div className="shrink-0">
              <div className="bg-orange-100 rounded-full p-3">
                <span className="text-2xl">✓</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {language === "en" ? "Flexible Scheduling" : "Joustava Aikataulutus"}
              </h3>
              <p className="text-gray-600">
                {language === "en"
                  ? "We work around your schedule with flexible booking options, including after-hours and weekend services."
                  : "Työskentelemme aikataulusi mukaan joustavilla varausvaihtoehdoilla, mukaan lukien työajan jälkeiset ja viikonlopun palvelut."}
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-start space-x-4">
            <div className="shrink-0">
              <div className="bg-orange-100 rounded-full p-3">
                <span className="text-2xl">✓</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {language === "en" ? "Satisfaction Guarantee" : "Tyytyväisyystakuu"}
              </h3>
              <p className="text-gray-600">
                {language === "en"
                  ? "We stand behind our work with a 100% satisfaction guarantee. If you're not happy, we'll make it right."
                  : "Seisomme työmme takana 100% tyytyväisyystakuulla. Jos et ole tyytyväinen, korjaamme sen."}
              </p>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="flex items-start space-x-4">
            <div className="shrink-0">
              <div className="bg-orange-100 rounded-full p-3">
                <span className="text-2xl">✓</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {language === "en" ? "Competitive Pricing" : "Kilpailukykyinen Hinnoittelu"}
              </h3>
              <p className="text-gray-600">
                {language === "en"
                  ? "We offer transparent, competitive pricing with no hidden fees. Get a customized quote for your specific needs."
                  : "Tarjoamme läpinäkyvän, kilpailukykyisen hinnoittelun ilman piilokuluja. Hanki räätälöity tarjous erityistarpeisiisi."}
              </p>
            </div>
          </div>

          {/* Feature 6 */}
          <div className="flex items-start space-x-4">
            <div className="shrink-0">
              <div className="bg-orange-100 rounded-full p-3">
                <span className="text-2xl">✓</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {language === "en" ? "Local Family Business" : "Paikallinen Perheyritys"}
              </h3>
              <p className="text-gray-600">
                {language === "en"
                  ? "As a Finnish family business, we're deeply rooted in our community and committed to serving our neighbors."
                  : "Suomalaisena perheyrityksenä olemme syvästi juurtuneita yhteisöömme ja sitoutuneita palvelemaan naapureitamme."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Stats Section */}
      <section className="bg-linear-to-r from-orange-500 to-red-500 text-white py-16">
        <div className="container mx-auto max-w-6xl px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">10+</div>
              <p className="text-lg">{language === "en" ? "Years of Experience" : "Vuotta Kokemusta"}</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">50+</div>
              <p className="text-lg">{language === "en" ? "Skilled Workers" : "Ammattitaitoista Työntekijää"}</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">1000+</div>
              <p className="text-lg">{language === "en" ? "Happy Clients" : "Tyytyväistä Asiakasta"}</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">100%</div>
              <p className="text-lg">{language === "en" ? "Satisfaction Rate" : "Tyytyväisyysaste"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto max-w-4xl px-6 md:px-12 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          {language === "en" ? "Ready to Experience the Difference?" : "Valmis Kokemaan Eron?"}
        </h2>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          {language === "en"
            ? "Join hundreds of satisfied clients who trust Tazat Cleaning for their professional cleaning needs."
            : "Liity satojen tyytyväisten asiakkaiden joukkoon, jotka luottavat Tazat Siivoukseen ammattimaisissa siivostarpeissaan."}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/quote"
            className="inline-block bg-orange-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-orange-600 transition shadow-md hover:shadow-lg"
          >
            {language === "en" ? "Get a Free Quote" : "Pyydä Ilmainen Tarjous"}
          </Link>
          <Link
            to="/contact"
            className="inline-block border-2 border-orange-500 text-orange-500 font-semibold px-8 py-3 rounded-full hover:bg-orange-500 hover:text-white transition"
          >
            {language === "en" ? "Contact Us Today" : "Ota Yhteyttä Tänään"}
          </Link>
        </div>
      </section>
    </>
  );
}

export default About;