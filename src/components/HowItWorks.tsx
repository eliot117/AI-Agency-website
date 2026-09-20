import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../data';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import TextAnimation from '@/components/ui/scroll-text';

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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
              <span>How it works</span>
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
            classname="saalink-h2-section mb-5"
          >
            Three simple steps to{' '}
            <span style={{ color: 'rgb(0, 86, 255)' }}>more business.</span>
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
            classname="saalink-subhead max-w-[620px] mx-auto"
          >
            Get started in minutes and let AI handle the rest so you can focus on growing your agency.
          </TextAnimation>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HOW_IT_WORKS_STEPS.map((item, index) => (
            <ScrollAnimation
              key={item.step}
              direction="up"
              delay={index * 0.15}
              viewport={{ amount: 0.2, margin: '0px 0px -40px 0px', once: true }}
              className="h-full"
            >
              <div
                className="saalink-card group flex flex-col h-full overflow-hidden rounded-[20px]"
              >
                {/* Card Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  {/* Step Badge */}
                  <div className="mb-3">
                    <span className="inline-block rounded-full bg-[#e6f0ff] px-3 py-1 font-heading text-[12px] font-medium text-[#0056ff]">
                      {item.step}
                    </span>
                  </div>

                  {/* Step Title & Description */}
                  <h3 className="saalink-h4-title mb-2">
                    {item.title}
                  </h3>
                  <p className="saalink-caption leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Illustration - fullscreen in card, no inner border or shadow */}
                <div className="w-full bg-[#f9fafb] overflow-hidden flex items-center justify-center mt-auto">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-cover block transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};
