import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import { BrandLockup } from '@/components/shared/BrandLockup';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#08101E] pt-24 pb-8 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-6">
              <BrandLockup size="md" />
            </Link>
            <p className="text-white/60 font-sans leading-relaxed mb-8 max-w-sm">
              A premium multi-service consulting company providing end-to-end solutions for entrepreneurs, startups, and global enterprises.
            </p>
            <div className="flex gap-4">
              <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Facebook className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Instagram className="w-5 h-5" />} />
            </div>
          </div>

          {/* Divisions */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-serif text-lg mb-6 tracking-wide">Divisions</h4>
            <ul className="space-y-4">
              <FooterLink to="/business-solutions" label="Business Solutions" />
              <FooterLink to="/software-services" label="Software Services" />
              <FooterLink to="/products" label="Products" />
              <FooterLink to="/event-management" label="Event Management" />
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-serif text-lg mb-6 tracking-wide">Company</h4>
            <ul className="space-y-4">
              <FooterLink to="/about" label="About Us" />
              <FooterLink to="/contact" label="Contact Us" />
              <FooterLink to="#" label="Privacy Policy" />
              <FooterLink to="#" label="Terms of Service" />
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-serif text-lg mb-6 tracking-wide">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-white/60 group">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                <span className="leading-relaxed">123 Corporate Tower, Financial District, Global City, 10001</span>
              </li>
              <li className="flex items-center gap-4 text-white/60 group">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href="tel:+1234567890" className="hover:text-accent transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center gap-4 text-white/60 group">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href="mailto:contact@globeextent.com" className="hover:text-accent transition-colors">contact@globeextent.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm font-sans text-center md:text-left">
            &copy; {currentYear} Globe Extent LLP. All rights reserved.
          </p>
          <div className="text-white/40 text-sm font-sans">
            Designed for Excellence
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-accent hover:bg-accent/10 transition-all duration-300"
      target="_blank" rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}

function FooterLink({ to, label }: { to: string; label: string }) {
  return (
    <li>
      <Link 
        to={to} 
        className="text-white/60 hover:text-accent transition-colors duration-300 text-sm font-sans block tracking-wide"
      >
        {label}
      </Link>
    </li>
  );
}
