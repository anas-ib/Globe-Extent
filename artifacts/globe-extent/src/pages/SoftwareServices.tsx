import React from 'react';
import { motion } from 'framer-motion';
import { 
  Laptop, Smartphone, Database, Search, 
  Wifi, Wrench
} from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ServiceCard } from '@/components/shared/ServiceCard';
import { CTASection } from '@/components/shared/CTASection';

import bgImage from '@assets/generated_images/software-bg.jpg';

const BREADCRUMBS = [
  { label: 'Home', path: '/' },
  { label: 'Software Services', path: '/software-services' }
];

const SERVICES = [
  {
    title: "Web Platforms",
    description: "Premium corporate websites, E-Commerce platforms, and tailored business websites designed for performance and conversion.",
    icon: <Laptop />,
    delay: 0.1
  },
  {
    title: "Mobile Applications",
    description: "Native and cross-platform mobile experiences that connect your brand directly to your customers' hands.",
    icon: <Smartphone />,
    delay: 0.2
  },
  {
    title: "Custom Business Software",
    description: "Bespoke internal tools, CRM systems, and ERP solutions built to optimize your unique operational workflows.",
    icon: <Database />,
    delay: 0.3
  },
  {
    title: "Digital Presence & SEO",
    description: "Strategic Search Engine Optimization and Google Business Profile management to dominate local and global search.",
    icon: <Search />,
    delay: 0.4
  },
  {
    title: "NFC / Tap-to-Connect",
    description: "Modern digital business cards and NFC integration for seamless, contactless information sharing.",
    icon: <Wifi />,
    delay: 0.5
  },
  {
    title: "Maintenance & Support",
    description: "Ongoing technical support, security updates, and performance optimization to keep your digital assets running flawlessly.",
    icon: <Wrench />,
    delay: 0.6
  }
];

export default function SoftwareServices() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background"
    >
      <PageHero 
        title="Software Services"
        subtitle="Digital solutions that drive business transformation. From enterprise platforms to mobile applications."
        breadcrumbs={BREADCRUMBS}
        backgroundImage={bgImage}
      />

      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-3xl mb-16 mx-auto text-center">
              <SectionHeading 
                title="Engineering Digital Excellence" 
                subtitle="We build more than just software. We engineer scalable digital ecosystems that automate operations, engage users, and accelerate growth."
                centered
              />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <ServiceCard 
                key={idx}
                title={service.title}
                description={service.description}
                icon={service.icon}
                linkTo={`/contact?from=Software Services&service=${encodeURIComponent(service.title)}`}
                delay={service.delay}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack / Approach Section */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/40 rounded-full blur-[150px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <SectionHeading 
              title="Our Engineering Approach" 
              subtitle="Built on modern architecture, deployed with enterprise security."
              light
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            <AnimatedSection delay={0.2}>
              <div className="border-l border-accent pl-6">
                <h4 className="text-2xl font-serif mb-4">Scalable Architecture</h4>
                <p className="text-white/60 font-sans leading-relaxed">
                  We design systems capable of handling exponential growth, utilizing modern cloud infrastructure and microservices where appropriate.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="border-l border-accent pl-6">
                <h4 className="text-2xl font-serif mb-4">Security First</h4>
                <p className="text-white/60 font-sans leading-relaxed">
                  Enterprise-grade security protocols integrated from day one. Your data and your users' privacy are never compromised.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="border-l border-accent pl-6">
                <h4 className="text-2xl font-serif mb-4">Premium UX/UI</h4>
                <p className="text-white/60 font-sans leading-relaxed">
                  We believe enterprise software shouldn't be ugly. Every interface we build is crafted to be intuitive, efficient, and beautiful.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to digitize your operations?"
        subtitle="Let's build the platform your business deserves."
        fromPage="Software Services"
      />
    </motion.main>
  );
}
