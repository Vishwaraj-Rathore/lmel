import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="flex items-center justify-between bg-[#DDE6ED] p-[15px] md:px-[25px] md:py-[20px] lg:px-[20px] lg:py-[15px]">
        <div className="relative w-[80px] h-[45px] md:w-[115px] md:h-[65px]">
          <Image
            priority
            src="/images/global/logo.png"
            alt="Company Logo"
            fill
            className="object-contain"
            sizes="(max-width: 767px) 80px, 115px"
          />
        </div>
        <div>
          <nav>
            <ul className="list-none hidden text-[#27374D] lg:flex lg:gap-x-[30px] ">
              <li>SunBless</li>
              <li>FairLane</li>
              <li>JustCorseca</li>
              <li>PlanetPulse</li>
              <li>ContactUs</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
