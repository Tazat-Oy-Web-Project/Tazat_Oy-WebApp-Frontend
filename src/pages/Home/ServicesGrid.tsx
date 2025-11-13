export default function ServicesGrid() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-6 md:px-12 text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Our Services
        </h2>

        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Card 1 */}
          <div className="bg-gray-50 rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Service 1</h3>
            <p className="text-gray-500 text-sm">Short description here.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Service 2</h3>
            <p className="text-gray-500 text-sm">Short description here.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Service 3</h3>
            <p className="text-gray-500 text-sm">Short description here.</p>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-50 rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Service 4</h3>
            <p className="text-gray-500 text-sm">Short description here.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
