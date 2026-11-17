const VITE_EMAIL = import.meta.env.VITE_EMAIL;
const VITE_PHONE = import.meta.env.VITE_PHONE;
const VITE_GITHUB = import.meta.env.VITE_GITHUB;
const VITE_LINKEDIN = import.meta.env.VITE_LINKEDIN;
const VITE_UPWORK = import.meta.env.VITE_UPWORK;
const VITE_FIVERR = import.meta.env.VITE_FIVERR;
const VITE_RESUME = import.meta.env.VITE_RESUME;

const profile = {
  name: 'Ganesh B',
  email: VITE_EMAIL,
  phone: VITE_PHONE,
  location: 'Chennai, Tamil Nadu',
  github: VITE_GITHUB,
  linkedin: VITE_LINKEDIN,
  upwork: VITE_UPWORK,
  fiverr: VITE_FIVERR,
  resume: VITE_RESUME,
}

const projects = [
  { name: 'Lumina', kind: 'E-commerce platform', stack: ['React', 'Node', 'MongoDB', 'JWT', 'RBAC', 'Multer'],
    text: 'Product browsing, cart, order tracking and an admin area locked behind role-based access. Image uploads, rate limiting and a database seeder.' },
  { name: 'Expense Tracker', kind: 'Personal finance app', stack: ['React', 'Redux Toolkit', 'Redux Saga', 'Express', 'MongoDB'],
    text: 'Income, expenses, categories and budgets. Saga-driven API flows, bcrypt and JWT auth, and statement emails through Nodemailer.' },
  { name: 'Bus Booking', kind: 'RedBus-style booking site', stack: ['React', 'Redux Toolkit', 'Redux Saga', 'Node', 'MongoDB'],
    text: 'Separate user and admin sides for searching routes and booking seats.' },
  { name: 'QKart', kind: 'E-commerce application', stack: ['React Hooks', 'Express', 'Joi', 'Postman'],
    text: 'Authentication, search, filtering, cart and checkout, with custom hooks and Joi-validated APIs.' },
]

const experience = [
  { role: 'MERN Stack Mentor', org: 'Kalvium · Chennai', when: 'Oct 2026 – Present',
    text: 'Teaching React, Node, Express and MongoDB through real projects and code reviews. Explaining the stack every day keeps my own fundamentals sharp.' },
  { role: 'Full Stack Developer Intern', org: 'Eltys LLC · Remote', when: 'Oct 2025 – Apr 2026',
    text: 'Worked on Namio, a currency exchange platform. Built FastAPI and Node.js APIs and React dashboard modules, and turned Figma designs into production UI.' },
  { role: 'React.js Developer Intern', org: 'Vector Stack · Bangalore', when: 'Mar 2025 – Jun 2025',
    text: 'Built reusable components, managed state with Context and Redux Toolkit, and shipped in Agile sprints.' },
  { role: 'Sales Consultant', org: 'Capital Honda · Pudukkottai', when: 'May 2024 – Feb 2025',
    text: 'Guided customers from first enquiry to delivery. The communication I use with clients and teams started here.' },
]

const skills = {
  Frontend: ['React.js', 'Redux Toolkit', 'Redux Saga', 'Context API', 'Tailwind CSS', 'Material UI'],
  Backend: ['Node.js', 'Express.js', 'FastAPI', 'Django', 'REST APIs'],
  Data: ['MongoDB', 'Mongoose', 'MySQL'],
  Security: ['JWT', 'bcrypt', 'RBAC', 'Joi', 'express-validator', 'rate limiting'],
  Workflow: ['Git & GitHub', 'Postman', 'Jira', 'Vercel', 'Render', 'Figma-to-code'],
}

const services = [
  { title: 'Full stack MERN apps', text: 'Dashboards, e-commerce and booking apps with login, roles and clean admin panels.' },
  { title: 'REST APIs and auth', text: 'Express and MongoDB backends with JWT, validation, rate limiting and tested endpoints.' },
  { title: 'Figma to React', text: 'Responsive, reusable components with Redux Toolkit and Saga for the data layer.' },
]

const training = [
  { title: 'Crio.Do Fellowship in Full Stack Development', note: 'Completed. Project-based training in React, Node.js, MongoDB and REST APIs.' },
  { title: 'React.js Internship Certificate', note: 'Vector Stack, Bangalore. June 2025.' },
  { title: 'Google Data Analytics Professional Certificate', note: 'Coursera. In progress.' },
  { title: 'B.E. Electronics & Communication Engineering', note: 'Government College of Engineering, Thanjavur. 2018 to 2022. CGPA 8.09 / 10.' },
]

export { profile, projects, experience, skills, services, training };