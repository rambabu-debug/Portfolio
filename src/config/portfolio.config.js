/**
 * Configuration file for portfolio constants and data
 * Centralize all portfolio information here for easy updates
 */

export const PORTFOLIO_CONFIG = {
  // Personal Information
  name: 'Ram Babu H',
  title: 'Backend Engineer & System Design Specialist',
  email: 'rambabuask9347@gmail.com',
  phone: '+91-9059192004', // Update with your phone
  location: 'Tirupati, India',

  // Professional Summary
  tagline: 'Crafting scalable Java-based systems with strong fundamentals in system design, microservices, and cybersecurity. Let\'s build something exceptional together.',
  bio: 'Computer Science student at Mohan Babu University (2022-2026) with a passion for backend development and system design. With a strong academic record (CGPA: 9.83), I focus on building scalable, efficient, and secure systems.',

  // Social Links
  social: {
    github: 'https://github.com/rambabu-debug',
    linkedin: 'https://www.linkedin.com/in/ram-babu-h/',
    leetcode: 'https://leetcode.com/u/Rambabu6182/',
    twitter: '', // Add if available
    portfolio: '', // Your portfolio URL
  },

  // Education
  education: [
    {
      period: '2022 - 2026',
      title: 'Bachelor of Technology in Computer Science',
      institution: 'Mohan Babu University, Tirupati',
      detail: 'CGPA: 9.83',
    },
    {
      period: '2022',
      title: 'Senior Secondary Education',
      institution: 'Narayana Jr. College',
      detail: 'Percentage: 95.9%',
    },
  ],

  // Skills organized by category
  skills: {
    programming: ['Java', 'Python', 'C'],
    backend: ['Spring', 'Spring Boot', 'Spring Security', 'Hibernate', 'JPA', 'REST APIs'],
    frontend: ['HTML', 'CSS', 'JavaFX', 'MaterialFX', 'React'],
    databases: ['PostgreSQL', 'SQL', 'Database Design'],
    cybersecurity: ['OWASP', 'Ethical Hacking', 'Penetration Testing', 'Wireshark', 'Metasploit', 'Burp Suite', 'NMap', 'Kali Linux'],
    tools: ['Git/GitHub', 'IntelliJ IDEA', 'Postman', 'Maven', 'Linux', 'Windows'],
  },

  // Featured Projects
  projects: [
    {
      id: 1,
      title: 'HybridEmergency Response System',
      description: 'A comprehensive emergency response platform that integrates multiple communication channels and location tracking. Features real-time incident reporting, automated dispatch system, and analytical dashboards for emergency management.',
      image: 'https://via.placeholder.com/400x300?text=Emergency+Response',
      tags: ['Java', 'Spring Boot', 'PostgreSQL', 'REST APIs', 'System Design'],
      features: [
        'Real-time incident tracking',
        'Multi-channel communication',
        'Location-based dispatch',
        'Analytics dashboard',
        'Mobile-responsive design'
      ],
      link: 'https://hybridemergencyresponse.onrender.com',
      github: '',
      featured: true,
    },
    {
      id: 2,
      title: 'Payment Integrating System',
      description: 'Full-stack payment processing platform with secure transaction handling, multiple payment gateway integration, and comprehensive transaction history. Built with modern architecture principles for scalability.',
      image: 'https://via.placeholder.com/400x300?text=Payment+System',
      tags: ['React', 'Spring Boot', 'PostgreSQL', 'Payment APIs', 'Security'],
      features: [
        'Secure payment processing',
        'Multi-gateway integration',
        'Transaction history',
        'User authentication',
        'Admin dashboard'
      ],
      backend: 'https://paymentintegratingsystem.onrender.com',
      frontend: 'https://payment-integrating-system-gacu.vercel.app/',
      featured: true,
    },
    {
      id: 3,
      title: 'Threat Analysis System',
      description: 'Advanced cybersecurity tool for analyzing and identifying network threats. Provides vulnerability assessment, penetration testing capabilities, and detailed threat reports with actionable recommendations.',
      image: 'https://via.placeholder.com/400x300?text=Threat+Analysis',
      tags: ['Java', 'Cybersecurity', 'Network Analysis', 'OWASP'],
      features: [
        'Vulnerability scanning',
        'Threat detection',
        'Risk assessment',
        'Detailed reporting',
        'Security recommendations'
      ],
      link: 'https://threatanalysissystem.onrender.com',
      github: '',
    },
    {
      id: 4,
      title: 'Campus Transit Application',
      description: 'Campus transportation management system for optimizing student commute. Features real-time bus tracking, route optimization, and integrated payment system for seamless campus mobility.',
      image: 'https://via.placeholder.com/400x300?text=Campus+Transit',
      tags: ['Java', 'Android', 'Spring Boot', 'GPS Tracking'],
      features: [
        'Real-time bus tracking',
        'Route optimization',
        'Integrated payments',
        'User notifications',
        'Admin controls'
      ],
      github: '',
    },
  ],

  // Achievements
  achievements: {
    academic: [
      {
        title: 'Outstanding Academic Performance',
        detail: 'CGPA: 9.83 at Mohan Babu University',
        year: '2022 - 2026',
      },
      {
        title: 'School Merit',
        detail: 'Senior Secondary Education - 95.9%',
        year: '2022',
      },
    ],
    competitive: [
      {
        title: 'LeetCode Problem Solver',
        detail: '300+ problems solved, consistent contributor',
        year: 'Ongoing',
      },
      {
        title: 'System Design Expertise',
        detail: 'Specialization in scalable architecture design',
        year: 'Ongoing',
      },
    ],
    publications: [
      {
        title: 'ICT4SD Conference',
        detail: 'Published research paper on innovative technologies',
        year: '2024',
      },
      {
        title: 'Open Source Contributions',
        detail: 'Active contributor to backend and security projects',
        year: 'Ongoing',
      },
    ],
  },

  // Statistics
  stats: [
    { number: '9.83', label: 'CGPA' },
    { number: '500+', label: 'LeetCode Problems' },
    { number: '4+', label: 'Projects' },
  ],
}

// Export individual configs if needed
export const { name, email, social, skills, projects } = PORTFOLIO_CONFIG

