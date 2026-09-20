import React from 'react';

export const SaalinkLogo: React.FC<{
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  text?: string;
}> = ({
  className = "flex items-center gap-2 select-none",
  iconClassName = "w-[26px] h-[26px]",
  textClassName = "text-[22px] font-bold tracking-tight",
  text = "AI Launch",
}) => {
  return (
    <div className={className}>
      <img
        src="/logo.png"
        alt={text}
        className={`${iconClassName} object-contain`}
      />
      <span
        style={{ fontFamily: "var(--font-suse), sans-serif" }}
        className={textClassName}
      >
        {text === "AI Launch" ? (
          <>
            <span className="text-[#458cff]">AI</span>{' '}
            <span className="text-[#0056ff]">Launch</span>
          </>
        ) : (
          text
        )}
      </span>
    </div>
  );
};

export const LOGO_ITEMS = [
  { id: 1, src: '/logos/logo1.svg', alt: 'Logoipsum 1' },
  { id: 2, src: '/logos/logo2.svg', alt: 'Logoipsum 2' },
  { id: 3, src: '/logos/logo3.svg', alt: 'Logoipsum 3' },
  { id: 4, src: '/logos/logo4.svg', alt: 'Logoipsum 4' },
  { id: 5, src: '/logos/logo5.svg', alt: 'Logoipsum 5' },
];

export const INTEGRATION_ICONS = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  src: `/integrations/icon${i + 1}.svg`,
  alt: `Integration ${i + 1}`,
}));
