import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import { PRICING_PLANS } from '../data';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import TextAnimation from '@/components/ui/scroll-text';
import { useBilling } from '../context/BillingContext';
import { BillingToggle } from './BillingToggle';

interface PricingProps {
  onOpenCompare: () => void;
  onSelectPlan: (planName: string) => void;
  onNavigate?: (page: 'home' | 'pricing' | 'integrations' | 'integration-detail' | 'contact', hashOrSlug?: string) => void;
  onOpenDemo?: () => void;
}

const TAG_VARIANTS = {
  hidden: { filter: 'blur(8px)', opacity: 0, y: 15 },
  visible: {
    filter: 'blur(0px)',
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

const TITLE_VARIANTS = {
  hidden: { filter: 'blur(10px)', opacity: 0, y: 20 },
  visible: {
    filter: 'blur(0px)',
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const DESC_VARIANTS = {
  hidden: { filter: 'blur(6px)', opacity: 0, y: 20 },
  visible: {
    filter: 'blur(0px)',
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut', delay: 0.1 },
  },
};

// Memoized Header so toggling monthly/yearly does NOT re-trigger header animations
const PricingHeader = React.memo(() => {
  return (
    <>
      <TextAnimation
        variants={TAG_VARIANTS}
        classname="mb-5 flex justify-start"
      >
        <div className="pill-badge text-[#0056ff]">
          <span>Pricing</span>
        </div>
      </TextAnimation>

      <TextAnimation
        as="h2"
        variants={TITLE_VARIANTS}
        classname="saalink-h2-section mb-5 text-left"
      >
        Simple, transparent pricing that
        <br className="hidden sm:inline" />
        {' '}grows with <span style={{ color: 'rgb(0, 86, 255)' }}>your business.</span>
      </TextAnimation>

      <TextAnimation
        as="p"
        variants={DESC_VARIANTS}
        classname="saalink-subhead mb-8 text-left max-w-xl"
      >
        Choose the plan that&apos;s right for you, or hop on a free
        <br className="hidden sm:inline" />{' '}
        consulting call to explore your options.
      </TextAnimation>
    </>
  );
});
PricingHeader.displayName = 'PricingHeader';

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

// Number animation: numbers going up or down fast then slow till stop (smooth and slow)
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
    const duration = 1200; // Slower, relaxed duration (1.2s)

    let frameId: number;
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Quintic ease-out: fast roll at first, then decelerating gracefully until stopping
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

// Price Range animation for cards 2 & 3 with exact same roll and motion transitions
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
    const duration = 1200; // 1.2s smooth duration

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

export const Pricing: React.FC<PricingProps> = ({
  onOpenCompare,
  onSelectPlan,
  onNavigate,
  onOpenDemo,
}) => {
  const { isYearly } = useBilling();

  return (
    <section id="pricing" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-[1460px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <PricingHeader />

          {/* Controls: Left 'Compare plans' button, Right 'Monthly [switch] Yearly' */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-1">
            <button
              onClick={onOpenCompare}
              className="btn-blue text-[15px] py-2.5 px-6 cursor-pointer inline-flex items-center gap-2"
              title="View full feature comparison table"
            >
              <span>Compare plans &amp; features</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            {/* Monthly / Yearly Switch Toggle */}
            <BillingToggle />
          </div>
        </div>

        {/* 4 Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch">
          {PRICING_PLANS.map((plan, index) => {
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

            return (
              <ScrollAnimation
                key={plan.id}
                direction="up"
                delay={index * 0.1}
                viewport={{ amount: 0.2, margin: '0px 0px -40px 0px', once: true }}
                className="h-full"
              >
                <div
                  className="relative flex flex-col justify-between rounded-[22px] pt-6 px-3.5 sm:px-4 xl:px-5 2xl:px-6 pb-10 sm:pb-12 border-2 border-[#0056ff] transition-all duration-300 h-full w-full"
                  style={{
                    background:
                      'linear-gradient(to bottom, transparent 0%, transparent 45%, #ffffff 70%, #ffffff 100%), radial-gradient(circle at 50% 50%, #ffffff 0%, #ffffff 54%, #f0f6ff 74%, #9dc4ff 90%, #3b82f6 100%)',
                  }}
                >
                  <div className="flex flex-col">
                    {/* Plan Title - 1 line, uniform size across all cards */}
                    <div className="h-8 sm:h-9 flex items-center justify-center mb-1 text-center w-full">
                      <h3 className="text-[16px] sm:text-[17px] md:text-[18px] lg:text-[13.5px] xl:text-[15.5px] 2xl:text-[17.5px] font-heading font-semibold text-[#0a0a0a] tracking-tight whitespace-nowrap text-center">
                        {plan.name}
                      </h3>
                    </div>

                    {/* Subtitle - Fixed height container so prices align perfectly */}
                    <div className="min-h-[46px] sm:min-h-[50px] flex items-start justify-center mb-3 text-center">
                      <p className="text-[14px] sm:text-[14.5px] xl:text-[15.5px] text-[#555555] font-normal leading-relaxed text-center">
                        {plan.subtitle}
                      </p>
                    </div>

                    {/* Price Block - Fixed height so buttons align perfectly */}
                    <div className="h-10 flex items-baseline mb-5">
                      {plan.id === 'enterprise' ? (
                        <span className="text-[32px] sm:text-[36px] font-['Inter',sans-serif] font-normal text-[#0a0a0a] tracking-tight leading-none">
                          <AnimatedPriceText text="Custom" isYearly={isYearly} />
                        </span>
                      ) : (
                        <>
                          <span className="text-[32px] sm:text-[36px] font-['Inter',sans-serif] font-normal text-[#0a0a0a] leading-none mr-0.5">$</span>
                          <span className="text-[32px] sm:text-[36px] font-['Inter',sans-serif] font-normal text-[#0a0a0a] tracking-tight leading-none">
                            {plan.id === 'inbound-agents' ? (
                              <AnimatedPriceRange minVal={isYearly ? 40 : 50} maxVal={isYearly ? 400 : 500} />
                            ) : plan.id === 'outbound-agents' ? (
                              <AnimatedPriceRange minVal={isYearly ? 240 : 300} maxVal={isYearly ? 560 : 700} />
                            ) : (
                              <AnimatedPrice value={price} isYearly={isYearly} />
                            )}
                          </span>
                          <span className="text-[13.5px] sm:text-[14px] font-['Inter',sans-serif] font-normal text-[#555555] ml-1.5">
                            / month
                          </span>
                        </>
                      )}
                    </div>

                    {/* Plan CTA Buttons */}
                    <div className="flex flex-col gap-2.5">
                      <button
                        onClick={() => {
                          if (plan.id === 'free-ai-consulting') {
                            if (onNavigate) onNavigate('contact', '#ai-consulting');
                            else onOpenCompare();
                          } else {
                            if (onNavigate) onNavigate('pricing');
                            else onOpenCompare();
                          }
                        }}
                        className="w-full rounded-[12px] bg-[#0056ff] text-white hover:bg-[#0040c0] py-2.5 px-4 text-center font-heading font-medium text-[14.5px] transition-all duration-200 cursor-pointer"
                      >
                        <span>View more</span>
                      </button>
                      <button
                        onClick={() => {
                          if (plan.id === 'free-ai-consulting') {
                            if (onNavigate) onNavigate('contact', '#ai-consulting');
                            else onSelectPlan(plan.name);
                          } else if (plan.id === 'enterprise') {
                            if (onNavigate) onNavigate('contact', '#book-a-demo');
                            else onSelectPlan(plan.name);
                          } else {
                            if (onOpenDemo) onOpenDemo();
                            else onSelectPlan(plan.name);
                          }
                        }}
                        className="w-full rounded-[12px] border border-[#e5e5e5] bg-white text-[#0a0a0a] hover:bg-[#fafafa] py-2.5 px-4 text-center font-heading font-medium text-[14.5px] transition-colors duration-150 cursor-pointer"
                      >
                        <span>{plan.ctaText}</span>
                      </button>
                    </div>

                    {/* Divider Line */}
                    <div className="mt-5 mb-2.5 border-t border-[#e2e8f0]" />

                    {/* Features Header & Bullet Points Group */}
                    <div>
                      <p className="font-heading font-medium text-[14px] sm:text-[14.5px] text-[#0a0a0a] mb-3.5">
                        {plan.featuresHeader}
                      </p>

                      {/* Features List */}
                      <ul className="space-y-2.5">
                        {plan.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2.5 text-[13px] sm:text-[13.5px] text-[#444444]">
                            <div className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#0056ff] text-white">
                              <Check className="h-2.5 w-2.5 stroke-[2.5]" />
                            </div>
                            <span className="leading-snug">{feat}</span>
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
