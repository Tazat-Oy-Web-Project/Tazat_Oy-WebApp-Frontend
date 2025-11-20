import { FooterComponent } from "../components/Footer";
import NavbarComponent from "../components/Navbar";
import HeroBanner from "./HeroBanner";
import ServicesGrid from "./ServicesGrid";

function Home(){
    return(
        <div className="bg-white">
            {/* Navbar component */}
            <NavbarComponent />
            {/* Hero Banner component */}
            <HeroBanner />
            {/* Services Grid component */}
            <ServicesGrid />
            {/* Footer component */}
            <FooterComponent />
        </div>
    )
}

export default Home;
