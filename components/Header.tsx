'use client';

import Link from 'next/link';
import { Heart, ShoppingBag, UserRound, Search, Menu } from 'lucide-react';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import React, { useState } from 'react';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

const NavLink = ({ children, href }: { children: string; href: object | string }) => (
  <Link
    href={href}
    className={`${montserrat.className} relative text-[1.125rem] font-medium text-zinc-800 transition 
    after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 
    after:bg-black after:transition-all after:duration-300 hover:after:w-full`}
  >
    {children}
  </Link>
);

const SearchBar = () => {
  return (
    <div className="relative group flex items-center transition-all duration-500 ease-in-out">
      <div className="flex items-center w-9 h-9 group-hover:w-64 focus-within:w-64 overflow-hidden bg-zinc-100 border border-zinc-300 rounded-full px-1.25 hover:px-2.5 py-1 shadow-sm group-hover:shadow-md transition-all duration-500 ease-in-out">
        <div className="flex items-center justify-center min-w-[1.5rem] min-h-[1.5rem]">
          <Search className="text-zinc-600" size={18} />
        </div>
        <input
          type="text"
          placeholder="Search products..."
          className={`ml-2 w-0 group-hover:w-full focus:w-full bg-transparent outline-none text-sm placeholder-gray-500 transition-all duration-500 ease-in-out ${montserrat.className}`}
        />
      </div>
    </div>
  );
};

type NavIconProps = {
  isLink: boolean;
  href?: object | string;
  onClick?: () => void;
  ariaLabel: string;
  children: React.ReactNode;
};

const NavIcon = ({ isLink = true, href = '/', onClick, ariaLabel, children }: NavIconProps) => (
  isLink ? (
    <Link
      href={href}
      aria-label={ariaLabel}
      onClick={() => {
        if (onClick) onClick();
      }}
      className="hover:scale-110 hover:text-black transition-all duration-300"
    >
      {children}
    </Link>
  ) : (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className="hover:scale-110 hover:text-black transition-all duration-300"
    >
      {children}
    </button>
  )
);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full px-6 py-5 bg-white shadow-sm border-b border-zinc-200 sticky top-0 z-50">
        <div className="flex items-center justify-between gap-6 max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/" className="w-[5rem] lg:w-[6rem]">
            <Image
              src="/logo.svg"
              alt="R Logo"
              width={90}
              height={90}
              className="w-full h-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex w-full gap-8 mx-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href={{ pathname: "/shop", query: { category: "All", type: "All" } }}>Shop</NavLink>
            <NavLink href={{ pathname: "/shop", query: { category: "All", type: "Men" } }}>Men</NavLink>
            <NavLink href={{ pathname: "/shop", query: { category: "All", type: "Women" } }}>Women</NavLink>
            <NavLink href={{ pathname: "/shop", query: { category: "All", type: "Kids" } }}>Kids</NavLink>
          </nav>

          {/* Right Icons & Search */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex">
              <SearchBar />
            </div>
            <NavIcon isLink={true} href={"/wishlist"} ariaLabel="Wishlist">
              <Heart size={24} />
            </NavIcon>
            <NavIcon isLink={true} href={"/cart"} ariaLabel="Cart">
              <ShoppingBag size={24} />
            </NavIcon>
            <NavIcon isLink={true} href="/profile" ariaLabel="Account">
              <UserRound size={24} />
            </NavIcon>
            <button
              className="lg:hidden p-2 border rounded-md bg-white text-black hover:bg-black hover:text-white transition"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="lg:hidden mt-4 flex flex-col gap-4 px-4">
            <SearchBar />
            <NavLink href="/">Home</NavLink>
            <NavLink href="/shop">Shop</NavLink>
            <NavLink href="/">Men</NavLink>
            <NavLink href="/">Women</NavLink>
            <NavLink href="/">Kids</NavLink>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
