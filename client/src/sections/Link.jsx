const Link = () => {
  return (


<>
{/* Laptop View */}

    <div className="hidden w-[1440px] sm:flex items-center h-[724px] mt-[-250px] p-[40px] bg-[#4A508E]">
        <img src="/src/assets/Left.svg" className="w-[18px] h-[33px] cursor-pointer " alt="" />
      <div className="w-[1264px] h-[644px] flex flex-col items-center gap-[50px] ">
        <div className="w-[1264px] h-[540px] flex flex-col items-center  gap-[50px] ">

          <div className="w-[518px] h-[85px] flex  flex-col gap-[15px] ">
            <div className="w-[465px] h-[48px] text-[#F8F9FB] font-bold text-[40px] leading-[48px] ">
              You audience wants links
            </div>
            <div className="w-[518px] h-[22px] font-[500] text-[#F8F9FB] text-[18px] leading-[21.6px]">
              Make it easy for them by linking products to every post and video
            </div>
          </div>

          <div>
            <img
              src="/src/assets/Link.jpg"
              className="w-[720px] h-[405px] bg-transparent rounded-[35px] drop-shadow-lg  "
              alt=""
            />
          </div>

        </div>
        <div className="w-[139px] h-[54px] rounded-[18px] py-[16px] px-[24px] bg-[#F8F9FB]">
            <span className="text-[#11151D] text-[18px] font-[600px]">Try for Free</span>
        </div>
      </div>
      <img src="/src/assets/Right.svg" className="w-[18px] h-[33px] cursor-pointer " alt="" />
    </div>

    {/* Mobile View */}

<div className="sm:hidden w-[360px] h-[571px] bg-[#4A508E]">
<div className="flex flex-col gap-[83px]">
    <div className="w-[360px] h-[177px] flex flex-col items-center gap-[32px]">
    <div className="w-[347px] h-[102px] flex flex-col text-center gap-[16px]">
 <div className="font-bold text-[24px] font-sans text-white leading-[28.8px]">Your audience wants links</div>
 <div className="font-[500px] text-[16px] text-center text-white leading-[19.2px]">Make it easy for them by linking products to every post and video</div>
    </div>
    <div className="w-[121px] h-[43px] rounded-[12px] px-[20px] py-[12px] bg-[#F8F9FB] font-[600px] text-[16px] leading-[19.2px]">
Try for Free
    </div> 
    </div>
<div className="w-[360px] h-[250px] ">
    <img src="/src/assets/MobileLink.jpg" className="w-[320px] h-[240px] ml-[20px] rounded-[15px]" alt="" />
</div>
</div>
</div>
</>
  );
};

export default Link;
