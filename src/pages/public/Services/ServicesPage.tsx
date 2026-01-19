import NavbarComponent from "../components/Navbar";
import { FooterComponent } from "../components/Footer";
import Services from "./Services";

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen">
      <NavbarComponent />
      <Services />
      <FooterComponent />
    </div>
  );
}
