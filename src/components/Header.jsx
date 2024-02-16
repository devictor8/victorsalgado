import React from 'react';
import logo from '../assets/logo_v.png';
import MenuBar from './MenuBar';

export default function Header() {
  return (
    <section className="flex max-w-[1000px] m-auto items-center pt-5 justify-around lg:justify-between">
      <img className="max-w-20" src={logo} alt="logo" />
      <MenuBar />
    </section>
  );
}
