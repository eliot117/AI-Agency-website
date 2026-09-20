import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { TESTIMONIALS, STATS } from '../data';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import TextAnimation from '@/components/ui/scroll-text';

interface TestimonialsProps {
  onOpenAction: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onOpenAction }) => {
  return (
    <section className="py-20 md:py-28 bg-[#fafafa]">
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
              <span>Testimonials</span>
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
            classname="saalink-h2-section mb-4"
          >
            <span style={{ color: 'rgb(0, 86, 255)' }}>Trusted</span> by founders & agencies.
          </TextAnimation>

          <TextAnimation
            variants={{
              hidden: { filter: 'blur(6px)', opacity: 0, y: 15 },
              visible: {
                filter: 'blur(0px)',
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, ease: 'easeOut', delay: 0.1 },
              },
            }}
            classname="flex items-center justify-center gap-2 text-[#525252]"
          >
            <div className="flex text-[#ffb400]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <span className="font-heading text-[14px] font-medium">4.9/5 from 500+ reviews</span>
          </TextAnimation>
        </div>

        {/* 2-Column Grid of Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {TESTIMONIALS.map((t, idx) => (
            <ScrollAnimation
              key={idx}
              direction="up"
              delay={idx * 0.15}
              viewport={{ amount: 0.2, margin: '0px 0px -40px 0px', once: true }}
              className="h-full"
            >
              <div
                className="saalink-card flex flex-col justify-between p-7 h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-[#ffb400]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="rounded-full bg-[#f4f4f4] px-3 py-1 font-heading text-[12px] font-medium text-[#525252]">
                      {t.tag}
                    </span>
                  </div>

                  <p className="font-body text-[16px] leading-[1.6] text-[#262626] mb-6">
                    "{t.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-[#f2f2f2]">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    referrerPolicy="no-referrer"
                    className="h-11 w-11 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-heading text-[15px] font-medium text-[#0a0a0a]">
                      {t.name}
                    </h4>
                    <p className="font-body text-[13px] text-[#737373]">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* 4 Stats Grid in Dark Floating Card */}
        <ScrollAnimation direction="up" viewport={{ amount: 0.2, margin: '0px 0px -40px 0px', once: true }}>
          <div className="rounded-[24px] bg-[#0a0a0a] p-8 md:p-12 text-white shadow-xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
              {STATS.map((stat, idx) => (
                <div key={idx} className={`flex flex-col ${idx !== 0 ? 'pt-6 lg:pt-0 lg:pl-8' : ''}`}>
                  <span className="font-heading text-[36px] sm:text-[44px] font-medium tracking-tight text-white mb-1">
                    {stat.value}
                  </span>
                  <span className="font-body text-[14px] text-white/60">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="font-body text-[15px] text-white/80">
                Ready to see why agencies are switching to Saalink?
              </p>
              <button
                onClick={onOpenAction}
                className="btn-blue text-[14px] py-2.5 px-5 font-medium cursor-pointer shrink-0"
              >
                <span>Get Started Now</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};
