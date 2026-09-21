'use client';
import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { TimelineAnimation } from '@/components/ui/timeline-animation';

interface HeroProps {
  onOpenDemo: () => void;
  onOpenGetStarted: () => void;
  onNavigate?: (page: 'home' | 'pricing' | 'integrations' | 'integration-detail' | 'contact', hashOrSlug?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenDemo,
  onOpenGetStarted,
}) => {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={heroRef}
      id="hero-section"
      className="min-h-screen w-full bg-[#f7f9fc] text-[#1e293b] relative overflow-hidden flex flex-col justify-center items-center pt-28 pb-20 md:pt-36 md:pb-28"
    >
      {/* Background Photo - Fills Entire Hero Section */}
      <div
        className="absolute inset-0 z-0 w-full h-full bg-cover bg-center opacity-60 pointer-events-none"
        style={{
          backgroundImage:
            "url('/assets/hero-bg.jpg'), url('https://images.unsplash.com/photo-1597200381847-30ec200eeb9a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      />

      {/* Signature SVG Corner Glow Gradients */}
      <svg
        width="380"
        height="500"
        viewBox="0 0 358 483"
        className="absolute top-0 left-0 z-1 pointer-events-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_0_1)">
          <rect
            x="-86.9961"
            y="-33.114"
            width="72"
            height="541"
            rx="36"
            transform="rotate(-30.8182 -86.9961 -33.114)"
            fill="url(#paint0_linear_0_1)"
          />
        </g>
        <g filter="url(#filter1_f_0_1)">
          <rect
            x="-17"
            y="-135.113"
            width="50.0937"
            height="541"
            rx="25.0469"
            transform="rotate(-30.8182 -17 -135.113)"
            fill="url(#paint1_linear_0_1)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_0_1"
            x="-137.641"
            y="-120.646"
            width="440.285"
            height="602.787"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="32"
              result="effect1_foregroundBlur_0_1"
            />
          </filter>
          <filter
            id="filter1_f_0_1"
            x="-71.707"
            y="-215.486"
            width="429.598"
            height="599.69"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="32"
              result="effect1_foregroundBlur_0_1"
            />
          </filter>
          <linearGradient
            id="paint0_linear_0_1"
            x1="-50.9961"
            y1="-33.114"
            x2="-50.9961"
            y2="507.886"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#91bbfb" />
            <stop offset="1" stopColor="#E6F1FF" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_0_1"
            x1="8.04686"
            y1="-135.113"
            x2="8.04686"
            y2="405.887"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8dbafd" />
            <stop offset="1" stopColor="#c1d9f8" />
          </linearGradient>
        </defs>
      </svg>

      {/* Full-bleed Soft Background Gradient - Fills Entire Hero Section */}
      <div
        className="absolute inset-0 z-0 w-full h-full bg-gradient-to-b from-blue-100/50 via-blue-50/30 to-transparent pointer-events-none"
      />

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Pill Badge */}
        <TimelineAnimation
          timelineRef={heroRef}
          animationNum={0}
          className="mb-6 flex justify-center"
        >
          <div className="pill-badge text-[#0056ff]">
            <span className="inline-block h-2 w-2 rounded-full bg-[#0056ff] animate-pulse mr-1" />
            <span>Turn missed calls into booked appointments on autopilot</span>
          </div>
        </TimelineAnimation>

        {/* Main Display Headline */}
        <TimelineAnimation
          as="h1"
          timelineRef={heroRef}
          animationNum={1}
          className="saalink-h1-hero max-w-4xl mx-auto mb-6 text-center"
        >
          Turn missed calls into{' '}
          <span style={{ color: 'rgb(0, 86, 255)' }}>booked appointments</span>
          <br className="hidden sm:inline" /> on autopilot.
        </TimelineAnimation>

        {/* Subhead Description */}
        <TimelineAnimation
          as="p"
          timelineRef={heroRef}
          animationNum={2}
          className="font-heading text-[18px] sm:text-[20px] font-normal leading-[1.4em] max-w-2xl mx-auto mb-10 text-center text-[#525252]"
        >
          An AI system that never sleeps, answers every call and messages instantly, and even books appointments into your calendar while you&apos;re busy, with a client, closed, or asleep.
        </TimelineAnimation>

        {/* Action Buttons with Matching Underglow/Shadow Animation Design */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <TimelineAnimation timelineRef={heroRef} animationNum={3}>
            <button
              onClick={onOpenGetStarted}
              className="btn-dark text-[16px] py-3.5 px-8 font-medium cursor-pointer flex items-center justify-center gap-2 w-full sm:w-[180px]"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </TimelineAnimation>

          <TimelineAnimation timelineRef={heroRef} animationNum={4}>
            <button
              onClick={onOpenDemo}
              className="btn-dark-outline text-[16px] py-3.5 px-8 font-medium cursor-pointer flex items-center justify-center gap-2 w-full sm:w-[180px]"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </TimelineAnimation>
        </div>
      </div>
    </section>
  );
};
