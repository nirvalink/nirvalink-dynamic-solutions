import { CheckCircle, Users, Lightbulb, Shield } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and innovative approaches to solve complex business challenges."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients, building partnerships that drive mutual success and growth."
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Our commitment to quality and dependable service ensures your projects are delivered on time and exceed expectations."
    }
  ];

  const achievements = [
    "50+ Successful Projects Delivered",
    "24/7 Technical Support & Maintenance",
    "100% Client Satisfaction Rate",
    "ISO 27001 Security Compliance",
    "Agile Development Methodologies",
    "Cross-Industry Expertise"
  ];

  return (
    <section id="about" className="py-24 px-4 bg-gradient-hero">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                About <span className="gradient-text">Nirvalink</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                At Nirvalink, we are dedicated to providing technology services that transform businesses 
                and drive innovation. Our mission is to create customized solutions that integrate technology, 
                design, and strategic expertise to enhance operational efficiency and deliver long-term value.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We specialize in software development, web and application design, IT solutions, 
                financial services, and business consulting. Our team of experts works across industries 
                to meet diverse client needs with innovative and tailored approaches.
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Why Choose Nirvalink?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Values */}
          <div className="space-y-8 animate-fade-in">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold mb-8">Our Core Values</h3>
            </div>
            
            <div className="space-y-6">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-card border border-border rounded-2xl p-6 shadow-card hover:shadow-floating transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <value.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {value.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-card border border-border rounded-2xl p-6 shadow-card text-center">
              <div className="space-y-4">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto shadow-glow">
                  <span className="text-3xl font-bold text-primary-foreground">N</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Our Mission</h4>
                  <p className="text-muted-foreground">
                    To empower businesses through innovative technology solutions that drive growth, 
                    efficiency, and long-term success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;