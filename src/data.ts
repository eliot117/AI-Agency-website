import { BentoCard, FAQItem, PricingPlan, StepItem, Testimonial } from './types';

export const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Integrations', href: '/integrations' },
  { label: 'Contact', href: '#contact' },
];

export const SOCIAL_AVATARS = [
  'https://framerusercontent.com/images/wCh8ywTUNHp6kLOCur1yaIbE2mY.jpg?width=736&height=1104',
  'https://framerusercontent.com/images/sb8Fx0CJhnE36POlu7E4OWRKo0.jpg?width=736&height=1103',
  'https://framerusercontent.com/images/1kFqWTwDmGVCgZZsTDwBEdZa6Zc.jpg?width=387&height=580',
  'https://framerusercontent.com/images/s9aFWX3QJ0KUFnTPlW8Ab48aK4.jpg?width=736&height=920',
  'https://framerusercontent.com/images/JedvXh2woMpjwi8okdGTbFgaw.jpg?width=736&height=1104',
];

export const BENTO_CARDS: BentoCard[] = [
  {
    id: 'never-miss-call',
    title: 'Never Miss a Call',
    description: 'Your AI answers every call and message, then turns the conversation into a booked appointment.',
    image: 'https://framerusercontent.com/images/1DNl7ouvnIrK6mQGohyKVFpMk.png?width=1300&height=620',
    alt: 'Never Miss a Call',
  },
  {
    id: 'more-booked',
    title: 'More Booked Appointments',
    description: "Automatic follow ups make sure interest doesn't slip away before it turns into a booking.",
    image: 'https://framerusercontent.com/images/fhs34Z69sgnEifVerEwm7MYYYOQ.png?width=1300&height=620',
    alt: 'more-booked-appointments',
  },
  {
    id: 'consistent-feedback',
    title: 'Consistent Feedback',
    description: 'Automatic follow ups turn happy customers into new 5 star Google reviews.',
    image: '/Gemini_Generated_Image_amdt1lamdt1lamdt.jpg',
    alt: 'Consistent Feedback',
  },
  {
    id: 'built-for-businesses',
    title: 'Built for Businesses',
    description: 'More time focused on your customers and growing the business, none on admin.',
    image: 'https://framerusercontent.com/images/FT0bFWWaGPoz2bqpU0o5AYF6dok.png?width=1300&height=620',
    alt: 'built-for-businesses',
  },
  {
    id: 'seamless-integrations',
    title: 'Seamless Integrations',
    description: 'Connect apps and automate tasks across your workflow effortlessly.',
    image: 'https://framerusercontent.com/images/fZMrK2RvxXD4vXjR0z2vIsiiXA.png?width=1300&height=620',
    alt: 'seamless-integrations',
  },
  {
    id: 'secure-reliable',
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security keeps your data protected and always reliable.',
    image: 'https://framerusercontent.com/images/bX4BcBlNPBCDQbMW18SjqhBz7Q.png?width=1300&height=620',
    alt: 'secure-and-reliable',
  },
];

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    step: 'STEP 01',
    title: 'Free Consultation',
    description: 'Hop on a free online call to map out where and if AI fits in your business.',
    image: '/Gemini_Generated_Image_ldq8vdldq8vdldq8.jpg',
  },
  {
    step: 'STEP 02',
    title: 'Live Demo',
    description: "See exactly how it'll work for your business, live and in action.",
    image: '/Gemini_Generated_Image_8csjzd8csjzd8csj.jpg',
  },
  {
    step: 'STEP 03',
    title: 'Go Live',
    description: 'We set everything up and integrate it into how your business already runs.',
    image: '/Gemini_Generated_Image_nuy1jznuy1jznuy1.jpg',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Since switching to saalink, our response time dropped by 80% and our booked calls doubled. Incredible platform!',
    name: 'Noah Turner',
    role: 'CEO',
    company: 'LeadPeak',
    tag: 'Saas',
    avatar: 'https://framerusercontent.com/images/wCh8ywTUNHp6kLOCur1yaIbE2mY.jpg?width=736&height=1104',
    rating: 5,
  },
  {
    quote: 'We tested several automation tools, but saalink delivered the best results. It saves time, keeps our pipeline active, and helps us close more deals.',
    name: 'Michael Foster',
    role: 'CEO',
    company: 'ScaleBridge',
    tag: 'Agency',
    avatar: 'https://framerusercontent.com/images/sb8Fx0CJhnE36POlu7E4OWRKo0.jpg?width=736&height=1103',
    rating: 5,
  },
  {
    quote: 'Before saalink, our team spent hours following up with leads. Now everything runs automatically, and we\'ve seen a huge increase in booked meetings.',
    name: 'James Carter',
    role: 'Founder',
    company: 'Elevate Digital',
    tag: 'Agency',
    avatar: 'https://framerusercontent.com/images/1kFqWTwDmGVCgZZsTDwBEdZa6Zc.jpg?width=387&height=580',
    rating: 5,
  },
  {
    quote: 'Saalink helped us respond to every lead within minutes. Our conversion rates improved almost immediately, and the workflow is incredibly simple.',
    name: 'Emily Rodriguez',
    role: 'Head of Growth',
    company: 'CloudStack',
    tag: 'Saas',
    avatar: 'https://framerusercontent.com/images/s9aFWX3QJ0KUFnTPlW8Ab48aK4.jpg?width=736&height=920',
    rating: 5,
  },
  {
    quote: 'We use saalink every single day. The follow-ups, the scheduling, the insights — everything just works. It\'s like having an SDR team on autopilot.',
    name: 'David Miller',
    role: 'Co-founder',
    company: 'BrightScale',
    tag: 'Agency',
    avatar: 'https://framerusercontent.com/images/JedvXh2woMpjwi8okdGTbFgaw.jpg?width=736&height=1104',
    rating: 5,
  },
  {
    quote: 'Saalink transformed the way we manage leads. Every inquiry gets a fast response, and our sales team can focus on closing deals instead of chasing prospects.',
    name: 'Alex Thompson',
    role: 'Founder',
    company: 'Nova Growth',
    tag: 'Saas',
    avatar: 'https://framerusercontent.com/images/BrVNEJwORjoi2N2vMFoPWKdAJo.jpg?width=736&height=1008',
    rating: 5,
  },
];

export const STATS = [
  { value: '25,000+', label: 'Calls booked every single month' },
  { value: '98%', label: 'Customers recommend saalink' },
  { value: '3.5x', label: 'More replies than manual outreach' },
  { value: '12h+', label: 'Hours saved every week on outreach' },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'free-ai-consulting',
    name: 'AI Consulting',
    subtitle: 'Find out exactly where AI fits your business.',
    monthlyPrice: 0,
    yearlyPrice: 10,
    ctaText: 'Book a Demo',
    featuresHeader: 'Everything in AI Consulting :',
    features: [
      'Free AI business discussion',
      'Live demo of your options',
      'Personalised recommendations',
      'Industry specific tips',
    ],
  },
  {
    id: 'inbound-agents',
    name: 'Autonomous Inbound AI Agents',
    subtitle: 'Never miss a call or message that comes in.',
    monthlyPrice: 79,
    yearlyPrice: 63,
    popular: true,
    ctaText: 'Book a Demo',
    featuresHeader: 'Everything in Inbound AI Agents :',
    features: [
      '24/7 call & message answering',
      'Automatic appointment booking',
      'Google review requests',
      'Spam filtering',
      'CRM integrations',
      'Ongoing monitoring & updates',
    ],
  },
  {
    id: 'outbound-agents',
    name: 'Autonomous Outbound AI Agents',
    subtitle: 'Follows up on every enquiry, automatically.',
    monthlyPrice: 149,
    yearlyPrice: 119,
    ctaText: 'Book a Demo',
    featuresHeader: 'Everything in Outbound AI Agents :',
    features: [
      'Calls new leads within minutes',
      'Automatic appointment booking',
      'Google review requests',
      'Follow ups until booked or closed',
      'CRM integrations',
      'Ongoing monitoring & updates',
    ],
  },
  {
    id: 'enterprise',
    name: 'Full Time (Enterprise)',
    subtitle: 'For businesses ready to run entirely on AI.',
    monthlyPrice: 249,
    yearlyPrice: 199,
    ctaText: 'Book a Demo',
    featuresHeader: 'Everything in Full Time (Enterprise) :',
    features: [
      'Full time AI architect',
      'Specialised agents for your team',
      'Custom tools for your workers',
      'More automations, no limits',
      'Custom AI infrastructure & website',
    ],
  },
];

export const COMPARISON_CATEGORIES = [
  {
    category: 'Core Features',
    features: [
      { name: 'Monthly Leads', starter: '500', growth: '2,500', scale: 'Unlimited', enterprise: 'Custom / High-Vol' },
      { name: 'AI-Powered Follow-ups', starter: true, growth: true, scale: true, enterprise: true },
      { name: 'Smart Booking Calendar', starter: true, growth: true, scale: true, enterprise: true },
      { name: 'Multi-Channel Outreach', starter: 'Email only', growth: 'Email + SMS + Social', scale: 'All Channels', enterprise: 'Omnichannel + Voice' },
      { name: 'Custom AI Voice & Tone', starter: false, growth: true, scale: true, enterprise: 'Custom Model Tuning' },
    ],
  },
  {
    category: 'Analytics & Reporting',
    features: [
      { name: 'Dashboard Analytics', starter: 'Basic', growth: 'Advanced Real-time', scale: 'Full Suite + Custom', enterprise: 'Custom BI Warehouse' },
      { name: 'Revenue Attribution', starter: false, growth: true, scale: true, enterprise: true },
      { name: 'Exportable Reports', starter: 'CSV', growth: 'CSV, PDF, Webhooks', scale: 'Full Data Warehouse', enterprise: 'Real-time Streaming' },
    ],
  },
  {
    category: 'Team & Collaboration',
    features: [
      { name: 'Team Seats', starter: '1 Member', growth: '5 Members', scale: 'Unlimited', enterprise: 'Unlimited + SSO' },
      { name: 'Role-Based Access Control', starter: false, growth: true, scale: true, enterprise: true },
      { name: 'Shared Team Workflows', starter: false, growth: true, scale: true, enterprise: true },
      { name: 'White-Label Branding', starter: false, growth: false, scale: 'Beta', enterprise: true },
    ],
  },
  {
    category: 'Support & Security',
    features: [
      { name: 'Customer Support', starter: 'Email (24h SLA)', growth: 'Priority Chat & Email', scale: 'Dedicated Manager', enterprise: '24/7 Phone + SLA' },
      { name: 'API & Webhooks Access', starter: false, growth: 'Standard API', scale: 'High-Throughput API', enterprise: 'Custom Dedicated API' },
      { name: 'SOC2 & HIPAA Compliance', starter: true, growth: true, scale: true, enterprise: true },
    ],
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is AI Launch?',
    answer: 'AI Launch is an AI system that answers your calls and messages, follows up automatically, and books appointments for you around the clock, without hiring extra staff.',
  },
  {
    id: 'faq-2',
    question: 'Does AI Launch integrate with my existing tools?',
    answer: 'Yes. AI Launch connects with the tools you already use, like your calendar and messaging apps, so everything fits into how you already work.',
  },
  {
    id: 'faq-3',
    question: 'What kind of support do you offer?',
    answer: 'We offer ongoing support from day one, helping you get set up, adjusting your AI as your business changes, and troubleshooting whenever something needs a look.',
  },
  {
    id: 'faq-4',
    question: 'How does the AI follow-up work?',
    answer: 'Your AI automatically follows up with new enquiries, keeps the conversation moving, and turns interest into a booked appointment.',
  },
  {
    id: 'faq-5',
    question: 'Is my data secure?',
    answer: "Yes. Your AI runs on established, secure platforms (like Make.com), so your data and your customers' information are handled properly.",
  },
  {
    id: 'faq-6',
    question: 'Can I customize the AI responses?',
    answer: 'Yes. Every AI is built around your business, tone, and how you want customers spoken to, not a generic script.',
  },
  {
    id: 'faq-7',
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes. You can cancel anytime, no long-term lock-in. Your AI stays active until the end of your current billing period.',
  },
];

export const INTEGRATION_TOOLS = [
  { name: 'Asana', category: 'Project Management' },
  { name: 'Zoho', category: 'CRM & Finance' },
  { name: 'OpenAI', category: 'Artificial Intelligence' },
  { name: 'ClickUp', category: 'Productivity' },
  { name: 'HubSpot', category: 'Inbound Marketing & CRM' },
  { name: 'Pipedrive', category: 'Sales CRM' },
  { name: 'Mailchimp', category: 'Email Automation' },
  { name: 'Gemini', category: 'AI Intelligence' },
  { name: 'Slack', category: 'Team Communications' },
  { name: 'Telegram', category: 'Messaging' },
  { name: 'PayPal', category: 'Payments & Billing' },
  { name: 'Intercom', category: 'Customer Messaging' },
  { name: 'Notion', category: 'Workspace & Docs' },
  { name: 'Stripe', category: 'Payment Gateway' },
  { name: 'Zapier', category: 'Workflow Automation' },
];
