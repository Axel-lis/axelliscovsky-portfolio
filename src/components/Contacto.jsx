import { CONTACT } from '../constants';
import { motion } from 'framer-motion';
export const Contacto = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="my-10 text-center text-4xl"
      >
        Contacto
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.p whileInView={{ x: 0, opacity: 1 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 1.5 }}>
          <a href="mailto:axelliscovsky@outlook.com.ar" className="link" target="_blank" rel="noreferrer">
            {CONTACT.email}
          </a>
        </motion.p>
      </div>
    </div>
  );
};
