'use client';

import Link from 'next/link';
import { Heart, ShoppingBag, UserRound, Search, Menu } from 'lucide-react';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import React, { useState } from 'react';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin']
});

const NavLink = ({ children, href }: { children: string; href: string }) => {
  return (
    <Link
      href={href}
      className={`${montserrat.className}
        relative inline
        after:absolute after:left-0 
        after:bottom-0 after:h-[2px] 
        after:w-0 after:bg-black 
        after:transition-all after:duration-300 
        hover:after:w-full pt-1.5 text-[1.125rem]`}
    >
      {children}
    </Link>
  );
};

const SearchBar = () => {
  return (
    <div className="flex items-center w-[1rem] hover:w-[20rem] border-0 rounded-[7px] hover:border-2 border-gray-200 focus-within:w-[20rem] focus-within:ring-2 focus-within:ring-black transition-all duration-300">
      <button className="border-gray-300 border-0 rounded-[7px] p-1 transition cursor-pointer">
        <Search className="" />
      </button>
      <input
        type="text"
        placeholder="Search for products..."
        className={`w-full bg-transparent outline-none text-sm placeholder-gray-500 ${montserrat.className}`}
      />
    </div>
  );
};

const NavIcon = ({
  href,
  ariaLabel,
  children
}: {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className="hover:scale-110 transition-all duration-300"
    >
      {children}
    </Link>
  );
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full px-6 py-4 bg-white shadow-md">
      <div className="flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href={"/"} className="w-[4rem] lg:w-[6rem]">
          <Image
            src={`/logo.svg`}
            alt="R LOGO"
            width={90}
            height={90}
            className="w-full h-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex w-full gap-6 mx-4 text-md">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/shop">Shop</NavLink>
          <NavLink href="/">Men</NavLink>
          <NavLink href="/">Women</NavLink>
          <NavLink href="/">Kids</NavLink>
        </nav>

        {/* Always-visible Right Section */}
        <div className="flex items-center gap-3">
          {/* SearchBar (hidden on mobile) */}

          {/* Icons (always visible) */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex mr-3">
              <SearchBar />
            </div>
            <NavIcon href="/" ariaLabel="Wishlist">
              <Heart />
            </NavIcon>
            <NavIcon href="/" ariaLabel="Cart">
              <ShoppingBag />
            </NavIcon>
            <NavIcon href="/profile" ariaLabel="Account">
              <UserRound />
            </NavIcon>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 border rounded cursor-pointer bg-transparent text-black focus:bg-black focus:text-white"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <Menu />
          </button>
        </div>
      </div>

      {/* Mobile Nav (links only) */}
      {menuOpen && (
        <div className="flex flex-col gap-4 mt-4 lg:hidden">
          {/* Mobile Search */}
          <div className='flex md:hidden'><SearchBar /></div>
          {/* Navigation Links */}
          <div className="flex flex-col gap-2">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/shop">Shop</NavLink>
            <NavLink href="/">Men</NavLink>
            <NavLink href="/">Women</NavLink>
            <NavLink href="/">Kids</NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
