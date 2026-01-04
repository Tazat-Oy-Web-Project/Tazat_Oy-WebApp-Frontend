import NavbarComponent from "../components/Navbar";
import { FooterComponent } from "../components/Footer";
import { Link } from "react-router-dom";

export default function DeepCleaning() {
  return (
    <div className="bg-white min-h-screen">
      {/* Navbar */}
      <NavbarComponent />

      {/* Header */}
      <section className="bg-orange-500 text-white py-16">
        <div className="container mx-auto max-w-4xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Deep Cleaning
          </h1>
          <p className="mt-4 text-lg max-w-2xl">
            Intensive, top-to-bottom cleaning designed to remove deep dirt,
            grease, and hidden bacteria — perfect for a fresh start.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto max-w-4xl px-6 py-16 space-y-12">
        
        {/* What’s Included */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            What’s included
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Deep kitchen cleaning (appliances, cabinets, tiles)</li>
            <li>Bathroom descaling & sanitization</li>
            <li>Floor scrubbing & stain removal</li>
            <li>Baseboards, doors & light switches</li>
            <li>Hard-to-reach and neglected areas</li>
          </ul>
        </div>

        {/* When You Need It */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            When deep cleaning is ideal
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Seasonal cleaning</li>
            <li>Before or after special events</li>
            <li>After renovation or construction</li>
            <li>Homes not cleaned for a long time</li>
          </ul>
        </div>

        {/* Pricing */}
        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
          <p className="font-semibold text-gray-800">
            Pricing depends on property size & condition
          </p>
          <p className="text-gray-600 mt-1">
            We provide a customized quote after understanding your needs.
          </p>

          <Link
            to="/quote"
            className="inline-block mt-4 bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition"
          >
            Get a Quote
          </Link>
        </div>
      </section>

      {/* Footer */}
      <FooterComponent />
    </div>
  );
}
