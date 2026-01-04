import NavbarComponent from "../components/Navbar";
import { FooterComponent } from "../components/Footer";
import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      id: 1,
      title: "Faculty Cleaning",
      description: "Professional cleaning services for educational institutions, universities, and training centers. We ensure a safe and hygienic learning environment.",
      icon: "🏫",
      path: "/services/faculty-cleaning",
      features: [
        "Classroom deep cleaning",
        "Restroom sanitization",
        "Hallway and common area maintenance",
        "Eco-friendly products",
      ],
      image: "/src/pages/public/Services/Cleaning-Images/Cleaning Services 1.jpeg"
    },
    {
      id: 2,
      title: "Restaurant Cleaning",
      description: "Specialized cleaning for restaurants, cafes, and food service facilities. We maintain the highest standards of hygiene and cleanliness.",
      icon: "🍽️",
      path: "/services/restaurant-cleaning",
      features: [
        "Kitchen deep cleaning",
        "Dining area sanitization",
        "Equipment cleaning",
        "Compliance with health standards",
      ],
      image: "/src/pages/public/Services/Cleaning-Images/Cleaning Services 2.jpeg"
    },
    {
      id: 3,
      title: "Office Cleaning",
      description: "Complete office cleaning and maintenance for businesses of all sizes. Create a productive and healthy work environment for your team.",
      icon: "🏢",
      path: "/services/office-cleaning",
      features: [
        "Daily office maintenance",
        "Desk and workspace cleaning",
        "Meeting room sanitization",
        "Flexible scheduling",
      ],
      image: "/src/pages/public/Services/Cleaning-Images/Cleaning Services 3.jpeg"
    },
    {
      id: 4,
      title: "Residential Cleaning",
      description: "Home cleaning services to keep your living space spotless and fresh. Enjoy more free time while we take care of your home.",
      icon: "🏠",
      path: "/services/residential-cleaning",
      features: [
        "Deep home cleaning",
        "Kitchen and bathroom sanitation",
        "Dusting and vacuuming",
        "Customized cleaning plans",
      ],
      image: "/src/pages/public/Services/Cleaning-Images/Cleaning Services 4.jpeg"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Navbar component */}
      <NavbarComponent />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Professional Cleaning Services
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Comprehensive cleaning solutions for every need. From educational institutions to restaurants,
            offices to homes - we deliver exceptional results every time.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="container mx-auto max-w-7xl px-6 md:px-12 py-16">
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 items-center`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 space-y-4">
                <div className="text-5xl mb-2">{service.icon}</div>
                <h2 className="text-3xl font-bold text-gray-800">
                  {service.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-orange-500 mr-2 font-bold">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  to={service.path}
                  className="inline-block bg-orange-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-orange-600 transition shadow-md hover:shadow-lg mt-4"
                >
                  Learn More About {service.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto max-w-6xl px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Why Choose Tazat Cleaning?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-5xl mb-4">👷‍♂️</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Experienced Professionals
              </h3>
              <p className="text-gray-600">
                50+ skilled workers with extensive training and experience
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Eco-Friendly Approach
              </h3>
              <p className="text-gray-600">
                A trailblazer in environmental responsibility and sustainability
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Finnish Family Business
              </h3>
              <p className="text-gray-600">
                Local, trusted, and committed to quality service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-500 text-white py-16">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8">
            Contact us today for a free quote and experience the difference professional cleaning makes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quote"
              className="bg-white text-orange-500 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition shadow-lg"
            >
              Get a Free Quote
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-orange-500 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer component */}
      <FooterComponent />
    </div>
  );
}

export default Services;
