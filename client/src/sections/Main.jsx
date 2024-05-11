import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";


const Main = () => {
  return (
    <div className="sm:h-[1024px] h-[800px] w-[360px] md:w-[1440px] bg-[url('/src/assets/MobileBackground.jpg')] sm:bg-[url('/src/assets/Background.jpg')] ">
      {/* Mobile View */}
      <div className=" sm:hidden w-[264px] h-[160px] mt-[184px] ml-[48px] rounded-[12px]">
        <div className="font-bold text-[24px]">
          Welcome To India’s First
          <span className="text-[#674A8E]"> Creator’s Marketplace</span>
        </div>
        <div className="w-[231px] text-center text-[16px] font-[600px] mt-4 text-[#000000] ">
          Create your E-store @ Zero Cost
        </div>
        <div className="w-[126px] h-[43px] rounded-[12px] mt-5 ml-12 bg-[#4A508E] px-[20px] py-[12px] text-white font-[600px] text-[16px] leding-[19.2px] text-center">
       <Link to='/secondPage'>   Get Started</Link>
        </div>
      </div>
      <div className="sm:hidden w-[450px] h-[450px] mt-[50px] ml-[-44px]">
        <img
          src="/src/public/assets/Mobile.svg"
          alt="Mobile"
          className="w-[300px] h-[450px] ml-[75px] "
        />
      </div>

      {/* Laptop View */}

      <div className="hidden sm:flex mx-auto">
        <div className="w-[474px] h-[360px] flex flex-col gap-[50px] mt-[180px] ml-[140px]">
          <div className="w-[474px]  h-[256px] flex flex-col gap-[28px]">
            <div className="w-[474px] h-[162px] flex flex-col gap-[40px]">
              <div className="font-bold text-[40px] leading-[48px]">
                Welcome To India’s First{" "}
                <span className="text-[#674A8E]"> Creator’s Marketplace</span>
              </div>
              <div className="font-bold text-[22px] leading-[26.4px] ">
                Create your first E-Store @ Zero Cost
              </div>
            </div>
            <div className="h-[66px] font-[500px] leading-[21.6px] text-[#11151D] text-[18px]">
              Empower your creativity with Createnary. Showcase, sell, and
              connect with a global audience effortlessly, turn your products
              into profits.
            </div>
          </div>
          <div className="w-[144px] h-[54px] rounded-[18px] py-[16px] px-[24px] text-white bg-[#4A508E] font-[600px] text-[18px] leading-[21.6px]">
          <Link to='/secondPage'>   Get Started</Link>
          </div>
        </div>

        <div className="w-[630px] h-[630px] ml-[200px] mt-[70px] z-0 ">
          <img
            src="/src/public/assets/Mobile.svg"
            alt="Mobile"
            className="w-[420px] h-[630px] drop-shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
