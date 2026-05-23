window.SmartSiteBotConfig = {
  businessName: 'Barco Assist',
  title: 'Barco Assist',
  subtitle: 'Facilities support and maintenance enquiries',
  botTitle: 'Barco Assist Support',
  botSubtitle: 'Maintenance, hygiene and facilities support',
  whatsappNumber: '',
  genericMessage: 'Hi Barco Assist, I need help with maintenance, hygiene, compliance or facilities support.',
  fallback: 'I can still help route your support enquiry. Please send a few more details.',
  emailSubject: 'Barco Assist support enquiry',
  introMessage: 'Hello 👋 I can help with Barco Assist maintenance, hygiene, COC-related services, reporting visibility and facilities support questions. Choose an option or type your question.',
  quickReplies: [
    'Maintenance support',
    'COC services',
    'Hygiene support',
    'Technology & reporting',
    'Retail or commercial site',
    'Body corporate support',
    'Contact the team'
  ],
  parameters: [
    { keywords: ['hello', 'hi', 'hey'], reply: 'Hello 👋 I can help with Barco Assist maintenance, hygiene, COC services and facilities support routing.' },
    { keywords: ['maintenance', 'repair', 'fix', 'reactive', 'planned'], reply: 'Barco Assist supports reactive and planned maintenance. Please send the issue, site type, location and urgency.' },
    { keywords: ['coc', 'certificate of compliance', 'compliance'], reply: 'Yes — COC services are part of the Barco Assist maintenance offering.' },
    { keywords: ['hygiene', 'cleaning', 'sanitize', 'sanitise'], reply: 'Barco Assist also supports hygiene-focused service environments. Please share the site type, size and support frequency needed.' },
    { keywords: ['technology', 'reporting', 'dashboard', 'real-time'], reply: 'Barco Assist uses reporting visibility and maintenance oversight to help owners, managers and facilities teams stay informed.' },
    { keywords: ['commercial', 'retail', 'student accommodation', 'body corporate', 'landlord'], reply: 'Barco Assist supports commercial sites, retail portfolios, residential properties, private landlords and body corporates.' },
    { keywords: ['contact', 'agent', 'human', 'team'], reply: 'Please share your name, site location, service need and urgency so your support enquiry can be routed properly.' }
  ],
  autoUpdateFromSite: true,
  sitePages: [
    { label: 'About', href: 'index.html#about' },
    { label: 'Maintain', href: 'index.html#maintain' },
    { label: 'Hygiene', href: 'index.html#hygiene' },
    { label: 'Technology', href: 'index.html#technology' },
    { label: 'Contact', href: 'index.html#contact' }
  ],
  siteAnswers: [
    { keywords: ['maintenance', 'maintain'], reply: 'The Maintain section covers commercial maintenance, retail maintenance, student accommodation support, holistic building care and COC services.', links: [{ label: 'Open Maintain', href: 'index.html#maintain' }] },
    { keywords: ['hygiene'], reply: 'The Hygiene section explains how Barco Assist supports cleaner, better-presented facilities and stronger daily site standards.', links: [{ label: 'Open Hygiene', href: 'index.html#hygiene' }] },
    { keywords: ['technology', 'reporting'], reply: 'The Technology section shows how Barco Assist gives clients better visibility into service activity, maintenance needs and site performance.', links: [{ label: 'Open Technology', href: 'index.html#technology' }] },
    { keywords: ['contact', 'office', 'location'], reply: 'Barco Assist is presented from 66A Section St, Paarden Eiland, Cape Town, 7405.', links: [{ label: 'Open Contact', href: 'index.html#contact' }] }
  ]
};
