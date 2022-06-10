import { RiComputerLine, RiReactjsFill } from "react-icons/ri";
import {
  FaServer,
  FaNodeJs,
  FaAws,
  FaPython,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";
import {
  AiOutlineAntDesign,
  AiOutlineApi,
  AiFillHtml5,
  AiOutlineGithub,
} from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import {
  SiTailwindcss,
  SiVisualstudio,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiNetlify,
  SiExpress,
  SiMongodb,
  SiTypescript,
} from "react-icons/si";
import { TbBrandJavascript, TbBrandNextjs } from "react-icons/tb";
import { DiGit } from "react-icons/di";
import { IProject, Service, Skill } from "./types";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  },
  {
    Icon: RiComputerLine,
    title: "Whatever",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
];

export const languages: Skill[] = [
  {
    Icon: TbBrandJavascript,
    name: "JavaScript",
    level: "85",
  },
  {
    Icon: FaPython,
    name: "Python",
    level: "40",
  },
  {
    Icon: RiReactjsFill,
    name: "React JS",
    level: "80",
  },
  {
    Icon: AiFillHtml5,
    name: "HTML5",
    level: "93",
  },
  {
    Icon: FaCss3Alt,
    name: "CSS3",
    level: "88",
  },
  {
    Icon: SiTailwindcss,
    name: "Tailwind Css",
    level: "80",
  },
  {
    Icon: FaBootstrap,
    name: "Bootstrap",
    level: "80",
  },
];

export const tools: Skill[] = [
  {
    Icon: DiGit,
    name: "Git",
    level: "88",
  },
  {
    Icon: SiVisualstudio,
    name: "VS Code",
    level: "75",
  },
  {
    Icon: AiOutlineGithub,
    name: "GitHub",
    level: "70",
  },
  {
    Icon: SiPostman,
    name: "Postman",
    level: "45",
  },
];
export const backend: Skill[] = [
  {
    Icon: FaNodeJs,
    name: "Node JS",
    level: "55",
  },
  {
    Icon: SiExpress,
    name: "Express JS",
    level: "58",
  },
  {
    Icon: SiMongodb,
    name: "MongoDB",
    level: "47",
  },
  {
    Icon: TbBrandNextjs,
    name: "Next JS",
    level: "45",
  },
  {
    Icon: SiTypescript,
    name: "TypeScript",
    level: "43",
  },
];
export const hosting: Skill[] = [
  {
    Icon: FaAws,
    name: "AWS",
    level: "45",
  },
  {
    Icon: SiHeroku,
    name: "Heroku",
    level: "75",
  },
  {
    Icon: SiVercel,
    name: "Vercel",
    level: "40",
  },
  {
    Icon: SiNetlify,
    name: "Netlify",
    level: "65",
  },
];

export const projects: IProject[] = [
  {
    id: 0,
    name: "PC Parts CO.",
    description: [
      "It is a fully functional manufacturer web application where users can buy and manage PC parts.",
      "CRUD operations, payment gateway, firebase authentication, JWT implementation, admin panel, etc.",
      "Fully Responsive for desktop, and mobile devices.",
    ],
    image_path: [
      "https://i.ibb.co/0ZVyNBZ/pr1.png",
      "https://i.ibb.co/M1SzJtT/pr12.png",
      "https://i.ibb.co/dQFKXqm/pr13.png",
      "https://i.ibb.co/n6dxdyq/pr14.png",
      "https://i.ibb.co/m83D40q/pr15.png",
    ],
    deployed_url: "https://pc-parts-co.web.app/",
    github_url: "https://github.com/Md-RonyAhmed/pc-parts-co-client",
    category: ["react"],
    key_techs: [
      "React",
      "Express",
      "Tailwind",
      "Node",
      "MongoDB",
      "React Router",
      "JWT",
      "Firebase",
      "Axios",
    ],
  },
  {
    id: 1,
    name: "Barakah Stock Service ",
    image_path: [
      "https://i.ibb.co/KqywTw1/pr2.png",
      "https://i.ibb.co/fX9zC0w/pr22.png",
      "https://i.ibb.co/6sShcLP/pr23.png",
      "https://i.ibb.co/s97b2Gr/pr24.png",
      "https://i.ibb.co/VMVT9V4/pr25.png",
    ],
    deployed_url: "https://barakah-stocks.web.app/",
    github_url: "https://github.com/Md-RonyAhmed/barakah-stock-client",
    category: ["react"],
    description: [
      "It is a fully functional warehouse management web application where users can stock and manage products.",
      "CRUD operations, firebase authentication, products management, etc.",
      "Fully Responsive for desktop, and mobile devices.",
    ],
    key_techs: [
      "React",
      "Firebase",
      "Node",
      "Express",
      "MongoDB",
      "Axios",
      "React Router",
    ],
  },

  {
    id: 2,
    name: "Tech-Tutor Service Provider",
    image_path: [
      "https://i.ibb.co/9Vmk1rB/pr3.png",
      "https://i.ibb.co/NYFX8yM/pr31.png",
      "https://i.ibb.co/z8Thm40/pr32.png",
      "https://i.ibb.co/9ZnHVgs/pr33.png",
      "https://i.ibb.co/7gsSVFs/pr34.png",
    ],
    deployed_url: "https://tech-tutor-d11fb.web.app/",
    github_url: "https://github.com/Md-RonyAhmed/tech-tutor-react-firebase",
    category: ["node", "mongo", "react"],
    description: [
      "It is a React JS fully functional tutor service provider web application where users can enroll and manage tutor service.",
      "API integration, firebase authentication, etc.",
      "Fully Responsive for desktop, and mobile devices.",
    ],
    key_techs: [
      "React",
      "Tailwind",
      "Firebase",
      "React Router",
      "Axios",
      "REST API",
    ],
  },

  {
    id: 3,
    name: "Niyamah Convention Center",
    image_path: ["https://i.ibb.co/1MfrFDX/pr5.png"],
    deployed_url: "https://niyamah-site.netlify.app/",
    github_url: "https://github.com/Md-RonyAhmed/Niyamah-convention-center",
    category: ["node", "react"],
    description: [
      "It is a React JS fully functional tutor service provider web application where users can enroll and manage tutor service.",
      "API integration, firebase authentication, etc.",
      "Fully Responsive for desktop, and mobile devices.",
    ],
    key_techs: [
      "React",
      "Tailwind",
      "Firebase",
      "React Router",
      "Axios",
      "REST API",
    ],
  },

  {
    id: 4,
    name: "Service Provider Page",
    image_path: ["https://i.ibb.co/kKk9Vg3/pr6.png"],
    deployed_url: "https://md-ronyahmed.github.io/Idea-leader-board-site/",
    github_url: "https://github.com/Md-RonyAhmed/Idea-leader-board-site",
    category: ["nextJs", "react"],
    description: [
      "It is a React JS fully functional tutor service provider web application where users can enroll and manage tutor service.",
      "API integration, firebase authentication, etc.",
      "Fully Responsive for desktop, and mobile devices.",
    ],
    key_techs: [
      "React",
      "Tailwind",
      "Firebase",
      "React Router",
      "Axios",
      "REST API",
    ],
  },

  {
    id: 5,
    name: "Dram Phone Search",
    image_path: ["https://i.ibb.co/pf2WDx3/pr4.png"],
    deployed_url: "https://dream-phone-store.netlify.app/",
    github_url: "https://github.com/Md-RonyAhmed/dream-phone-search-api",
    category: ["express"],
    description: [
      "It is a React JS fully functional tutor service provider web application where users can enroll and manage tutor service.",
      "API integration, firebase authentication, etc.",
      "Fully Responsive for desktop, and mobile devices.",
    ],
    key_techs: [
      "React",
      "Tailwind",
      "Firebase",
      "React Router",
      "Axios",
      "REST API",
    ],
  },
  {
    id: 6,
    name: "Influencer e-commerce page",
    image_path: ["https://i.ibb.co/ftBxmrP/pr7.png"],
    deployed_url: "https://md-ronyahmed.github.io/influencer-ecomerce-site/",
    github_url: "https://github.com/Md-RonyAhmed/influencer-ecomerce-site",
    category: ["express"],
    description: [
      "It is a React JS fully functional tutor service provider web application where users can enroll and manage tutor service.",
      "API integration, firebase authentication, etc.",
      "Fully Responsive for desktop, and mobile devices.",
    ],
    key_techs: [
      "React",
      "Tailwind",
      "Firebase",
      "React Router",
      "Axios",
      "REST API",
    ],
  },
  {
    id: 7,
    name: "Balance Calculator",
    image_path: ["https://i.ibb.co/CHW1Dz4/pr8.png"],
    deployed_url: "https://balancecalculator.netlify.app",
    github_url: "https://github.com/Md-RonyAhmed/balance-calculator-js",
    category: ["react"],
    description: [
      "It is a React JS fully functional tutor service provider web application where users can enroll and manage tutor service.",
      "API integration, firebase authentication, etc.",
      "Fully Responsive for desktop, and mobile devices.",
    ],
    key_techs: [
      "React",
      "Tailwind",
      "Firebase",
      "React Router",
      "Axios",
      "REST API",
    ],
  },
];
