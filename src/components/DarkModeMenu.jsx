import React, { useEffect, useState } from 'react';
import { FaRegMoon, FaRegSun, FaDesktop } from 'react-icons/fa';

export default function DarkModeMenu() {
  // document.documentElement.classList.add('dark');
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.theme : 'system',
  );
  const element = document.documentElement;
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const options = [
    {
      icon: <FaRegMoon className="mr-2" />,
      text: 'dark',
    },
    {
      icon: <FaRegSun className="mr-2" />,
      text: 'light',
    },
    {
      icon: <FaDesktop className="mr-2" />,
      text: 'system',
    },
  ];
  const onWindowMatch = () => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && darkQuery.matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
  onWindowMatch();
  useEffect(() => {
    switch (theme) {
      case 'dark':
        element.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        break;
      case 'light':
        element.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        break;
      default:
        localStorage.removeItem('theme');
        onWindowMatch();
        break;
    }
  }, [theme]);
  const handleMenuOpen = () => setIsOpen(!isOpen);
  darkQuery.addEventListener('change', (event) => {
    if (!(theme in localStorage)) {
      if (event.matches) {
        element.classList.add('dark');
      } else {
        element.classList.remove('dark');
      }
    }
  });
  return (
    <div className="m-3">
      <button type="button" onClick={handleMenuOpen} className="text-3xl text-color-default">
        <FaRegSun />
      </button>

      <div
        className={`dark:bg-zinc-900 bg-slate-100 rounded-md py-1 fixed 
        ${isOpen ? '' : 'hidden'}`}
      >
        {options.map((item) => (
          <div
            key={item.text}
            onClick={() => setTheme(item.text)}
            className={`themeIterface 
          ${theme === item.text ? 'bg-slate-200 text-slate-900 font-bold dark:bg-zinc-800' : ''}`}
          >
            {item.icon}
            {item.text[0].toUpperCase() + item.text.slice(1)}
          </div>
        ))}
      </div>
    </div>
  );
}
