import styles from "./HeroBanner.module.css";
import { Link } from "react-router-dom";

export default function HeroBanner() {
  return (
    <section className="bg-linear-to-r from-orange-500 to-yellow-400 text-white py-0 md:py-4 pb-0 md:pb-10 mt-0 relative overflow-hidden">

      {/* HERO MAIN ROW */}
      <div className={`${styles.heroImageWrapper} container mx-auto flex flex-col md:flex-row items-center justify-between px-8 py-6 md:py-8`}>

        {/* LEFT CONTENT */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <p className="uppercase tracking-wide font-semibold">Trusted Cleaning Experts in Finland</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">Your Cleaniness, Our Priority</h1>

          <p className="text-lg max-w-md mx-auto md:mx-0">
            Professional, reliable, and passionate about making every place shine —
            from offices to homes.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-6">
            <Link
              to="/contact"
              className="border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-orange-500 transition">
              Contact With Us
            </Link>

            <Link
              to="/careers"
              className="border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-orange-500 transition">
              Work For Us
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className={`${styles.heroImageWrapper} relative md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0 z-20`}>
          <img
            src="src/assets/icons/HeroBannerTazatOy-removebg-preview (1).png"
            alt="Professional Cleaning Team"
            className={styles.heroImage}
          />
        </div>
      </div>




      {/* WHITE / RED BAR */}
      <div className="
        w-full bg-red-600 
        h-auto md:h-30
        relative md:absolute 
        md:bottom-0 md:left-0 
        z-10 
        shadow-lg 
        py-8 md:py-5
      ">

        <div className="
    container mx-auto 
    grid grid-cols-1 md:grid-cols-3 
    text-center 
    px-6 md:px-12 
    gap-10 md:gap-0
  ">

     {/* COL 1 */}
    <div className="space-y-2">
      <div className="text-white text-5xl">🏠</div>
      <h3 className="text-lg font-semibold text-white leading-tight">
        Finnish family<br />business
      </h3>
    </div>

    {/* DIVIDER */}
    <div className="hidden md:flex justify-center">
      <div className="h-16 w-px bg-white/50"></div>
    </div>

    {/* COL 2 */}
    <div className="space-y-2">
      <div className="text-white text-5xl">👷‍♂️</div>
      <h3 className="text-lg font-semibold text-white leading-tight">
        50+ skilled work-<br />ers at work
      </h3>
    </div>

    {/* DIVIDER */}
    <div className="hidden md:flex justify-center">
      <div className="h-16 w-px bg-white/50"></div>
    </div>

    {/* COL 3 */}
    <div className="space-y-2">
      <div className="text-white text-5xl">🌍</div>
      <h3 className="text-lg font-semibold text-white leading-tight">
        A trailblazer in<br />responsibility
      </h3>
    </div>

  </div>
</div>


    </section>
  );
}
