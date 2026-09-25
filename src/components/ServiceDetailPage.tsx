import React, { useEffect } from 'react';
import { ArrowLeft, Check, ExternalLink } from 'lucide-react';
import {
  getServiceBySlug,
  SERVICES_DATA,
} from '../data/servicesData';
import { IntegrationCard } from './IntegrationCard';
import { FAQ } from './FAQ';
import { FinalCTA } from './FinalCTA';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import TextAnimation from '@/components/ui/scroll-text';

export interface ServiceDetailPageProps {
  slug: string;
  onBack: () => void;
  onSelectIntegration: (slug: string) => void;
  onOpenDemo: () => void;
  onOpenContact: () => void;
  onBookDemo?: () => void;
  onNavigatePricingSection?: (hash: string) => void;
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

interface TierComparisonConfig {
  heading?: string;
  subtitle?: string;
  columns: string[];
  rows: {
    feature: string;
    link?: string;
    values: (string | boolean)[];
  }[];
}

const TIER_COMPARISONS: Record<string, TierComparisonConfig> = {
  'receptionist-ai-agent': {
    columns: ['Standard', 'Expert', 'Advanced'],
    rows: [
      { feature: 'Capacity', values: ['100 calls/mo', '500 calls/mo', 'Unlimited'] },
      { feature: 'CRM Integration', values: ['Limited', 'Full', 'Full'] },
      { feature: 'Team Notifications', values: ['Basic', 'Advanced', 'Custom'] },
      { feature: 'Google Reviews', values: ['No', 'Yes', 'Yes'] },
      { feature: 'Spam Filtering', values: ['No', 'Yes', 'Yes'] },
      { feature: 'Advanced Version', values: ['No', 'No', 'Yes'] },
      { feature: 'Price', values: ['$50 setup + $300/mo', '$100 setup + $450/mo', '$100 setup + $500/mo'] },
    ],
  },
  'customer-support-ai-call-agent': {
    columns: ['Standard', 'Expert', 'Advanced'],
    rows: [
      { feature: 'Capacity', values: ['100 calls/mo', '500 calls/mo', 'Unlimited'] },
      { feature: 'CRM Integration', values: ['Limited', 'Full', 'Full'] },
      { feature: 'Team Notifications', values: ['Basic', 'Advanced', 'Custom'] },
      { feature: 'Google Reviews', values: ['No', 'Yes', 'Yes'] },
      { feature: 'Spam Filtering', values: ['No', 'No', 'Yes'] },
      { feature: 'Advanced Version', values: ['No', 'No', 'Yes'] },
      { feature: 'Price', values: ['$50 setup + $100/mo', '$100 setup + $250/mo', '$100 setup + $300/mo'] },
    ],
  },
  'customer-support-ai-agent-widget': {
    columns: ['Standard', 'Expert', 'Advanced'],
    rows: [
      { feature: 'Capacity', values: ['100 messages/mo', '500 messages/mo', 'Unlimited'] },
      { feature: 'CRM Integration', values: ['Limited', 'Full', 'Full'] },
      { feature: 'Team Notifications', values: ['Basic', 'Advanced', 'Custom'] },
      { feature: 'Google Reviews', values: ['No', 'Yes', 'Yes'] },
      { feature: 'Spam Filtering', values: ['No', 'No', 'Yes'] },
      { feature: 'Advanced Version', values: ['No', 'No', 'Yes'] },
      { feature: 'Price', values: ['$50 setup + $50/mo', '$150 setup + $80/mo', '$150 setup + $100/mo'] },
    ],
  },
  'spam-filter-ai-agent': {
    subtitle: 'Only two tiers here, not three, since screening calls is a simpler job than running a full front desk.',
    columns: ['Standard', 'Advanced'],
    rows: [
      { feature: 'Capacity', values: ['100 calls/mo', 'Unlimited'] },
      { feature: 'Team Notifications', values: ['Advanced', 'Custom'] },
      { feature: 'Spam Filtering', values: ['Yes', 'Yes'] },
      { feature: 'Advanced Version', values: ['No', 'Yes'] },
      { feature: 'Price', values: ['$50 setup + $20/mo', '$100 setup + $50/mo'] },
    ],
  },
  'lead-call-ai-agent': {
    columns: ['Standard', 'Expert', 'Advanced'],
    rows: [
      { feature: 'Capacity', values: ['50 calls/mo', '150 calls/mo', '500 calls/mo'] },
      { feature: 'CRM Integration', values: ['Limited', 'Full', 'Full'] },
      { feature: 'Team Notifications', values: ['Basic', 'Advanced', 'Custom'] },
      { feature: 'Google Reviews', values: ['No', 'Yes', 'Yes'] },
      { feature: 'Advanced Version', values: ['No', 'No', 'Yes'] },
      { feature: 'Price', values: ['$50 setup + $200/mo', '$100 setup + $350/mo', '$100 setup + $500/mo'] },
    ],
  },
  'reviews-ai-agent': {
    columns: ['Standard', 'Expert', 'Advanced'],
    rows: [
      { feature: 'Capacity', values: ['50 calls/mo', '150 calls/mo', '500 calls/mo'] },
      { feature: 'CRM Integration', values: ['Limited', 'Full', 'Full'] },
      { feature: 'Team Notifications', values: ['Basic', 'Advanced', 'Custom'] },
      { feature: 'Appointment Booking', values: ['No', 'No', 'Yes'] },
      { feature: 'Advanced Version', values: ['No', 'No', 'Yes'] },
      { feature: 'Price', values: ['$50 setup + $100/mo', '$100 setup + $250/mo', '$100 setup + $300/mo'] },
    ],
  },
  'consulting-plan': {
    columns: ['Included'],
    rows: [
      { feature: 'AI Business Discussion', values: [true] },
      { feature: 'Assessment Results', values: [true] },
      { feature: 'Personalised Recommendations', values: [true] },
      { feature: 'Industry Tips', values: [true] },
      { feature: 'Enquiries About Services', values: [true] },
      { feature: 'Live Demo', values: [true] },
    ],
  },
  'consulting': {
    columns: ['Included'],
    rows: [
      { feature: 'AI Business Discussion', values: [true] },
      { feature: 'Assessment Results', values: [true] },
      { feature: 'Personalised Recommendations', values: [true] },
      { feature: 'Industry Tips', values: [true] },
      { feature: 'Enquiries About Services', values: [true] },
      { feature: 'Live Demo', values: [true] },
    ],
  },
  'full-time-plan': {
    columns: ['Included'],
    rows: [
      { feature: 'Full Time AI Architect', link: 'https://www.coursera.org/articles/ai-architect', values: [true] },
      { feature: 'Full Time AI Solutions Engineer', link: 'https://www.careerexplorer.com/careers/ai-solutions-engineer/', values: [true] },
      { feature: 'Full Systems Automated', values: [true] },
      { feature: 'Specialised AI Agents for Workers', values: [true] },
      { feature: 'Custom AI Tools & AI Apps for Workers', values: [true] },
      { feature: 'Custom AI Developments, Infrastructures & Websites', values: [true] },
    ],
  },
  'full-time': {
    columns: ['Included'],
    rows: [
      { feature: 'Full Time AI Architect', link: 'https://www.coursera.org/articles/ai-architect', values: [true] },
      { feature: 'Full Time AI Solutions Engineer', link: 'https://www.careerexplorer.com/careers/ai-solutions-engineer/', values: [true] },
      { feature: 'Full Systems Automated', values: [true] },
      { feature: 'Specialised AI Agents for Workers', values: [true] },
      { feature: 'Custom AI Tools & AI Apps for Workers', values: [true] },
      { feature: 'Custom AI Developments, Infrastructures & Websites', values: [true] },
    ],
  },
};

const renderTableValue = (val: string | boolean) => {
  if (val === true || val === '✓' || val === 'Yes') {
    return (
      <div className="mx-auto flex h-5 w-5 items-center justify-center rounded-full bg-[#0056ff] text-white shadow-xs">
        <Check className="h-3 w-3 stroke-[3]" />
      </div>
    );
  }
  if (val === false || val === '--') {
    return (
      <span className="font-heading text-[14px] font-normal text-[#a6a9ae]">
        --
      </span>
    );
  }
  if (val === '✗' || val === 'x' || val === 'X' || val === 'No') {
    return (
      <span className="font-heading text-[14px] font-normal text-[#a6a9ae]">
        ✕
      </span>
    );
  }
  return (
    <span className="font-heading text-[13px] sm:text-[14px] font-medium text-[#0a0a0a]">
      {val}
    </span>
  );
};

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  slug,
  onBack,
  onSelectIntegration,
  onOpenDemo,
  onOpenContact,
  onBookDemo,
  onNavigatePricingSection,
}) => {
  const item = getServiceBySlug(slug);

  // Scroll to top whenever slug changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!item) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 text-center">
        <h2 className="mb-4 font-heading text-[28px] font-semibold text-[#0a0a0a]">
          Integration Not Found
        </h2>
        <p className="mb-8 text-[#525252]">
          The integration you are looking for does not exist or has been moved.
        </p>
        <button
          onClick={onBack}
          className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#0056ff] px-6 py-2.5 font-medium text-white shadow-sm transition-all hover:bg-[#0040c0]"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to services</span>
        </button>
      </div>
    );
  }

  // Category-based related items logic
  const isPlanPage = item.category === 'AI Consulting' || item.category === 'Full Time' || (item.category as string) === 'Plans';
  const isOutboundPage = item.category === 'Outbound AI Agents';
  const isInboundPage = item.category === 'Inbound AI Agents';
  const tierConfig = TIER_COMPARISONS[item.slug];

  let relatedHeading = '';
  let relatedItems: typeof SERVICES_DATA = [];

  if (isOutboundPage) {
    relatedHeading = 'Other Outbound AI Agents';
    relatedItems = SERVICES_DATA.filter(
      (p) => p.category === 'Outbound AI Agents' && p.slug !== item.slug
    );
  } else if (isInboundPage) {
    relatedHeading = 'Other Inbound AI Agents';
    relatedItems = SERVICES_DATA.filter(
      (p) => p.category === 'Inbound AI Agents' && p.slug !== item.slug
    );
  }

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onNavigatePricingSection && item.pricingTargetHash) {
      e.preventDefault();
      onNavigatePricingSection(item.pricingTargetHash);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#0a0a0a]">
      {/* Detail Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-20 bg-gradient-to-b from-white via-white to-[#f6f6f8]">
        {/* Subtle Ambient Background Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[450px] z-0"
          style={{
            background:
              'radial-gradient(60% 60% at 50% 0%, rgba(0, 86, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6">
          {/* Back Navigation Button */}
          <div className="mb-8 sm:mb-12">
            <button
              onClick={onBack}
              className="group inline-flex cursor-pointer items-center gap-2 text-[14px] font-medium text-[#525252] transition-colors hover:text-[#0056ff]"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to services</span>
            </button>
          </div>

          {/* Hero Content */}
          <ScrollAnimation direction="up" viewport={{ amount: 0.3, margin: '0px 0px -40px 0px', once: true }}>
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8 lg:gap-10">
                {/* Service Image Box */}
                <div className="flex h-32 w-32 sm:h-36 sm:w-36 lg:h-[150px] lg:w-[150px] shrink-0 items-center justify-center overflow-hidden rounded-[24px] sm:rounded-[28px] border border-[#d6e9f0] bg-[#d6e9f0] shadow-sm">
                  {item.logoUrl ? (
                    <img
                      src={item.logoUrl}
                      alt={`${item.name}`}
                      className="h-full w-full object-cover block"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0056ff]/10 text-[24px] font-bold text-[#0056ff]">
                      {item.name.slice(0, 2).toUpperCase()}
                    </div>
                  )}
                </div>

                {/* Text Info */}
                <div className="flex flex-col items-start text-left">
                  {/* Category Pill */}
                  <div className="mb-3">
                    <TextAnimation variants={HERO_TAG_VARIANTS}>
                      <div className="pill-badge text-[#0056ff]">
                        <span>{item.category}</span>
                      </div>
                    </TextAnimation>
                  </div>

                  {/* Title */}
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
                    classname="mb-3 font-heading text-[32px] font-semibold tracking-tight text-[#0a0a0a] sm:text-[44px] md:text-[52px]"
                  >
                    {item.name}
                  </TextAnimation>

                  {/* Tagline / Short Description */}
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
                    {item.tagline}
                  </TextAnimation>
                </div>
              </div>

              {/* Action Buttons: See Pricing & Book a Demo */}
              <div className="shrink-0 pt-1 flex flex-col gap-2.5 w-full sm:w-[200px]">
                <a
                  href={item.buttonLink || '/pricing'}
                  onClick={handleCtaClick}
                  className="inline-flex cursor-pointer items-center justify-center rounded-[12px] bg-[#0056ff] px-6 py-2.5 sm:px-7 sm:py-3 text-[14px] sm:text-[15px] font-medium text-white transition-colors duration-200 hover:bg-[#0047d4] text-center w-full shadow-xs"
                >
                  {item.buttonLabel || 'See Pricing'}
                </a>
                <a
                  href="/contact#book-a-demo"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onBookDemo) {
                      onBookDemo();
                    } else if (onOpenDemo) {
                      onOpenDemo();
                    } else {
                      onOpenContact();
                    }
                  }}
                  className="inline-flex cursor-pointer items-center justify-center rounded-[12px] border border-[#0056ff] bg-white px-6 py-2.5 sm:px-7 sm:py-3 text-[14px] sm:text-[15px] font-medium text-[#0056ff] transition-all duration-200 hover:bg-[#0056ff] hover:text-white text-center w-full"
                >
                  Book a Demo
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Main Documentation & Content Section */}
      <section className="pt-20 sm:pt-28 pb-16 sm:pb-24">
        <div className="mx-auto max-w-[840px] px-4 sm:px-6">
          {/* What It Does / What It Includes Section */}
          <ScrollAnimation direction="up" viewport={{ amount: 0.2, margin: '0px 0px -40px 0px', once: true }}>
            <div className="mb-14">
              <h2 className="mb-4 font-heading text-[26px] font-medium tracking-tight text-[#0a0a0a] sm:text-[32px]">
                {item.whatHeading}
              </h2>
              <p className="text-[16px] leading-[1.7] text-[#525252]">
                {item.whatText}
              </p>
            </div>
          </ScrollAnimation>

          {/* How It Works Section (when present) */}
          {item.howHeading && item.howText && (
            <ScrollAnimation direction="up" viewport={{ amount: 0.2, margin: '0px 0px -40px 0px', once: true }}>
              <div className="mb-14">
                <h2 className="mb-4 font-heading text-[26px] font-medium tracking-tight text-[#0a0a0a] sm:text-[32px]">
                  {item.howHeading}
                </h2>
                <p className="text-[16px] leading-[1.7] text-[#525252]">
                  {item.howText}
                </p>
              </div>
            </ScrollAnimation>
          )}

          {/* What's Included / What Happens on the Call Section */}
          {(item.includedText || (item.includedItems && item.includedItems.length > 0)) && (
            <ScrollAnimation direction="up" viewport={{ amount: 0.2, margin: '0px 0px -40px 0px', once: true }}>
              <div className="mb-14">
                <h2 className="mb-4 font-heading text-[26px] font-medium tracking-tight text-[#0a0a0a] sm:text-[32px]">
                  {item.includedHeading}
                </h2>
                {item.includedText ? (
                  <p className="text-[16px] leading-[1.7] text-[#525252]">
                    {item.includedText}
                  </p>
                ) : (
                  <ul className="space-y-3.5 pl-5 list-disc text-[16px] leading-relaxed text-[#525252]">
                    {item.includedItems?.map((inc, idx) => (
                      <li key={idx} className="pl-1 text-[#525252]">
                        {inc}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </ScrollAnimation>
          )}

          {/* Tier Comparison or Plan Features Table */}
          {tierConfig && (
            <ScrollAnimation direction="up" viewport={{ amount: 0.2, margin: '0px 0px -40px 0px', once: true }}>
              <div className="mb-14">
                {tierConfig.columns.length > 1 && (
                  <h2 className="mb-2 font-heading text-[26px] font-medium tracking-tight text-[#0a0a0a] sm:text-[32px]">
                    {tierConfig.heading || 'Choosing Your Tier'}
                  </h2>
                )}
                {tierConfig.subtitle && (
                  <p className="mb-4 text-[15px] sm:text-[16px] leading-[1.6] text-[#525252]">
                    {tierConfig.subtitle}
                  </p>
                )}
                <div className={`${tierConfig.columns.length > 1 ? 'overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0' : 'w-full'} mt-4`}>
                  <div className={`${tierConfig.columns.length > 1 ? 'min-w-[560px] sm:min-w-0' : 'w-full'} relative`}>
                    {/* Table Header */}
                    <div className="relative z-10 grid grid-cols-12 items-center pb-5 pt-2 border-b border-[#f2f2f2]">
                      <div className={`${tierConfig.columns.length === 1 ? 'col-span-8' : tierConfig.columns.length === 2 ? 'col-span-4' : 'col-span-3'} pl-4`}>
                        <h3 className="font-heading text-[18px] font-medium text-[#0a0a0a]">
                          Features
                        </h3>
                      </div>
                      {tierConfig.columns.map((colName, cIdx) => (
                        <div
                          key={cIdx}
                          className={`${tierConfig.columns.length === 1 ? 'col-span-4' : tierConfig.columns.length === 2 ? 'col-span-4' : 'col-span-3'} text-center`}
                        >
                          <span className="font-heading text-[16px] font-medium text-[#0a0a0a]">
                            {colName}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Table Body Rows */}
                    {tierConfig.rows.map((row, rIdx) => (
                      <div
                        key={rIdx}
                        className="grid grid-cols-12 items-center py-3 transition-colors hover:bg-neutral-50/50 rounded-lg border-b border-[#f2f2f2]/60"
                      >
                        <div className={`${tierConfig.columns.length === 1 ? 'col-span-8' : tierConfig.columns.length === 2 ? 'col-span-4' : 'col-span-3'} pl-4 pr-3`}>
                          {row.link ? (
                            <a
                              href={row.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-[13.5px] sm:text-[14px] font-semibold text-[#0056ff] underline underline-offset-2 hover:text-[#0040c0]"
                            >
                              <span>{row.feature}</span>
                              <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                            </a>
                          ) : (
                            <span className="text-[13.5px] sm:text-[14px] font-semibold text-[#0a0a0a]">
                              {row.feature}
                            </span>
                          )}
                        </div>
                        {row.values.map((val, vIdx) => (
                          <div
                            key={vIdx}
                            className={`${tierConfig.columns.length === 1 ? 'col-span-4' : tierConfig.columns.length === 2 ? 'col-span-4' : 'col-span-3'} text-center flex justify-center items-center`}
                          >
                            {renderTableValue(val)}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          )}

          {/* Who It's For Section */}
          <ScrollAnimation direction="up" viewport={{ amount: 0.2, margin: '0px 0px -40px 0px', once: true }}>
            <div className="mb-14">
              <h2 className="mb-4 font-heading text-[26px] font-medium tracking-tight text-[#0a0a0a] sm:text-[32px]">
                {item.whoHeading}
              </h2>
              <p className="text-[16px] leading-[1.7] text-[#525252]">
                {item.whoText}
              </p>
            </div>
          </ScrollAnimation>

          {/* Why It's Worth It Section */}
          <ScrollAnimation direction="up" viewport={{ amount: 0.2, margin: '0px 0px -40px 0px', once: true }}>
            <div className="mb-14">
              <h2 className="mb-4 font-heading text-[26px] font-medium tracking-tight text-[#0a0a0a] sm:text-[32px]">
                {item.whyHeading}
              </h2>
              <p className="text-[16px] leading-[1.7] text-[#525252]">
                {item.whyText}
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Other AI Agents Section (Removed for Plans) */}
      {!isPlanPage && relatedItems.length > 0 && (
        <section className="bg-[#fafafa] py-16 sm:py-24">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
            <ScrollAnimation direction="up" viewport={{ amount: 0.2, margin: '0px 0px -40px 0px', once: true }}>
              <div className="mb-10 text-center sm:mb-12">
                <h3 className="font-heading text-[28px] font-medium tracking-tight text-[#0a0a0a] sm:text-[36px]">
                  {relatedHeading}
                </h3>
              </div>
            </ScrollAnimation>

            <div
              className={`grid grid-cols-1 gap-6 sm:gap-7 ${
                relatedItems.length === 1
                  ? 'max-w-md mx-auto'
                  : 'md:grid-cols-2 lg:grid-cols-3'
              }`}
            >
              {relatedItems.map((tool, index) => (
                <ScrollAnimation
                  key={tool.slug}
                  direction="up"
                  delay={index * 0.15}
                  viewport={{ amount: 0.2, margin: '0px 0px -40px 0px', once: true }}
                  className="h-full"
                >
                  <IntegrationCard
                    item={{
                      slug: tool.slug,
                      name: tool.name,
                      category: tool.category,
                      shortDescription: tool.shortDescription,
                      installUrl: tool.buttonLink,
                      logoUrl: tool.logoUrl,
                      whatIsHeading: tool.whatHeading,
                      whatIsText: tool.whatText,
                      benefitsHeading: tool.includedHeading,
                      benefits: [],
                      howToConnectHeading: tool.howHeading || '',
                      howToConnectSteps: [],
                      popularTools: tool.popularTools,
                    }}
                    onViewDetails={onSelectIntegration}
                    onBookDemo={onBookDemo || onOpenDemo}
                  />
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Shared FAQ Section */}
      <FAQ onOpenContact={onOpenContact} />

      {/* Shared Final CTA Section */}
      <FinalCTA onStartTrial={onOpenDemo} onBookDemo={onBookDemo || onOpenDemo} />
    </div>
  );
};

