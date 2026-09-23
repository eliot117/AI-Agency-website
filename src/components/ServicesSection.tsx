import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import TextAnimation from '@/components/ui/scroll-text';

export interface ServicesSectionProps {
  onNavigateIntegrations?: () => void;
  onSelectIntegration?: (slug: string) => void;
  onBookDemo?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onNavigateIntegrations,
}) => {
  const handleNavClick = (e: React.MouseEvent) => {
    if (onNavigateIntegrations) {
      e.preventDefault();
      onNavigateIntegrations();
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-white overflow-hidden border-t border-[#f2f2f2]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-5">
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
              classname="mb-5 flex"
            >
              <div className="pill-badge text-[#0056ff]">
                <span>Services</span>
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
              AI Agents & Plans
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
              classname="saalink-subhead mb-8"
            >
              Every AI agent AI Launch offers, plus the two ways to get started. Properly understand what each one does.
            </TextAnimation>

            <a
              href="/services"
              onClick={handleNavClick}
              className="group inline-flex items-center gap-2 font-heading text-[15px] font-medium text-[#0056ff] transition-colors hover:text-[#0040c0] cursor-pointer"
            >
              <span>View Services</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-7 relative flex items-center justify-center lg:justify-end">
            <ScrollAnimation direction="right" viewport={{ amount: 0.3, margin: '0px 0px -40px 0px', once: true }} className="w-full flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[600px] flex items-center justify-center lg:justify-end p-2">
                <a
                  href="/services"
                  onClick={handleNavClick}
                  className="block w-full cursor-pointer focus:outline-none"
                  aria-label="View Services"
                >
                  <img
                    src="https://imageio.forbes.com/specials-images/imageserve/68c0ea2f0bf6ff7b7465abc6/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds"
                    alt="AI Agents & Plans Services"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto max-h-[520px] object-cover rounded-[20px] border border-[#f0f0f4] shadow-md transition-transform duration-500 hover:scale-[1.02] cursor-pointer"
                  />
                </a>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

