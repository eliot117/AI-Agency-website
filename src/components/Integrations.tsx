import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import TextAnimation from '@/components/ui/scroll-text';

interface IntegrationsProps {
  onNavigateIntegrations?: () => void;
}

export const Integrations: React.FC<IntegrationsProps> = ({ onNavigateIntegrations }) => {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Floating Apps Cloud (Image) */}
          <div className="lg:col-span-7 relative flex items-center justify-center lg:justify-start">
            <ScrollAnimation direction="left" viewport={{ amount: 0.3, margin: '0px 0px -40px 0px', once: true }} className="w-full flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[760px] flex items-center justify-center lg:justify-start p-2">
                <a
                  href="/integrations"
                  onClick={(e) => {
                    if (onNavigateIntegrations) {
                      e.preventDefault();
                      onNavigateIntegrations();
                    }
                  }}
                  className="block w-full cursor-pointer focus:outline-none"
                  aria-label="View all integrations"
                >
                  <img
                    src="https://static.digitecgalaxus.ch/im/Files/7/7/1/4/8/1/7/6/New_Microsoft_Office_Icons_2025_0221.png?impolicy=teaser&resizeWidth=1136&resizeHeight=568"
                    onError={(e) => {
                      e.currentTarget.src = '/office-icons.png';
                    }}
                    alt="Microsoft Office Icons"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto max-h-[620px] object-contain rounded-[20px] transition-transform duration-500 hover:scale-[1.05] transform scale-[1.06] cursor-pointer"
                  />
                </a>
              </div>
            </ScrollAnimation>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-5 lg:pl-6 xl:pl-8">
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
                <span>40+ Powerful Integrations</span>
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
              Works with <span style={{ color: 'rgb(0, 86, 255)' }}>all the tools</span> the business operates with.
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
              Seamlessly connect with the tools your business already uses and automate your workflows.
            </TextAnimation>

            <a
              href="/integrations"
              onClick={(e) => {
                if (onNavigateIntegrations) {
                  e.preventDefault();
                  onNavigateIntegrations();
                }
              }}
              className="group inline-flex items-center gap-2 font-heading text-[15px] font-medium text-[#0056ff] transition-colors hover:text-[#0040c0] cursor-pointer"
            >
              <span>View all integrations</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
