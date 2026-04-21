import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  ExternalLink, 
  Layers, 
  Zap, 
  Target, 
  Linkedin, 
  Instagram, 
  Twitter, 
  Menu, 
  X,
  Sparkles,
  Palette,
  Layout,
  Radio
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Overview", href: "#home" },
    { name: "Featured Work", href: "#work" },
    { name: "Strategic Solutions", href: "#services" },
    { name: "Strategic Insights", href: "#content" },
    { name: "The Founder", href: "#about" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${scrolled ? "py-4" : "py-8"}`}
      id="main-nav"
    >
      <div className="container mx-auto px-6">
        <div className={`flex items-center justify-between mx-auto max-w-6xl rounded-[24px] transition-all duration-500 ${scrolled ? "glass border-white/10 px-8 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.3)]" : "px-0"}`}>
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center text-black font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">A</div>
            <span className="font-display font-bold text-2xl tracking-tighter uppercase">ABDU</span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="relative text-white/50 hover:text-white transition-all text-sm font-semibold tracking-tight py-2 group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
            <div className="h-4 w-px bg-white/10 mx-2" />
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-xl gold-gradient text-black font-extrabold text-sm hover:translate-y-[-2px] hover:shadow-[0_10px_20px_rgba(240,185,11,0.2)] active:translate-y-0 transition-all"
            >
              Start a Project
            </a>
          </div>

          <button 
            className="md:hidden text-white w-10 h-10 flex items-center justify-center glass rounded-xl" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div key="close" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }}>
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}>
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-6 right-6 mt-2 glass rounded-2xl p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/80 text-lg font-medium"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 w-full text-center py-4 rounded-xl gold-gradient text-black font-bold shadow-lg"
            >
              Start a Project
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-brand-accent/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-[-10%] w-[300px] h-[300px] bg-white/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/5 text-xs font-bold text-brand-accent mb-6">
              <Sparkles size={14} />
              <span>TOP-TIER STRATEGIC DESIGN</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6">
              I build brands that <span className="text-gradient-gold">capture attention</span> and convert.
            </h1>
            <p className="text-xl text-white/60 mb-8 max-w-lg leading-relaxed">
              Premium identity design, conversion-focused strategy, and product innovation for industry leaders.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-8 py-4 rounded-2xl gold-gradient text-black font-bold flex items-center gap-2 hover:shadow-[0_0_30px_rgba(240,185,11,0.3)] transition-all"
              >
                Work With Me <ArrowRight size={20} />
              </a>
              <a 
                href="#work" 
                className="px-8 py-4 rounded-2xl glass hover:bg-white/10 transition-colors font-bold"
              >
                View Work
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden glass border-white/10 shadow-2xl skew-x-[-1deg] skew-y-[2deg] rotate-[-2deg]">
              <img 
                src="https://picsum.photos/seed/abstract-tech/1200/1000" 
                alt="Digital Strategy Visualization" 
                className="w-full aspect-[4/5] object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 p-6 glass-dark rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center">
                    <Target className="text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold">Next-Gen Interface</h4>
                    <p className="text-white/60 text-sm">Designed for conversion & speed</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating UI Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-4 p-4 glass rounded-2xl hidden md:block z-20"
            >
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-red-400" />
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                <div className="w-2 h-2 rounded-full bg-green-400" />
              </div>
              <div className="mt-3 text-[10px] font-mono text-brand-accent">DEPLOYED v2.4.0</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const WorkSection = () => {
  const projects = [
    {
      title: "Fintech Rebrand: Zenith",
      problem: "A legacy fintech brand struggling to appeal to Gen-Z investors due to outdated visual language.",
      solution: "Complete identity overhaul with high-contrast typography and a fluid glass-morphism interface.",
      result: "45% increase in mobile app downloads within first 3 months and $2.4M in series-A funding.",
      image: "https://picsum.photos/seed/fintech/800/600"
    },
    {
      title: "Luxura E-commerce",
      problem: "High traffic but low conversion rate due to complex checkout UX and generic product presentation.",
      solution: "Implemented 'Precision Commerce' framework with minimalist high-end product storytelling and 1-tap checkout.",
      result: "32% reduction in cart abandonment and 2.5x increase in average order value (AOV).",
      image: "https://picsum.photos/seed/luxury-shop/800/600"
    },
    {
      title: "AI SaaS Platform: Aura",
      problem: "Complex technical features that felt intimidating to non-technical business users.",
      solution: "Designed a conversational UX layer with soft UI and intuitive visual hierarchy to simplify AI complexity.",
      result: "User retention improved by 60% and secured partnership with 3 Fortune 500 companies.",
      image: "https://picsum.photos/seed/ai-saas/800/600"
    }
  ];

  return (
    <section id="work" className="py-24 bg-brand-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Selected Case Studies</h2>
            <p className="text-white/50 max-w-xl">Deep dives into brands that transformed from passive observers to market leaders.</p>
          </div>

          <div className="grid gap-16">
            {projects.map((project, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`grid md:grid-cols-2 gap-8 items-center ${idx % 2 === 0 ? "" : "md:flex-row-reverse"}`}
              >
                <div className={`order-2 ${idx % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                  <h3 className="text-3xl font-display font-bold mb-6">{project.title}</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="text-xs font-bold text-brand-accent tracking-widest uppercase mb-1">Problem</div>
                      <p className="text-white/70">{project.problem}</p>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-brand-accent tracking-widest uppercase mb-1">Solution</div>
                      <p className="text-white/70">{project.solution}</p>
                    </div>
                    <div className="p-4 glass rounded-xl border-brand-accent/20">
                      <div className="text-xs font-bold text-brand-accent tracking-widest uppercase mb-1">Business Impact</div>
                      <p className="text-white font-medium italic">"{project.result}"</p>
                    </div>
                  </div>
                  <button className="mt-8 flex items-center gap-2 group text-sm font-bold tracking-tight">
                    READ FULL STORY <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
                <div className={`order-1 ${idx % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                  <div className="relative group overflow-hidden rounded-3xl glass p-2 border-white/5">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full rounded-2xl group-hover:scale-105 transition-transform duration-700 brightness-75 group-hover:brightness-100"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <Palette size={28} />,
      title: "Brand Identity Systems",
      outcome: "We don't just design logos; we create visual universes that command premium pricing and instantly build trust with your ideal audience.",
      features: ["Strategic positioning", "Visual guidelines", "Logo architecture"]
    },
    {
      icon: <Radio size={28} />,
      title: "Content Strategy & Creation",
      outcome: "Capture the narrative of your industry. High-impact content that positions you as the authority, leading to inbound high-ticket leads.",
      features: ["Thought leadership", "Video strategy", "Viral distribution"]
    },
    {
      icon: <Layout size={28} />,
      title: "Product & UX Design",
      outcome: "Seamless digital experiences that remove friction and maximize conversion rates. We turn complex data into intuitive, profitable interfaces.",
      features: ["SaaS interfaces", "Mobile UX", "Conversion optimization"]
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-brand-accent/5 blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Transformative Solutions</h2>
          <p className="text-white/50">High-impact execution focused on bottom-line results.</p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="p-8 glass rounded-3xl border-white/5 flex flex-col items-start text-left"
            >
              <div className="w-14 h-14 rounded-2xl gold-gradient flex items-center justify-center text-black mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
              <p className="text-white/60 mb-6 leading-relaxed">
                {service.outcome}
              </p>
              <ul className="mt-auto space-y-3">
                {service.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm font-medium text-white/80">
                    <Zap size={14} className="text-brand-accent" /> {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ShuruqSection = () => {
  return (
    <section id="enterprise" className="py-24 bg-white/5 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="grid grid-cols-10 h-full">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="border-r border-white" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto glass p-8 md:p-16 rounded-[40px] border-white/10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="text-brand-accent font-bold tracking-widest text-xs uppercase mb-4">OUR EXECUTION ENGINE</div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 italic tracking-tight">SHURUQ Enterprise</h2>
            <p className="text-xl text-white/70 mb-8 leading-relaxed max-w-xl">
              Through SHURUQ Enterprise, we build scalable digital brands and systems that operate beyond the individual. It's our specialized hub for premium execution, where I serve as <span className="text-white font-bold underline decoration-brand-accent underline-offset-4">CPO & Co-founder</span>.
            </p>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-display font-bold">15+</div>
                <div className="text-white/40 text-xs font-bold uppercase tracking-widest">Active Brands</div>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-display font-bold">$10M+</div>
                <div className="text-white/40 text-xs font-bold uppercase tracking-widest">Client Value Created</div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
             <div className="relative">
                <div className="w-48 h-48 rounded-full border border-brand-accent/20 flex items-center justify-center animate-[spin_10s_linear_infinite]">
                   <div className="w-4 rounded-full h-4 bg-brand-accent absolute top-0" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <Layers size={64} className="text-brand-accent" />
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AuthoritySection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-square rounded-3xl overflow-hidden glass p-3 border-white/10 relative">
              <img 
                src="https://picsum.photos/seed/abdu-profile/800/800" 
                alt="Abdurahman Seid" 
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-8 right-8 p-4 glass-dark rounded-xl backdrop-blur-3xl border-white/20 rotate-6 shadow-2xl">
                 <p className="font-display font-bold text-lg leading-tight uppercase tracking-tighter">Strategic<br />Visionary</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Multi-disciplinary vision. One focus: Results.</h2>
            <div className="space-y-6 text-white/70 text-lg leading-relaxed">
              <p>
                I am <span className="text-white font-bold">Abdurahman Seid (ABDU)</span>. I sit at the intersection of psychology, design, and business strategy.
              </p>
              <p>
                My journey hasn't been about collecting skills; it's been about mastering the mechanisms of attention and trust. Whether I'm crafting a legacy brand identity or leading technical strategy as CPO, my vision remains the same: 
              </p>
              <p className="text-white font-medium italic border-l-2 border-brand-accent pl-6">
                "Creating digital assets that don't just look luxury, but perform with high-impact precision."
              </p>
              <div className="pt-4 grid grid-cols-2 gap-4">
                 <div className="glass p-4 rounded-2xl">
                    <span className="text-brand-accent font-bold block mb-1">Role</span>
                    <span className="text-sm">CPO & Co-founder</span>
                 </div>
                 <div className="glass p-4 rounded-2xl">
                    <span className="text-brand-accent font-bold block mb-1">Focus</span>
                    <span className="text-sm">High-value Acquisition</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContentSection = () => {
  const posts = [
    { title: "The Psychology of Luxury Design", date: "Apr 12, 2024", likes: "1.2k" },
    { title: "Building SHURUQ: A Global Brand Hub", date: "Mar 28, 2024", likes: "850" },
    { title: "Attention is the New Gold Rush", date: "Mar 15, 2024", likes: "2.1k" },
  ];

  return (
    <section id="content" className="py-24 glass-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-display font-bold mb-4 italic">Strategic Insights</h2>
              <p className="text-white/50">Thought leadership on design, psychology, and enterprise growth.</p>
            </div>
            <div className="flex gap-4">
               <a href="#" className="p-3 glass rounded-full hover:bg-brand-accent hover:text-black transition-all"><Linkedin size={20} /></a>
               <a href="#" className="p-3 glass rounded-full hover:bg-brand-accent hover:text-black transition-all"><Instagram size={20} /></a>
               <a href="#" className="p-3 glass rounded-full hover:bg-brand-accent hover:text-black transition-all"><Twitter size={20} /></a>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="p-8 glass rounded-3xl border-white/5 cursor-pointer flex flex-col h-full"
              >
                <div className="text-xs font-bold text-white/30 uppercase tracking-[0.2em] mb-4">{post.date}</div>
                <h3 className="text-xl font-bold mb-8 leading-tight">{post.title}</h3>
                <div className="mt-auto flex justify-between items-center pt-6 border-t border-white/10">
                   <span className="text-brand-accent text-sm font-bold flex items-center gap-1 lowercase tracking-wider">
                      <Sparkles size={14} /> {post.likes} shares
                   </span>
                   <ExternalLink size={16} className="text-white/40" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-accent/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto glass p-10 md:p-20 rounded-[50px] border-white/10 shadow-3xl text-center">
           <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tighter">Let's build your <span className="text-gradient-gold">legacy</span>.</h2>
           <p className="text-xl text-white/60 mb-12 max-w-xl mx-auto">
             I only take on a select number of high-impact partners each quarter to ensure premium results. Secure your strategy call today.
           </p>
           <form className="max-w-md mx-auto grid gap-4 text-left">
              <div className="grid md:grid-cols-2 gap-4">
                 <input type="text" placeholder="Name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-accent transition-colors" />
                 <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-accent transition-colors" />
              </div>
              <textarea placeholder="Tell me about your project & goals" rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-accent transition-colors resize-none" />
              <button className="w-full py-5 rounded-2xl gold-gradient text-black font-bold text-lg hover:scale-[1.01] active:scale-[0.98] transition-all shadow-xl">
                 Inquire Now
              </button>
           </form>
           <p className="mt-8 text-white/30 text-sm italic">Expect a response within 24–48 strategic hours.</p>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md gold-gradient flex items-center justify-center text-black text-[10px] font-bold">A</div>
            <span className="font-display font-bold text-lg tracking-tight uppercase">ABDU</span>
          </div>
          <div className="text-white/40 text-sm font-medium">
             &copy; {new Date().getFullYear()} Abdurahman Seid. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
             <a href="#" className="text-white/40 hover:text-brand-accent text-sm">Privacy Policy</a>
             <a href="#" className="text-white/40 hover:text-brand-accent text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="antialiased selection:bg-brand-accent selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <WorkSection />
        <ServicesSection />
        <ShuruqSection />
        <AuthoritySection />
        <ContentSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
