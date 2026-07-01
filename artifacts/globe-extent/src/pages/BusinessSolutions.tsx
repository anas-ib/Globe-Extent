import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building, Landmark, Briefcase, FileText, 
  BadgeCheck, Scale, FileCheck, Globe, ChevronDown
} from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { CTASection } from '@/components/shared/CTASection';

const BREADCRUMBS = [
  { label: 'Home', path: '/' },
  { label: 'Business Solutions', path: '/business-solutions' }
];

const CATEGORIES: { id: string; title: string; icon: React.ReactElement<{ className?: string }>; items: string[] }[] = [
  {
    id: "setup",
    title: "Business Setup",
    icon: <Building />,
    items: ["Private Limited", "Public Limited", "LLP", "OPC", "Partnership Firm", "Sole Proprietorship"]
  },
  {
    id: "tax",
    title: "Tax Compliance",
    icon: <FileText />,
    items: ["GST Registration", "GST Return Filing", "GST Amendment", "GST Cancellation", "Accounting", "Bookkeeping", "Payroll", "Business Compliance"]
  },
  {
    id: "income-tax",
    title: "Income Tax",
    icon: <Landmark />,
    items: ["ITR Filing", "TDS Return", "Statutory Audit", "Tax Planning", "Consultancy", "Notice Assistance"]
  },
  {
    id: "corporate",
    title: "Corporate Compliance",
    icon: <Briefcase />,
    items: ["Annual ROC", "Director Compliance", "Company Filing", "Regulatory Compliance", "Corporate Advisory"]
  },
  {
    id: "finance",
    title: "Finance Services",
    icon: <Scale />,
    items: ["Business Loan", "Housing Loan", "Vehicle Loan", "Loan Against Property"]
  },
  {
    id: "license",
    title: "License Registration",
    icon: <BadgeCheck />,
    items: ["FSSAI", "MSME/Udyam", "IEC", "ISO", "Shop & Establishment", "Trade License", "Professional Tax", "Govt License"]
  },
  {
    id: "ip",
    title: "Intellectual Property",
    icon: <FileCheck />,
    items: ["Trademark Registration", "Trademark Renewal", "Trademark Objection", "Trademark Assignment", "Patent Filing", "Copyright", "Design Registration", "IP Consultancy"]
  },
  {
    id: "export",
    title: "Export Services",
    icon: <Globe />,
    items: ["DGFT", "ICEGATE", "Port Clearance", "Customs Docs", "Import/Export Docs", "Export Consultancy", "End-to-End Assistance"]
  }
];

export default function BusinessSolutions() {
  const [activeTab, setActiveTab] = useState(CATEGORIES[0].id);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background"
    >
      <PageHero 
        title="Business Solutions"
        subtitle="Comprehensive corporate compliance, taxation, business setup, and legal structuring for enterprises of all sizes."
        breadcrumbs={BREADCRUMBS}
      />

      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-3xl mb-16">
              <SectionHeading 
                title="A Foundation Built on Compliance & Strategy" 
                subtitle="Navigate complex regulatory environments with our comprehensive suite of corporate services. We handle the bureaucracy so you can focus on growth."
              />
            </div>
          </AnimatedSection>

          {/* DESKTOP TABS */}
          <AnimatedSection delay={0.2} className="hidden lg:flex gap-12 items-start">
            <div className="w-1/3 flex flex-col gap-2 relative">
              <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-border" />
              {CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`flex items-center gap-4 py-4 px-6 text-left relative transition-all duration-300 ${
                    activeTab === category.id 
                      ? 'bg-secondary text-primary font-medium' 
                      : 'text-muted-foreground hover:bg-secondary/50 hover:text-primary'
                  }`}
                >
                  {activeTab === category.id && (
                    <motion.div 
                      layoutId="activeTabIndicator"
                      className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent"
                    />
                  )}
                  <div className={`${activeTab === category.id ? 'text-accent' : 'text-muted-foreground'} transition-colors`}>
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {React.cloneElement(category.icon as React.ReactElement<any>, { className: 'w-5 h-5' })}
                  </div>
                  <span className="text-lg font-serif">{category.title}</span>
                </button>
              ))}
            </div>

            <div className="w-2/3 bg-secondary p-12 min-h-[500px]">
              <AnimatePresence mode="wait">
                {CATEGORIES.map((category) => 
                  category.id === activeTab && (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-white flex items-center justify-center text-accent shadow-sm">
                          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                          {React.cloneElement(category.icon as React.ReactElement<any>, { className: 'w-6 h-6' })}
                        </div>
                        <h3 className="text-3xl font-serif text-primary">{category.title}</h3>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                        {category.items.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                            <span className="text-primary/80">{item}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )
                )}
              </AnimatePresence>
            </div>
          </AnimatedSection>

          {/* MOBILE ACCORDION */}
          <AnimatedSection delay={0.2} className="lg:hidden space-y-4">
            {CATEGORIES.map((category) => (
              <div key={category.id} className="border border-border">
                <button
                  onClick={() => setActiveTab(activeTab === category.id ? "" : category.id)}
                  className="w-full flex items-center justify-between p-6 bg-white hover:bg-secondary transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-accent">
                      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {React.cloneElement(category.icon as React.ReactElement<any>, { className: 'w-5 h-5' })}
                    </div>
                    <span className="text-lg font-serif text-primary">{category.title}</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${activeTab === category.id ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {activeTab === category.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-secondary/50"
                    >
                      <div className="p-6 pt-0">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                          {category.items.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                              <span className="text-primary/80">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <CTASection 
        title="Need Expert Consultation?"
        subtitle="Discuss your business requirements with our specialists today."
        fromPage="Business Solutions"
      />
    </motion.main>
  );
}
