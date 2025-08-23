import { Code2, Globe, Smartphone, BarChart3, DollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: Code2,
      title: "Software Development",
      description: "Custom software solutions built with cutting-edge technologies to meet your specific business requirements.",
      features: ["Custom Applications", "API Development", "System Integration", "Legacy Modernization"]
    },
    {
      icon: Globe,
      title: "Web & Application Design",
      description: "Beautiful, responsive web applications and mobile apps that deliver exceptional user experiences.",
      features: ["Responsive Design", "UI/UX Design", "Mobile Apps", "Progressive Web Apps"]
    },
    {
      icon: Smartphone,
      title: "IT Solutions",
      description: "Comprehensive IT infrastructure and cloud solutions to optimize your business operations.",
      features: ["Cloud Migration", "Infrastructure Setup", "Cybersecurity", "IT Consulting"]
    },
    {
      icon: DollarSign,
      title: "Financial Services",
      description: "Advanced financial technology solutions and digital payment systems for modern businesses.",
      features: ["Payment Processing", "Financial Analytics", "Banking Solutions", "Compliance Tools"]
    },
    {
      icon: BarChart3,
      title: "Business Consulting",
      description: "Strategic consulting services to help you leverage technology for business growth and efficiency.",
      features: ["Digital Transformation", "Process Optimization", "Technology Strategy", "Performance Analysis"]
    }
  ];

  return (
    <section id="services" className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business operations, 
            enhance efficiency, and drive sustainable growth across all industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="service-card bg-gradient-card border-border shadow-card hover:shadow-floating group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground mt-2">
                    {service.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-card border border-border rounded-3xl p-8 shadow-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how our services can help transform your business operations and drive growth.
            </p>
            <button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-gradient-primary hover-glow text-primary-foreground px-8 py-3 rounded-full font-semibold transition-all"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;