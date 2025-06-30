import Link from 'next/link'
import { Heart, ShoppingBag, UserRound, Search } from 'lucide-react'
import { Montserrat } from "next/font/google";
import  Image  from 'next/image';
import React from 'react';
const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"]
})

const NavLink = ({ children, href }: {children: string, href: string}) => {
    return(
        <Link href={href} className={`${montserrat.className}
            relative inline-block
            after:absolute after:left-0 
            after:bottom-0 after:h-[2px] 
            after:w-0 after:bg-black 
            after:transition-all after:duration-300 
            hover:after:w-full pt-1.5 text-[1.125rem]`}>
        { children }</Link>
    )
}

const SearchBar = () => {
    return (
        <div className="flex items-center w-[20rem] px-1 py-1 bg-gray-50 hover:bg-gray-100 rounded-[7px] shadow-sm focus-within:ring-2 focus-within:ring-black transition">
        <button className='mx-1.5 border-gray-300 border-2 rounded-[7px] p-1 hover:cursor-pointer hover:border-gray-800 transition'>
        <Search className="w-[1.25rem] h-[1.25rem]" />
        </button>
        <input
            type="text"
            placeholder="Search for products..."
            className={`w-full bg-transparent outline-none text-sm placeholder-gray-500 ${montserrat.className}`}
        />
        </div>
    )
}

const NavIcon = ({
  href,
  ariaLabel,
  children,
}: {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className='
      inline-block p-1.5 rounded-[7px] 
      border border-gray-300 bg-gray-100 shadow-sm hover:bg-gray-900
      hover:text-white hover:scale-110 transition-all duration-300
      '
    >
    {children}
    </Link>
  );
};


const Header = () => {
  return (
    <header className="w-full px-6 py-4 bg-white shadow-md flex">
      {/* Logo */}
      <Link href="/" className={`text-[1.5rem] font-bold ${montserrat.className} pt-1`}>
        <Image src={`/logo.svg`} alt={`R LOGO`} width={90} height={90}/>
      </Link>

      {/* Navigation Links */}
      <nav className="flex w-full my-auto gap-6 mx-4 text-md">
        <NavLink href='/'>Home</NavLink>
        <NavLink href="/">Shop</NavLink>
        <NavLink href="/">Men</NavLink>
        <NavLink href="/">Women</NavLink>
        <NavLink href="/">Kids</NavLink>
      </nav>

      {/* Icons (cart, wishlist, user) */}
      <div className="flex items-center my-auto gap-5">
        <SearchBar />
        <NavIcon href='/wishlist' ariaLabel='Wishlist'>
          <Heart />
        </NavIcon>
        <NavIcon href="/cart" ariaLabel="Cart">
          <ShoppingBag />
        </NavIcon>
        <NavIcon href="/account" ariaLabel="Account">
          <UserRound />
        </NavIcon>
      </div>
    </header>
  )
}

export default Header
