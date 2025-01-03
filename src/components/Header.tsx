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
    <header>
      <div className="flex items-center justify-between bg-[#DDE6ED] p-[15px] md:px-[25px] md:py-[20px] lg:px-[25px] lg:py-[15px]">
        <div className="relative w-[80px] h-[45px] md:w-[115px] md:h-[65px]">
          <Link href={"/"}>
            <div className="relative w-full h-full">
              <Image
                priority
                src="/images/global/logo.png"
                alt="Company Logo"
                fill
                className="object-contain"
                sizes="(max-width: 767px) 80px, 115px"
              />
            </div>
          </Link>
        </div>
        <div>
          <nav>
            <ul className="list-none hidden text-[#344a67] lg:flex lg:gap-x-[40px] ">
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
              className="flex flex-col justify-between h-[40px] w-[45px] md:h-[55px] md:w-[65px] lg:hidden z-10"
            >
              <span
                className={`bg-black block h-[7px] md:h-[9px] w-full transition-all duration-300 ${
                  isOpen
                    ? "rotate-45 translate-y-[16px] md:translate-y-[22px]"
                    : ""
                }`}
              ></span>
              <span
                className={`bg-black block h-[7px] md:h-[9px] w-full transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`bg-black block h-[7px] md:h-[9px] w-full transition-all duration-300 ${
                  isOpen
                    ? "-rotate-45 -translate-y-[16px] md:-translate-y-[22px]"
                    : ""
                }`}
              ></span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
