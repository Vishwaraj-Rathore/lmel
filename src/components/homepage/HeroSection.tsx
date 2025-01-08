export default function HeroSection() {
  return (
    <div className="h-[calc(100vh-75px)] mobile:h-[calc(100vh-78px)] tablet:h-[calc(100vh-85px)] flex items-center justify-center">
      <div className="bg-[#526D82] h-[calc(100%-40px)] w-[calc(100%-40px)] mobile:h-[calc(100%-50px)] mobile:w-[calc(100%-50px)] tablet:h-[calc(100%-60px)] tablet:w-[calc(100%-60px)] laptop:h-[calc(100%-70px)] laptop:w-[calc(100%-70px)] rounded-[10px] flex flex-col items-center justify-center">
        <p className="text-[#DDE6ED] text-[24px] mobile:text-[27px] tablet:text-[45px] laptop:text-[55px]">
          Last Mile Enterprises Ltd.
        </p>
        <p className="text-black text-[55px] mobile:text-[60px] tablet:text-[70px] laptop:text-[80px]">
          Ingenious
          <br />
          Intent,
        </p>
      </div>
    </div>
  );
}
