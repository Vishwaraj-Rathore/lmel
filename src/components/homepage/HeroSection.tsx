export default function HeroSection() {
  return (
    <div className="h-[calc(100vh-75px)] md:h-[calc(100vh-85px)] flex items-center justify-center">
      <div className="bg-[#526D82] h-[calc(100%-40px)] w-[calc(100%-40px)] md:h-[calc(100%-100px)] md:w-[calc(100%-100px)] rounded-[10px] flex flex-col items-center justify-center">
        <p className="text-[#DDE6ED] text-[24px]">Last Mile Enterprises Ltd.</p>
        <p className="text-black text-[55px]">
          Ingenious
          <br />
          Intent,
        </p>
      </div>
    </div>
  );
}
