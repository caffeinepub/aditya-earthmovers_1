import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitInquiry } from "@/hooks/useQueries";
import {
  ChevronDown,
  Clock,
  Container,
  HardHat,
  Layers,
  Mail,
  MapPin,
  Menu,
  Mountain,
  Package,
  Phone,
  Shovel,
  Star,
  Truck,
  Users,
  Wrench,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: Shovel,
    title: "Earthmoving & Excavation",
    desc: "Professional excavation services for construction, mining, and land development projects with modern machinery.",
  },
  {
    icon: Truck,
    title: "Sand & Gravel Transportation",
    desc: "Reliable bulk transportation of sand, gravel, and aggregates to your project site on schedule.",
  },
  {
    icon: Package,
    title: "Construction Material Supply",
    desc: "Timely supply of quality construction materials including stone, murrum, and filling soil.",
  },
  {
    icon: Wrench,
    title: "Heavy Equipment Hiring",
    desc: "Hire excavators, JCBs, bulldozers, and other heavy machinery with experienced operators.",
  },
  {
    icon: Layers,
    title: "Land Leveling & Site Preparation",
    desc: "Complete site preparation, land grading, leveling, and clearing for new construction projects.",
  },
  {
    icon: Mountain,
    title: "Tipper/Truck Transportation",
    desc: "Fleet of tippers and trucks for bulk material movement across Baramati and surrounding regions.",
  },
  {
    icon: Container,
    title: "Heavy Equipment Transport",
    desc: "Specialized heavy trucks for transporting excavators, bulldozers, and other large machinery safely to and from project sites.",
  },
];

const WHY_CHOOSE = [
  {
    icon: Users,
    title: "Experienced Team",
    desc: "Years of hands-on experience in earthmoving and transportation across Maharashtra.",
  },
  {
    icon: HardHat,
    title: "Modern Equipment",
    desc: "Well-maintained fleet of modern excavators, tippers, and heavy machinery.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "We value your project deadlines and commit to timely, reliable service.",
  },
  {
    icon: Star,
    title: "Local Expertise",
    desc: "Deep knowledge of Indapur-Baramati terrain and local project requirements.",
  },
];

function Navbar({ scrolled }: { scrolled: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src="/assets/generated/logo-transparent.dim_200x200.png"
            alt="Aditya Earthmovers Logo"
            className="h-10 w-10 object-contain"
          />
          <div>
            <div className="font-display text-sm font-800 text-primary leading-tight">
              Aditya Earthmovers
            </div>
            <div className="font-body text-xs text-muted-foreground leading-tight">
              & Transportation
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid={`nav.${link.label.toLowerCase()}.link`}
              className="px-4 py-2 text-sm font-body font-500 text-muted-foreground hover:text-primary transition-colors rounded-sm"
            >
              {link.label}
            </a>
          ))}
          <a href="tel:9922768162">
            <Button
              size="sm"
              className="ml-3 bg-primary text-primary-foreground hover:bg-primary/90 font-display font-700"
            >
              <Phone className="h-4 w-4 mr-1" />
              Call Now
            </Button>
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden text-foreground p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-ocid={`nav.${link.label.toLowerCase()}.link`}
                  className="py-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href="tel:9922768162" className="mt-2">
                <Button
                  size="sm"
                  className="w-full bg-primary text-primary-foreground"
                >
                  <Phone className="h-4 w-4 mr-1" />
                  Call: 9922768162
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-banner.dim_1200x600.jpg')",
        }}
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-background/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-body font-600 mb-6 tracking-widest uppercase">
            Indapur · Baramati · Maharashtra
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-800 text-foreground leading-[1.05] mb-6">
            Aditya <span className="text-primary">Earthmovers</span> &amp;{" "}
            <span className="block sm:inline">Transportation</span>
          </h1>
          <p className="font-body text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Your trusted partner for earthmoving, excavation, and bulk
            transportation across the Baramati region of Maharashtra.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact">
              <Button
                size="lg"
                data-ocid="hero.primary_button"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-display font-700 text-base px-8 h-12 shadow-glow"
              >
                Get a Quote
              </Button>
            </a>
            <a href="tel:9922768162">
              <Button
                size="lg"
                variant="outline"
                data-ocid="hero.secondary_button"
                className="border-primary/50 text-primary hover:bg-primary/10 font-display font-700 text-base px-8 h-12"
              >
                <Phone className="h-4 w-4 mr-2" />
                9922768162
              </Button>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
      >
        <ChevronDown className="h-6 w-6 text-primary/60" />
      </motion.div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-primary text-xs font-body font-600 tracking-widest uppercase mb-3">
              About Us
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-800 text-foreground mb-6 leading-tight">
              Built on Trust,{" "}
              <span className="text-primary">Driven by Strength</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Aditya Earthmovers and Transportation is a leading earthmoving and
              logistics company based in Indapur, Baramati, Maharashtra. We
              specialize in providing comprehensive earthmoving, excavation, and
              bulk material transportation services to contractors, builders,
              and developers.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              With a well-maintained fleet of modern equipment and an
              experienced team, we have successfully completed hundreds of
              projects across the Baramati and Pune district region. Our
              commitment to quality, safety, and timely delivery sets us apart
              in the industry.
            </p>
            {/* Proprietor badge */}
            <div className="inline-flex items-center gap-3 px-4 py-3 bg-primary/10 border border-primary/30 rounded-sm mb-8">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                <Users className="h-4 w-4 text-primary" />
              </div>
              <div>
                <div className="font-body text-xs text-muted-foreground uppercase tracking-wider">
                  Proprietor
                </div>
                <div className="font-display text-sm font-700 text-foreground">
                  Arun Bangar
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {[
                { num: "500+", label: "Projects Completed" },
                { num: "10+", label: "Years Experience" },
                { num: "20+", label: "Equipment Fleet" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-2xl font-800 text-primary">
                    {stat.num}
                  </div>
                  <div className="font-body text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-sm overflow-hidden border border-border">
              <img
                src="/assets/generated/hero-banner.dim_1200x600.jpg"
                alt="Earthmoving operations"
                className="w-full h-72 object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-4 rounded-sm">
              <div className="font-display text-lg font-800">
                Indapur, Baramati
              </div>
              <div className="font-body text-xs mt-0.5">Maharashtra, India</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="text-primary text-xs font-body font-600 tracking-widest uppercase mb-3">
            What We Do
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-800 text-foreground">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto">
            Comprehensive earthmoving and transportation solutions for every
            scale of project.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              data-ocid={`services.item.${i + 1}`}
              className="group p-6 bg-background rounded-sm border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-base font-700 text-foreground mb-2">
                {service.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="text-primary text-xs font-body font-600 tracking-widest uppercase mb-3">
            Why Us
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-800 text-foreground">
            Why Choose <span className="text-primary">Us</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6 border border-border rounded-sm"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-base font-700 text-foreground mb-2">
                {item.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const { mutate: submitInquiry, isPending, isSuccess } = useSubmitInquiry();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    submitInquiry(
      { name, phone, message },
      {
        onSuccess: () => {
          toast.success("Inquiry submitted! We'll contact you shortly.");
          setName("");
          setPhone("");
          setMessage("");
        },
        onError: () => {
          toast.error("Failed to submit. Please call us directly.");
        },
      },
    );
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="text-primary text-xs font-body font-600 tracking-widest uppercase mb-3">
            Get In Touch
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-800 text-foreground">
            Contact <span className="text-primary">Us</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto">
            Have a project in mind? Reach out and we'll get back to you
            promptly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              {/* Owner */}
              <div className="flex items-start gap-4 p-5 bg-background rounded-sm border border-border">
                <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center shrink-0 mt-0.5">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-display text-sm font-700 text-foreground mb-0.5">
                    Proprietor
                  </div>
                  <div className="font-body text-base text-foreground font-600">
                    Arun Bangar
                  </div>
                </div>
              </div>
              {/* Phone */}
              <div className="flex items-start gap-4 p-5 bg-background rounded-sm border border-border">
                <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-display text-sm font-700 text-foreground mb-1">
                    Phone
                  </div>
                  <a
                    href="tel:9922768162"
                    data-ocid="contact.phone.link"
                    className="font-body text-primary text-lg hover:text-primary/80 transition-colors font-600"
                  >
                    +91 9922768162
                  </a>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-start gap-4 p-5 bg-background rounded-sm border border-border">
                <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-display text-sm font-700 text-foreground mb-1">
                    Email
                  </div>
                  <a
                    href="mailto:adityaworkspace03@gmail.com"
                    data-ocid="contact.email.link"
                    className="font-body text-primary text-sm hover:text-primary/80 transition-colors font-600 break-all"
                  >
                    adityaworkspace03@gmail.com
                  </a>
                </div>
              </div>
              {/* Address */}
              <div className="flex items-start gap-4 p-5 bg-background rounded-sm border border-border">
                <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-display text-sm font-700 text-foreground mb-1">
                    Address
                  </div>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    Indapur, Baramati,
                    <br />
                    Maharashtra, India
                  </p>
                </div>
              </div>
              <div className="p-5 bg-primary/10 border border-primary/30 rounded-sm">
                <p className="font-body text-sm text-foreground leading-relaxed">
                  <span className="font-600">Working Hours:</span> 24/7, All
                  Days. Always available for your requirements.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label
                  htmlFor="contact-name"
                  className="font-body text-sm text-foreground mb-1.5 block"
                >
                  Full Name
                </Label>
                <Input
                  id="contact-name"
                  data-ocid="contact.input"
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              <div>
                <Label
                  htmlFor="contact-phone"
                  className="font-body text-sm text-foreground mb-1.5 block"
                >
                  Phone Number
                </Label>
                <Input
                  id="contact-phone"
                  data-ocid="contact.phone.input"
                  placeholder="Your mobile number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              <div>
                <Label
                  htmlFor="contact-message"
                  className="font-body text-sm text-foreground mb-1.5 block"
                >
                  Message
                </Label>
                <Textarea
                  id="contact-message"
                  data-ocid="contact.textarea"
                  placeholder="Describe your requirement..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="bg-background border-border focus:border-primary resize-none"
                />
              </div>
              {isSuccess && (
                <div
                  data-ocid="contact.success_state"
                  className="p-3 bg-primary/10 border border-primary/30 rounded-sm"
                >
                  <p className="font-body text-sm text-primary">
                    ✓ Inquiry submitted successfully!
                  </p>
                </div>
              )}
              <Button
                type="submit"
                data-ocid="contact.submit_button"
                disabled={isPending}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-display font-700 h-11"
              >
                {isPending ? "Submitting..." : "Send Inquiry"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="bg-background border-t border-border py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img
                src="/assets/generated/logo-transparent.dim_200x200.png"
                alt="Logo"
                className="h-8 w-8 object-contain"
              />
              <span className="font-display text-sm font-700 text-foreground">
                Aditya Earthmovers
              </span>
            </div>
            <p className="font-body text-xs text-muted-foreground leading-relaxed mb-2">
              Trusted earthmoving and transportation partner in Baramati,
              Maharashtra.
            </p>
            <p className="font-body text-xs text-muted-foreground">
              Proprietor:{" "}
              <span className="text-foreground font-600">Arun Bangar</span>
            </p>
          </div>
          <div>
            <div className="font-display text-sm font-700 text-foreground mb-3">
              Quick Links
            </div>
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="font-display text-sm font-700 text-foreground mb-3">
              Contact
            </div>
            <div className="space-y-2">
              <a
                href="tel:9922768162"
                className="flex items-center gap-2 font-body text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-3.5 w-3.5 shrink-0" /> +91 9922768162
              </a>
              <a
                href="mailto:adityaworkspace03@gmail.com"
                className="flex items-center gap-2 font-body text-xs text-muted-foreground hover:text-primary transition-colors break-all"
              >
                <Mail className="h-3.5 w-3.5 shrink-0" />
                adityaworkspace03@gmail.com
              </a>
              <div className="flex items-start gap-2 font-body text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                Indapur, Baramati, Maharashtra
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-body text-xs text-muted-foreground">
            © {year} Aditya Earthmovers and Transportation. All rights reserved.
          </p>
          <p className="font-body text-xs text-muted-foreground">
            Built with ❤️ using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Toaster />
      <Navbar scrolled={scrolled} />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
