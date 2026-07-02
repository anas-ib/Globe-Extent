import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Shield, Hammer, HardHat } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { CTASection } from '@/components/shared/CTASection';

import bgImage from '@assets/generated_images/products-bg.jpg';
import { Link } from 'react-router-dom';

const BREADCRUMBS = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' }
];

export default function Products() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background"
    >
      <PageHero 
        title="Products"
        subtitle="Premium commercial solutions and private label manufacturing delivered through our trusted global partner network."
        breadcrumbs={BREADCRUMBS}
        backgroundImage={bgImage}
      />

      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-3xl mb-16">
              <SectionHeading 
                title="Commercial Grade Excellence" 
                subtitle="From launching your own beverage brand to securing industrial facilities, our product division provides end-to-end delivery of physical assets."
              />
            </div>
          </AnimatedSection>

          <div className="space-y-32">
            {/* Private Label Beverages */}
            <ProductShowcase 
              title="Private Label Beverage Solutions"
              subtitle="Launch your own brand. We handle the production."
              desc="Create and scale your own beverage brand without the overhead of manufacturing facilities. We manage the complete production process—from formulation to bottling—through our certified partner network."
              icon={<Coffee />}
              items={[
                "Energy Drinks & Sports Drinks",
                "Soft Drinks & Cold Drinks",
                "100% Coconut Water",
                "Fruit Juices & Nectars",
                "Health & Wellness Drinks",
                "Custom Formulation & Branding"
              ]}
              align="left"
              imageClass="bg-gradient-to-tr from-orange-100 to-amber-50"
            />

            {/* Automation & Security */}
            <ProductShowcase 
              title="Automation & Security Gates"
              subtitle="Enterprise-grade physical security."
              desc="Protect and automate your commercial or residential property with high-end access control systems. Built for durability, security, and seamless operation."
              icon={<Shield />}
              items={[
                "Commercial Automation Gates",
                "Industrial Sliding Gates",
                "Heavy-Duty Swing Gates",
                "Smart Gate Integrations",
                "Comprehensive Security Systems",
                "Biometric Access Control"
              ]}
              align="right"
              imageClass="bg-gradient-to-tr from-slate-200 to-slate-100"
            />

            {/* Engineering & Construction */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedSection>
                <div className="bg-secondary p-12 h-full flex flex-col items-start hover:shadow-xl transition-shadow duration-500">
                  <div className="w-16 h-16 bg-white text-accent flex items-center justify-center mb-8 shadow-sm">
                    <Hammer className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-serif text-primary mb-4">Engineering Works</h3>
                  <p className="text-muted-foreground font-sans leading-relaxed mb-8">
                    Precision engineering solutions delivered through our trusted partner organizations. From mechanical fabrication to industrial installations.
                  </p>
                  <div className="mt-auto">
                    <Link to="/contact?from=Products&service=Engineering Works" className="text-accent font-medium uppercase tracking-wide text-sm hover:text-primary transition-colors">
                      Inquire Details &rarr;
                    </Link>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="bg-primary text-white p-12 h-full flex flex-col items-start hover:shadow-xl transition-shadow duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
                  <div className="w-16 h-16 bg-white/10 text-accent flex items-center justify-center mb-8 backdrop-blur-sm relative z-10">
                    <HardHat className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-serif mb-4 relative z-10">Construction Works</h3>
                  <p className="text-white/70 font-sans leading-relaxed mb-8 relative z-10">
                    Commercial construction and infrastructure solutions managed and executed by our certified partner network ensuring compliance and quality.
                  </p>
                  <div className="mt-auto relative z-10">
                    <Link to="/contact?from=Products&service=Construction Works" className="text-accent font-medium uppercase tracking-wide text-sm hover:text-white transition-colors">
                      Inquire Details &rarr;
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Looking for a reliable supply partner?"
        subtitle="Contact us to discuss manufacturing capabilities and wholesale pricing."
        fromPage="Products"
      />
    </motion.main>
  );
}

function ProductShowcase({ title, subtitle, desc, icon, items, align, imageClass }: any) {
  const content = (
    <AnimatedSection className="flex flex-col justify-center">
      <div className="flex items-center gap-4 mb-6">
        <div className="text-accent">
          {React.cloneElement(icon, { className: "w-8 h-8" })}
        </div>
        <span className="text-sm font-sans tracking-widest uppercase text-muted-foreground">Product Line</span>
      </div>
      <h2 className="text-4xl font-serif text-primary mb-4">{title}</h2>
      <h3 className="text-xl text-accent mb-6 font-serif">{subtitle}</h3>
      <p className="text-lg text-muted-foreground mb-10 leading-relaxed">{desc}</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        {items.map((item: string, idx: number) => (
          <div key={idx} className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
            <span className="text-primary/80 font-medium">{item}</span>
          </div>
        ))}
      </div>

      <div>
        <Link to={`/contact?from=Products&service=${encodeURIComponent(title)}`}>
          <button className="px-8 py-4 border border-primary text-primary font-medium tracking-wide hover:bg-primary hover:text-white transition-colors duration-300">
            Request Catalog
          </button>
        </Link>
      </div>
    </AnimatedSection>
  );

  const image = (
    <AnimatedSection delay={0.2} className="h-full min-h-[400px]">
      <div className={`w-full h-full min-h-[400px] relative overflow-hidden flex items-center justify-center p-12 ${imageClass}`}>
        {/* Placeholder for actual product imagery, using decorative pattern instead */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] opacity-20 mix-blend-overlay" />
        <div className="w-32 h-32 rounded-full border border-primary/10 flex items-center justify-center text-primary/20 bg-white/50 backdrop-blur-sm">
          {React.cloneElement(icon, { className: "w-16 h-16" })}
        </div>
      </div>
    </AnimatedSection>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
      {align === 'left' ? (
        <>
          {content}
          {image}
        </>
      ) : (
        <>
          <div className="order-2 lg:order-1">{image}</div>
          <div className="order-1 lg:order-2">{content}</div>
        </>
      )}
    </div>
  );
}
