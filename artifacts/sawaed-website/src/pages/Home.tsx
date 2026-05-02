import { useEffect, useState } from "react";
import ceoPic from "@assets/WhatsApp_Image_2026-04-28_at_11.08.03_AM_1777732152121.jpeg";
import companyLogo from "@assets/unlockkk_1777732245197.png";
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

import transportImg from "@/assets/images/transport.png";
import equipmentImg from "@/assets/images/equipment.png";
import manpowerImg from "@/assets/images/manpower.png";
import cateringImg from "@/assets/images/catering.png";
import eventsImg from "@/assets/images/events.png";
import realEstateImg from "@/assets/images/real-estate.png";
import warehousingImg from "@/assets/images/warehousing.png";
import civilWorkImg from "@/assets/images/civil-work.png";
import electricalWorkImg from "@/assets/images/electrical-work.png";
import mechanicalWorkImg from "@/assets/images/mechanical-work.png";
import steelStructureImg from "@/assets/images/steel-structure.png";

import logoAramco from "@/assets/logos/aramco.svg";
import logoEmaar from "@/assets/logos/emaar.svg";
import logoSamsung from "@/assets/logos/samsung.svg";
import logoHyundai from "@/assets/logos/hyundai.svg";
import logoTekfen from "@/assets/logos/tekfen.svg";
import logoHill from "@/assets/logos/hill-international.svg";
import logoMammoet from "@/assets/logos/mammoet.svg";
import logoPowerChina from "@/assets/logos/powerchina.svg";
import logoSinohydro from "@/assets/logos/sinohydro.svg";
import logoJohnsonControls from "@/assets/logos/johnson-controls.svg";
import logoPfizer from "@/assets/logos/pfizer.svg";
import logoSanofi from "@/assets/logos/sanofi.svg";
import logoElsewedy from "@/assets/logos/elsewedy.svg";
import logoSSI from "@/assets/logos/ssi-schafer.svg";
import logoEFS from "@/assets/logos/efs.svg";
import logoInitial from "@/assets/logos/initial.svg";
import logoDallah from "@/assets/logos/dallah.svg";
import logoAlSaif from "@/assets/logos/alsaif.svg";
import logoGAMA from "@/assets/logos/gama.svg";
import logoSWVL from "@/assets/logos/swvl.svg";
import logoCCCC from "@/assets/logos/cccc.svg";
import logoMCC from "@/assets/logos/mcc.svg";
import logoSaudiElec from "@/assets/logos/saudi-electricity.svg";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", service: "Transportation", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${form.name} — ${form.service}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nService of Interest: ${form.service}\n\nMessage:\n${form.message}`
    );
    window.open(`mailto:irfank1437@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
    setForm({ name: "", email: "", service: "Transportation", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

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
    { title: "Civil Work", desc: "We have successfully executed a diverse portfolio of civil engineering projects across multiple sectors — including infrastructure, roads, foundations, and building structures at both large and small scale.", icon: Building2, img: civilWorkImg },
    { title: "Electrical Work", desc: "We have delivered a wide range of electrical projects across residential, commercial, and industrial sectors. Our team has proven expertise executing work in full compliance with industry standards and safety codes.", icon: Zap, img: electricalWorkImg },
    { title: "Mechanical Work", desc: "We have successfully delivered mechanical works including installation, maintenance, and commissioning. Our team executes mechanical projects in full compliance with industry standards and international codes.", icon: Wrench, img: mechanicalWorkImg },
    { title: "Steel Structure Work", desc: "We have delivered steel structure projects including fabrication, erection, and installation. Our team executes steel structure work in accordance with international standards, ensuring precision and structural integrity.", icon: Hammer, img: steelStructureImg },
  ];

  const testimonials = [
    { name: "Project Manager", company: "Samsung Engineering", quote: "Sawaed Al-Nafah provided exceptional manpower and logistics support for our facility project in KAEC. Their team was punctual, professional, and exceeded our expectations on every milestone." },
    { name: "Operations Director", company: "Saudi Aramco", quote: "We rely on Sawaed Al-Nafah for transportation and equipment rental across our project sites. Their fleet is modern, GPS-tracked, and always delivered on time. A truly dependable partner." },
    { name: "Site Director", company: "Emaar", quote: "From warehousing to manpower supply, Sawaed Al-Nafah has been an integral part of our operations. Their one-stop solution saves us significant time and procurement overhead on every project." },
    { name: "Construction Lead", company: "Tekfen Construction", quote: "The civil and steel structure work Sawaed Al-Nafah delivered met international quality standards. Their team is skilled, safety-conscious, and always brought solutions to the table." },
    { name: "Facilities Manager", company: "Hyundai E&C", quote: "Sawaed Al-Nafah's catering services for our site camps are consistently excellent — hygienic, timely, and tailored to our workforce. We've renewed with them every project cycle." },
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
          <div className="flex items-center cursor-pointer" onClick={() => scrollTo("hero")} data-testid="link-logo">
            <img
              src={companyLogo}
              alt="Sawaed Al-Nafah Logo"
              className={`h-14 w-auto transition-all duration-300 ${scrolled ? "brightness-100" : "brightness-0 invert drop-shadow-lg"}`}
            />
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
                  className="bg-white/5 border border-white/10 overflow-hidden group hover:bg-white/10 transition-colors"
                >
                  <div className="h-44 overflow-hidden relative">
                    <div className="absolute inset-0 bg-secondary/40 group-hover:bg-secondary/20 transition-colors z-10" />
                    <img src={work.img} alt={work.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute bottom-3 left-3 z-20">
                      <div className="w-9 h-9 bg-primary flex items-center justify-center">
                        <work.icon size={18} className="text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 font-serif">{work.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{work.desc}</p>
                  </div>
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

      {/* Our Clients */}
      <section id="clients" className="py-24 bg-secondary text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <h4 className="text-primary font-bold tracking-widest uppercase mb-2">Trusted By</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Clients</h2>
            <p className="text-gray-400 text-lg">Proud to serve industry-leading national and international companies across Saudi Arabia's most ambitious projects.</p>
          </motion.div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-px bg-white/10">
            {[
              { name: "Saudi Aramco", logo: logoAramco },
              { name: "Emaar", logo: logoEmaar },
              { name: "Samsung Engineering", logo: logoSamsung },
              { name: "Hyundai E&C", logo: logoHyundai },
              { name: "Tekfen Construction", logo: logoTekfen },
              { name: "Hill International", logo: logoHill },
              { name: "Mammoet", logo: logoMammoet },
              { name: "PowerChina", logo: logoPowerChina },
              { name: "Sinohydro", logo: logoSinohydro },
              { name: "Johnson Controls", logo: logoJohnsonControls },
              { name: "Pfizer", logo: logoPfizer },
              { name: "Sanofi", logo: logoSanofi },
              { name: "Elsewedy Electric", logo: logoElsewedy },
              { name: "SSI Schäfer", logo: logoSSI },
              { name: "EFS Facilities", logo: logoEFS },
              { name: "Initial", logo: logoInitial },
              { name: "Dallah", logo: logoDallah },
              { name: "Al Saif Group", logo: logoAlSaif },
              { name: "GAMA", logo: logoGAMA },
              { name: "SWVL", logo: logoSWVL },
              { name: "CCCC", logo: logoCCCC },
              { name: "MCC", logo: logoMCC },
              { name: "Saudi Electricity", logo: logoSaudiElec },
            ].map((client) => (
              <div
                key={client.name}
                className="bg-white flex items-center justify-center p-5 h-24 group hover:shadow-inner transition-all"
                title={client.name}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-10 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <h4 className="text-primary font-bold tracking-widest uppercase mb-2">Client Feedback</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-4">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              key={testimonialIdx}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-10 shadow-lg border border-border relative"
            >
              <svg className="w-12 h-12 text-primary/20 mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-xl text-secondary leading-relaxed italic mb-8 font-serif">
                "{testimonials[testimonialIdx].quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary flex items-center justify-center text-white font-bold font-serif text-lg">
                  {testimonials[testimonialIdx].company[0]}
                </div>
                <div>
                  <p className="font-bold text-secondary">{testimonials[testimonialIdx].name}</p>
                  <p className="text-sm text-primary font-medium">{testimonials[testimonialIdx].company}</p>
                </div>
              </div>
            </motion.div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => setTestimonialIdx(i => (i - 1 + testimonials.length) % testimonials.length)}
                className="w-10 h-10 border-2 border-secondary/30 hover:border-primary hover:text-primary text-secondary flex items-center justify-center transition-colors"
                data-testid="button-testimonial-prev"
                aria-label="Previous testimonial"
              >
                <ChevronRight size={18} className="rotate-180" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTestimonialIdx(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${i === testimonialIdx ? "bg-primary" : "bg-secondary/20"}`}
                    data-testid={`button-testimonial-dot-${i}`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setTestimonialIdx(i => (i + 1) % testimonials.length)}
                className="w-10 h-10 border-2 border-secondary/30 hover:border-primary hover:text-primary text-secondary flex items-center justify-center transition-colors"
                data-testid="button-testimonial-next"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
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
                    <p className="text-lg font-medium">irfan@sawaedalnafah.com</p>
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
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4" data-testid="form-success">
                  <CheckCircle2 className="text-primary" size={48} />
                  <p className="text-xl font-bold text-secondary">Inquiry Sent!</p>
                  <p className="text-muted-foreground text-sm">Your email client has opened with your message pre-filled. Please send it to complete your inquiry.</p>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input required type="text" name="name" value={form.name} onChange={handleFormChange} className="w-full border border-border p-3 focus:outline-none focus:border-primary" placeholder="Your Name" data-testid="input-name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input required type="email" name="email" value={form.email} onChange={handleFormChange} className="w-full border border-border p-3 focus:outline-none focus:border-primary" placeholder="Your Email" data-testid="input-email" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Service of Interest</label>
                    <select name="service" value={form.service} onChange={handleFormChange} className="w-full border border-border p-3 focus:outline-none focus:border-primary" data-testid="select-service">
                      <option>Transportation</option>
                      <option>Equipment Rental</option>
                      <option>Manpower Supply</option>
                      <option>Construction Works</option>
                      <option>Catering Services</option>
                      <option>Event Organizing</option>
                      <option>Real Estate Rentals</option>
                      <option>Warehousing Solutions</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea required name="message" value={form.message} onChange={handleFormChange} className="w-full border border-border p-3 h-32 focus:outline-none focus:border-primary" placeholder="Project details..." data-testid="input-message"></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-6 rounded-none text-lg" data-testid="button-submit-inquiry">
                    Submit Inquiry
                  </Button>
                </form>
              )}
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-24 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-4">
              <img src={companyLogo} alt="Sawaed Al-Nafah Logo" className="h-12 w-auto brightness-0 invert opacity-80" />
              <p>&copy; {new Date().getFullYear()} Sawaed Al-Nafah. All rights reserved.</p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <p>www.sawaedalnafah.com</p>
              <p className="text-gray-500 text-xs">
                Developed by{" "}
                <a
                  href="https://wa.me/923349128472"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                  data-testid="link-developer"
                >
                  Muhammad Jalal
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
