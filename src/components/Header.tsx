"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  type HeaderLink = { title: string; href: string };

  const headerLinks: HeaderLink[] = [
    { title: "SunBless", href: "/sunbless" },
    { title: "Fair Lane", href: "/fairlane" },
    { title: "Just Corseca", href: "/justcorseca" },
    { title: "Planet Pulse", href: "/planetpulse" },
    { title: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-10">
      <div className="flex items-center justify-between bg-[#DDE6ED] p-[15px] md:px-[25px] md:py-[15px]">
        <div className="relative w-[80px] h-[45px] md:w-[97px] md:h-[55px]">
          <Link href={"/"}>
            <div className="relative w-full h-full">
              <Image
                priority
                src="/images/global/logo.png"
                alt="Company Logo"
                fill
                className="object-contain"
                sizes="(max-width: 767px) 80px, 97px"
              />
            </div>
          </Link>
        </div>
        <div>
          <nav>
            <ul className="list-none hidden text-[#344a67] lg:text-[18px] lg:flex lg:gap-x-[40px] ">
              {headerLinks.map(({ title, href }) => (
                <li key={href} className="hover:text-black">
                  <Link
                    href={href}
                    className={`${
                      pathname === href
                        ? "text-black border-b-[2px] border-black"
                        : ""
                    }`}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col justify-between h-[25px] w-[40px] md:h-[35px] md:w-[55px] lg:hidden"
            >
              <span
                className={`bg-black block h-[7px] md:h-[9px] w-full transition-all duration-300 ${
                  isOpen
                    ? "rotate-45 translate-y-[9.5px] md:translate-y-[13.5px]"
                    : ""
                }`}
              ></span>
              <span
                className={`bg-black block h-[7px] md:h-[9px] w-full transition-all duration-300 ${
                  isOpen
                    ? "-rotate-45 -translate-y-[9.5px] md:-translate-y-[13.5px]"
                    : ""
                }`}
              ></span>
            </button>
          </nav>
        </div>
      </div>
      <div
        className={`lg:hidden ${
          isOpen ? "bg-[#DDE6ED] h-screen w-screen" : "hidden"
        }`}
      >
        <ul className="w-full h-full list-none text-[#344a67] pt-[40px]">
          {headerLinks.map(({ title, href }) => (
            <li
              key={href}
              className="hover:text-black text-[20px] pl-[20px] py-[10px] md:text-[25px] md:py-[15px] md:pl-[35px]"
            >
              <Link
                href={href}
                className={`${
                  pathname === href
                    ? "text-black border-b-[2px] border-black"
                    : ""
                }`}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
