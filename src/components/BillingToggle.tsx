import React from 'react';
import { useSectionBilling } from '../context/BillingContext';

interface BillingToggleProps {
  className?: string;
  isYearly?: boolean;
  setIsYearly?: (value: boolean | ((prev: boolean) => boolean)) => void;
}

export const BillingToggle: React.FC<BillingToggleProps> = ({
  className = '',
  isYearly: customIsYearly,
  setIsYearly: customSetIsYearly,
}) => {
  const defaultSectionBilling = useSectionBilling();

  const isYearly = customIsYearly !== undefined ? customIsYearly : defaultSectionBilling.isYearly;
  const setIsYearly = customSetIsYearly !== undefined ? customSetIsYearly : defaultSectionBilling.setIsYearly;

  return (
    <div className={`flex items-center gap-3.5 sm:gap-4 select-none ${className}`}>
      <span
        onClick={() => setIsYearly(false)}
        className={`cursor-pointer font-heading text-[17px] sm:text-[18px] transition-colors duration-150 ${
          !isYearly ? 'font-semibold text-[#0a0a0a]' : 'font-medium text-[#525252] hover:text-[#0a0a0a]'
        }`}
      >
        Monthly
      </span>

      {/* Toggle Pill Switch */}
      <button
        type="button"
        role="switch"
        aria-checked={isYearly}
        aria-label="Toggle between monthly and yearly billing"
        onClick={() => setIsYearly((prev) => !prev)}
        className={`relative inline-flex h-7 w-[52px] shrink-0 cursor-pointer rounded-full border p-0.5 transition-colors duration-200 ease-in-out focus:outline-none ${
          isYearly ? 'border-[#0056ff] bg-[#eff5ff]' : 'border-[#9ca3af] bg-white'
        }`}
      >
        <span
          aria-hidden="true"
          className={`pointer-events-none inline-block h-[22px] w-[22px] transform rounded-full transition duration-200 ease-in-out ${
            isYearly ? 'translate-x-[24px] bg-[#0056ff]' : 'translate-x-0 bg-[#6b7280]'
          }`}
        />
      </button>

      <span
        onClick={() => setIsYearly(true)}
        className={`relative cursor-pointer font-heading text-[17px] sm:text-[18px] transition-colors duration-150 ${
          isYearly ? 'font-semibold text-[#0a0a0a]' : 'font-medium text-[#525252] hover:text-[#0a0a0a]'
        }`}
      >
        Yearly
        <span
          className="absolute top-[22px] left-1/2 whitespace-nowrap text-[#0056ff] text-[19px] sm:text-[20px] leading-none pointer-events-none select-none"
          style={{
            fontFamily: "'Caveat', 'Sacramento', 'Reenie Beanie', cursive",
            fontWeight: 600,
            transform: 'translateX(-50%) rotate(-11deg)',
          }}
        >
          20% OFF
        </span>
      </span>
    </div>
  );
};

export default BillingToggle;
