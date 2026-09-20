import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md overflow-hidden rounded-[20px] border border-[#f2f2f2] bg-white p-7 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        {sent ? (
          <div className="py-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#e6f0ff] text-[#0056ff]">
              <CheckCircle className="h-6 w-6" />
            </div>
            <h3 className="font-heading text-[20px] font-medium text-[#0a0a0a] mb-2">
              Message Sent
            </h3>
            <p className="text-[14px] text-[#525252] mb-6">
              Our support engineers are available 24/7 and will reply within 30 minutes.
            </p>
            <button
              onClick={() => {
                setSent(false);
                onClose();
              }}
              className="btn-dark w-full py-3 text-[14px]"
            >
              <span>Close</span>
            </button>
          </div>
        ) : (
          <div>
            <h3 className="font-heading text-[22px] font-medium text-[#0a0a0a] mb-1">
              Contact Support
            </h3>
            <p className="text-[14px] text-[#525252] mb-5">
              Have questions about integrations, security, or custom plans?
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-[13px] font-heading font-medium text-[#0a0a0a] mb-1">
                  Your Email
                </label>
                <input
                  required
                  type="email"
                  placeholder="you@agency.com"
                  className="saalink-input"
                />
              </div>

              <div>
                <label className="block text-[13px] font-heading font-medium text-[#0a0a0a] mb-1">
                  How can we help?
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us what you need help with..."
                  className="saalink-input resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-dark w-full py-3 text-[14px]"
                >
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

