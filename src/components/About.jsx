import sobreMi from '../assets/sobremi.png';
import { SOBRE_MI_1, SOBRE_MI_2, SOBRE_MI_3 } from '../constants/index.js';
import { motion } from 'framer-motion';
export const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Sobre mi</h2>
      <div className="flex flex-wrap">
        {/* Imagen */}
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img src={sobreMi} alt="Axel Liscovsky" className="my-10 rounded-2xl max-h-80 max-w-xs object-cover" />
          </div>
        </motion.div>

        {/* Texto */}
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-full lg:w-1/2 lg:flex lg:flex-col lg:justify-start p-8"
        >
          <div className="flex flex-col justify-center">
            <p className="mt-10 max-w-xl font-light tracking-tighter">{SOBRE_MI_1}</p>
            <p className="mt-10 max-w-xl font-light tracking-tighter">{SOBRE_MI_2}</p>
            <p className="mt-10 max-w-xl font-light tracking-tighter">{SOBRE_MI_3}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
