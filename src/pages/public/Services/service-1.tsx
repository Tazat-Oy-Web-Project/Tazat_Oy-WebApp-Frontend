import NavbarComponent from "../components/Navbar";
import { FooterComponent } from "../components/Footer";
export default function ServiceOne() {
  return (
    <div className="bg-white min-h-screen">
      {/* Navbar */}
      <NavbarComponent />

      {/* Header Section */}
      <section className="bg-orange-500 text-white py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Service 1 – Professional Cleaning
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            High-quality cleaning services providing spotless homes, offices,
            and commercial spaces — handled by trained professionals.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto max-w-4xl px-6 md:px-12 py-16 space-y-10">

        {/* What We Offer */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Deep home cleaning</li>
            <li>Office cleaning and weekly maintenance</li>
            <li>Kitchen & bathroom deep sanitation</li>
            <li>Dusting, mopping, vacuuming</li>
            <li>Eco-friendly cleaning products available</li>
          </ul>
        </div>

        {/* Pricing */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Pricing</h2>
          <p className="text-gray-600">
            Prices vary depending on the size and type of service.  
            Contact us for a customized quote.
          </p>

          <div className="mt-6 p-6 bg-orange-50 border-l-4 border-orange-500 rounded-lg">
            <p className="text-gray-800 font-semibold">Starting from €29/hour</p>
            <button className="mt-4 px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition">
              Get a Quote
            </button>
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Trusted cleaning professionals</li>
            <li>Insured and background-checked staff</li>
            <li>Flexible booking options</li>
            <li>100% satisfaction guarantee</li>
          </ul>
        </div>

      

      </section>
 {/* Footer Section */}

        <FooterComponent>
            
        </FooterComponent>
     
    </div>

  );
}
