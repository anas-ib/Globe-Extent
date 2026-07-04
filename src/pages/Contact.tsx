import React from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { PageHero } from '@/components/shared/PageHero';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const BREADCRUMBS = [
  { label: 'Home', path: '/' },
  { label: 'Contact Us', path: '/contact' }
];

const OFFICE_PHONE = '+91 63602 35580';
const OFFICE_PHONE_SECONDARY = '+91 99469 1979';
const OFFICE_PHONE_THIRD = '+91 78290 24003';
const OFFICE_EMAIL = 'globeextent@gmail.com';
const EVENT_PHONE = '+91 82963 98650';
const OFFICE_PHONE_DIAL = 'tel:+916360235580';
const EVENT_PHONE_DIAL = 'tel:+918296398650';
const WHATSAPP_PHONE = '916360235580';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  phone: z.string().min(10, 'Please enter a valid phone number.'),
  service: z.string().min(1, 'Please select a service of interest.'),
  message: z.string().min(10, 'Message must be at least 10 characters.')
});

export default function Contact() {
  const [searchParams] = useSearchParams();
  const requestedService = searchParams.get('service');
  const sourcePage = searchParams.get('from');
  const isEventInquiry = sourcePage === 'Event Management';
  
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // Dynamic Hero Text
  let heroTitle = "Contact Us";
  let heroSubtitle = "Get in touch with our experts to discuss your business requirements.";

  if (requestedService) {
    heroTitle = "Request Consultation";
    heroSubtitle = `You're inquiring about ${requestedService}. Fill out the form below and an expert will reach out shortly.`;
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: requestedService || '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    const messageText = `Hello Globe Extent,\n\nName: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\nService: ${values.service}\nMessage: ${values.message}\n\nFrom: ${sourcePage || 'Website Contact Form'}`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(messageText)}`;

    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "WhatsApp Redirect Started",
        description: "Your message is pre-filled in WhatsApp. Please send it from the WhatsApp window.",
        action: <CheckCircle2 className="w-5 h-5 text-green-500" />,
      });
      form.reset();
    }, 500);
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background"
    >
      <PageHero 
        title={heroTitle}
        subtitle={heroSubtitle}
        breadcrumbs={BREADCRUMBS}
      />

      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Contact Info */}
            <div className="lg:col-span-5">
              <AnimatedSection>
                <SectionHeading 
                  title="Let's Start a Conversation." 
                  subtitle="Whether you're a startup seeking registration or an enterprise needing technical infrastructure, we're ready to assist."
                />
                
                <div className="space-y-8 mt-12">
                  {isEventInquiry ? (
                    <>
                      <ContactMethod 
                        icon={<Phone />}
                        title="Event Management Hotline"
                        detail={EVENT_PHONE}
                        action={EVENT_PHONE_DIAL}
                      />
                      <ContactMethod 
                        icon={<Clock />}
                        title="Business Hours"
                        detail="Mon - Fri: 9:00 AM - 6:00 PM (GMT)"
                      />
                      <p className="text-muted-foreground font-sans text-sm">
                        Call only. Please use the event hotline above for event management inquiries.
                      </p>
                    </>
                  ) : (
                    <>
                      <ContactMethod 
                        icon={<MapPin />}
                        title="Corporate Office"
                        detail="2nd Floor, Metro Tower, Kaikamba, Uppala - 671 322"
                      />
                      <ContactMethod 
                        icon={<Phone />}
                        title="Phone / WhatsApp"
                        detail={`${OFFICE_PHONE} • ${OFFICE_PHONE_SECONDARY} • ${OFFICE_PHONE_THIRD}`}
                        action={OFFICE_PHONE_DIAL}
                      />
                      <ContactMethod 
                        icon={<Mail />}
                        title="Email Address"
                        detail={OFFICE_EMAIL}
                        action={`mailto:${OFFICE_EMAIL}`}
                      />
                      <ContactMethod 
                        icon={<Clock />}
                        title="Business Hours"
                        detail="Mon - Fri: 9:00 AM - 6:00 PM (GMT)"
                      />
                    </>
                  )}
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <AnimatedSection delay={0.2}>
                <div className="bg-secondary p-8 md:p-12 border border-border shadow-xl">
                  <h3 className="text-2xl font-serif text-primary mb-8">Send a Message</h3>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-primary/80 uppercase tracking-wider text-xs">Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" className="bg-white border-border rounded-none h-12 focus-visible:ring-accent" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-primary/80 uppercase tracking-wider text-xs">Email Address</FormLabel>
                              <FormControl>
                                <Input placeholder="john@company.com" className="bg-white border-border rounded-none h-12 focus-visible:ring-accent" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-primary/80 uppercase tracking-wider text-xs">Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="+1 (555) 000-0000" className="bg-white border-border rounded-none h-12 focus-visible:ring-accent" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="service"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-primary/80 uppercase tracking-wider text-xs">Service of Interest</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-white border-border rounded-none h-12 focus:ring-accent">
                                    <SelectValue placeholder="Select a division" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="rounded-none">
                                  <SelectItem value="Business Setup & Compliance">Business Setup & Compliance</SelectItem>
                                  <SelectItem value="Taxation & Finance">Taxation & Finance</SelectItem>
                                  <SelectItem value="Software & Digital">Software & Digital Services</SelectItem>
                                  <SelectItem value="Products & Manufacturing">Products & Manufacturing</SelectItem>
                                  <SelectItem value="Event Management">Event Management</SelectItem>
                                  <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                                  {requestedService && !["Business Setup & Compliance", "Taxation & Finance", "Software & Digital", "Products & Manufacturing", "Event Management", "General Inquiry"].includes(requestedService) && (
                                    <SelectItem value={requestedService}>{requestedService}</SelectItem>
                                  )}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary/80 uppercase tracking-wider text-xs">Your Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="How can we help you?" 
                                className="bg-white border-border rounded-none min-h-[150px] resize-y focus-visible:ring-accent" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="group relative px-8 py-4 bg-primary text-white font-medium flex items-center justify-center gap-3 overflow-hidden shadow-lg w-full disabled:opacity-70"
                      >
                        <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        <span className="relative z-10 tracking-wide uppercase text-sm">
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </span>
                        {!isSubmitting && <Send className="w-4 h-4 relative z-10 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />}
                      </button>
                    </form>
                  </Form>
                </div>
              </AnimatedSection>
            </div>

          </div>
        </div>
      </section>
    </motion.main>
  );
}

function ContactMethod({ icon, title, detail, action }: { icon: React.ReactNode, title: string, detail: string, action?: string }) {
  return (
    <div className="flex gap-6 group">
      <div className="w-14 h-14 shrink-0 border border-border bg-secondary flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-serif text-primary mb-1">{title}</h4>
        {action ? (
          <a href={action} className="text-muted-foreground hover:text-accent transition-colors font-sans block">
            {detail}
          </a>
        ) : (
          <p className="text-muted-foreground font-sans">{detail}</p>
        )}
      </div>
    </div>
  );
}

// Contact form component
// Deployment test - July 2026