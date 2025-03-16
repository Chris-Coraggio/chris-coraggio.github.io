import React, { useContext } from 'react';
import './NavBar.scss';
import DesktopContext from '../context/DesktopContext';

export const NavBar: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isDesktop = useContext(DesktopContext);

  return (
    <nav className="w-full py-4 bg-white shadow-md">
      <div className="w-full">
        <ul className={`flex w-full ${isDesktop ? 'flex-row' : 'flex-col'}`}>
          <li className={`${isDesktop ? 'flex-1' : ''} text-center`}>
            <a 
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              className="font-cormorant text-xl hover:text-gray-600 transition-colors cursor-pointer block w-full py-2"
            >
              About
            </a>
          </li>
          <li className={`${isDesktop ? 'flex-1' : ''} text-center`}>
            <a 
              href="#illustrations"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('illustrations');
              }}
              className="font-cormorant text-xl hover:text-gray-600 transition-colors cursor-pointer block w-full py-2"
            >
              Illustrations
            </a>
          </li>
          <li className={`${isDesktop ? 'flex-1' : ''} text-center`}>
            <a 
              href="#writing"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('writing');
              }}
              className="font-cormorant text-xl hover:text-gray-600 transition-colors cursor-pointer block w-full py-2"
            >
              Writing
            </a>
          </li>
          <li className={`${isDesktop ? 'flex-1' : ''} text-center`}>
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="font-cormorant text-xl hover:text-gray-600 transition-colors cursor-pointer block w-full py-2"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};