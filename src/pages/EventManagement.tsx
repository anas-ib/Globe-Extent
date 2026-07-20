import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users, Presentation, CarFront, Tent, Utensils, CupSoda } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ServiceCard } from '@/components/shared/ServiceCard';
import { CTASection } from '@/components/shared/CTASection';

const bgImage = '/attached_assets/generated_images/event-bg.jpg';

const BREADCRUMBS = [
  { label: 'Home', path: '/' },
  { label: 'Event Management', path: '/event-management' }
];

const EVENTS = [
  {
    title: "Wedding Events",
    description: "End-to-end luxury wedding planning, magnificent venue decorations, and flawless reception management for your special day.",
    icon: <Sparkles />,
    delay: 0.1
  },
  {
    title: "Corporate Events",
    description: "Professional conferences, executive meetings, award functions, and company celebrations executed with precision.",
    icon: <Users />,
    delay: 0.2
  },
  {
    title: "Product Launches",
    description: "High-impact launch events and brand promotion activations designed to create buzz and captivate your target audience.",
    icon: <Presentation />,
    delay: 0.3
  },
  {
    title: "Vehicle Launches",
    description: "Dramatic unveilings for cars and bikes, complete with showroom transformations and media-ready environments.",
    icon: <CarFront />,
    delay: 0.4
  },
  {
    title: "Stage & Decoration",
    description: "Thematic stage design, premium lighting rigs, and custom structural setups that transform any venue.",
    icon: <Tent />,
    delay: 0.5
  },
  {
    title: "Catering & Refreshments",
    description: "Premium catering services, hospitality management, and fresh juice counters tailored to your event's scale.",
    icon: <Utensils />,
    delay: 0.6
  }
];

export default function EventManagement() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background"
    >
      <PageHero 
        title="Event Management"
        subtitle="Curating unforgettable experiences. From luxury weddings to high-profile corporate launches."
        breadcrumbs={BREADCRUMBS}
        backgroundImage={bgImage}
      />

      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-3xl mb-16 mx-auto text-center">
              <SectionHeading 
                title="Flawless Execution, Every Time" 
                subtitle="We handle the intricate details, coordination, and pressure of event planning so you can step into the spotlight and enjoy the moment."
                centered
              />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EVENTS.map((service, idx) => (
              <ServiceCard 
                key={idx}
                title={service.title}
                description={service.description}
                icon={service.icon}
                linkTo={`/contact?from=Event Management&service=${encodeURIComponent(service.title)}`}
                delay={service.delay}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Spotlight Feature */}
      <section className="py-0 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-primary text-white p-12 lg:p-24 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent rounded-full blur-[100px]" />
            </div>
            
            <AnimatedSection>
              <div className="flex items-center gap-3 text-accent mb-6">
                <CupSoda className="w-6 h-6" />
                <span className="uppercase tracking-widest text-sm font-medium">Special Feature</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Fresh Juice & Beverage Counters</h2>
              <p className="text-lg text-white/70 font-sans mb-10 leading-relaxed">
                Elevate your event with our premium refreshment stations. We provide fully staffed, beautifully designed fresh juice stalls and beverage counters that add a touch of luxury and vitality to weddings, corporate meets, and exhibitions.
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>Live Mocktail Stations</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>Fresh Fruit Juice Stalls</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>Event Refreshment Coordination</span>
                </li>
              </ul>
            </AnimatedSection>
          </div>
          
          <div className="bg-secondary min-h-[400px] lg:min-h-full relative overflow-hidden flex items-center justify-center">
            {/* Visual placeholder for beverage counter */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary to-orange-50" />
            <AnimatedSection delay={0.2}>
              <div className="w-48 h-48 rounded-full border border-primary/10 flex items-center justify-center bg-white/50 backdrop-blur-sm relative z-10 shadow-xl">
                <CupSoda className="w-20 h-20 text-accent" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTASection 
        title="Planning an upcoming event?"
        subtitle="Let our experts handle the logistics while you focus on the vision."
        fromPage="Event Management"
      />
    </motion.main>
  );
}
