import { Link } from "react-router-dom";
import {
  FaBuilding,
  FaBroom,
  FaStore,
  FaUtensils,
  FaCheckCircle,
} from "react-icons/fa";

const services = [
  {
    title: "Supermarket Cleaning",
    desc:
      "Clean, hygienic shopping spaces — safe floors, spotless shelves, and fresh environments for customers.",
    features: ["Floors & aisles", "Shelves & counters", "Hygiene-focused cleaning"],
    href: "/services/supermarket-cleaning",
    Icon: FaStore,
    tag: "High traffic",
  },
  {
    title: "Office Cleaning",
    desc:
      "Professional cleaning for workplaces — a healthier and more productive environment.",
    features: ["Desks & common areas", "Trash removal", "Flexible schedule"],
    href: "/services/office-cleaning",
    Icon: FaBuilding,
    tag: "Available",
  },
  {
    title: "Deep Cleaning",
    desc:
      "Top-to-bottom intensive cleaning for kitchens, bathrooms, and hard-to-reach areas.",
    features: ["Appliances", "Tiles & grout", "Deep sanitation"],
    href: "/services/deep-cleaning",
    Icon: FaBroom,
  },
  {
    title: "Restaurant Cleaning",
    desc:
      "Kitchen and dining area cleaning with strong attention to hygiene, grease removal, and food-safe standards.",
    features: ["Kitchen degreasing", "Dining area cleaning", "Sanitation focus"],
    href: "/services/restaurant-cleaning",
    Icon: FaUtensils,
    tag: "Food-safe",
  },
];

export default function ServicesGrid() {
  return (
    <section className="relative bg-white py-16">
      {/* soft background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-100 blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-wide text-orange-600">
            OUR CLEANING SERVICES
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">
            Choose the service that fits your needs
          </h2>
          <p className="mt-4 text-gray-600">
            Trusted cleaning for homes and businesses in Finland — reliable
            staff, flexible bookings, and high standards.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ title, desc, features, href, Icon, tag }) => (
            <Link
              key={title}
              to={href}
              className="group relative rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition
                         hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Icon + badge */}
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                  <Icon className="h-5 w-5" />
                </div>

                {tag && (
                  <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">
                    {tag}
                  </span>
                )}
              </div>

              <h3 className="mt-4 text-lg font-bold text-gray-900">{title}</h3>

              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {desc}
              </p>

              <ul className="mt-3 space-y-1.5 text-sm text-gray-600">
                {features.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <FaCheckCircle className="text-orange-500 text-sm" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange-600">
                Learn more
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl bg-gray-50 px-6 py-6 md:flex-row md:justify-between">
          <p className="text-sm text-gray-700">
            Not sure which service you need? We’ll help you choose.
          </p>

          <div className="flex gap-3">
            <Link
              to="/services"
              className="rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-100 transition"
            >
              View all services
            </Link>
            <Link
              to="/quote"
              className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600 transition"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
