
import Navbar from '../components/Navbar'

const Main = () => {



  return (
    <div  className="sm:h-[1024px] h-[800px] w-[360px] md:w-[1440px] bg-[url('/src/assets/MobileBackground.jpg')] sm:bg-[url('/src/assets/Background.jpg')] top-[-100px]">
    <Navbar/>
    <div className='w-[264px] h-[160px] mt-[80px] ml-[48px] rounded-[12px]'>
    <div className='font-bold text-[24px]'>
    Welcome To India’s First <span className='text-[#674A8E]'> Creator’s Marketplace</span>
    </div>
    <div className='w-[231px] text-center text-[16px] font-[600px] mt-2 text-[#000000] '>
    Create your E-store @ Zero Cost
    </div>
    <div className='w-[126px] h-[43px] rounded-[12px] mt-2 ml-12 bg-[#4A508E] px-[20px] py-[12px] text-white font-[600px] text-[16px] leding-[19.2px] text-center'>
Get Started
    </div>
    </div>
</div>
  )
}

export default Main
