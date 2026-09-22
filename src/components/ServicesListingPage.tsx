import React, { useState } from 'react';
import {
  SERVICES_DATA,
  SERVICE_CATEGORIES,
  AgentOrPlanItem,
  ServiceCategory,
} from '../data/servicesData';
import { IntegrationCard } from './IntegrationCard';
import { FAQ } from './FAQ';
import { FinalCTA } from './FinalCTA';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import TextAnimation from '@/components/ui/scroll-text';

export interface ServicesListingPageProps {
  onSelectIntegration: (slug: string) => void;
  onOpenDemo: () => void;
  onOpenContact: () => void;
  onBookDemo?: () => void;
}

export type IntegrationsListingPage2Props = ServicesListingPageProps;

const HERO_TAG_VARIANTS = {
  hidden: { filter: 'blur(8px)', opacity: 0, y: 15 },
  visible: {
    filter: 'blur(0px)',
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export const ServicesListingPage: React.FC<ServicesListingPageProps> = ({
  onSelectIntegration,
  onOpenDemo,
  onOpenContact,
  onBookDemo,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('All');

  // Filter services by category
  const filteredIntegrations = SERVICES_DATA.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  const handleCategoryChange = (cat: ServiceCategory) => {
    setSelectedCategory(cat);
  };

  // Preview logo tools for the hero strip in order: Widget, Review, Receptionist, customer service Call, lead, Spam
  const heroLogos = ['wise', 'zoho-crm', 'paypal', 'razorpay', 'pipedrive', 'stripe']
    .map((slug) => SERVICES_DATA.find((item) => item.slug === slug))
    .filter((item): item is AgentOrPlanItem => Boolean(item));

  return (
    <div className="min-h-screen bg-white text-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 bg-gradient-to-b from-white via-white to-[#f6f6f8]">
        {/* Subtle Ambient Background Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[480px] z-0"
          style={{
            background:
              'radial-gradient(60% 60% at 50% 0%, rgba(0, 86, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6">
          <ScrollAnimation direction="up" viewport={{ amount: 0.3, margin: '0px 0px -40px 0px', once: true }}>
            <div className="flex flex-col items-center text-center">
              {/* Pill Badge */}
              <div className="mb-6 flex justify-center">
                <TextAnimation variants={HERO_TAG_VARIANTS}>
                  <div className="pill-badge text-[#0056ff]">
                    <span>INFORMED SERVICES</span>
                  </div>
                </TextAnimation>
              </div>

              {/* Main Headline */}
              <TextAnimation
                as="h1"
                variants={{
                  hidden: { filter: 'blur(10px)', opacity: 0, y: 20 },
                  visible: {
                    filter: 'blur(0px)',
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: 'easeOut' },
                  },
                }}
                classname="mb-4 font-heading text-[40px] font-semibold tracking-tight text-[#0a0a0a] sm:text-[56px] md:text-[64px]"
              >
                Services
              </TextAnimation>

              {/* Subhead */}
              <TextAnimation
                as="p"
                variants={{
                  hidden: { filter: 'blur(6px)', opacity: 0, y: 20 },
                  visible: {
                    filter: 'blur(0px)',
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, ease: 'easeOut', delay: 0.1 },
                  },
                }}
                classname="max-w-2xl text-[16px] leading-relaxed text-[#525252] sm:text-[18px]"
              >
                Every AI agent and plan AI Launch offers, built to run your business on autopilot.
              </TextAnimation>

              {/* Hero Floating Tool Logos Strip */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4.5">
                {heroLogos.map((tool, index) => {
                  const isFirst = index === 0;
                  const isLast = index === heroLogos.length - 1;
                  const maskStyle: React.CSSProperties = isFirst
                    ? {
                        maskImage: 'linear-gradient(to right, transparent 0%, black 100%)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 100%)',
                      }
                    : isLast
                    ? {
                        maskImage: 'linear-gradient(to right, black 0%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to right, black 0%, transparent 100%)',
                      }
                    : {};

                  return (
                    <button
                      key={tool.slug}
                      onClick={() => onSelectIntegration(tool.slug)}
                      title={tool.name}
                      style={maskStyle}
                      className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center overflow-hidden rounded-[18px] sm:rounded-[20px] border border-[#d6e9f0] bg-[#d6e9f0] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-[0px_8px_30px_rgba(0,0,0,0.08)] cursor-pointer"
                    >
                      <img
                        src={tool.logoUrl}
                        alt={`${tool.name} logo`}
                        className="h-full w-full object-cover block"
                        referrerPolicy="no-referrer"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Main Listing Section: Filter Tabs + Grid */}
      <section className="pt-8 sm:pt-12 pb-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          {/* Category Filter Tabs */}
          <ScrollAnimation direction="up" viewport={{ amount: 0.2, margin: '0px 0px -40px 0px', once: true }}>
            <div className="mb-12 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
              {SERVICE_CATEGORIES.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`cursor-pointer rounded-full px-5 py-2 text-[13px] sm:text-[14px] font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-[#0056ff] text-white shadow-[0_2px_10px_rgba(0,86,255,0.25)]'
                        : 'border border-[#f2f2f2] bg-white text-[#0a0a0a] hover:border-neutral-300 hover:text-[#0056ff]'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </ScrollAnimation>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3">
            {filteredIntegrations.map((item, index) => (
              <ScrollAnimation
                key={item.slug}
                direction="up"
                delay={(index % 6) * 0.08}
                viewport={{ amount: 0.15, margin: '0px 0px -40px 0px', once: true }}
                className="h-full"
              >
                <IntegrationCard
                  item={{
                    slug: item.slug,
                    name: item.name,
                    category: item.category,
                    shortDescription: item.shortDescription,
                    installUrl: item.buttonLink,
                    logoUrl: item.logoUrl,
                    whatIsHeading: item.whatHeading,
                    whatIsText: item.whatText,
                    benefitsHeading: item.includedHeading,
                    benefits: [],
                    howToConnectHeading: item.howHeading || '',
                    howToConnectSteps: [],
                    popularTools: item.popularTools,
                  }}
                  onViewDetails={onSelectIntegration}
                  onBookDemo={onBookDemo || onOpenDemo}
                />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Shared FAQ Section */}
      <FAQ onOpenContact={onOpenContact} />

      {/* Shared Final CTA Section */}
      <FinalCTA onStartTrial={onOpenDemo} onBookDemo={onBookDemo || onOpenDemo} />
    </div>
  );
};

export const IntegrationsListingPage2 = ServicesListingPage;
