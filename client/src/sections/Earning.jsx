const Earning = () => {
  return (

<>
{/* Mobile view */}

    <div className="sm:hidden w-[324.2px] h-[629px] mt-4 ml-[18px]">
      <div className="h-[19px]">ESTIMATE EARNING POTENTIAL</div>
      <div className="w-[324.2px] h-[81.92px] mt-3">
        <div className="font-medium text-[16px] leading-[19.2px] font-sans">
          What kind of influencer are you?
        </div>
        <input
          type="text"
          placeholder="Select type"
          className="w-[324.2px] h-[39.92px] rounded-[8.87px] border-[1.11px] mt-3 border-[#DDDCE0]"
        />
      </div>
      <div className="w-[313.88px] h-[140px] ml-[0.12px]">
        <div className="font-medium text-[16px] leading-[19.2px] mt-2">
          How many followers do you have ?
        </div>
        <div className="h-[91px] ml-[14px] ">
          <div className="w-[300px] h-[30px] mt-5">
            <input type="range" className="w-[300px]" />
          </div>
          <div className="w-[72px] ml-[112.58px] mt-3 h-[41px] rounded-[15px] border-b-2  border-[#4A508E] text-center font-medium">
            500K
          </div>
        </div>
      </div>

      <div className="w-[313.88px] h-[140px] ml-[0.12px]">
        <div className="font-medium text-[16px] leading-[19.2px] mt-2">
        How many products do you list monthly?
        </div>
        <div className="h-[91px] ml-[14px] ">
          <div className="w-[300px] h-[30px] mt-5">
            <input type="range" className="w-[300px]" />
          </div>
          <div className="w-[72px] ml-[112.58px] mt-3 h-[41px] rounded-[15px] border-b-2  border-[#4A508E] text-center font-medium">
            25
          </div>
        </div>
      </div>
      <div className="w-[108px] h-[43px] rounded-[12px] px-[20px] py-[12px] bg-[#4A508E] font-semibold text-[16px] leading-[19.2px] text-white font-sans ml-[110px] mt-4">
Calculate
      </div>

      <div className="w-[295px] h-[72px] ml-[16px] mt-14 flex">
    <div className="w-[128.95px]">
        <div className="font-bold text-[18px] leading-[21.6px] text-center">Monthly Earning</div>
        <div className="ml-[18.37px] font-bold text-[24px] text-[#4A508E] ">₹ 12,000</div>
        </div>
    <div className="w-[113.46px] ">
        <div className="font-bold text-[18px] leading-[21.6px] text-center">Yearly Earning</div>
        <div className="ml-[18.37px] font-bold text-[24px] text-[#4A508E] text-center ">₹1,44,000</div>
        </div>
      </div>
    </div>

{/* Laptop view */}

<div className=" hidden sm:block mt-[5rem] w-[866px] h-[651px] ml-[267px] ">
  <div className="w-[441px] ml-[200px] h-[32px] text-center leading-[32.4px] text-[27px] font-bold ">ESTIMATE EARNING POTENTIAL</div>
  <div className="w-[866px] h-[559px] gap-[50px] mt-12">
       <div className="h-[455px] gap-[120px]">
     <div className="w-[572px] h-[455px]">
    <div className="w-[349.09px] h-[22px] font-medium text-[18px]  ">
      What kind of influencer are you ?
      </div>
    </div>
     </div>
     </div>
</div>


    </>
  );
};

export default Earning;
