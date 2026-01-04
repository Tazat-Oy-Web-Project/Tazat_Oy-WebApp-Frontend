import NavbarComponent from "./components/Navbar";
import { FooterComponent } from "./components/Footer";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="bg-white min-h-screen">
      {/* Navbar component */}
      <NavbarComponent />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Tazat Cleaning</h1>
          <p className="text-lg md:text-xl">
            Your trusted partner for professional cleaning services in Finland
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="container mx-auto max-w-6xl px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Story</h2>
            <p className="text-gray-700 leading-relaxed">
              Tazat Cleaning Oy is a Finnish family business committed to delivering exceptional 
              cleaning services across Finland. With over a decade of experience, we have built 
              our reputation on reliability, quality, and customer satisfaction.
            </p>
            <p className="text-gray-700 leading-relaxed">
              What started as a small local cleaning company has grown into a trusted name in 
              the industry, serving educational institutions, restaurants, offices, and homes 
              throughout the region.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our team of over 50 skilled professionals is dedicated to maintaining the highest 
              standards of cleanliness while prioritizing environmental responsibility and 
              sustainability in everything we do.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="/src/pages/public/Services/Cleaning-Images/Cleaning Services 5.jpeg"
              alt="Our Team"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto max-w-6xl px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Value 1 */}
            <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Professionalism</h3>
              <p className="text-gray-600">
                We maintain the highest standards of professionalism in every aspect of our work, 
                ensuring reliable and consistent service delivery.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Sustainability</h3>
              <p className="text-gray-600">
                Environmental responsibility is at the heart of our operations. We use eco-friendly 
                products and sustainable practices.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Trust</h3>
              <p className="text-gray-600">
                Building long-term relationships based on trust and transparency with our clients 
                and partners is our priority.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Quality</h3>
              <p className="text-gray-600">
                We never compromise on quality. Every job is completed to the highest standards 
                with attention to detail.
              </p>
            </div>

            {/* Value 5 */}
            <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, continuously improving our services 
                and training our team.
              </p>
            </div>

            {/* Value 6 */}
            <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Care</h3>
              <p className="text-gray-600">
                We treat every space we clean as if it were our own, with care, respect, 
                and dedication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container mx-auto max-w-6xl px-6 md:px-12 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
          Why Choose Tazat Cleaning?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Feature 1 */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="bg-orange-100 rounded-full p-3">
                <span className="text-2xl">✓</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Experienced Team
              </h3>
              <p className="text-gray-600">
                Our team of 50+ professionals is thoroughly trained, background-checked, 
                and experienced in all types of cleaning services.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="bg-orange-100 rounded-full p-3">
                <span className="text-2xl">✓</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Eco-Friendly Products
              </h3>
              <p className="text-gray-600">
                We prioritize the environment by using eco-friendly, biodegradable cleaning 
                products that are safe for people and pets.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="bg-orange-100 rounded-full p-3">
                <span className="text-2xl">✓</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Flexible Scheduling
              </h3>
              <p className="text-gray-600">
                We work around your schedule with flexible booking options, including 
                after-hours and weekend services.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="bg-orange-100 rounded-full p-3">
                <span className="text-2xl">✓</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Satisfaction Guarantee
              </h3>
              <p className="text-gray-600">
                We stand behind our work with a 100% satisfaction guarantee. If you're not 
                happy, we'll make it right.
              </p>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="bg-orange-100 rounded-full p-3">
                <span className="text-2xl">✓</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Competitive Pricing
              </h3>
              <p className="text-gray-600">
                We offer transparent, competitive pricing with no hidden fees. Get a 
                customized quote for your specific needs.
              </p>
            </div>
          </div>

          {/* Feature 6 */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="bg-orange-100 rounded-full p-3">
                <span className="text-2xl">✓</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Local Family Business
              </h3>
              <p className="text-gray-600">
                As a Finnish family business, we're deeply rooted in our community and 
                committed to serving our neighbors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Stats Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16">
        <div className="container mx-auto max-w-6xl px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">10+</div>
              <p className="text-lg">Years of Experience</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">50+</div>
              <p className="text-lg">Skilled Workers</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">1000+</div>
              <p className="text-lg">Happy Clients</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">100%</div>
              <p className="text-lg">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto max-w-4xl px-6 md:px-12 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Ready to Experience the Difference?
        </h2>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          Join hundreds of satisfied clients who trust Tazat Cleaning for their 
          professional cleaning needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/quote"
            className="inline-block bg-orange-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-orange-600 transition shadow-md hover:shadow-lg"
          >
            Get a Free Quote
          </Link>
          <Link
            to="/contact"
            className="inline-block border-2 border-orange-500 text-orange-500 font-semibold px-8 py-3 rounded-full hover:bg-orange-500 hover:text-white transition"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

      {/* Footer component */}
      <FooterComponent />
    </div>
  );
}

export default About;