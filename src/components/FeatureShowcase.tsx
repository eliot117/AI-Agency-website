import React from 'react';
import { Zap, Calendar, BriefcaseBusiness } from 'lucide-react';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import TextAnimation from '@/components/ui/scroll-text';

export const FeatureShowcase: React.FC = () => {
  const features: Array<{
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: React.ReactNode;
  }> = [
    {
      icon: Zap,
      title: 'AI-Powered Follow-ups',
      description: 'Instant replies that feel human and get more leads to respond.',
    },
    {
      icon: Calendar,
      title: 'Smart Call Booking',
      description: 'Leads book a time that works best automatically.',
    },
    {
      icon: BriefcaseBusiness,
      title: 'Works Everywhere',
      description: (
        <>
          Answers every enquiry, provides guidance,
          <br />
          and follows up once the job is done.
        </>
      ),
    },
  ];

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
              <span>Features</span>
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
            <span style={{ color: 'rgb(0, 86, 255)' }}>Everything</span> you need to automate, engage, and grow.
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
            Simple, powerful tools to help you capture leads, engage instantly, and book more calls.
          </TextAnimation>
        </div>

        {/* Feature Grid: Left Dashboard, Right 3 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Dashboard Mockup */}
          <div className="lg:col-span-7 flex flex-col">
            <ScrollAnimation
              direction="left"
              viewport={{ amount: 0.3, margin: '0px 0px -40px 0px', once: true }}
              className="h-full flex flex-col"
            >
              <div className="dashboard-frame overflow-hidden bg-white h-full flex flex-col">
                <img
                  src="https://www.salesforce.com/blog/wp-content/uploads/sites/2/2025/08/AI-Agent-Facts-SMB.jpg?w=768&h=419"
                  alt="AI Agent Facts Overview"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover block flex-1"
                />
              </div>
            </ScrollAnimation>
          </div>

          {/* Right 3 Feature Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <ScrollAnimation
                  key={idx}
                  direction="right"
                  delay={idx * 0.1}
                  viewport={{ amount: 0.2, margin: '0px 0px -40px 0px', once: true }}
                >
                  <div
                    className="saalink-card p-6 flex items-start gap-4"
                  >
                    <div className="rounded-xl bg-[#0056ff]/10 p-3 text-[#0056ff] shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="saalink-h4-title mb-1.5">
                        {feature.title}
                      </h3>
                      <p className="saalink-caption">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
