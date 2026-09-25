import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, ExternalLink } from 'lucide-react';
import { LOGO_ITEMS } from './Logos';
import { FAQ } from './FAQ';
import { FinalCTA } from './FinalCTA';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import TextAnimation from '@/components/ui/scroll-text';
import { useSectionBilling } from '../context/BillingContext';
import { BillingToggle } from './BillingToggle';
import { ServicesSection } from './ServicesSection';

interface PricingPageProps {
  onOpenDemo: () => void;
  onOpenContact: () => void;
  onSelectPlan: (planName: string) => void;
  onBookDemo?: () => void;
  onNavigate?: (page: 'home' | 'pricing' | 'integrations' | 'integration-detail' | 'services' | 'service-detail' | 'contact', hashOrSlug?: string) => void;
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

const HERO_TITLE_VARIANTS = {
  hidden: { filter: 'blur(10px)', opacity: 0, y: 20 },
  visible: {
    filter: 'blur(0px)',
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const HERO_DESC_VARIANTS = {
  hidden: { filter: 'blur(6px)', opacity: 0, y: 20 },
  visible: {
    filter: 'blur(0px)',
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut', delay: 0.1 },
  },
};

// Memoized hero section so toggling monthly/yearly does NOT re-trigger hero animations
const PricingPageHero = React.memo(() => {
  return (
    <section className="relative overflow-hidden pt-16 pb-16 sm:pt-20 sm:pb-20 text-center px-4 sm:px-6 bg-gradient-to-b from-white via-white to-[#f6f6f8]">
      {/* Background subtle radial gradient */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full opacity-60 blur-3xl z-0"
        style={{
          background: 'radial-gradient(50% 50% at 50% 50%, rgba(230, 240, 255, 0.7) 0%, rgba(255, 255, 255, 0) 100%)',
        }}
      />

      <div className="relative z-10 max-w-[850px] mx-auto">
        {/* Pill Badge */}
        <div className="mb-6 flex justify-center">
          <TextAnimation variants={HERO_TAG_VARIANTS}>
            <div className="pill-badge text-[#0056ff]">
              <span>SIMPLE &amp; TRANSPARENT</span>
            </div>
          </TextAnimation>
        </div>

        {/* Main Hero Headline */}
        <TextAnimation
          as="h1"
          variants={HERO_TITLE_VARIANTS}
          classname="mb-4 font-heading text-[40px] font-semibold tracking-tight text-[#0a0a0a] sm:text-[56px] md:text-[64px] leading-[1.08] sm:leading-[1.08] md:leading-[1.08]"
        >
          Pricing scales<br />
          for <span className="text-[#0056ff]">business.</span>
        </TextAnimation>

        {/* Subhead */}
        <TextAnimation
          as="p"
          variants={HERO_DESC_VARIANTS}
          classname="max-w-[650px] mx-auto text-[16px] sm:text-[18px] text-[#525252] leading-relaxed font-normal"
        >
          Plans built for founders, teams, and enterprises.
        </TextAnimation>
      </div>
    </section>
  );
});
PricingPageHero.displayName = 'PricingPageHero';

// Animated text for Card 4 (Custom) or non-numeric text
const AnimatedPriceText: React.FC<{ text: string; isYearly: boolean }> = ({ text, isYearly }) => {
  const [direction, setDirection] = useState<'up' | 'down' | null>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setDirection(isYearly ? 'down' : 'up');
  }, [isYearly]);

  return (
    <motion.span
      key={`${text}-${isYearly}`}
      initial={{
        opacity: 0.7,
        y: direction === 'up' ? 8 : direction === 'down' ? -8 : 0,
        filter: 'blur(1px)',
      }}
      animate={{
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
      }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="inline-block font-['Inter',sans-serif]"
    >
      {text}
    </motion.span>
  );
};

// Number animation
const AnimatedPrice: React.FC<{ value: number; isYearly?: boolean }> = ({ value, isYearly }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const [direction, setDirection] = useState<'up' | 'down' | null>(null);
  const isFirstRender = useRef(true);
  const currentValRef = useRef(value);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const from = currentValRef.current;
    const to = value;
    if (from === to) {
      if (isYearly !== undefined) {
        setDirection(isYearly ? 'down' : 'up');
      }
      return;
    }

    setDirection(to > from ? 'up' : 'down');
    const startTime = performance.now();
    const duration = 1200;

    let frameId: number;
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4.5);
      const current = Math.round(from + (to - from) * ease);
      setDisplayValue(current);
      currentValRef.current = current;

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      } else {
        setDisplayValue(to);
        currentValRef.current = to;
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [value, isYearly]);

  return (
    <motion.span
      key={`${value}-${isYearly}`}
      initial={{
        opacity: 0.7,
        y: direction === 'up' ? 8 : direction === 'down' ? -8 : 0,
        filter: 'blur(1px)',
      }}
      animate={{
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
      }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="inline-block tabular-nums font-['Inter',sans-serif]"
    >
      {displayValue}
    </motion.span>
  );
};

// Price Range animation for cards 2 & 3
const AnimatedPriceRange: React.FC<{ minVal: number; maxVal: number }> = ({ minVal, maxVal }) => {
  const [displayMin, setDisplayMin] = useState(minVal);
  const [displayMax, setDisplayMax] = useState(maxVal);
  const [direction, setDirection] = useState<'up' | 'down' | null>(null);
  const isFirstRender = useRef(true);
  const currentMinRef = useRef(minVal);
  const currentMaxRef = useRef(maxVal);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const fromMin = currentMinRef.current;
    const toMin = minVal;
    const fromMax = currentMaxRef.current;
    const toMax = maxVal;

    if (fromMin === toMin && fromMax === toMax) return;

    setDirection(toMin > fromMin || toMax > fromMax ? 'up' : 'down');
    const startTime = performance.now();
    const duration = 1200;

    let frameId: number;
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4.5);
      const currentMin = Math.round(fromMin + (toMin - fromMin) * ease);
      const currentMax = Math.round(fromMax + (toMax - fromMax) * ease);

      setDisplayMin(currentMin);
      setDisplayMax(currentMax);
      currentMinRef.current = currentMin;
      currentMaxRef.current = currentMax;

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      } else {
        setDisplayMin(toMin);
        setDisplayMax(toMax);
        currentMinRef.current = toMin;
        currentMaxRef.current = toMax;
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [minVal, maxVal]);

  return (
    <motion.span
      key={`${minVal}-${maxVal}`}
      initial={{
        opacity: 0.7,
        y: direction === 'up' ? 8 : direction === 'down' ? -8 : 0,
        filter: 'blur(1px)',
      }}
      animate={{
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
      }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="inline-block tabular-nums font-['Inter',sans-serif]"
    >
      {displayMin}-{displayMax}
    </motion.span>
  );
};

interface PricingCardsSectionProps {
  plans: Array<{
    id: string;
    name: string;
    subtitle: string;
    monthlyPrice: number;
    yearlyPrice: number;
    ctaText: string;
    featuresTitle: string;
    features: string[];
  }>;
  onNavigate?: PricingPageProps['onNavigate'];
  onOpenDemo?: () => void;
  onBookDemo?: () => void;
  onSelectPlan: (planName: string) => void;
}

const PricingCardsSection: React.FC<PricingCardsSectionProps> = ({
  plans,
  onNavigate,
  onOpenDemo,
  onBookDemo,
  onSelectPlan,
}) => {
  const { isYearly, setIsYearly } = useSectionBilling();

  return (
    <section className="pt-8 sm:pt-12 pb-20 md:pb-28">
      <div className="mx-auto max-w-[1460px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-1 mb-8">
          <button
            onClick={() => {
              const el = document.getElementById('autonomous-inbound-ai-agents') || document.getElementById('compare-plans-2');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-blue text-[15px] py-2.5 px-6 cursor-pointer inline-flex items-center gap-2"
            title="View full feature comparison table"
          >
            <span>Compare plans &amp; features</span>
            <ArrowRight className="h-4 w-4" />
          </button>

          <BillingToggle isYearly={isYearly} setIsYearly={setIsYearly} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch pt-2">
          {plans.map((plan, index) => {
            const currentPrice = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

            return (
              <ScrollAnimation
                key={plan.id}
                direction="up"
                delay={index * 0.1}
                viewport={{ amount: 0.2, margin: '0px 0px -40px 0px', once: true }}
                className="h-full"
              >
                <div
                  className="relative flex flex-col justify-between rounded-[20px] pt-6 px-3.5 sm:px-4 xl:px-5 2xl:px-6 pb-10 sm:pb-12 border-2 border-[#0056ff] transition-all duration-300 h-full w-full"
                  style={{
                    background:
                      'linear-gradient(to bottom, transparent 0%, transparent 45%, #ffffff 70%, #ffffff 100%), radial-gradient(circle at 50% 50%, #ffffff 0%, #ffffff 54%, #f0f6ff 74%, #9dc4ff 90%, #3b82f6 100%)',
                  }}
                >
                  <div className="flex flex-col">
                    <div className="h-8 sm:h-9 flex items-center justify-center mb-1 text-center w-full">
                      <h3 className="font-heading font-semibold text-[#0a0a0a] tracking-tight whitespace-nowrap text-center text-[17px] sm:text-[18.5px] md:text-[20px] lg:text-[14.5px] xl:text-[16.5px] 2xl:text-[18.5px]">
                        {plan.name}
                      </h3>
                    </div>

                    <div className="min-h-[46px] sm:min-h-[50px] flex items-start justify-center mb-3 text-center">
                      <p className="text-[14px] sm:text-[14.5px] xl:text-[15.5px] text-[#525252] font-normal leading-relaxed text-center">
                        {plan.subtitle}
                      </p>
                    </div>

                    <div className="h-10 flex items-baseline mb-5">
                      {plan.id === 'enterprise' ? (
                        <span className="font-['Inter',sans-serif] text-[32px] sm:text-[36px] font-normal text-[#0a0a0a] tracking-tight leading-none">
                          <AnimatedPriceText text="Custom" isYearly={isYearly} />
                        </span>
                      ) : (
                        <>
                          <span className="font-['Inter',sans-serif] text-[32px] sm:text-[36px] font-normal text-[#0a0a0a] leading-none mr-0.5">
                            $
                          </span>
                          <span className="font-['Inter',sans-serif] text-[32px] sm:text-[36px] font-normal text-[#0a0a0a] tracking-tight leading-none">
                            {plan.id === 'inbound-agents' ? (
                              <AnimatedPriceRange minVal={isYearly ? 40 : 50} maxVal={isYearly ? 400 : 500} />
                            ) : plan.id === 'outbound-agents' ? (
                              <AnimatedPriceRange minVal={isYearly ? 240 : 300} maxVal={isYearly ? 560 : 700} />
                            ) : (
                              <AnimatedPrice value={currentPrice} isYearly={isYearly} />
                            )}
                          </span>
                          <span className="font-['Inter',sans-serif] text-[13.5px] sm:text-[14px] font-normal text-[#525252] ml-1.5">
                            / month
                          </span>
                        </>
                      )}
                    </div>

                    <div className="flex flex-col gap-2.5">
                      <button
                        onClick={() => {
                          let targetId = 'ai-consulting';
                          if (plan.id === 'inbound-agents') targetId = 'autonomous-inbound-ai-agents';
                          else if (plan.id === 'outbound-agents') targetId = 'autonomous-outbound-ai-agents';
                          else if (plan.id === 'enterprise') targetId = 'full-time';

                          const el = document.getElementById(targetId);
                          if (el) {
                            el.scrollIntoView({ behavior: 'smooth' });
                          } else if (onNavigate) {
                            onNavigate('pricing', `#${targetId}`);
                          }
                        }}
                        className="w-full py-2.5 px-4 rounded-[12px] font-heading text-[14.5px] font-medium bg-[#0056ff] text-white hover:bg-[#0040c0] transition-all duration-200 cursor-pointer text-center"
                      >
                        <span>View More</span>
                      </button>
                      <button
                        onClick={() => {
                          if (onOpenDemo) {
                            onOpenDemo();
                          } else if (onBookDemo) {
                            onBookDemo();
                          } else if (onNavigate) {
                            onNavigate('contact', '#book-a-demo');
                          } else {
                            onSelectPlan(plan.name);
                          }
                        }}
                        className="w-full py-2.5 px-4 rounded-[12px] font-heading text-[14.5px] font-medium border border-[#e5e5e5] bg-white text-[#0a0a0a] hover:bg-[#fafafa] transition-colors duration-150 cursor-pointer text-center"
                      >
                        <span>Book a Demo</span>
                      </button>
                    </div>

                    <div className="mt-5 mb-2.5 border-t border-[#e2e8f0]" />

                    <div>
                      <p className="font-heading font-medium text-[14px] sm:text-[14.5px] text-[#0a0a0a] mb-3.5">
                        {plan.featuresTitle}
                      </p>
                      <ul className="space-y-2.5">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2.5 text-[13px] sm:text-[13.5px] text-[#525252]">
                            <div className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#0056ff] text-white">
                              <Check className="h-2.5 w-2.5 stroke-[2.5]" />
                            </div>
                            <span className="leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const InboundTableSection: React.FC<{
  renderTableValue: (val: string | boolean) => React.ReactNode;
}> = ({ renderTableValue }) => {
  const { isYearly, setIsYearly } = useSectionBilling();

  const inboundColumns = [
    'AI Agent',
    'Monthly Capacity',
    '24/7 Availability',
    'Team Notifications',
    'CRM Integrations',
    'Appointment Booking',
    'Google Reviews',
    'Spam Filtering',
    'Follow Ups',
    'Advanced Version',
    'Monitoring & Updates',
    'Price',
  ];

  const inboundGroups = [
    {
      agent: 'Receptionist',
      rows: [
        {
          tier: 'Standard',
          values: ['100 calls/mo', '✓', 'Basic', 'Limited', '✓', '✗', '✗', '✗', '✗', '✓', isYearly ? '$50 setup + $240/mo' : '$50 setup + $300/mo'],
        },
        {
          tier: 'Expert',
          values: ['500 calls/mo', '✓', 'Advanced', 'Full', '✓', '✗', '✓', '✗', '✗', '✓', isYearly ? '$100 setup + $360/mo' : '$100 setup + $450/mo'],
        },
        {
          tier: 'Advanced',
          values: ['Unlimited', '✓', 'Custom', 'Full', '✓', '✓', '✓', '✗', '✓', '✓', isYearly ? '$100 setup + $400/mo' : '$100 setup + $500/mo'],
        },
      ],
    },
    {
      agent: 'Customer Support(Call)',
      rows: [
        {
          tier: 'Standard',
          values: ['100 calls/mo', '✓', 'Basic', 'Limited', '✓', '✗', '✗', '✗', '✗', '✓', isYearly ? '$50 setup + $80/mo' : '$50 setup + $100/mo'],
        },
        {
          tier: 'Expert',
          values: ['500 calls/mo', '✓', 'Advanced', 'Full', '✓', '✗', '✓', '✗', '✗', '✓', isYearly ? '$100 setup + $200/mo' : '$100 setup + $250/mo'],
        },
        {
          tier: 'Advanced',
          values: ['Unlimited', '✓', 'Custom', 'Full', '✓', '✓', '✓', '✗', '✓', '✓', isYearly ? '$100 setup + $240/mo' : '$100 setup + $300/mo'],
        },
      ],
    },
    {
      agent: 'Customer Support(Widget)',
      rows: [
        {
          tier: 'Standard',
          values: ['100 messages/mo', '✓', 'Basic', 'Limited', '✓', '✗', '✗', '✗', '✗', '✓', isYearly ? '$50 setup + $40/mo' : '$50 setup + $50/mo'],
        },
        {
          tier: 'Expert',
          values: ['500 messages/mo', '✓', 'Advanced', 'Full', '✓', '✓', '✗', '✗', '✗', '✓', isYearly ? '$150 setup + $64/mo' : '$150 setup + $80/mo'],
        },
        {
          tier: 'Advanced',
          values: ['Unlimited', '✓', 'Custom', 'Full', '✓', '✓', '✓', '✗', '✓', '✓', isYearly ? '$150 setup + $80/mo' : '$150 setup + $100/mo'],
        },
      ],
    },
    {
      agent: 'Spam Filter',
      rows: [
        {
          tier: 'Standard',
          values: ['100 calls/mo', '✓', 'Advanced', '✗', '✗', '✗', '✓', '✗', '✗', '✓', isYearly ? '$50 setup + $16/mo' : '$50 setup + $20/mo'],
        },
        {
          tier: 'Advanced',
          values: ['Unlimited', '✓', 'Custom', '✗', '✗', '✗', '✓', '✗', '✓', '✓', isYearly ? '$100 setup + $40/mo' : '$100 setup + $50/mo'],
        },
      ],
    },
  ];

  return (
    <section
      id="autonomous-inbound-ai-agents"
      className="py-16 md:py-24 bg-white scroll-mt-0 sm:scroll-mt-2 border-t border-[#f2f2f2]"
    >
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="mb-6 md:mb-8 text-center flex flex-col items-center">
          <div className="pill-badge text-[#0056ff] mb-3">
            <span>Plan Comparison</span>
          </div>
          <h2 className="saalink-h2-section text-center">
            Autonomous Inbound AI Agents
          </h2>
        </div>

        <div className="flex items-center justify-end -mt-4 md:-mt-6 mb-10 md:mb-12">
          <BillingToggle isYearly={isYearly} setIsYearly={setIsYearly} />
        </div>

        <ScrollAnimation direction="up" viewport={{ amount: 0.15, margin: '0px 0px -40px 0px', once: true }}>
          <div className="w-full pb-4">
            <div className="w-full relative">
              <div className="relative z-10 grid grid-cols-[minmax(0,1.6fr)_minmax(0,1.25fr)_minmax(0,1fr)_minmax(0,1.25fr)_minmax(0,1.25fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.35fr)] items-center pb-2 pt-1 border-b border-[#e5e5e5] w-full">
                {inboundColumns.map((col, cIdx) => (
                  <div key={cIdx} className={cIdx === 0 ? 'pl-2 sm:pl-4 pr-3 sm:pr-4' : cIdx === 11 ? 'text-center pl-0 pr-1' : 'text-center px-1'}>
                    <span className={`font-heading ${cIdx === 0 ? 'text-[16px] sm:text-[17px] md:text-[18px]' : 'text-[11.5px] sm:text-[12.5px] md:text-[13px]'} font-bold text-[#0a0a0a] block leading-snug`}>
                      {col || '\u00A0'}
                    </span>
                  </div>
                ))}
              </div>

              {inboundGroups.map((group, gIdx) => {
                const groupAnchorId =
                  gIdx === 0
                    ? 'receptionist-pricing'
                    : gIdx === 1
                    ? 'customer-support-voice-pricing'
                    : gIdx === 2
                    ? 'customer-support-chat-pricing'
                    : 'spam-filter-pricing';

                return (
                  <div key={gIdx} id={groupAnchorId} className="relative z-10 w-full mb-3 scroll-mt-28">
                    <div className="pt-8 pb-3 pl-2 sm:pl-4">
                      <h4 className="font-heading text-[14px] sm:text-[15px] font-semibold text-[#0056ff]">
                        {group.agent}
                      </h4>
                    </div>

                    {group.rows.map((row, rIdx) => {
                      const isReceptionistExpert = gIdx === 0 && row.tier === 'Expert';
                      const rowId = isReceptionistExpert ? 'autonomous-inbound-ai-agents-2' : undefined;

                      return (
                        <div
                          key={rIdx}
                          id={rowId}
                          className={`grid grid-cols-[minmax(0,1.6fr)_minmax(0,1.25fr)_minmax(0,1fr)_minmax(0,1.25fr)_minmax(0,1.25fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.35fr)] items-center py-3.5 transition-colors hover:bg-neutral-50/50 rounded-lg border-b border-[#f2f2f2]/80 w-full ${rIdx === 0 ? 'mb-1' : ''} ${isReceptionistExpert ? 'scroll-mt-20 sm:scroll-mt-24' : ''}`}
                        >
                          <div className="pl-2 sm:pl-4 pr-3 sm:pr-4">
                            <span className="text-[13px] sm:text-[14px] font-bold text-[#0a0a0a] block">
                              {row.tier}
                            </span>
                          </div>
                          {row.values.map((val, valIdx) => (
                            <div key={valIdx} className={valIdx === 10 ? 'text-center pl-0 pr-1 flex justify-center items-center' : 'text-center px-1 flex justify-center items-center'}>
                              {renderTableValue(val)}
                            </div>
                          ))}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

const OutboundTableSection: React.FC<{
  renderTableValue: (val: string | boolean) => React.ReactNode;
}> = ({ renderTableValue }) => {
  const { isYearly, setIsYearly } = useSectionBilling();

  const outboundColumns = [
    'AI Agent',
    'Monthly Capacity',
    '24/7 Availability',
    'Team Notifications',
    'CRM Integrations',
    'Appointment Booking',
    'Google Reviews',
    'Spam Filtering',
    'Follow Ups',
    'Advanced Version',
    'Monitoring & Updates',
    'Price',
  ];

  const outboundGroups = [
    {
      agent: 'Lead Call',
      rows: [
        {
          tier: 'Standard',
          values: ['50 calls/mo', '✓', 'Basic', 'Limited', '✓', '✗', '✗', '✓', '✗', '✓', isYearly ? '$50 setup + $160/mo' : '$50 setup + $200/mo'],
        },
        {
          tier: 'Expert',
          values: ['150 calls/mo', '✓', 'Advanced', 'Full', '✓', '✗', '✓', '✓', '✗', '✓', isYearly ? '$100 setup + $280/mo' : '$100 setup + $350/mo'],
        },
        {
          tier: 'Advanced',
          values: ['500 calls/mo', '✓', 'Custom', 'Full', '✓', '✓', '✓', '✓', '✓', '✓', isYearly ? '$100 setup + $400/mo' : '$100 setup + $500/mo'],
        },
      ],
    },
    {
      agent: 'Reviews',
      rows: [
        {
          tier: 'Standard',
          values: ['50 calls/mo', '✓', 'Basic', 'Limited', '✗', '✓', '✗', '✓', '✗', '✓', isYearly ? '$50 setup + $80/mo' : '$50 setup + $100/mo'],
        },
        {
          tier: 'Expert',
          values: ['150 calls/mo', '✓', 'Advanced', 'Full', '✗', '✓', '✓', '✓', '✗', '✓', isYearly ? '$100 setup + $200/mo' : '$100 setup + $250/mo'],
        },
        {
          tier: 'Advanced',
          values: ['500 calls/mo', '✓', 'Custom', 'Full', '✓', '✓', '✓', '✓', '✓', '✓', isYearly ? '$100 setup + $240/mo' : '$100 setup + $300/mo'],
        },
      ],
    },
  ];

  return (
    <section
      id="autonomous-outbound-ai-agents"
      className="py-16 md:py-24 bg-white scroll-mt-0 sm:scroll-mt-2 border-t border-[#f2f2f2]"
    >
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="mb-6 md:mb-8 text-center flex flex-col items-center">
          <div className="pill-badge text-[#0056ff] mb-3">
            <span>Plan Comparison</span>
          </div>
          <h2 className="saalink-h2-section text-center">
            Autonomous Outbound AI Agents
          </h2>
        </div>

        <div className="flex items-center justify-end -mt-4 md:-mt-6 mb-10 md:mb-12">
          <BillingToggle isYearly={isYearly} setIsYearly={setIsYearly} />
        </div>

        <ScrollAnimation direction="up" viewport={{ amount: 0.15, margin: '0px 0px -40px 0px', once: true }}>
          <div className="w-full pb-4">
            <div className="w-full relative">
              <div className="relative z-10 grid grid-cols-[minmax(0,1.6fr)_minmax(0,1.25fr)_minmax(0,1fr)_minmax(0,1.25fr)_minmax(0,1.25fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.35fr)] items-center pb-2 pt-1 border-b border-[#e5e5e5] w-full">
                {outboundColumns.map((col, cIdx) => (
                  <div key={cIdx} className={cIdx === 0 ? 'pl-2 sm:pl-4 pr-3 sm:pr-4' : cIdx === 11 ? 'text-center pl-0 pr-1' : 'text-center px-1'}>
                    <span className={`font-heading ${cIdx === 0 ? 'text-[16px] sm:text-[17px] md:text-[18px]' : 'text-[11.5px] sm:text-[12.5px] md:text-[13px]'} font-bold text-[#0a0a0a] block leading-snug`}>
                      {col || '\u00A0'}
                    </span>
                  </div>
                ))}
              </div>

              {outboundGroups.map((group, gIdx) => {
                const groupAnchorId =
                  gIdx === 0 ? 'lead-call-pricing' : 'reviews-pricing';

                return (
                  <div key={gIdx} id={groupAnchorId} className="relative z-10 w-full mb-3 scroll-mt-28">
                    <div className="pt-8 pb-3 pl-2 sm:pl-4">
                      <h4 className="font-heading text-[14px] sm:text-[15px] font-semibold text-[#0056ff]">
                        {group.agent}
                      </h4>
                    </div>

                    {group.rows.map((row, rIdx) => (
                      <div
                        key={rIdx}
                        className={`grid grid-cols-[minmax(0,1.6fr)_minmax(0,1.25fr)_minmax(0,1fr)_minmax(0,1.25fr)_minmax(0,1.25fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.35fr)] items-center py-3.5 transition-colors hover:bg-neutral-50/50 rounded-lg border-b border-[#f2f2f2]/80 w-full ${rIdx === 0 ? 'mb-1' : ''}`}
                      >
                        <div className="pl-2 sm:pl-4 pr-3 sm:pr-4">
                          <span className="text-[13px] sm:text-[14px] font-bold text-[#0a0a0a] block">
                            {row.tier}
                          </span>
                        </div>
                        {row.values.map((val, valIdx) => (
                          <div key={valIdx} className={valIdx === 10 ? 'text-center pl-0 pr-1 flex justify-center items-center' : 'text-center px-1 flex justify-center items-center'}>
                            {renderTableValue(val)}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export const PricingPage: React.FC<PricingPageProps> = ({
  onOpenDemo,
  onOpenContact,
  onSelectPlan,
  onBookDemo,
  onNavigate,
}) => {
  const { isYearly } = useSectionBilling();

  const plans = [
    {
      id: 'free-ai-consulting',
      name: 'AI Consulting',
      subtitle: 'Find out exactly where AI fits your business.',
      monthlyPrice: 0,
      yearlyPrice: 10,
      popular: false,
      ctaText: 'Book a Demo',
      featuresTitle: 'Everything in AI Consulting :',
      features: [
        'Free AI business discussion',
        'Live demo of your options',
        'Personalised recommendations',
        'Industry specific tips',
      ],
      buttonStyle: 'border border-[#0056ff] bg-white text-[#0056ff] hover:bg-[#0056ff]/5',
    },
    {
      id: 'inbound-agents',
      name: 'Autonomous Inbound AI Agents',
      subtitle: 'Never miss a call or message that comes in.',
      monthlyPrice: 79,
      yearlyPrice: 63,
      popular: true,
      ctaText: 'Book a Demo',
      featuresTitle: 'Everything in Inbound AI Agents :',
      features: [
        '24/7 call & message answering',
        'Automatic appointment booking',
        'Google review requests',
        'Spam filtering',
        'CRM integrations',
        'Ongoing monitoring & updates',
      ],
      buttonStyle: 'bg-[#0056ff] text-white hover:bg-[#0045cc] shadow-md shadow-[#0056ff]/20',
    },
    {
      id: 'outbound-agents',
      name: 'Autonomous Outbound AI Agents',
      subtitle: 'Follows up on every enquiry, automatically.',
      monthlyPrice: 149,
      yearlyPrice: 119,
      popular: false,
      ctaText: 'Book a Demo',
      featuresTitle: 'Everything in Outbound AI Agents :',
      features: [
        'Calls new leads within minutes',
        'Automatic appointment booking',
        'Google review requests',
        'Follow ups until booked or closed',
        'CRM integrations',
        'Ongoing monitoring & updates',
      ],
      buttonStyle: 'border border-[#0056ff] bg-white text-[#0056ff] hover:bg-[#0056ff]/5',
    },
    {
      id: 'enterprise',
      name: 'Full Time (Enterprise)',
      subtitle: 'For businesses ready to run entirely on AI.',
      monthlyPrice: 249,
      yearlyPrice: 199,
      popular: false,
      ctaText: 'Book a Demo',
      featuresTitle: 'Everything in Full Time (Enterprise) :',
      features: [
        'Full time AI architect',
        'Specialised agents for your team',
        'Custom tools for your workers',
        'More automations, no limits',
        'Custom AI infrastructure & website',
      ],
      buttonStyle: 'border border-[#0056ff] bg-white text-[#0056ff] hover:bg-[#0056ff]/5',
    },
  ];

  const comparisonCategories = [
    {
      category: 'Lead & Automation',
      rows: [
        {
          name: 'Monthly Leads',
          starter: '500',
          growth: '2500',
          scale: 'Unlimited',
          enterprise: 'Custom / High-Vol',
        },
        {
          name: 'AI Follow-Ups',
          starter: false,
          growth: true,
          scale: true,
          enterprise: true,
        },
        {
          name: 'Email Automation',
          starter: 'Basic',
          growth: 'Advanced',
          scale: 'Custom',
          enterprise: 'Dedicated Engine',
        },
        {
          name: 'Smart Call Booking',
          starter: true,
          growth: true,
          scale: true,
          enterprise: true,
        },
        {
          name: 'CRM Integrations',
          starter: 'Limited',
          growth: 'Full',
          scale: 'Full',
          enterprise: 'Custom & Direct',
        },
      ],
    },
    {
      category: 'Team & Analytics',
      rows: [
        {
          name: 'Team Members',
          starter: '1',
          growth: '5',
          scale: 'Unlimited',
          enterprise: 'Unlimited + SSO',
        },
        {
          name: 'Analytics Dashboard',
          starter: 'Basic',
          growth: 'Advanced',
          scale: 'Advanced',
          enterprise: 'Custom BI Warehouse',
        },
        {
          name: 'Custom Workflows',
          starter: false,
          growth: true,
          scale: true,
          enterprise: true,
        },
        {
          name: 'Priority Support',
          starter: false,
          growth: true,
          scale: true,
          enterprise: true,
        },
      ],
    },
    {
      category: 'Enterprise Features',
      rows: [
        {
          name: 'API Access',
          starter: 'Basic',
          growth: 'Advanced',
          scale: 'Advanced',
          enterprise: 'High-Throughput API',
        },
        {
          name: 'White-Label Support',
          starter: false,
          growth: false,
          scale: 'Beta',
          enterprise: true,
        },
        {
          name: 'Dedicated Account Manager',
          starter: false,
          growth: false,
          scale: true,
          enterprise: true,
        },
        {
          name: 'Custom Reporting',
          starter: false,
          growth: true,
          scale: true,
          enterprise: true,
        },
        {
          name: 'SLA & Enterprise Support',
          starter: false,
          growth: true,
          scale: true,
          enterprise: true,
        },
      ],
    },
  ];

  const renderTableValue = (val: string | boolean) => {
    if (val === true || val === '✓') {
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
    if (val === '✗' || val === 'x' || val === 'X') {
      return (
        <span className="font-heading text-[14px] font-normal text-[#a6a9ae]">
          ✕
        </span>
      );
    }
    return (
      <span className="font-heading text-[13px] sm:text-[14px] font-medium text-[#0a0a0a] whitespace-nowrap">
        {val}
      </span>
    );
  };

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <PricingPageHero />

      {/* 2. PRICING CARDS SECTION */}
      <PricingCardsSection
        plans={plans}
        onNavigate={onNavigate}
        onOpenDemo={onOpenDemo}
        onBookDemo={onBookDemo}
        onSelectPlan={onSelectPlan}
      />

      {/* 3. FEATURE COMPARISON TABLES (4 Sections) */}
      {[1, 2, 3, 4].map((sectionIndex) => {
        if (sectionIndex === 1) {
          const freeAiConsultingRows = [
            'AI Business Discussion',
            'Assessment Results',
            'Personalised Recommendations',
            'Industry Tips',
            'Enquiries About Services',
            'Live Demo',
          ];

          return (
            <section
              key={sectionIndex}
              id="ai-consulting"
              className="py-16 md:py-24 bg-white scroll-mt-0 sm:scroll-mt-2 border-t border-[#f2f2f2]"
            >
              <div className="mx-auto max-w-[1260px] px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Side Heading Group */}
                  <div className="lg:col-span-5 text-left">
                    <div className="w-fit flex flex-col items-center">
                      <div className="pill-badge text-[#0056ff] mb-3">
                        <span>Plan</span>
                      </div>
                      <h2 className="saalink-h2-section text-left">
                        AI Consulting
                      </h2>
                    </div>
                  </div>

                  {/* Table (2 Columns Total) */}
                  <div className="lg:col-span-7">
                    <ScrollAnimation direction="up" viewport={{ amount: 0.15, margin: '0px 0px -40px 0px', once: true }}>
                      <div className="relative">
                        {/* Table Header */}
                        <div className="relative z-10 grid grid-cols-12 items-center pb-5 pt-2 border-b border-[#f2f2f2]">
                          <div className="col-span-8 pl-4">
                            <h3 className="font-heading text-[18px] font-medium text-[#0a0a0a]">
                              Features
                            </h3>
                          </div>
                          <div className="col-span-4 text-center">
                            <span className="font-heading text-[16px] font-medium text-[#0a0a0a]">
                              Included
                            </span>
                          </div>
                        </div>

                        {/* Table Body Rows */}
                        {freeAiConsultingRows.map((rowText, rIdx) => (
                          <div
                            key={rIdx}
                            className="grid grid-cols-12 items-center py-3 transition-colors hover:bg-neutral-50/50 rounded-lg border-b border-[#f2f2f2]/60"
                          >
                            <div className="col-span-8 pl-4 pr-3">
                              <span className="text-[13.5px] sm:text-[14px] font-semibold text-[#0a0a0a]">
                                {rowText}
                              </span>
                            </div>
                            <div className="col-span-4 text-center">
                              {renderTableValue(true)}
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollAnimation>
                  </div>
                </div>
              </div>
            </section>
          );
        }

        if (sectionIndex === 2) {
          return <InboundTableSection key={sectionIndex} renderTableValue={renderTableValue} />;
        }

        if (sectionIndex === 3) {
          return <OutboundTableSection key={sectionIndex} renderTableValue={renderTableValue} />;
        }

        if (sectionIndex === 4) {
          const fullTimeRows = [
            { name: 'Full Time AI Architect', link: 'https://www.coursera.org/articles/ai-architect' },
            { name: 'Full Time AI Solutions Engineer', link: 'https://www.careerexplorer.com/careers/ai-solutions-engineer/' },
            { name: 'Full Systems Automated' },
            { name: 'Specialised AI Agents for Workers' },
            { name: 'Custom AI Tools & AI Apps for Workers' },
            { name: 'Custom AI Developments, Infrastructures & Websites' },
          ];

          return (
            <section
              key={sectionIndex}
              id="full-time"
              className="py-16 md:py-24 bg-white scroll-mt-0 sm:scroll-mt-2 border-t border-[#f2f2f2]"
            >
              <div className="mx-auto max-w-[1260px] px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Side Heading Group */}
                  <div className="lg:col-span-5 text-left">
                    <div className="w-fit flex flex-col items-center">
                      <div className="pill-badge text-[#0056ff] mb-3">
                        <span>Plan</span>
                      </div>
                      <h2 className="saalink-h2-section text-left">
                        Full Time
                      </h2>
                    </div>
                  </div>

                  {/* Table (2 Columns Total) */}
                  <div className="lg:col-span-7">
                    <ScrollAnimation direction="up" viewport={{ amount: 0.15, margin: '0px 0px -40px 0px', once: true }}>
                      <div className="relative">
                        {/* Table Header */}
                        <div className="relative z-10 grid grid-cols-12 items-center pb-5 pt-2 border-b border-[#f2f2f2]">
                          <div className="col-span-8 pl-4">
                            <h3 className="font-heading text-[18px] font-medium text-[#0a0a0a]">
                              Features
                            </h3>
                          </div>
                          <div className="col-span-4 text-center">
                            <span className="font-heading text-[16px] font-medium text-[#0a0a0a]">
                              Included
                            </span>
                          </div>
                        </div>

                        {/* Table Body Rows */}
                        {fullTimeRows.map((rowItem, rIdx) => {
                          const name = typeof rowItem === 'string' ? rowItem : rowItem.name;
                          const link = typeof rowItem === 'string' ? undefined : rowItem.link;
                          return (
                            <div
                              key={rIdx}
                              className="grid grid-cols-12 items-center py-3 transition-colors hover:bg-neutral-50/50 rounded-lg border-b border-[#f2f2f2]/60"
                            >
                              <div className="col-span-8 pl-4 pr-3">
                                {link ? (
                                  <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-[13.5px] sm:text-[14px] font-semibold text-[#0056ff] underline underline-offset-2 hover:text-[#0040c0]"
                                  >
                                    <span>{name}</span>
                                    <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                                  </a>
                                ) : (
                                  <span className="text-[13.5px] sm:text-[14px] font-semibold text-[#0a0a0a]">
                                    {name}
                                  </span>
                                )}
                              </div>
                              <div className="col-span-4 text-center">
                                {renderTableValue(true)}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </ScrollAnimation>
                  </div>
                </div>
              </div>
            </section>
          );
        }

        return (
          <section
            key={sectionIndex}
            id={`compare-plans-${sectionIndex}`}
            className="py-16 md:py-24 bg-white scroll-mt-24 border-t border-[#f2f2f2]"
          >
            <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
              <div className="mb-12 text-center flex flex-col items-center">
                <div className="pill-badge text-[#0056ff] mb-3">
                  <span>Plan Comparison</span>
                </div>
                <h2 className="saalink-h2-section text-center">
                  Compare Plans &amp; Features
                </h2>
              </div>

              <ScrollAnimation direction="up" viewport={{ amount: 0.15, margin: '0px 0px -40px 0px', once: true }}>
                <div className="w-full pb-4">
                  <div className="w-full relative">
                    {/* Table Header (12 Columns Total: Features + 11 Plan Columns) */}
                    <div className="relative z-10 grid grid-cols-[minmax(140px,1.8fr)_repeat(11,minmax(0,1fr))] items-center pb-5 pt-2 border-b border-[#f2f2f2] w-full">
                      <div className="pl-2 sm:pl-4">
                        <h3 className="font-heading text-[15px] sm:text-[17px] font-medium text-[#0a0a0a]">
                          Features
                        </h3>
                      </div>
                      {[
                        { title: 'Starter', key: 'starter' as const },
                        { title: 'Growth', key: 'growth' as const },
                        { title: 'Scale', key: 'scale' as const },
                        { title: 'Enterprise', key: 'enterprise' as const },
                        { title: 'Starter', key: 'starter' as const },
                        { title: 'Growth', key: 'growth' as const },
                        { title: 'Scale', key: 'scale' as const },
                        { title: 'Enterprise', key: 'enterprise' as const },
                        { title: 'Starter', key: 'starter' as const },
                        { title: 'Growth', key: 'growth' as const },
                        { title: 'Scale', key: 'scale' as const },
                      ].map((col, colIdx) => (
                        <div key={colIdx} className="text-center px-0.5">
                          <span className="font-heading text-[11px] sm:text-[13px] md:text-[15px] font-medium text-[#0a0a0a] truncate block">
                            {col.title}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Table Body Categories */}
                    {comparisonCategories.map((cat, cIdx) => (
                      <div key={cIdx} className="relative z-10 w-full">
                        {/* Category Title Row (Blue Row Heading) */}
                        <div className="pt-7 pb-2.5 pl-2 sm:pl-4">
                          <h4 className="font-heading text-[14px] sm:text-[15px] font-semibold text-[#0056ff]">
                            {cat.category}
                          </h4>
                        </div>

                        {/* Category Feature Rows */}
                        {cat.rows.map((row, rIdx) => (
                          <div
                            key={rIdx}
                            className="grid grid-cols-[minmax(140px,1.8fr)_repeat(11,minmax(0,1fr))] items-center py-3 transition-colors hover:bg-neutral-50/50 rounded-lg border-b border-[#f2f2f2]/60 w-full"
                          >
                            <div className="pl-2 sm:pl-4 pr-1">
                              <span className="text-[12px] sm:text-[13px] md:text-[13.5px] text-[#525252] leading-tight block">
                                {row.name}
                              </span>
                            </div>
                            {[
                              row.starter,
                              row.growth,
                              row.scale,
                              row.enterprise,
                              row.starter,
                              row.growth,
                              row.scale,
                              row.enterprise,
                              row.starter,
                              row.growth,
                              row.scale,
                            ].map((val, valIdx) => (
                              <div key={valIdx} className="text-center px-0.5 flex justify-center">
                                {renderTableValue(val)}
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </section>
        );
      })}

      {/* SERVICES (AI AGENTS & PLANS) GRID SECTION */}
      <ServicesSection
        onNavigateIntegrations={() => {
          if (onNavigate) {
            onNavigate('services');
          }
        }}
        onSelectIntegration={(slug) => {
          if (onNavigate) {
            onNavigate('service-detail', slug);
          }
        }}
        onBookDemo={() => {
          if (onNavigate) {
            onNavigate('contact', '#book-a-demo');
          } else if (onBookDemo) {
            onBookDemo();
          }
        }}
      />

      {/* 4. FREQUENTLY ASKED QUESTIONS */}
      <FAQ onOpenContact={onOpenContact} />

      {/* 5. FINAL CTA BANNER */}
      <FinalCTA onNavigate={onNavigate} onStartTrial={onOpenDemo} onBookDemo={onBookDemo || onOpenDemo} />
    </div>
  );
};
