export interface IntegrationBenefit {
  title: string;
  desc: string;
}

export type IntegrationCategory =
  | 'All'
  | 'AI'
  | 'Communication'
  | 'Productivity'
  | 'Automation'
  | 'CMS'
  | 'Marketing & Analytics'
  | 'Payments';

export interface IntegrationItem {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  installUrl: string;
  logoUrl: string;
  logoSvg?: string;
  whatIsHeading: string;
  whatIsText: string;
  benefitsHeading: string;
  benefits: IntegrationBenefit[];
  howToConnectHeading: string;
  howToConnectSteps: string[];
  popularTools: string[];
}

export const INTEGRATIONS_DATA: IntegrationItem[] = [
  {
    "slug": "paypal",
    "name": "PayPal",
    "category": "Payments",
    "shortDescription": "Process payments globally with trusted checkout solutions.",
    "installUrl": "https://paypal.com",
    "whatIsHeading": "What is PayPal?",
    "whatIsText": "PayPal is a global online payment platform that enables businesses and individuals to send, receive, and manage payments securely over the internet. Companies use PayPal to accept customer payments, process transactions, manage subscriptions, and facilitate international commerce. The platform supports multiple payment methods, including credit cards, debit cards, bank accounts, and PayPal balances. With its trusted reputation, developer-friendly APIs, and worldwide reach, PayPal helps businesses simplify payment processing while providing customers with a fast and secure checkout experience.",
    "benefitsHeading": "Benefits of PayPal",
    "benefits": [
      {
        "title": "Global Payment Acceptance",
        "desc": "Accept payments from customers in multiple countries and currencies."
      },
      {
        "title": "Secure Transactions",
        "desc": "Protects businesses and customers with advanced security measures."
      },
      {
        "title": "Easy Checkout Experience",
        "desc": "Provides a fast and trusted payment process for users."
      },
      {
        "title": "Subscription Management",
        "desc": "Supports recurring billing and subscription-based services."
      },
      {
        "title": "Developer-Friendly APIs",
        "desc": "Easily integrates with websites, applications, and business systems."
      }
    ],
    "howToConnectHeading": "How to Connect PayPal",
    "howToConnectSteps": [
      "Create a PayPal Business account.",
      "Access the PayPal Developer Dashboard.",
      "Generate your API credentials.",
      "Open your integration settings.",
      "Paste the API credentials and save the connection.",
      "Test the integration to ensure payments are processed successfully."
    ],
    "popularTools": [
      "google-calendar",
      "outlook",
      "teams"
    ],
    "logoUrl": "https://unavatar.io/paypal.com"
  },
  {
    "slug": "razorpay",
    "name": "Razorpay",
    "category": "Payments",
    "shortDescription": "Accept payments and manage transactions across India.",
    "installUrl": "https://razorpay.com",
    "whatIsHeading": "What is Razorpay?",
    "whatIsText": "Razorpay is a leading payment gateway and financial technology platform that helps businesses accept, process, and manage online payments. It supports a wide range of payment methods, including credit cards, debit cards, UPI, net banking, wallets, and recurring payments. Businesses use Razorpay to streamline payment collection, automate financial operations, manage subscriptions, and improve the customer checkout experience. With robust APIs, advanced security standards, and seamless integrations, Razorpay enables businesses of all sizes to handle transactions efficiently while providing customers with fast and secure payment options.",
    "benefitsHeading": "Benefits of Razorpay",
    "benefits": [
      {
        "title": "Multiple Payment Methods",
        "desc": "Accept payments through UPI, cards, wallets, and net banking."
      },
      {
        "title": "Fast and Secure Transactions",
        "desc": "Ensures reliable payment processing with advanced security measures."
      },
      {
        "title": "Subscription Support",
        "desc": "Easily manage recurring billing and subscription payments."
      },
      {
        "title": "Developer-Friendly APIs",
        "desc": "Integrates seamlessly with websites, apps, and business systems."
      },
      {
        "title": "Business Growth Tools",
        "desc": "Access payment analytics, automation, and financial management features."
      }
    ],
    "howToConnectHeading": "How to Connect Razorpay",
    "howToConnectSteps": [
      "Create a Razorpay account.",
      "Access the Razorpay Dashboard.",
      "Generate your API Key ID and Key Secret.",
      "Open your integration settings.",
      "Paste the API credentials into the required fields.",
      "Save the configuration and test the connection."
    ],
    "popularTools": [
      "google-calendar",
      "outlook",
      "teams"
    ],
    "logoUrl": "/logos/razorpay.svg"
  },
  {
    "slug": "wise",
    "name": "Wise",
    "category": "Payments",
    "shortDescription": "Send and receive international payments with low fees.",
    "installUrl": "https://wise.com",
    "whatIsHeading": "What is Wise?",
    "whatIsText": "Wise is a global financial technology platform that enables businesses and individuals to send, receive, and manage international payments quickly and cost-effectively. Formerly known as TransferWise, Wise offers transparent exchange rates, low transfer fees, and multi-currency account capabilities. Businesses use Wise to pay international suppliers, receive payments from global customers, manage multiple currencies, and simplify cross-border transactions. With its reliable infrastructure and developer-friendly APIs, Wise helps organizations reduce payment costs while making international money transfers faster, easier, and more transparent.",
    "benefitsHeading": "Benefits of Wise",
    "benefits": [
      {
        "title": "Low-Cost International Transfers",
        "desc": "Send money abroad with transparent and competitive fees."
      },
      {
        "title": "Real Exchange Rates",
        "desc": "Access market exchange rates without hidden markups."
      },
      {
        "title": "Multi-Currency Accounts",
        "desc": "Hold, manage, and convert multiple currencies in one account."
      },
      {
        "title": "Global Payment Support",
        "desc": "Send and receive payments across numerous countries worldwide."
      },
      {
        "title": "Easy Business Integration",
        "desc": "Connect Wise with applications and financial workflows using APIs."
      }
    ],
    "howToConnectHeading": "How to Connect Wise",
    "howToConnectSteps": [
      "Create a Wise Business account.",
      "Access the Wise Developer Dashboard.",
      "Generate your API token or credentials.",
      "Open your integration settings.",
      "Paste the API credentials into the required fields.",
      "Save the configuration and test the connection."
    ],
    "popularTools": [
      "google-calendar",
      "outlook",
      "teams"
    ],
    "logoUrl": "/logos/wise.svg"
  },
  {
    "slug": "stripe",
    "name": "Stripe",
    "category": "Payments",
    "shortDescription": "Accept online payments and manage subscriptions securely.",
    "installUrl": "https://stripe.com",
    "whatIsHeading": "What is Stripe?",
    "whatIsText": "Stripe is a leading online payment processing platform that helps businesses accept, manage, and automate payments across the internet. Companies use Stripe to process one-time purchases, subscriptions, invoices, and international transactions through websites, mobile apps, and digital products. The platform supports a wide range of payment methods while providing advanced tools for fraud prevention, billing, financial reporting, and payment automation. With powerful APIs and developer-friendly infrastructure, Stripe enables businesses of all sizes to build seamless payment experiences and scale their operations globally.",
    "benefitsHeading": "Benefits of Stripe",
    "benefits": [
      {
        "title": "Global Payment Processing",
        "desc": "Accept payments from customers worldwide using multiple currencies."
      },
      {
        "title": "Subscription Management",
        "desc": "Easily handle recurring billing and subscription-based services."
      },
      {
        "title": "Advanced Security Features",
        "desc": "Protect transactions with fraud detection and secure payment processing."
      },
      {
        "title": "Developer-Friendly APIs",
        "desc": "Integrate payments quickly into websites, apps, and platforms."
      },
      {
        "title": "Scalable Infrastructure",
        "desc": "Supports businesses from startups to large enterprises."
      }
    ],
    "howToConnectHeading": "How to Connect Stripe",
    "howToConnectSteps": [
      "Create a Stripe account.",
      "Access the Stripe Dashboard.",
      "Generate your Publishable Key and Secret Key.",
      "Open your integration settings.",
      "Paste the API credentials into the required fields.",
      "Save the configuration and test the connection."
    ],
    "popularTools": [
      "google-calendar",
      "outlook",
      "teams"
    ],
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg"
  },
  {
    "slug": "pipedrive",
    "name": "Pipedrive",
    "category": "CMS",
    "shortDescription": "Manage leads, track deals, and automate sales workflows efficiently.",
    "installUrl": "https://pipedrive.com",
    "whatIsHeading": "What is Pipedrive?",
    "whatIsText": "Pipedrive is a customer relationship management (CRM) platform designed to help sales teams manage leads, track deals, and streamline their sales processes. Businesses use Pipedrive to organize customer interactions, monitor sales pipelines, automate repetitive tasks, and improve team productivity. Its visual pipeline interface provides clear visibility into every stage of the sales cycle, helping teams prioritize opportunities and close deals more effectively. With integrations, reporting tools, and workflow automation capabilities, Pipedrive enables organizations to build stronger customer relationships and drive consistent revenue growth.",
    "benefitsHeading": "Benefits of Pipedrive",
    "benefits": [
      {
        "title": "Visual Sales Pipeline",
        "desc": "Track deals and opportunities through every stage of the sales process."
      },
      {
        "title": "Lead Management",
        "desc": "Organize and manage leads efficiently from a centralized workspace."
      },
      {
        "title": "Workflow Automation",
        "desc": "Automate repetitive sales tasks and follow-up activities."
      },
      {
        "title": "Advanced Reporting",
        "desc": "Gain insights into sales performance with detailed analytics and reports."
      },
      {
        "title": "Easy Integrations",
        "desc": "Connect with communication, marketing, and productivity tools."
      }
    ],
    "howToConnectHeading": "How to Connect Pipedrive",
    "howToConnectSteps": [
      "Create a Pipedrive account.",
      "Access your Pipedrive settings.",
      "Generate an API token.",
      "Open your integration settings.",
      "Paste the API token into the required field.",
      "Save the configuration and test the connection."
    ],
    "popularTools": [
      "google-calendar",
      "outlook",
      "teams"
    ],
    "logoUrl": "https://unavatar.io/pipedrive.com"
  },
  {
    "slug": "zoho-crm",
    "name": "Zoho CRM",
    "category": "CMS",
    "shortDescription": "Streamline customer engagement and sales operations.",
    "installUrl": "https://zoho.com/crm",
    "whatIsHeading": "What is Zoho CRM?",
    "whatIsText": "Zoho CRM is a customer relationship management platform that helps businesses manage leads, customer interactions, sales activities, and business relationships from a centralized workspace. Organizations use Zoho CRM to track prospects, automate sales processes, manage customer data, and improve team productivity. The platform provides tools for lead generation, pipeline management, workflow automation, reporting, and customer engagement. With flexible customization options and seamless integrations, Zoho CRM enables businesses to streamline operations, strengthen customer relationships, and drive sustainable revenue growth.",
    "benefitsHeading": "Benefits of Zoho CRM",
    "benefits": [
      {
        "title": "Lead Management",
        "desc": "Capture, organize, and track leads throughout the sales journey."
      },
      {
        "title": "Sales Automation",
        "desc": "Automate repetitive tasks and streamline sales workflows."
      },
      {
        "title": "Customer Insights",
        "desc": "Access detailed customer data and interaction history."
      },
      {
        "title": "Advanced Reporting",
        "desc": "Monitor performance with real-time analytics and dashboards."
      },
      {
        "title": "Seamless Integrations",
        "desc": "Connect with productivity, marketing, and communication tools."
      }
    ],
    "howToConnectHeading": "How to Connect Zoho CRM",
    "howToConnectSteps": [
      "Create a Zoho CRM account.",
      "Access the Zoho Developer Console.",
      "Generate the required API credentials.",
      "Open your integration settings.",
      "Paste the API credentials into the required fields.",
      "Save the configuration and test the connection."
    ],
    "popularTools": [
      "google-calendar",
      "outlook",
      "teams"
    ],
    "logoUrl": "https://www.zoho.com/sites/zweb/images/ogimage/zoho-logo.png"
  },
  {
    "slug": "salesforce",
    "name": "Salesforce",
    "category": "CMS",
    "shortDescription": "Connect enterprise CRM data and customer management tools.",
    "installUrl": "https://salesforce.com",
    "whatIsHeading": "What is Salesforce?",
    "whatIsText": "Salesforce is a leading customer relationship management (CRM) platform that helps businesses manage customer interactions, sales activities, marketing campaigns, and support operations from a single centralized system. Organizations use Salesforce to track leads, manage opportunities, automate workflows, and gain valuable insights into customer behavior throughout the sales cycle. The platform provides powerful tools for sales management, customer engagement, reporting, and business automation, helping teams work more efficiently and make data-driven decisions. With its cloud-based infrastructure, extensive customization options, and robust integration ecosystem, Salesforce enables businesses of all sizes to streamline operations, strengthen customer relationships, and drive long-term growth.",
    "benefitsHeading": "Benefits of Salesforce",
    "benefits": [
      {
        "title": "Comprehensive CRM Platform",
        "desc": "Manage sales, marketing, customer service, and business operations from a single platform."
      },
      {
        "title": "Sales Automation",
        "desc": "Automate repetitive tasks, lead assignments, and follow-up activities to improve team productivity."
      },
      {
        "title": "Advanced Analytics",
        "desc": "Access real-time reports and dashboards to make informed business decisions."
      },
      {
        "title": "Scalable Infrastructure",
        "desc": "Support growing teams and complex business processes with enterprise-grade reliability."
      },
      {
        "title": "Extensive Integrations",
        "desc": "Connect Salesforce with hundreds of third-party applications and business tools."
      }
    ],
    "howToConnectHeading": "How to Connect Salesforce",
    "howToConnectSteps": [
      "Create a Salesforce account.",
      "Access the Salesforce Developer Console.",
      "Generate the required API credentials.",
      "Open your integration settings.",
      "Paste the API credentials into the required fields.",
      "Save the configuration and test the connection."
    ],
    "popularTools": [
      "google-calendar",
      "outlook",
      "teams"
    ],
    "logoUrl": "https://unavatar.io/salesforce.com"
  },
  {
    "slug": "hubspot",
    "name": "HubSpot",
    "category": "CMS",
    "shortDescription": "Manage customer relationships, marketing, and sales in one platform.",
    "installUrl": "https://hubspot.com",
    "whatIsHeading": "What is HubSpot?",
    "whatIsText": "HubSpot is a customer relationship management (CRM) platform that helps businesses manage marketing, sales, customer service, and business operations from a single connected system. Organizations use HubSpot to attract leads, nurture customer relationships, automate workflows, track sales activities, and improve customer engagement. The platform offers powerful tools for email marketing, lead management, pipeline tracking, reporting, and automation, making it easier for teams to collaborate and grow revenue. With its user-friendly interface, extensive integrations, and scalable features, HubSpot enables businesses of all sizes to streamline processes, improve customer experiences, and drive sustainable growth.",
    "benefitsHeading": "Benefits of HubSpot",
    "benefits": [
      {
        "title": "All-in-One CRM Platform",
        "desc": "Manage marketing, sales, customer service, and operations from one centralized workspace."
      },
      {
        "title": "Lead Management",
        "desc": "Capture, organize, and track leads throughout the entire customer journey."
      },
      {
        "title": "Marketing Automation",
        "desc": "Automate email campaigns, follow-ups, and customer engagement activities."
      },
      {
        "title": "Advanced Reporting",
        "desc": "Monitor business performance with detailed analytics and customizable dashboards."
      },
      {
        "title": "Seamless Integrations",
        "desc": "Connect HubSpot with popular business, communication, and productivity tools."
      }
    ],
    "howToConnectHeading": "How to Connect HubSpot",
    "howToConnectSteps": [
      "Create a HubSpot account.",
      "Access your HubSpot Developer or Account Settings.",
      "Generate the required API credentials or create a private app.",
      "Open your integration settings.",
      "Paste the API credentials into the required fields.",
      "Save the configuration and test the connection."
    ],
    "popularTools": [
      "google-calendar",
      "outlook",
      "teams"
    ],
    "logoUrl": "/logos/hubspot.svg"
  },
  {
    "slug": "openai",
    "name": "ChatGPT",
    "category": "AI",
    "shortDescription": "Connect ChatGPT and advanced AI models to automate tasks and generate intelligent content.",
    "installUrl": "https://chatgpt.com",
    "whatIsHeading": "What is ChatGPT?",
    "whatIsText": "ChatGPT is a leading artificial intelligence platform developed by OpenAI that provides powerful language, reasoning, and generative AI capabilities through interactive conversational workflows and APIs. Businesses use ChatGPT to build AI-powered assistants, automate repetitive tasks, generate content, answer customer inquiries, analyze complex data, and streamline operations. With scalable infrastructure, advanced language understanding, and continuous model improvements, ChatGPT enables organizations to integrate AI capabilities into their products and workflows while maintaining reliability, performance, and flexibility.",
    "benefitsHeading": "Benefits of ChatGPT",
    "benefits": [
      {
        "title": "Advanced AI Models",
        "desc": "Access state-of-the-art language and reasoning capabilities."
      },
      {
        "title": "Content Generation",
        "desc": "Create articles, emails, social posts, and documentation quickly."
      },
      {
        "title": "Workflow Automation",
        "desc": "Reduce manual tasks with intelligent automation."
      },
      {
        "title": "Developer Friendly APIs",
        "desc": "Easy integration into existing applications."
      },
      {
        "title": "Scalable Infrastructure",
        "desc": "Supports projects from startups to enterprise solutions."
      }
    ],
    "howToConnectHeading": "How to Connect ChatGPT",
    "howToConnectSteps": [
      "Create or log in to your OpenAI / ChatGPT account.",
      "Access your API keys or workspace integration settings.",
      "Generate the required API credentials.",
      "Open your integration settings.",
      "Paste the API credentials into the required field.",
      "Save the configuration and test the connection."
    ],
    "popularTools": [
      "google-calendar",
      "outlook",
      "teams"
    ],
    "logoUrl": "https://unavatar.io/openai.com"
  },
  {
    "slug": "anthropic",
    "name": "Anthropic",
    "category": "AI",
    "shortDescription": "Integrate powerful AI assistants for safer and more reliable workflows.",
    "installUrl": "https://anthropic.com",
    "whatIsHeading": "What is Anthropic?",
    "whatIsText": "Anthropic is an artificial intelligence company that develops advanced AI models designed to help businesses automate tasks, improve productivity, and build intelligent applications. Its Claude family of models is known for strong reasoning, content generation, data analysis, and conversational capabilities. Businesses use Anthropic to create AI assistants, automate customer support, generate content, analyze information, and streamline workflows. With a focus on reliability, safety, and scalability, Anthropic provides developers and organizations with powerful tools for integrating AI into products and operations while maintaining performance and efficiency.",
    "benefitsHeading": "Benefits of Anthropic",
    "benefits": [
      {
        "title": "Strong Reasoning Capabilities",
        "desc": "Handles complex tasks, multi-step workflows, and advanced problem-solving with high accuracy."
      },
      {
        "title": "Reliable AI Responses",
        "desc": "Produces consistent and helpful outputs across various business and productivity use cases."
      },
      {
        "title": "Enterprise",
        "desc": "Ready Platform - Built to support organizations that require scalability, security, and performance."
      },
      {
        "title": "Easy API Integration",
        "desc": "Connects seamlessly with applications, workflows, and third-party tools."
      },
      {
        "title": "Increased Productivity",
        "desc": "Automates repetitive tasks and helps teams work faster and more efficiently."
      }
    ],
    "howToConnectHeading": "How to Connect Anthropic",
    "howToConnectSteps": [
      "Create an Anthropic account.",
      "Generate an API key from your dashboard.",
      "Open your integration settings.",
      "Paste the API key into the required field.",
      "Save the configuration and test the connection."
    ],
    "popularTools": [
      "google-calendar",
      "outlook",
      "teams"
    ],
    "logoUrl": "/logos/anthropic.svg"
  },
  {
    "slug": "clickup",
    "name": "ClickUp",
    "category": "Productivity",
    "shortDescription": "Manage projects and tasks with automated productivity workflows.",
    "installUrl": "https://clickup.com",
    "whatIsHeading": "What is ClickUp?",
    "whatIsText": "ClickUp is a project management and productivity platform that helps teams organize tasks, manage projects, and collaborate more effectively. Businesses use ClickUp to plan work, track progress, manage goals, and streamline operations from a centralized workspace. The platform offers customizable workflows, task management tools, automation features, and reporting capabilities that improve visibility and productivity. With flexible project management solutions and extensive integrations, ClickUp helps teams stay organized and deliver work more efficiently.",
    "benefitsHeading": "Benefits of ClickUp",
    "benefits": [
      {
        "title": "Task Management",
        "desc": "Organize and track work across projects and teams."
      },
      {
        "title": "Custom Workflows",
        "desc": "Adapt processes to fit unique business requirements."
      },
      {
        "title": "Team Collaboration",
        "desc": "Improve communication and project visibility."
      },
      {
        "title": "Goal Tracking",
        "desc": "Monitor objectives and team performance."
      },
      {
        "title": "Workflow Automation",
        "desc": "Reduce manual effort with automated processes."
      }
    ],
    "howToConnectHeading": "How to Connect ClickUp",
    "howToConnectSteps": [
      "Create a ClickUp account.",
      "Generate an API token from your account settings.",
      "Open your integration settings.",
      "Paste the API token into the required field.",
      "Save and verify the connection."
    ],
    "popularTools": [
      "google-calendar",
      "outlook",
      "teams"
    ],
    "logoUrl": "https://unavatar.io/clickup.com"
  },
  {
    "slug": "discord",
    "name": "Discord",
    "category": "Communication",
    "shortDescription": "Connect communities and teams through Discord automation.",
    "installUrl": "https://discord.com",
    "whatIsHeading": "What is Discord?",
    "whatIsText": "Discord is a communication platform that combines text messaging, voice calls, video meetings, and community management features into a single workspace. Businesses, creators, and communities use Discord to collaborate, host discussions, and engage with members through dedicated servers and channels. The platform supports integrations, automation tools, and customizable permissions, making it suitable for team collaboration and community building. Discord helps organizations foster engagement while maintaining organized communication.",
    "benefitsHeading": "Benefits of Discord",
    "benefits": [
      {
        "title": "Community Engagement",
        "desc": "Build and manage active communities."
      },
      {
        "title": "Voice and Video Communication",
        "desc": "Host meetings and discussions with ease."
      },
      {
        "title": "Customizable Servers",
        "desc": "Organize conversations with dedicated channels."
      },
      {
        "title": "Automation Support",
        "desc": "Connect bots and workflow automation tools."
      },
      {
        "title": "Cross-Platform Access",
        "desc": "Available on desktop, mobile, and web."
      }
    ],
    "howToConnectHeading": "How to Connect Discord",
    "howToConnectSteps": [
      "Create or access a Discord server.",
      "Generate a webhook or bot token.",
      "Open your integration settings.",
      "Paste the required credentials.",
      "Save and test the connection."
    ],
    "popularTools": [
      "google-calendar",
      "outlook",
      "teams"
    ],
    "logoUrl": "/logos/discord.svg"
  },
  {
    "slug": "google-drive",
    "name": "Google Drive",
    "category": "Productivity",
    "shortDescription": "Store, organize, share, and collaborate on files in Google\u2019s cloud storage platform.",
    "installUrl": "https://drive.google.com",
    "whatIsHeading": "What is Google Drive?",
    "whatIsText": "Google Drive is a cloud storage service for uploading, organizing, sharing, and accessing files. It stores Google Docs, Sheets, Slides, PDFs, images, videos, Microsoft Office files, and other supported formats. Individuals, businesses, schools, and teams use Drive to manage files and collaborate online. Drive provides browser, desktop synchronization, and mobile access. Developers can manage files, search content, detect changes, and update permissions through the Drive API.",
    "benefitsHeading": "Benefits of Google Drive",
    "benefits": [
      {
        "title": "Centralized storage",
        "desc": "Keep documents and other files accessible from a cloud-based workspace."
      },
      {
        "title": "Real-time collaboration",
        "desc": "Share files and work together in connected Google applications."
      },
      {
        "title": "Permission management",
        "desc": "Control whether users can view, comment on, or edit files."
      },
      {
        "title": "Format compatibility",
        "desc": "Store and work with numerous file types, including Microsoft Office formats."
      },
      {
        "title": "Automation and integration",
        "desc": "Connect Drive with Apps Script, Workspace APIs, and third-party applications."
      }
    ],
    "howToConnectHeading": "How to Connect Google Drive",
    "howToConnectSteps": [
      "Create or sign in to a Google account or Google Workspace account.",
      "Open Drive in a browser or install Google Drive for desktop or mobile.",
      "Upload files or create folders and Google Workspace documents.",
      "Share files or folders and configure viewer, commenter, or editor permissions.",
      "For automation, create a Google Cloud project, enable the Drive API, and configure OAuth credentials."
    ],
    "popularTools": [
      "google-calendar",
      "outlook",
      "teams"
    ],
    "logoUrl": "https://ssl.gstatic.com/images/branding/product/2x/drive_2020q4_48dp.png"
  },
  {
    "slug": "google-gemini",
    "name": "Google Gemini",
    "category": "AI",
    "shortDescription": "Access Google's multimodal AI capabilities for advanced automation.",
    "installUrl": "https://gemini.google.com",
    "whatIsHeading": "What is Google Gemini?",
    "whatIsText": "Google Gemini is an advanced artificial intelligence platform developed by Google that enables businesses and developers to build intelligent applications, automate workflows, and generate content using powerful AI models. Gemini supports a wide range of capabilities, including text generation, data analysis, coding assistance, reasoning, and multimodal understanding. Organizations use Google Gemini to enhance productivity, improve customer experiences, automate repetitive tasks, and develop AI-powered solutions. With seamless integration into Google's ecosystem and scalable infrastructure, Gemini helps businesses leverage artificial intelligence to streamline operations and drive innovation.",
    "benefitsHeading": "Benefits of Google Gemini",
    "benefits": [
      {
        "title": "Advanced AI Capabilities",
        "desc": "Generate content, analyze data, and solve complex tasks using powerful AI models."
      },
      {
        "title": "Multimodal Intelligence",
        "desc": "Understand and process text, images, code, and other content types."
      },
      {
        "title": "Google Ecosystem Integration",
        "desc": "Connect seamlessly with Google Cloud and other Google services."
      },
      {
        "title": "Developer-Friendly APIs",
        "desc": "Build and deploy AI-powered applications with flexible integration options."
      },
      {
        "title": "Enhanced Productivity",
        "desc": "Automate workflows and accelerate business processes with intelligent automation."
      }
    ],
    "howToConnectHeading": "How to Connect Google Gemini",
    "howToConnectSteps": [
      "Create a Google AI account.",
      "Access Google AI Studio or Google Cloud Console.",
      "Generate the required API key.",
      "Open your integration settings.",
      "Paste the API key into the required field.",
      "Save the configuration and test the connection."
    ],
    "popularTools": [
      "google-calendar",
      "outlook",
      "teams"
    ],
    "logoUrl": "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg"
  },
  {
    "slug": "make",
    "name": "Make",
    "category": "Automation",
    "shortDescription": "Build advanced visual automations between apps and services.",
    "installUrl": "https://make.com",
    "whatIsHeading": "What is Make?",
    "whatIsText": "Make is a visual automation platform that enables businesses to connect applications and automate workflows without coding. Organizations use Make to create powerful automated processes that transfer data, trigger actions, and synchronize information across multiple systems. Its visual workflow builder makes it easy to design, manage, and optimize complex automations while improving operational efficiency. With support for thousands of applications and advanced automation features, Make helps businesses reduce manual work and streamline daily operations.",
    "benefitsHeading": "Benefits of Make",
    "benefits": [
      {
        "title": "Visual Workflow Builder",
        "desc": "Design automations with an intuitive drag-and-drop interface."
      },
      {
        "title": "Powerful Integrations",
        "desc": "Connect hundreds of business applications and services."
      },
      {
        "title": "Process Automation",
        "desc": "Eliminate repetitive tasks and improve efficiency."
      },
      {
        "title": "Real-Time Data Transfer",
        "desc": "Synchronize information across connected systems."
      },
      {
        "title": "Scalable Workflows",
        "desc": "Support simple automations and advanced business processes."
      }
    ],
    "howToConnectHeading": "How to Connect Make",
    "howToConnectSteps": [
      "Create a Make account.",
      "Access your Make Dashboard.",
      "Generate the required API credentials.",
      "Open your integration settings.",
      "Paste the credentials into the required fields.",
      "Save and test the connection."
    ],
    "popularTools": [
      "google-calendar",
      "outlook",
      "teams"
    ],
    "logoUrl": "/logos/make.svg"
  },
  {
    "slug": "n8n",
    "name": "n8n",
    "category": "Automation",
    "shortDescription": "Create flexible workflow automations with full customization.",
    "installUrl": "https://n8n.io",
    "whatIsHeading": "What is n8n?",
    "whatIsText": "n8n is an open-source workflow automation platform that allows businesses to connect applications, automate tasks, and build custom workflows with flexibility and control. Organizations use n8n to automate repetitive processes, synchronize data between systems, and streamline operations without extensive development work. The platform supports hundreds of integrations and provides advanced workflow customization capabilities for technical and non-technical teams alike. With self-hosting options and scalable automation features, n8n helps businesses improve efficiency while maintaining full control over their data and workflows.",
    "benefitsHeading": "Benefits of n8n",
    "benefits": [
      {
        "title": "Open-Source Platform",
        "desc": "Customize and self-host workflows with full control."
      },
      {
        "title": "Advanced Workflow Automation",
        "desc": "Build complex automations across multiple applications."
      },
      {
        "title": "Extensive Integrations",
        "desc": "Connect with popular business and productivity tools."
      },
      {
        "title": "Flexible Customization",
        "desc": "Create workflows tailored to unique business needs."
      },
      {
        "title": "Data Control",
        "desc": "Maintain ownership and security of your workflow data."
      }
    ],
    "howToConnectHeading": "How to Connect n8n",
    "howToConnectSteps": [
      "Create or access your n8n workspace.",
      "Generate the required API credentials.",
      "Open your integration settings.",
      "Paste the API credentials into the required fields.",
      "Save the configuration and test the connection."
    ],
    "popularTools": [
      "google-calendar",
      "outlook",
      "teams"
    ],
    "logoUrl": "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/n8n.svg"
  },
  {
    "slug": "notion",
    "name": "Notion",
    "category": "Productivity",
    "shortDescription": "Sync documents, databases, and knowledge across your workspace.",
    "installUrl": "https://notion.so",
    "whatIsHeading": "What is Notion?",
    "whatIsText": "Notion is an all-in-one workspace that combines note-taking, documentation, project management, and collaboration tools into a single platform. Organizations use Notion to manage knowledge bases, track projects, organize documents, and collaborate with team members in real time. Its flexible structure allows businesses to create customized workflows, databases, and workspaces that support various operational needs. With powerful collaboration features and seamless integrations, Notion helps teams stay organized and productive.",
    "benefitsHeading": "Benefits of Notion",
    "benefits": [
      {
        "title": "Knowledge Management",
        "desc": "Centralize company information and documentation."
      },
      {
        "title": "Flexible Workspaces",
        "desc": "Customize pages, databases, and workflows."
      },
      {
        "title": "Real-Time Collaboration",
        "desc": "Work together efficiently across teams."
      },
      {
        "title": "Project Organization",
        "desc": "Manage tasks and projects from a single platform."
      },
      {
        "title": "Integration Support",
        "desc": "Connect with popular productivity and business tools."
      }
    ],
    "howToConnectHeading": "How to Connect Notion",
    "howToConnectSteps": [
      "Create a Notion account.",
      "Generate an integration token.",
      "Open your integration settings.",
      "Paste the token into the required field.",
      "Save and test the connection."
    ],
    "popularTools": [
      "google-calendar",
      "outlook",
      "teams"
    ],
    "logoUrl": "https://www.notion.so/images/logo-ios.png"
  },
  {
    "slug": "perplexity",
    "name": "Perplexity",
    "category": "AI",
    "shortDescription": "Enhance research workflows with AI-powered search and answers.",
    "installUrl": "https://perplexity.ai",
    "whatIsHeading": "What is Perplexity?",
    "whatIsText": "Perplexity is an AI-powered search and research platform that helps users discover information, answer questions, and gather insights through conversational interactions. Businesses and professionals use Perplexity to conduct research, analyze information, and make informed decisions more efficiently. By combining artificial intelligence with web-based information retrieval, Perplexity delivers accurate and context-aware responses supported by relevant sources. Its intuitive interface and research capabilities help users save time and improve productivity.",
    "benefitsHeading": "Benefits of Perplexity",
    "benefits": [
      {
        "title": "AI-Powered Research",
        "desc": "Find answers and insights quickly through conversational search."
      },
      {
        "title": "Real-Time Information",
        "desc": "Access current information from multiple sources."
      },
      {
        "title": "Source Transparency",
        "desc": "Review references and supporting information."
      },
      {
        "title": "Faster Decision-Making",
        "desc": "Reduce research time and improve efficiency."
      },
      {
        "title": "User-Friendly Experience",
        "desc": "Search naturally using conversational queries."
      }
    ],
    "howToConnectHeading": "How to Connect Perplexity",
    "howToConnectSteps": [
      "Create a Perplexity account.",
      "Generate API credentials from your dashboard.",
      "Open your integration settings.",
      "Paste the credentials into the required fields.",
      "Save and test the connection."
    ],
    "popularTools": [
      "google-calendar",
      "outlook",
      "teams"
    ],
    "logoUrl": "/logos/perplexity.svg"
  },
  {
    "slug": "pipedream",
    "name": "Pipedream",
    "category": "Automation",
    "shortDescription": "Automate backend workflows using APIs and event triggers.",
    "installUrl": "https://pipedream.com",
    "whatIsHeading": "What is Pipedream?",
    "whatIsText": "Pipedream is an integration and workflow automation platform that enables developers and businesses to connect applications, automate processes, and build event-driven workflows. Organizations use Pipedream to move data between systems, automate tasks, and create custom integrations without managing complex infrastructure. The platform supports thousands of APIs and applications, making it easy to build scalable automations and workflows. With flexible development tools and automation capabilities, Pipedream helps teams save time and streamline operations.",
    "benefitsHeading": "Benefits of Pipedream",
    "benefits": [
      {
        "title": "Workflow Automation",
        "desc": "Automate tasks and business processes efficiently."
      },
      {
        "title": "API Connectivity",
        "desc": "Connect with thousands of applications and services."
      },
      {
        "title": "Developer-Friendly Platform",
        "desc": "Build custom workflows with minimal setup."
      },
      {
        "title": "Event-Driven Architecture",
        "desc": "Trigger actions based on real-time events."
      },
      {
        "title": "Scalable Infrastructure",
        "desc": "Run workflows reliably as business needs grow."
      }
    ],
    "howToConnectHeading": "How to Connect Pipedream",
    "howToConnectSteps": [
      "Create a Pipedream account.",
      "Access your workspace settings.",
      "Generate the required API credentials.",
      "Open your integration settings.",
      "Paste the credentials and save the connection."
    ],
    "popularTools": [
      "google-calendar",
      "outlook",
      "teams"
    ],
    "logoUrl": "/logos/pipedream.svg"
  },
  {
    "slug": "slack",
    "name": "Slack",
    "category": "Communication",
    "shortDescription": "Send notifications and collaborate with your team in real time.",
    "installUrl": "https://slack.com",
    "whatIsHeading": "What is Slack?",
    "whatIsText": "Slack is a team communication and collaboration platform that helps organizations streamline conversations, share information, and improve workplace productivity. Businesses use Slack to communicate through channels, direct messages, and integrated workflows, making it easier for teams to stay connected and aligned. The platform supports file sharing, notifications, automation, and integrations with popular business tools, allowing teams to centralize communication and reduce reliance on email. With real-time messaging and collaboration features, Slack helps organizations improve efficiency and accelerate decision-making.",
    "benefitsHeading": "Benefits of Slack",
    "benefits": [
      {
        "title": "Centralized Communication",
        "desc": "Keep team conversations organized in dedicated channels."
      },
      {
        "title": "Real-Time Collaboration",
        "desc": "Enable instant communication and faster decision-making."
      },
      {
        "title": "Powerful Integrations",
        "desc": "Connect with productivity, CRM, and project management tools."
      },
      {
        "title": "File Sharing",
        "desc": "Share documents, images, and resources directly within conversations."
      },
      {
        "title": "Workflow Automation",
        "desc": "Automate notifications and routine business processes."
      }
    ],
    "howToConnectHeading": "How to Connect Slack",
    "howToConnectSteps": [
      "Create a Slack account or workspace.",
      "Access your Slack App Dashboard.",
      "Generate the required API credentials.",
      "Open your integration settings.",
      "Paste the credentials and save the connection."
    ],
    "popularTools": [
      "google-calendar",
      "outlook",
      "teams"
    ],
    "logoUrl": "/logos/slack.svg"
  },
  {
    "slug": "telegram",
    "name": "Telegram",
    "category": "Communication",
    "shortDescription": "Deliver alerts and updates directly through Telegram channels.",
    "installUrl": "https://telegram.org",
    "whatIsHeading": "What is Telegram?",
    "whatIsText": "Telegram is a cloud-based messaging platform that enables businesses and communities to communicate, share updates, and automate interactions. Organizations use Telegram for customer engagement, team communication, notifications, and community management through groups, channels, and bots. The platform offers fast messaging, secure communication, and extensive automation capabilities that help businesses connect with users efficiently. With support for large communities and custom bots, Telegram is a flexible solution for communication and engagement.",
    "benefitsHeading": "Benefits of Telegram",
    "benefits": [
      {
        "title": "Secure Communication",
        "desc": "Protect conversations with advanced security features."
      },
      {
        "title": "Large Community Support",
        "desc": "Manage groups and channels with large audiences."
      },
      {
        "title": "Bot Automation",
        "desc": "Automate notifications and customer interactions."
      },
      {
        "title": "Cross-Platform Access",
        "desc": "Use Telegram on mobile, desktop, and web."
      },
      {
        "title": "Fast Messaging",
        "desc": "Deliver messages instantly across the globe."
      }
    ],
    "howToConnectHeading": "How to Connect Telegram",
    "howToConnectSteps": [
      "Create a Telegram account.",
      "Create a bot using BotFather.",
      "Generate a bot access token.",
      "Open your integration settings.",
      "Paste the token and save the connection."
    ],
    "popularTools": [
      "google-calendar",
      "outlook",
      "teams"
    ],
    "logoUrl": "https://telegram.org/img/t_logo.png"
  },
  {
    "slug": "trello",
    "name": "Trello",
    "category": "Productivity",
    "shortDescription": "Organize projects and automate board management tasks.",
    "installUrl": "https://trello.com",
    "whatIsHeading": "What is Trello?",
    "whatIsText": "Trello is a visual project management and collaboration platform that helps teams organize tasks, manage projects, and track progress using boards, lists, and cards. Businesses use Trello to plan workflows, assign responsibilities, monitor deadlines, and improve team collaboration. Its intuitive drag-and-drop interface makes it easy to manage projects of any size, from simple task tracking to complex business operations. With automation features, customizable workflows, and integrations with popular business tools, Trello helps teams stay organized, increase productivity, and deliver projects more efficiently.",
    "benefitsHeading": "Benefits of Trello",
    "benefits": [
      {
        "title": "Visual Project Management",
        "desc": "Organize tasks and projects using intuitive boards, lists, and cards."
      },
      {
        "title": "Team Collaboration",
        "desc": "Improve communication and coordination across teams."
      },
      {
        "title": "Customizable Workflows",
        "desc": "Adapt boards and processes to fit your business needs."
      },
      {
        "title": "Task Tracking",
        "desc": "Monitor progress, deadlines, and responsibilities in real time."
      },
      {
        "title": "Integration Support",
        "desc": "Connect Trello with productivity, communication, and automation tools."
      }
    ],
    "howToConnectHeading": "How to Connect Trello",
    "howToConnectSteps": [
      "Create a Trello account.",
      "Access your Trello Developer Settings.",
      "Generate the required API key and token.",
      "Open your integration settings.",
      "Paste the API credentials into the required fields.",
      "Save the configuration and test the connection."
    ],
    "popularTools": [
      "google-calendar",
      "outlook",
      "teams"
    ],
    "logoUrl": "/logos/trello.svg"
  },
  {
    "slug": "zapier",
    "name": "Zapier",
    "category": "Automation",
    "shortDescription": "Connect apps and automate Workflows without coding.",
    "installUrl": "https://zapier.com",
    "whatIsHeading": "What is Zapier?",
    "whatIsText": "Zapier is a workflow automation platform that helps businesses connect applications and automate repetitive tasks without writing code. Organizations use Zapier to create automated workflows, known as Zaps, that transfer data between different tools and services in real time. By connecting applications such as CRMs, project management tools, communication platforms, and marketing software, Zapier reduces manual work and improves operational efficiency. With thousands of supported integrations and a user-friendly interface, Zapier enables teams to streamline processes, save time, and focus on more valuable business activities.",
    "benefitsHeading": "Benefits of Zapier",
    "benefits": [
      {
        "title": "No-Code Automation",
        "desc": "Create powerful automated workflows without any coding knowledge."
      },
      {
        "title": "Thousands of Integrations",
        "desc": "Connect with a wide range of business applications and services."
      },
      {
        "title": "Workflow Efficiency",
        "desc": "Eliminate repetitive manual tasks and reduce operational bottlenecks."
      },
      {
        "title": "Real-Time Data Syncing",
        "desc": "Automatically transfer information between connected tools."
      },
      {
        "title": "Scalable Automation",
        "desc": "Build simple or advanced workflows to support growing business needs."
      }
    ],
    "howToConnectHeading": "How to Connect Zapier",
    "howToConnectSteps": [
      "Create a Zapier account.",
      "Access your Zapier Dashboard.",
      "Generate or obtain the required API credentials if needed.",
      "Open your integration settings.",
      "Authorize Zapier or paste the required credentials.",
      "Save the configuration and test the connection."
    ],
    "popularTools": [
      "google-calendar",
      "outlook",
      "teams"
    ],
    "logoUrl": "https://unavatar.io/zapier.com"
  },
  {
    "slug": "zoom",
    "name": "Zoom",
    "category": "Communication",
    "shortDescription": "Schedule meetings and automate video collaboration workflows.",
    "installUrl": "https://zoom.us",
    "whatIsHeading": "What is Zoom?",
    "whatIsText": "Zoom is a video conferencing and virtual collaboration platform that helps businesses communicate, meet, and collaborate remotely. Organizations use Zoom for virtual meetings, webinars, training sessions, and online events, making it easier to connect teams and customers worldwide. The platform provides high-quality video, screen sharing, recording capabilities, and integrations with productivity tools. With reliable communication features and scalable meeting solutions, Zoom supports effective collaboration in both remote and hybrid work environments.",
    "benefitsHeading": "Benefits of Zoom",
    "benefits": [
      {
        "title": "High-Quality Video Meetings",
        "desc": "Host reliable virtual meetings and discussions."
      },
      {
        "title": "Screen Sharing Tools",
        "desc": "Present information and collaborate effectively."
      },
      {
        "title": "Webinar Capabilities",
        "desc": "Conduct large-scale online events and training sessions."
      },
      {
        "title": "Meeting Recording",
        "desc": "Save sessions for future reference and review."
      },
      {
        "title": "Productivity Integrations",
        "desc": "Connect Zoom with business and collaboration tools."
      }
    ],
    "howToConnectHeading": "How to Connect Zoom",
    "howToConnectSteps": [
      "Create a Zoom account.",
      "Access the Zoom Developer Portal.",
      "Generate the required API credentials.",
      "Open your integration settings.",
      "Paste the credentials into the required fields.",
      "Save the configuration and test the connection."
    ],
    "popularTools": [
      "google-calendar",
      "outlook",
      "teams"
    ],
    "logoUrl": "/logos/zoom.svg"
  },
  {
    "slug": "outlook",
    "name": "Outlook",
    "category": "Communication",
    "shortDescription": "Manage email, calendars, contacts, and tasks across Microsoft devices and services.",
    "installUrl": "https://outlook.live.com",
    "whatIsHeading": "What is Outlook?",
    "whatIsText": "Outlook is Microsoft\u2019s email and personal information management application. It lets users send and receive email, organize messages, manage contacts, schedule meetings, and maintain calendars. It is used by individuals, businesses, schools, and government organizations. Outlook is available through desktop, web, and mobile applications. Business features commonly connect with Microsoft 365, Exchange Online, Teams, OneDrive, and Microsoft Graph.",
    "benefitsHeading": "Benefits of Outlook",
    "benefits": [
      {
        "title": "Centralized communication",
        "desc": "Manage email, contacts, calendars, and tasks in one application."
      },
      {
        "title": "Calendar management",
        "desc": "Schedule appointments, meetings, reminders, and recurring events."
      },
      {
        "title": "Microsoft 365 integration",
        "desc": "Connect email and scheduling with Teams, OneDrive, Word, Excel, and PowerPoint."
      },
      {
        "title": "Cross-device access",
        "desc": "Use Outlook through desktop, browser, tablet, and smartphone applications."
      },
      {
        "title": "Automation and extensibility",
        "desc": "Connect workflows and applications through Microsoft Graph and Power Automate."
      }
    ],
    "howToConnectHeading": "How to Connect Outlook",
    "howToConnectSteps": [
      "Create or sign in to a Microsoft account, Microsoft 365 account, or organizational Exchange account.",
      "Open Outlook on the web, install the desktop application, or download the mobile application.",
      "Add your email address and complete automatic or manual server configuration.",
      "Approve requested permissions, security verification, and multifactor authentication if required.",
      "For automation, register an application in Microsoft Entra ID and request Microsoft Graph permissions."
    ],
    "popularTools": [
      "google-calendar",
      "outlook",
      "teams"
    ],
    "logoUrl": "https://res-1.cdn.office.net/files/fabric-cdn-prod_20221209.001/assets/brand-icons/product/svg/outlook_48x1.svg"
  },
  {
    "slug": "teams",
    "name": "Teams",
    "category": "Communication",
    "shortDescription": "Chat, meet, call, and collaborate with colleagues through Microsoft\u2019s teamwork platform.",
    "installUrl": "https://teams.microsoft.com",
    "whatIsHeading": "What is Teams?",
    "whatIsText": "Microsoft Teams is a collaboration platform for workplace communication and group coordination. It supports one-to-one chats, group conversations, team channels, voice calls, video meetings, and file sharing. Organizations use Teams for remote work, project management, education, customer communication, and internal collaboration. Teams integrates with Microsoft 365 applications and stores many shared files through SharePoint and OneDrive. Users may need an organization-controlled account and administrator policies for advanced capabilities.",
    "benefitsHeading": "Benefits of Teams",
    "benefits": [
      {
        "title": "Unified communication",
        "desc": "Combine chat, meetings, calls, and collaboration in one workspace."
      },
      {
        "title": "Team organization",
        "desc": "Arrange conversations, files, and projects into teams and channels."
      },
      {
        "title": "File collaboration",
        "desc": "View, edit, comment on, and coauthor Word, Excel, and PowerPoint files."
      },
      {
        "title": "Meeting functionality",
        "desc": "Host video meetings with screen sharing, recording, captions, and chat."
      },
      {
        "title": "App integrations",
        "desc": "Connect Microsoft 365 services and third-party productivity applications."
      }
    ],
    "howToConnectHeading": "How to Connect Teams",
    "howToConnectSteps": [
      "Sign in with a Microsoft account or an organization-provided Microsoft 365 account.",
      "Install Teams on desktop or mobile, or open the web version.",
      "Join an existing team using an invitation, team code, or administrator assignment.",
      "Create or join channels and configure notification, meeting, and sharing preferences.",
      "For automation, register an application or configure an approved Teams connector through Microsoft Graph or Power Automate."
    ],
    "popularTools": [
      "google-calendar",
      "outlook",
      "teams"
    ],
    "logoUrl": "https://res-1.cdn.office.net/files/fabric-cdn-prod_20221209.001/assets/brand-icons/product/svg/teams_48x1.svg"
  },
  {
    "slug": "excel",
    "name": "Excel",
    "category": "Productivity",
    "shortDescription": "Analyze data, build calculations, and create charts using Microsoft\u2019s spreadsheet application.",
    "installUrl": "https://office.com/launch/excel",
    "whatIsHeading": "What is Excel?",
    "whatIsText": "Microsoft Excel is a spreadsheet application for organizing, calculating, analyzing, and presenting structured data. It provides worksheets, formulas, functions, tables, charts, pivot tables, and data-import tools. Individuals, businesses, analysts, accountants, students, and traders use Excel for financial models, reporting, budgeting, forecasting, and data analysis. Excel is available as a desktop application, web application, and mobile application. Cloud storage through OneDrive or SharePoint enables sharing and simultaneous editing.",
    "benefitsHeading": "Benefits of Excel",
    "benefits": [
      {
        "title": "Flexible calculations",
        "desc": "Use formulas and functions to automate numerical and logical operations."
      },
      {
        "title": "Data analysis",
        "desc": "Explore information with filters, pivot tables, charts, and analytical tools."
      },
      {
        "title": "Professional reporting",
        "desc": "Create dashboards, summaries, financial models, and formatted reports."
      },
      {
        "title": "Collaborative editing",
        "desc": "Share workbooks and coauthor them with other users."
      },
      {
        "title": "Automation and integration",
        "desc": "Connect Excel with Power Automate, Office Scripts, Microsoft Graph, Power Query, and external data sources."
      }
    ],
    "howToConnectHeading": "How to Connect Excel",
    "howToConnectSteps": [
      "Sign in with a Microsoft account or Microsoft 365 organizational account.",
      "Open Excel on the web, install the desktop application, or use the mobile app.",
      "Save the workbook to OneDrive or SharePoint if collaboration or cloud automation is required.",
      "Share the workbook and assign viewing or editing permissions.",
      "For automation, use Power Automate, Office Scripts, Microsoft Graph, or an approved third-party connector."
    ],
    "popularTools": [
      "google-calendar",
      "outlook",
      "teams"
    ],
    "logoUrl": "https://res-1.cdn.office.net/files/fabric-cdn-prod_20221209.001/assets/brand-icons/product/svg/excel_48x1.svg"
  },
  {
    "slug": "word",
    "name": "Word",
    "category": "Productivity",
    "shortDescription": "Create, edit, format, and collaborate on professional documents.",
    "installUrl": "https://office.com/launch/word",
    "whatIsHeading": "What is Word?",
    "whatIsText": "Microsoft Word is a word-processing application for creating and editing text-based documents. It supports formatting, page layouts, tables, images, references, comments, track changes, templates, and document review. People use Word to prepare reports, letters, contracts, proposals, academic assignments, and business documents. It is available on desktop, web, and mobile platforms. Cloud storage through OneDrive or SharePoint supports document sharing and collaborative editing.",
    "benefitsHeading": "Benefits of Word",
    "benefits": [
      {
        "title": "Professional formatting",
        "desc": "Apply styles, layouts, templates, headers, footers, and page controls."
      },
      {
        "title": "Document review",
        "desc": "Use comments, tracked changes, version history, and comparison features."
      },
      {
        "title": "Collaboration",
        "desc": "Share documents and allow multiple users to edit them together."
      },
      {
        "title": "Broad compatibility",
        "desc": "Open and export common document formats, including DOCX and PDF."
      },
      {
        "title": "Writing assistance",
        "desc": "Use spelling, grammar, accessibility, and optional AI-powered writing features."
      }
    ],
    "howToConnectHeading": "How to Connect Word",
    "howToConnectSteps": [
      "Sign in with a Microsoft account or Microsoft 365 organizational account.",
      "Open Word online, install the desktop application, or download the mobile app.",
      "Save the document to OneDrive or SharePoint for cloud access and collaboration.",
      "Share the document with specific users and configure their permissions.",
      "For workflow automation, connect Word templates through Power Automate or Microsoft Graph."
    ],
    "popularTools": [
      "google-calendar",
      "outlook",
      "teams"
    ],
    "logoUrl": "https://res-1.cdn.office.net/files/fabric-cdn-prod_20221209.001/assets/brand-icons/product/svg/word_48x1.svg"
  },
  {
    "slug": "powerpoint",
    "name": "PowerPoint",
    "category": "Productivity",
    "shortDescription": "Design, present, and collaborate on visual presentations for work, education, and events.",
    "installUrl": "https://office.com/launch/powerpoint",
    "whatIsHeading": "What is PowerPoint?",
    "whatIsText": "Microsoft PowerPoint is a presentation application for creating slide-based visual content. It supports text, images, diagrams, charts, video, audio, animations, transitions, templates, and presenter tools. Businesses, educators, students, consultants, and public speakers use it to explain information and communicate ideas. PowerPoint is offered through desktop, web, and mobile applications. Cloud storage enables collaboration, version history, and access across devices.",
    "benefitsHeading": "Benefits of PowerPoint",
    "benefits": [
      {
        "title": "Visual communication",
        "desc": "Present complex information through structured slides and multimedia."
      },
      {
        "title": "Design tools",
        "desc": "Use templates, themes, layouts, icons, images, and presentation effects."
      },
      {
        "title": "Presenter support",
        "desc": "Deliver presentations with speaker notes, presenter view, and rehearsal tools."
      },
      {
        "title": "Real-time collaboration",
        "desc": "Share presentations and coauthor slides with other users."
      },
      {
        "title": "Microsoft 365 integration",
        "desc": "Import Excel data, use OneDrive storage, and collaborate through Teams."
      }
    ],
    "howToConnectHeading": "How to Connect PowerPoint",
    "howToConnectSteps": [
      "Sign in with a Microsoft account or Microsoft 365 organizational account.",
      "Open PowerPoint online, install the desktop application, or use the mobile application.",
      "Save the presentation to OneDrive or SharePoint for online access and collaboration.",
      "Share the presentation and select viewer, commenter, or editor permissions.",
      "For automation, connect presentation workflows through Power Automate, Microsoft Graph, or approved add-ins."
    ],
    "popularTools": [
      "google-calendar",
      "outlook",
      "teams"
    ],
    "logoUrl": "https://res-1.cdn.office.net/files/fabric-cdn-prod_20221209.001/assets/brand-icons/product/svg/powerpoint_48x1.svg"
  },
  {
    "slug": "onedrive",
    "name": "OneDrive",
    "category": "Productivity",
    "shortDescription": "Store, synchronize, share, and access files securely across devices.",
    "installUrl": "https://onedrive.live.com",
    "whatIsHeading": "What is OneDrive?",
    "whatIsText": "OneDrive is Microsoft\u2019s cloud storage and file synchronization service. It allows users to upload, organize, access, share, and synchronize files across computers, browsers, tablets, and smartphones. Individuals use personal OneDrive accounts, while organizations use OneDrive for Business within Microsoft 365. OneDrive commonly stores Word, Excel, and PowerPoint files for cloud editing and collaboration. Business environments may apply administrator-managed sharing, retention, security, and compliance policies.",
    "benefitsHeading": "Benefits of OneDrive",
    "benefits": [
      {
        "title": "Cloud accessibility",
        "desc": "Access files from supported browsers and connected devices."
      },
      {
        "title": "Synchronization",
        "desc": "Keep selected files and folders synchronized across computers."
      },
      {
        "title": "File sharing",
        "desc": "Share files using links or specific-person permissions."
      },
      {
        "title": "Microsoft 365 integration",
        "desc": "Open and collaborate on Office documents directly from storage."
      },
      {
        "title": "File protection",
        "desc": "Use version history, recovery features, and organization-managed security controls."
      }
    ],
    "howToConnectHeading": "How to Connect OneDrive",
    "howToConnectSteps": [
      "Sign in with a Microsoft account or Microsoft 365 organizational account.",
      "Open OneDrive on the web or install the OneDrive synchronization client.",
      "Choose the folders and files to synchronize with your device.",
      "Upload files and configure sharing permissions for collaborators.",
      "For automation, use Microsoft Graph, Power Automate, or an approved third-party integration."
    ],
    "popularTools": [
      "google-calendar",
      "outlook",
      "teams"
    ],
    "logoUrl": "https://res-1.cdn.office.net/files/fabric-cdn-prod_20221209.001/assets/brand-icons/product/svg/onedrive_48x1.svg"
  },
  {
    "slug": "gmail",
    "name": "Gmail",
    "category": "Communication",
    "shortDescription": "Send, organize, search, and manage email through Google\u2019s cloud-based mail service.",
    "installUrl": "https://mail.google.com",
    "whatIsHeading": "What is Gmail?",
    "whatIsText": "Gmail is Google\u2019s email service for sending, receiving, organizing, and searching electronic messages. It includes labels, filters, threaded conversations, spam protection, attachments, search, and integrations with Google Workspace. Individuals use Gmail for personal communication, while organizations use managed Gmail accounts through Google Workspace. Gmail works in web browsers and official mobile applications. Developers can connect to Gmail programmatically through the Gmail API after configuring authentication and permissions.",
    "benefitsHeading": "Benefits of Gmail",
    "benefits": [
      {
        "title": "Powerful search",
        "desc": "Find messages using senders, dates, keywords, labels, attachments, and operators."
      },
      {
        "title": "Organization tools",
        "desc": "Manage email with labels, filters, categories, stars, and archived conversations."
      },
      {
        "title": "Security controls",
        "desc": "Benefit from spam, phishing, malware, and suspicious-login protections."
      },
      {
        "title": "Google Workspace integration",
        "desc": "Connect email with Drive, Docs, Sheets, Meet, and Calendar."
      },
      {
        "title": "Automation capability",
        "desc": "Use filters, Apps Script, third-party tools, or the Gmail API."
      }
    ],
    "howToConnectHeading": "How to Connect Gmail",
    "howToConnectSteps": [
      "Create or sign in to a personal Google account or Google Workspace account.",
      "Open Gmail on the web or install the official mobile application.",
      "Add recovery details and complete any required security or multifactor authentication setup.",
      "For third-party tools, choose Google sign-in and approve the requested Gmail permissions.",
      "For development, create a Google Cloud project, enable the Gmail API, and configure OAuth credentials."
    ],
    "popularTools": [
      "google-calendar",
      "outlook",
      "teams"
    ],
    "logoUrl": "https://ssl.gstatic.com/images/branding/product/2x/gmail_2020q4_48dp.png"
  },
  {
    "slug": "google-docs",
    "name": "Google Docs",
    "category": "Productivity",
    "shortDescription": "Create, edit, share, and collaboratively review documents online.",
    "installUrl": "https://docs.google.com",
    "whatIsHeading": "What is Google Docs?",
    "whatIsText": "Google Docs is a browser-based word-processing application within Google Workspace. It lets users create, format, edit, comment on, and share documents online. Users can collaborate in real time and view document history, suggestions, and comments. Google Docs is used by individuals, businesses, schools, writers, and project teams. Documents are stored in Google Drive and can be accessed through web browsers and mobile applications.",
    "benefitsHeading": "Benefits of Google Docs",
    "benefits": [
      {
        "title": "Real-time collaboration",
        "desc": "Multiple users can edit the same document simultaneously."
      },
      {
        "title": "Automatic saving",
        "desc": "Changes are continuously saved to Google Drive."
      },
      {
        "title": "Review workflows",
        "desc": "Use comments, suggestions, version history, and document permissions."
      },
      {
        "title": "Cross-platform access",
        "desc": "Work from browsers, smartphones, and tablets."
      },
      {
        "title": "Developer access",
        "desc": "Read and write document content through the Google Docs API."
      }
    ],
    "howToConnectHeading": "How to Connect Google Docs",
    "howToConnectSteps": [
      "Sign in to a Google account or Google Workspace account.",
      "Open Google Docs through the browser or mobile application.",
      "Create a document or open one stored in Google Drive.",
      "Share the document and assign viewer, commenter, or editor access.",
      "For automation, create a Google Cloud project, enable the Docs API, and configure OAuth permissions."
    ],
    "popularTools": [
      "google-calendar",
      "outlook",
      "teams"
    ],
    "logoUrl": "https://ssl.gstatic.com/images/branding/product/2x/docs_2020q4_48dp.png"
  },
  {
    "slug": "google-sheets",
    "name": "Google Sheets",
    "category": "Productivity",
    "shortDescription": "Organize, calculate, analyze, and collaborate on spreadsheet data online.",
    "installUrl": "https://sheets.google.com",
    "whatIsHeading": "What is Google Sheets?",
    "whatIsText": "Google Sheets is a cloud-based spreadsheet application included with Google Workspace. It supports data entry, formulas, charts, filters, pivot tables, formatting, and collaborative analysis. Individuals, organizations, educators, analysts, and finance teams use Sheets for planning, reporting, tracking, and data management. Files are stored in Google Drive and can be edited through browsers and mobile apps. Developers can read and write spreadsheet data through the Google Sheets API.",
    "benefitsHeading": "Benefits of Google Sheets",
    "benefits": [
      {
        "title": "Collaborative analysis",
        "desc": "Multiple users can edit and review data in real time."
      },
      {
        "title": "Cloud availability",
        "desc": "Access spreadsheets through supported browsers and mobile devices."
      },
      {
        "title": "Flexible calculations",
        "desc": "Use formulas, functions, charts, filters, and pivot tables."
      },
      {
        "title": "Connected workflows",
        "desc": "Integrate with Forms, Drive, Apps Script, Looker Studio, and external tools."
      },
      {
        "title": "Programmable data access",
        "desc": "Read and write spreadsheet values through the Sheets API."
      }
    ],
    "howToConnectHeading": "How to Connect Google Sheets",
    "howToConnectSteps": [
      "Sign in to a Google account or Google Workspace account.",
      "Open Google Sheets through the browser or mobile application.",
      "Create a spreadsheet or open an existing file from Google Drive.",
      "Share the spreadsheet and select viewer, commenter, or editor permissions.",
      "For automation, create a Google Cloud project, enable the Sheets API, and configure OAuth credentials."
    ],
    "popularTools": [
      "google-calendar",
      "outlook",
      "teams"
    ],
    "logoUrl": "https://ssl.gstatic.com/images/branding/product/2x/sheets_2020q4_48dp.png"
  },
  {
    "slug": "google-meet",
    "name": "Google Meet",
    "category": "Communication",
    "shortDescription": "Host secure video meetings and collaborate remotely through Google\u2019s conferencing service.",
    "installUrl": "https://meet.google.com",
    "whatIsHeading": "What is Google Meet?",
    "whatIsText": "Google Meet is Google\u2019s video-conferencing service for online meetings, calls, and presentations. Participants can join through a browser or mobile application using a meeting link, calendar invitation, or supported account. Organizations, schools, businesses, and individuals use Meet for remote communication and collaboration. Features and limits can vary depending on the account type and Google Workspace subscription. Google Meet connects closely with Google Calendar, Gmail, Drive, and other Workspace services.",
    "benefitsHeading": "Benefits of Google Meet",
    "benefits": [
      {
        "title": "Simple participation",
        "desc": "Join meetings through links without requiring complex software installation."
      },
      {
        "title": "Video collaboration",
        "desc": "Communicate using video, audio, chat, screen sharing, and presentation features."
      },
      {
        "title": "Calendar integration",
        "desc": "Schedule meetings directly through Google Calendar invitations."
      },
      {
        "title": "Cross-device access",
        "desc": "Join from browsers, smartphones, tablets, and supported meeting hardware."
      },
      {
        "title": "Programmable administration",
        "desc": "Use Meet APIs for supported meeting-space and participant-management workflows."
      }
    ],
    "howToConnectHeading": "How to Connect Google Meet",
    "howToConnectSteps": [
      "Sign in with a Google account or Google Workspace account.",
      "Open Google Meet in a browser or install the mobile application.",
      "Create a meeting or join using a meeting link, code, or Calendar invitation.",
      "Allow microphone and camera access and configure meeting permissions.",
      "For automation, enable the Meet API in Google Cloud and configure OAuth or administrator authorization."
    ],
    "popularTools": [
      "google-calendar",
      "outlook",
      "teams"
    ],
    "logoUrl": "https://ssl.gstatic.com/images/branding/product/2x/meet_2020q4_48dp.png"
  },
  {
    "slug": "google-calendar",
    "name": "Google Calendar",
    "category": "Productivity",
    "shortDescription": "Schedule events, manage availability, and coordinate meetings across calendars.",
    "installUrl": "https://calendar.google.com",
    "whatIsHeading": "What is Google Calendar?",
    "whatIsText": "Google Calendar is an online calendar application for scheduling events, appointments, reminders, and meetings. Users can create recurring events, invite participants, manage time zones, and maintain multiple calendars. Individuals, teams, schools, and businesses use it to coordinate schedules and manage availability. Google Calendar integrates with Gmail, Google Meet, Contacts, Tasks, and Google Workspace. Developers can create, update, delete, and manage events through the Google Calendar API.",
    "benefitsHeading": "Benefits of Google Calendar",
    "benefits": [
      {
        "title": "Schedule coordination",
        "desc": "Organize appointments, meetings, deadlines, and recurring events."
      },
      {
        "title": "Shared calendars",
        "desc": "Coordinate availability and activities across teams or households."
      },
      {
        "title": "Meeting integration",
        "desc": "Add Google Meet conferencing details to calendar events."
      },
      {
        "title": "Notifications",
        "desc": "Receive reminders through email, browser, and mobile notifications."
      },
      {
        "title": "Automation",
        "desc": "Create and manage events programmatically through the Calendar API and Apps Script."
      }
    ],
    "howToConnectHeading": "How to Connect Google Calendar",
    "howToConnectSteps": [
      "Sign in to a Google account or Google Workspace account.",
      "Open Google Calendar on the web or through the mobile application.",
      "Create events, set reminders, and invite guests by entering their email addresses.",
      "Share calendars with individuals or groups and choose appropriate access permissions.",
      "For automation, create a Google Cloud project, enable the Google Calendar API, and configure OAuth credentials."
    ],
    "popularTools": [
      "google-calendar",
      "outlook",
      "teams"
    ],
    "logoUrl": "https://ssl.gstatic.com/images/branding/product/2x/calendar_2020q4_48dp.png"
  },
  {
    "slug": "google-slides",
    "name": "Google Slides",
    "category": "Productivity",
    "shortDescription": "Create, present, share, and collaboratively edit visual presentations online.",
    "installUrl": "https://slides.google.com",
    "whatIsHeading": "What is Google Slides?",
    "whatIsText": "Google Slides is a cloud-based presentation application within Google Workspace. It allows users to create slide decks containing text, images, diagrams, charts, video, animations, and speaker notes. Individuals, businesses, schools, and teams use Slides for presentations, training, planning, and visual communication. Files are stored in Google Drive and can be edited collaboratively from browsers and mobile devices. Developers can create and modify presentations through the Google Slides API.",
    "benefitsHeading": "Benefits of Google Slides",
    "benefits": [
      {
        "title": "Real-time editing",
        "desc": "Multiple collaborators can edit and review presentations simultaneously."
      },
      {
        "title": "Cloud storage",
        "desc": "Access presentations from supported browsers and connected devices."
      },
      {
        "title": "Presentation tools",
        "desc": "Use themes, layouts, media, animations, speaker notes, and presenting controls."
      },
      {
        "title": "Easy sharing",
        "desc": "Control access through viewer, commenter, and editor permissions."
      },
      {
        "title": "Programmable presentations",
        "desc": "Create and update slide content through the Slides API."
      }
    ],
    "howToConnectHeading": "How to Connect Google Slides",
    "howToConnectSteps": [
      "Sign in to a Google account or Google Workspace account.",
      "Open Google Slides through the browser or mobile application.",
      "Create a presentation or open one stored in Google Drive.",
      "Share the presentation and configure viewer, commenter, or editor access.",
      "For automation, create a Google Cloud project, enable the Slides API, and configure OAuth credentials."
    ],
    "popularTools": [
      "google-calendar",
      "outlook",
      "teams"
    ],
    "logoUrl": "https://ssl.gstatic.com/images/branding/product/2x/slides_2020q4_48dp.png"
  },
  {
    "slug": "airtable",
    "name": "Airtable",
    "category": "Productivity",
    "shortDescription": "Organize projects, databases, workflows, and operational information in flexible connected workspaces.",
    "installUrl": "https://airtable.com",
    "whatIsHeading": "What is Airtable?",
    "whatIsText": "Airtable is a cloud-based platform that combines spreadsheet-style interfaces with relational database functionality. Users can create bases containing tables, records, fields, views, forms, interfaces, and automations. Teams use Airtable to manage projects, content calendars, customer information, inventories, product operations, and business workflows. Its linked-record structure helps users connect related information across multiple tables. Airtable also supports integrations, scripting, webhooks, and an API for connecting external systems.",
    "benefitsHeading": "Benefits of Airtable",
    "benefits": [
      {
        "title": "Flexible data organization",
        "desc": "Structure information using tables, linked records, custom fields, and filtered views."
      },
      {
        "title": "Multiple interfaces",
        "desc": "Present the same data through grids, kanban boards, calendars, galleries, forms, and dashboards."
      },
      {
        "title": "Workflow automation",
        "desc": "Trigger actions from record changes, schedules, forms, and external events."
      },
      {
        "title": "Team collaboration",
        "desc": "Share workspaces, assign permissions, comment on records, and coordinate operational tasks."
      },
      {
        "title": "Integration capability",
        "desc": "Connect Airtable with automation platforms, webhooks, scripts, and external applications."
      }
    ],
    "howToConnectHeading": "How to Connect Airtable",
    "howToConnectSteps": [
      "Create an Airtable account and open an existing workspace or create a new one.",
      "Create a base, add tables and fields, and import or enter your data.",
      "Invite collaborators and configure workspace, base, interface, or view permissions.",
      "For no-code automation, connect Airtable through a supported integration such as Make, Zapier, or Power Automate.",
      "For custom integrations, create a personal access token or OAuth application, select scopes, and connect through Airtable’s API."
    ],
    "popularTools": [
      "google-calendar",
      "outlook",
      "teams"
    ],
    "logoUrl": "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/airtable.svg"
  },
  {
    "slug": "linear",
    "name": "Linear",
    "category": "Productivity",
    "shortDescription": "Plan projects, manage issues, and coordinate software development workflows efficiently.",
    "installUrl": "https://linear.app",
    "whatIsHeading": "What is Linear?",
    "whatIsText": "Linear is a project and issue-management platform designed primarily for software development and product teams. It helps teams manage projects, initiatives, tasks, bugs, cycles, roadmaps, priorities, and workflow states. Teams use Linear to coordinate engineering work, product planning, sprint execution, and cross-functional collaboration. Its interface is optimized for fast issue creation, triage, filtering, and keyboard-driven workflows. Linear connects with tools such as GitHub, GitLab, Slack, and external automation platforms through integrations and its GraphQL API.",
    "benefitsHeading": "Benefits of Linear",
    "benefits": [
      {
        "title": "Structured issue tracking",
        "desc": "Create, prioritize, assign, label, and monitor tasks and software defects."
      },
      {
        "title": "Product planning",
        "desc": "Organize work into projects, initiatives, roadmaps, cycles, and milestones."
      },
      {
        "title": "Efficient workflows",
        "desc": "Use keyboard shortcuts, filters, templates, and configurable status workflows."
      },
      {
        "title": "Development integrations",
        "desc": "Link issues with code repositories, pull requests, commits, and deployments."
      },
      {
        "title": "Automation and extensibility",
        "desc": "Use webhooks, integrations, API access, and workflow automations to synchronize systems."
      }
    ],
    "howToConnectHeading": "How to Connect Linear",
    "howToConnectSteps": [
      "Create a Linear account or join an existing workspace through an invitation.",
      "Create or select a team and configure issue statuses, labels, priorities, cycles, and project settings.",
      "Invite collaborators and assign suitable workspace, team, or project permissions.",
      "Open Linear’s integrations settings and connect services such as GitHub, GitLab, Slack, or an automation platform.",
      "For custom workflows, create a Linear API key or OAuth application, configure required permissions, and use the GraphQL API or webhooks."
    ],
    "popularTools": [
      "google-calendar",
      "outlook",
      "teams"
    ],
    "logoUrl": "/logos/linear.svg"
  },
  {
    "slug": "fresha",
    "name": "Fresha",
    "category": "Productivity",
    "shortDescription": "Manage bookings, clients, payments, and operations for beauty, wellness, and fitness businesses.",
    "installUrl": "https://www.fresha.com",
    "whatIsHeading": "What is Fresha?",
    "whatIsText": "Fresha is a cloud-based booking and business-management platform for salons, spas, barbershops, medspas, and wellness businesses. It provides appointment scheduling, online booking, client management, point-of-sale tools, payment processing, marketing, inventory, and business reporting. Customers can discover and book businesses through the Fresha marketplace, while business owners manage their operations through the Fresha platform. Teams can use Fresha to manage staff schedules, services, memberships, gift cards, products, deposits, and cancellation policies. Features and pricing may vary by location, plan, business type, and payment configuration. [fresha](https://www.fresha.com/pricing)",
    "benefitsHeading": "Benefits of Fresha",
    "benefits": [
      {
        "title": "Appointment management",
        "desc": "Organize staff schedules, services, resources, waitlists, group bookings, and recurring appointments."
      },
      {
        "title": "Online booking",
        "desc": "Accept bookings through Fresha, websites, social channels, Google, and direct booking links."
      },
      {
        "title": "Client management",
        "desc": "Store client profiles, appointment history, notes, consultation forms, memberships, and loyalty information."
      },
      {
        "title": "Integrated payments",
        "desc": "Accept online and in-person payments, deposits, tips, refunds, and no-show protection through Fresha Payments. [fresha](https://www.fresha.com/help-center/knowledge-base/payments/199-fresha-payments-overview)"
      },
      {
        "title": "Business growth tools",
        "desc": "Use marketplace discovery, marketing, reporting, inventory, retail, gift cards, and team-management features. [fresha](https://www.fresha.com/pricing)"
      }
    ],
    "howToConnectHeading": "How to Connect Fresha",
    "howToConnectSteps": [
      "Create a Fresha business account and enter your business details, location, industry, services, staff, and operating hours.",
      "Configure your booking calendar, online booking settings, cancellation policy, deposits, and client notification preferences.",
      "Connect Fresha Payments if you want to accept online or in-person payments, deposits, tips, or card-based no-show protection.",
      "Publish your Fresha profile and connect available booking channels, such as your website, social media, Google, or direct booking links.",
      "For external reporting or automation, review Fresha’s available integrations and Data Connector options; verify availability, permissions, pricing, and export limitations before implementation. [fresha](https://www.fresha.com/pricing)"
    ],
    "popularTools": [
      "google-calendar",
      "outlook",
      "teams"
    ],
    "logoUrl": "/logos/fresha.svg"
  }
];

export const INTEGRATION_CATEGORIES: IntegrationCategory[] = [
  'All',
  'AI',
  'Communication',
  'Productivity',
  'Automation',
  'CMS',
  'Marketing & Analytics',
  'Payments',
];

export function getIntegrationBySlug(slug: string): IntegrationItem | undefined {
  const s = slug.toLowerCase();
  return INTEGRATIONS_DATA.find(
    (item) =>
      item.slug.toLowerCase() === s ||
      (item.slug === 'openai' && s === 'chatgpt') ||
      (item.slug === 'chatgpt' && s === 'openai')
  );
}
