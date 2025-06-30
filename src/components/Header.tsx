import Link from 'next/link'
import { Heart, ShoppingBag, UserRound, Search } from 'lucide-react'
import { Montserrat } from "next/font/google";

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
        <div className="flex items-center w-full max-w-md px-1 py-1 bg-gray-50 hover:bg-gray-100 rounded-[7px] shadow-sm focus-within:ring-2 focus-within:ring-black transition">
        <button className='mr-1.5 border-gray-300 border-2 rounded-[7px] p-1 hover:cursor-pointer hover:border-gray-800 transition'>
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

const Header = () => {
  return (
    <header className="w-full px-6 py-4 bg-white shadow-md mx-auto flex items-center justify-between gap-6">
      {/* Logo */}
      <Link href="/" className={`text-[1.5rem] font-bold ${montserrat.className} pt-1`}>
        Raja International
      </Link>

      {/* Navigation Links */}
      <nav className="flex gap-8 justify-center flex-1 text-md">
        <NavLink href='/'>Home</NavLink>
        <NavLink href="/">Shop</NavLink>
      </nav>

      {/* Icons (cart, wishlist, user) */}
      <div className="flex items-center gap-5">
        <SearchBar />
        <Link href="/wishlist" aria-label="Wishlist">
          <Heart />
        </Link>
        <Link href="/cart" aria-label="Cart">
          <ShoppingBag />
        </Link>
        <Link href="/account" aria-label="Account">
          <UserRound />
        </Link>
      </div>
    </header>
  )
}

export default Header
