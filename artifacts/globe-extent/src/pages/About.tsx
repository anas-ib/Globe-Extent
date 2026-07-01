import React from 'react';
import { motion } from 'framer-motion';
import { PageHero } from '@/components/shared/PageHero';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { CTASection } from '@/components/shared/CTASection';

const BREADCRUMBS = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' }
];

export default function About() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background"
    >
      <PageHero 
        title="About Us"
        subtitle="We are the quiet force behind your loudest successes. A global consulting firm dedicated to excellence."
        breadcrumbs={BREADCRUMBS}
      />

      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6 leading-tight">
                Empowering Visionaries <br />
                <span className="text-accent">Across the Globe.</span>
              </h2>
              <div className="w-20 h-1 bg-accent mb-8" />
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-sans">
                <p>
                  Globe Extent LLP is a premier multi-service business consulting company. We exist to solve the complex operational, legal, and technical challenges that stand between ambitious entrepreneurs and global success.
                </p>
                <p>
                  Unlike traditional single-focus agencies, we offer end-to-end solutions. From registering your corporate entity and maintaining tax compliance, to building your digital platforms and managing your grand product launches—we serve as a singular, trusted partner.
                </p>
                <p>
                  Our philosophy is simple: uncompromising quality, relentless precision, and a commitment to long-term partnerships over short-term transactions.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <div className="bg-secondary p-8 rounded-sm hover:bg-accent hover:text-white transition-colors duration-500 group">
                    <p className="text-4xl font-serif text-primary group-hover:text-white mb-2">4</p>
                    <p className="text-sm uppercase tracking-wider font-medium">Core Divisions</p>
                  </div>
                  <div className="bg-primary text-white p-8 rounded-sm">
                    <p className="text-4xl font-serif text-accent mb-2">100%</p>
                    <p className="text-sm uppercase tracking-wider font-medium text-white/70">Client Commitment</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-primary text-white p-8 rounded-sm">
                    <p className="text-4xl font-serif text-accent mb-2">360°</p>
                    <p className="text-sm uppercase tracking-wider font-medium text-white/70">Business Coverage</p>
                  </div>
                  <div className="bg-secondary p-8 rounded-sm hover:bg-accent hover:text-white transition-colors duration-500 group">
                    <p className="text-4xl font-serif text-primary group-hover:text-white mb-2">Global</p>
                    <p className="text-sm uppercase tracking-wider font-medium">Service Reach</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionHeading 
              title="Our Core Values" 
              subtitle="The principles that guide every decision, strategy, and interaction."
              centered
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <ValueCard 
              number="01"
              title="Excellence"
              desc="We reject mediocrity. Every service, document, and line of code we deliver must meet our stringent standards for premium quality."
              delay={0.1}
            />
            <ValueCard 
              number="02"
              title="Integrity"
              desc="Trust is the currency of consulting. We operate with complete transparency, absolute confidentiality, and unwavering ethical standards."
              delay={0.2}
            />
            <ValueCard 
              number="03"
              title="Innovation"
              desc="We continuously evolve our methodologies and technological capabilities to ensure our clients maintain their competitive edge."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      <CTASection 
        title="Partner with Globe Extent"
        subtitle="Discover how our expertise can accelerate your business objectives."
        fromPage="About Us"
      />
    </motion.main>
  );
}

function ValueCard({ number, title, desc, delay }: { number: string, title: string, desc: string, delay: number }) {
  return (
    <AnimatedSection delay={delay}>
      <div className="bg-white p-12 h-full border border-border hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 text-7xl font-serif text-secondary group-hover:text-accent/10 transition-colors duration-500 pointer-events-none">
          {number}
        </div>
        <h3 className="text-2xl font-serif text-primary mb-6 relative z-10">{title}</h3>
        <p className="text-muted-foreground leading-relaxed relative z-10">{desc}</p>
      </div>
    </AnimatedSection>
  );
}
