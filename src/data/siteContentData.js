const jimRohnQuote = {
  quote:
    'Time is more value than money. You can get more money, but you cannot get more time.',
  author: 'Jim Rohn',
};

const ianMcManusQuote = {
  quote:
    'We have partnered with the most secure data storage in the UK - trusted by the Ministry of Justice and the official hosting company of the Crown. We also offer nightly back-up service ensuring your data is safe.',
  author: 'Ian McManus',
  role: 'Managing Director',
};

const nigelRossQuote = {
  quote:
    'Lateral has decreased our average days of debt outstanding by 2 days and 10% in just six months.',
  author: 'Nigel Ross',
  role: 'Corporate and Legal',
};

const davidAskerQuote = {
  quote:
    'Lateral has allowed us to triple our case load without increasing any staff. Without it, we would need twice as many people doing manual processes.',
  author: 'David Asker',
  role: 'The Sheriffs Office',
};

const recoveryDifferenceItems = [
  {
    title: 'Automated everything!',
    description:
      'Automated customer contact can cover the entire recovery cycle, from introduction through final payment demands.',
  },
  {
    title: 'Payment options',
    description:
      'Offer 24/7 payment methods through automated phone, SMS, web portal and barcoded letters.',
  },
  {
    title: 'Control letters, calls and text',
    description:
      'Use workflows and decisions to pick the best communication method for each account and stage.',
  },
  {
    title: 'Team management',
    description:
      'Split recovery teams by client, geography or product type to focus expertise where it matters most.',
  },
  {
    title: 'Client communications',
    description:
      'Surface live recovery activity and outcomes through a secure online portal for internal and external stakeholders.',
  },
  {
    title: 'Adaptable workflow generator',
    description:
      'Switch strategy by case type, location or arrears profile to continually improve performance.',
  },
];

const legalPlatformFeatures = [
  'Automatic letters, email or texts',
  'Log in from anywhere in the world',
  'Compatible with accounting software',
  'Create your own workflows',
  'Easy integrations via API',
  'Flexible reporting suite',
  'CRM for lawyers and service teams',
  'Cloud-based secure data storage',
  'Costs and time budgeting visibility',
  'Status changes via email, SMS or CRM',
  'Task and diary management',
  'Decision engine automation',
  'Integral time tracking module',
];

const recoveryFeatures = [
  'Account segmentation',
  'Integrates with merchant account',
  'Integrates with 3rd party suppliers',
  'Compatible dialler technology',
  'Innovative telecommunications',
  'ISO 27001 certification',
  'Import/export unlimited cases',
  'No hosting or hardware fees',
  'No long term contract',
  'FCA and MOJ compliant',
];

const creditControlFeatures = [
  'Automatic letters, email or texts',
  'Log in from anywhere in the world',
  'Compatible with most accounting software',
  'Create your own credit control workflows',
  'Status changes via email, SMS or CRM',
  'Reduce average days debt outstanding',
  'Improve cash-flow',
  'Dispute manager',
  'Cost and time efficiency',
  'CRM for credit controllers',
];

const legalOperationsCards = [
  {
    title: 'Unlimited Flexibility',
    description:
      'Drag and drop widgets, add fields, create dashboards, color-code cases and shape the product around your operational model.',
  },
  {
    title: 'Integration',
    description:
      'Connect to APIs, web services and legacy systems through Lateral web services and bespoke data exchange tooling.',
  },
  {
    title: 'Workflow and Decisions',
    description:
      'Drive automation from completed tasks, dates or user-defined criteria to reduce repetitive manual work.',
  },
  {
    title: 'Time Recording',
    description:
      'Use built-in time tracking or integrate with eBility for reporting and billing statements by user or task type.',
  },
  {
    title: 'Document Production and Sending',
    description:
      'Generate letters with unlimited variables, create batches at scale and track delivery through secure APIs.',
  },
  {
    title: 'Document Management',
    description:
      'Store, search and version documents while keeping a complete history of who changed what and when.',
  },
  {
    title: 'CRM and Business Development',
    description:
      'Handle prospecting, onboarding, automated email, SMS and omni-channel CRM functions without bolting on a separate system.',
  },
  {
    title: 'Task and Diary Management',
    description:
      'Link diary items to case activity, sync with Outlook or Google Calendar and use smart tasks to cut extra clicks.',
  },
];

const matterManagementCards = [
  {
    title: 'Document Production and Sending',
    description:
      'Generate letters or packs in one click, automate print and send processes, and track delivery through integrated APIs.',
  },
  {
    title: 'Document Management',
    description:
      'Search, store and version matter documents while preserving a clear editing history across the team.',
  },
  {
    title: 'CRM and Business Development',
    description:
      'Prospect, onboard and nurture clients inside the same platform with automated emails, texts and omni-channel engagement.',
  },
  {
    title: 'Task and Diary Management',
    description:
      'Keep all matter activity, reminders and calendars aligned so no task is overlooked.',
  },
  {
    title: 'Workflow and Decisions',
    description:
      'Automate matter progression with decision logic driven by dates, completed work or custom criteria.',
  },
  {
    title: 'Time Recording',
    description:
      'Capture time from anywhere, then produce reports and billing statements by person, task type or period.',
  },
  {
    title: 'Costs Budgeting and Management',
    description:
      'Use color-coded alerts, at-a-glance cost views and analysis across cases, users and time periods.',
  },
  {
    title: 'Unlimited Flexibility',
    description:
      'Build new dashboards, imports, reports, fields and queries so the system mirrors your exact process.',
  },
];

const breathingSpaceCards = [
  {
    title: 'Powerful Flagging and Reporting',
    description:
      'Unlimited real-time flagging of clients on breathing space, plus monitoring and historical reporting.',
    image: '/company-assets/reporting.png',
    imageAlt: 'Lateral reporting dashboard on a laptop',
  },
  {
    title: 'Easy to Use, Fast to Implement',
    description:
      'Simple to deploy, easy to learn and fast to train on for councils, legal teams and private-sector operators.',
    image: '/company-assets/easy-to-use.png',
    imageAlt: 'Dashboard chart showing new cases over time',
  },
  {
    title: 'Streamline Case Management',
    description:
      'Keep track of protected accounts, automate next steps and simplify case handling across the organisation.',
    image: '/company-assets/workflow.png',
    imageAlt: 'Workflow configuration screen',
  },
  {
    title: 'Legal Compliance',
    description:
      'A practical compliance layer that helps teams stay aligned with breathing space regulations and reporting duties.',
    image: '/home-assets/one-system.png',
    imageAlt: 'Lateral case management interface',
  },
];

export const navigation = [
  { to: '/', label: 'Home' },
  { to: '/platform', label: 'Platform' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/company', label: 'Company' },
  { to: '/thinking', label: 'Thinking' },
  { to: '/contact', label: 'Contact' },
  { to: '/demo', label: 'Book a Demo', accent: true },
];

export const homeHero = {
  title: 'Automation, flexibility and control.',
  description:
    'Cloud-based software for collections, legal, government and customer operations teams that need one platform for workflows, communications and visibility.',
};

export const valueStatement = {
  title: 'Software that helps operational teams move faster without losing control.',
  body: [
    'Lateral combines CRM, case management, workflow automation, communications and reporting in one platform.',
    'That means fewer disconnected systems, less duplicated effort and better visibility from first contact to final resolution.',
    'Whether you are managing debt recovery, legal matters, government collections or compliance-sensitive customer journeys, the platform adapts to the way you work.',
  ],
};

export const capabilityCards = [
  {
    title: 'Case management',
    description:
      'Track files, communications, tasks and outcomes in one place with full auditability.',
  },
  {
    title: 'Workflow automation',
    description:
      'Automate actions based on dates, status changes, decisions or business rules.',
  },
  {
    title: 'Customer communications',
    description:
      'Coordinate letters, email, SMS, chat and telephony from one operating model.',
  },
  {
    title: 'Real-time reporting',
    description:
      'Build dashboards and reports that give teams and clients a clear live picture of performance.',
  },
  {
    title: 'Flexible integration',
    description:
      'Connect finance systems, legacy tools, web services and third-party suppliers through APIs.',
  },
  {
    title: 'Operational security',
    description:
      'Support regulated environments with secure cloud hosting, permissions and traceability.',
  },
];

export const differentiators = [
  'Single View of Debt / Customer across connected systems',
  'Flexible workflow design without waiting for product releases',
  'Cloud-based platform with secure remote access',
  'Omni-channel communications across email, SMS, telephony and chat',
  'Strong reporting, automation and compliance controls',
  'Designed for legal, government, credit control and recovery teams',
];

export const testimonial = davidAskerQuote;

export const timeQuote = {
  quote: jimRohnQuote.quote,
  supporting:
    'That is why Lateral focuses on removing repeat work, reducing delay and helping teams spend more time on the decisions that matter.',
};

export const solutions = [
  {
    slug: 'debt',
    title: 'Single View of Debt / Customer',
    tagline: 'A connected view of people, balances, payments and communications.',
    summary:
      'Bring debt, customer and case data into one place so teams can act with more context and less duplication.',
    audience:
      'Councils, government teams and organisations managing multiple debt types across disconnected systems.',
    benefits: [
      'See linked debt and customer records in one place',
      'Reduce duplicate contact and collection activity',
      'Support more informed arrangements and escalations',
    ],
  },
  {
    slug: 'legal',
    title: 'Legal Case Management',
    tagline: 'Cloud-based software for lawyers, firms and legal operations teams.',
    summary:
      'Automate legal workflows, documents, time tracking and case visibility in one secure platform.',
    audience:
      'Law firms, solicitors, legal departments and specialist case handling teams.',
    benefits: [
      'Automate case progress and decisions',
      'Manage documents, tasks and communications together',
      'Improve visibility across legal operations',
    ],
  },
  {
    slug: 'single-view',
    title: 'Single View for Local Authorities',
    tagline: 'A local authority view of grouped debt, communication and payment history.',
    summary:
      'Match debtor records across departments and create one operational view for negotiation, recovery and service teams.',
    audience:
      'Local authorities and council teams collecting debt across multiple departments and systems.',
    benefits: [
      'Match and merge debtor records intelligently',
      'Set up grouped arrangements across cases',
      'See communications and payments across linked accounts',
    ],
  },
  {
    slug: 'government',
    title: 'Government Debt Recovery',
    tagline: 'Robust and effective debt recovery for government and local authorities.',
    summary:
      'Automate collection activity across the debt lifecycle with reporting, workflows and fair-practice controls.',
    audience:
      'Government bodies and local authorities that need efficient, compliant debt recovery operations.',
    benefits: [
      'Improve productivity across debt recovery teams',
      'Create automated communication and workflow paths',
      'Preserve community relationships with traceable processes',
    ],
  },
  {
    slug: 'credit-control',
    title: 'Credit Control',
    tagline: 'Cloud-based credit control software for modern receivables teams.',
    summary:
      'Automate invoice chasing, customer communications and workflow decisions to protect cash-flow.',
    audience:
      'Finance teams, receivables leaders and credit controllers working across growing debtor books.',
    benefits: [
      'Automate letters, email and SMS',
      'Improve visibility into credit status changes',
      'Reduce debtor days and labour cost',
    ],
  },
  {
    slug: 'breathing-space',
    title: 'Breathing Space',
    tagline: 'Case management software for breathing space monitoring and compliance.',
    summary:
      'Flag protected accounts in real time, report confidently and stay compliant with breathing space regulations.',
    audience:
      'Councils, government teams, legal practices and businesses managing regulated debt respite workflows.',
    benefits: [
      'Flag protected accounts instantly',
      'Report on historical and current status',
      'Support compliance without manual spreadsheets',
    ],
  },
  {
    slug: 'collect-iq',
    title: 'Collect IQ',
    tagline: 'Lateral in-house debt recovery system for workflow automation and tracking.',
    summary:
      'Run debt recovery operations with custom fields, workflows, reporting and integrated communications.',
    audience:
      'Debt recovery teams and service operations that need a flexible in-house operational platform.',
    benefits: [
      'Manage cases more efficiently',
      'Reduce clicks and training time',
      'Integrate easily with third-party systems',
    ],
  },
  {
    slug: 'debt-recovery',
    title: 'Debt Recovery',
    tagline: 'Robust and powerful cloud-based debt recovery software.',
    summary:
      'Use automation, AI-led insight and omni-channel communication to recover debt more efficiently at scale.',
    audience:
      'Agencies, organisations and enterprise teams recovering debt across high-volume workflows.',
    benefits: [
      'Automate recovery activity end to end',
      'Scale throughput without equivalent headcount growth',
      'Improve engagement with better communication timing',
    ],
  },
  {
    slug: 'rent-recovery',
    title: 'Rent Recovery',
    tagline: 'Robust and powerful cloud-based rent recovery software.',
    summary:
      'Streamline rent arrears workflows, improve cash-flow and automate compliant customer engagement.',
    audience:
      'Housing teams, finance teams and organisations managing regulated rent arrears recovery.',
    benefits: [
      'Automate arrears workflows and communications',
      'Improve visibility for escalations and decisions',
      'Reduce labour cost while increasing recovery efficiency',
    ],
  },
  {
    slug: 'matter-management',
    title: 'Matter Management',
    tagline: 'Flexible matter management software for councils, agencies and firms.',
    summary:
      'Organise matters, automate steps, manage documents and increase transparency with cloud-based software.',
    audience:
      'Local councils, government agencies, housing associations and operational legal teams.',
    benefits: [
      'Organise matters and documents in one place',
      'Automate workflows, time tracking and reporting',
      'Improve visibility and operational consistency',
    ],
  },
  {
    slug: 'parking-enforcement',
    title: 'Parking Enforcement',
    tagline: 'Operational workflows for parking and civil enforcement activity.',
    summary:
      'Coordinate enforcement cases, communications and recovery activity through a configurable platform.',
    audience:
      'Enforcement teams and local authorities managing parking or civil recovery processes.',
    benefits: [
      'Track enforcement activity and correspondence',
      'Use workflows to standardise next steps',
      'Improve visibility for management and clients',
    ],
  },
];

const legalSolutionDetail = {
  introId: 'legal-overview',
  heroEyebrow: 'Solutions Legal',
  heroTitle: 'Legal Case Management Software',
  heroDescription:
    'Automation, flexibility and control - designed to handle the needs of lawyers and law firms globally.',
  heroImage: '/solution-assets/legal-hero.jpg',
  heroImageAlt: 'City skyline and landmark architecture',
  heroCtaLabel: 'Learn More',
  heroCtaHref: '#legal-overview',
  introEyebrow: 'Secure cloud-based legal case management software',
  introTitle: 'Designed to streamline legal practice for firms and professionals globally.',
  introLead:
    'Lateral serves law firms, attorneys, solicitors and legal professionals across the UK, US, Canada, Australia and South Africa.',
  introBody: [
    'Lateral legal case management software helps firms manage cases, documents, communications, tasks and reporting in one secure cloud platform.',
    'The system is built to streamline practice operations while giving legal teams flexibility to tailor dashboards, fields, workflows and reporting around their own working methods.',
    'From onboarding and CRM through to document generation, time recording and diary management, Lateral is designed to reduce manual work and improve visibility across every case.',
  ],
  overviewImage: '/home-assets/one-system.png',
  overviewImageAlt: 'Lateral platform showing case information and payments',
  highlightEyebrow: 'Legal toolkit',
  highlightTitle: 'Built for secure, flexible legal operations.',
  keyInclusionsLead:
    'A single environment for legal teams to automate, monitor and improve case progress.',
  keyInclusions: [
    'Custom dashboards, widgets and fields',
    'Workflow automation and decision rules',
    'Document production, bundles and delivery tracking',
    'Task, diary and calendar integration',
    'Reporting, CRM and omni-channel communications',
  ],
  bestFitText:
    'Law firms, solicitors, specialist legal teams and professional service operations that need flexibility and control.',
  differenceEyebrow: 'We deliver flexibility',
  differenceTitle: 'Unlimited flexibility for legal teams of every size.',
  differenceDescription:
    'Lateral is known for flexible legal case management that can be configured around your people, workflows and reporting needs.',
  differenceItems: [
    {
      title: 'Configurable dashboards',
      description:
        'Drag and drop widgets to create new dashboards and case pages around how each team actually works.',
    },
    {
      title: 'Custom fields and markers',
      description:
        'Add fields quickly, create visual case markers and tailor records without waiting on a product release.',
    },
    {
      title: 'Deep operational visibility',
      description:
        'Build imports, reports, workflows and data queries to get a clearer view of clients and case progress.',
    },
  ],
  sections: [
    {
      type: 'cards',
      eyebrow: 'Platform capabilities',
      title: 'Core legal operations in one platform.',
      description:
        'The system combines case handling, communications, documents and automation in a single operating environment.',
      cards: legalOperationsCards,
    },
    {
      type: 'workflowColumns',
      eyebrow: 'Workflows by stage',
      title: 'Support the full legal lifecycle.',
      description:
        'Lateral can be shaped around pre-legal, legal and post-legal operating models.',
      columns: [
        {
          eyebrow: 'Pre-legal',
          title: 'Pre-legal workflows',
          items: [
            'Instalment plan generator',
            'Automatic payment screens',
            'Client reporting',
            'Letter generator',
            'SMS collections',
            'Built-in dialler',
          ],
        },
        {
          eyebrow: 'Legal',
          title: 'Legal workflows',
          items: [
            'Multiple defendant allocation',
            'Alert systems for hearing dates',
            'Legal document generation',
            'Interest calculator',
            'Storage of documents received',
          ],
        },
        {
          eyebrow: 'Post-legal',
          title: 'Post-legal workflows',
          items: [
            'HCEO and bailiff integration',
            'Bankruptcy workflow',
            'Court fee capture',
            'Enforcement workflows',
            'Post-legal document generation',
            'CCJ data capture and storage',
          ],
        },
      ],
    },
    {
      type: 'pills',
      eyebrow: 'Flexible for all manner of law firms',
      title: 'Built for varied legal operating models.',
      items: [
        'Legal accounting software',
        'Law firm time tracking',
        'Legal matter management',
        'Legal document preparation',
        'Legal document management',
        'Law firm mobile app',
        'Legal case management',
        'Criminal legal aid case management',
        'In-house law firm software',
        'Claims management software',
        'Accident management software',
        'Financial claims software',
        'Medico-legal claims software',
        'Costs drafting software',
      ],
    },
  ],
  featuresEyebrow: 'Features and benefits',
  featuresTitle: 'Everything legal teams need to work with more clarity and less friction.',
  features: legalPlatformFeatures,
  testimonial: ianMcManusQuote,
  insightImage: '/solution-assets/legal-office.jpg',
  insightImageAlt: 'Modern office setting for legal and professional teams',
  quoteEyebrow: 'Client impact',
  quote: nigelRossQuote.quote,
  quoteAuthor: `${nigelRossQuote.author}, ${nigelRossQuote.role}`,
  closingText:
    'Get in touch today to find out how Lateral could help streamline your legal case management processes.',
};

const singleViewSolutionDetail = {
  introId: 'single-view-overview',
  heroEyebrow: 'Solutions Single View',
  heroTitle: 'Lateral offers a Single View of Debt to Local Authorities',
  heroDescription:
    'A connected view of debt, communication and recovery activity across disconnected council systems.',
  heroImage: '/solution-assets/government-hero.jpg',
  heroImageAlt: 'City skyline representing local authority operations',
  heroCtaLabel: 'Learn More',
  heroCtaHref: '#single-view-overview',
  introEyebrow: 'Background',
  introTitle: 'One operational view instead of multiple disconnected debt systems.',
  introLead:
    'Councils asked Lateral for a way to see all debt types on one customer in a single view.',
  introBody: [
    'Using separate systems that do not connect creates duplicated collection effort and makes it harder to understand what is owed when agreeing arrangements or communicating with a debtor.',
    'Lateral can integrate with a council\'s wider systems, find likely matches across records and merge debtor views with the flexibility needed for local authority operations.',
    'The result is a stand-alone product that helps teams negotiate better, act faster and work from a shared understanding of the customer.',
  ],
  overviewImage: '/home-assets/one-system.png',
  overviewImageAlt: 'Lateral platform dashboard',
  highlightEyebrow: 'How it works',
  highlightTitle: 'Sophisticated matching built for multiple debt types.',
  keyInclusionsLead:
    'Automatic and user-assisted matching combine to create a reliable single customer view.',
  keyInclusions: [
    'Customizable matching algorithms by debt type',
    'Automatic matching for near-exact data',
    'Potential matching queues for user review',
    'Grouping or merging based on user confidence',
  ],
  bestFitText:
    'Local authorities that need one view across council tax, housing, enforcement or other debt types.',
  differenceEyebrow: 'Benefits',
  differenceTitle: 'A single view improves both service and recovery performance.',
  differenceDescription:
    'Bringing accounts together gives teams more confidence when negotiating with debtors and coordinating internal action.',
  differenceItems: [
    {
      title: 'Reduces labor cost',
      description:
        'Cut repeated work across departments that would otherwise contact and manage the same debtor separately.',
    },
    {
      title: 'Better negotiation',
      description:
        'See debt history across cases to support more informed conversations and payment arrangements.',
    },
    {
      title: 'Group arrangements',
      description:
        'Set up one arrangement to pay down a group of cases instead of handling each account in isolation.',
    },
  ],
  sections: [
    {
      type: 'cards',
      eyebrow: 'Standard features',
      title: 'Everyday visibility for grouped debt management.',
      cards: [
        {
          title: 'Same debtor and grouped cases',
          description:
            'See cases linked to the same debtor as well as grouped records for connected households or entities.',
        },
        {
          title: 'Selectable case sets',
          description:
            'Choose which cases to include, such as open accounts only, and view payments and communication history across them.',
        },
        {
          title: 'Hyperlinks across accounts',
          description:
            'Move easily between linked accounts to speed up investigation and recovery activity.',
        },
        {
          title: 'Customizable case view by debt type',
          description:
            'Tailor views to suit the needs of different departments and debt categories.',
        },
      ],
    },
    {
      type: 'cards',
      eyebrow: 'Advanced features',
      title: 'More control when cases need coordinated action.',
      cards: [
        {
          title: 'Group arrangements',
          description:
            'Select cases for a group arrangement and define the payoff method, such as oldest first or by debt type.',
        },
        {
          title: 'Split and transfer payments',
          description:
            'Distribute payment activity across linked cases where operationally appropriate.',
        },
        {
          title: 'Shared debtor updates',
          description:
            'Edit the debtor record once and propagate the update across all connected cases automatically.',
        },
        {
          title: 'Bulk action across selected accounts',
          description:
            'Run actions such as adding notes or updates across multiple related accounts at the same time.',
        },
      ],
    },
  ],
  featuresEyebrow: 'Core capabilities',
  featuresTitle: 'Designed to support joined-up local authority recovery.',
  features: [
    'Matching across multiple source systems',
    'Potential match review workflows',
    'Shared debtor history across debt types',
    'Payment visibility across selected cases',
    'Communication history across linked accounts',
    'Account navigation shortcuts',
    'Configurable views by debt type',
    'Grouped arrangement management',
  ],
  testimonial: jimRohnQuote,
  insightImage: '/solution-assets/government-hero.jpg',
  insightImageAlt: 'Government and city operations imagery',
  quoteEyebrow: 'Next step',
  quote: 'Get in touch to see how a Single View of Debt can reduce duplication and improve recovery outcomes.',
  quoteAuthor: 'Lateral Technology',
  closingText:
    'Talk to the team to find out how Lateral could help your authority create a connected debt recovery view.',
};

const governmentSolutionDetail = {
  introId: 'government-overview',
  heroEyebrow: 'Solutions Government',
  heroTitle: 'Streamlining Government Debt Recovery',
  heroDescription:
    'Automation, flexibility and control - robust and effective debt recovery for government.',
  heroImage: '/solution-assets/government-hero.jpg',
  heroImageAlt: 'Government and city skyline',
  heroCtaLabel: 'Learn More',
  heroCtaHref: '#government-overview',
  introEyebrow: 'Next generation government software',
  introTitle: 'Cloud-based debt recovery tools for government bodies and local authorities.',
  introLead:
    'Lateral provides automated recovery tools for government bodies and local authorities of all sizes.',
  introBody: [
    'Lateral has been engineered as an ultra-flexible collection software system for council tax debt recovery and local authority debt recovery.',
    'Built on advanced workflow automation and omni-channel VoIP and telephony solutions, the platform covers the full debt lifecycle from invoice generation through to final settlement.',
    'Lateral is committed to fair debt collection practices, pairing productivity gains with traceability, security and community-aware operating standards.',
  ],
  overviewImage: '/home-assets/one-system.png',
  overviewImageAlt: 'Lateral operational dashboard',
  highlightEyebrow: 'Ultra-flexible collection system',
  highlightTitle: 'Designed for productivity, integrity and accurate recovery action.',
  keyInclusionsLead:
    'A configurable operating model for local authority and government debt recovery.',
  keyInclusions: [
    'Workflow automation across the debt lifecycle',
    'Omni-channel VoIP, telephony and digital communications',
    'ISO 27001 aligned secure operating model',
    'Tools that support fair and consistent collection practices',
  ],
  bestFitText:
    'Government bodies and local authorities that need robust, configurable debt recovery software.',
  differenceEyebrow: 'Government and local authority software',
  differenceTitle: 'The Lateral difference for public-sector recovery teams.',
  differenceDescription:
    'Use automation, reporting and controls that help teams move faster while keeping oversight intact.',
  differenceItems: [
    {
      title: 'Real-time information',
      description:
        'Integrate credit reference or web service data with accounting or ERP systems to improve decision making.',
    },
    {
      title: 'Letters',
      description:
        'Automate letters and electronic communications around your ideal recovery process.',
    },
    {
      title: 'Credit limits and holds',
      description:
        'Consult the right decision makers before accounts are placed on hold or recovery status changes are made.',
    },
    {
      title: 'Instant oversight',
      description:
        'Monitor and enforce procedures without tying up valuable employee time in manual control checks.',
    },
  ],
  featuresEyebrow: 'Features and benefits',
  featuresTitle: 'A practical toolkit for government and local authority recovery teams.',
  features: [
    'Automatic letters, email or texts',
    'Log in from anywhere in the world',
    'Compatible with most accounting software',
    'Create your own workflows',
    'Status changes via email, SMS or CRM',
    'Reduce average days debt outstanding',
    'Improve cash-flow',
    'Dispute manager',
    'Cost and time efficiency',
    'CRM for credit controllers',
  ],
  testimonial: jimRohnQuote,
  insightImage: '/solution-assets/debt-insight.jpg',
  insightImageAlt: 'Performance dashboard and chart',
  quoteEyebrow: 'Client impact',
  quote: nigelRossQuote.quote,
  quoteAuthor: `${nigelRossQuote.author}, ${nigelRossQuote.role}`,
  closingText:
    'Get in touch today to find out how our government debt recovery platform could help your organisation.',
};

const creditControlSolutionDetail = {
  introId: 'credit-control-overview',
  heroEyebrow: 'Solutions Credit Control',
  heroTitle: 'The Future of Credit Control Software',
  heroDescription:
    'Automation, flexibility and control - robust and effective credit control software.',
  heroImage: '/solution-assets/credit-control-hero.jpg',
  heroImageAlt: 'Professional finance and office environment',
  heroCtaLabel: 'Learn More',
  heroCtaHref: '#credit-control-overview',
  introEyebrow: 'Next generation cloud-based credit control software',
  introTitle: 'Automate your credit control workflows and protect cash-flow.',
  introLead:
    'Lateral flexible credit control software provides automated credit processing tools for organisations of all sizes around the world.',
  introBody: [
    'Lateral allows teams to automate the creation and delivery of credit control processes through letters, email and SMS using flexible business rules.',
    'Serving organisations of different sizes, the platform frees up staff, saves significant cost and creates a more consistent operating rhythm for receivables teams.',
    'It is a fully flexible system that monitors and enforces procedures automatically, improving labour efficiency without sacrificing control.',
    'Advanced insight from data, AI and machine learning can help organisations decide who to grant credit to and how to chase customers who have not yet paid.',
  ],
  overviewImage: '/solution-assets/credit-control-finance.jpg',
  overviewImageAlt: 'Finance-focused office workspace',
  highlightEyebrow: 'Automate your credit control workflows',
  highlightTitle: 'Built to help teams save on labour cost and boost cash-flow.',
  keyInclusionsLead:
    'A flexible cloud operating model for modern credit control teams.',
  keyInclusions: [
    'Automated communications across letters, email and SMS',
    'Workflow rules for holds, escalations and credit decisions',
    'Real-time data integration with accounting and ERP systems',
    'AI-led insight into debtor behavior and next-best action',
  ],
  bestFitText:
    'Finance teams, credit controllers and organisations looking to modernise receivables operations.',
  differenceEyebrow: 'The Lateral credit control software difference',
  differenceTitle: 'A more controlled, more automated way to chase invoices.',
  differenceDescription:
    'Use live information, automated communication and workflow governance to improve collection outcomes.',
  differenceItems: [
    {
      title: 'Real-time information',
      description:
        'Improve credit decisions by integrating data from agencies and web services with ERP or accounting data.',
    },
    {
      title: 'Letters',
      description:
        'Automate the creation and delivery of letters or digital communications around your ideal process.',
    },
    {
      title: 'Credit limits',
      description:
        'Ensure the right decision makers are consulted before key clients are placed on hold or limits are changed.',
    },
    {
      title: 'Instant oversight',
      description:
        'Monitor and enforce procedures without constantly committing employee resources to manual checks.',
    },
  ],
  featuresEyebrow: 'Features and benefits',
  featuresTitle: 'Purpose-built for credit controllers who need speed, visibility and consistency.',
  features: creditControlFeatures,
  testimonial: jimRohnQuote,
  insightImage: '/solution-assets/credit-control-finance.jpg',
  insightImageAlt: 'Finance metrics and reporting visuals',
  quoteEyebrow: 'Client impact',
  quote: nigelRossQuote.quote,
  quoteAuthor: `${nigelRossQuote.author}, ${nigelRossQuote.role}`,
  closingText:
    'Get in touch today to find out how our credit control software could help your organisation.',
};

const breathingSpaceSolutionDetail = {
  introId: 'breathing-space-overview',
  heroEyebrow: 'Solutions Breathing Space',
  heroTitle: 'Breathing Space case management software is here',
  heroDescription:
    'A cloud-based reporting and case management solution built to support breathing space compliance.',
  heroImage: '/company-assets/reporting.png',
  heroImageAlt: 'Lateral reporting dashboard on a laptop',
  heroCtaLabel: 'Learn More',
  heroCtaHref: '#breathing-space-overview',
  introEyebrow: 'Case management for breathing space',
  introTitle: 'A tried and tested solution for tracking protected customers and staying compliant.',
  introLead:
    'Lateral developed breathing space capability ahead of the legislation coming into effect on 4 May 2021.',
  introBody: [
    'Since 2010, Lateral has developed software products to help local authorities, central government and private clients manage complex case processes.',
    'That foundation made it possible to build an intuitive cloud-based reporting solution for breathing space well ahead of the legislation deadline.',
    'The system helps councils and other organisations log, monitor and report on accounts where debt respite moratorium has been applied, giving teams the visibility they need to stay compliant.',
  ],
  overviewImage: '/home-assets/one-system.png',
  overviewImageAlt: 'Lateral case dashboard',
  highlightEyebrow: 'Ready for breathing space',
  highlightTitle: 'Flag accounts, report clearly and keep control of compliance.',
  keyInclusionsLead:
    'Designed to help teams act quickly without losing the audit trail needed for regulated workflows.',
  keyInclusions: [
    'Real-time flagging of protected accounts',
    'Monitoring and historical data reporting',
    'Fast implementation and practical training',
    'Case management support across government and private-sector teams',
  ],
  bestFitText:
    'Councils, public bodies, legal teams and businesses that need to manage breathing space protections reliably.',
  differenceEyebrow: 'Operational advantages',
  differenceTitle: 'Software that makes breathing space practical to manage.',
  differenceDescription:
    'Use one system to surface protected accounts, streamline review work and keep legal obligations visible.',
  differenceItems: [
    {
      title: 'Real-time flagging',
      description:
        'Apply and monitor breathing space flags instantly across all relevant customer records and views.',
    },
    {
      title: 'Historical reporting',
      description:
        'Report on current and historic breathing space activity without building manual spreadsheets.',
    },
    {
      title: 'Simple rollout',
      description:
        'Deploy quickly with software that is easy to use, easy to train on and practical for operational teams.',
    },
  ],
  sections: [
    {
      type: 'cards',
      eyebrow: 'Core capabilities',
      title: 'The key workflows behind the solution.',
      cards: breathingSpaceCards,
    },
  ],
  featuresEyebrow: 'What the platform supports',
  featuresTitle: 'Built to support compliance without adding more manual effort.',
  features: [
    'Real-time customer flagging',
    'Historical reporting',
    'Cloud-based access',
    'Fast implementation',
    'Simple training',
    'Case management alignment',
    'Audit-ready visibility',
    'Secure handling of sensitive records',
  ],
  testimonial: {
    quote:
      'Lateral currently securely manages billions of transactions and data on behalf of our clients around the world - for government and private clients alike.',
    author: 'Lateral Technology',
  },
  insightImage: '/company-assets/workflow.png',
  insightImageAlt: 'Workflow screen',
  quoteEyebrow: 'Next step',
  quote: 'Breathing space compliance is no longer optional - but the software can still be easy to work with.',
  quoteAuthor: 'Lateral Technology',
  closingText:
    'If you are interested in finding out more about our breathing space case management software or receiving a demo, get in touch today.',
};

const collectIqSolutionDetail = {
  introId: 'collect-iq-overview',
  heroEyebrow: 'Collect IQ',
  heroTitle: 'Flexible debt recovery operations in one configurable workspace.',
  heroDescription:
    'CollectIQ gives teams one in-house platform for workflow control, communications, case progress and reporting.',
  heroImage: '/home-assets/difference.png',
  heroImageAlt: 'CollectIQ-style customer management and workflow dashboard',
  heroCtaLabel: 'View capabilities',
  heroCtaHref: '#collect-iq-overview',
  introEyebrow: 'Debt recovery system',
  introTitle: 'A configurable in-house platform for debt recovery teams.',
  introLead:
    'CollectIQ is built for teams that need workflow flexibility, operational visibility and fewer manual handoffs.',
  introBody: [
    'The platform includes custom fields, manual or automated workflows, integrated text, email and letter templates, and a financial layer for managing fees, commissions and other operational data.',
    'CollectIQ is built to help teams manage cases more efficiently, reduce unnecessary clicks and scrolling, and shorten the time needed to train new staff.',
    'It also supports companion app and field service workflows, while integrating easily with third-party systems that are already part of the operation.',
  ],
  overviewImage: null,
  overviewImageAlt: 'CollectIQ operational dashboard',
  highlightEyebrow: 'Service features',
  highlightTitle: 'Flexible workflow control with integrated communications.',
  keyInclusionsLead:
    'CollectIQ combines operations, communications and reporting in one practical workspace.',
  keyInclusions: [
    'Multiple case types',
    'Intelligent workflows',
    'Bulk processing',
    'Powerful reporting',
    'Document management and permissions',
  ],
  bestFitText:
    'Debt recovery teams and service operations that need a configurable platform rather than rigid off-the-shelf workflow tools.',
  differenceEyebrow: 'Why teams choose CollectIQ',
  differenceTitle: 'Purpose-built to make everyday debt recovery work more efficient.',
  differenceDescription:
    'The platform combines strong operational flexibility with a simpler user experience for case teams.',
  differenceItems: [
    {
      title: 'Optimised user experience',
      description:
        'Reduce clicks and scrolling so users can move through common tasks with less friction.',
    },
    {
      title: 'Easy to learn',
      description:
        'Shorten onboarding and training time with a practical interface and clearer workflow structure.',
    },
    {
      title: 'Flexible integration',
      description:
        'Connect with third-party systems without losing control of your core recovery process.',
    },
  ],
  sections: [
    {
      type: 'cards',
      eyebrow: 'Service highlights',
      title: 'Built for process control and visibility.',
      cards: [
        {
          title: 'Intelligent workflows',
          description:
            'Automate stages, decisions and communication sequences around your own recovery process.',
          image: '/company-assets/workflow.png',
          imageAlt: 'Workflow configuration screen',
        },
        {
          title: 'Powerful reporting',
          description:
            'Track communication, case progress and operational performance through reporting that teams can use day to day.',
          image: '/home-assets/difference.png',
          imageAlt: 'Customer and workflow reporting dashboard',
        },
        {
          title: 'Optimised experience',
          description:
            'A practical interface reduces friction for users handling large case volumes and repeat tasks.',
          image: '/company-assets/reporting.png',
          imageAlt: 'Operational reporting dashboard shown on a laptop',
        },
      ],
    },
    {
      type: 'pills',
      eyebrow: 'Service features',
      title: 'Core CollectIQ capabilities.',
      items: [
        'Multiple case types',
        'Bulk processing',
        'Document management',
        'User permissions',
        'Email, letter and texting integrated',
        'Automated workflows',
        'Create forms and new data types',
        'Custom fields and tags',
      ],
    },
  ],
  featuresEyebrow: 'Service benefits',
  featuresTitle: 'What CollectIQ helps teams achieve.',
  features: [
    'Manage cases more efficiently by streamlining business process',
    'Less clicks and scrolling',
    'Less time to train staff',
    'Companion app available',
    'Field service management support',
    'Integrates with 3rd-party systems easily',
    'Flexible workflow configuration',
    'Operational visibility across cases',
  ],
  testimonial: {
    quote:
      'CollectIQ gives teams one practical environment to automate work, track progress and adapt the process as operations grow.',
    author: 'Lateral Technology',
  },
  insightImage: '/solution-assets/credit-control-finance.jpg',
  insightImageAlt: 'Finance and recovery operations workspace',
  quoteEyebrow: 'Service benefits',
  quote: 'Manage cases more efficiently by streamlining your business process.',
  quoteAuthor: 'Collect IQ',
  closingText:
    'CollectIQ helps teams cut training time, reduce friction and integrate more easily with the wider systems they depend on.',
};

const debtRecoverySolutionDetail = {
  introId: 'debt-recovery-overview',
  heroEyebrow: 'Debt Recovery',
  heroTitle: 'Streamlining Debt Recovery',
  heroDescription:
    'Automation, flexibility and control - robust and powerful cloud-based debt recovery software.',
  heroImage: '/solution-assets/debt-hero.jpg',
  heroImageAlt: 'Urban skyline and commercial architecture',
  heroCtaLabel: 'Learn More',
  heroCtaHref: '#debt-recovery-overview',
  introEyebrow: 'Cloud-based debt recovery software',
  introTitle: 'With our debt recovery software, we protect your most valuable asset - time.',
  introLead:
    'Lateral offers industry-leading cloud-based debt recovery software for agencies and organisations of all sizes.',
  introBody: [
    'Managing and controlling debt has become a top priority for institutions and businesses because late payments have long-lasting implications for cash-flow and profitability.',
    'Lateral debt recovery software is efficient and flexible, using AI and machine learning to automate work and help users make better decisions about who to contact, when and how.',
    'The platform is easy to use, accessible from anywhere and built around advanced omni-channel communications including SMS, WhatsApp, email and chat to create more engaging and professional interactions.',
    'Because the software is agile and scalable, teams can standardise and professionalise the whole recovery process while saving significant time and cost.',
  ],
  overviewImage: '/home-assets/one-system.png',
  overviewImageAlt: 'Debt recovery case management interface',
  highlightEyebrow: 'Debt recovery toolkit',
  highlightTitle: 'Built to automate recovery at scale without losing control.',
  keyInclusionsLead:
    'A full recovery environment for communications, workflow design, payments and operational visibility.',
  keyInclusions: [
    'AI and machine learning led prioritisation',
    'Omni-channel communications',
    'Cloud-based access from anywhere',
    'Workflow automation across the debt lifecycle',
    'Scalable operating model for different industries and regions',
  ],
  bestFitText:
    'Agencies and organisations handling large debt books, regulated recovery work and high-volume communication workflows.',
  differenceEyebrow: 'The Lateral debt recovery solution difference',
  differenceTitle: 'A recovery platform that lets teams scale without manual drag.',
  differenceDescription:
    'Use automation, communications and workflow control to increase throughput and improve debtor engagement.',
  differenceItems: recoveryDifferenceItems,
  featuresEyebrow: 'Features and benefits',
  featuresTitle: 'Everything needed to recover debt more efficiently.',
  features: recoveryFeatures,
  testimonial: jimRohnQuote,
  insightImage: '/solution-assets/debt-insight.jpg',
  insightImageAlt: 'Debt recovery reporting dashboard',
  quoteEyebrow: 'Client impact',
  quote: davidAskerQuote.quote,
  quoteAuthor: `${davidAskerQuote.author}, ${davidAskerQuote.role}`,
  closingText:
    'Get in touch today to find out how Lateral debt recovery software could save you time and help your team recover debt more efficiently.',
};

const matterManagementSolutionDetail = {
  introId: 'matter-management-overview',
  heroEyebrow: 'Matter Management',
  heroTitle: 'Flexible Matter Management Software',
  heroDescription:
    'Automation, flexibility and control - designed to handle the needs of local councils, government agencies, housing associations and more.',
  heroImage: '/solution-assets/legal-office.jpg',
  heroImageAlt: 'Professional office environment',
  heroCtaLabel: 'Learn More',
  heroCtaHref: '#matter-management-overview',
  introEyebrow: 'Cloud-based matter management software',
  introTitle: 'Organise matters, improve transparency and automate the work around them.',
  introLead:
    'Lateral offers secure, industry-leading cloud-based matter management software to help organisations become more organised and efficient.',
  introBody: [
    'By employing Lateral online matter management system, organisations can organise matters and cases in one place, track time and expenses with ease, issue bills promptly and get paid more quickly.',
    'The platform is built on flexible workflows, reporting and automation that can reduce staff workload, improve productivity and help teams make better decisions.',
    'Because Lateral is client-controlled and adaptable, it can support internal processes more effectively than rigid legacy systems or spreadsheets.',
    'Available through one advanced desktop and mobile-ready environment, the platform gives teams fast access to the tools they need wherever they are working.',
  ],
  overviewImage: '/home-assets/one-system.png',
  overviewImageAlt: 'Matter and case management view',
  highlightEyebrow: 'Matter management platform',
  highlightTitle: 'A flexible operating model for matters, documents, time and communications.',
  keyInclusionsLead:
    'Lateral was built to support matter management workflows that need both structure and adaptability.',
  keyInclusions: [
    'Cloud-based access for teams and stakeholders',
    'Automated workflow and decision logic',
    'Integrated documents, diary and communications',
    'Time recording, budgeting and reporting',
    'API integration and configurable reporting',
  ],
  bestFitText:
    'Local councils, government agencies, housing associations, legal teams and operational groups managing complex matter workflows.',
  differenceEyebrow: 'Why Lateral stands out',
  differenceTitle: 'Matter management that can be shaped around your organisation.',
  differenceDescription:
    'Use the platform as a flexible matter tracking system rather than forcing your team into a fixed process.',
  differenceItems: [
    {
      title: 'Built on solutions',
      description:
        'Automate key processes, lift load from staff and create more efficient matter handling from intake to close.',
    },
    {
      title: 'Client-controlled flexibility',
      description:
        'Tailor dashboards, fields, workflows and reports so the platform mirrors your own internal process.',
    },
    {
      title: 'Designed for modernisation',
      description:
        'Replace fragmented tools and spreadsheets with a scalable online matter management system.',
    },
  ],
  sections: [
    {
      type: 'cards',
      eyebrow: 'Core matter capabilities',
      title: 'The functions matter teams rely on most.',
      cards: matterManagementCards,
    },
    {
      type: 'cards',
      eyebrow: 'Extended platform capabilities',
      title: 'Integration, reporting and communications built in.',
      cards: [
        {
          title: 'Integration',
          description:
            'Connect to other systems through API web services or batch data exchange for legacy environments.',
        },
        {
          title: 'Reporting and Batch Actions',
          description:
            'Build user-defined reports, schedule outputs and batch-action results without manual intervention.',
        },
        {
          title: 'VoIP, Email, Text Messaging and Chat',
          description:
            'Run omni-channel communications and decision rules from inside the matter management platform.',
        },
      ],
    },
    {
      type: 'pills',
      eyebrow: 'Matter management workflows',
      title: 'Flexible for all manner of organisations.',
      items: [
        'Legal accounting software',
        'Law firm time tracking',
        'Legal matter management',
        'Legal document preparation',
        'Legal document management',
        'Law firm mobile app',
        'Legal case management',
        'Matter management',
        'In-house matter management software',
        'Claims management software',
        'Accident management software',
        'Financial claims software',
        'Medico-legal claims software',
        'Costs drafting software',
      ],
    },
  ],
  featuresEyebrow: 'Features and benefits',
  featuresTitle: 'A practical toolkit for modern matter management teams.',
  features: legalPlatformFeatures,
  testimonial: ianMcManusQuote,
  insightImage: '/solution-assets/legal-office.jpg',
  insightImageAlt: 'Office and professional work environment',
  quoteEyebrow: 'Client impact',
  quote: nigelRossQuote.quote,
  quoteAuthor: `${nigelRossQuote.author}, ${nigelRossQuote.role}`,
  closingText:
    'Get in touch today to find out how Lateral could help streamline your matter management processes.',
};

const rentRecoverySolutionDetail = {
  introId: 'rent-recovery-overview',
  heroEyebrow: 'Rent Recovery',
  heroTitle: 'The Future of Rent Recovery Software',
  heroDescription:
    'Automation, flexibility and control - robust and powerful cloud-based rent recovery software.',
  heroImage: '/solution-assets/credit-control-hero.jpg',
  heroImageAlt: 'Professional services and operations team setting',
  heroCtaLabel: 'Learn More',
  heroCtaHref: '#rent-recovery-overview',
  introEyebrow: 'Cloud-based rent recovery software',
  introTitle: 'With our rent recovery software, we protect your most valuable asset - time.',
  introLead:
    'Lateral offers industry-leading cloud-based rent recovery software for agencies and organisations of all sizes.',
  introBody: [
    'Lateral rent recovery solution helps finance teams become more efficient and handle greater volumes of work by streamlining the recovery process through automated workflows.',
    'Advanced AI and machine learning give users insight into who is likely to pay rent arrears, when they are likely to pay and under what circumstances.',
    'The platform is customer-centric, cloud-based, scalable and easy to tailor, so teams can create their own workflows and integrate with accounting systems while maintaining visibility over the whole process.',
    'With omni-channel communications, strong regulatory awareness and ISO 27001 credentials, Lateral supports compliant rent recovery in demanding environments.',
  ],
  overviewImage: '/home-assets/one-system.png',
  overviewImageAlt: 'Rent recovery workflow interface',
  highlightEyebrow: 'Rent recovery toolkit',
  highlightTitle: 'Built for arrears visibility, automation and compliant recovery.',
  keyInclusionsLead:
    'A cloud-based operating model for housing and finance teams managing rent arrears.',
  keyInclusions: [
    'Automated rent recovery workflows',
    'AI and machine learning insight',
    'Customer-centric communication strategy',
    'Accounting system integration',
    'Omni-channel correspondence including SMS, WhatsApp, email and chat',
  ],
  bestFitText:
    'Housing teams, finance teams and organisations where rent recovery forms a significant part of the workload.',
  differenceEyebrow: 'The Lateral rent recovery solution difference',
  differenceTitle: 'Recover arrears faster without losing control of the process.',
  differenceDescription:
    'Use automation, payment options and workflow governance to improve cash-flow while keeping communications aligned to each account.',
  differenceItems: recoveryDifferenceItems,
  featuresEyebrow: 'Features and benefits',
  featuresTitle: 'Everything needed to run efficient rent recovery operations.',
  features: recoveryFeatures,
  testimonial: jimRohnQuote,
  insightImage: '/solution-assets/credit-control-finance.jpg',
  insightImageAlt: 'Operational finance and reporting visual',
  quoteEyebrow: 'Client impact',
  quote: davidAskerQuote.quote,
  quoteAuthor: `${davidAskerQuote.author}, ${davidAskerQuote.role}`,
  closingText:
    'Get in touch today to find out how Lateral rent recovery software could save you time and help your team recover debt more efficiently.',
};

const parkingEnforcementSolutionDetail = {
  introId: 'parking-enforcement-overview',
  heroEyebrow: 'Parking Enforcement',
  heroTitle: 'The Future of Parking Enforcement Software',
  heroDescription:
    'Automation, flexibility and control - robust and powerful cloud-based parking enforcement software.',
  heroImage: '/solution-assets/debt-hero.jpg',
  heroImageAlt: 'Urban skyline representing city and enforcement operations',
  heroCtaLabel: 'Learn More',
  heroCtaHref: '#parking-enforcement-overview',
  introEyebrow: 'Cloud-based parking enforcement software',
  introTitle: 'With our parking enforcement software, we protect your most valuable asset - time.',
  introLead:
    'Lateral offers industry-leading cloud-based parking enforcement software for agencies and groups of all sizes.',
  introBody: [
    'Lateral is a complete software solution for parking enforcement that can be accessed and managed by parking operators, property developers and local government agencies.',
    'From the first issue of a PCN through to appeals and debt recovery, the platform is designed as an all-in-one environment for handling the full parking enforcement lifecycle.',
    'Built over a decade of innovation, the software combines advanced debt recovery, automated workflows, full case management and omni-channel communications to reduce manual processing cost and eliminate avoidable errors.',
    'Because the system is cloud-based, teams only need a compatible web browser to access it, which gives staff flexibility without compromising security.',
    'Artificial intelligence and machine learning help create a highly effective, consistent and scalable enforcement operation that speeds up case resolution and improves return on investment.',
  ],
  overviewImage: '/home-assets/one-system.png',
  overviewImageAlt: 'Parking enforcement and case management interface',
  highlightEyebrow: 'Parking enforcement toolkit',
  highlightTitle: 'Built to automate the full parking enforcement cycle.',
  keyInclusionsLead:
    'One cloud platform for PCNs, appeals, communications, debt recovery and operational control.',
  keyInclusions: [
    'Case management from PCN issue through recovery',
    'Automated enforcement workflows and escalations',
    'Omni-channel communications for consistent customer contact',
    'Cloud-based access through a compatible web browser',
    'AI and machine learning support for effective enforcement operations',
  ],
  bestFitText:
    'Parking operators, property developers and local government agencies managing enforcement activity at scale.',
  differenceEyebrow: 'The Lateral parking enforcement solution difference',
  differenceTitle: 'Automate enforcement work without losing operational control.',
  differenceDescription:
    'Use workflow design, communications and payment options to improve case throughput from first notice to final recovery.',
  differenceItems: [
    {
      title: 'Automated everything!',
      description:
        'Automated customer contact can cover the entire parking enforcement cycle from first notice through final recovery activity.',
    },
    {
      title: 'Payment options',
      description:
        'Offer 24/7 payment methods through automated phone, SMS, web portal and barcoded letters.',
    },
    {
      title: 'Control letters, calls and text',
      description:
        'Use automated workflow and decisions to pick the best communication method for each case stage.',
    },
    {
      title: 'Team management',
      description:
        'Split enforcement teams by client or product type to concentrate experience and operational knowledge.',
    },
    {
      title: 'Client communications',
      description:
        'All enforcement activity and results can be viewed in real time through a secure online client portal.',
    },
    {
      title: 'Adaptable workflow generator',
      description:
        'Adapt strategy across cases, geographical locations and debt types to continually improve performance.',
    },
  ],
  featuresEyebrow: 'Features and benefits',
  featuresTitle: 'Everything needed to run efficient parking enforcement operations.',
  features: recoveryFeatures,
  testimonial: jimRohnQuote,
  insightImage: '/solution-assets/debt-insight.jpg',
  insightImageAlt: 'Enforcement reporting and dashboard visual',
  quoteEyebrow: 'Client impact',
  quote: davidAskerQuote.quote,
  quoteAuthor: `${davidAskerQuote.author}, ${davidAskerQuote.role}`,
  closingText:
    'Get in touch today to find out how Lateral parking enforcement software could save you time and help your team recover debt more efficiently.',
};

export const solutionDetailContent = {
  legal: legalSolutionDetail,
  'single-view': singleViewSolutionDetail,
  government: governmentSolutionDetail,
  'credit-control': creditControlSolutionDetail,
  'breathing-space': breathingSpaceSolutionDetail,
  'collect-iq': collectIqSolutionDetail,
  'debt-recovery': debtRecoverySolutionDetail,
  'matter-management': matterManagementSolutionDetail,
  'rent-recovery': rentRecoverySolutionDetail,
  'parking-enforcement': parkingEnforcementSolutionDetail,
};

export const articles = [
  {
    slug: 'cubs-retiring-2025-migration-checklist',
    category: 'Migration',
    published: 'Jan 2025',
    title: 'CUBS retiring in 2025: a migration checklist for operations teams',
    excerpt:
      'A practical checklist for teams preparing to move off ageing workflow platforms without losing visibility or process control.',
    body: [
      'With CUBS retirement dates on the horizon, many operations teams are reviewing how much of their workflow still depends on ageing systems and manual workarounds.',
      'The safest migrations start by mapping the operational reality first: case types, reporting needs, communication channels, user roles and downstream integrations.',
      'From there, teams can prioritise the workflows that create the most operational drag and design a phased rollout that protects service quality while the platform changes underneath.',
      'Lateral is often used in these moments because it can consolidate case handling, communications and reporting without forcing every team into the same rigid model.',
    ],
  },
  {
    slug: 'decision-engine-streamlining-business-processes',
    category: 'Automation',
    published: 'Feb 2025',
    title: 'How decision engines streamline business processes',
    excerpt:
      'Decision logic can remove repeat work, speed up next steps and make customer treatment more consistent across teams.',
    body: [
      'A well-designed decision engine reduces the amount of manual judgment needed for routine process steps while leaving people in control of exceptions and higher-value decisions.',
      'That makes it especially useful in collections, legal and case-led operations where timing, consistency and auditability matter as much as throughput.',
      'In Lateral, teams can trigger actions based on dates, completed tasks, statuses or custom criteria, which helps standardise execution without sacrificing flexibility.',
      'The result is not just faster processing, but better visibility into why specific actions were taken and what outcome they produced.',
    ],
  },
  {
    slug: 'iso-27001-data-security-privacy',
    category: 'Security',
    published: 'Mar 2025',
    title: 'Why ISO 27001 still matters for data security and privacy',
    excerpt:
      'Security frameworks remain a practical way to build confidence in how sensitive operational data is handled.',
    body: [
      'For organisations handling sensitive financial, legal or government data, information security is not a side consideration - it is part of the operating model.',
      'ISO 27001 helps create structure around risk management, access, monitoring and continuous improvement, which is why it remains a strong signal for clients and procurement teams.',
      'Certification alone is not the answer, but it creates a disciplined foundation for the policies, controls and audit practices that protect customer and operational data.',
      'In regulated environments, that foundation makes it easier to modernise systems without weakening trust.',
    ],
  },
];

export const offices = [
  {
    name: 'UK Office',
    address: 'Frogmore House, 6 Ormond Pl, Cheltenham GL50 1JD, UK',
    phone: '+44 (0)1242 802352',
  },
  {
    name: 'US Office',
    address: '950 Glenn Drive, Suite 160, Folsom, CA 95630, USA',
    phone: '+1 888 980 9641',
  },
];

export const footerLinks = {
  company: [
    { to: '/platform', label: 'Platform' },
    { to: '/company', label: 'Company' },
    { to: '/thinking', label: 'Thinking' },
    { to: '/contact', label: 'Contact' },
  ],
  solutions: [
    { to: '/solutions/breathing-space', label: 'Breathing Space Solution' },
    { to: '/solutions/collect-iq', label: 'Collect IQ' },
    { to: '/solutions/debt-recovery', label: 'Debt Recovery' },
    { to: '/solutions/rent-recovery', label: 'Rent Recovery' },
    { to: '/solutions/matter-management', label: 'Matter Management' },
    { to: '/solutions/parking-enforcement', label: 'Parking Enforcement' },
  ],
};
