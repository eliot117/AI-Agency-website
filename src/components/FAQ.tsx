import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_ITEMS } from '../data';
import { ScrollAnimation } from '@/components/ui/scroll-animation';

interface FAQProps {
  onOpenContact?: () => void;
}

export const FAQ: React.FC<FAQProps> = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-[840px] px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="mb-5 flex justify-center">
            <div className="pill-badge text-[#0056ff]">
              <span>FAQ's</span>
            </div>
          </div>

          <h2 className="saalink-h2-section mb-5">
            Frequently asked <span style={{ color: 'rgb(0, 86, 255)' }}>questions.</span>
          </h2>

          <p className="saalink-subhead max-w-[620px] mx-auto">
            Everything you need to know about saalink and how it helps you book more calls on autopilot.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4 mb-12">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <ScrollAnimation
                key={item.id}
                direction="up"
                delay={index * 0.06}
                viewport={{ amount: 0.2, margin: '0px 0px -40px 0px', once: true }}
              >
                <div
                  className={`overflow-hidden rounded-[16px] sm:rounded-[18px] border transition-all duration-200 bg-white ${
                    isOpen
                      ? 'border-[#e8eaf0] shadow-[0_2px_12px_rgba(0,0,0,0.03)]'
                      : 'border-[#f0f0f4] hover:border-[#e2e4ea]'
                  }`}
                >
                  <button
                    onClick={() => toggle(item.id)}
                    className="flex w-full items-center justify-between px-6 py-5 sm:px-7 sm:py-5.5 text-left cursor-pointer transition-colors"
                  >
                    <span
                      className={`font-heading text-[16px] sm:text-[17px] font-semibold transition-colors duration-200 ${
                        isOpen ? 'text-[#0056ff]' : 'text-[#0a0a0a]'
                      }`}
                    >
                      {item.question}
                    </span>
                    <div
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-200 ml-4 ${
                        isOpen
                          ? 'bg-[#e8f1ff] text-[#0056ff]'
                          : 'bg-[#f4f5f7] text-[#0a0a0a]'
                      }`}
                    >
                      <ChevronDown
                        className={`h-4 w-4 stroke-[2.2] transition-transform duration-250 ${
                          isOpen ? 'rotate-180' : 'rotate-0'
                        }`}
                      />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0 sm:px-7 sm:pb-6 font-body text-[15px] sm:text-[15.5px] leading-relaxed text-[#525252]">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
};
