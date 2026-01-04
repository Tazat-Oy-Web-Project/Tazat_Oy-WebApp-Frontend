import NavbarComponent from "../components/Navbar";
import { FooterComponent } from "../components/Footer";
import { Link } from "react-router-dom";

export default function RestaurantCleaning() {
  return (
    <div className="bg-white min-h-screen">
      <NavbarComponent />

      <section className="bg-orange-500 text-white py-16">
        <div className="container mx-auto max-w-4xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold">Restaurant Cleaning</h1>
          <p className="mt-4 text-lg max-w-2xl">
            Specialized cleaning for restaurants ensuring hygiene, safety, and
            compliance with food regulations.
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-4xl px-6 py-16 space-y-12">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Service highlights</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Kitchen deep cleaning & degreasing</li>
            <li>Dining area & seating</li>
            <li>Floors, walls & tiles</li>
            <li>After-hours cleaning available</li>
            <li>Food-safe hygiene standards</li>
          </ul>
        </div>

        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
          <p className="font-semibold text-gray-800">Tailored restaurant plans</p>
          <Link
            to="/quote"
            className="inline-block mt-4 bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition"
          >
            Get a Quote
          </Link>
        </div>
      </section>

      <FooterComponent />
    </div>
  );
}
