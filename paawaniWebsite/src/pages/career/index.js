import {
  Users,
  DollarSign,
  Heart,
  Award,
  Coffee,
  Car,
  Calendar,
  TrendingUp,
  Shield,
  BookOpen,
} from "lucide-react";
import workspace from "@/assets/office/workspace.webp"
import collab from "@/assets/office/4.webp"
import growth from "@/assets/office/3.webp"

export const departments = [
  "All",
  "Engineering",
  "Business Development",
  "Marketing",
  "Operations",
  "Finance",
  "Human Resources",
];

export const jobOpenings = [
  {
    id: 1,
    title: "Senior Business Development Manager",
    department: "Business Development",
    location: "Mumbai",
    type: "Full-time",
    experience: "5-8 years",
    description:
      "Lead strategic partnerships and drive business growth across our diverse portfolio of companies.",
    requirements: [
      "5+ years in business development or strategic partnerships",
      "Experience in multiple industries (education, electrical, etc.)",
      "Strong negotiation and relationship building skills",
      "MBA or equivalent business qualification preferred",
    ],
    benefits: [
      "Competitive salary",
      "Performance bonuses",
      "Health insurance",
      "Flexible work arrangements",
    ],
    posted: "2 days ago",
    featured: true,
    responsibilities: [
      "Develop and execute strategic business development plans",
      "Identify and pursue new business opportunities",
      "Build and maintain relationships with key stakeholders",
      "Lead contract negotiations and partnership agreements",
      "Collaborate with cross-functional teams to drive growth",
      "Analyze market trends and competitive landscape",
      "Present business cases and recommendations to senior leadership",
    ],
    qualifications: [
      "Bachelor's degree in Business, Marketing, or related field",
      "MBA strongly preferred",
      "Proven track record in B2B sales and partnerships",
      "Excellent communication and presentation skills",
      "Strong analytical and strategic thinking abilities",
      "Experience with CRM systems and sales analytics",
    ],
    companyDescription:
      "Join Paawani Group's dynamic business development team and help shape the future of our diverse business portfolio across education, electrical, and technology sectors.",
    workingConditions: [
      "Hybrid work environment with flexible hours",
      "Regular travel for client meetings and industry events",
      "Collaborative team environment",
      "Access to latest technology and tools",
      "Professional development opportunities",
    ],
  },
  {
    id: 2,
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Bangalore",
    type: "Full-time",
    experience: "3-5 years",
    description:
      "Build and maintain web applications for our educational and business platforms.",
    requirements: [
      "Strong experience with React, Node.js, and modern web technologies",
      "Experience with cloud platforms (AWS, Azure)",
      "Knowledge of database design and optimization",
      "Bachelor's degree in Computer Science or related field",
    ],
    benefits: [
      "Competitive salary",
      "Stock options",
      "Learning budget",
      "Remote work options",
    ],
    posted: "1 week ago",
    featured: false,
    responsibilities: [
      "Design and develop scalable web applications",
      "Collaborate with product managers and designers",
      "Write clean, maintainable, and testable code",
      "Participate in code reviews and technical discussions",
      "Optimize application performance and user experience",
      "Implement security best practices",
      "Contribute to technical architecture decisions",
    ],
    qualifications: [
      "Bachelor's degree in Computer Science or equivalent",
      "3+ years of experience in full-stack development",
      "Proficiency in React, Node.js, and JavaScript/TypeScript",
      "Experience with RESTful APIs and GraphQL",
      "Knowledge of database systems (SQL and NoSQL)",
      "Familiarity with DevOps practices and CI/CD pipelines",
    ],
    companyDescription:
      "Work with cutting-edge technologies to build innovative solutions that impact education and business operations across our portfolio companies.",
    workingConditions: [
      "Modern office environment in Bangalore tech hub",
      "Flexible working hours and remote work options",
      "Access to latest development tools and hardware",
      "Collaborative and innovative team culture",
      "Regular team building and learning sessions",
    ],
  },
  {
    id: 3,
    title: "Marketing Specialist",
    department: "Marketing",
    location: "Delhi",
    type: "Full-time",
    experience: "2-4 years",
    description:
      "Develop and execute marketing strategies across our business verticals.",
    requirements: [
      "2+ years in digital marketing or brand management",
      "Experience with multi-channel marketing campaigns",
      "Strong analytical and creative thinking skills",
      "Knowledge of marketing automation tools",
    ],
    benefits: [
      "Competitive salary",
      "Creative freedom",
      "Professional development",
      "Health benefits",
    ],
    posted: "3 days ago",
    featured: false,
    responsibilities: [
      "Plan and execute integrated marketing campaigns",
      "Manage social media presence and content strategy",
      "Analyze campaign performance and ROI metrics",
      "Coordinate with design and content teams",
      "Conduct market research and competitive analysis",
      "Support lead generation and customer acquisition efforts",
      "Manage marketing budget and vendor relationships",
    ],
    qualifications: [
      "Bachelor's degree in Marketing, Communications, or related field",
      "Experience with digital marketing tools and platforms",
      "Strong project management and organizational skills",
      "Excellent written and verbal communication abilities",
      "Data-driven mindset with analytical skills",
      "Creative thinking and problem-solving capabilities",
    ],
    companyDescription:
      "Drive brand awareness and customer engagement across our diverse business portfolio, from education to technology solutions.",
    workingConditions: [
      "Creative office environment in Delhi NCR",
      "Collaborative cross-functional teams",
      "Access to marketing tools and platforms",
      "Opportunities for creative expression",
      "Regular industry events and networking",
    ],
  },
  {
    id: 4,
    title: "Operations Manager",
    department: "Operations",
    location: "Pune",
    type: "Full-time",
    experience: "4-6 years",
    description:
      "Oversee daily operations and optimize processes across our business units.",
    requirements: [
      "4+ years in operations management",
      "Experience in process optimization and team leadership",
      "Strong project management skills",
      "Industry experience in education or electrical preferred",
    ],
    benefits: [
      "Leadership role",
      "Growth opportunities",
      "Comprehensive benefits",
      "Performance incentives",
    ],
    posted: "5 days ago",
    featured: false,
    responsibilities: [
      "Manage daily operational activities and workflows",
      "Implement process improvements and efficiency measures",
      "Lead and develop operational teams",
      "Coordinate between different business units",
      "Monitor KPIs and operational metrics",
      "Ensure compliance with industry standards",
      "Drive continuous improvement initiatives",
    ],
    qualifications: [
      "Bachelor's degree in Operations, Business, or Engineering",
      "Proven experience in operations management",
      "Strong leadership and team management skills",
      "Excellent problem-solving and decision-making abilities",
      "Experience with process optimization methodologies",
      "Knowledge of quality management systems",
    ],
    companyDescription:
      "Lead operational excellence across our diverse business units and drive efficiency improvements that impact our bottom line.",
    workingConditions: [
      "Modern facilities in Pune business district",
      "Cross-functional collaboration opportunities",
      "Access to process improvement tools",
      "Leadership development programs",
      "Regular strategic planning sessions",
    ],
  },
  {
    id: 5,
    title: "Product Manager",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "4-7 years",
    description:
      "Lead product strategy and development for our digital education platforms.",
    requirements: [
      "4+ years in product management",
      "Experience with educational technology or SaaS products",
      "Strong analytical and user research skills",
      "Technical background preferred",
    ],
    benefits: [
      "Remote work",
      "Product ownership",
      "Innovation budget",
      "Career growth",
    ],
    posted: "1 week ago",
    featured: true,
    responsibilities: [
      "Define product vision and roadmap",
      "Conduct user research and market analysis",
      "Collaborate with engineering and design teams",
      "Manage product backlog and prioritization",
      "Monitor product metrics and user feedback",
      "Drive product launches and go-to-market strategies",
      "Communicate product updates to stakeholders",
    ],
    qualifications: [
      "Bachelor's degree in Business, Engineering, or related field",
      "Experience in product management for digital products",
      "Strong analytical and data interpretation skills",
      "Excellent communication and stakeholder management",
      "Understanding of agile development methodologies",
      "Experience with product analytics tools",
    ],
    companyDescription:
      "Shape the future of educational technology and drive product innovation that makes learning more accessible and effective.",
    workingConditions: [
      "Fully remote position with flexible hours",
      "Regular virtual team collaboration",
      "Access to product development tools",
      "Innovation-focused culture",
      "Quarterly team meetups and offsites",
    ],
  },
  {
    id: 6,
    title: "HR Business Partner",
    department: "Human Resources",
    location: "Mumbai",
    type: "Full-time",
    experience: "3-5 years",
    description:
      "Support our growing team with talent acquisition, employee development, and culture initiatives.",
    requirements: [
      "3+ years in HR or talent management",
      "Experience in startup or multi-business environments",
      "Strong interpersonal and communication skills",
      "Knowledge of employment law and best practices",
    ],
    benefits: [
      "People impact",
      "Culture building",
      "Professional development",
      "Comprehensive benefits",
    ],
    posted: "4 days ago",
    featured: false,
    responsibilities: [
      "Partner with business leaders on HR strategy",
      "Manage talent acquisition and recruiting processes",
      "Develop and implement employee engagement programs",
      "Handle employee relations and conflict resolution",
      "Support performance management and career development",
      "Ensure compliance with employment laws and policies",
      "Drive diversity, equity, and inclusion initiatives",
    ],
    qualifications: [
      "Bachelor's degree in Human Resources or related field",
      "HR certification (PHR, SHRM) preferred",
      "Experience with HRIS systems and recruiting tools",
      "Strong interpersonal and counseling skills",
      "Knowledge of employment law and best practices",
      "Excellent written and verbal communication abilities",
    ],
    companyDescription:
      "Play a key role in building and maintaining our company culture while supporting the growth and development of our talented team.",
    workingConditions: [
      "Collaborative HR team environment",
      "Exposure to diverse business units",
      "Professional development opportunities",
      "Employee-centric culture focus",
      "Regular training and certification programs",
    ],
  },
];

export const companyCulture = [
  {
    id: 1,
    url: workspace,
    title: "Modern workspace",
    description: "State-of-the-art facilities designed for collaboration",
  },
  {
    id: 2,
    url: collab,
    title: "Team collaboration",
    description: "Inclusive environment that celebrates diversity",
  },
  {
    id: 3,
    url: growth,
    title: "Growth Focus",
    description: "Continuous learning and career development",
  },
];

export const companyValues = [
  {
    id: 1,
    icon: TrendingUp,
    title: "Growth Mindset",
    description:
      "We embrace challenges and see failures as opportunities to learn and grow.",
    color: "from-primary to-[#1a8f21]",
  },
  {
    id: 2,
    icon: Users,
    title: "Collaboration",
    description:
      "We believe great things happen when diverse minds work together towards common goals.",
    color: "from-[#16a085] to-[#27ae60]",
  },
  {
    id: 3,
    icon: Award,
    title: "Excellence",
    description:
      "We strive for excellence in everything we do, from products to customer service.",
    color: "from-[#2ecc71] to-primary",
  },
  {
    id: 4,
    icon: Heart,
    title: "Impact",
    description:
      "We are committed to making a positive impact on education and business communities.",
    color: "from-[#27ae60] to-[#16a085]",
  },
];

export const benefits = [
  {
    id: 1,
    icon: DollarSign,
    title: "Competitive Compensation",
    description:
      "Market-leading salaries with performance bonuses and equity options.",
    features: [
      "Performance bonuses",
      "Equity participation",
      "Annual reviews",
      "Merit increases",
    ],
  },
  {
    id: 2,
    icon: Shield,
    title: "Health & Wellness",
    description:
      "Comprehensive health coverage and wellness programs for you and your family.",
    features: [
      "Medical insurance",
      "Dental & vision",
      "Mental health support",
      "Gym memberships",
    ],
  },
  {
    id: 3,
    icon: BookOpen,
    title: "Learning & Development",
    description:
      "Continuous learning opportunities to help you grow in your career.",
    features: [
      "Training budget",
      "Conference attendance",
      "Online courses",
      "Mentorship programs",
    ],
  },
  {
    id: 4,
    icon: Coffee,
    title: "Work-Life Balance",
    description:
      "Flexible work arrangements that support your personal and professional life.",
    features: [
      "Flexible hours",
      "Remote work",
      "Unlimited PTO",
      "Sabbatical options",
    ],
  },
  {
    id: 5,
    icon: Car,
    title: "Transportation",
    description: "Support for your commute and travel needs.",
    features: [
      "Travel allowance",
      "Parking benefits",
      "Company vehicles",
      "Fuel reimbursement",
    ],
  },
  {
    id: 6,
    icon: Calendar,
    title: "Time Off",
    description:
      "Generous leave policies to help you recharge and spend time with loved ones.",
    features: [
      "25+ vacation days",
      "Sick leave",
      "Parental leave",
      "Personal days",
    ],
  },
];
