export const nav = ['Home', 'About', 'Resume', 'Portfolio', 'Services', 'Contact']
import wolfImage from "./assets/portfolio-images/wolf3d-Website.png"
import spaceWebsite from "./assets/portfolio-images/spaceWebsite.png"
import coffieWebsite from "./assets/portfolio-images/cooffieWebsite.png"
import ecommerceWebsite from "./assets/portfolio-images/ecommerce.png"
import verWebsite from "./assets/portfolio-images/veraWebsite.png"
import yavinWebsite from "./assets/portfolio-images/yavinWebsite.png"
import corsWebsite from "./assets/portfolio-images/corsWebsite.png"
import blogMasteryWebsite from "./assets/portfolio-images/blogMasteryWebsite.png"
import soundifyWebsite from "./assets/portfolio-images/soundifyWebsite.png"
import crmtool from "./assets/portfolio-images/crm-tool.png"

export const profile = {
  name: 'Hassan Raza',
  role: 'Mern Stack Developer',
  birthday: '3 July 2006',
  age: 21,
  degree: 'InterMediate',
  city: 'Karachi ,Garden West',
  freelance: 'Available',
}

export const skillGroups = [

  {
    title: 'Front end developer',
    icon: 'layout',
    skills: [
      { name: 'JavaScript', value: 80 },
      { name: 'HTML / CSS', value: 85 },
      { name: 'Typescript', value: 59 },
      { name: 'React JS', value: 91 },
      { name: 'Tailwind Css', value: 100 },
      { name: 'BootStrap', value: 100 },
      { name: 'Framer Motion', value: 59 },
      { name: 'Github', value: 100 },
      { name: 'Wordpress', value: 100 }

    ],
  },
  {
    title: 'Backend developer',
    icon: 'database',
    skills: [
      { name: 'Node js', value: 76 },
      { name: 'Express', value: 84 },
      { name: 'MongoDb', value: 79 },
      { name: 'Redist', value: 50 },
      { name: 'Restful API', value: 100 },
      { name: 'MySQL', value: 50 },
      { name: 'Mongo Db', value: 80 },
      { name: 'NoSQL', value: 50 },
      { name: 'Firebase', value: 60 },
    ],
  },
]

export const stack = [
  { name: 'HTML', type: 'mono', mono: '5', color: '#f4874b' },
  { name: 'CSS', type: 'mono', mono: '3', color: '#5eb1ff', active: true },
  { name: 'JavaScript', type: 'mono', mono: 'JS', color: '#f4b942' },
  { name: 'Typescript', type: 'mono', mono: 'TS', color: '#5b8bf7' },
  { name: 'React', type: 'icon', icon: 'atom', color: '#4fd6c4' },
  { name: 'Tailwind Css', type: 'icon', icon: 'tailwindcss', color: '#5eb1ff' },
  { name: 'BootStrap', type: 'icon', icon: 'bootstrap', color: '#7909F7' },
  { name: 'Node JS', type: 'icon', icon: 'nodejs', color: '#32CD32' },
  { name: 'Express JS', type: 'icon', icon: 'express', color: '#ffffff' },
  { name: 'Framer Motion', type: 'icon', icon: 'framermotion', color: '#ffffff' },
  { name: 'Redis', type: 'icon', icon: 'boxes', color: '#ff6fb0' },
  { name: 'Restful API', type: 'icon', icon: 'gitBranch', color: '#4fd6c4' },
  { name: 'MySQL', type: 'icon', icon: 'database', color: '#5eb1ff' },
  { name: 'Mongo Db', type: 'icon', icon: 'mongoDb', color: '#32CD32' },
  { name: 'NoSQL', type: 'icon', icon: 'database', color: '#a78bfa' },
  { name: 'Firebase', type: 'icon', icon: 'zap', color: '#f4b942' },
  { name: 'VS Code', type: 'icon', icon: 'code2', color: '#5eb1ff' },
  { name: 'Github', type: 'icon', icon: 'github', color: '#ffffff' },
  { name: 'Gitlab', type: 'icon', icon: 'gitMerge', color: '#f4874b' },
  { name: 'Wordpress ', type: 'icon', icon: 'wordpress', color: '#3655E2' },
  { name: 'WOO-commerce', type: 'icon', icon: 'woocommerce', color: '#3655E2' },
]
export const resume = [
  {
    icon: 'graduation',
    title: 'Completed a Mern Stack Development Course',
    body: 'Started the journey into Mern stack development by enrolling in a Mern stack course focused on Front-end, and Backend fundamentals. Successfully completed the course and received a certification.',
    active: true,
  },
  {
    icon: 'code',
    title: 'Web Developer – _APPSNATION_  07/2026 - PRESENT',
    body: 'Worked as a Web developer building dynamic web interfaces using React and CSS frameworks. Collaborated closely with designers to turn mockups into pixel-perfect user experiences.',
  },
  {
    icon: 'code',
    title: 'Web Speclist - _DigiTroopers_ 01/2024 - 07/2025',
    body: 'After gaining experience in frontend, enrolled in a backend-focused program covering Node.js, Express, MongoDB, and API design. Built several full-featured server-side applications and worked with databases, authentication, and RESTful services.',
  },
  {
    icon: 'sparkle',
    title: 'Web Developer ( Internship ) 08/2023 - 01/2024',
    body: 'Worked on developing and maintaining responsive websites using HTML, CSS, JavaScript, and WordPress. Assisted with website customization, bug fixing, and implementing client requirements.',
  },

]

export const portfolioFilters = ['All', 'Websites', '3d Website',"CRM-TOOL" ]

export const portfolioItems = [
  { id: 1, title: '3d dog website – Desktop & Mobile Experience Showcase', category: '3d Website', image: wolfImage, link: "https://agent-6a1ec8adf1388486234bc21d--3d-dog-website.netlify.app/" },
  { id: 2, title: 'TCJ Space – Modern Space Exploration Website Built with React, Tailwind CSS & Framer Motion', category: 'Websites', image: spaceWebsite, link: "https://space-website-hassan.netlify.app/" },
  { id: 3, title: 'Excited to share my latest front-end project! This is a sleek, modern coffee-themed landing page built using:', category: 'Websites', image: coffieWebsite, link: "https://lucky-sunburst-abed70.netlify.app/" },
  { id: 4, title: 'E-commerce website', category: 'Websites', image: ecommerceWebsite, link: "https://endearing-piroshki-7ce328.netlify.app/" },
  { id: 5, title: 'A clean, responsive portfolio website built with Bootstrap, featuring smooth scrolling, structured sections, and a modern UI.', category: 'Websites', image: verWebsite, link: "https://hassan-mem0n.github.io/vera-website-for-software-solution/" },
  { id: 6, title: 'Yavin is a clean, responsive Bootstrap-based website featuring smooth navigation, structured sections, and a modern professional design.', category: 'Websites', image: yavinWebsite, link: "https://hassan-mem0n.github.io/office-website-using-bootstrap/" },
{ id: 7, title: 'Corso – Bootstrap Framework Using Build: A hands‑on guide to customizing Bootstrap via build tools to craft modern and responsive templates.', category: 'Websites', image: corsWebsite, link: "https://hassan-mem0n.github.io/corso-bootstrap-framwork-using-build/" },
{ id: 8, title: 'A responsive website using HTML, Sass, and Bootstrap refers to a web project designed to adapt its layout and content based on the screen size of the device being used whether desktop, tablet or mobile  while utilizing.', category: 'Websites', image: blogMasteryWebsite, link: "https://hassan-mem0n.github.io/boatstrap-again-1/index.html" },
{ id: 9, title: 'Soundify is a modern dark-themed music streaming platform with playlists, artists, search, and a bottom music player.', category: 'Websites', image: soundifyWebsite, link: "https://soundifyweb-app.netlify.app/" },
  { id: 10, title: 'CRM Tool by Hassan — AI-Powered CRM for Smarter Sales', category: 'CRM-TOOL', image: crmtool, link: "https://crm-tool-ai.netlify.app/" }
]

export const services = [
  {
    icon: 'gauge',
    title: 'Speed & Optimization',
    body: 'Improving load times, SEO, and overall user experience through code and asset optimization.',
    color: 'text-accent-amber',
    bg: 'bg-accent-amber/10',
  },
  {
    icon: 'brain',
    title: 'Full-Stack Solutions',
    body: 'End-to-end development from frontend UI to backend infrastructure and deployment.',
    color: 'text-accent-lime',
    bg: 'bg-accent-lime/10',
  },
  {
    icon: 'database',
    title: 'Backend Development',
    body: 'Developing secure and scalable server-side logic, APIs, and database integration.',
    color: 'text-accent-pink',
    bg: 'bg-accent-pink/10',
  },
  {
    icon: 'code2',
    title: 'Frontend Development',
    body: 'Building responsive, user-friendly web interfaces with modern frameworks like React.',
    color: 'text-accent-teal',
    bg: 'bg-accent-teal/10',
  },
]

export const socials = [
  { icon: 'github', href: 'https://github.com/hassan-mem0n' },
  { icon: 'linkedin', href: 'https://www.linkedin.com/in/dev-hassanraza0/' },
  { icon: 'mail', href: 'mailto:dev.hassanraza0@gmail.com' },
  { icon: 'phone', href: 'tel:+923181155946' },
]
