import { CONTENIDO_PPAL_1, CONTENIDO_PPAL_2 } from '../constants/index.js';
import perfil from '../assets/perfil-pic.png';
import { motion } from 'framer-motion';

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { delay: delay, duration: 0.5 } },
});

export const Principal = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pb-8 text-3xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Axel Liscovsky
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Desarrollador de Software
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="mt-2 max-w-xl font-light tracking-tighter"
            >
              {CONTENIDO_PPAL_1}
            </motion.p>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="max-w-xl font-light tracking-tighter"
            >
              {CONTENIDO_PPAL_2}
            </motion.p>
          </div>
        </div>
        <div className="w-auto lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={perfil}
              alt="Axel Liscovsky"
              className="my-10 max-h-90 max-w-xs object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
