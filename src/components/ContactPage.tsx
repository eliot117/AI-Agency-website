import React, { useState, useRef, useEffect } from 'react';
import { Mail, Bot, Phone, MapPin, Check, CheckCircle2, ArrowRight, X, Send, ChevronDown, ChevronLeft, ChevronRight, Calendar, Lock } from 'lucide-react';
import { FAQ } from './FAQ';
import { FinalCTA } from './FinalCTA';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import TextAnimation from '@/components/ui/scroll-text';

interface ContactPageProps {
  onNavigateHome?: () => void;
  onBookDemo?: () => void;
  onOpenPricing?: () => void;
}

const COMPANY_SIZE_OPTIONS = [
  '1–10 Employees',
  '11–50 Employees',
  '51–200 Employees',
  '201–500 Employees',
  '500+ Employees',
];

interface CompanySizeDropdownProps {
  value: string;
  onChange: (val: string) => void;
}

const CompanySizeDropdown: React.FC<CompanySizeDropdownProps> = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`w-full flex items-center justify-between rounded-[12px] border bg-[#fefefe] px-4 py-3 text-[14px] transition-all outline-none cursor-pointer text-left ${
          isOpen
            ? 'border-[#0056ff] ring-1 ring-[#0056ff] shadow-xs'
            : 'border-[#f2f2f2] hover:border-[#d4d4d4] hover:bg-neutral-50/50'
        }`}
      >
        <span className={value ? 'text-[#0a0a0a] font-medium' : 'text-[#9e9e9e]'}>
          {value || 'Select company size'}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-[#0056ff]' : 'text-[#9e9e9e]'
          }`}
        />
      </button>

      {isOpen && (
        <div
          role="listbox"
          className="absolute left-0 right-0 top-[calc(100%+6px)] z-50 overflow-hidden rounded-[14px] border border-[#e5e5e5] bg-white p-1.5 shadow-xl shadow-black/8 animate-in fade-in zoom-in-95 duration-150"
        >
          <div className="flex flex-col gap-0.5">
            {COMPANY_SIZE_OPTIONS.map((option) => {
              const isSelected = value === option;
              return (
                <button
                  key={option}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    onChange(option);
                    setIsOpen(false);
                  }}
                  className={`flex w-full items-center justify-between rounded-[10px] px-3.5 py-2.5 text-left text-[14px] font-medium transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[#0056ff]/10 text-[#0056ff]'
                      : 'text-[#374151] hover:bg-[#f5f5f5] hover:text-[#0a0a0a]'
                  }`}
                >
                  <span>{option}</span>
                  {isSelected && <Check className="h-4 w-4 stroke-[2.5] text-[#0056ff]" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const WEEKDAY_NAMES = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const formatYMD = (year: number, month: number, day: number) => {
  const m = String(month + 1).padStart(2, '0');
  const d = String(day).padStart(2, '0');
  return `${year}-${m}-${d}`;
};

const formatDisplayDate = (dateStr: string) => {
  if (!dateStr) return '';
  const [y, m, d] = dateStr.split('-').map(Number);
  if (!y || !m || !d) return dateStr;
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

interface DemoDatePickerProps {
  value: string;
  onChange: (val: string) => void;
}

const DemoDatePicker: React.FC<DemoDatePickerProps> = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const today = new Date();
  const todayYMD = formatYMD(today.getFullYear(), today.getMonth(), today.getDate());

  const initialYear = value ? parseInt(value.split('-')[0], 10) : today.getFullYear();
  const initialMonth = value ? parseInt(value.split('-')[1], 10) - 1 : today.getMonth();

  const [viewYear, setViewYear] = useState(initialYear);
  const [viewMonth, setViewMonth] = useState(initialMonth);

  useEffect(() => {
    if (value) {
      const [y, m] = value.split('-').map(Number);
      if (y && m) {
        setViewYear(y);
        setViewMonth(m - 1);
      }
    }
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const prevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  };

  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

  const isPrevDisabled =
    viewYear < today.getFullYear() ||
    (viewYear === today.getFullYear() && viewMonth <= today.getMonth());

  const firstDayOfWeek = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  const setDateToday = () => {
    onChange(todayYMD);
    setViewYear(today.getFullYear());
    setViewMonth(today.getMonth());
    setIsOpen(false);
  };

  const setDateTomorrow = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowYMD = formatYMD(
      tomorrow.getFullYear(),
      tomorrow.getMonth(),
      tomorrow.getDate()
    );
    onChange(tomorrowYMD);
    setViewYear(tomorrow.getFullYear());
    setViewMonth(tomorrow.getMonth());
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        className={`w-full flex items-center gap-3 rounded-[12px] border bg-[#fefefe] px-4 py-3 text-[14px] transition-all outline-none cursor-pointer text-left ${
          isOpen
            ? 'border-[#0056ff] ring-1 ring-[#0056ff] shadow-xs'
            : 'border-[#f2f2f2] hover:border-[#d4d4d4] hover:bg-neutral-50/50'
        }`}
      >
        <Calendar
          className={`h-4 w-4 shrink-0 transition-colors ${
            isOpen ? 'text-[#0056ff]' : 'text-[#9e9e9e]'
          }`}
        />
        <span className={value ? 'text-[#0a0a0a] font-medium' : 'text-[#9e9e9e]'}>
          {value ? formatDisplayDate(value) : 'Select Date'}
        </span>
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-label="Calendar date picker"
          className="absolute left-0 top-[calc(100%+6px)] z-50 w-full sm:w-[320px] rounded-[16px] border border-[#e5e5e5] bg-white p-4 shadow-xl shadow-black/8 animate-in fade-in zoom-in-95 duration-150"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-heading text-[15px] font-semibold text-[#0a0a0a]">
              {MONTH_NAMES[viewMonth]} {viewYear}
            </h4>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={prevMonth}
                disabled={isPrevDisabled}
                aria-label="Previous month"
                className="flex h-7 w-7 items-center justify-center rounded-full text-[#525252] hover:bg-neutral-100 hover:text-[#0a0a0a] transition-colors disabled:opacity-25 disabled:cursor-not-allowed cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={nextMonth}
                aria-label="Next month"
                className="flex h-7 w-7 items-center justify-center rounded-full text-[#525252] hover:bg-neutral-100 hover:text-[#0a0a0a] transition-colors cursor-pointer"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Weekday labels */}
          <div className="grid grid-cols-7 gap-1 text-center mb-1.5">
            {WEEKDAY_NAMES.map((d) => (
              <span
                key={d}
                className="text-[11.5px] font-semibold uppercase tracking-wider text-[#9e9e9e]"
              >
                {d}
              </span>
            ))}
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 gap-1 text-center">
            {Array.from({ length: firstDayOfWeek }).map((_, i) => (
              <div key={`empty-${i}`} className="h-8.5 w-8.5" />
            ))}

            {Array.from({ length: daysInMonth }).map((_, i) => {
              const dayNum = i + 1;
              const dateStr = formatYMD(viewYear, viewMonth, dayNum);
              const isSelected = value === dateStr;
              const isToday = todayYMD === dateStr;
              const isPast = dateStr < todayYMD;

              return (
                <button
                  key={dayNum}
                  type="button"
                  disabled={isPast}
                  onClick={() => {
                    onChange(dateStr);
                    setIsOpen(false);
                  }}
                  className={`h-8.5 w-8.5 mx-auto flex items-center justify-center rounded-[10px] text-[13px] font-medium transition-all ${
                    isSelected
                      ? 'bg-[#0056ff] text-white font-semibold shadow-xs'
                      : isPast
                      ? 'text-[#d4d4d4] cursor-not-allowed'
                      : isToday
                      ? 'border border-[#0056ff] text-[#0056ff] font-semibold hover:bg-[#0056ff]/10 cursor-pointer'
                      : 'text-[#0a0a0a] hover:bg-[#0056ff]/10 hover:text-[#0056ff] cursor-pointer'
                  }`}
                >
                  {dayNum}
                </button>
              );
            })}
          </div>

          {/* Quick Action Footer */}
          <div className="mt-3.5 pt-2.5 border-t border-[#f2f2f2] flex items-center justify-between text-[12px]">
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={setDateToday}
                className="rounded-[8px] border border-[#e5e5e5] bg-[#fafafa] px-2.5 py-1 font-medium text-[#525252] hover:border-[#0056ff]/40 hover:text-[#0056ff] transition-colors cursor-pointer"
              >
                Today
              </button>
              <button
                type="button"
                onClick={setDateTomorrow}
                className="rounded-[8px] border border-[#e5e5e5] bg-[#fafafa] px-2.5 py-1 font-medium text-[#525252] hover:border-[#0056ff]/40 hover:text-[#0056ff] transition-colors cursor-pointer"
              >
                Tomorrow
              </button>
            </div>
            {value && (
              <button
                type="button"
                onClick={() => {
                  onChange('');
                  setIsOpen(false);
                }}
                className="text-[#9e9e9e] hover:text-[#ef4444] transition-colors font-medium cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const HERO_TAG_VARIANTS = {
  hidden: { filter: 'blur(8px)', opacity: 0, y: 15 },
  visible: {
    filter: 'blur(0px)',
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export const ContactPage: React.FC<ContactPageProps> = ({
  onBookDemo,
  onOpenPricing,
}) => {
  // Book a Demo State
  const [demoFullName, setDemoFullName] = useState('');
  const [demoEmail, setDemoEmail] = useState('');
  const [demoCompanyName, setDemoCompanyName] = useState('');
  const [demoCompanySize, setDemoCompanySize] = useState('');
  const [demoInterests, setDemoInterests] = useState<string[]>([]);
  const [demoDate, setDemoDate] = useState('');
  const [demoAssessmentCompleted, setDemoAssessmentCompleted] = useState<'yes' | 'no' | ''>('');
  const [showAssessmentModal, setShowAssessmentModal] = useState(false);
  const [assessmentStep, setAssessmentStep] = useState(1);
  const [assessmentAnswers, setAssessmentAnswers] = useState({
    crm: '',
    volume: '',
    goal: '',
  });
  const [assessmentCompleted, setAssessmentCompleted] = useState(false);
  const [demoAgreedToPolicy, setDemoAgreedToPolicy] = useState(false);
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [demoSubmitting, setDemoSubmitting] = useState(false);
  const [isInterestsOpen, setIsInterestsOpen] = useState(false);

  const LEFT_INTEREST_OPTIONS = [
    'Product Demo',
    'Pricing Information',
    'Enterprise Features',
    'Integrations',
    'Partnership Opportunities',
  ];

  const RIGHT_INTEREST_OPTIONS = [
    'Free AI Consulting',
    'Autonomous Inbound AI Agents',
    'Autonomous Outbound AI Agents',
    'Full Time (Enterprise)',
  ];

  const toggleInterest = (option: string) => {
    setDemoInterests((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  // Send us a message State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!demoFullName || !demoEmail || demoAssessmentCompleted === 'no') return;

    setDemoSubmitting(true);
    setTimeout(() => {
      setDemoSubmitting(false);
      setDemoSubmitted(true);
    }, 600);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate real submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: '',
    });
    setSubmitted(false);
  };

  const scrollToFaq = () => {
    const faqEl = document.getElementById('contact-faq-section');
    if (faqEl) {
      faqEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden bg-white text-[#0a0a0a] min-h-screen">
      {/* Hero Header Section */}
      <section className="relative overflow-hidden pt-16 pb-16 sm:pt-20 sm:pb-20 text-center px-4 sm:px-6 bg-gradient-to-b from-white via-white to-[#f6f6f8] border-b border-[#f2f2f2]">
        {/* Background subtle radial gradient */}
        <div
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full opacity-60 blur-3xl z-0"
          style={{
            background: 'radial-gradient(50% 50% at 50% 50%, rgba(230, 240, 255, 0.7) 0%, rgba(255, 255, 255, 0) 100%)',
          }}
        />

        <div className="relative z-10 max-w-[850px] mx-auto">
          {/* Pill Badge */}
          <div className="mb-6 flex justify-center">
            <TextAnimation variants={HERO_TAG_VARIANTS}>
              <div className="pill-badge text-[#0056ff]">
                <span>CONTACT US</span>
              </div>
            </TextAnimation>
          </div>

          {/* Heading */}
          <TextAnimation
            as="h1"
            variants={{
              hidden: { filter: 'blur(10px)', opacity: 0, y: 20 },
              visible: {
                filter: 'blur(0px)',
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: 'easeOut' },
              },
            }}
            classname="mb-4 font-heading text-[40px] font-semibold tracking-tight text-[#0a0a0a] sm:text-[56px] md:text-[64px] leading-[1.08] sm:leading-[1.08] md:leading-[1.08]"
          >
            We&apos;re here to help you grow your business.
          </TextAnimation>

          {/* Subtitle */}
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
            classname="max-w-[650px] mx-auto text-[16px] sm:text-[18px] text-[#525252] leading-relaxed font-normal"
          >
            Have a question or want to see how AI could work for your business? Send a message and we&apos;ll get back to you soon.
          </TextAnimation>
        </div>
      </section>

      {/* 4 Info Cards Row */}
      <section className="pt-8 sm:pt-12 pb-8 sm:pb-12 px-4 sm:px-6 relative z-10 border-b border-[#f2f2f2]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {/* Email Us */}
            <ScrollAnimation direction="up" delay={0} viewport={{ amount: 0.2, margin: '0px 0px -40px 0px', once: true }} className="h-full">
              <a
                href="mailto:eliot.rbn18@gmail.com"
                className="group block rounded-[16px] border border-[#f2f2f2] bg-[#e6f0ff]/10 p-7 flex flex-col items-center text-center shadow-[0_0_8px_-2px_#f2f2f2] hover:border-[#d4e4fc] hover:shadow-md transition-all duration-200 h-full cursor-pointer"
              >
                <div className="w-14 h-14 sm:w-15 sm:h-15 rounded-[14px] bg-[#e6f0ff] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Mail className="w-7 h-7 sm:w-8 sm:h-8 text-[#0a0a0a] group-hover:text-[#0056ff] transition-colors" strokeWidth={1.8} />
                </div>
                <h3 className="font-heading font-semibold text-[17.5px] sm:text-[18px] text-[#0a0a0a] mb-2 min-h-[26px] flex items-center justify-center">
                  Email Us
                </h3>
                <p className="text-[14.5px] sm:text-[15px] text-[#525252] leading-relaxed flex items-center justify-center">
                  eliot.rbn18@gmail.com
                </p>
              </a>
            </ScrollAnimation>

            {/* Live Chat */}
            <ScrollAnimation direction="up" delay={0.1} viewport={{ amount: 0.2, margin: '0px 0px -40px 0px', once: true }} className="h-full">
              <div className="group rounded-[16px] border border-[#f2f2f2] bg-[#e6f0ff]/10 p-7 flex flex-col items-center text-center shadow-[0_0_8px_-2px_#f2f2f2] hover:border-[#d4e4fc] hover:shadow-md transition-all duration-200 h-full">
                <div className="w-14 h-14 sm:w-15 sm:h-15 rounded-[14px] bg-[#e6f0ff] flex items-center justify-center text-[#0a0a0a] mb-5 group-hover:scale-105 transition-transform">
                  <Bot className="w-7 h-7 sm:w-8 sm:h-8 text-[#0a0a0a]" strokeWidth={1.8} />
                </div>
                <h3 className="font-heading font-semibold text-[17.5px] sm:text-[18px] text-[#0a0a0a] mb-2 min-h-[26px] flex items-center justify-center">
                  Live Chat
                </h3>
                <p className="text-[14.5px] sm:text-[15px] text-[#525252] leading-relaxed flex items-center justify-center">
                  Jay is here to help.
                </p>
              </div>
            </ScrollAnimation>

            {/* Call Us */}
            <ScrollAnimation direction="up" delay={0.2} viewport={{ amount: 0.2, margin: '0px 0px -40px 0px', once: true }} className="h-full">
              <a
                href="tel:0431173090"
                className="group block rounded-[16px] border border-[#f2f2f2] bg-[#e6f0ff]/10 p-7 flex flex-col items-center text-center shadow-[0_0_8px_-2px_#f2f2f2] hover:border-[#d4e4fc] hover:shadow-md transition-all duration-200 h-full cursor-pointer"
              >
                <div className="w-14 h-14 sm:w-15 sm:h-15 rounded-[14px] bg-[#e6f0ff] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Phone className="w-7 h-7 sm:w-8 sm:h-8 text-[#0a0a0a] group-hover:text-[#0056ff] transition-colors" strokeWidth={1.8} />
                </div>
                <h3 className="font-heading font-semibold text-[17.5px] sm:text-[18px] text-[#0a0a0a] mb-2 min-h-[26px] flex items-center justify-center">
                  Call Us
                </h3>
                <p className="text-[14.5px] sm:text-[15px] text-[#525252] leading-relaxed flex items-center justify-center">
                  0431 173 090
                </p>
              </a>
            </ScrollAnimation>

            {/* Our Location */}
            <ScrollAnimation direction="up" delay={0.3} viewport={{ amount: 0.2, margin: '0px 0px -40px 0px', once: true }} className="h-full">
              <div className="group rounded-[16px] border border-[#f2f2f2] bg-[#e6f0ff]/10 p-7 flex flex-col items-center text-center shadow-[0_0_8px_-2px_#f2f2f2] hover:border-[#d4e4fc] hover:shadow-md transition-all duration-200 h-full">
                <div className="w-14 h-14 sm:w-15 sm:h-15 rounded-[14px] bg-[#e6f0ff] flex items-center justify-center text-[#0a0a0a] mb-5 group-hover:scale-105 transition-transform">
                  <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-[#0a0a0a]" strokeWidth={1.8} />
                </div>
                <h3 className="font-heading font-semibold text-[17.5px] sm:text-[18px] text-[#0a0a0a] mb-2 min-h-[26px] flex items-center justify-center">
                  Our Location
                </h3>
                <p className="text-[14.5px] sm:text-[15px] text-[#525252] leading-relaxed flex items-center justify-center">
                  Melbourne, VIC, Australia
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Main Book a Demo Split Section */}
      <section id="book-a-demo" className="relative overflow-hidden pt-10 sm:pt-14 lg:pt-20 pb-24 sm:pb-32 lg:pb-40">
        <div id="ai-consulting" className="scroll-mt-28" />
        {/* Subtle Ambient Background Gradient */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[650px] -z-10"
          style={{
            background:
              'radial-gradient(65% 55% at 50% 0%, rgba(0, 86, 255, 0.035) 0%, rgba(255, 255, 255, 0) 100%)',
          }}
        />

        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-stretch lg:justify-center gap-6 lg:gap-10 xl:gap-12 relative">
            
            {/* Left Column: Top-Left Heading Group (Above & Hugging Top-Left of Form) */}
            <div className="w-full lg:w-[340px] xl:w-[370px] shrink-0 flex flex-col justify-start lg:-mt-10 xl:-mt-12">
              <ScrollAnimation direction="left" viewport={{ amount: 0.2, margin: '0px 0px -40px 0px', once: true }}>
                <div className="space-y-3.5 sm:space-y-4 text-left">
                  <h2 className="font-heading text-[40px] sm:text-[46px] lg:text-[50px] xl:text-[54px] font-medium leading-[1.08] tracking-[-1.4px] text-[#0a0a0a]">
                    AI Consulting
                  </h2>
                  <p className="font-heading text-[15px] sm:text-[16px] xl:text-[17px] leading-[1.45] text-[#525252]">
                    Book a consultation to discover exactly how AI could work for your business.
                  </p>
                </div>
              </ScrollAnimation>
            </div>

            {/* Center Column: Form Card */}
            <div className="w-full max-w-[590px] xl:max-w-[620px] shrink-0 mx-auto lg:mx-0 lg:my-6 xl:my-8">
              <ScrollAnimation direction="up" viewport={{ amount: 0.2, margin: '0px 0px -40px 0px', once: true }}>
                <div
                  className="w-full rounded-[16px] border border-[#f2f2f2] bg-[#fefefe] p-6 sm:p-8 md:p-9"
                  style={{
                    boxShadow: '0px 0px 8px -2px #f2f2f2',
                  }}
                >
                  {demoSubmitted ? (
                    <div className="py-12 text-center">
                      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#0056ff]/10 text-[#0056ff]">
                        <Check className="h-7 w-7" />
                      </div>
                      <h3 className="mb-2 font-heading text-[24px] font-semibold text-[#0a0a0a]">
                        Demo Request Received!
                      </h3>
                      <p className="mx-auto mb-8 max-w-sm text-[15px] text-[#525252]">
                        Thank you for scheduling a demo. Our team will contact you shortly to confirm your session.
                      </p>
                      <button
                        type="button"
                        onClick={() => setDemoSubmitted(false)}
                        className="inline-flex cursor-pointer items-center justify-center rounded-full border border-[#f2f2f2] bg-white px-6 py-2.5 text-[14px] font-medium text-[#0a0a0a] transition-colors hover:bg-neutral-50"
                      >
                        Book Another Demo
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleDemoSubmit} className="flex flex-col gap-5">
                      {/* Full Name */}
                      <div className="flex flex-col gap-1.5">
                        <label className="font-heading text-[16px] font-medium text-[#0a0a0a]">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={demoFullName}
                          onChange={(e) => setDemoFullName(e.target.value)}
                          placeholder="John Doe"
                          className="w-full rounded-[12px] border border-[#f2f2f2] bg-[#fefefe] px-4 py-3 text-[14px] text-[#0a0a0a] placeholder-[#9e9e9e] transition-all outline-none focus:border-[#0056ff] focus:ring-1 focus:ring-[#0056ff]"
                        />
                      </div>

                      {/* Work Email */}
                      <div className="flex flex-col gap-1.5">
                        <label className="font-heading text-[16px] font-medium text-[#0a0a0a]">
                          Work Email
                        </label>
                        <input
                          type="email"
                          required
                          value={demoEmail}
                          onChange={(e) => setDemoEmail(e.target.value)}
                          placeholder="john@company.com"
                          className="w-full rounded-[12px] border border-[#f2f2f2] bg-[#fefefe] px-4 py-3 text-[14px] text-[#0a0a0a] placeholder-[#9e9e9e] transition-all outline-none focus:border-[#0056ff] focus:ring-1 focus:ring-[#0056ff]"
                        />
                      </div>

                      {/* Company Name (Optional) */}
                      <div className="flex flex-col gap-1.5">
                        <label className="font-heading text-[16px] font-medium text-[#0a0a0a]">
                          Company Name (Optional)
                        </label>
                        <input
                          type="text"
                          value={demoCompanyName}
                          onChange={(e) => setDemoCompanyName(e.target.value)}
                          placeholder="Your company"
                          className="w-full rounded-[12px] border border-[#f2f2f2] bg-[#fefefe] px-4 py-3 text-[14px] text-[#0a0a0a] placeholder-[#9e9e9e] transition-all outline-none focus:border-[#0056ff] focus:ring-1 focus:ring-[#0056ff]"
                        />
                      </div>

                      {/* Company Size */}
                      <div className="flex flex-col gap-1.5">
                        <label className="font-heading text-[16px] font-medium text-[#0a0a0a]">
                          Company Size
                        </label>
                        <CompanySizeDropdown
                          value={demoCompanySize}
                          onChange={setDemoCompanySize}
                        />
                      </div>

                      {/* What are you interested in? (Multiple choice) */}
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <label className="font-heading text-[16px] font-medium text-[#0a0a0a]">
                            What are you interested in?
                          </label>
                          <span className="text-[12.5px] text-[#525252]">
                            {demoInterests.length > 0
                              ? `${demoInterests.length} selected`
                              : 'Select all that apply'}
                          </span>
                        </div>

                        {/* Interactive Multiple Choice Options Grid (No scrolling needed) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 rounded-[12px] border border-[#f2f2f2] bg-[#fafafa]/50 p-2.5">
                          {/* Left Column */}
                          <div className="flex flex-col gap-2">
                            {LEFT_INTEREST_OPTIONS.map((option) => {
                              const isSelected = demoInterests.includes(option);
                              return (
                                <button
                                  key={option}
                                  type="button"
                                  onClick={() => toggleInterest(option)}
                                  className={`group flex items-center gap-2.5 rounded-[10px] border px-3 py-2.5 text-left text-[13px] font-medium transition-all duration-150 cursor-pointer ${
                                    isSelected
                                      ? 'border-[#0056ff] bg-[#0056ff]/10 text-[#0056ff] shadow-xs'
                                      : 'border-[#f2f2f2] bg-white text-[#525252] hover:border-[#d4d4d4] hover:text-[#0a0a0a]'
                                  }`}
                                >
                                  <span
                                    className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] border transition-all ${
                                      isSelected
                                        ? 'border-[#0056ff] bg-[#0056ff] text-white'
                                        : 'border-[#d4d4d4] group-hover:border-[#9e9e9e] bg-white'
                                    }`}
                                  >
                                    {isSelected && <Check className="h-3 w-3 stroke-[3.5]" />}
                                  </span>
                                  <span className="leading-tight select-none">{option}</span>
                                </button>
                              );
                            })}
                          </div>

                          {/* Right Column */}
                          <div className="flex flex-col gap-2">
                            {RIGHT_INTEREST_OPTIONS.map((option) => {
                              const isSelected = demoInterests.includes(option);
                              return (
                                <button
                                  key={option}
                                  type="button"
                                  onClick={() => toggleInterest(option)}
                                  className={`group flex items-center gap-2.5 rounded-[10px] border px-3 py-2.5 text-left text-[13px] font-medium transition-all duration-150 cursor-pointer ${
                                    isSelected
                                      ? 'border-[#0056ff] bg-[#0056ff]/10 text-[#0056ff] shadow-xs'
                                      : 'border-[#f2f2f2] bg-white text-[#525252] hover:border-[#d4d4d4] hover:text-[#0a0a0a]'
                                  }`}
                                >
                                  <span
                                    className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] border transition-all ${
                                      isSelected
                                        ? 'border-[#0056ff] bg-[#0056ff] text-white'
                                        : 'border-[#d4d4d4] group-hover:border-[#9e9e9e] bg-white'
                                    }`}
                                  >
                                    {isSelected && <Check className="h-3 w-3 stroke-[3.5]" />}
                                  </span>
                                  <span className="leading-tight select-none">{option}</span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      {/* Preferred Online Meeting Date */}
                      <div className="flex flex-col gap-1.5">
                        <label className="font-heading text-[16px] font-medium text-[#0a0a0a]">
                          Preferred Online Meeting Date
                        </label>
                        <DemoDatePicker
                          value={demoDate}
                          onChange={setDemoDate}
                        />
                      </div>

                      {/* Have you completed the AI Implementation Assessment? (Yes/No field) */}
                      <div className="flex flex-col gap-2 pt-1">
                        <label className="font-heading text-[15px] sm:text-[16px] font-medium text-[#0a0a0a]">
                          Have you completed the AI Implementation Assessment?
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {/* Yes Button */}
                          <button
                            type="button"
                            onClick={() => setDemoAssessmentCompleted('yes')}
                            className={`flex items-center justify-center gap-2.5 rounded-[12px] border py-2.5 sm:py-3 px-4 text-[14px] font-medium transition-all duration-200 cursor-pointer ${
                              demoAssessmentCompleted === 'yes'
                                ? 'border-[#0056ff] bg-[#0056ff]/10 text-[#0056ff] ring-1 ring-[#0056ff]'
                                : 'border-[#f2f2f2] bg-[#fefefe] text-[#525252] hover:border-[#d4d4d4] hover:bg-neutral-50/60'
                            }`}
                          >
                            <span
                              className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-all ${
                                demoAssessmentCompleted === 'yes'
                                  ? 'border-[#0056ff] bg-[#0056ff] text-white'
                                  : 'border-[#d4d4d4]'
                              }`}
                            >
                              {demoAssessmentCompleted === 'yes' && (
                                <Check className="h-2.5 w-2.5 stroke-[3.5]" />
                              )}
                            </span>
                            <span>Yes</span>
                          </button>

                          {/* No Button (Red themed when selected) */}
                          <button
                            type="button"
                            onClick={() => setDemoAssessmentCompleted('no')}
                            className={`flex items-center justify-center gap-2.5 rounded-[12px] border py-2.5 sm:py-3 px-4 text-[14px] font-medium transition-all duration-200 cursor-pointer ${
                              demoAssessmentCompleted === 'no'
                                ? 'border-[#ef4444] bg-[#ef4444]/10 text-[#dc2626] ring-1 ring-[#ef4444]'
                                : 'border-[#f2f2f2] bg-[#fefefe] text-[#525252] hover:border-[#d4d4d4] hover:bg-neutral-50/60'
                            }`}
                          >
                            <span
                              className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-all ${
                                demoAssessmentCompleted === 'no'
                                  ? 'border-[#ef4444] bg-[#ef4444]'
                                  : 'border-[#d4d4d4]'
                              }`}
                            >
                              {demoAssessmentCompleted === 'no' && (
                                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                              )}
                            </span>
                            <span>No</span>
                          </button>
                        </div>

                        {/* Conditional Logic: Show Assessment Link when "No" is selected */}
                        {demoAssessmentCompleted === 'no' && (
                          <div className="mt-1.5 rounded-[14px] border border-[#0056ff]/30 bg-[#f0f6ff] px-4 py-3 text-left transition-all duration-300 animate-in fade-in">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                              <div className="flex items-center gap-2.5">
                                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0056ff] text-white">
                                  <Check className="h-3 w-3 stroke-[3]" />
                                </div>
                                <p className="text-[14px] font-medium text-[#0a0a0a] leading-none">
                                  Take the Free AI Assessment
                                </p>
                              </div>
                              <button
                                type="button"
                                onClick={() => {
                                  setShowAssessmentModal(true);
                                  setAssessmentCompleted(false);
                                  setAssessmentStep(1);
                                }}
                                className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-[10px] bg-[#0056ff] px-4 py-2 text-[13px] font-medium text-white transition-all hover:bg-[#0040c0] cursor-pointer shadow-sm active:scale-[0.98]"
                              >
                                <span>Start Assessment</span>
                                <ArrowRight className="h-3.5 w-3.5" />
                              </button>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Submit Button */}
                      <div className="pt-2">
                        {demoAssessmentCompleted === 'no' ? (
                          <button
                            type="button"
                            disabled
                            className="w-full cursor-not-allowed rounded-[12px] py-3.5 font-heading text-[15px] font-medium text-[#fefefe]/70 select-none flex items-center justify-center gap-2 opacity-35 transition-all duration-200"
                            style={{
                              background:
                                'radial-gradient(87% 75% at 50% 206.8%, rgb(82, 82, 82) 0%, rgb(10, 10, 10) 100%)',
                            }}
                          >
                            <Lock className="h-4 w-4 text-[#fefefe]/80" />
                            <span>Book Your Free Call</span>
                          </button>
                        ) : (
                          <button
                            type="submit"
                            disabled={demoSubmitting}
                            className="w-full cursor-pointer rounded-[12px] py-3.5 font-heading text-[15px] font-medium text-[#fefefe] transition-all duration-200 hover:opacity-95 disabled:opacity-70"
                            style={{
                              background:
                                'radial-gradient(87% 75% at 50% 206.8%, rgb(82, 82, 82) 0%, rgb(10, 10, 10) 100%)',
                              boxShadow:
                                '0px 0.602187px 1.80656px -1.41667px rgba(0, 86, 255, 0.81), 0px 2.28853px 6.8656px -2.83333px rgba(0, 86, 255, 0.69), 0px 10px 30px -4.25px rgba(0, 86, 255, 0.15)',
                            }}
                          >
                            {demoSubmitting ? 'Booking...' : 'Book Your Free Call'}
                          </button>
                        )}
                      </div>
                    </form>
                  )}
                </div>
              </ScrollAnimation>
            </div>

            {/* Right Column: Bottom-Right Heading Group (Below & Hugging Bottom-Right of Form) */}
            <div className="w-full lg:w-[340px] xl:w-[370px] shrink-0 flex flex-col justify-end lg:-mb-10 xl:-mb-12">
              <ScrollAnimation direction="right" viewport={{ amount: 0.2, margin: '0px 0px -40px 0px', once: true }}>
                <div className="space-y-3.5 sm:space-y-4 text-right w-full lg:w-[470px] xl:w-[490px] relative lg:-left-8 xl:-left-10">
                  <p className="font-heading text-[15px] sm:text-[16px] xl:text-[17px] leading-[1.45] text-[#525252] w-full lg:w-[470px] xl:w-[490px] text-right">
                    Book a personalized demo to discover how our platform streamlines workflows and drives growth.
                  </p>
                  <h2 className="font-heading text-[40px] sm:text-[46px] lg:text-[50px] xl:text-[54px] font-medium leading-[1.08] tracking-[-1.4px] text-[#0a0a0a] w-full lg:w-[470px] xl:w-[490px] text-right">
                    Book a Demo
                  </h2>
                </div>
              </ScrollAnimation>
            </div>

          </div>
        </div>
      </section>

      {/* Main Form & Support Grid */}
      <section className="pb-20 sm:pb-28 px-4 sm:px-6 relative z-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Send us a message form (7-8 cols) */}
            <ScrollAnimation direction="up" viewport={{ amount: 0.15, margin: '0px 0px -40px 0px', once: true }} className="lg:col-span-7 xl:col-span-8">
              <div id="contact-form" className="rounded-[16px] border border-[#f2f2f2] bg-white p-6 sm:p-8 md:p-10 shadow-[0_0_8px_-2px_#f2f2f2] scroll-mt-28 relative">
                <div id="send-us-a-message" className="scroll-mt-28" />
                <div id="send-message" className="scroll-mt-28" />
                <div className="mb-8">
                  <h2 className="font-heading font-semibold text-2xl sm:text-[26px] text-[#0a0a0a] mb-2">
                    Send us a message
                  </h2>
                  <p className="text-[15px] text-[#525252]">
                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                  </p>
                </div>

              {submitted ? (
                <div className="py-12 px-6 rounded-[14px] bg-[#e6f0ff]/30 border border-[#d4e4fc] text-center">
                  <div className="w-14 h-14 rounded-full bg-[#0056ff] text-white flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-[#0a0a0a] mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-[15px] text-[#525252] max-w-[440px] mx-auto mb-6 leading-relaxed">
                    Thank you for reaching out, <strong className="text-[#0a0a0a]">{formData.name || 'there'}</strong>. Our team has received your message and will reply to <strong className="text-[#0a0a0a]">{formData.email}</strong> shortly.
                  </p>
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-[12px] bg-[#0a0a0a] text-white text-[14px] font-medium hover:bg-[#262626] transition-colors cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Two fields side by side: Full Name & Work Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-[14px] font-medium text-[#0a0a0a] mb-2">
                        Full Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-[12px] border border-[#f2f2f2] bg-white text-[#0a0a0a] placeholder-[#9e9e9e] text-[14px] focus:outline-none focus:border-[#0056ff] focus:ring-2 focus:ring-[#0056ff]/10 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-[14px] font-medium text-[#0a0a0a] mb-2">
                        Work Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-[12px] border border-[#f2f2f2] bg-white text-[#0a0a0a] placeholder-[#9e9e9e] text-[14px] focus:outline-none focus:border-[#0056ff] focus:ring-2 focus:ring-[#0056ff]/10 transition-all"
                      />
                    </div>
                  </div>

                  {/* Company Name (Optional) */}
                  <div>
                    <label htmlFor="contact-company" className="block text-[14px] font-medium text-[#0a0a0a] mb-2">
                      Company Name (Optional)
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      className="w-full px-4 py-3 rounded-[12px] border border-[#f2f2f2] bg-white text-[#0a0a0a] placeholder-[#9e9e9e] text-[14px] focus:outline-none focus:border-[#0056ff] focus:ring-2 focus:ring-[#0056ff]/10 transition-all"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-[14px] font-medium text-[#0a0a0a] mb-2">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      className="w-full px-4 py-3 rounded-[12px] border border-[#f2f2f2] bg-white text-[#0a0a0a] placeholder-[#9e9e9e] text-[14px] focus:outline-none focus:border-[#0056ff] focus:ring-2 focus:ring-[#0056ff]/10 transition-all"
                    />
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label htmlFor="contact-message" className="block text-[14px] font-medium text-[#0a0a0a] mb-2">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type your message here..."
                      className="w-full px-4 py-3 rounded-[12px] border border-[#f2f2f2] bg-white text-[#0a0a0a] placeholder-[#9e9e9e] text-[14px] focus:outline-none focus:border-[#0056ff] focus:ring-2 focus:ring-[#0056ff]/10 transition-all resize-y min-h-[120px]"
                    />
                  </div>

                  {/* Send Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center px-7 py-3.5 rounded-[12px] bg-[radial-gradient(87%_75%_at_50%_206.8%,#525252_0%,#0a0a0a_100%)] text-white text-[15px] font-medium shadow-[0_1px_3px_0_rgba(158,158,158,0.5)] hover:opacity-95 active:scale-[0.99] disabled:opacity-50 transition-all cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </div>
                </form>
              )}
              </div>
            </ScrollAnimation>

            {/* Right Column: Support Card (4-5 cols) */}
            <ScrollAnimation direction="up" delay={0.15} viewport={{ amount: 0.15, margin: '0px 0px -40px 0px', once: true }} className="lg:col-span-5 xl:col-span-4">
              {/* Card: We're here to support you */}
              <div className="rounded-[16px] border border-[#f2f2f2] bg-[#e6f0ff]/10 p-7 sm:p-8 shadow-[0_0_8px_-2px_#f2f2f2]">
                <h3 className="font-heading font-semibold text-[18px] text-[#0a0a0a] mb-5">
                  We&apos;re here to support you
                </h3>

                <div className="space-y-3.5">
                  {[
                    'Booking a free consultation',
                    'Choosing the right AI agent(s) and automation(s)',
                    'Setup & onboarding',
                    'Integrations & connections',
                    'Pricing & plans',
                    'Technical support',
                    'Custom automations',
                    'Billing questions',
                    'Partnership & collaboration',
                    'General enquiries',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#0056ff] flex items-center justify-center text-white shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-[14px] text-[#525252] font-normal leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div id="contact-faq-section">
        <FAQ />
      </div>

      {/* Final CTA Section */}
      <FinalCTA
        onStartTrial={onOpenPricing || onBookDemo}
        onBookDemo={onBookDemo}
      />

      {/* Interactive AI Implementation Assessment Modal */}
      {showAssessmentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg overflow-hidden rounded-[24px] border border-[#f2f2f2] bg-white p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setShowAssessmentModal(false)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            {!assessmentCompleted ? (
              <div>
                {/* Progress bar & Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2 text-[12.5px] font-medium text-[#525252]">
                    <span className="text-[#0056ff] font-semibold">AI Readiness Assessment</span>
                    <span>Step {assessmentStep} of 3</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-[#f2f2f2] overflow-hidden">
                    <div
                      className="h-full bg-[#0056ff] transition-all duration-300 rounded-full"
                      style={{ width: `${(assessmentStep / 3) * 100}%` }}
                    />
                  </div>
                </div>

                {assessmentStep === 1 && (
                  <div>
                    <h3 className="font-heading text-[20px] font-semibold text-[#0a0a0a] mb-1.5">
                      What is your primary lead generation channel?
                    </h3>
                    <p className="text-[13.5px] text-[#525252] mb-5">
                      We optimize follow-up triggers based on where inquiries enter.
                    </p>
                    <div className="space-y-2.5">
                      {[
                        'Inbound Website Forms & Landing Pages',
                        'Cold Outbound & Email Campaigns',
                        'Paid Ads (Meta, Google, LinkedIn)',
                        'Multi-Channel Inquiries & Referrals',
                      ].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => {
                            setAssessmentAnswers((prev) => ({ ...prev, goal: opt }));
                            setAssessmentStep(2);
                          }}
                          className={`w-full text-left rounded-[12px] border p-3.5 text-[14px] transition-all duration-150 cursor-pointer flex items-center justify-between ${
                            assessmentAnswers.goal === opt
                              ? 'border-[#0056ff] bg-[#0056ff]/5 text-[#0056ff] font-medium'
                              : 'border-[#f2f2f2] hover:border-[#0056ff]/40 hover:bg-neutral-50/60 text-[#0a0a0a]'
                          }`}
                        >
                          <span>{opt}</span>
                          <ArrowRight className="h-4 w-4 opacity-40" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {assessmentStep === 2 && (
                  <div>
                    <h3 className="font-heading text-[20px] font-semibold text-[#0a0a0a] mb-1.5">
                      What CRM or stack does your agency utilize?
                    </h3>
                    <p className="text-[13.5px] text-[#525252] mb-5">
                      AI Launch provides native bidirectional syncing with popular CRMs.
                    </p>
                    <div className="space-y-2.5">
                      {[
                        'HubSpot CRM',
                        'GoHighLevel (GHL)',
                        'Salesforce / Close',
                        'Custom CRM / Webhooks / Zapier',
                      ].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => {
                            setAssessmentAnswers((prev) => ({ ...prev, crm: opt }));
                            setAssessmentStep(3);
                          }}
                          className={`w-full text-left rounded-[12px] border p-3.5 text-[14px] transition-all duration-150 cursor-pointer flex items-center justify-between ${
                            assessmentAnswers.crm === opt
                              ? 'border-[#0056ff] bg-[#0056ff]/5 text-[#0056ff] font-medium'
                              : 'border-[#f2f2f2] hover:border-[#0056ff]/40 hover:bg-neutral-50/60 text-[#0a0a0a]'
                          }`}
                        >
                          <span>{opt}</span>
                          <ArrowRight className="h-4 w-4 opacity-40" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {assessmentStep === 3 && (
                  <div>
                    <h3 className="font-heading text-[20px] font-semibold text-[#0a0a0a] mb-1.5">
                      Estimated monthly lead inquiries volume?
                    </h3>
                    <p className="text-[13.5px] text-[#525252] mb-5">
                      Select your target monthly lead scale for automated response workflows.
                    </p>
                    <div className="space-y-2.5">
                      {[
                        'Under 250 leads / month',
                        '250 – 1,000 leads / month',
                        '1,000 – 5,000 leads / month',
                        '5,000+ leads / month (High volume)',
                      ].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => {
                            setAssessmentAnswers((prev) => ({ ...prev, volume: opt }));
                            setAssessmentCompleted(true);
                            setDemoAssessmentCompleted('yes');
                          }}
                          className={`w-full text-left rounded-[12px] border p-3.5 text-[14px] transition-all duration-150 cursor-pointer flex items-center justify-between ${
                            assessmentAnswers.volume === opt
                              ? 'border-[#0056ff] bg-[#0056ff]/5 text-[#0056ff] font-medium'
                              : 'border-[#f2f2f2] hover:border-[#0056ff]/40 hover:bg-neutral-50/60 text-[#0a0a0a]'
                          }`}
                        >
                          <span>{opt}</span>
                          <Check className="h-4 w-4 text-[#0056ff]" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="py-2 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#0056ff]/10 text-[#0056ff]">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-[#e6f0ff] px-3 py-1 text-[12px] font-semibold text-[#0056ff] mb-3">
                  <span>Readiness Score: 94/100 (Optimal Match)</span>
                </div>
                <h3 className="font-heading text-[22px] font-semibold text-[#0a0a0a] mb-2">
                  Assessment Completed!
                </h3>
                <p className="text-[14px] text-[#525252] mb-6 max-w-sm mx-auto">
                  Your AI Launch profile has been generated and pre-attached to your demo request form.
                </p>
                <div className="rounded-[14px] border border-[#f2f2f2] bg-[#fafafa] p-4 text-left mb-6 space-y-2">
                  <div className="flex justify-between text-[13px]">
                    <span className="text-[#525252]">Primary Channel:</span>
                    <span className="font-medium text-[#0a0a0a]">{assessmentAnswers.goal || 'Inbound'}</span>
                  </div>
                  <div className="flex justify-between text-[13px]">
                    <span className="text-[#525252]">CRM Setup:</span>
                    <span className="font-medium text-[#0a0a0a]">{assessmentAnswers.crm || 'Standard'}</span>
                  </div>
                  <div className="flex justify-between text-[13px]">
                    <span className="text-[#525252]">Monthly Inquiries:</span>
                    <span className="font-medium text-[#0a0a0a]">{assessmentAnswers.volume || '1,000+'}</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowAssessmentModal(false)}
                  className="btn-dark w-full py-3 text-[14.5px] cursor-pointer"
                >
                  <span>Return to Demo Form</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
