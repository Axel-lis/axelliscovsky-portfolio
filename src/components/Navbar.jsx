import logo from '../assets/logo.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="Axel Lis" className="mx-2 h-12 w-auto" />
      </div>
      <div className="mb-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://github.com/Axel-lis" target="_blank" rel="noreferrer" className="NavLink">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/axel-liscovsky/" target="_blank" rel="noreferrer" className="NavLink">
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
};
