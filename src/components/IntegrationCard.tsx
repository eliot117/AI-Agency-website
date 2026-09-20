import React from 'react';
import { IntegrationItem } from '../data/integrationsData';

interface IntegrationCardProps {
  item: IntegrationItem;
  onViewDetails: (slug: string) => void;
}

export const IntegrationCard: React.FC<IntegrationCardProps> = ({
  item,
  onViewDetails,
}) => {
  return (
    <div
      className="group relative flex flex-col justify-between rounded-[24px] border border-[#f2f2f2] bg-white p-7 sm:p-8 transition-all duration-200 hover:border-neutral-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
    >
      <div>
        {/* Logo container */}
        <div className="mb-5 flex h-14 w-14 items-center justify-center overflow-hidden rounded-[16px] border border-[#f2f2f2] bg-white p-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-transform duration-200 group-hover:scale-105">
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
                ];
                const ext = pngSlugs.includes(item.slug) ? 'png' : 'svg';
                const fallback = `/logos/${item.slug}.${ext}`;
                if (img.src !== fallback && !img.src.endsWith(fallback)) {
                  img.src = fallback;
                }
              }}
            />
          ) : (
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0056ff]/10 text-[14px] font-bold text-[#0056ff]">
              {item.name.slice(0, 2).toUpperCase()}
            </div>
          )}
        </div>

        {/* Name */}
        <h3 className="mb-2.5 font-heading text-[22px] font-semibold tracking-tight text-[#0a0a0a]">
          {item.name}
        </h3>

        {/* Short Description */}
        <p className="mb-6 text-[15px] leading-relaxed text-[#525252]">
          {item.shortDescription}
        </p>
      </div>

      {/* View Details Action Button */}
      <div className="pt-2">
        <button
          onClick={() => onViewDetails(item.slug)}
          className="inline-flex cursor-pointer items-center justify-center rounded-full border border-[#0056ff] px-5 py-2 text-[14px] font-medium text-[#0056ff] transition-all hover:bg-[#0056ff] hover:text-white"
        >
          View Details
        </button>
      </div>
    </div>
  );
};
