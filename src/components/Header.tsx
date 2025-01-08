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
      <div className="flex items-center justify-between bg-one p-[15px] mobile:px-[17px] mobile:py-[15px] tablet:px-[20px] tablet:py-[15px]">
        <div className="relative w-[80px] h-[45px] mobile:w-[85px] mobile:h-[48px] tablet:w-[97px] tablet:h-[55px]">
          <Link href={"/"}>
            <div className="relative w-full h-full">
              <Image
                priority
                src="/images/global/logo.png"
                alt="Company Logo"
                fill
                className="object-contain"
                sizes="(max-width: 359px) 80px, (max-width: 767px) 85px, 97px"
              />
            </div>
          </Link>
        </div>
        <div>
          <nav>
            <ul className="list-none hidden text-four laptop:text-[18px] desktop:text-[20px] laptop:flex laptop:gap-x-[35px] desktop:gap-x-[45px]">
              {headerLinks.map(({ title, href }) => (
                <li key={href} className="hover:text-black">
                  <Link
                    href={href}
                    className={`${
                      pathname === href
                        ? "text-black border-b-[3px] border-black"
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
              className="flex flex-col justify-between h-[25px] w-[40px] tablet:h-[35px] tablet:w-[55px] laptop:hidden"
            >
              <span
                className={`bg-black block h-[7px] tablet:h-[9px] w-full transition-all duration-300 ${
                  isOpen
                    ? "rotate-45 translate-y-[9.5px] tablet:translate-y-[13.5px]"
                    : ""
                }`}
              ></span>
              <span
                className={`bg-black block h-[7px] tablet:h-[9px] w-full transition-all duration-300 ${
                  isOpen
                    ? "-rotate-45 -translate-y-[9.5px] tablet:-translate-y-[13.5px]"
                    : ""
                }`}
              ></span>
            </button>
          </nav>
        </div>
      </div>
      <div
        className={`laptop:hidden ${
          isOpen ? "bg-one h-screen w-screen" : "hidden"
        }`}
      >
        <ul className="w-full h-full list-none text-four pt-[40px]">
          {headerLinks.map(({ title, href }) => (
            <li
              key={href}
              className="hover:text-black text-[20px] pl-[20px] py-[10px] tablet:text-[25px] tablet:py-[15px] tablet:pl-[25px]"
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
