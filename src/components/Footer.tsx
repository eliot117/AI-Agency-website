import React from 'react';
import { Mail, Phone, MessageSquare, MapPin, ArrowRight, ExternalLink, Send } from 'lucide-react';
import { SaalinkLogo } from './Logos';
import { ScrollAnimation } from '@/components/ui/scroll-animation';

interface FooterProps {
  onOpenContact: () => void;
  onNavigate?: (page: 'home' | 'pricing' | 'integrations' | 'integration-detail' | 'contact', hashOrSlug?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact, onNavigate }) => {
  const handleLinkClick = (page: 'home' | 'pricing' | 'integrations' | 'contact', hash?: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page, hash);
    } else if (page === 'contact') {
      onOpenContact();
    } else {
      const url = page === 'home' ? '/' : `/${page}${hash || ''}`;
      window.history.pushState(null, '', url);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const handleChatClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Dispatch event or navigate to contact chat section
    window.dispatchEvent(new CustomEvent('open-chat-widget'));
    if (onNavigate) {
      onNavigate('contact', '#chat');
    } else {
      onOpenContact();
    }
  };

  return (
    <footer className="bg-white pt-16 pb-12 sm:pt-20 sm:pb-16 border-t border-[#f0f0f0]">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <ScrollAnimation direction="up" viewport={{ amount: 0.15, margin: '0px 0px -40px 0px', once: true }}>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 xl:gap-10">
            
            {/* Section 1 — Business Info */}
            <div>
              <a
                href="/"
                onClick={handleLinkClick('home')}
                className="inline-block mb-4 cursor-pointer"
              >
                <SaalinkLogo />
              </a>
              <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-[#525252] max-w-[290px] mb-4">
                Turn missed calls into booked appointments, automatically. Built for local businesses ready to put their follow ups on autopilot.
              </p>

              {/* Location Text */}
              <div className="mb-4 flex items-center gap-2 rounded-[10px] bg-[#e6f0ff] px-3 h-9 text-[#0a0a0a] border border-[#d4e4fc] w-fit max-w-full">
                <MapPin className="h-3.5 w-3.5 text-[#0056ff] shrink-0" />
                <span className="text-[12px] sm:text-[12.5px] font-medium text-[#0a0a0a] whitespace-nowrap">
                  Melbourne, VIC, Australia
                </span>
              </div>

              {/* Icon Buttons */}
              <div className="flex items-center gap-2.5">
                {/* Icon Button 1: Email */}
                <a
                  href="mailto:eliot.rbn18@gmail.com"
                  aria-label="Email eliot.rbn18@gmail.com"
                  title="Email: eliot.rbn18@gmail.com"
                  className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-[#f0f0f0] bg-white text-[#525252] shadow-xs transition-colors hover:border-[#0056ff] hover:text-[#0056ff]"
                >
                  <Mail className="h-4 w-4" />
                </a>

                {/* Icon Button 2: Call */}
                <a
                  href="tel:0431173090"
                  aria-label="Call 0431 173 090"
                  title="Call: 0431 173 090"
                  className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-[#f0f0f0] bg-white text-[#525252] shadow-xs transition-colors hover:border-[#0056ff] hover:text-[#0056ff]"
                >
                  <Phone className="h-4 w-4" />
                </a>

                {/* Icon Button 3: Chat */}
                <button
                  onClick={handleChatClick}
                  aria-label="Open AI Chat Agent"
                  title="Open AI Chat Agent"
                  className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-[#f0f0f0] bg-white text-[#525252] shadow-xs transition-colors hover:border-[#0056ff] hover:text-[#0056ff] cursor-pointer"
                >
                  <MessageSquare className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Section 2 — Pages */}
            <div className="sm:pl-6 lg:pl-10 xl:pl-12">
              <h4 className="font-heading text-[16px] font-semibold text-[#0a0a0a] mb-4 sm:mb-5">
                Pages
              </h4>
              <ul className="space-y-3.5 text-[14px] text-[#525252]">
                <li>
                  <a
                    href="/pricing"
                    onClick={handleLinkClick('pricing')}
                    className="hover:text-[#0056ff] transition-colors cursor-pointer"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="/integrations"
                    onClick={handleLinkClick('integrations')}
                    className="hover:text-[#0056ff] transition-colors cursor-pointer"
                  >
                    Integrations
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    onClick={handleLinkClick('contact')}
                    className="hover:text-[#0056ff] transition-colors cursor-pointer"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Section 3 — On this page */}
            <div className="sm:pl-2 lg:pl-4">
              <h4 className="font-heading text-[16px] font-semibold text-[#0a0a0a] mb-4 sm:mb-5">
                On this page
              </h4>
              <ul className="space-y-3 text-[14px] text-[#525252]">
                <li>
                  <a
                    href="#why-choose-us"
                    onClick={handleLinkClick('home', '#why-choose-us')}
                    className="hover:text-[#0056ff] transition-colors cursor-pointer"
                  >
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    onClick={handleLinkClick('home', '#features')}
                    className="hover:text-[#0056ff] transition-colors cursor-pointer"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#integrations"
                    onClick={handleLinkClick('home', '#integrations')}
                    className="hover:text-[#0056ff] transition-colors cursor-pointer"
                  >
                    Integrations
                  </a>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    onClick={handleLinkClick('home', '#how-it-works')}
                    className="hover:text-[#0056ff] transition-colors cursor-pointer"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    onClick={handleLinkClick('home', '#pricing')}
                    className="hover:text-[#0056ff] transition-colors cursor-pointer"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#faq-section"
                    onClick={handleLinkClick('home', '#faq-section')}
                    className="hover:text-[#0056ff] transition-colors cursor-pointer"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Section 4 — Buttons and text */}
            <div className="flex flex-col">
              <h4 className="font-heading text-[16px] font-semibold text-[#0a0a0a] mb-4 sm:mb-5">
                Get Started
              </h4>
              <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-[#525252] mb-5">
                Answer every call and book every appointment, automatically.
              </p>
              <div className="flex flex-col gap-3">
                {/* Button 1: Free AI Consulting */}
                <button
                  onClick={(e) => handleLinkClick('contact', '#ai-consulting')(e)}
                  className="btn-dark w-full py-2.5 px-4 text-[13.5px] sm:text-[14px] cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap shadow-xs hover:shadow-md transition-all"
                >
                  <span>Free AI Consulting</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                {/* Button 2: Get Your Free Assessment */}
                <a
                  href="https://www.jotform.com/form/261383348571058"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-dark-outline w-full py-2.5 px-4 text-[13.5px] sm:text-[14px] cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap bg-white hover:bg-gray-50 transition-all text-center"
                >
                  <span>Get Your Free Assessment</span>
                  <ExternalLink className="h-4 w-4" />
                </a>

                {/* Button 3: Send Us a Message */}
                <button
                  onClick={(e) => handleLinkClick('contact', '#send-message')(e)}
                  className="btn-dark-outline w-full py-2.5 px-4 text-[13.5px] sm:text-[14px] cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap bg-white hover:bg-gray-50 transition-all text-center"
                >
                  <span>Send Us a Message</span>
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Divider Line */}
          <div className="mt-14 sm:mt-16 border-t border-[#f0f0f0]" />
        </ScrollAnimation>
      </div>
    </footer>
  );
};

export default Footer;
