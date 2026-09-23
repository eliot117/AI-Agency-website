import React from 'react';
import { Mail, Phone, MessageSquare, MapPin, ArrowRight, ExternalLink, Send } from 'lucide-react';
import { SaalinkLogo } from './Logos';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { openRetellChat } from '@/lib/retell';

interface FooterProps {
  onOpenContact: () => void;
  onNavigate?: (page: 'home' | 'pricing' | 'integrations' | 'integration-detail' | 'services' | 'service-detail' | 'contact', hashOrSlug?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact, onNavigate }) => {
  const handleLinkClick = (page: 'home' | 'pricing' | 'integrations' | 'services' | 'contact', hash?: string) => (e: React.MouseEvent) => {
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
    openRetellChat();
    window.dispatchEvent(new CustomEvent('open-chat-widget'));
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
              <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-[#525252] w-[210px] mb-4">
                Turn missed calls into booked appointments, automatically. Built for local businesses ready to put their follow ups on autopilot.
              </p>

              {/* Location Text Box */}
              <div className="mb-4 flex flex-col items-center justify-center gap-1.5 rounded-[12px] bg-[#e6f0ff] p-2 text-[#0a0a0a] border border-[#d4e4fc] w-[210px] h-[80px]">
                <MapPin className="h-5 w-5 text-[#0056ff] shrink-0" />
                <span className="text-[12.5px] font-medium text-[#0a0a0a] text-center leading-snug">
                  Melbourne, VIC, Australia
                </span>
              </div>

              {/* Icon Buttons */}
              <div className="flex items-center gap-2.5 w-[210px]">
                {/* Icon Button 1: Email */}
                <a
                  href="mailto:eliot.rbn18@gmail.com"
                  aria-label="Email eliot.rbn18@gmail.com"
                  title="Email: eliot.rbn18@gmail.com"
                  className="flex-1 h-11 flex items-center justify-center rounded-[10px] border border-[#f0f0f0] bg-white text-[#525252] shadow-xs transition-colors hover:border-[#0056ff] hover:text-[#0056ff]"
                >
                  <Mail className="h-5 w-5" />
                </a>

                {/* Icon Button 2: Call */}
                <a
                  href="tel:0431173090"
                  aria-label="Call 0431 173 090"
                  title="Call: 0431 173 090"
                  className="flex-1 h-11 flex items-center justify-center rounded-[10px] border border-[#f0f0f0] bg-white text-[#525252] shadow-xs transition-colors hover:border-[#0056ff] hover:text-[#0056ff]"
                >
                  <Phone className="h-5 w-5" />
                </a>

                {/* Icon Button 3: Chat */}
                <button
                  onClick={handleChatClick}
                  aria-label="Open Customer Support AI Agent Widget"
                  title="Open Customer Support AI Agent Widget"
                  className="flex-1 h-11 flex items-center justify-center rounded-[10px] border border-[#f0f0f0] bg-white text-[#525252] shadow-xs transition-colors hover:border-[#0056ff] hover:text-[#0056ff] cursor-pointer"
                >
                  <MessageSquare className="h-5 w-5" />
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
                    href="/"
                    onClick={handleLinkClick('home')}
                    className="hover:text-[#0056ff] transition-colors cursor-pointer"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    onClick={handleLinkClick('services')}
                    className="hover:text-[#0056ff] transition-colors cursor-pointer"
                  >
                    Services
                  </a>
                </li>
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

            {/* Section 3 — Navigations */}
            <div className="sm:pl-2 lg:pl-4">
              <h4 className="font-heading text-[16px] font-semibold text-[#0a0a0a] mb-4 sm:mb-5">
                Navigations
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
                    href="#services"
                    onClick={handleLinkClick('home', '#services')}
                    className="hover:text-[#0056ff] transition-colors cursor-pointer"
                  >
                    Services
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
                  onClick={(e) => handleLinkClick('contact', '#book-a-demo')(e)}
                  className="btn-dark w-full py-2.5 px-4 text-[13.5px] sm:text-[14px] cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap shadow-xs hover:shadow-md transition-all"
                >
                  <span>Free AI Consulting</span>
                  <ArrowRight className="h-[18px] w-[18px]" />
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
                  onClick={(e) => handleLinkClick('contact', '#contact-form')(e)}
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

          {/* Text under divider */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-[13px] text-[#525252]">
            <p className="text-left font-medium text-[#525252]">
              Need a professional high-converting website like this for your business?{' '}
              <a
                href="/contact#contact-form"
                onClick={handleLinkClick('contact', '#contact-form')}
                className="text-[#0056ff] underline font-semibold cursor-pointer"
              >
                Reach out to us!
              </a>
            </p>
            <p className="text-left sm:text-right text-[#737373] whitespace-nowrap">
              © 2026 AI Launch. All rights reserved.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </footer>
  );
};

export default Footer;
