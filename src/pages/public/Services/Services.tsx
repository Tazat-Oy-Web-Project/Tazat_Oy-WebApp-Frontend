import NavbarComponent from "../components/Navbar";
import { FooterComponent } from "../components/Footer";
import ServicesGrid from "../Home/ServicesGrid"; // adjust path if needed

export default function Services() {
  return (
    <div className="bg-white min-h-screen">
      <NavbarComponent />
      <ServicesGrid />
      <FooterComponent />
    </div>
  );
}
