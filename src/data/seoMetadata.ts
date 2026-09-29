export interface PageMetadata {
  title: string;
  description: string;
  canonicalPath: string;
  primaryKeyword: string;
  ogImage?: string;
}

export const CORE_PAGES_SEO: Record<string, PageMetadata> = {
  home: {
    title: 'AI Launch | AI Agents for Missed Calls, Leads & Bookings',
    description:
      'AI Launch builds custom AI agents that answer every call, follow up leads instantly, and book appointments automatically for Melbourne small businesses.',
    canonicalPath: '/',
    primaryKeyword: 'AI Agents for Missed Calls, Leads & Bookings',
    ogImage: '/logo.png',
  },
  pricing: {
    title: 'Pricing | AI Launch AI Agents for SMBs',
    description:
      'Compare AI Launch pricing for inbound and outbound AI agents, from a free AI consulting call to full time AI automation for your business.',
    canonicalPath: '/pricing',
    primaryKeyword: 'Pricing AI Launch AI Agents',
    ogImage: '/logo.png',
  },
  services: {
    title: 'Autonomous AI Agents & Consulting Services | AI Launch',
    description:
      'Discover autonomous inbound and outbound AI agents from AI Launch. From 24/7 receptionists to lead follow-up and review capture, automate your front desk.',
    canonicalPath: '/services',
    primaryKeyword: 'Autonomous AI Agents & Consulting Services',
    ogImage: '/logo.png',
  },
  integrations: {
    title: 'Integrations | AI Launch Connects With Your Existing Tools',
    description:
      'See every tool AI Launch connects with, including HubSpot, Google Calendar, Slack, Stripe and 40+ other apps your business already runs on.',
    canonicalPath: '/integrations',
    primaryKeyword: 'AI Launch Integrations',
    ogImage: '/logo.png',
  },
  contact: {
    title: 'Contact & Book a Demo | AI Launch',
    description:
      'Book a free AI consulting call or send AI Launch a message to find out where AI agents fit your business.',
    canonicalPath: '/contact',
    primaryKeyword: 'Contact & Book a Demo',
    ogImage: '/logo.png',
  },
};

export const SERVICES_SEO: Record<string, PageMetadata> = {
  'consulting-plan': {
    title: 'Free AI Business Consulting Call | AI Launch Strategy',
    description:
      'Book a free, no-obligation AI consulting call. We map out your workflows, review assessment findings, and show live agent demos tailored to your business.',
    canonicalPath: '/services/consulting-plan',
    primaryKeyword: 'Free AI Business Consulting',
    ogImage: '/Consulting.jpg',
  },
  'receptionist-ai-agent': {
    title: '24/7 Receptionist AI Agent | Inbound Call Answering',
    description:
      'Answers every inbound customer call, books calendar appointments 24/7, filters spam, and connects to your CRM. Never lose another booking to voicemail.',
    canonicalPath: '/services/receptionist-ai-agent',
    primaryKeyword: '24/7 Receptionist AI Agent',
    ogImage: '/Receptionist.jpg',
  },
  'customer-support-ai-call-agent': {
    title: 'Customer Support AI Call Agent | 24/7 Phone Support',
    description:
      'Handle customer support calls around the clock with AI. Answers account and billing questions from your knowledge base with warm human agent escalation.',
    canonicalPath: '/services/customer-support-ai-call-agent',
    primaryKeyword: 'Customer Support AI Call Agent',
    ogImage: '/Customer Support Call.jpg',
  },
  'customer-support-ai-agent-widget': {
    title: 'Customer Support AI Chat Widget | Website Conversion',
    description:
      'Convert website visitors into booked appointments and buyers 24/7 with an on-brand AI chat widget answering product, pricing, and policy inquiries.',
    canonicalPath: '/services/customer-support-ai-agent-widget',
    primaryKeyword: 'Customer Support AI Chat Widget',
    ogImage: '/Customer Support Widget.jpg',
  },
  'spam-filter-ai-agent': {
    title: 'Spam Filter AI Agent | Automatic Robocall Screening',
    description:
      'Screens every incoming phone call in seconds. Automatically blocks robocalls and spam while routing genuine customer inquiries directly to your team.',
    canonicalPath: '/services/spam-filter-ai-agent',
    primaryKeyword: 'Spam Filter AI Agent',
    ogImage: '/Spam.jpg',
  },
  'lead-call-ai-agent': {
    title: 'Lead Call AI Agent | Outbound Lead Follow-Up in Minutes',
    description:
      'Calls inbound leads within minutes of form submission, qualifies interest, handles common objections, and books meetings before inquiries go cold.',
    canonicalPath: '/services/lead-call-ai-agent',
    primaryKeyword: 'Lead Call AI Agent',
    ogImage: '/Lead.jpg',
  },
  'reviews-ai-agent': {
    title: 'Google Reviews AI Agent | Automated Feedback & Ratings',
    description:
      'Automatically calls customers after completed jobs to collect 5-star Google reviews and routes unsatisfied feedback privately to protect your reputation.',
    canonicalPath: '/services/reviews-ai-agent',
    primaryKeyword: 'Google Reviews AI Agent',
    ogImage: '/Review.jpg',
  },
  'full-time-plan': {
    title: 'Full Time Dedicated AI Architect | Enterprise Automation',
    description:
      'Empower your enterprise with a dedicated AI architect. Includes all inbound and outbound agents, bespoke workflows, custom tooling, and AI infrastructure.',
    canonicalPath: '/services/full-time-plan',
    primaryKeyword: 'Full Time Dedicated AI Architect',
    ogImage: '/Full time.jpg',
  },
};

export function getIntegrationSEO(name: string, slug: string, shortDescription: string, logoUrl?: string): PageMetadata {
  const truncatedName = name.length > 20 ? name.slice(0, 18) + '...' : name;
  const rawTitle = `Connect ${truncatedName} with AI Launch | Integration`;
  // Ensure title is within 50-60 characters
  const title =
    rawTitle.length >= 50 && rawTitle.length <= 60
      ? rawTitle
      : `${truncatedName} AI Integration & Automation | AI Launch`.slice(0, 60);

  // Ensure description is within 150-160 characters
  let baseDesc = `${shortDescription} Connect ${name} with AI Launch to automate appointments, sync customer data, and streamline workflows.`;
  if (baseDesc.length > 160) {
    baseDesc = baseDesc.slice(0, 157) + '...';
  } else if (baseDesc.length < 150) {
    baseDesc = `${shortDescription} Seamlessly integrate ${name} with AI Launch to automate incoming calls, appointment bookings, and customer data workflows.`.slice(0, 160);
  }

  return {
    title,
    description: baseDesc,
    canonicalPath: `/integrations/${slug}`,
    primaryKeyword: `${name} Integration`,
    ogImage: logoUrl || '/logo.png',
  };
}
