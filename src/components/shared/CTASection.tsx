import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  fromPage?: string;
  service?: string;
}

export function CTASection({ 
  title, 
  subtitle = "Our experts are ready to assist you.", 
  buttonText = "Contact Our Team",
  fromPage = "Website",
  service = "General Inquiry"
}: CTASectionProps) {
  const contactUrl = `/contact?from=${encodeURIComponent(fromPage)}&service=${encodeURIComponent(service)}`;

  return (
    <section className="py-24 relative overflow-hidden bg-primary text-primary-foreground">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/30 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto font-sans">
              {subtitle}
            </p>
            
            <Link to={contactUrl} className="inline-block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-accent text-white font-medium flex items-center justify-center gap-3 overflow-hidden shadow-lg"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 tracking-wide">{buttonText}</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
