export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  role: string;
  organization: string;
  overview: string;
  challenge: string;
  approach: string[];
  impact: string[];
  heroImage: string;
  images: string[];
  tags: string[];
}

export const caseStudies: Record<string, CaseStudy> = {
  'shell-energy': {
    slug: 'shell-energy',
    title: 'Shell Energy Design System',
    subtitle: 'Building a scalable design foundation for global digital expansion',
    category: 'Design Systems',
    year: '2023-2024',
    role: 'Lead Product Designer',
    organization: 'IBM iX',
    overview: 'A comprehensive design system supporting Shell Energy\'s digital transformation across multiple countries and regions, enabling consistent, scalable experiences for residential and business energy customers.',
    challenge: 'Shell Energy needed to rapidly expand their digital presence across diverse markets while maintaining brand consistency and design quality. The existing fragmented approach led to inconsistent user experiences and inefficient development cycles.',
    approach: [
      'Conducted extensive audit of existing digital properties across regions',
      'Established design principles rooted in accessibility and sustainability',
      'Created modular component library with extensive documentation',
      'Developed governance model for system adoption and maintenance',
      'Collaborated with engineering teams to ensure seamless implementation',
    ],
    impact: [
      'Reduced design-to-development time by 40%',
      'Achieved WCAG AA compliance across all components',
      'Enabled consistent experiences across 5+ regional markets',
      'Accelerated product team velocity through reusable patterns',
    ],
    heroImage: 'https://images.unsplash.com/photo-1562601555-513820e5d0eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2OTg5OTE0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1763191213523-1489179a1088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBkaWdpdGFsJTIwZGVzaWdufGVufDF8fHx8MTc2OTk3NDI1MXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1562601555-513820e5d0eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2OTg5OTE0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    tags: ['Design Systems', 'Enterprise', 'Global Scale', 'Accessibility'],
  },
  'ask-chevron': {
    slug: 'ask-chevron',
    title: 'AskChevron Virtual Agent',
    subtitle: 'AI-powered support for employee HR needs',
    category: 'AI & Product Design',
    year: '2024',
    role: 'Product Designer',
    organization: 'IBM',
    overview: 'A conversational AI virtual agent designed to streamline employee access to HR information and resources, reducing support ticket volume and improving employee satisfaction.',
    challenge: 'Chevron employees faced long wait times and fragmented information when seeking HR support. The company needed a scalable solution that could handle thousands of concurrent queries while maintaining a human-centered experience.',
    approach: [
      'Conducted user research with HR staff and employees to identify pain points',
      'Designed conversational flows that feel natural and empathetic',
      'Created fallback patterns for complex queries requiring human intervention',
      'Developed comprehensive training dataset in collaboration with HR teams',
      'Implemented feedback loops for continuous improvement',
    ],
    impact: [
      'Reduced average HR query resolution time from 48 hours to minutes',
      '78% of queries successfully resolved without human intervention',
      'Achieved 4.6/5 employee satisfaction rating',
      'Scaled to support 50,000+ employees globally',
    ],
    heroImage: 'https://images.unsplash.com/photo-1757310998437-b2e8a7bd2e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGNoYXRib3QlMjBpbnRlcmZhY2UlMjBzY3JlZW58ZW58MXx8fHwxNzY5OTc0MzA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1521386787102-15154d6bbca1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwYWJzdHJhY3QlMjBjb3Jwb3JhdGV8ZW58MXx8fHwxNzY5OTc0MjUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1757310998437-b2e8a7bd2e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGNoYXRib3QlMjBpbnRlcmZhY2UlMjBzY3JlZW58ZW58MXx8fHwxNzY5OTc0MzA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    tags: ['AI/ML', 'Virtual Agent', 'HR Tech', 'Conversational Design'],
  },
  'att-smb': {
    slug: 'att-smb',
    title: 'AT&T SMB E-Commerce',
    subtitle: 'Redesigning the digital shopping experience for small businesses',
    category: 'User Research & E-Commerce',
    year: '2022-2023',
    role: 'Senior Product Designer',
    organization: 'Amazon',
    overview: 'A comprehensive redesign of AT&T\'s SMB e-commerce platform, grounded in deep user research and focused on simplifying the complex process of selecting business telecommunications services.',
    challenge: 'Small business owners found AT&T\'s digital purchasing experience overwhelming and confusing. The platform failed to address the unique needs of SMB customers, resulting in high abandonment rates and reliance on costly sales representatives.',
    approach: [
      'Conducted 40+ in-depth interviews with small business owners',
      'Mapped customer journey to identify friction points and opportunities',
      'Developed recommendation engine to simplify product selection',
      'Created guided experiences for different business types and needs',
      'Iteratively tested prototypes with target users',
    ],
    impact: [
      'Increased conversion rate by 32%',
      'Reduced cart abandonment by 24%',
      'Decreased reliance on phone sales by 40%',
      'Improved customer satisfaction scores by 28%',
    ],
    heroImage: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwc2hvcHBpbmd8ZW58MXx8fHwxNzY5OTM5NjQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3Njk5MjAxMTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwc2hvcHBpbmd8ZW58MXx8fHwxNzY5OTM5NjQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    tags: ['User Research', 'E-Commerce', 'SMB', 'Journey Mapping'],
  },
  'service-design': {
    slug: 'service-design',
    title: 'Strategy & Service Design',
    subtitle: 'Translating operational complexity into intuitive systems',
    category: 'Service Design',
    year: '2021-2024',
    role: 'Service Design Lead',
    organization: 'Multiple Clients',
    overview: 'A collection of service design engagements focused on translating complex operational changes into intuitive, enterprise-wide systems through strategic workshops, stakeholder alignment, and systems thinking.',
    challenge: 'Enterprise organizations struggle to align diverse stakeholder needs while implementing operational changes. Traditional approaches often prioritize technology over human needs, resulting in poor adoption and suboptimal outcomes.',
    approach: [
      'Facilitated cross-functional workshops to uncover hidden needs and pain points',
      'Mapped current and future-state service blueprints',
      'Designed touchpoints across digital and physical channels',
      'Created prototypes to validate concepts with real users',
      'Developed implementation roadmaps aligned with organizational capacity',
    ],
    impact: [
      'Improved employee satisfaction scores by 35% on average',
      'Reduced operational costs through streamlined processes',
      'Increased cross-departmental collaboration and alignment',
      'Created reusable frameworks for future service design initiatives',
    ],
    heroImage: 'https://images.unsplash.com/photo-1533749871411-5e21e14bcc7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhdGVnaWMlMjBwbGFubmluZyUyMHdvcmtzaG9wJTIwd2hpdGVib2FyZHxlbnwxfHx8fDE3Njk5NzQzMDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1731910275165-5e5e4052d28d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwd29ya3NwYWNlJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3Njk5NzQyNTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1533749871411-5e21e14bcc7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhdGVnaWMlMjBwbGFubmluZyUyMHdvcmtzaG9wJTIwd2hpdGVib2FyZHxlbnwxfHx8fDE3Njk5NzQzMDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    tags: ['Strategy', 'Service Design', 'Enterprise', 'Systems Thinking'],
  },
};
