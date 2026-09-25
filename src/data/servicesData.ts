export interface AgentOrPlanItem {
  slug: string;
  legacySlugs?: string[];
  name: string;
  category: 'AI Consulting' | 'Inbound AI Agents' | 'Outbound AI Agents' | 'Full Time';
  shortDescription: string;
  tagline: string;
  whatHeading: string;
  whatText: string;
  whoHeading: string;
  whoText: string;
  includedHeading: string;
  includedText?: string;
  includedItems?: string[];
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
    slug: 'consulting-plan',
    legacySlugs: ['salesforce', 'consulting', 'ai-consulting'],
    name: 'AI Consulting',
    category: 'AI Consulting',
    shortDescription: 'A free, no obligation call to find out exactly where AI fits your business.',
    tagline: 'Find out exactly where AI fits your business, before you spend a dollar on it.',
    whatHeading: 'What It Does',
    whatText: "Gives you a free, no obligation call built around your business specifically, not a generic pitch delivered off a script. It reviews your assessment results, opens up an honest discussion about how your business actually runs, walks you through a live demo of the agents that make sense for you, answers whatever questions you have about the services themselves, and leaves you with real recommendations plus tips from other businesses in your industry.",
    howHeading: 'How It Works',
    howText: "The call opens with a genuine discussion about your business and what's actually eating your time right now, not a rehearsed pitch. Your assessment results get reviewed together rather than just emailed over and left for you to interpret alone, and you're shown a live demo of whichever agent or agents make sense for a business like yours. Whatever questions you have about how the services actually work get answered directly, and the call closes with personalised recommendations built around your situation, along with practical tips from other businesses in your industry.",
    includedHeading: "What's Included",
    includedText: "A free AI business discussion covering what's actually eating your time right now, your assessment results reviewed together rather than just emailed over, a live demo of the agent or agents that make sense for your business, answers to any questions you have about the services themselves, personalised recommendations built around your situation, and tips from other businesses in your industry who've already worked through the same decisions.",
    whoHeading: "Who It's For",
    whoText: "Anyone who isn't sure yet whether AI genuinely fits their business, or which agent would actually make a difference versus which one would just be nice to have. This is the step before you commit to anything, built specifically so you're not guessing.",
    whyHeading: "Why It's Worth It",
    whyText: "There's no cost and no pressure to buy anything on this call. The only real risk is skipping it and guessing instead, or ending up with the wrong agent because nobody walked you through what each one actually does for a business like yours.",
    buttonLabel: 'See Pricing',
    buttonLink: '/pricing#ai-consulting',
    pricingTargetHash: '#ai-consulting',
    popularTools: ['full-time-plan', 'lead-call-ai-agent', 'receptionist-ai-agent'],
    logoUrl: '/Consulting.jpg',
  },
  {
    slug: 'receptionist-ai-agent',
    legacySlugs: ['paypal', 'receptionist'],
    name: 'Receptionist AI Agent',
    category: 'Inbound AI Agents',
    shortDescription: 'Answers every call and books appointments, 24/7, like your best hire.',
    tagline: 'Acts as the 24/7 digital front desk, handling bookings, modifications, and inquiries with professional human like precision.',
    whatHeading: 'What It Does',
    whatText: "Every call gets answered, every time, by an AI that sounds like a person and works like your best hire. It takes bookings, handles changes to existing appointments, and answers the questions customers actually ask, all in a single conversation, without you having to touch the phone. At the top tier it also asks happy customers for a Google review once the job's done, and screens out spam before it ever reaches you, so the calls getting through are the ones worth taking. Every booking and customer detail lands straight in your CRM, your team gets notified the moment something needs their attention, and the agent itself is monitored and updated on an ongoing basis so it keeps working the way your business actually runs.",
    whoHeading: "Who It's For",
    whoText: 'Built for any business that runs on appointments and loses money every time a call goes to voicemail. If a missed call means a missed booking, this is the agent that closes that gap. It works especially well for businesses with a steady flow of bookings and rebookings, where the phone rings constantly and no single person can realistically be by it all day.',
    includedHeading: "What's Included",
    includedText: "The agent answers every call around the clock, seven days a week, so nothing depends on whether someone happens to be near the phone. It books, reschedules, and confirms appointments in the same conversation the customer is already having, rather than passing them off to a form or a callback. At the top tier, it also asks happy customers for a Google review after the job's done, and screens out spam before it ever reaches you, so the calls that do get through are the ones worth answering. It connects directly to your CRM so every booking and every customer detail lands where it belongs, and your team gets notified the moment something needs their attention. On top of all that, the agent is monitored and updated on an ongoing basis, so it keeps working the way your business actually runs, not the way it ran on day one.",
    howHeading: 'How It Works',
    howText: "A call comes in and the AI answers immediately, in your business's voice. It works out what the caller needs and handles the booking, reschedule, or question in that same conversation. Once the job's done, at the top tier it follows up with a review request, and any call that looks like spam gets screened out before it ever reaches you. Every detail from the call is logged straight to your CRM, and your team is notified the moment something needs a real decision. If it's routine, which most calls are, it's finished before you'd have even picked up the phone yourself.",
    whyHeading: "Why It's Worth It",
    whyText: "The real cost of a missed call isn't the call itself, it's the booking that goes to whoever picked up next. A receptionist that never misses a single call pays for itself the first week it stops even one booking from walking to a competitor, and it keeps paying for itself every week after that.",
    buttonLabel: 'See Pricing',
    buttonLink: '/pricing#autonomous-inbound-ai-agents',
    pricingTargetHash: '#autonomous-inbound-ai-agents',
    popularTools: ['customer-support-ai-call-agent', 'customer-support-ai-agent-widget', 'spam-filter-ai-agent'],
    logoUrl: '/Receptionist.jpg',
  },
  {
    slug: 'customer-support-ai-call-agent',
    legacySlugs: ['razorpay', 'customer-support-call', 'customer-support-call-agent'],
    name: 'Customer Support AI Call Agent',
    category: 'Inbound AI Agents',
    shortDescription: "Handles existing customer calls and escalates only when a human's actually needed.",
    tagline: 'Handles customer inquiries, resolves issues, and provides support via natural phone conversations.',
    whatHeading: 'What It Does',
    whatText: "Answers support calls from your existing customers, not new leads, and gives them a straight, accurate answer using your business's own information. Billing questions, service schedules, membership details, and the dozen other things customers ask about their existing account with you, all handled without a human touching the phone. The moment a call needs a real decision, a refund, a cancellation, or a genuinely upset customer, it's handed to your team with a warm transfer, not left for the AI to try and talk its way through, and the agent itself keeps adjusting over time as your policies and offerings change.",
    whoHeading: "Who It's For",
    whoText: "Built for businesses with a real base of existing customers calling in about accounts they already have, not first time enquiries. If your team spends real hours every week answering the same handful of questions over and over, this agent takes that off the phone entirely and frees that time up for the calls that actually need a person's judgment.",
    includedHeading: "What's Included",
    includedText: "The agent answers every incoming support call around the clock, and works out what kind of call it is before it says a word back, billing, membership, scheduling, or a complaint, then answers from your own knowledge base rather than guessing. The instant a call needs a decision only a human can make, it escalates, and the transfer is warm, meaning your team member already knows what the call is about before they pick up, instead of starting cold. Support and adjustments continue on an ongoing basis, so as your policies or offerings change, the agent's answers change with them.",
    howHeading: 'How It Works',
    howText: "The AI greets the caller and works out what kind of call it is, billing, membership, scheduling, or a complaint, before it says a word back, then answers from your own knowledge base rather than guessing. If it can answer directly, it does, calmly and accurately. The moment the call needs a human, it says so, transfers warmly, and briefs your team member on exactly what the call's about before they even say hello, instead of starting cold.",
    whyHeading: "Why It's Worth It",
    whyText: "Every repetitive support call your team answers is time not spent on the calls that actually need them. This agent takes the routine ones off the board completely, and hands you only the calls that were always going to need a real person anyway, already briefed and ready to go.",
    buttonLabel: 'See Pricing',
    buttonLink: '/pricing#autonomous-inbound-ai-agents',
    pricingTargetHash: '#autonomous-inbound-ai-agents',
    popularTools: ['receptionist-ai-agent', 'customer-support-ai-agent-widget', 'spam-filter-ai-agent'],
    logoUrl: '/Customer Support Call.jpg',
  },
  {
    slug: 'customer-support-ai-agent-widget',
    legacySlugs: ['wise', 'customer-support-widget', 'customer-support-widget-agent'],
    name: 'Customer Support AI Agent Widget',
    category: 'Inbound AI Agents',
    shortDescription: 'Answers website visitors instantly and points them straight to booking or buying.',
    tagline: 'Converts website visitors into customers by giving instant, accurate answers and directing them to take action at any time of the day.',
    whatHeading: 'What It Does',
    whatText: "Sits on your website as a chat widget and answers visitor questions the moment they're asked, day or night, in your brand's own colour, name, and tone. Pricing, products, bookings, and policies, all answered from your own information, and once the visitor has their answer, they're pointed straight to booking, buying, or contacting you, instead of leaving the tab open and forgetting to come back. If a question needs a real person, it escalates rather than guessing, and the widget itself keeps adjusting over time as your offer changes.",
    whoHeading: "Who It's For",
    whoText: "Built for businesses where the website is already doing real work bringing people in, but visitors are leaving with unanswered questions instead of taking the next step. It matters most for businesses that get traffic outside normal business hours, when nobody's actually there to answer a live question and a visitor would otherwise just leave.",
    includedHeading: "What's Included",
    includedText: "The widget answers instantly, any time of day, and matches your brand's colour, name, and tone so it feels like part of your site rather than something bolted on afterwards. Every answer it gives is followed by a direct link to the next step, booking, ordering, or getting in touch, so the visitor never has to go looking for it themselves. If a question needs a real person, it escalates rather than guessing, and it receives the same ongoing support and adjustments as your other agents, so it keeps up as your offer changes.",
    howHeading: 'How It Works',
    howText: "A visitor lands on your site and asks a question in the widget. The AI works out what they actually need and answers from your actual product, service, and policy information, in your brand's voice, then gives them a direct link to take the next step rather than leaving them to find it on their own. If the question needs a real person, it says so and hands off instead of guessing.",
    whyHeading: "Why It's Worth It",
    whyText: "A visitor who has to wait for an answer is a visitor who often doesn't come back. This widget answers before they've had the chance to lose interest, at the exact moment they were ready to act, which is precisely when most sites go quiet.",
    buttonLabel: 'See Pricing',
    buttonLink: '/pricing#autonomous-inbound-ai-agents-2',
    pricingTargetHash: '#autonomous-inbound-ai-agents-2',
    popularTools: ['receptionist-ai-agent', 'customer-support-ai-call-agent', 'spam-filter-ai-agent'],
    logoUrl: '/Customer Support Widget.jpg',
  },
  {
    slug: 'spam-filter-ai-agent',
    legacySlugs: ['stripe', 'spam-filter'],
    name: 'Spam Filter AI Agent',
    category: 'Inbound AI Agents',
    shortDescription: 'Screens every call and puts only real customers through to you.',
    tagline: 'Screens every incoming call and decides in seconds whether it reaches you.',
    whatHeading: 'What It Does',
    whatText: "Answers every call before you do, works out in a short conversation whether it's a real customer or a spam call, and only puts the real ones through to you. Genuine spam gets logged and blocked automatically, no action needed from you, while real customers have their details taken and you're notified the moment it happens. Nothing else about the call changes and this agent isn't trying to be a receptionist, it has exactly one job, and it does that one job well.",
    whoHeading: "Who It's For",
    whoText: "Built for any business getting hit with ten or more spam and robocalls a day, the kind that waste time, interrupt real work, and make it far too easy to miss the one call that actually mattered. Home services, professional services, and any business with a public phone number tend to feel this problem the most, and feel the relief the fastest once it's solved.",
    includedHeading: "What's Included",
    includedText: "The agent answers and screens every incoming call around the clock, and tells real customers from spam through a short, natural conversation rather than a blunt guess based on the number. Genuine spam gets logged and blocked with no action needed from you, while real customers have their details taken and passed straight through, with you notified the moment it happens. Like every other agent, it's monitored and updated on an ongoing basis, so it keeps adapting as spam callers change their tactics.",
    howHeading: 'How It Works',
    howText: "A call comes in and the AI asks a few quick questions, name, company, reason for calling. Genuine spam gives itself away fast, vague answers, no real reason for the call, an obvious script, and gets logged and blocked with nothing further needed from you. Real customers have their details taken and are passed straight to you with a callback number ready to go, and the agent keeps adapting on an ongoing basis as spam callers change their tactics.",
    whyHeading: "Why It's Worth It",
    whyText: "The cost of spam calls isn't just the call itself, it's the interruption, and the real risk that a genuine customer gets lost in the noise. This agent's only job is making sure that never happens again, for a fraction of what hiring a receptionist to screen calls would cost.",
    buttonLabel: 'See Pricing',
    buttonLink: '/pricing#autonomous-inbound-ai-agents-2',
    pricingTargetHash: '#autonomous-inbound-ai-agents-2',
    popularTools: ['receptionist-ai-agent', 'lead-call-ai-agent', 'reviews-ai-agent'],
    logoUrl: '/Spam.jpg',
  },
  {
    slug: 'lead-call-ai-agent',
    legacySlugs: ['pipedrive', 'lead-call'],
    name: 'Lead Call AI Agent',
    category: 'Outbound AI Agents',
    shortDescription: 'Calls new leads within minutes and gets them booked before they go cold.',
    tagline: "Calls every new lead within minutes and gets them booked, before they've had the chance to go cold.",
    whatHeading: 'What It Does',
    whatText: "The moment a new lead comes in, this agent calls them, not a follow up email, an actual phone call, within minutes of the enquiry landing. It qualifies the lead, works through the usual objections in real time, and hands off to a booking agent mid call so smoothly the lead never notices they've been passed to a second system. It keeps following up automatically until the lead is booked or genuinely closed out, updates your CRM, and notifies your team the moment it happens, rather than letting the enquiry quietly go cold.",
    whoHeading: "Who It's For",
    whoText: 'Built for any business where leads go cold fast, and where the business that calls first is usually the business that wins the job. If leads are currently sitting in an inbox waiting for someone to find the time to call them back, this agent closes that gap before it ever opens.',
    includedHeading: "What's Included",
    includedText: "Leads are called within minutes of enquiry, around the clock, with the agent qualifying interest and handling common objections in the same conversation. The appointment gets booked in that same call, with no separate follow up needed, and if the lead isn't ready straight away, the agent follows up automatically until they're booked or the lead is genuinely closed out. Your CRM is updated and your team notified the moment it happens, and the agent receives the same ongoing monitoring and updates as the rest of your setup, adjusting as your offer changes.",
    howHeading: 'How It Works',
    howText: "A new lead submits a form. Within minutes, the AI is calling them, qualifying interest, and working through the usual hesitations in real time. Once they're ready, the call is handed to a booking agent invisibly, so from the lead's side, it's one continuous conversation that ends with a booked appointment, your CRM updated, and your team notified.",
    whyHeading: "Why It's Worth It",
    whyText: "Leads don't wait. The business that responds first usually wins the job, and most leads sit for hours before anyone calls them back. This agent calls in minutes, every time, so speed stops being the reason a lead went to someone else.",
    buttonLabel: 'See Pricing',
    buttonLink: '/pricing#autonomous-outbound-ai-agents',
    pricingTargetHash: '#autonomous-outbound-ai-agents',
    popularTools: ['reviews-ai-agent', 'consulting-plan', 'full-time-plan'],
    logoUrl: '/Lead.jpg',
  },
  {
    slug: 'reviews-ai-agent',
    legacySlugs: ['zoho-crm', 'reviews'],
    name: 'Reviews AI Agent',
    category: 'Outbound AI Agents',
    shortDescription: 'Calls every customer after the job and asks happy ones for a Google review.',
    tagline: 'Calls every customer after the job, and asks for a review while the experience is still fresh.',
    whatHeading: 'What It Does',
    whatText: "After every completed job, this agent calls the customer, checks in on how it went, and asks happy customers for a Google review right there on the call. If a customer isn't happy, that feedback is captured privately instead, so any problem gets caught and handled before it ever has the chance to become a public review. Every outcome gets logged and your team notified, so nothing falls through the cracks either way.",
    whoHeading: "Who It's For",
    whoText: 'Built for any business where reviews genuinely drive new customers, and where asking for a review in person after the job either gets forgotten or just feels awkward to do. If your Google rating matters to how many new customers find you in the first place, this is the agent that keeps that rating growing steadily instead of relying on whoever happens to remember to leave one.',
    includedHeading: "What's Included",
    includedText: "Every customer gets called automatically once their job is marked complete, and happy customers are asked for a Google review on the spot, while the experience is still fresh in their mind. Anyone who isn't fully satisfied is asked what went wrong instead, and that feedback goes straight to you, not to a public review. Every outcome is logged and your team notified, and the agent is monitored and updated on an ongoing basis as your review strategy changes over time.",
    howHeading: 'How It Works',
    howText: "Once a job's marked complete, the AI calls the customer and asks how everything went. A happy customer is asked for a review immediately and sent a direct link while it's still front of mind, while anyone less than happy is asked what went wrong, and that goes straight to you instead of to Google, logged and flagged for your team.",
    whyHeading: "Why It's Worth It",
    whyText: "Most happy customers never leave a review, not because they don't want to, but because nobody asked at the right moment. This agent asks every single time, while it still matters, and protects your rating from the reviews you'd rather have caught early and handled privately.",
    buttonLabel: 'See Pricing',
    buttonLink: '/pricing#autonomous-outbound-ai-agents',
    pricingTargetHash: '#autonomous-outbound-ai-agents',
    popularTools: ['lead-call-ai-agent', 'consulting-plan', 'full-time-plan'],
    logoUrl: '/Review.jpg',
  },
  {
    slug: 'full-time-plan',
    legacySlugs: ['hubspot', 'full-time', 'full-time-enterprise'],
    name: 'Full Time (Enterprise)',
    category: 'Full Time',
    shortDescription: 'Every agent, plus a dedicated AI architect running the whole system for you.',
    tagline: 'Everything AI Launch offers, built and run for your business specifically, by one person dedicated to it.',
    whatHeading: 'What It Does',
    whatText: "Puts a full time AI architect on your business specifically, running every Autonomous Inbound and Outbound agent, building specialised agents for your team, custom tools around how your workers actually operate, a greater volume of personalised automations than any single agent plan, and a fully custom AI infrastructure and website built around your business rather than adapted from a template.",
    howHeading: 'How It Works',
    howText: "One AI architect is assigned to your business and stays on it, building and adjusting the system as your business grows rather than handing you a fixed package. Every Inbound and Outbound agent runs as part of the setup, specialised agents and tools get built around your specific team, and your infrastructure and website are built custom rather than templated, all maintained on an ongoing basis by that same dedicated person.",
    includedHeading: "What's Included",
    includedText: "Every Autonomous Inbound and Outbound agent is included from the start, alongside a full time AI architect whose job is your business specifically, not a shared pool of clients. Specialised AI agents get built for your team, and custom tools are built around how your workers actually work day to day, not a generic workflow. On top of that, you get a greater volume of personalised, autonomous automations than any individual plan offers, plus advanced, fully personalised AI infrastructure and a custom website built specifically for how your business runs.",
    whoHeading: "Who It's For",
    whoText: "Businesses ready to run substantially on AI, not just automate one part of the front desk. If you're past the stage of picking individual agents one at a time and want someone dedicated to building and maintaining the whole system for you as your business grows, this is that plan.",
    whyHeading: "Why It's Worth It",
    whyText: "Running six separate agents is still six separate things to manage on your own. This plan puts one person on your business full time, building and adjusting the whole system as it grows, instead of leaving you to manage each agent individually as your needs change.",
    buttonLabel: 'See Pricing',
    buttonLink: '/pricing#full-time',
    pricingTargetHash: '#full-time',
    popularTools: ['consulting-plan', 'lead-call-ai-agent', 'receptionist-ai-agent'],
    logoUrl: '/Full time.jpg',
  },
];

export const SERVICE_CATEGORIES = [
  'All',
  'AI Consulting',
  'Inbound AI Agents',
  'Outbound AI Agents',
  'Full Time',
] as const;

export type ServiceCategory = (typeof SERVICE_CATEGORIES)[number];

export function getServiceBySlug(slug: string): AgentOrPlanItem | undefined {
  if (!slug) return undefined;
  const normalized = slug.toLowerCase();
  return SERVICES_DATA.find(
    (item) =>
      item.slug.toLowerCase() === normalized ||
      item.legacySlugs?.some((s) => s.toLowerCase() === normalized)
  );
}


