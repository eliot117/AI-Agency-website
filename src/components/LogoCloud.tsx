import React from 'react';
import { LOGO_ITEMS } from './Logos';

interface LogoCloudProps {
  title?: string;
  className?: string;
}

export const LogoCloud: React.FC<LogoCloudProps> = ({
  title = "Trusted by 1,700+ founders & agency owners",
  className = "py-12"
}) => {
  // Repeat logos 4 times for infinite marquee effect
  const marqueeItems = [...LOGO_ITEMS, ...LOGO_ITEMS, ...LOGO_ITEMS, ...LOGO_ITEMS];

  return (
    <section className={`relative overflow-hidden ${className}`}>
      <div className="mx-auto max-w-[1200px] px-4 text-center mb-8">
        <p className="font-heading text-[15px] sm:text-[16px] font-medium text-[#0a0a0a]">
          {title}
        </p>
      </div>

      {/* Marquee Wrapper with soft edge fades */}
      <div className="relative w-full overflow-hidden">
        {/* Left Fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        {/* Right Fade */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="flex w-max animate-marquee items-center gap-14 sm:gap-18">
          {marqueeItems.map((logo, idx) => (
            <div
              key={`${logo.id}-${idx}`}
              className="flex items-center justify-center grayscale opacity-80 transition-all hover:grayscale-0 hover:opacity-100"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-6 sm:h-7 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
