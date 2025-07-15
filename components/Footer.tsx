'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

const FooterLink = ({
  href,
  children,
}: {
  href: object | string;
  children: string;
}) => (
  <Link
    href={href}
    className={`${montserrat.className} text-sm text-gray-400 hover:text-white transition duration-200 ease-in-out`}
  >
    {children}
  </Link>
);

const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-zinc-600 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 text-white">

        {/* Logo & Tagline */}
        <div className="space-y-4">
          <div className="w-24">
            <Image
              src="/logo.svg"
              alt="Raja Industries Logo"
              width={90}
              height={90}
              className="w-full h-auto object-contain invert"
            />
          </div>
          <p className={`${montserrat.className} text-sm text-gray-400 leading-relaxed`}>
            Elevate your style with <span className="text-white font-semibold">Raja Industries</span>. Fashion with purpose, power & personality.
          </p>
        </div>

        {/* Visit Us */}
        <div className="space-y-2">
          <h3 className={`${montserrat.className} font-semibold text-white text-base mb-2`}>Visit Us</h3>
          <p className="text-sm text-gray-400">Pakistan, Punjab, Lahore</p>
          <p className="text-sm text-gray-400">Call: 00-0000-00</p>
          <p className="text-sm text-gray-400">Email: business@business.com</p>
          <div className="flex gap-3 mt-3">
            {['facebook', 'instagram', 'youtube', 'tiktok', 'x'].map((platform) => (
              <Link key={platform} href="/" className="hover:scale-110 transition-all duration-200">
                <Image
                  src={`/${platform}.svg`}
                  alt={platform}
                  width={24}
                  height={24}
                  className="invert opacity-80 hover:opacity-100"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Shop */}
        <div className="flex flex-col gap-2">
          <h3 className={`${montserrat.className} font-semibold text-white text-base mb-2`}>Shop</h3>
          <FooterLink href={{ pathname: '/shop', query: { category: 'All', type: 'Men' } }}>Men</FooterLink>
          <FooterLink href={{ pathname: '/shop', query: { category: 'All', type: 'Women' } }}>Women</FooterLink>
          <FooterLink href={{ pathname: '/shop', query: { category: 'All', type: 'Kids' } }}>Kids</FooterLink>
          <FooterLink href={{ pathname: '/shop', query: { category: 'All', type: 'All' } }}>All</FooterLink>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-2">
          <h3 className={`${montserrat.className} font-semibold text-white text-base mb-2`}>Company</h3>
          <FooterLink href="/info/about-us">About Us</FooterLink>
          <FooterLink href="/info/careers">Careers</FooterLink>
          <FooterLink href="/info/press">Press</FooterLink>
          <FooterLink href="/info/contact">Contact</FooterLink>
        </div>

        {/* Support */}
        <div className="flex flex-col gap-2">
          <h3 className={`${montserrat.className} font-semibold text-white text-base mb-2`}>Support</h3>
          <FooterLink href="/info/faqs">FAQs</FooterLink>
          <FooterLink href="/info/shipping">Shipping</FooterLink>
          <FooterLink href="/info/returns">Returns</FooterLink>
          <FooterLink href="/info/privacy-policy">Privacy Policy</FooterLink>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800 py-5 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Raja Industries. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
