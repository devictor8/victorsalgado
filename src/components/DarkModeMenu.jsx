import React from 'react';
import { CgDarkMode } from 'react-icons/cg';

export default function DarkModeMenu() {
  const handleTheme = () => {
  };

  return (
    <div>
      <button onClick={handleTheme} type="button"><CgDarkMode className="text-4xl" /></button>
    </div>
  );
}
