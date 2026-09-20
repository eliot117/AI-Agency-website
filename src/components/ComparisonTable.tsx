import React from 'react';
import { X, Check, Minus } from 'lucide-react';
import { COMPARISON_CATEGORIES } from '../data';

interface ComparisonTableProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPlan: (plan: string) => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({
  isOpen,
  onClose,
  onSelectPlan,
}) => {
  if (!isOpen) return null;

  const renderValue = (val: string | boolean) => {
    if (val === true) {
      return (
        <div className="mx-auto flex h-5 w-5 items-center justify-center rounded-[6px] bg-[#458cff] text-white">
          <Check className="h-3.5 w-3.5 stroke-[2.5]" />
        </div>
      );
    }
    if (val === false) {
      return (
        <div className="mx-auto flex h-5 w-5 items-center justify-center text-neutral-300">
          <Minus className="h-3.5 w-3.5" />
        </div>
      );
    }
    return <span className="font-heading text-[14px] font-medium text-[#0a0a0a]">{val}</span>;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
      <div className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-[20px] border border-[#f2f2f2] bg-white shadow-2xl">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-[#f2f2f2] px-6 py-5">
          <div>
            <h3 className="font-heading text-[22px] font-medium text-[#0a0a0a]">
              Compare Plans & Features
            </h3>
            <p className="text-[13px] text-[#525252] mt-0.5">
              Detailed breakdown of everything included in each tier
            </p>
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-400 hover:bg-neutral-100 hover:text-neutral-900 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-[#f2f2f2]">
                <th className="pb-4 font-heading text-[14.5px] font-medium text-[#525252] w-1/3">
                  Plan Feature
                </th>
                <th className="pb-4 text-center font-heading text-[14.5px] font-medium text-[#0a0a0a] w-1/6">
                  Starter
                </th>
                <th className="pb-4 text-center font-heading text-[14.5px] font-medium text-[#0056ff] w-1/6">
                  Growth (Popular)
                </th>
                <th className="pb-4 text-center font-heading text-[14.5px] font-medium text-[#0a0a0a] w-1/6">
                  Scale
                </th>
                <th className="pb-4 text-center font-heading text-[14.5px] font-medium text-[#0a0a0a] w-1/6">
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_CATEGORIES.map((cat, cIdx) => (
                <React.Fragment key={cIdx}>
                  <tr className="bg-[#fafafa]">
                    <td
                      colSpan={5}
                      className="py-2.5 px-3 font-heading text-[13px] font-medium uppercase tracking-wider text-[#0056ff]"
                    >
                      {cat.category}
                    </td>
                  </tr>
                  {cat.features.map((f: any, fIdx: number) => (
                    <tr
                      key={fIdx}
                      className="border-b border-[#f2f2f2] hover:bg-neutral-50/50"
                    >
                      <td className="py-3 px-3 text-[13.5px] sm:text-[14px] text-[#0a0a0a] font-normal">
                        {f.name}
                      </td>
                      <td className="py-3 text-center">
                        {renderValue(f.starter)}
                      </td>
                      <td className="py-3 text-center bg-[#0056ff]/5 font-medium">
                        {renderValue(f.growth)}
                      </td>
                      <td className="py-3 text-center">
                        {renderValue(f.scale)}
                      </td>
                      <td className="py-3 text-center">
                        {renderValue(f.enterprise)}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal Footer CTAs */}
        <div className="border-t border-[#f2f2f2] bg-[#fafafa] px-6 py-4 flex items-center justify-end gap-3">
          <button
            onClick={() => {
              onClose();
              onSelectPlan('Growth');
            }}
            className="btn-blue text-[14px] py-2.5 px-6"
          >
            <span>Choose Growth Plan</span>
          </button>
        </div>
      </div>
    </div>
  );
};

