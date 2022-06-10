import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

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
    Icon: BsCircleFill,
    name: "JavaScript",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "40",
  },
  {
    Icon: BsCircleFill,
    name: "React JS",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "HTML & CSS",
    level: "88",
  },
  {
    Icon: BsCircleFill,
    name: "Tailwind Css",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Git",
    level: "88",
  },
  {
    Icon: BsCircleFill,
    name: "VS Code",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "GitHub",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Postman",
    level: "45",
  },
];
export const backend: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Node JS",
    level: "55",
  },
  {
    Icon: BsCircleFill,
    name: "Express JS",
    level: "58",
  },
  {
    Icon: BsCircleFill,
    name: "MongoDB",
    level: "40",
  },
  {
    Icon: BsCircleFill,
    name: "Next JS",
    level: "45",
  },
];
export const hosting: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "AWS",
    level: "30",
  },
  {
    Icon: BsCircleFill,
    name: "Heroku",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "Vercel",
    level: "40",
  },
  {
    Icon: BsCircleFill,
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
      "Basic Realtime Chat App where one can create a room can talk to each other",
    ],
    key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
  },

  {
    id: 4,
    name: "Service Provider Page",
    image_path: ["https://i.ibb.co/kKk9Vg3/pr6.png"],
    deployed_url: "https://md-ronyahmed.github.io/Idea-leader-board-site/",
    github_url: "https://github.com/Md-RonyAhmed/Idea-leader-board-site",
    category: ["nextJs", "react"],
    description: [
      "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
    ],
    key_techs: ["React", "Django", "Django REST API"],
  },

  {
    id: 5,
    name: "Color Classification using tf.js",
    image_path: ["https://i.ibb.co/pf2WDx3/pr4.png"],
    deployed_url: "https://dream-phone-store.netlify.app/",
    github_url: "https://github.com/Md-RonyAhmed/dream-phone-search-api",
    category: ["express"],
    description: [
      "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
    ],
    key_techs: ["Express", "TensorFlow.js", "Vanilla js"],
  },
  {
    id: 6,
    name: "Influencer e-commerce page",
    image_path: ["https://i.ibb.co/ftBxmrP/pr7.png"],
    deployed_url: "https://md-ronyahmed.github.io/influencer-ecomerce-site/",
    github_url: "https://github.com/Md-RonyAhmed/influencer-ecomerce-site",
    category: ["express"],
    description: [
      'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
    ],
    key_techs: [
      "React",
      "Redux",
      "Firebase Auth",
      "YouTube API",
      "Sass",
      "Bootstrap",
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
      "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
    ],
    key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
  },
];
