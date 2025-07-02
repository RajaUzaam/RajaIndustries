import Link from 'next/link';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin']
});

const FooterLink = ({ href, children }: { href: string; children: string }) => (
  <Link
    href={href}
    className={`${montserrat.className} text-sm text-gray-300 hover:text-white transition`}
  >
    {children}
  </Link>
);

const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-gray-800 shadow-sm mt-16">

      {/* Newsletter Sign-Up */}
      <div className="bg-gray-800 w-full px-6 py-12 text-white text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h3 className={`${montserrat.className} font-semibold text-xl mb-2`}>
            Subscribe to our Newsletter
          </h3>
          <p className={`${montserrat.className} text-sm text-gray-400 mb-6`}>
            Be the first to know about new arrivals, exclusive drops, and special offers.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row items-stretch w-full gap-3 max-w-xl"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className={`flex-1 px-4 py-2 rounded-md text-sm bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white ${montserrat.className}`}
            />
            <button
              type="submit"
              className="px-5 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition text-sm font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-8 text-white">
        {/* Logo Section */}
        <div>
          <div className="w-24 mb-4">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={90}
              height={90}
              className="w-full h-auto object-contain invert"
            />
          </div>
          <p className={`${montserrat.className} text-sm text-gray-400`}>
            Elevate your style with Raja Industries.
          </p>
          
        </div>
        
        {/*"Visit Us"*/}
        <div>
          <h3 className={`${montserrat.className} font-semibold mb-2`}>Visit Us</h3>
          <div className="flex flex-col gap-0">
            <span className={`${montserrat.className} text-sm text-gray-300`}>Pakistan, Punjab, Lahore</span>
            <span className={`${montserrat.className} text-sm text-gray-300`}>Contact us: 00-0000-00</span>
            <span className={`${montserrat.className} text-sm text-gray-300`}>Email: business@business.com</span>
            <div className="flex flex-row gap-1 mt-2 text-white">
            <Link href="/" aria-label="Facebook" className='hover:scale-110 transition'>
              <Image src={"/facebook.svg"} alt='facebook' width={40} height={40}/>
            </Link>
            <Link href="/" aria-label="Instagram" className='hover:scale-110 transition'>
                <Image src={"/instagram.svg"} alt='instagram' width={40} height={40}/>
            </Link>
            <Link href="/" aria-label="Twitter" className='hover:scale-110 transition'>
                <Image src={"/twitter.svg"} alt='twitter' width={40} height={40}/>
            </Link>
            <Link href="/" aria-label="YouTube" className='hover:scale-110 transition'>
                <Image src={"/whatsapp.svg"} alt='whatsapp' width={40} height={40}/>
            </Link>
          </div>
          </div>
        </div>
        {/* Shop Links */}
        <div>
          <h3 className={`${montserrat.className} font-semibold mb-2`}>Shop</h3>
          <div className="flex flex-col gap-1">
            <FooterLink href="/">Men</FooterLink>
            <FooterLink href="/">Women</FooterLink>
            <FooterLink href="/">Kids</FooterLink>
            <FooterLink href="/">All Products</FooterLink>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className={`${montserrat.className} font-semibold mb-2`}>Company</h3>
          <div className="flex flex-col gap-1">
            <FooterLink href="/">About Us</FooterLink>
            <FooterLink href="/">Careers</FooterLink>
            <FooterLink href="/">Press</FooterLink>
            <FooterLink href="/">Contact</FooterLink>
          </div>
        </div>

        {/* Support & Socials */}
        <div>
          <h3 className={`${montserrat.className} font-semibold mb-2`}>Support</h3>
          <div className="flex flex-col gap-1">
            <FooterLink href="/">FAQs</FooterLink>
            <FooterLink href="/">Shipping</FooterLink>
            <FooterLink href="/">Returns</FooterLink>
            <FooterLink href="/">Privacy Policy</FooterLink>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Raja Industries. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
