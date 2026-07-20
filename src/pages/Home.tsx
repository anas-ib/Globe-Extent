import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Code, Box, CalendarDays, Building2, Globe, ShieldCheck } from 'lucide-react';

import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { CTASection } from '@/components/shared/CTASection';
import { GlobeLogo } from '@/components/shared/GlobeLogo';
import { BrandLockup } from '@/components/shared/BrandLockup';

const towerImage = '/attached_assets/generated_images/corporate-tower.jpg';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Cursor following glow
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background min-h-screen"
    >
      {/* HERO SECTION */}
      <section
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-800 pt-20"
      >
        {/* Clean gradient background */}
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.12),transparent_28%)]" />
        </motion.div>

        {/* Interactive Cursor Glow */}
        <div
          className="pointer-events-none absolute z-0 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[120px] transition-transform duration-700 ease-out hidden lg:block"
          style={{
            transform: `translate(${mousePos.x - 300}px, ${mousePos.y - 300}px)`
          }}
        />

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 text-center">

          {/* Brand Lockup — Logo + Name */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center mb-8"
          >
            <div className="relative flex items-center justify-center">
              <div className="pointer-events-none absolute inset-0 mx-auto h-72 w-72 md:h-80 md:w-80 rounded-full bg-blue-400/20 blur-[140px]" />
              <div className="pointer-events-none absolute inset-0 mx-auto h-48 w-48 md:h-56 md:w-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.45),rgba(59,130,246,0.16)_38%,transparent_60%)] blur-3xl" />
              <GlobeLogo size={120} className="md:hidden relative shrink-0 drop-shadow-[0_0_26px_rgba(59,130,246,0.45)]" />
              <GlobeLogo size={160} className="hidden md:block relative shrink-0 drop-shadow-[0_0_36px_rgba(59,130,246,0.44)]" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="inline-block mb-6 px-4 py-1.5 border border-accent/30 bg-accent/10 backdrop-blur-sm"
          >
            <span className="text-accent font-sans text-sm font-medium tracking-[0.2em] uppercase">Global Excellence</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-10 leading-[1.2] max-w-6xl mx-auto"
          >
            <span className="block">Everything Your Business Needs.</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-200 to-accent block">All in One Place.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl text-white/70 font-sans max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            Helping entrepreneurs, startups, SMEs, and enterprises with complete business setup, tax and corporate compliance, finance, licensing, intellectual property, export services, technology solutions, and professional business support—all under one trusted partner.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link to="/contact?from=Home Hero&service=General Consultation">
              <button className="group relative px-8 py-4 bg-accent text-white font-medium flex items-center justify-center gap-3 overflow-hidden shadow-lg w-full sm:w-auto">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 tracking-wide">Book a Consultation</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>

            <a href="#divisions" className="group flex items-center gap-3 text-white font-medium tracking-wide uppercase text-sm hover:text-accent transition-colors w-full sm:w-auto justify-center">
              <span>Explore Divisions</span>
              <div className="w-8 h-[1px] bg-white group-hover:bg-accent group-hover:w-12 transition-all duration-300" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* DIVISIONS PREVIEW */}
      <section id="divisions" className="py-32 bg-secondary relative">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionHeading
              title="Our Expertise"
              subtitle="Four specialized divisions delivering world-class solutions across every stage of your business journey."
              centered
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-16">
            <DivisionCard
              title="Business Solutions"
              desc="Comprehensive corporate compliance, taxation, business setup, and legal structuring for enterprises of all sizes."
              icon={<Briefcase className="w-8 h-8" />}
              link="/business-solutions"
              delay={0.1}
            />
            <DivisionCard
              title="Software Services"
              desc="Cutting-edge digital transformation, custom software, web platforms, and mobile applications."
              icon={<Code className="w-8 h-8" />}
              link="/software-services"
              delay={0.2}
            />
            <DivisionCard
              title="Products"
              desc="Premium private label manufacturing, automation systems, and enterprise-grade commercial products."
              icon={<Box className="w-8 h-8" />}
              link="/products"
              delay={0.3}
            />
            <DivisionCard
              title="Event Management"
              desc="Flawless execution of luxury corporate events, product launches, and grand celebrations."
              icon={<CalendarDays className="w-8 h-8" />}
              link="/event-management"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* TRUST / WHY CHOOSE US */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="aspect-[4/5] bg-secondary overflow-hidden relative group">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
                  <img
                    src={towerImage}
                    alt="Corporate Tower"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 bg-primary text-white p-12 hidden md:block">
                  <p className="text-6xl font-serif text-accent mb-2">10+</p>
                  <p className="font-sans text-lg tracking-wider uppercase text-white/80">Years of<br />Excellence</p>
                </div>
              </div>
            </AnimatedSection>

            <div className="lg:pl-10">
              <AnimatedSection delay={0.2}>
                <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8 leading-tight">
                  A Partner Founded on <span className="text-accent">Trust & Precision.</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                  We don't just consult; we build. From the foundation of your legal entity to the architecture of your digital presence, we are the quiet force behind your loudest successes.
                </p>

                <div className="space-y-8">
                  <TrustFeature
                    icon={<Globe />}
                    title="Global Perspective"
                    desc="Understanding international standards while executing with local market precision."
                  />
                  <TrustFeature
                    icon={<Building2 />}
                    title="End-to-End Execution"
                    desc="A single partner for legal, technical, and operational deployment."
                  />
                  <TrustFeature
                    icon={<ShieldCheck />}
                    title="Uncompromising Quality"
                    desc="A dedication to craft that ensures premium results across every division."
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to elevate your business?"
        buttonText="Schedule a Consultation"
        fromPage="Home"
      />
    </motion.main>
  );
}

function DivisionCard({ title, desc, icon, link, delay }: { title: string, desc: string, icon: React.ReactNode, link: string, delay: number }) {
  return (
    <AnimatedSection delay={delay} className="group relative h-full">
      <Link to={link} className="block h-full">
        <div className="bg-white border border-border p-10 md:p-14 h-full relative overflow-hidden transition-all duration-500 hover:shadow-2xl">
          {/* Hover Background */}
          <div className="absolute inset-0 bg-primary transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-[0.22,1,0.36,1] z-0" />

          <div className="relative z-10 flex flex-col h-full">
            <div className="w-16 h-16 bg-secondary text-primary flex items-center justify-center rounded-sm mb-8 group-hover:bg-white/10 group-hover:text-accent transition-colors duration-500">
              {icon}
            </div>

            <h3 className="text-2xl md:text-3xl font-serif text-primary mb-4 group-hover:text-white transition-colors duration-500">
              {title}
            </h3>

            <p className="text-muted-foreground font-sans leading-relaxed mb-10 group-hover:text-white/70 transition-colors duration-500">
              {desc}
            </p>

            <div className="mt-auto pt-8 border-t border-border group-hover:border-white/20 transition-colors duration-500 flex items-center justify-between text-primary group-hover:text-accent font-medium tracking-wide uppercase text-sm">
              <span>Explore Division</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </Link>
    </AnimatedSection>
  );
}

function TrustFeature({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex gap-6 group">
      <div className="w-14 h-14 shrink-0 border border-border flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <div>
        <h4 className="text-xl font-serif text-primary mb-2">{title}</h4>
        <p className="text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}
