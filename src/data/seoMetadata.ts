export interface PageMetadata {
  title: string;
  description: string;
  canonicalPath: string;
  primaryKeyword: string;
  ogImage?: string;
}

export const CORE_PAGES_SEO: Record<string, PageMetadata> = {
  home: {
    title: 'AI Launch | 24/7 AI Phone Receptionist & Booking Agents',
    description:
      'Turn missed calls into booked appointments automatically with AI Launch. 24/7 AI phone receptionists, smart CRM integration, and instant lead follow-ups.',
    canonicalPath: '/',
    primaryKeyword: 'AI Phone Receptionist & Booking Agents',
    ogImage: '/logo.png',
  },
  pricing: {
    title: 'Transparent Pricing & Plans | AI Launch Phone Agents',
    description:
      'Explore transparent pricing for AI Launch inbound phone agents, outbound follow-ups, and full-time AI architect systems. Scale your business on autopilot.',
    canonicalPath: '/pricing',
    primaryKeyword: 'Pricing & Plans AI Phone Agents',
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
    title: '40+ Business App & CRM Integrations | AI Launch',
    description:
      'Seamlessly connect AI Launch with Google Calendar, Outlook, Slack, HubSpot, Zapier, PayPal, and 40+ productivity, communication, and payment platforms.',
    canonicalPath: '/integrations',
    primaryKeyword: 'Business App & CRM Integrations',
    ogImage: '/logo.png',
  },
  contact: {
    title: 'Book a Live Demo & Free AI Consulting | AI Launch',
    description:
      'Get in touch with AI Launch in Melbourne, VIC. Book a personalized live demo, schedule free AI consulting, or submit your business inquiry to our team.',
    canonicalPath: '/contact',
    primaryKeyword: 'Book a Live Demo & Free AI Consulting',
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
