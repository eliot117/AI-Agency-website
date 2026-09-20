export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  tag: 'Saas' | 'Agency';
  avatar: string;
  rating?: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  monthlyPrice: number;
  yearlyPrice: number;
  popular?: boolean;
  ctaText: string;
  featuresHeader: string;
  features: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BentoCard {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export interface StepItem {
  step: string;
  title: string;
  description: string;
  image: string;
}
