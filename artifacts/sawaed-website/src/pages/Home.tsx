import { useEffect, useState } from "react";
import ceoPic from "@assets/WhatsApp_Image_2026-04-28_at_11.08.03_AM_1777732152121.jpeg";
import { motion } from "framer-motion";
import { 
  Building2, 
  Truck, 
  Users, 
  Utensils, 
  CalendarDays, 
  Home as HomeIcon, 
  Warehouse,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  HardHat,
  Zap,
  Wrench,
  Hammer
} from "lucide-react";
import { Button } from "@/components/ui/button";

import transportImg from "@/assets/images/transport.jpg";
import equipmentImg from "@/assets/images/equipment.jpg";
import manpowerImg from "@/assets/images/manpower.jpg";
import cateringImg from "@/assets/images/catering.jpg";
import eventsImg from "@/assets/images/events.jpg";
import realEstateImg from "@/assets/images/real-estate.jpg";
import warehousingImg from "@/assets/images/warehousing.jpg";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const services = [
    {
      title: "Transportation",
      desc: "Flexible fleet: buses, coasters, Hiace vans, pickups, cars. GPS tracking, route optimization, fully compliant. Workforce mobility for large and small projects.",
      icon: Truck,
      img: transportImg
    },
    {
      title: "Equipment Rental",
      desc: "Heavy machinery, generators, specialized tools, telemetry & preventive maintenance. Broad range of construction equipment aligned to project needs.",
      icon: Wrench,
      img: equipmentImg
    },
    {
      title: "Manpower Supply",
      desc: "Skilled and unskilled workforce solutions. Efficiency and productivity on every project. Tailored to client needs.",
      icon: Users,
      img: manpowerImg
    },
    {
      title: "Catering Services",
      desc: "Professional catering for corporate, industrial events, weddings, ceremonies. Menu planning, food preparation, on-site service.",
      icon: Utensils,
      img: cateringImg
    },
    {
      title: "Event Organizing",
      desc: "End-to-end planning and execution for ceremonies, weddings, corporate events, functions. Creativity, precision, attention to detail.",
      icon: CalendarDays,
      img: eventsImg
    },
    {
      title: "Real Estate Rentals",
      desc: "Hotel rooms, villas, apartments, camps for junior/senior staff, warehouses. Short-term and long-term basis. Commercial and residential.",
      icon: HomeIcon,
      img: realEstateImg
    },
    {
      title: "Warehousing Solutions",
      desc: "Secure, accessible, strategically located storage facilities. Supporting logistics and supply chain operations.",
      icon: Warehouse,
      img: warehousingImg
    }
  ];

  const constructionWork = [
    { title: "Civil Work", desc: "Large-scale and small-scale civil engineering projects", icon: Building2 },
    { title: "Electrical Work", desc: "Residential, commercial, and industrial sectors, compliance with industry standards", icon: Zap },
    { title: "Mechanical Work", desc: "Installation, maintenance, and commissioning, compliance with industry standards", icon: Wrench },
    { title: "Steel Structure Work", desc: "Fabrication, erection, and installation in accordance with international standards", icon: Hammer },
  ];

  const achievements = [
    "Successfully expanded operations across multiple sectors",
    "Strong reputation for reliability, safety, and quality service",
    "Partnered with leading national and international companies for major infrastructure projects aligned with Vision 2030",
    "Consistent year-on-year growth through strategic planning and operational excellence",
    "Built a skilled and diverse workforce",
    "Advanced safety and quality management systems",
    "Expanded asset base with modern equipment and facilities",
    "Recognized for contributing to sustainable development and economic diversification"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="text-2xl font-serif font-bold text-secondary flex items-center gap-2 cursor-pointer" onClick={() => scrollTo("hero")} data-testid="link-logo">
            <div className="w-8 h-8 bg-primary text-white flex items-center justify-center font-sans font-bold">S</div>
            <span className={scrolled ? "text-secondary" : "text-white drop-shadow-md"}>Sawaed Al-Nafah</span>
          </div>
          <div className={`hidden md:flex gap-8 font-medium text-sm tracking-wide ${scrolled ? "text-secondary" : "text-white drop-shadow-md"}`}>
            <button onClick={() => scrollTo("about")} className="hover:text-primary transition-colors" data-testid="link-nav-about">About</button>
            <button onClick={() => scrollTo("services")} className="hover:text-primary transition-colors" data-testid="link-nav-services">Services</button>
            <button onClick={() => scrollTo("construction")} className="hover:text-primary transition-colors" data-testid="link-nav-construction">Construction</button>
            <button onClick={() => scrollTo("ceo")} className="hover:text-primary transition-colors" data-testid="link-nav-ceo">Leadership</button>
            <button onClick={() => scrollTo("contact")} className="hover:text-primary transition-colors" data-testid="link-nav-contact">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-secondary/70 z-10" />
          {/* Fallback to equipment if hero not found, but we will use equipment image for hero since it fits */}
          <img src={equipmentImg} alt="Heavy machinery in desert" className="w-full h-full object-cover" />
        </div>
        
        <div className="container relative z-20 px-6 text-center text-white">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
              Building a Legacy of Reliability, Service, and Progress
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-200 mb-10 font-light max-w-2xl mx-auto">
              A trusted industrial backbone for Saudi Arabia's development. Aligned with Vision 2030.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 py-6 text-lg" onClick={() => scrollTo("services")} data-testid="button-explore-services">
                Explore Our Services
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-secondary rounded-none px-8 py-6 text-lg" onClick={() => scrollTo("contact")} data-testid="button-contact-hero">
                Contact Us
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About & Vision */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h4 variants={fadeInUp} className="text-primary font-bold tracking-widest uppercase mb-2">Who We Are</motion.h4>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-6">
                The Company Behind the Scenes of Mega-Projects
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Based in King Abdullah Economic City, Sawaed Al-Nafah is a premier "one-stop" provider for the construction, oil & gas, and commercial sectors. Professional, dependable, and quietly powerful — we are built to last, like a fortress dressed in sand and steel.
              </motion.p>
              
              <div className="grid gap-6">
                <motion.div variants={fadeInUp} className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="text-xl font-bold text-secondary mb-2">Our Vision</h3>
                  <p className="text-muted-foreground">To be a leading multi-service company recognized for excellence, innovation, and reliability. Setting new standards in service quality and operational efficiency. Sustainable growth benefiting clients, employees, and communities.</p>
                </motion.div>
                <motion.div variants={fadeInUp} className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="text-xl font-bold text-secondary mb-2">Our Mission</h3>
                  <p className="text-muted-foreground">To deliver high-quality, reliable, and efficient rental and support services that empower Saudi Arabia's construction and industrial sectors. Contributing to the realization of Vision 2030.</p>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[600px]"
            >
              <div className="absolute inset-0 bg-primary/10 transform translate-x-4 translate-y-4" />
              <img src={transportImg} alt="Logistics and Transport" className="w-full h-full object-cover grayscale-[30%] relative z-10" />
              <div className="absolute -bottom-8 -left-8 bg-secondary text-white p-8 z-20 max-w-[280px]">
                <p className="font-serif text-2xl font-bold mb-2">Vision 2030</p>
                <p className="text-sm opacity-80">Empowering Saudi Arabia's industrial future through exceptional service and unwavering reliability.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-muted">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h4 className="text-primary font-bold tracking-widest uppercase mb-2">Core Offerings</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-6">
              Comprehensive Industrial Services
            </h2>
            <p className="text-muted-foreground text-lg">
              A one-stop solution for the most demanding projects. We provide the infrastructure, manpower, and logistics so you can focus on building the future.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-border group hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors z-10" />
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center mb-6">
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-4 font-serif">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Works */}
      <section id="construction" className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-3 gap-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:col-span-1"
            >
              <motion.h4 variants={fadeInUp} className="text-primary font-bold tracking-widest uppercase mb-2">Specialized Division</motion.h4>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Construction Works
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-8">
                In addition to our core support services, Sawaed Al-Nafah delivers high-quality construction and engineering execution in accordance with international standards.
              </motion.p>
            </motion.div>
            
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {constructionWork.map((work, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors"
                >
                  <work.icon size={32} className="text-primary mb-6" />
                  <h3 className="text-xl font-bold mb-3 font-serif">{work.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{work.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-6">
              Key Achievements
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="bg-muted p-6 flex items-start gap-4 border-t-4 border-transparent hover:border-primary transition-colors"
              >
                <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                <p className="text-secondary text-sm font-medium leading-relaxed">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Quote */}
      <section id="ceo" className="py-24 bg-accent relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-8 flex justify-center">
                <div className="relative">
                  <img
                    src={ceoPic}
                    alt="Irfan Khan — CEO"
                    data-testid="img-ceo"
                    className="w-32 h-32 rounded-full object-cover object-top shadow-lg border-4 border-primary/30"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-2xl md:text-3xl font-serif text-secondary leading-relaxed mb-8 italic">
                "As the Chief Executive Officer, I am deeply committed to leading our company with integrity, innovation, and a clear vision for sustainable growth. Our mission is to deliver exceptional value... We believe that success is built on trust, teamwork, and a relentless pursuit of excellence."
              </p>
              <h4 className="text-xl font-bold text-secondary">Irfan Khan</h4>
              <p className="text-muted-foreground uppercase tracking-widest text-sm mt-1">Chief Executive Officer</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact & Footer */}
      <section id="contact" className="py-24 bg-secondary text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6">Ready to Build Together?</h2>
              <p className="text-gray-400 mb-12 text-lg">
                Contact Sawaed Al-Nafah today to discuss your project requirements. We provide the strength and reliability you need to succeed.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center">
                    <Phone className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Call Us</p>
                    <p className="text-lg font-medium">0541451894 / 0597502683 (CEO)</p>
                    <p className="text-sm text-gray-300">0548658274 (Manager)</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center">
                    <Mail className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email Us</p>
                    <p className="text-lg font-medium">sawaedalnafah@outlook.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center">
                    <MapPin className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Visit Us</p>
                    <p className="text-lg font-medium">Office No 223, Emaar Building</p>
                    <p className="text-sm text-gray-300">King Abdullah Economic City, Saudi Arabia</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 text-secondary">
              <h3 className="text-2xl font-serif font-bold mb-6">Send an Inquiry</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input type="text" className="w-full border border-border p-3 focus:outline-none focus:border-primary" placeholder="Your Name" data-testid="input-name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" className="w-full border border-border p-3 focus:outline-none focus:border-primary" placeholder="Your Email" data-testid="input-email" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Service of Interest</label>
                  <select className="w-full border border-border p-3 focus:outline-none focus:border-primary" data-testid="select-service">
                    <option>Transportation</option>
                    <option>Equipment Rental</option>
                    <option>Manpower Supply</option>
                    <option>Construction Works</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea className="w-full border border-border p-3 h-32 focus:outline-none focus:border-primary" placeholder="Project details..." data-testid="input-message"></textarea>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white py-6 rounded-none text-lg" data-testid="button-submit-inquiry">
                  Submit Inquiry
                </Button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-24 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Sawaed Al-Nafah. All rights reserved.</p>
            <p>www.sawaedalnafah.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}
