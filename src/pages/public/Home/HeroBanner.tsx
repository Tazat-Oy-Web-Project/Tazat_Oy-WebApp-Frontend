import styles from "./HeroBanner.module.css";
import { Link } from "react-router-dom";


export default function HeroBanner() {

  return (
    <section className="bg-linear-to-r from-orange-500 to-yellow-400 text-white py-0 md:py-4 md:pb-10  mt-0 relative overflow-hidden">
        {/* Hero Banner Section for both sides*/}
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-8 py-6 md:py-8">
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
            {/* left side text content*/}
            <p className="uppercase tracking-wide font-semibold">Trusted Cleaning Experts in Finland</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Your Cleaniness, Our Priority</h1>
            <p className="text-lg max-w-md mx-auto md:mx-0">Professional, reliable, and passionate about making every place shine —
               from offices to homes.
            </p>

            {/* Call-to-action buttons */}

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-6">
             <Link
              to="/contact"  
              className="border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-orange-500 transition">
              Contact With Us
             </Link>  

             <Link
              to="/careers"  
              className= "border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-orange-500 transition">
              Work For Us
             </Link>
            </div> 
        </div> 
        
           {/* right side image content*/}
        <div className={`${styles.heroImageWrapper} md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0 relative`}>
          
            {/* DESKTOP bar (behind image) */}
            <div className="hidden md:block absolute bottom-0 left-0 w-full h-28 bg-white" />
           
            <img
             src="src/assets/icons/HeroBannerTazatOy-removebg-preview (1).png" 
             alt="Professional Cleaning Team"
             className={styles.heroImage}
            />
            
        </div>
      </div>
 



      <section className="relative bg-white -mt-8 md:-mt-10 z-20 py-6 md:py-2">
         <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left px-6 md:px-12 gap-8 pt-10">
          {/* ITEM 1 */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <div className="text-orange-500 text-3xl">🏠</div>
            <h3 className="text-lg font-semibold text-gray-800">
              Finnish family business
            </h3>
          </div>

           {/* Divider */}
          <div className="hidden md:block h-12 w-px bg-gray-300"></div>

          {/* ITEM 2 */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <div className="text-orange-500 text-3xl">👷‍♂️</div>
            <h3 className="text-lg font-semibold text-gray-800">
              13,500 skilled workers at work
            </h3>
          </div>

          {/* Divider */}
          <div className="hidden md:block h-12 w-px bg-gray-300"></div>

          {/* ITEM 3 */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <div className="text-orange-500 text-3xl">🌍</div>
            <h3 className="text-lg font-semibold text-gray-800">
              A trailblazer in responsibility
            </h3>
          </div>
          </div>

      </section>
    </section>













    







  );
}
