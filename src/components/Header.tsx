import Image from "next/image";

export default function Header() {
  return (
    <div className="p-[10px] md:p-[15px]">
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
    </div>
  );
}
