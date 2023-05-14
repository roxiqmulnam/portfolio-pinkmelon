'use client'
// library
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
// components 
import { navRoutes } from '@/utils/types/navbar';
import UnstyledLink from "@components/links/UnstyledLink";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
      <nav className="layout-wrapper h-20 flex items-center justify-between">
        <UnstyledLink href="/">
          <h1 className="text-green-normal text-3xl font-bold">
            Pink<span className="text-pink-bold">Melon</span>
          </h1>
        </UnstyledLink>
        <ul className="hidden md:flex items-center justify-between space-x-12">
          {navRoutes.map((route, index) => (
            <li key={`${index}`}>
              <UnstyledLink className='hover:text-pink-bold text-green-normal text-2xl' href={route.href}>{route.label}</UnstyledLink>
            </li>
          ))}
        </ul>
        <div onClick={handleNav} className="block md:hidden z-50">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </nav>
  );
}
