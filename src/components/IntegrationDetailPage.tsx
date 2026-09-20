import React, { useEffect } from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import {
  getIntegrationBySlug,
  INTEGRATIONS_DATA,
  IntegrationItem,
} from '../data/integrationsData';
import { IntegrationCard } from './IntegrationCard';
import { FAQ } from './FAQ';
import { FinalCTA } from './FinalCTA';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import TextAnimation from '@/components/ui/scroll-text';

interface IntegrationDetailPageProps {
  slug: string;
  onBack: () => void;
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

function renderWithLinks(text: string) {
  if (!text || !text.includes('[') || !text.includes('](')) return text;
  const parts: React.ReactNode[] = [];
  const regex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    const linkText = match[1];
    const linkUrl = match[2];
    parts.push(
      <a
        key={match.index}
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#0056ff] underline decoration-[#0056ff]/40 underline-offset-2 hover:decoration-[#0056ff] transition-colors"
      >
        {linkText}
      </a>
    );
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }
  return parts;
}

export const IntegrationDetailPage: React.FC<IntegrationDetailPageProps> = ({
  slug,
  onBack,
  onSelectIntegration,
  onOpenDemo,
  onOpenContact,
  onBookDemo,
}) => {
  const item = getIntegrationBySlug(slug);

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
          <span>Back to integrations</span>
        </button>
      </div>
    );
  }

  // "Popular Tools" is always in order: Google cal, outlook, teams
  const POPULAR_TOOLS_ORDER = ['google-calendar', 'outlook', 'teams'];
  const displayPopular = POPULAR_TOOLS_ORDER
    .map((popSlug) => INTEGRATIONS_DATA.find((i) => i.slug === popSlug))
    .filter((i): i is IntegrationItem => Boolean(i));

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
              <span>Back to integrations</span>
            </button>
          </div>

          {/* Hero Content */}
          <ScrollAnimation direction="up" viewport={{ amount: 0.3, margin: '0px 0px -40px 0px', once: true }}>
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8 lg:gap-10">
                {/* Logo Box */}
                <div className="flex h-32 w-32 sm:h-36 sm:w-36 lg:h-[150px] lg:w-[150px] shrink-0 items-center justify-center overflow-hidden rounded-[24px] sm:rounded-[28px] border border-[#f0f0f4] bg-white p-6 sm:p-7 shadow-sm">
                  {item.logoUrl ? (
                    <img
                      src={item.logoUrl}
                      alt={`${item.name} logo`}
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
                          'notion',
                          'telegram',
                        ];
                        const ext = pngSlugs.includes(item.slug) ? 'png' : 'svg';
                        const fallback = `/logos/${item.slug}.${ext}`;
                        if (img.src !== fallback && !img.src.endsWith(fallback)) {
                          img.src = fallback;
                        }
                      }}
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

                  {/* Short Description */}
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
                    {item.shortDescription}
                  </TextAnimation>
                </div>
              </div>

              {/* View App Button */}
              {item.installUrl && (
                <div className="shrink-0 pt-1">
                  <a
                    href={item.installUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex cursor-pointer items-center justify-center rounded-[12px] bg-[#0056ff] px-6 py-2.5 sm:px-7 sm:py-3 text-[14px] sm:text-[15px] font-medium text-white transition-colors duration-200 hover:bg-[#0047d4]"
                  >
                    View App
                  </a>
                </div>
              )}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Main Documentation & Content Section */}
      <section className="pt-20 sm:pt-28 pb-16 sm:pb-24">
        <div className="mx-auto max-w-[840px] px-4 sm:px-6">
          {/* What Is Section */}
          <ScrollAnimation direction="up" viewport={{ amount: 0.2, margin: '0px 0px -40px 0px', once: true }}>
            <div className="mb-14">
              <h2 className="mb-4 font-heading text-[26px] font-medium tracking-tight text-[#0a0a0a] sm:text-[32px]">
                {item.whatIsHeading}
              </h2>
              <p className="text-[16px] leading-[1.7] text-[#525252]">
                {renderWithLinks(item.whatIsText)}
              </p>
            </div>
          </ScrollAnimation>

          {/* Benefits Section */}
          {item.benefits.length > 0 && (
            <ScrollAnimation direction="up" viewport={{ amount: 0.2, margin: '0px 0px -40px 0px', once: true }}>
              <div className="mb-14">
                <h2 className="mb-6 font-heading text-[26px] font-medium tracking-tight text-[#0a0a0a] sm:text-[32px]">
                  {item.benefitsHeading}
                </h2>
                <ol className="space-y-4 pl-5 list-decimal text-[16px] leading-relaxed text-[#525252]">
                  {item.benefits.map((benefit, idx) => (
                    <li key={idx} className="pl-1">
                      <strong className="font-semibold text-[#0a0a0a]">
                        {benefit.title}
                      </strong>
                      {benefit.desc && (
                        <span> – {renderWithLinks(benefit.desc)}</span>
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            </ScrollAnimation>
          )}

          {/* How to Connect Section */}
          {item.howToConnectSteps.length > 0 && (
            <ScrollAnimation direction="up" viewport={{ amount: 0.2, margin: '0px 0px -40px 0px', once: true }}>
              <div className="mb-14">
                <h2 className="mb-6 font-heading text-[26px] font-medium tracking-tight text-[#0a0a0a] sm:text-[32px]">
                  {item.howToConnectHeading}
                </h2>
                <ul className="space-y-3 pl-5 list-disc text-[16px] leading-relaxed text-[#525252]">
                  {item.howToConnectSteps.map((step, idx) => (
                    <li key={idx} className="pl-1">
                      {renderWithLinks(step)}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>
          )}
        </div>
      </section>

      {/* Popular Tools Section */}
      <section className="bg-[#fafafa] py-16 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <ScrollAnimation direction="up" viewport={{ amount: 0.2, margin: '0px 0px -40px 0px', once: true }}>
            <div className="mb-10 text-center sm:mb-12">
              <h3 className="font-heading text-[28px] font-medium tracking-tight text-[#0a0a0a] sm:text-[36px]">
                Popular Tools
              </h3>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3">
            {displayPopular.map((tool, index) => (
              <ScrollAnimation
                key={tool.slug}
                direction="up"
                delay={index * 0.15}
                viewport={{ amount: 0.2, margin: '0px 0px -40px 0px', once: true }}
                className="h-full"
              >
                <IntegrationCard
                  item={tool}
                  onViewDetails={onSelectIntegration}
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
