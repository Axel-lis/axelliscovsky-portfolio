import project1 from '../assets/projects/project-1.jpg';
import project2 from '../assets/projects/project-2.jpg';
import project3 from '../assets/projects/project-3.jpg';
import project4 from '../assets/projects/project-4.jpg';
import project5 from '../assets/projects/project-5.jpg';

export const CONTENIDO_PPAL_1 = `Desarrollador Full Stack con título de Técnico Superior en Programación y más de 5 años de experiencia en el rubro. Domino tecnologías modernas de front-end (React, Next.js, CSS, Bootstrap, Tailwind) y back-end (Node.js, PHP, Laravel), con un fuerte enfoque en la creación de aplicaciones eficientes y escalables. Tengo experiencia en el manejo de bases de datos relacionales complejas con MySQL y utilizo herramientas como Git y GitHub para asegurar una colaboración fluida en equipos de desarrollo.`;

export const CONTENIDO_PPAL_2 = `Además, cuento con habilidades en diseño UI/UX, trabajando desde la creación de prototipos en Figma hasta la edición visual en Photoshop. Haber aprendido de desarrolladores con gran experiencia ha fortalecido mi visión profesional. Mi objetivo es desarrollar soluciones orientadas a resultados, que generen impacto positivo y brinden experiencias memorables a los usuarios.`;

export const SOBRE_MI_1 = `SSoy desarrollador Full Stack, con título de Técnico Superior en Programación y más de 3 años de experiencia en la creación de aplicaciones web centradas en el usuario. He trabajado tanto en el front-end (JavaScript, React, Next.js, CSS, Bootstrap, Tailwind) como en el back-end (Node.js, PHP, Laravel), gestionando bases de datos relacionales y no relacionales como MySQL y MongoDB.`;
export const SOBRE_MI_2 = `Mi camino en el desarrollo web comenzó con una curiosidad innata por entender cómo funcionan las tecnologías y cómo se aplican en el mundo real. He tenido el privilegio de aprender de desarrolladores experimentados, lo que me permitió colaborar en proyectos de distintas escalas, enriqueciendo mi perspectiva y habilidades. Además, poseo experiencia en diseño de interfaces, desde la creación de prototipos en Figma hasta ajustes visuales con Photoshop, lo que me permite aportar una visión integral en cada proyecto.`;
export const SOBRE_MI_3 = `Encuentro una felicidad genuina en desarrollar soluciones que mejoran la experiencia del usuario o resuelven problemas reales. Me desenvuelvo con soltura en entornos colaborativos y disfruto aprendiendo de mis pares. Para lograr flujos de trabajo eficientes, utilizo herramientas como Git y GitHub. Fuera del código, me mantengo activo explorando nuevas tecnologías y participando en proyectos paralelos que me permiten seguir creciendo como profesional.`;

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
{
  year: '2025 - Presente',
  role: 'Full Stack Developer',
  company: 'Gobierno de La Pampa : Ministerio de Conectividad y Modernización',
  description: `Encargado del desarrollo y mantenimiento de aplicaciones web destinadas a modernizar y digitalizar procesos internos del gobierno provincial. Trabajé en la implementación de sistemas para la gestión de declaraciones juradas, control de stock y automatización de reportes. Integro distintos equipos de trabajo para garantizar la escalabilidad, seguridad y accesibilidad de los sistemas.`,
  technologies: ['Laravel', 'ReactJS', 'SQL', 'Docker', 'Livewire', 'Jetstream', 'Swagger', 'Git', 'TailwindCSS'],
},
/*
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
    title: 'Tarjeta Pampeana : Página Web Principal (Diciembre 2023)',
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
    title: 'Tarjeta Pampeana 2.0 (Marzo 2025)',
    image: project5,
    description:
      'Este es un proyecto EndToEnd el cual pude dirigir y desarrollar enteramente por mi cuenta. Se trata de una reinterpretación de la página de Tarjeta Pampeana que había desarrollado al entrar en la empresa condensando todo lo que fui aprendiendo, optimizando todo el UX,UI, tecnologías más usadas, cargas optimizadas, seguridad optimizada, debounce y rate-limiting tanto para reducir peticiones al servidor como para controlar y disminuir los tiempos de carga.',
    technologies: ['Reactjs', 'Tailwind', 'Express', 'Nodejs', 'mySQL'],
    link: 'https://www.tarjetapampeana.com.ar/',
  },
];

export const CONTACT = {
  address: 'Actualmente en La Pampa, Argentina',
  phoneNo: 'Contáctame a través de mi email :  ',
  email: 'axelliscovsky@outlook.com.ar',
};
