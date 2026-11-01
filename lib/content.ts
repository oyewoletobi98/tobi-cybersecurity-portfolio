
export const profile = {
  name: 'Tobi Oyewole',
  initials: 'TO',
  role: 'Cyber Security Undergraduate',
  institution: 'University of Staffordshire',
  timeZone: 'Europe/London',
  email: 'oyewoletobi98@gmail.com',
  availability: 'Open to opportunities',
  socials: [
    { label: 'GitHub', href: 'https://github.com/oyewoletobi98' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/oluwatobi-oyewole/' },
  ],
}

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export const stats = [
  { value: '100%', label: 'Cisco Packet Tracer practical' },
  { value: '94%', label: 'Operating Systems practical' },
  { value: '2', label: 'Certifications in progress' },
]

export const careerInterests = [
  {
    title: 'Governance, Risk & Compliance',
    description: 'How organisations identify, measure and manage cyber risk — and evidence that they do.',
  },
  {
    title: 'AI Governance & Responsible AI',
    description: 'Making sure AI systems are adopted safely, transparently and accountably.',
  },
  {
    title: 'Identity & Access Management',
    description: 'Ensuring the right people have the right access, for the right reasons.',
  },
]

export type ExperienceItem = {
  period: string
  role: string
  company: string
  department: string
  summary: string
  responsibilities: string[]
  tags: string[]
}

export const experience: ExperienceItem[] = [
  {
    period: 'Internship',
    role: 'Office Intern',
    company: 'NatWest',
    department: 'Treasury & Risk Department',
    summary:
      'Supported the Treasury & Risk team with data analysis, research and reporting inside a major UK bank.',
    responsibilities: [
      'Organised and analysed financial data using Excel.',
      'Worked with Liquidity Headroom Analysis.',
      'Researched cyber threats and market trends.',
      'Reviewed reports and documentation.',
      'Collaborated with colleagues on projects and presentations.',
    ],
    tags: ['Excel', 'Data analysis', 'Liquidity Headroom', 'Threat research', 'Reporting'],
  },
]

export type EducationItem = {
  qualification: string
  institution?: string
  period?: string
  status: 'in-progress' | 'completed'
  description: string
}

export const education: EducationItem[] = [
  {
    qualification: 'BSc (Hons) Cyber Security',
    institution: 'University of Staffordshire',
    period: '2025 — 2029',
    status: 'in-progress',
    description: 'Undergraduate degree covering the technical and organisational foundations of cyber security.',
  },
  {
    qualification: 'Level 3 BTEC Extended Diploma in IT',
    period: 'Further education',
    status: 'completed',
    description: 'Completed vocational qualification providing a broad foundation in information technology.',
  },
]

export const skillGroups = [
  {
    title: 'Programming',
    description: 'Writing scripts and programs, and querying structured data.',
    skills: ['Python', 'Java', 'SQL'],
    context: null,
  },
  {
    title: 'Web',
    description: 'Building and understanding the structure of web pages and front-end behaviour.',
    skills: ['HTML', 'CSS', 'JavaScript'],
    context: null,
  },
  {
    title: 'Systems',
    description: 'Working in Linux environments from the command line.',
    skills: ['Linux', 'Ubuntu'],
    context: null,
  },
  {
    title: 'Networking',
    description: 'Networking fundamentals and building simulated networks.',
    skills: ['Networking fundamentals', 'Cisco Packet Tracer'],
    context: '100% practical result',
  },
  {
    title: 'Security',
    description: 'Core principles of cyber security, threats and defensive practice.',
    skills: ['Cybersecurity fundamentals'],
    context: 'CCNA & Security+ in progress',
  },
  {
    title: 'Data',
    description: 'Organising, analysing and presenting data to support decisions.',
    skills: ['Excel', 'Data analysis'],
    context: 'Applied at NatWest',
  },
]

export const achievements = [
  {
    value: 100,
    title: 'Cisco Packet Tracer',
    label: 'Practical assessment result',
  },
  {
    value: 94,
    title: 'Operating Systems',
    label: 'Practical assessment result',
  },
]

export type Project = {
  index: string
  title: string
  type: string
  status: string
  summary: string
  metric?: { value: string; label: string }
  details: { label: string; value: string }[]
  tags: string[]
}

export const projects: Project[] = [
  {
    index: '01',
    title: 'Cisco Packet Tracer network practical',
    type: 'Academic practical',
    status: 'Completed',
    summary:
      'A practical assessment applying networking fundamentals inside Cisco Packet Tracer’s simulated environment.',
    metric: { value: '100%', label: 'Result' },
    details: [
      { label: 'Focus', value: 'Applying networking fundamentals in a simulated environment.' },
      { label: 'Tools', value: 'Cisco Packet Tracer' },
    ],
    tags: ['Networking', 'Cisco Packet Tracer'],
  },
  {
    index: '02',
    title: 'Operating Systems practical',
    type: 'Academic practical',
    status: 'Completed',
    summary: 'A hands-on practical assessment demonstrating operating systems knowledge.',
    metric: { value: '94%', label: 'Result' },
    details: [{ label: 'Focus', value: 'Practical application of operating systems concepts.' }],
    tags: ['Operating systems'],
  },
]

export type PlannedProject = {
  index: string
  title: string
  area: string
  summary: string
  tags: string[]
}

export const plannedProjects: PlannedProject[] = [
  {
    index: 'P1',
    title: 'Cybersecurity Risk Assessment',
    area: 'GRC',
    summary: 'Identifying threats, evaluating likelihood and impact, and recommending security controls.',
    tags: ['Threat identification', 'Likelihood & impact', 'Security controls'],
  },
  {
    index: 'P2',
    title: 'AI Governance Framework',
    area: 'AI governance',
    summary: 'Exploring responsible AI adoption, AI risks, accountability and governance.',
    tags: ['Responsible AI', 'AI risk', 'Accountability'],
  },
  {
    index: 'P3',
    title: 'IAM Security Lab',
    area: 'IAM',
    summary: 'Exploring identity management, access permissions and least-privilege principles.',
    tags: ['Identity management', 'Access permissions', 'Least privilege'],
  },
]

export const certifications = [
  {
    name: 'CCNA',
    fullName: 'Cisco Certified Network Associate',
    issuer: 'Cisco',
    status: 'Studying',
  },
  {
    name: 'Security+',
    fullName: 'CompTIA Security+',
    issuer: 'CompTIA',
    status: 'Studying',
  },
]
