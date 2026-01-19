import { FooterComponent } from "../components/Footer";
import NavbarComponent from "../components/Navbar";
import VideoHeroBanner from "./VideoHeroBanner";
import HeroBanner from "./HeroBanner";
import ServicesGrid from "./ServicesGrid";
import Services from "../Services/Services";
import About from "../About";
import Contact from "../Contact/Contact";
import { motion } from "framer-motion";

function Home(){
    // Animation variants for scroll reveal
    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeInOut" as const }
        }
    };

    return(
        <div className="bg-white">
            {/* Navbar component */}
            <NavbarComponent />
            
            {/* Video Hero Banner component */}
            <VideoHeroBanner />
            
            {/* Hero Banner component */}
            <HeroBanner />
            
            {/* Services Grid component with animation */}
            <motion.div
                id="services"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
            >
                <ServicesGrid />
            </motion.div>
            
            {/* Services page content with animation */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
            >
                <Services />
            </motion.div>
            
            {/* About page content with animation */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
            >
                <About />
            </motion.div>
            
            {/* Contact page content with animation */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
            >
                <Contact />
            </motion.div>
            
            {/* Footer component */}
            <FooterComponent />
        </div>
    )
}

export default Home;
