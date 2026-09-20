import React from 'react';
import { CalendarCheck, Users, TrendingUp } from 'lucide-react';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import TextAnimation from '@/components/ui/scroll-text';

export const ZigzagFeatures: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 flex flex-col gap-24 md:gap-32">
        {/* Row 1: Left Image, Right Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <ScrollAnimation direction="left" viewport={{ amount: 0.3, margin: '0px 0px -40px 0px', once: true }}>
              <img
                src="https://framerusercontent.com/images/G3kpxPdMqLfQwteSlthgsS42WY.png?width=1732&height=1384"
                alt="Convert to Booked Calls"
                referrerPolicy="no-referrer"
                className="w-full h-auto rounded-[20px] object-cover block"
              />
            </ScrollAnimation>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
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
              classname="mb-4 flex"
            >
              <div className="pill-badge text-[#0056ff]">
                <CalendarCheck className="h-4 w-4" />
                <span>Meeting Automation</span>
              </div>
            </TextAnimation>

            <TextAnimation
              as="h3"
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
              Convert to Booked Calls
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
              classname="saalink-subhead max-w-xl"
            >
              Capture high-quality leads from multiple channels and
              <br className="hidden sm:inline" />{' '}
              keep every opportunity organized in one place.
              <br className="hidden sm:inline" />{' '}
              Never miss a potential customer again.
            </TextAnimation>
          </div>
        </div>

        {/* Row 2: Left Text, Right Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 order-1">
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
              classname="mb-4 flex"
            >
              <div className="pill-badge text-[#0056ff]">
                <Users className="h-4 w-4" />
                <span>Lead Generation</span>
              </div>
            </TextAnimation>

            <TextAnimation
              as="h3"
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
              Capture More Leads
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
              classname="saalink-subhead max-w-xl"
            >
              Automatically schedule meetings and streamline
              <br className="hidden sm:inline" />{' '}
              follow-ups to turn more conversations into qualified
              <br className="hidden sm:inline" />{' '}
              sales opportunities.
            </TextAnimation>
          </div>

          <div className="lg:col-span-6 order-2">
            <ScrollAnimation direction="right" viewport={{ amount: 0.3, margin: '0px 0px -40px 0px', once: true }}>
              <img
                src="https://framerusercontent.com/images/TMCJCUjTDzwuDdUySMVzD3n3PNs.png?width=1732&height=1388"
                alt="Capture More Leads"
                referrerPolicy="no-referrer"
                className="w-full h-auto rounded-[20px] object-cover block"
              />
            </ScrollAnimation>
          </div>
        </div>

        {/* Row 3: Left Image, Right Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <ScrollAnimation direction="left" viewport={{ amount: 0.3, margin: '0px 0px -40px 0px', once: true }}>
              <img
                src="/Gemini_Generated_Image_6j2bms6j2bms6j2b.jpg"
                alt="Track and Improve"
                referrerPolicy="no-referrer"
                className="w-full h-auto rounded-[20px] object-cover block"
              />
            </ScrollAnimation>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
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
              classname="mb-4 flex"
            >
              <div className="pill-badge text-[#0056ff]">
                <TrendingUp className="h-4 w-4" />
                <span>Customer Experience</span>
              </div>
            </TextAnimation>

            <TextAnimation
              as="h3"
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
              Deliver Better Experience
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
              classname="saalink-subhead max-w-lg"
            >
              Provide instant responses and faster follow ups for excellent customer service.
            </TextAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};
