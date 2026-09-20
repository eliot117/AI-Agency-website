import React from 'react';
import { PhoneCall, Calendar, Star, Users, Plug, ShieldCheck, Bot } from 'lucide-react';
import { BENTO_CARDS } from '../data';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import TextAnimation from '@/components/ui/scroll-text';

const CARD_ICONS: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  'never-miss-call': PhoneCall,
  'ai-works': PhoneCall,
  'more-booked': Calendar,
  'consistent-feedback': Star,
  'real-time-insights': Star,
  'built-for-businesses': Users,
  'built-for-agencies': Users,
  'seamless-integrations': Plug,
  'secure-reliable': ShieldCheck,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-16 md:mb-20">
          <TextAnimation
            variants={{
              hidden: { filter: 'blur(8px)', opacity: 0, y: 15 },
              visible: {
                filter: 'blur(0px)',
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, ease: 'easeOut' },
              },
            }}
            classname="mb-5 flex justify-center"
          >
            <div className="pill-badge text-[#0056ff]">
              <span>Why Choose Us</span>
            </div>
          </TextAnimation>

          <TextAnimation
            as="h2"
            variants={{
              hidden: { filter: 'blur(10px)', opacity: 0, y: 20 },
              visible: {
                filter: 'blur(0px)',
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: 'easeOut' },
              },
            }}
            classname="saalink-h2-section mb-5 max-w-5xl mx-auto"
          >
            A real game changer.
            <br />
            <span className="inline lg:whitespace-nowrap">
              <span>Designed to fill your calendar </span>
              <span style={{ color: 'rgb(0, 86, 255)' }}>automatically.</span>
            </span>
          </TextAnimation>

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
            classname="saalink-subhead max-w-3xl mx-auto"
          >
            It answers like a person, remembers like a system, and never clocks off.
            <br className="hidden sm:inline" />{' '}
            Lets you focus on your clients, not the phone.
          </TextAnimation>
        </div>

        {/* 6 Bento Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENTO_CARDS.map((card, index) => {
            const Icon = CARD_ICONS[card.id] || Bot;
            return (
              <ScrollAnimation
                key={card.id}
                direction="up"
                delay={(index % 3) * 0.1}
                viewport={{ amount: 0.2, margin: '0px 0px -40px 0px', once: true }}
                className="h-full"
              >
                <div className="border border-[#e2e5e9] rounded-[20px] bg-white overflow-hidden flex flex-col h-full shadow-[0_4px_20px_-2px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.09)] hover:border-[#cbd0d8] transition-all duration-200">
                  {/* Top Image: Full-width edge-to-edge */}
                  <div className="w-full bg-white overflow-hidden flex items-center justify-center">
                    <img
                      src={card.image}
                      alt={card.alt}
                      referrerPolicy="no-referrer"
                      className="w-full h-auto object-cover block"
                    />
                  </div>

                  {/* Bottom Text Content */}
                  <div className="p-6 sm:p-7 flex flex-col justify-start flex-1">
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <Icon className="w-5 h-5 text-[#0a0a0a] shrink-0" strokeWidth={1.8} />
                      <h3 className="font-heading text-[18px] sm:text-[19px] font-semibold text-[#0a0a0a] tracking-tight">
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-[#666666] text-[14.5px] sm:text-[15px] leading-[1.6] font-normal">
                      {card.description}
                    </p>
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
