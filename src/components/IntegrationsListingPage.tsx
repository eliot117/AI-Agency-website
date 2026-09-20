import React, { useState } from 'react';
import {
  INTEGRATIONS_DATA,
  INTEGRATION_CATEGORIES,
  IntegrationCategory,
  IntegrationItem,
} from '../data/integrationsData';
import { IntegrationCard } from './IntegrationCard';
import { FAQ } from './FAQ';
import { FinalCTA } from './FinalCTA';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import TextAnimation from '@/components/ui/scroll-text';

interface IntegrationsListingPageProps {
  onSelectIntegration: (slug: string) => void;
  onOpenDemo: () => void;
  onOpenContact: () => void;
  onBookDemo?: () => void;
}

const HERO_TAG_VARIANTS = {
  hidden: { filter: 'blur(8px)', opacity: 0, y: 15 },
  visible: {
    filter: 'blur(0px)',
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export const IntegrationsListingPage: React.FC<IntegrationsListingPageProps> = ({
  onSelectIntegration,
  onOpenDemo,
  onOpenContact,
  onBookDemo,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<IntegrationCategory>('All');
  const [visibleCount, setVisibleCount] = useState<number>(9);

  // Filter integrations by category
  const filteredIntegrations = INTEGRATIONS_DATA.filter((item) => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Marketing & Analytics') {
      return item.category === 'CMS' || item.slug === 'hubspot' || item.slug === 'salesforce';
    }
    return item.category === selectedCategory;
  });

  const displayedIntegrations =
    selectedCategory === 'All'
      ? filteredIntegrations.slice(0, visibleCount)
      : filteredIntegrations;

  const handleCategoryChange = (cat: IntegrationCategory) => {
    setSelectedCategory(cat);
    setVisibleCount(9);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 15);
  };

  // Preview logo tools for the hero strip (ChatGPT, Teams, Google Calendar, HubSpot, Outlook, OneDrive)
  const heroLogos = ['openai', 'teams', 'google-calendar', 'hubspot', 'outlook', 'onedrive']
    .map((slug) => INTEGRATIONS_DATA.find((item) => item.slug === slug))
    .filter((item): item is IntegrationItem => Boolean(item));

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
                    <span>POWERFUL INTEGRATIONS</span>
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
                Integrations
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
                Connect AI, productivity, communication, and payment tools to create powerful
                workflows that work together seamlessly.
              </TextAnimation>

              {/* Hero 6 Floating Tool Logos Strip */}
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
                      className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center overflow-hidden rounded-[18px] sm:rounded-[20px] border border-[#f2f2f2] bg-white p-1.5 sm:p-2 shadow-[0px_4px_20px_rgba(0,0,0,0.03)] transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-[0px_8px_30px_rgba(0,0,0,0.08)] cursor-pointer"
                    >
                      <img
                        src={tool.logoUrl}
                        alt={`${tool.name} logo`}
                        className="h-full w-full object-contain"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const img = e.currentTarget;
                          const pngSlugs = [
                            'google-drive',
                            'gmail',
                            'google-docs',
                            'google-sheets',
                            'google-meet',
                            'google-calendar',
                            'google-slides',
                            'zoho-crm',
                            'pipedream',
                            'notion',
                            'slack',
                            'telegram',
                            'anthropic',
                          ];
                          const ext = pngSlugs.includes(tool.slug) ? 'png' : 'svg';
                          const fallback = `/logos/${tool.slug}.${ext}`;
                          if (img.src !== fallback && !img.src.endsWith(fallback)) {
                            img.src = fallback;
                          }
                        }}
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
              {INTEGRATION_CATEGORIES.map((category) => {
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
            {displayedIntegrations.map((item, index) => (
              <ScrollAnimation
                key={item.slug}
                direction="up"
                delay={(index % 6) * 0.08}
                viewport={{ amount: 0.15, margin: '0px 0px -40px 0px', once: true }}
                className="h-full"
              >
                <IntegrationCard
                  item={item}
                  onViewDetails={onSelectIntegration}
                />
              </ScrollAnimation>
            ))}
          </div>

          {/* Load More Button - only for "All" group */}
          {selectedCategory === 'All' && displayedIntegrations.length < filteredIntegrations.length && (
            <div className="mt-14 flex justify-center">
              <button
                onClick={handleLoadMore}
                className="cursor-pointer rounded-[12px] bg-[#0a0a0a] px-8 py-3.5 text-[15px] font-medium text-white shadow-sm transition-colors hover:bg-neutral-800"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Shared FAQ Section */}
      <FAQ onOpenContact={onOpenContact} />

      {/* Shared Final CTA Section */}
      <FinalCTA onStartTrial={onOpenDemo} onBookDemo={onBookDemo || onOpenDemo} />
    </div>
  );
};
