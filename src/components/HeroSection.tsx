import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Target } from "lucide-react";

const HeroSection = () => {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Transform Your
                <span className="gradient-text block">Digital Future</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                At Nirvalink, we provide cutting-edge technology services including software development, 
                web applications, IT solutions, and business consulting to drive your growth and innovation.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                onClick={scrollToServices}
                className="bg-gradient-primary hover-glow text-primary-foreground px-8 py-3 rounded-full"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToContact}
                className="border-primary/50 text-foreground hover:bg-primary/10 px-8 py-3 rounded-full"
              >
                Get Started
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative animate-scale-in">
            <div className="relative">
              {/* Floating Icons */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow floating animation-delay-100">
                <Code className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-card border border-border rounded-2xl flex items-center justify-center shadow-card floating animation-delay-200">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-card border border-border rounded-2xl flex items-center justify-center shadow-card floating animation-delay-300">
                <Target className="w-8 h-8 text-primary" />
              </div>

              {/* Main Hero Card */}
              <div className="bg-gradient-card border border-border rounded-3xl p-8 shadow-card">
                <div className="space-y-6">
                  <div className="w-full h-48 bg-gradient-primary rounded-2xl flex items-center justify-center">
                    <div className="text-6xl font-bold text-primary-foreground">N</div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Innovation Driven</h3>
                    <p className="text-muted-foreground">
                      Cutting-edge solutions tailored to your business needs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;