import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Zap, Shield, BarChart, Smartphone, Globe, Database } from "lucide-react";

const ProductsSection = () => {
  const products = [
    {
      icon: Globe,
      title: "NirvaWeb Suite",
      category: "Web Development Platform",
      description: "Complete web development and hosting solution with integrated CMS, e-commerce capabilities, and advanced analytics.",
      features: ["Drag & Drop Builder", "SEO Optimization", "Mobile Responsive", "Analytics Dashboard"],
      pricing: "Starting at $99/month",
      status: "Available Now"
    },
    {
      icon: Smartphone,
      title: "NirvaMobile Pro",
      category: "Mobile App Platform",
      description: "Cross-platform mobile application development framework with real-time synchronization and cloud integration.",
      features: ["iOS & Android", "Real-time Sync", "Push Notifications", "Offline Support"],
      pricing: "Starting at $149/month",
      status: "Available Now"
    },
    {
      icon: Shield,
      title: "NirvaSecure",
      category: "Cybersecurity Solution",
      description: "Enterprise-grade security suite with threat detection, vulnerability assessment, and compliance monitoring.",
      features: ["Threat Detection", "Security Audits", "Compliance Reports", "24/7 Monitoring"],
      pricing: "Starting at $199/month",
      status: "Available Now"
    },
    {
      icon: BarChart,
      title: "NirvaAnalytics",
      category: "Business Intelligence",
      description: "Advanced analytics platform with AI-powered insights, custom dashboards, and predictive analytics.",
      features: ["AI Insights", "Custom Dashboards", "Predictive Analytics", "Data Integration"],
      pricing: "Starting at $129/month",
      status: "Available Now"
    },
    {
      icon: Database,
      title: "NirvaCloud",
      category: "Cloud Infrastructure",
      description: "Scalable cloud infrastructure solution with automated deployment, monitoring, and backup systems.",
      features: ["Auto Scaling", "Load Balancing", "Automated Backups", "99.9% Uptime"],
      pricing: "Starting at $79/month",
      status: "Available Now"
    },
    {
      icon: Zap,
      title: "NirvaAI Assistant",
      category: "AI-Powered Automation",
      description: "Intelligent automation platform that streamlines business processes using advanced AI and machine learning.",
      features: ["Process Automation", "Smart Workflows", "ML Integration", "Custom Training"],
      pricing: "Coming Soon",
      status: "Beta Access"
    }
  ];

  return (
    <section id="products" className="py-24 px-4 bg-gradient-hero">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative software products and platforms designed to accelerate your digital transformation 
            and provide comprehensive solutions for modern business challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="service-card bg-gradient-card border-border shadow-card hover:shadow-floating group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                    <product.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    product.status === "Available Now" 
                      ? "bg-accent/20 text-accent" 
                      : "bg-primary/20 text-primary"
                  }`}>
                    {product.status}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-accent font-medium mb-1">{product.category}</div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground mt-2">
                    {product.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-lg font-semibold gradient-text">
                      {product.pricing}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-gradient-primary hover-glow text-primary-foreground"
                      disabled={product.status === "Beta Access"}
                    >
                      {product.status === "Available Now" ? "Get Started" : "Join Beta"}
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon"
                      className="border-primary/50 hover:bg-primary/10"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-card border border-border rounded-3xl p-8 shadow-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-muted-foreground mb-6">
              Our products can be customized and integrated to meet your specific business requirements. 
              Contact us to discuss your unique needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-gradient-primary hover-glow text-primary-foreground px-8 py-3 rounded-full"
              >
                Request Custom Solution
              </Button>
              <Button 
                variant="outline"
                className="border-primary/50 text-foreground hover:bg-primary/10 px-8 py-3 rounded-full"
              >
                View All Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;