// EFF5EF
// EB644D
// D37194
// 875949
// 2C2C3C
import {
  gmail,
  linkedin,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  fannie,
  utd,
  freight,
  resume,
  lymba,
  github,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experiences",
  },
  {
    id: "project",
    title: "Projects",
  },
];

const services = [
  {
    title: "GitHub",
    icon: github,
    link: "https://github.com/aditya0909k",
  },
  {
    title: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/aditya34/",
  },
  {
    title: "Email",
    icon: gmail,
    link: "mailto:aditya.ak.0909@gmail.com",
  },
  {
    title: "Resume",
    icon: resume,
    link: "https://drive.google.com/file/d/1MFdvGHIUVgF28yRipigLwQLeyrBNieYv/view?usp=sharing"
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Fannie Mae",
    icon: fannie,
    iconBg: "#FFFFFF",
    date: "June 2024 - August 2024",
    points: [
      "Developing an integrated similiarity search solution for querying 700K+ documents using PyTorch models and Go.",
    ],
  },
  {
    title: "Undergraduate Researcher",
    company_name: "Computer Vision & Multimodal Computing Lab",
    icon: utd,
    iconBg: "#FFFFFF",
    date: "January 2024 - May 2024",
    points: [
      "Constructed neural network architecture in PyTorch and tested improvements to TPAVI, a self-attention module in AVSBench.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Uber Freight",
    icon: freight,
    iconBg: "#FFFFFF",
    date: "August 2023 - December 2023",
    points: [
      "Contracted through Success In Cloud to optimize logistics processes for supply chain algorithms and NLP pipelines.",
    ],
  },
  {
    title: "Machine Learning Intern",
    company_name: "Lymba",
    icon: lymba,
    iconBg: "#FFFFFF",
    date: "December 2020 - April 2021",
    points: [
      "Helped improve Lymba's document processing deep learning models by adding over 500 annotations for various types of tasks.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "CometBites",
    description:
      "A mobile application built in JavaScript that connects home chefs in the Richardson area to college students hungry for a home-cooked meal.",
    tags: [
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "React",
        color: "yellow-text-gradient",
      },
      {
        name: "Firebase",
        color: "yellow-text-gradient",
      },
    ],
    image: gmail,
    source_code_link: "https://github.com/aditya0909k",
  },
  {
    name: "GaragePi",
    description:
      "Used a Raspberry Pi and a relay switch to automate my home's garage door. I also created a simple JavaScript mobile application to open/close the garage door.",
    tags: [
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "Python",
        color: "yellow-text-gradient",
      },
      {
        name: "Flask",
        color: "yellow-text-gradient",
      },
      {
        name: "React",
        color: "yellow-text-gradient",
      },
    ],
    image: gmail,
    source_code_link: "https://github.com/aditya0909k/RBP-Garage-Door-Opener",
  },
  {
    name: "HueKeeper",
    description:
      "A Discord bot that allows users to store a Discord embedding of a color they pick, with the HEX code, RGB code, and a picture of the color itself.",
    tags: [
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "AWS",
        color: "yellow-text-gradient",
      },
    ],
    image: gmail,
    source_code_link: "https://github.com/aditya0909k/Discord-Color-Bot",
  },
  {
    name: "EcoVision",
    description:
      "Led a computer vision/object detection project with three other undergraduate students to detect pieces of litter in a simulated aquatic environment.",
    tags: [
      {
        name: "Python",
        color: "yellow-text-gradient",
      },
      {
        name: "PyTorch",
        color: "yellow-text-gradient",
      },
      {
        name: "YOLOv7",
        color: "yellow-text-gradient",
      },
    ],
    image: gmail,
    source_code_link: "https://github.com/aditya0909k/Marine-Litter-Detector",
  }, 
  {
    name: "ScratchCNN",
    description:
      "Fully functional convolutional neural network from scratch, with convolution, relu, pooling, dense, and softmax. Trained on the MNIST handwriting dataset.",
    tags: [
      {
        name: "Python",
        color: "yellow-text-gradient",
      },
      {
        name: "NumPy",
        color: "yellow-text-gradient",
      },
    ],
    image: gmail,
    source_code_link: "https://github.com/aditya0909k/CNN-From-Scratch",
  },
  {
    name: "RapidFilter",
    description:
      "Developed an GPU-accelerated image processing library with Gaussian smoothing, edge detection, image sharpening, etc. using convolution.",
    tags: [
      {
        name: "C++",
        color: "yellow-text-gradient",
      },
      {
        name: "CUDA",
        color: "yellow-text-gradient",
      },
    ],
    image: gmail,
    source_code_link: "https://github.com/aditya0909k/CUDA-Image-Processing",
  },
];

export { services, technologies, experiences, testimonials, projects };
