import React from 'react';
import { CgInfinity } from 'react-icons/cg';
import MenuBar from './MenuBar';

export default function Header() {
  return (
    <section className="flex max-w-[1000px] m-auto items-center pt-5 justify-around lg:justify-between">
      <CgInfinity className="text-8xl dark:text-white" />
      <MenuBar />
    </section>
  );
}
