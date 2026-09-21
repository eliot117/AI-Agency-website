import React, { useRef } from 'react';
import { ArrowRight, Check, ExternalLink } from 'lucide-react';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import TextAnimation from '@/components/ui/scroll-text';
import Blocks from '@/components/ui/blocks';

interface FinalCTAProps {
  onStartTrial?: () => void;
  onBookDemo?: () => void;
  onNavigate?: (page: string, hash?: string) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onStartTrial, onBookDemo, onNavigate }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const perks = [
    'Ongoing support included',
    'No credit card required',
    'Cancel anytime',
    'Set up around your business',
  ];

  const activeDivs = {
    // Left side subtle accents
    0: new Set([2, 5, 8]),
    1: new Set([1, 7]),
    2: new Set([3, 6]),
    3: new Set([0, 8]),
    4: new Set([2, 5]),
    5: new Set([1, 7]),
    6: new Set([4]),
    7: new Set([2, 8]),

    // Mid section
    8: new Set([1, 6]),
    9: new Set([3, 7]),
    10: new Set([2, 5, 9]),
    11: new Set([0, 4, 8]),

    // Right side dense clusters and filled squares across all columns
    12: new Set([1, 3, 6, 8, 10]),
    13: new Set([2, 4, 5, 7, 9]),
    14: new Set([0, 3, 6, 8, 11]),
    15: new Set([1, 2, 4, 7, 9, 10]),
    16: new Set([0, 3, 5, 6, 8, 11]),
    17: new Set([2, 4, 7, 9, 10]),
    18: new Set([1, 3, 5, 6, 8, 11]),
    19: new Set([0, 2, 4, 7, 9, 10]),
    20: new Set([1, 3, 6, 8, 10, 11]),
    21: new Set([2, 5, 7, 9]),
    22: new Set([0, 4, 6, 8, 11]),
    23: new Set([1, 3, 5, 7, 10]),
    24: new Set([2, 6, 8, 9, 11]),
    25: new Set([0, 4, 7, 10]),
    26: new Set([1, 5, 8, 10, 11]),
    27: new Set([3, 6, 9]),
    28: new Set([2, 7, 10]),
    29: new Set([1, 4, 8, 11]),
    30: new Set([0, 3, 6, 9]),
    31: new Set([2, 5, 7, 10]),
    32: new Set([1, 4, 8, 11]),
    33: new Set([0, 3, 6, 9, 10]),
    34: new Set([2, 5, 7, 11]),
    35: new Set([1, 4, 8, 10]),
    36: new Set([0, 3, 6, 9]),
    37: new Set([2, 5, 7, 10, 11]),
    38: new Set([1, 4, 8]),
    39: new Set([0, 3, 6, 9, 11]),
    40: new Set([2, 5, 7, 10]),
    41: new Set([1, 4, 8, 11]),
    42: new Set([0, 3, 6, 9]),
    43: new Set([2, 5, 7, 10]),
    44: new Set([1, 4, 8, 11]),
    45: new Set([0, 3, 6, 9]),
    46: new Set([2, 5, 7, 10]),
    47: new Set([1, 4, 8]),
    48: new Set([0, 3, 6, 9, 11]),
    49: new Set([2, 5, 7, 10]),
    50: new Set([1, 4, 8, 11]),
  };

  // Explicitly fill squares near the right edge regardless of viewport width
  const rightEdgeActiveDivs = {
    0: new Set([1, 3, 5, 8, 10, 11]), // Very rightmost column
    1: new Set([0, 2, 4, 7, 9, 12]),  // 1 column from right edge
    2: new Set([1, 3, 6, 8, 10]),     // 2 columns from right edge
    3: new Set([2, 4, 5, 7, 9, 11]),  // 3 columns from right edge
    4: new Set([0, 3, 6, 8, 10]),     // 4 columns from right edge
    5: new Set([1, 4, 7, 9, 12]),     // 5 columns from right edge
    6: new Set([2, 5, 8, 10, 11]),    // 6 columns from right edge
    7: new Set([0, 3, 6, 9]),         // 7 columns from right edge
    8: new Set([1, 4, 7, 10, 11]),    // 8 columns from right edge
    9: new Set([2, 5, 8, 11]),        // 9 columns from right edge
    10: new Set([1, 3, 6, 9, 10]),    // 10 columns from right edge
    11: new Set([0, 4, 7, 9]),        // 11 columns from right edge
    12: new Set([2, 5, 8, 11]),       // 12 columns from right edge
    13: new Set([1, 3, 6, 10]),       // 13 columns from right edge
    14: new Set([0, 4, 7, 9, 12]),    // 14 columns from right edge
  };

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden py-24 md:py-32 bg-[#fafafa] border-t border-b border-[#f2f2f2] w-full before:absolute before:inset-0 before:w-full before:h-full before:bg-gradient-to-t before:from-[#fafafa] before:via-[#fafafa]/80 before:to-[#fafafa]/30 before:z-[1] before:pointer-events-none"
    >
      {/* Background Interactive Blocks Grid adapted to site colors */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-auto">
        <Blocks
          activeDivsClass="bg-[#0056ff]/12 border-[#0056ff]/25 shadow-[inset_0_0_12px_rgba(0,86,255,0.06)]"
          clickedDivsClass="bg-[#0056ff] border-[#0056ff] shadow-[0_0_18px_rgba(0,86,255,0.45)]"
          divClass="border-[#0056ff]/8 border-[0.5px]"
          classname="w-full h-full"
          containerRef={containerRef}
          activeDivs={activeDivs}
          rightEdgeActiveDivs={rightEdgeActiveDivs}
        />
      </div>

      {/* Brand Radial Blue Center Glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[480px] w-[800px] opacity-30 blur-[130px] z-[2]"
        style={{
          background:
            'radial-gradient(circle, rgba(0, 86, 255, 0.45) 0%, rgba(69, 140, 255, 0.15) 55%, transparent 80%)',
        }}
      />

      <div className="relative mx-auto max-w-[900px] px-4 sm:px-6 text-center z-10 pointer-events-none">
        {/* Badge & Heading */}
        <div className="mb-6 flex justify-center pointer-events-auto">
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
          >
            <div className="pill-badge text-[#0056ff] bg-white/90 backdrop-blur-sm shadow-xs">
              <span>Ready to fill your calendar?</span>
            </div>
          </TextAnimation>
        </div>

        <div className="pointer-events-auto">
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
            classname="saalink-h2-section mb-6"
          >
            Start booking more appointments on{' '}
            <span style={{ color: 'rgb(0, 86, 255)' }}>autopilot</span>
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
            classname="saalink-subhead mx-auto max-w-2xl mb-10"
          >
            Reply instantly, follow up automatically, and book more appointments, without lifting a finger.
          </TextAnimation>
        </div>

        {/* Buttons */}
        <ScrollAnimation direction="up" delay={0.15} viewport={{ amount: 0.3, margin: '0px 0px -40px 0px', once: true }}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 pointer-events-auto">
            <button
              onClick={() => {
                if (onNavigate) {
                  onNavigate('contact', '#book-a-demo');
                } else if (onStartTrial) {
                  onStartTrial();
                } else {
                  window.location.hash = '#book-a-demo';
                }
              }}
              className="btn-dark w-full sm:w-auto text-[16px] px-7 py-3 cursor-pointer shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>Free AI Consulting</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="https://www.jotform.com/form/261383348571058"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark-outline w-full sm:w-auto text-[16px] px-7 py-3 bg-white/80 backdrop-blur-xs cursor-pointer hover:bg-white transition-all flex items-center justify-center gap-2 text-center"
            >
              <span>Get Your Free Assessment</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </ScrollAnimation>

        {/* Checkmarks */}
        <ScrollAnimation direction="up" delay={0.25} viewport={{ amount: 0.3, margin: '0px 0px -40px 0px', once: true }}>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#737373] pointer-events-auto">
            {perks.map((perk, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#0056ff]/10 text-[#0056ff]">
                  <Check className="h-3 w-3 stroke-[2.5]" />
                </div>
                <span>{perk}</span>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default FinalCTA;
