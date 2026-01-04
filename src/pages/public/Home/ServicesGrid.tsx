import { Link } from "react-router-dom";

export default function ServicesGrid() {
  const services = [
    {
      id: 1,
      title: "Faculty Cleaning",
      description: "Professional cleaning services for educational institutions and universities.",
      icon: "🏫",
      path: "/services/faculty-cleaning"
    },
    {
      id: 2,
      title: "Restaurant Cleaning",
      description: "Specialized cleaning for restaurants, cafes, and food service facilities.",
      icon: "🍽️",
      path: "/services/restaurant-cleaning"
    },
    {
      id: 3,
      title: "Office Cleaning",
      description: "Complete office cleaning and maintenance for businesses of all sizes.",
      icon: "🏢",
      path: "/services/office-cleaning"
    },
    {
      id: 4,
      title: "Residential Cleaning",
      description: "Home cleaning services to keep your living space spotless and fresh.",
      icon: "🏠",
      path: "/services/residential-cleaning"
    }
  ];

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-6 md:px-12 text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our Services
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          We provide comprehensive cleaning solutions tailored to your needs
        </p>

        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Link 
              key={service.id}
              to={service.path}
              className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {service.description}
              </p>
              <div className="mt-4 text-orange-500 font-semibold group-hover:text-orange-600">
                Learn More →
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <Link
            to="/services"
            className="inline-block bg-orange-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-orange-600 transition shadow-md hover:shadow-lg"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
