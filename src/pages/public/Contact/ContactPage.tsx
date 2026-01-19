import NavbarComponent from "../components/Navbar";
import { FooterComponent } from "../components/Footer";
import Contact from "./Contact";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      <NavbarComponent />
      <Contact />
      <FooterComponent />
    </div>
  );
}
