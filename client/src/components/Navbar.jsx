
const Navbar = () => {
  return (
    <>
   {/* Laptop View */}
    <div className="hidden sm:flex  w-[1024px] h-[90px] top-[15px] left-[208px] bg-opacity-25 font-sans bg-[#D6D6D6] backdrop-filter backdrop-blur-lg rounded-[35px] pt-[20px] pr-[24px] pb-[20px] pl-[24px]  sticky gap-[50px] ">
   <div className="w-[434px] h-[50px] flex gap-[50px] items-center">
<div className="font-bold text-[22px] leading-[26.4px] top-[31px] left-[45.25px] items-center">
    Createnary
</div>

    <input type="text" placeholder="Search Creators" className=" w-[290px] h-[50px] top-[20px] left-[189.25px] rounded-[25px] bg-[url('/src/assets/Search.svg')] bg-left  bg-no-repeat pl-10" />


   </div>
   
   <div className="flex w-[449.5px] h-[42px] rounded-[15px] items-center">
<div className="flex w-[300px] h-[22px] top-[34px] left-[529.25px] gap-[30px] items-center">
    <div className="w-[66px] h-[22px] flex items-center ">
        <img className="top-[1.88px] w-[18.13px] h-[16.25px] bg-transparent" src="/src/assets/Vector.svg" alt="cart" />
        <div className="left-[30px] ml-2 text-center w-[36px] h-[22px] font-[500px] text-[18px] ">Cart</div>
        </div>
    <div className="w-[80px] h-[22px] flex items-center ">
        <img className="top-[1.88 px] w-[18.13px] h-[16.25px] bg-transparent" src="/src/assets/About.svg" alt="cart" />
        <div className="left-[30px] font-[500px] text-[18px] ml-2">About</div>
        </div>
    <div className="w-[94px] h-[22px] flex items-center ">
        <img className="top-[1.88 px] w-[18.13px] h-[16.25px] bg-transparent" src="/src/assets/Contact.svg" alt="cart" />
        <div className="left-[30px] text-center font-[500px] text-[18px] ml-2">Contact
        </div>
        </div>
    
</div>
<div className="border-[1px] ml-2 rounded-[15px] px-[25px] py-[10px] flex gap-[10px] items-center border-[#11151D] w-[123px] h-[42px]">
    <div className="font-[500px] text-[18px] text-center">
    Login
    </div>
    <img src="/src/assets/Down.svg" alt="down" />
</div>
   </div>
    </div>

{/* MObile View */}
<div className="flex sm:hidden flex-col w-[300px] h-[120px] top-[24px] left-[30px] bg-opacity-25 font-sans bg-[#D6D6D6] backdrop-filter backdrop-blur-lg rounded-[35px] pt-[20px] pr-[24px] pb-[20px] pl-[24px]  sticky gap-[14px] ">
        <div className="flex justify-around">
<div className="font-bold w-[94px] h-[22px] text-[18px] leading-[21.6px] top-[20px] left-[20px] ">
    Createnary
</div>
<div className="w-[20px] h-[20px] top-[21px]">
<img className="text-[#11151D]" src="/src/assets/Hamburger.svg" alt="menu" />
</div>
    
    </div>
    <div className="w-[260px] h-[40px] top-[60px] rounded-[25px] bg-[#F8F9FB] flex">
    <div className="w-[20px] h-[20px] mt-[10px] ml-[16px] ">
<img src="/src/assets/Search.svg" alt="" />
    </div>
    <div className=" h-[17px] mt-[10px] ml-[46px]">
        Search Creators
    </div>
</div>
    </div>
    </>

  )
}

export default Navbar
