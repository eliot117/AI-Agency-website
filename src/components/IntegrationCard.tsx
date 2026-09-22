import React from 'react';
import { IntegrationItem } from '../data/integrationsData';

interface IntegrationCardProps {
  item: IntegrationItem;
  onViewDetails: (slug: string) => void;
  onBookDemo?: () => void;
  variant?: 'integration' | 'service';
}

export const IntegrationCard: React.FC<IntegrationCardProps> = ({
  item,
  onViewDetails,
  onBookDemo,
  variant,
}) => {
  const isService = variant === 'service' || Boolean(onBookDemo);

  if (isService) {
    return (
      <div
        onClick={() => onViewDetails(item.slug)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onViewDetails(item.slug);
          }
        }}
        className="group relative flex flex-col justify-between rounded-[24px] border border-[#f2f2f2] bg-white p-6 sm:p-7 transition-all duration-300 hover:border-[#0056ff] hover:shadow-[0_12px_36px_rgba(0,86,255,0.08)] h-full cursor-pointer"
      >
        <div>
          {/* Service Image container */}
          <div className="mb-5 flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-[18px] border border-[#d6e9f0] bg-[#d6e9f0] shadow-sm transition-all duration-300 group-hover:scale-[1.03] group-hover:border-[#b8dded]">
            {item.logoUrl ? (
              <img
                src={item.logoUrl}
                alt={`${item.name}`}
                className="h-full w-full object-cover block transition-transform duration-300 ease-out group-hover:scale-[1.08]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0056ff]/10 text-[14px] font-bold text-[#0056ff]">
                {item.name.slice(0, 2).toUpperCase()}
              </div>
            )}
          </div>

          {/* Name */}
          <h3 className="mb-2.5 font-heading text-[20px] sm:text-[22px] font-semibold tracking-tight text-[#0a0a0a]">
            {item.name}
          </h3>

          {/* Short Description */}
          <p className="mb-6 text-[14px] sm:text-[15px] leading-relaxed text-[#525252]">
            {item.shortDescription}
          </p>
        </div>

        {/* Action Buttons: View Details & Book a Demo */}
        <div className="mt-auto pt-4 border-t border-[#f7f7f8]">
          <div className="grid grid-cols-2 gap-2 w-full">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onViewDetails(item.slug);
              }}
              className="inline-flex cursor-pointer items-center justify-center rounded-full border border-[#0056ff] px-2.5 py-2 text-[13px] font-medium text-[#0056ff] transition-all hover:bg-[#0056ff] hover:text-white text-center whitespace-nowrap"
            >
              View Details
            </button>
            <a
              href="/contact#book-a-demo"
              onClick={(e) => {
                e.stopPropagation();
                if (onBookDemo) {
                  e.preventDefault();
                  onBookDemo();
                }
              }}
              className="inline-flex cursor-pointer items-center justify-center rounded-full bg-[#0056ff] px-2.5 py-2 text-[13px] font-medium text-white transition-all hover:bg-[#0040c0] shadow-sm text-center whitespace-nowrap"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Standard Integration Card (matching original design & reference image)
  return (
    <div
      onClick={() => onViewDetails(item.slug)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onViewDetails(item.slug);
        }
      }}
      className="group flex flex-col justify-between h-full bg-white transition-all duration-200 cursor-pointer"
    >
      <div>
        {/* Integration Logo Container matching Hero 6 Logos sizing & styling */}
        <div className="mb-6 flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center overflow-hidden rounded-[18px] sm:rounded-[20px] border border-[#f2f2f2] bg-white p-1.5 sm:p-2 shadow-[0px_4px_20px_rgba(0,0,0,0.03)] transition-all duration-200 group-hover:-translate-y-0.5 group-hover:border-neutral-300 group-hover:shadow-[0px_8px_30px_rgba(0,0,0,0.08)]">
          {item.logoUrl ? (
            <img
              src={item.logoUrl}
              alt={`${item.name} logo`}
              className="h-full w-full object-contain"
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const img = e.currentTarget;
                const pngSlugs = [
                  'google-drive',
                  'gmail',
                  'google-docs',
                  'google-sheets',
                  'google-meet',
                  'google-calendar',
                  'google-slides',
                  'zoho-crm',
                  'notion',
                  'telegram',
                  'anthropic',
                  'n8n',
                  'pipedream',
                  'slack',
                  'stripe',
                  'trello',
                  'zapier-online',
                  'zoom',
                ];
                const ext = pngSlugs.includes(item.slug) ? 'png' : 'svg';
                const fallback = `/logos/${item.slug}.${ext}`;
                if (img.src !== fallback && !img.src.endsWith(fallback)) {
                  img.src = fallback;
                }
              }}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center rounded-xl bg-[#0056ff]/10 text-[14px] font-bold text-[#0056ff]">
              {item.name.slice(0, 2).toUpperCase()}
            </div>
          )}
        </div>

        {/* Name */}
        <h3 className="mb-2.5 font-heading text-[20px] sm:text-[22px] font-semibold tracking-tight text-[#0a0a0a]">
          {item.name}
        </h3>

        {/* Short Description */}
        <p className="mb-6 text-[14px] sm:text-[15px] leading-relaxed text-[#525252]">
          {item.shortDescription}
        </p>
      </div>

      {/* Action Button: View Details */}
      <div className="mt-auto">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onViewDetails(item.slug);
          }}
          className="inline-flex cursor-pointer items-center justify-center rounded-full border border-[#0056ff] px-5 py-2 text-[13px] sm:text-[14px] font-medium text-[#0056ff] transition-all hover:bg-[#0056ff] hover:text-white text-center whitespace-nowrap"
        >
          View Details
        </button>
      </div>
    </div>
  );
};
