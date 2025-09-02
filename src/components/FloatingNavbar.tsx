import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const FloatingNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled ? "scale-95" : "scale-100"
      }`}
    >
      <div className="glass rounded-full px-6 py-3 shadow-floating">
        <div className="flex items-center space-x-8">
          <div className="font-bold text-xl gradient-text">Nirvalink</div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Button
              variant="ghost"
              onClick={() => scrollTo("home")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollTo("about")}
              className="text-foreground hover:text-primary transition-colors"
            >
              About Us
            </Button>
            <Button
              variant="ghost"  
              onClick={() => scrollTo("services")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Our Services
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollTo("contact")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default FloatingNavbar;