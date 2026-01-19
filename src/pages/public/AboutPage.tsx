import NavbarComponent from "./components/Navbar";
import { FooterComponent } from "./components/Footer";
import About from "./About";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <NavbarComponent />
      <About />
      <FooterComponent />
    </div>
  );
}
