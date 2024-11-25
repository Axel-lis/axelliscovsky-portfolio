import project1 from '../assets/projects/project-1.jpg';
import project2 from '../assets/projects/project-2.jpg';
import project3 from '../assets/projects/project-3.jpg';
import project4 from '../assets/projects/project-4.jpg';
import project5 from '../assets/projects/project-5.jpg';

export const CONTENIDO_PPAL_1 = `Soy desarrollador full stack con título de Técnico Superior en Programación y 3 años de experiencia en tecnologías front-end (React, Next.js, CSS, Bootstrap, Tailwind) y back-end (Node.js, PHP, Laravel). Manejo bases de datos relacionales de gran tamaño con MySQL y utilizo herramientas como Git y GitHub para colaborar eficientemente en equipos.`;

export const CONTENIDO_PPAL_2 = `También tengo habilidades en diseño, desde Figma hasta Photoshop, para crear interfaces centradas en el usuario. He tenido el privilegio de aprender de grandes programadores, lo que ha enriquecido mi enfoque profesional. Mi objetivo es desarrollar soluciones innovadoras que impulsen el crecimiento y ofrezcan experiencias excepcionales a los usuarios.`;

export const SOBRE_MI_1 = `Soy un desarrollador FullStack con título de Técnico Superior en Programación y 3 años de experiencia profesional en el desarrollo de aplicaciones web centradas en el usuario. He trabajado tanto en front-end (JS, React, Next.js, CSS, Bootstrap, Tailwind) como en back-end (Node.js, PHP, Laravel), manejando bases de datos relacionales y no relacionales como MySQL y MongoDB.`;
export const SOBRE_MI_2 = `Mi camino en el desarrollo web comenzó por una curiosidad innata para entender cómo funcionan las tecnologías y cómo se utilizan. He tenido la privilegio de aprender de grandes programadores, lo que me llevó a colaborar en proyectos grandes (y, otros tantos, pequeños duración), enriqueciendo mi enfoque y habilidades. Además, tengo experiencia en diseño de interfaces, desde prototipos en Figma hasta la edición visual con Photoshop, lo que me permite aportar una perspectiva completa en cada proyecto.`;
export const SOBRE_MI_3 = `Me entusiasma y encuentro una genuina felicidad en el desarrollo de soluciones que impacten positivamente en la experiencia del usuario o que resuelvan un problema. También me desenvuelvo bien en entornos colaborativos y disfruto mucho de poder aprender de mis pares. Utilizo herramientas como Git y GitHub para lograr un flujo de trabajo eficiente en equipo. Fuera del código, disfruto manteniéndome activo, explorando nuevas tecnologías y participando en proyectos paralelos para seguir aprendiendo y creciendo como programador.`;

export const EXPERIENCES = [
  {
    year: '2023 - Presente',
    role: 'Desarrollador de Software Full Stack',
    company: 'Tarjeta Pampeana',
    description: `Comencé como Desarrollador Front-End, creando secciones dinámicas para el sitio web y el homebanking con JavaScript, jQuery, y PHP, integrando animaciones y datos en tiempo real desde MySQL y CSVs. Luego, amplié mis habilidades al Back-End, especializándome en PHP y Laravel para desarrollar APIs RESTful. Actualmente, gestiono tanto el Front-End como el Back-End, optimizando consultas SQL e implementando nuevas funcionalidades.`,
    technologies: [
      'Javascript',
      'jQuery',
      'PHP',
      'MYSQL',
      'SASS',
      'Bootstrap',
      'Laravel',
      'Git',
      'Github',
      'Adobe Photoshop',
      'APIs',
    ],
  },
  {
    year: '2024 - Presente',
    role: 'Desarrollador de Software Freelance ',
    company: 'Autónomo',
    description: `He trabajado de forma autónoma en distintos proyectos, alternando entre los roles de FrontEnd y BackEnd, junto a programadores a quienes admiro. Utilicé tecnologías como Typescript, Laravel, React y Tailwind, enfocándome en el desarrollo de interfaces de usuario y la integración con APIs. Mi objetivo fue optimizar la experiencia del frontend y colaborar en la creación de soluciones innovadoras mientras aprendía nuevas tecnologías.
`,
    technologies: ['Reactjs', 'Laravel', 'Typescript', 'Tailwind', 'APIs', 'Git', 'Github', 'MYSQL'],
  },
  /* {
    year: '2021 - 2022',
    role: 'Full Stack Developer',
    company: 'Facebook',
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ['Python', 'Svelte', 'Three.js', 'Postgres'],
  },
  {
    year: '2020 - 2021',
    role: 'Software Engineer',
    company: 'Paypal',
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ['Ruby', 'Rails', 'PHP', 'Sqlite'],
  }, */
];

export const PROJECTS = [
  {
    title: 'Ecoclean : Página Web Principal',
    image: project1,
    description:
      'Proyecto de una sola persona, con el objetivo de crear una página web para una empresa de limpieza ecológica. Las necesidades del usuario eran simples: informar sobre los productos ofrecidos a la vez que se educaba sobre cómo usarlos. Debía tener en cuenta que muchos productos usaban un QR impreso para escanear y acceder a la información por lo que utilicé un sistema de botones para recuperar la página antigua.',
    technologies: ['HTML', 'CSS', 'Reactjs', 'Adobe Photoshop', 'Bootstrap'],
    link: 'https://ecoclean-page.vercel.app/',
  },
  {
    title: 'Tarjeta Pampeana : Página Web Principal',
    image: project2,
    description:
      'Fui responsable del frontend y diseño del sitio, el cual se desarrolló a partir de entrevistas con empleados y gerentes para identificar necesidades y funcionalidades clave. Implementé la automatización de la recuperación y actualización de datos desde la base de datos. Utilicé Leaflet para la integración de mapas y participé en la creación de banners con Photoshop. Las tecnologías empleadas fueron las sugeridas por el equipo, lo que implicó el desafío de salir de mi zona de confort habitual con React.',
    technologies: ['HTML', 'CSS', 'jQuery', 'MYSQL', 'PHP', 'Leaflet.js', 'Git', 'Github'],
    link: 'https://www.tarjetapampeana.com.ar/',
  },
  {
    title: 'Tarjeta Pampeana : Homebanking',
    image: project3,
    description:
      'Este proyecto nació de la necesidad de gestionar un número creciente de usuarios y promover la autogestión de servicios. Implementamos un sistema de login cumpliendo con todos los estándares de seguridad vigentes, además de funcionalidades como la solicitud de préstamos con firma digital, visualización de resúmenes, y un catálogo de puntos canjeables. Trabajamos con bases de datos de gran tamaño heredadas de sistemas previos. Fue un proyecto desafiante en el que me desempeñé tanto en el frontend como en el backend.',
    technologies: ['HTML', 'CSS', 'jQuery', 'Bootstrap', 'PHP', 'MYSQL', 'Git', 'Github'],
    link: 'https://online.pampeana.com.ar/',
  },
  {
    title: 'Proyectos Sector Privado',
    image: project4,
    description:
      'He participado en diversos proyectos para el sector privado, asumiendo distintos roles en equipos multidisciplinarios. Mi experiencia abarca tanto el desarrollo frontend (React, TypeScript) como backend (Laravel, Express, Node.js, MySQL).',
    technologies: ['HTML', 'CSS', 'Reactjs', 'Typescript', 'Laravel', 'Express', 'Nodejs', 'mySQL'],
    link: 'https://github.com/Axel-lis',
  },
   {
    title: '¿Te gustaría ver cómo trabajo? 🚀',
    image: project5,
    description:
      'Proyecto personal para demostrar mi experiencia profesional. Estoy reinterpretando la página de Tarjeta Pampeana, aplicando tecnologías modernas como React y Tailwind, y optimizando la experiencia de usuario y las cargas. Este proyecto refleja un poco de mi aprendizaje (continuo) y mi compromiso con seguir aprendiendo, mejorando y progresando como programador.',
    technologies: ['Reactjs', 'Tailwind', 'Express', 'Nodejs', 'mySQL'],
    link: 'https://tarjetapampeana-react.vercel.app/',
  },
];

export const CONTACT = {
  address: 'Actualmente en La Pampa, Argentina',
  phoneNo: 'Contáctame a través de mi email :  ',
  email: 'axelliscovsky@outlook.com.ar',
};
