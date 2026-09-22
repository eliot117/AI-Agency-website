export interface AgentOrPlanItem {
  slug: string;
  name: string;
  category: 'Inbound AI Agents' | 'Outbound AI Agents' | 'Plans';
  shortDescription: string;
  tagline: string;
  whatHeading: string;
  whatText: string;
  whoHeading: string;
  whoText: string;
  includedHeading: string;
  includedItems: string[];
  howHeading?: string;
  howText?: string;
  whyHeading: string;
  whyText: string;
  buttonLabel: string;
  buttonLink: string;
  pricingTargetHash: string;
  popularTools: string[];
  logoUrl: string;
}

export const SERVICES_DATA: AgentOrPlanItem[] = [
  {
    slug: 'paypal',
    name: 'Receptionist AI Agent',
    category: 'Inbound AI Agents',
    shortDescription: 'Answers every call and books appointments, 24/7, like your best hire.',
    tagline: 'Acts as the 24/7 digital front desk — handling bookings, modifications, and inquiries with professional human-like precision.',
    whatHeading: 'What It Does',
    whatText: 'Every call gets answered, every time, by an AI that sounds like a person and works like your best hire. It takes bookings, handles changes to existing appointments, answers the questions customers actually ask, and keeps your calendar moving without you touching the phone.',
    whoHeading: "Who It's For",
    whoText: 'Built for any business that runs on appointments and loses money every time a call goes to voicemail. If a missed call means a missed booking, this is the agent that closes that gap.',
    includedHeading: "What's Included",
    includedItems: [
      'Answers every call, 24 hours a day, 7 days a week',
      'Books, reschedules, and confirms appointments in the same conversation',
      "Requests a Google review after the job's done (top tier)",
      'Screens out spam before it reaches you (top tier)',
      'Connects to your CRM so nothing gets lost between systems',
      'Ongoing monitoring and updates as your business changes',
    ],
    howHeading: 'How It Works',
    howText: "A call comes in. The AI answers immediately, in your business's voice, and handles the booking start to finish. If it's something only you can decide, it's logged and you're notified. If it's routine, it's done before you'd have finished dialing back.",
    whyHeading: "Why It's Worth It",
    whyText: "The real cost of a missed call isn't the call, it's the booking that goes to whoever picked up next. A receptionist that never misses one call pays for itself the first week it stops a booking from walking to a competitor.",
    buttonLabel: 'See Receptionist Pricing',
    buttonLink: '/pricing#receptionist-pricing',
    pricingTargetHash: '#receptionist-pricing',
    popularTools: ['razorpay', 'wise', 'stripe'],
    logoUrl: '/Receptionist.jpg',
  },
  {
    slug: 'razorpay',
    name: 'Customer Support AI Call Agent',
    category: 'Inbound AI Agents',
    shortDescription: "Handles existing customer calls and escalates only when a human's actually needed.",
    tagline: 'Handles customer inquiries, resolves issues, and provides 24/7 phone call support for existing clients.',
    whatHeading: 'What It Does',
    whatText: "Answers support calls from your existing customers, not new leads, and gives them a straight, accurate answer using your business's own information. Billing questions, service schedules, membership details, all handled without a human touching the phone, and handed to your team the moment something actually needs a person.",
    whoHeading: "Who It's For",
    whoText: 'Built for businesses with a real base of existing customers calling in about accounts they already have, not first-time enquiries. If your team spends real hours a week answering the same handful of questions, this AI call agent takes that off the phone entirely.',
    includedHeading: "What's Included",
    includedItems: [
      'Answers every incoming support call, 24/7',
      'Classifies the call (billing, membership, schedule, complaint) and answers from your own knowledge base',
      'Escalates instantly the moment a request needs a real decision, a cancellation, a refund, an angry customer',
      "Warm transfer to your team, so whoever picks up already knows what the call's about",
      'Ongoing support and adjustments as your policies change',
    ],
    howHeading: 'How It Works',
    howText: "The AI call agent greets the caller, works out what they actually need, and answers it directly if it can. The moment the call needs a human, it says so, transfers warmly, and briefs your team member before they say hello, never a cold, confused handoff.",
    whyHeading: "Why It's Worth It",
    whyText: 'Every repetitive support call your team answers is time not spent on the calls that actually need them. This call agent takes the routine ones off the board completely, and hands you only the ones that were always going to need a person anyway.',
    buttonLabel: 'View Call Agent Pricing',
    buttonLink: '/pricing#customer-support-voice-pricing',
    pricingTargetHash: '#customer-support-voice-pricing',
    popularTools: ['paypal', 'wise', 'stripe'],
    logoUrl: '/Customer Support Call.jpg',
  },
  {
    slug: 'wise',
    name: 'Customer Support AI Agent Widget',
    category: 'Inbound AI Agents',
    shortDescription: 'Answers website visitors instantly and points them straight to booking or buying.',
    tagline: 'An on-site AI widget that converts website visitors into customers by giving instant, accurate answers 24/7.',
    whatHeading: 'What It Does',
    whatText: "Sits on your website as an interactive AI widget and answers visitor questions the second they're asked, day or night. Pricing, products, bookings, policies, all answered from your own information, with the visitor pointed straight to booking, buying, or contacting you, instead of leaving the tab open and forgetting.",
    whoHeading: "Who It's For",
    whoText: "Built for businesses where the website is doing real work bringing people in, but visitors are leaving with unanswered questions instead of taking the next step. If your site gets traffic outside business hours and nobody's there to answer it, this on-site widget fills that gap.",
    includedHeading: "What's Included",
    includedItems: [
      'Interactive website AI widget answering questions 24/7',
      "Matches your brand, colour, name, and tone, so it doesn't feel bolted on",
      'Points visitors straight to booking, ordering, or contacting you',
      'Escalates to a real person the moment a question needs one',
      'Ongoing support and adjustments as your offer changes',
    ],
    howHeading: 'How It Works',
    howText: "A visitor lands on your site and interacts with the AI agent widget. The widget answers from your actual product, service, and policy information, in your brand's voice, and gives them a direct link to take the next step, instead of leaving them to go find it themselves.",
    whyHeading: "Why It's Worth It",
    whyText: "A visitor who has to wait for an answer is a visitor who often doesn't come back. This AI agent widget answers before they've had the chance to lose interest, at the exact moment they were ready to act.",
    buttonLabel: 'View Widget Pricing',
    buttonLink: '/pricing#customer-support-chat-pricing',
    pricingTargetHash: '#customer-support-chat-pricing',
    popularTools: ['paypal', 'razorpay', 'stripe'],
    logoUrl: '/Customer Support Widget.jpg',
  },
  {
    slug: 'stripe',
    name: 'Spam Filter AI Agent',
    category: 'Inbound AI Agents',
    shortDescription: 'Screens every call and puts only real customers through to you.',
    tagline: 'Screens every incoming call and decides in seconds whether it reaches you.',
    whatHeading: 'What It Does',
    whatText: "Answers every call before you do, works out in a short conversation whether it's a real customer or a spam call, and only puts the real ones through to you. Spam gets logged and blocked. Nothing else about the call changes, this agent isn't a receptionist and doesn't try to be one, it has exactly one job and does it well.",
    whoHeading: "Who It's For",
    whoText: 'Built for any business getting hit with 10 or more spam and robocalls a day, the kind that waste time, interrupt real work, and make it easy to miss the one call that actually mattered. Home services, professional services, and any business with a public number are the ones that feel this the most.',
    includedHeading: "What's Included",
    includedItems: [
      'Answers and screens every incoming call, 24/7',
      'Tells real customers from spam in a short conversation, not a guess',
      'Logs and blocks spam automatically, no action needed from you',
      'Notifies you the moment a real customer calls, with their details already collected',
      'Ongoing monitoring and updates as spam patterns change',
    ],
    howHeading: 'How It Works',
    howText: 'A call comes in and the AI asks a few quick questions, name, company, reason for calling. Genuine spam gives itself away fast, vague answers, no real reason for calling, a script. Real customers get their details taken and passed straight to you with a callback number, spam gets logged and goes no further.',
    whyHeading: "Why It's Worth It",
    whyText: "The time lost to spam calls isn't just the call itself, it's the interruption, and the risk that a real customer gets missed in the noise. This agent's only job is making sure that never happens again, for a fraction of what a receptionist would cost.",
    buttonLabel: 'See Spam Filter Pricing',
    buttonLink: '/pricing#spam-filter-pricing',
    pricingTargetHash: '#spam-filter-pricing',
    popularTools: ['paypal', 'pipedrive', 'zoho-crm'],
    logoUrl: '/Spam.jpg',
  },
  {
    slug: 'pipedrive',
    name: 'Lead Call AI Agent',
    category: 'Outbound AI Agents',
    shortDescription: 'Calls new leads within minutes and gets them booked before they go cold.',
    tagline: "Calls every new lead within minutes and gets them booked, before they've had the chance to go cold.",
    whatHeading: 'What It Does',
    whatText: 'The moment a new lead comes in, this agent calls them, not a follow-up email, an actual phone call, within minutes. It qualifies the lead, handles the usual objections, and hands off to a booking agent mid-call so smoothly the lead never notices they\'ve been passed to a second system. It keeps following up until the lead is booked or genuinely closed out.',
    whoHeading: "Who It's For",
    whoText: 'Built for any business where leads go cold fast, and where the business that calls first is usually the business that wins the job. If leads are currently sitting in an inbox waiting for someone to find time to call them back, this is what closes that gap.',
    includedHeading: "What's Included",
    includedItems: [
      'Calls new leads within minutes of enquiry, 24/7',
      'Qualifies the lead and handles common objections in the conversation',
      'Books the appointment in the same call, no separate follow-up needed',
      'Follows up automatically until the lead is booked or closed',
      'Updates your CRM and notifies your team the moment it happens',
      'Ongoing monitoring and updates as your offer changes',
    ],
    howHeading: 'How It Works',
    howText: "A new lead submits a form. Within minutes, the AI is calling them, qualifying interest, and working through the usual hesitations in real time. Once they're ready, the call is handed to a booking agent invisibly, from the lead's side, it's one continuous conversation, and it ends with a booked appointment.",
    whyHeading: "Why It's Worth It",
    whyText: "Leads don't wait. The business that responds first usually wins the job, and most leads sit for hours before anyone calls them back. This agent calls in minutes, every time, so speed stops being the reason a lead went elsewhere.",
    buttonLabel: 'View Lead Call Pricing',
    buttonLink: '/pricing#lead-call-pricing',
    pricingTargetHash: '#lead-call-pricing',
    popularTools: ['zoho-crm', 'salesforce', 'hubspot'],
    logoUrl: '/Lead.jpg',
  },
  {
    slug: 'zoho-crm',
    name: 'Reviews AI Agent',
    category: 'Outbound AI Agents',
    shortDescription: 'Calls every customer after the job and asks happy ones for a Google review.',
    tagline: 'Calls every customer after the job, and asks for a review while the experience is still fresh.',
    whatHeading: 'What It Does',
    whatText: 'After every completed job, this agent calls the customer, checks in on how it went, and asks happy customers for a Google review right there on the call. If a customer isn\'t happy, that feedback gets captured privately instead, so problems get caught and handled before they ever reach Google.',
    whoHeading: "Who It's For",
    whoText: 'Built for any business where reviews genuinely drive new customers, and where asking for a review after the job is either forgotten or feels awkward to do in person. If your Google rating matters to how many new customers find you, this is the agent that keeps it growing.',
    includedHeading: "What's Included",
    includedItems: [
      "Calls every customer automatically after the job's done",
      'Asks happy customers for a Google review, on the spot',
      "Captures private feedback from anyone who isn't fully satisfied, before it becomes a public review",
      'Notifies your team and logs every outcome',
      'Ongoing monitoring and updates as your review strategy changes',
    ],
    howHeading: 'How It Works',
    howText: "Once a job's marked complete, the AI calls the customer and asks how everything went. A happy customer is asked for a review immediately, while the experience is still fresh, and sent a direct link. Anyone less than happy is asked what went wrong instead, and that goes straight to you, not to Google.",
    whyHeading: "Why It's Worth It",
    whyText: "Most happy customers never leave a review, not because they don't want to, but because nobody asked at the right moment. This agent asks every single time, while it still matters, and protects your rating from the reviews you'd rather have caught early.",
    buttonLabel: 'See Reviews Agent Pricing',
    buttonLink: '/pricing#reviews-pricing',
    pricingTargetHash: '#reviews-pricing',
    popularTools: ['pipedrive', 'salesforce', 'hubspot'],
    logoUrl: '/Review.jpg',
  },
  {
    slug: 'salesforce',
    name: 'Consulting Plan',
    category: 'Plans',
    shortDescription: 'A free, no obligation call to find out exactly where AI fits your business.',
    tagline: 'Find out exactly where AI fits your business, before you spend a dollar on it.',
    whatHeading: 'What It Includes',
    whatText: 'A free, no obligation call built around your business specifically, not a generic pitch. It starts with reviewing your assessment results, moves into an open discussion about how your business actually runs, walks through a live demo of the agents that make sense for you, answers whatever questions you\'ve got about the services themselves, and ends with real recommendations, plus tips from other businesses in your industry that have gone through the same thing.',
    whoHeading: "Who It's For",
    whoText: "Anyone who isn't sure yet whether AI genuinely fits their business, or which agent would actually make a difference versus which one would just be nice to have. This is the step before you commit to anything.",
    includedHeading: 'What Happens on the Call',
    includedItems: [
      "Your AI business discussion — what's actually eating your time right now",
      'Your assessment results reviewed together, not just emailed over',
      'A live demo of the agent, or agents, that make sense for your business',
      'Answers to any questions you have about how the services work',
      'Personalised recommendations, not a generic package',
      "Tips from other businesses in your industry, from what's actually worked for them",
    ],
    whyHeading: "Why It's Worth It",
    whyText: 'There\'s no cost and no pressure to buy anything on this call. The only real risk is skipping it and guessing instead, or paying for the wrong agent because nobody walked you through what each one actually does for a business like yours.',
    buttonLabel: "See What's Included",
    buttonLink: '/pricing#compare-plans',
    pricingTargetHash: '#compare-plans',
    popularTools: ['hubspot', 'pipedrive', 'paypal'],
    logoUrl: '/Consulting.jpg',
  },
  {
    slug: 'hubspot',
    name: 'Full-Time Plan',
    category: 'Plans',
    shortDescription: 'Every agent, plus a dedicated AI architect running the whole system for you.',
    tagline: 'Everything Ailaunch offers, built and run for your business specifically, by one person dedicated to it.',
    whatHeading: 'What It Includes',
    whatText: 'Every Inbound and Outbound agent, plus a full time AI architect assigned to your business, specialised agents built specifically for your team, custom tools built for the way your workers actually operate, a greater volume of personalised, autonomous automations than any single agent plan, and a fully custom AI infrastructure and website built around your business, not a template.',
    whoHeading: "Who It's For",
    whoText: "Businesses ready to run substantially on AI, not just automate one part of the front desk. If you're past picking individual agents and want someone dedicated to building and maintaining the whole system for you, this is that plan.",
    includedHeading: "What's Included",
    includedItems: [
      'Every Autonomous Inbound and Outbound agent',
      'A full time AI architect for your business',
      'Specialised AI agents built for your team specifically',
      'Custom tools built around how your workers actually work',
      'A greater volume of personalised, autonomous automations',
      'Advanced, fully personalised AI infrastructure and a custom website',
    ],
    whyHeading: "Why It's Worth It",
    whyText: 'Running six separate agents is still six separate things to manage. This plan puts one person on your business full time, building and adjusting the whole system as it grows, instead of you managing each agent individually.',
    buttonLabel: 'See Full-Time Plan',
    buttonLink: '/pricing#compare-plans-4',
    pricingTargetHash: '#compare-plans-4',
    popularTools: ['salesforce', 'pipedrive', 'paypal'],
    logoUrl: '/Full time.jpg',
  },
];

export const SERVICE_CATEGORIES = [
  'All',
  'Inbound AI Agents',
  'Outbound AI Agents',
  'Plans',
] as const;

export type ServiceCategory = (typeof SERVICE_CATEGORIES)[number];

export function getServiceBySlug(slug: string): AgentOrPlanItem | undefined {
  return SERVICES_DATA.find((item) => item.slug === slug);
}

// Backwards compatibility aliases
export const INTEGRATIONS_DATA_2 = SERVICES_DATA;
export const INTEGRATION_CATEGORIES_2 = SERVICE_CATEGORIES;
export type IntegrationCategory2 = ServiceCategory;
export const getIntegrationBySlug2 = getServiceBySlug;

