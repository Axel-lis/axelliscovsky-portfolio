import project1 from '../assets/projects/project-1.jpg';
import project2 from '../assets/projects/project-2.jpg';
import project3 from '../assets/projects/project-3.jpg';
import project4 from '../assets/projects/project-4.jpg';
import project5 from '../assets/projects/project-5.jpg';
import project6 from '../assets/projects/project-6.jpg';

export const CONTENIDO_PPAL_1 = `Soy Desarrollador Full Stack y Técnico Superior en Programación, con más de 5 años de experiencia creando soluciones web escalables, eficientes y centradas en el usuario. Trabajo con tecnologías modernas como React, Next.js, Node.js, Laravel y PHP, combinando front-end atractivo con back-end robusto. Manejo bases de datos complejas en MySQL y colaboro en equipos usando Git y GitHub.`;

export const CONTENIDO_PPAL_2 = `También tengo experiencia en diseño UI/UX, desde wireframes en Figma hasta edición visual en Photoshop. Haber trabajado junto a desarrolladores con gran trayectoria fortaleció mi enfoque profesional. Apunto a construir productos que generen impacto real y experiencias memorables para los usuarios.`;

export const SOBRE_MI_1 = `Soy desarrollador Full Stack con más de 4 años de experiencia y formación como Técnico Superior en Programación. Me especializo en construir aplicaciones web sólidas, tanto del lado del cliente (JavaScript, React, Next.js, Tailwind, Bootstrap) como del servidor (Node.js, PHP, Laravel), con bases de datos MySQL y MongoDB.`;

export const SOBRE_MI_2 = `Mi camino en la programación empezó con una fuerte curiosidad por cómo la tecnología transforma el mundo. Participé en proyectos de diversas escalas, lo que consolidó mis habilidades técnicas y mi capacidad para trabajar en equipo. También cuento con experiencia en diseño de interfaces, desde la concepción en Figma hasta la ejecución en Photoshop.`;

export const SOBRE_MI_3 = `Disfruto crear soluciones simples y efectivas que aporten valor real. Me adapto con facilidad a distintos entornos de trabajo, y utilizo herramientas como Git y GitHub para mantener flujos de desarrollo ordenados. Fuera del código, me motiva seguir aprendiendo y asumir nuevos desafíos tecnológicos.`;


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
    title: 'Ecoclean : Página Web Principal (Junio 2023)',
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
    title: 'Tarjeta Pampeana : Homebanking (Diciembre 2023)',
    image: project3,
    description:
      'Este proyecto nació de la necesidad de gestionar un número creciente de usuarios y promover la autogestión de servicios. Implementamos un sistema de login cumpliendo con todos los estándares de seguridad vigentes, además de funcionalidades como la solicitud de préstamos con firma digital, visualización de resúmenes, y un catálogo de puntos canjeables. Trabajamos con bases de datos de gran tamaño heredadas de sistemas previos. Fue un proyecto desafiante en el que me desempeñé tanto en el frontend como en el backend.',
    technologies: ['HTML', 'CSS', 'jQuery', 'Bootstrap', 'PHP', 'MYSQL', 'Git', 'Github'],
    link: 'https://online.pampeana.com.ar/',
  },
  {
    title: 'Proyectos Sector Privado (2023 - actualidad )',
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
   {
    title: 'Pagá Tu Resumen (Julio 2025)',
    image: project6,
    description:
      'Este es un proyecto que me fue encargado a fin de poder integrar una pasarella de pagos de resumenes para Tarjeta Pampeana. Usamos una integración con QR Fiserv e intregramos la plataforma de SDK de MercadoPago (CheckoutPro). El desafío estuvo puesto en la dirección del proyecto completo (armé diseño, frontend, backend, intregración con MP, y despliegue a producción + homologación y entregué una app corriendo al 100% lista).',
    technologies: ['Reactjs', 'Tailwind', 'Express', 'Nodejs', 'mySQL','MercadoPago SDK', 'FiservQR'],
    link: 'https://pagaturesumen.pampeana.com.ar/',
  },
];

export const CONTACT = {
  address: 'Actualmente en La Pampa, Argentina',
  phoneNo: 'Contáctame a través de mi email :  ',
  email: 'axelliscovsky@outlook.com.ar',
};
