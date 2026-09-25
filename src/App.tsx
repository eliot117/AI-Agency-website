import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FeatureShowcase } from './components/FeatureShowcase';
import { ZigzagFeatures } from './components/ZigzagFeatures';
import { Integrations } from './components/Integrations';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { PricingPage } from './components/PricingPage';
import { IntegrationsListingPage } from './components/IntegrationsListingPage';
import { IntegrationDetailPage } from './components/IntegrationDetailPage';
import { ServicesSection } from './components/ServicesSection';
import { ServicesListingPage } from './components/ServicesListingPage';
import { ServiceDetailPage } from './components/ServiceDetailPage';
import { ContactPage } from './components/ContactPage';
import { BillingProvider } from './context/BillingContext';

type PageState = 'home' | 'pricing' | 'integrations' | 'integration-detail' | 'services' | 'service-detail' | 'contact';

export function App() {
  const parseRoute = (): { page: PageState; slug?: string } => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      const search = window.location.search.toLowerCase();

      // Check contact page: /contact or /contact-us or /book-demo
      if (
        path.includes('contact') ||
        hash.includes('contact') ||
        hash === '#contact' ||
        search.includes('contact') ||
        path.includes('book-demo') ||
        hash.includes('book-demo') ||
        hash === '#book-demo' ||
        search.includes('book-demo')
      ) {
        return { page: 'contact' };
      }

      // Check Services detail page: /services/:slug
      const serviceDetailMatch =
        path.match(/\/services\/([a-zA-Z0-9_-]+)/) ||
        hash.match(/\/services\/([a-zA-Z0-9_-]+)/);
      if (serviceDetailMatch && serviceDetailMatch[1]) {
        return { page: 'service-detail', slug: serviceDetailMatch[1] };
      }

      // Check Services listing page: /services
      if (
        path.includes('/services') ||
        hash.includes('/services') ||
        hash === '#services' ||
        search.includes('services')
      ) {
        return { page: 'services' };
      }

      // Check detail page: /integrations/:slug
      const detailMatch =
        path.match(/\/integrations\/([a-zA-Z0-9_-]+)/) ||
        hash.match(/\/integrations\/([a-zA-Z0-9_-]+)/);
      if (detailMatch && detailMatch[1]) {
        return { page: 'integration-detail', slug: detailMatch[1] };
      }

      // Check listing page: /integrations
      if (
        path.includes('/integrations') ||
        hash.includes('/integrations') ||
        hash === '#integrations' ||
        search.includes('integrations')
      ) {
        return { page: 'integrations' };
      }

      // Check pricing page: /pricing or #compare-plans
      if (
        path.includes('pricing') ||
        hash.includes('pricing') ||
        search.includes('pricing') ||
        hash.includes('compare-plans')
      ) {
        return { page: 'pricing' };
      }
    }
    return { page: 'home' };
  };

  const initialRoute = parseRoute();
  const [currentPage, setCurrentPage] = useState<PageState>(initialRoute.page);
  const [selectedIntegrationSlug, setSelectedIntegrationSlug] = useState<string>(
    initialRoute.slug || 'receptionist-ai-agent'
  );

  useEffect(() => {
    const handlePopState = () => {
      const route = parseRoute();
      setCurrentPage(route.page);
      if (route.slug) {
        setSelectedIntegrationSlug(route.slug);
      }
      if (window.location.hash) {
        setTimeout(() => {
          const hash = window.location.hash;
          if (hash.includes('inbound') || hash.includes('outbound')) {
            const el = document.getElementById('services-list') || document.querySelector(hash);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
            return;
          }
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handle initial hash scrolling on first mount
  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => {
        const hash = window.location.hash;
        if (hash.includes('inbound') || hash.includes('outbound')) {
          const el = document.getElementById('services-list') || document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          return;
        }
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 250);
    }
  }, []);

  const navigateTo = (page: PageState, hashOrSlug?: string) => {
    setCurrentPage(page);
    let targetUrl = '/';

    if (page === 'pricing') {
      targetUrl = hashOrSlug && hashOrSlug.startsWith('#') ? `/pricing${hashOrSlug}` : '/pricing';
    } else if (page === 'integrations') {
      targetUrl = '/integrations';
    } else if (page === 'services') {
      targetUrl = hashOrSlug && hashOrSlug.startsWith('#') ? `/services${hashOrSlug}` : '/services';
    } else if (page === 'contact') {
      targetUrl = hashOrSlug && hashOrSlug.startsWith('#') ? `/contact${hashOrSlug}` : '/contact';
    } else if (page === 'integration-detail') {
      const slug = hashOrSlug || selectedIntegrationSlug || 'paypal';
      setSelectedIntegrationSlug(slug);
      targetUrl = `/integrations/${slug}`;
    } else if (page === 'service-detail') {
      const slug = hashOrSlug || selectedIntegrationSlug || 'paypal';
      setSelectedIntegrationSlug(slug);
      targetUrl = `/services/${slug}`;
    } else if (page === 'home') {
      targetUrl = hashOrSlug && hashOrSlug.startsWith('#') ? `/${hashOrSlug}` : '/';
    }

    window.history.pushState(null, '', targetUrl);

    if (hashOrSlug && hashOrSlug.startsWith('#')) {
      setTimeout(() => {
        let target = hashOrSlug;
        if (page === 'contact') {
          if (
            hashOrSlug === '#ai-consulting' ||
            hashOrSlug === '#book-a-demo' ||
            hashOrSlug === '#book-demo' ||
            hashOrSlug === '#free-ai-consulting'
          ) {
            target = '#book-a-demo';
          } else if (
            hashOrSlug === '#send-us-a-message' ||
            hashOrSlug === '#send-message' ||
            hashOrSlug === '#contact-form'
          ) {
            target = '#contact-form';
          }
        } else if (page === 'pricing') {
          if (hashOrSlug === '#compare-plans') {
            target = '#ai-consulting';
          } else if (hashOrSlug === '#compare-plans-2') {
            target = '#autonomous-inbound-ai-agents';
          } else if (hashOrSlug === '#compare-plans-3') {
            target = '#autonomous-outbound-ai-agents';
          } else if (hashOrSlug === '#compare-plans-4') {
            target = '#full-time';
          } else if (
            hashOrSlug === '#receptionist-expert-pricing' ||
            hashOrSlug === '#autonomous-inbound-ai-agents-2'
          ) {
            target = '#autonomous-inbound-ai-agents-2';
          }
        } else if (page === 'services') {
          if (
            hashOrSlug === '#inbound-ai-agents' ||
            hashOrSlug === '#outbound-ai-agents' ||
            hashOrSlug === '#inbound' ||
            hashOrSlug === '#outbound' ||
            hashOrSlug === '#services-list'
          ) {
            target = '#services-list';
          }
        }
        const el = document.querySelector(target);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 120);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (_planName: string) => {
    navigateTo('contact', '#book-a-demo');
  };

  return (
    <BillingProvider>
      <div className="min-h-screen bg-white text-[#0a0a0a] selection:bg-[#0056ff] selection:text-white font-sans antialiased">
        {/* Floating Navigation */}
        <Navbar
          currentPage={currentPage}
          onNavigate={navigateTo}
          onOpenDemo={() => navigateTo('contact', '#book-a-demo')}
          onOpenContact={() => navigateTo('contact')}
        />

        {/* Main Content Area */}
        <main className={currentPage === 'home' ? '' : 'pt-24'}>
          {currentPage === 'contact' ? (
            /* Dedicated Replicated Contact Us Page with Book a Demo Section included */
            <ContactPage
              onNavigateHome={() => navigateTo('home')}
              onBookDemo={() => navigateTo('contact', '#book-a-demo')}
              onOpenPricing={() => navigateTo('pricing')}
            />
          ) : currentPage === 'pricing' ? (
            /* Dedicated Replicated Pricing Page */
            <PricingPage
              onOpenDemo={() => navigateTo('contact', '#book-a-demo')}
              onOpenContact={() => navigateTo('contact')}
              onSelectPlan={handleSelectPlan}
              onBookDemo={() => navigateTo('contact', '#book-a-demo')}
              onNavigate={navigateTo}
            />
          ) : currentPage === 'integrations' ? (
            /* Dedicated Replicated Integrations Listing Page */
            <IntegrationsListingPage
              onSelectIntegration={(slug) => navigateTo('integration-detail', slug)}
              onOpenDemo={() => navigateTo('contact', '#book-a-demo')}
              onOpenContact={() => navigateTo('contact')}
              onBookDemo={() => navigateTo('contact', '#book-a-demo')}
            />
          ) : currentPage === 'integration-detail' ? (
            /* Dynamic Individual Integration Detail Page */
            <IntegrationDetailPage
              slug={selectedIntegrationSlug}
              onBack={() => navigateTo('integrations')}
              onSelectIntegration={(slug) => navigateTo('integration-detail', slug)}
              onOpenDemo={() => navigateTo('contact', '#book-a-demo')}
              onOpenContact={() => navigateTo('contact')}
              onBookDemo={() => navigateTo('contact', '#book-a-demo')}
            />
          ) : currentPage === 'services' ? (
            /* Dedicated Services Listing Page */
            <ServicesListingPage
              onSelectIntegration={(slug) => navigateTo('service-detail', slug)}
              onOpenDemo={() => navigateTo('contact', '#book-a-demo')}
              onOpenContact={() => navigateTo('contact')}
              onBookDemo={() => navigateTo('contact', '#book-a-demo')}
            />
          ) : currentPage === 'service-detail' ? (
            /* Dynamic Individual Service Detail Page */
            <ServiceDetailPage
              slug={selectedIntegrationSlug}
              onBack={() => navigateTo('services')}
              onSelectIntegration={(slug) => navigateTo('service-detail', slug)}
              onOpenDemo={() => navigateTo('contact', '#book-a-demo')}
              onOpenContact={() => navigateTo('contact')}
              onBookDemo={() => navigateTo('contact', '#book-a-demo')}
              onNavigatePricingSection={(hash) => navigateTo('pricing', hash)}
            />
          ) : (
            /* Home Page */
            <>
              {/* Hero Section */}
              <Hero
                onOpenDemo={() => navigateTo('contact', '#book-a-demo')}
                onOpenGetStarted={() => navigateTo('pricing')}
                onNavigate={navigateTo}
              />

              {/* Why Choose Us 6-Bento Grid */}
              <WhyChooseUs />

              {/* Feature Showcase (Dashboard + 3 Cards) */}
              <FeatureShowcase />

              {/* 3 Zigzag Feature Rows */}
              <ZigzagFeatures />

              {/* 40+ Powerful Integrations */}
              <Integrations
                onNavigateIntegrations={() => navigateTo('integrations')}
              />

              {/* How It Works (Three Steps) */}
              <HowItWorks />

              {/* Services (AI Agents & Plans) Grid Section */}
              <ServicesSection
                onNavigateIntegrations={() => navigateTo('services')}
                onSelectIntegration={(slug) => navigateTo('service-detail', slug)}
                onBookDemo={() => navigateTo('contact', '#book-a-demo')}
              />

              {/* Pricing Section on Home Page */}
              <Pricing
                onOpenCompare={() => navigateTo('pricing', '#compare-plans-2')}
                onSelectPlan={handleSelectPlan}
                onNavigate={navigateTo}
                onOpenDemo={() => navigateTo('contact', '#book-a-demo')}
              />

              {/* Frequently Asked Questions */}
              <FAQ onOpenContact={() => navigateTo('contact')} />

              {/* Final CTA Banner */}
              <FinalCTA
                onNavigate={navigateTo}
                onStartTrial={() => navigateTo('contact', '#ai-consulting')}
                onBookDemo={() => navigateTo('contact', '#book-a-demo')}
              />
            </>
          )}
        </main>

        {/* Footer */}
        <Footer
          onOpenContact={() => navigateTo('contact')}
          onNavigate={navigateTo}
        />
      </div>
    </BillingProvider>
  );
}

export default App;
