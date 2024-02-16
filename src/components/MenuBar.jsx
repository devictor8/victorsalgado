import React from 'react';
import CVButton from './CVButton';

export default function MenuBar() {
  return (
    <div className="flex items-center">
      <nav className="px-5">
        <a className="nav-link" href="#">Home</a>
        <a className="nav-link" href="#">Stack</a>
        <a className="nav-link" href="#">Contatos</a>
      </nav>
      <CVButton />
    </div>
  );
}
