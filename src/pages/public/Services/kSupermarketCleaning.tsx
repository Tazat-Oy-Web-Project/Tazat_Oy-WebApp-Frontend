import NavbarComponent from "../components/Navbar";
import { FooterComponent } from "../components/Footer";
import { Link } from "react-router-dom";

export default function SupermarketCleaning() {
  return (
    <div className="bg-white min-h-screen">
      <NavbarComponent />

      <section className="bg-orange-500 text-white py-16">
        <div className="container mx-auto max-w-4xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold">Supermarket Cleaning</h1>
          <p className="mt-4 text-lg max-w-2xl">
            Clean, safe, and customer-ready supermarkets with professional retail
            cleaning solutions.
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-4xl px-6 py-16 space-y-12">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">What we clean</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Aisles & shelves</li>
            <li>Entrances & glass surfaces</li>
            <li>Checkout & cashier areas</li>
            <li>Staff rooms & storage</li>
            <li>Emergency spot-cleaning</li>
          </ul>
        </div>

        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
          <p className="font-semibold text-gray-800">Retail-focused cleaning plans</p>
          <Link
            to="/quote"
            className="inline-block mt-4 bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition"
          >
            Request a Quote
          </Link>
        </div>
      </section>

      <FooterComponent />
    </div>
  );
}
