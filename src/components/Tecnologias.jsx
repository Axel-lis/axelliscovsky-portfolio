import {
  RiHtml5Fill,
  RiCss3Fill,
  RiJavascriptLine,
  RiTailwindCssFill,
  RiGithubFill,
  RiReactjsLine,
  RiFirebaseFill,
} from 'react-icons/ri';
import { FaPhp, FaLaravel, FaBootstrap } from 'react-icons/fa';
import { SiMysql, SiMongodb, SiJquery, SiAdobephotoshop } from 'react-icons/si';
import { BiLogoNodejs, BiLogoDocker } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { VscVscodeInsiders, VscTerminalCmd } from 'react-icons/vsc';
import { SiSwagger } from "react-icons/si";
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: { duration: duration, ease: 'linear', repeat: Infinity, repeatType: 'reverse' },
  },
});

export const Tecnologias = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h1
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl "
      >
        Tecnologías
      </motion.h1>
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          animate="animate"
          initial="initial"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiHtml5Fill className="text-7xl text-red-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          animate="animate"
          initial="initial"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiCss3Fill className="text-7xl text-blue-800" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          animate="animate"
          initial="initial"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaBootstrap className="text-7xl text-purple-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          animate="animate"
          initial="initial"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiTailwindCssFill className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.1)}
          animate="animate"
          initial="initial"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiJavascriptLine className="text-7xl text-yellow-300" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          animate="animate"
          initial="initial"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          animate="animate"
          initial="initial"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiJquery className="text-7xl text-cyan-200" />
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          animate="animate"
          initial="initial"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoNodejs className="text-7xl text-green-300" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.5)}
          animate="animate"
          initial="initial"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaPhp className="text-7xl text-blue-400" />
        </motion.div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaLaravel className="text-7xl text-red-400" />
        </div>
        <motion.div
          variants={iconVariants(5)}
          animate="animate"
          initial="initial"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiGithubFill className="text-7xl text-purple-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          animate="animate"
          initial="initial"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMysql className="text-7xl text-yellow-200" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          animate="animate"
          initial="initial"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          animate="animate"
          initial="initial"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiFirebaseFill className="text-7xl text-red-200" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.4)}
          animate="animate"
          initial="initial"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiAdobephotoshop className="text-7xl text-blue-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          animate="animate"
          initial="initial"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <VscVscodeInsiders className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.6)}
          animate="animate"
          initial="initial"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <VscTerminalCmd className="text-7xl text-gray-200" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.6)}
          animate="animate"
          initial="initial"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
               <BiLogoDocker  className="text-7xl text-blue-400" />
        </motion.div>
         <motion.div
          variants={iconVariants(2.5)}
          animate="animate"
          initial="initial"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        ><SiSwagger className="text-7xl text-green-400"/> 
        </motion.div>
      </motion.div>
    </div>
  );
};
