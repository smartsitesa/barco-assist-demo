window.SmartSiteBotConfig = {
  businessName: 'Barco Assist',
  title: 'Barco Assist',
  subtitle: 'Maintenance, hygiene and support routing',
  botTitle: 'Barco Assist AI',
  botSubtitle: 'Assist triage assistant',
  whatsappNumber: '',
  genericMessage: 'Hi Barco Assist, I need help with maintenance, hygiene, technology support, or an after-hours service enquiry.',
  fallback: 'I do not have the exact final routing detail yet, but I can still guide your enquiry.',
  emailSubject: 'Barco Assist support enquiry',
  introMessage: 'Hello 👋 I can help with Barco Assist maintenance, hygiene, technology, support routing, and contact questions. Choose an option or type your question.',
  quickReplies: [
    'I need maintenance help',
    'COC services',
    'Hygiene support',
    'Technology services',
    'After-hours enquiry',
    'Software integration',
    'Contact the team'
  ],
  parameters: [
    { keywords: ['hello', 'hi', 'hey'], reply: 'Hello 👋 I can help with Barco Assist maintenance, hygiene, technology, software direction, and contact routing.' },
    { keywords: ['maintenance', 'repair', 'fix', 'maintain'], reply: 'Barco Assist is positioned to support reactive and planned maintenance. Please share the issue, location, urgency, and site type so your enquiry can be routed properly.' },
    { keywords: ['coc', 'certificate of compliance', 'compliance'], reply: 'Yes — the document brief specifically includes COC services as part of the Maintain page and support positioning.' },
    { keywords: ['hygiene', 'cleaning', 'sanitize', 'sanitise'], reply: 'The Hygiene section is intended for routine hygiene support, deeper cleaning needs, and presentation-sensitive environments.' },
    { keywords: ['technology', 'dashboard', 'reporting', 'visibility'], reply: 'The Technology section is framed around service visibility, reporting support, dashboards, and integration-ready operations thinking.' },
    { keywords: ['software', 'ai integration', 'integration', 'red rabbit'], reply: 'The software roadmap is being positioned around AI integration, ticketing, reporting, dashboards, and broader operational tooling for Barco Assist.' },
    { keywords: ['after hours', 'after-hours', 'emergency', 'urgent'], reply: 'After-hours and emergency contact details still need to be confirmed, but the contact flow is already structured to receive that routing cleanly.' },
    { keywords: ['contact', 'agent', 'human', 'speak to someone'], reply: 'I can help route your support enquiry. Please send your name, location, service type, urgency, and what outcome you need.' }
  ],
  autoUpdateFromSite: true,
  sitePages: [
    { label: 'Welcome', href: 'index.html#welcome' },
    { label: 'Maintain', href: 'index.html#maintain' },
    { label: 'Hygiene', href: 'index.html#hygiene' },
    { label: 'Technology', href: 'index.html#technology' },
    { label: 'Contact', href: 'index.html#contact' }
  ],
  siteAnswers: [
    { keywords: ['maintain page', 'maintenance'], reply: 'The Maintain section covers reactive support, planned maintenance, compliance support, and COC services.', links: [{ label: 'Open Maintain section', href: 'index.html#maintain' }] },
    { keywords: ['hygiene page', 'hygiene'], reply: 'The Hygiene section gives Barco Assist a dedicated service lane for routine and deeper site care.', links: [{ label: 'Open Hygiene section', href: 'index.html#hygiene' }] },
    { keywords: ['technology page', 'technology'], reply: 'The Technology section presents dashboards, reporting, and visibility-led support rather than vague tech jargon.', links: [{ label: 'Open Technology section', href: 'index.html#technology' }] },
    { keywords: ['contact', 'after hours', 'emergency'], reply: 'The contact section is structured for AI-guided triage now and can absorb final emergency / after-hours details once supplied.', links: [{ label: 'Open Contact section', href: 'index.html#contact' }] }
  ]
};
