// Fields set to null are unverified. The UI shows an honest empty state for them.
export const projects = [
  {
    slug: 'aidirp', title: 'AIDIRP', full: 'AI-Powered Disaster Intelligence and Response Platform',
    description: 'An AI-powered disaster-intelligence platform focused on incident management, risk analysis, and disaster-response information.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'FastAPI', 'Python', 'SQLAlchemy', 'PostgreSQL', 'Leaflet', 'Recharts'],
    image: '/assets/projects/aidirp-dashboard.png',
    repo: 'https://github.com/anjaliyadav40/AIDIRP--disaster-intelligence-platform', demo: null,
    role: null, details: null
  },
  {
    slug: 'spellcraft-ai', title: 'SpellCraft AI', full: 'SpellCraft AI',
    description: 'A computer-vision project exploring hand tracking and gesture-based interactions.',
    tags: ['Python', 'OpenCV', 'MediaPipe'],
    image: '/assets/projects/spellcraft.png', repo: null, demo: null, role: null, details: null
  },
  {
    slug: 'proof-of-work', title: 'Proof-of-Work', full: 'Proof-of-Work for Public Services',
    description: 'A public-service transparency platform designed to document work using before-and-after evidence, location information, and verification workflows.',
    tags: ['React', 'Tailwind CSS', 'Spring Boot', 'PostgreSQL'],
    image: '/assets/projects/proof-of-work.png',
    repo: 'https://github.com/utkarsh713/proof-of-work', demo: null,
    role: 'Team project. I contributed to the frontend/UI, including the registration and work-submission interfaces.',
    details: {
      workflow: ['Register work', 'Upload before-and-after photographs', 'Capture GPS information when available', 'Validate submitted evidence', 'Support citizen verification where implemented', 'Display verification status']
    }
  },
  {
    slug: 'ai-smart-todo', title: 'AI Smart To-Do List', full: 'AI Smart To-Do List',
    description: 'A productivity application concept that combines task management with planning and habit-building features.',
    tags: [], image: '/assets/projects/smart-todo.png', repo: null, demo: null, role: null, details: null
  },
  {
    slug: 'portfolio', title: 'Portfolio Website', full: 'Portfolio Website',
    description: 'My personal developer portfolio, showcasing my projects, skills, learning journey, and creative approach to technology.',
    tags: ['React', 'Vite', 'Tailwind CSS'],
    image: null, repo: 'https://github.com/anjaliyadav40/portfolio', demo: null, role: null, details: null
  }
]
