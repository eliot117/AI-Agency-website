import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ExternalLink } from 'lucide-react';
import { NAV_LINKS } from '../data';
import { SaalinkLogo } from './Logos';

interface NavbarProps {
  onOpenDemo: () => void;
  onOpenContact: () => void;
  currentPage?: 'home' | 'pricing' | 'integrations' | 'integration-detail' | 'contact';
  onNavigate?: (page: 'home' | 'pricing' | 'integrations' | 'integration-detail' | 'contact', hashOrSlug?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenDemo,
  onOpenContact,
  currentPage = 'home',
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (link: { label: string; href: string }, e: React.MouseEvent) => {
    e.preventDefault();
    if (link.label === 'Pricing') {
      if (onNavigate) {
        onNavigate('pricing');
      } else {
        window.history.pushState(null, '', '/pricing');
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
      setMobileMenuOpen(false);
      return;
    }
    if (link.label === 'Integrations') {
      if (onNavigate) {
        onNavigate('integrations');
      } else {
        window.history.pushState(null, '', '/integrations');
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
      setMobileMenuOpen(false);
      return;
    }
    if (link.label === 'Contact' || link.href === '#contact') {
      if (onNavigate) {
        onNavigate('contact');
      } else {
        onOpenContact();
      }
      setMobileMenuOpen(false);
      return;
    }
    setMobileMenuOpen(false);
  };

  const isLinkActive = (label: string) => {
    if (label === 'Pricing') return currentPage === 'pricing';
    if (label === 'Integrations') return currentPage === 'integrations' || currentPage === 'integration-detail';
    if (label === 'Contact') return currentPage === 'contact';
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full pt-4 px-4 sm:px-6 lg:px-8 pointer-events-none">
      <nav
        className={`pointer-events-auto relative mx-auto flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? 'max-w-[1260px] xl:max-w-[1320px] rounded-[35px] border border-[#f2f2f2] bg-[#fefefe]/95 px-6 py-2.5 shadow-[0px_0.6px_0.6px_-1.25px_rgba(0,0,0,0.18),0px_2.28px_2.28px_-2.5px_rgba(0,0,0,0.16),0px_10px_10px_-3.75px_rgba(0,0,0,0.06)] backdrop-blur-md'
            : 'max-w-[1380px] xl:max-w-[1440px] rounded-[35px] border border-[#f2f2f2] bg-[#fafafa]/90 px-6 py-3 backdrop-blur-sm'
        }`}
      >
        {/* Left: Logo & Nav Page Links */}
        <div className="flex items-center pl-2 sm:pl-3 lg:pl-4 z-10">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) {
                onNavigate('home');
              } else {
                window.history.pushState(null, '', '/');
                window.dispatchEvent(new PopStateEvent('popstate'));
              }
            }}
            className="flex items-center cursor-pointer shrink-0"
          >
            <SaalinkLogo text="AI Launch" />
          </a>

          {/* Desktop Nav Links - Positioned cleanly next to the Logo */}
          <div className="hidden md:flex items-center ml-16 lg:ml-24 gap-6 lg:gap-8">
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(link.label);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(link, e)}
                  className={`font-heading text-[15px] lg:text-[16px] font-medium whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                    active
                      ? 'text-[#0056ff]'
                      : 'text-[#0a0a0a] hover:text-[#0056ff]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>

        {/* Right CTA */}
        <div className="hidden items-center gap-3 lg:gap-3.5 md:flex z-10">
          <a
            href="https://www.jotform.com/form/261383348571058"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dark-outline text-[15px] py-2.5 px-5 cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <span>Get Your Free Assessment</span>
            <ExternalLink className="h-4 w-4" />
          </a>
          <button
            onClick={() => {
              if (onNavigate) {
                onNavigate('contact', '#ai-consulting');
              } else {
                onOpenContact();
              }
            }}
            className="btn-dark text-[15px] py-2.5 px-6 cursor-pointer flex items-center gap-2 whitespace-nowrap"
          >
            <span>Free AI Consulting</span>
            <ArrowRight className="h-[18px] w-[18px]" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-[#0a0a0a] hover:bg-neutral-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto mx-auto mt-2 max-w-[1260px] overflow-hidden rounded-2xl border border-[#f2f2f2] bg-white p-6 shadow-xl backdrop-blur-lg md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(link.label);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(link, e)}
                  className={`font-heading text-[16px] font-medium cursor-pointer ${
                    active
                      ? 'text-[#0056ff]'
                      : 'text-[#0a0a0a] hover:text-[#0056ff]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href="https://www.jotform.com/form/261383348571058"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-dark-outline w-full py-3 text-[15px] flex items-center justify-center gap-2"
              >
                <span>Get Your Free Assessment</span>
                <ExternalLink className="h-4 w-4" />
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onNavigate) {
                    onNavigate('contact', '#ai-consulting');
                  } else {
                    onOpenContact();
                  }
                }}
                className="btn-dark w-full py-3 text-[15px] flex items-center justify-center gap-2"
              >
                <span>Free AI Consulting</span>
                <ArrowRight className="h-[18px] w-[18px]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

