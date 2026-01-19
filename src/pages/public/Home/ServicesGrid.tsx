// Install dependencies: npm i embla-carousel-react
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { motion } from "framer-motion";
import service1Img from "../Services/service-card-images/our-services-1.png";
import service2Img from "../Services/service-card-images/our-services-2.png";
import service3Img from "../Services/service-card-images/our-services-3.png";
import service4Img from "../Services/service-card-images/our-services-4.png";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState, useRef } from 'react';

export default function ServicesGrid() {
  const { language } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    containScroll: false,
    skipSnaps: false,
    dragFree: false,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Clear autoplay interval
  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  // Start autoplay interval
  const startAutoplay = useCallback(() => {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      if (emblaApi && !isHovered) {
        emblaApi.scrollNext();
      }
    }, 2800); // Advance one card every 2.8 seconds
  }, [emblaApi, isHovered, stopAutoplay]);

  // Initialize carousel and setup listeners
  useEffect(() => {
    if (!emblaApi) return;
    
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Handle autoplay with hover, drag, and visibility
  useEffect(() => {
    if (!emblaApi) return;

    const handlePointerDown = () => stopAutoplay();
    const handlePointerUp = () => {
      if (!isHovered) startAutoplay();
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopAutoplay();
      } else if (!isHovered) {
        startAutoplay();
      }
    };

    // Start autoplay initially
    startAutoplay();

    // Listen to drag events
    emblaApi.on('pointerDown', handlePointerDown);
    emblaApi.on('pointerUp', handlePointerUp);
    
    // Listen to visibility changes
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      stopAutoplay();
      emblaApi.off('pointerDown', handlePointerDown);
      emblaApi.off('pointerUp', handlePointerUp);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [emblaApi, isHovered, startAutoplay, stopAutoplay]);

  // Handle hover state changes
  useEffect(() => {
    if (isHovered) {
      stopAutoplay();
    } else {
      startAutoplay();
    }
  }, [isHovered, startAutoplay, stopAutoplay]);

  const services = [
    {
      id: 1,
      title: language === "en" ? "Faculty Cleaning" : "Oppilaitosten Siivous",
      description: language === "en" 
        ? "Professional cleaning for schools, universities, and training centers"
        : "Ammattimaiset siivouspalvelut kouluille, yliopistoille ja koulutuskeskuksille",
      image: service1Img,
      path: "/services/faculty-cleaning"
    },
    {
      id: 2,
      title: language === "en" ? "Restaurant Cleaning" : "Ravintolan Siivous",
      description: language === "en"
        ? "Specialized cleaning for restaurants and food service facilities"
        : "Erikoistunut siivous ravintoloille ja ruokapalvelutiloille",
      image: service2Img,
      path: "/services/restaurant-cleaning"
    },
    {
      id: 3,
      title: language === "en" ? "Office Cleaning" : "Toimiston Siivous",
      description: language === "en"
        ? "Complete office cleaning and maintenance for businesses"
        : "Täydellinen toimiston siivous ja huolto yrityksille",
      image: service3Img,
      path: "/services/office-cleaning"
    },
    {
      id: 4,
      title: language === "en" ? "Residential Cleaning" : "Kodin Siivous",
      description: language === "en"
        ? "Home cleaning services to keep your living space spotless"
        : "Kodin siivouspalvelut pitävät asuintilasi moitteettomana",
      image: service4Img,
      path: "/services/residential-cleaning"
    }
  ];

  // Duplicate slides for seamless infinite loop (triple the array for smooth looping)
  const duplicatedServices = [...services, ...services, ...services];
  const originalCount = services.length;

  return (
    <section className="bg-linear-to-b from-white to-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-orange-500 uppercase tracking-widest text-sm font-semibold mb-2">
              {language === "en" ? "What We Offer" : "Mitä Tarjoamme"}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {language === "en" ? "Our Services" : "Palvelumme"}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {language === "en" 
                ? "Comprehensive cleaning solutions tailored to your needs"
                : "Kattavat siivousratkaisut räätälöity tarpeisiisi"}
            </p>
          </motion.div>
        </div>

        {/* Filmstrip Carousel */}
        <div 
          className="relative py-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Carousel Container */}
          <div className="overflow-visible" ref={emblaRef}>
            <div className="flex -ml-3 md:-ml-4 lg:-ml-5">
              {duplicatedServices.map((service, index) => {
                // Calculate actual slide index for selection logic (modulo original count)
                const actualIndex = index % originalCount;
                const isSelected = actualIndex === selectedIndex;
                
                return (
                  <div 
                    key={`${service.id}-${index}`}
                    className="flex-[0_0_80%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] pl-3 md:pl-4 lg:pl-5 transition-all duration-500 ease-out"
                    style={{
                      transform: isSelected ? 'scale(1.08)' : 'scale(0.94)',
                      opacity: isSelected ? 1 : 0.65,
                      filter: isSelected ? 'blur(0px)' : 'blur(0.5px)',
                    }}
                  >
                    <Link to={service.path} className="block group">
                      <div className="relative h-72 md:h-80 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                        {/* Image */}
                        <img
                          src={service.image}
                          alt={service.title}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/50 to-transparent group-hover:from-black/90 transition-all duration-300" />
                        
                        {/* Content */}
                        <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                          <h3 className="text-white text-xl md:text-2xl font-bold mb-2 transform group-hover:-translate-y-1 transition-transform duration-300">
                            {service.title}
                          </h3>
                          <p className="text-white/90 text-xs md:text-sm line-clamp-2 mb-3 transform group-hover:-translate-y-1 transition-transform duration-300">
                            {service.description}
                          </p>
                          
                          {/* View Button - always visible on selected, hover on others */}
                          <div className={`transition-all duration-300 ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm text-gray-900 font-semibold rounded-full text-xs md:text-sm hover:bg-orange-500 hover:text-white transition-colors">
                              {language === "en" ? "Learn More" : "Lue Lisää"}
                              <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </span>
                          </div>
                        </div>
                        
                        {/* Selected Indicator - subtle glow */}
                        {isSelected && (
                          <div className="absolute inset-0 ring-2 ring-orange-400/40 ring-offset-2 ring-offset-transparent rounded-3xl pointer-events-none" />
                        )}
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Arrows - Desktop Only */}
          <div className="hidden lg:block">
            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 w-14 h-14 rounded-full bg-white/90 backdrop-blur-md shadow-xl hover:shadow-2xl flex items-center justify-center text-gray-700 hover:bg-orange-500 hover:text-white transition-all duration-300"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 w-14 h-14 rounded-full bg-white/90 backdrop-blur-md shadow-xl hover:shadow-2xl flex items-center justify-center text-gray-700 hover:bg-orange-500 hover:text-white transition-all duration-300"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/*Array.from({ length: originalCount })tors */}
          <div className="flex justify-center gap-2.5 mt-10">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === selectedIndex 
                    ? 'w-10 bg-orange-500 shadow-md' 
                    : 'w-2.5 bg-gray-300 hover:bg-orange-300 hover:w-6'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Link to="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-4 bg-linear-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                {language === "en" ? "View All Services" : "Näytä Kaikki Palvelut"}
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-orange-600 to-orange-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
