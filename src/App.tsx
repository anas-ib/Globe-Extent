import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { AnimatePresence } from 'framer-motion';

// Layout
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

// Pages
import Home from '@/pages/Home';
import BusinessSolutions from '@/pages/BusinessSolutions';
import SoftwareServices from '@/pages/SoftwareServices';
import Products from '@/pages/Products';
import EventManagement from '@/pages/EventManagement';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';

import { useLenis } from '@/hooks/useLenis';

const queryClient = new QueryClient();

// Create a wrapper component for routes to use useLocation hook for AnimatePresence
function AnimatedRoutes() {
  const location = useLocation();
  useLenis(); // Initialize smooth scrolling

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/business-solutions" element={<BusinessSolutions />} />
        <Route path="/software-services" element={<SoftwareServices />} />
        <Route path="/products" element={<Products />} />
        <Route path="/event-management" element={<EventManagement />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
              <AnimatedRoutes />
            </main>
            <Footer />
          </div>
        </BrowserRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
