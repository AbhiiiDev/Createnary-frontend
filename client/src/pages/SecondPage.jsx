import React from 'react';
import Share from '../assets/Share.jpg';
import Footer from '../components/Footer';

const SecondPage = () => {
  return (
    <div>
        <div className='flex flex-col md:flex-row mt-10 md:ml-16'>
      <div className='md:w-7/12 md:mt-36 pl-10 pr-5'>
        <h2 className='font-semibold text-xl'>GetSetYo handholds you at every step of the way</h2>
        <p className='text-sm mt-3'>You focus on helping your friends and family, we take care of everything else.</p>
        <button
          type='submit'
          className='text-md mt-8 h-11 w-36 font-semibold text-white bg-[#4A508E] border border-transparent px-6 py-2 rounded-2xl hover:bg-white hover:text-[#4A508E] hover:border-[#4A508E] transition duration-300 ease-in-out'>
          Get Started
        </button>
      </div>
      <div className='flex flex-row w-full mt-8 m-10'>
      <div className='flex flex-col mr-5 '>
                <div className='h-[425px]'>
                    <div className='w-10 h-10 bg-[#4A508E] rounded-md'><h1 className=' flex justify-center align-center pt-1 text-2xl text-white'>1</h1></div>
                    <div className="h-full border-r border-gray-300 mr-5"></div>
                </div>
                <div className='h-[425px]'>
                    <div className='w-10 h-10 bg-[#4A508E] rounded-md'><h1 className=' flex justify-center align-center pt-1 text-2xl text-white'>2</h1></div>
                    <div className="h-full border-r border-gray-300 mr-5"></div>
                </div>
                <div className='h-[425px]'>
                    <div className='w-10 h-10 bg-[#4A508E] rounded-md'><h1 className=' flex justify-center align-center pt-1 text-2xl text-white'>3</h1></div>
                    <div className="h-full border-r border-gray-300 mr-5"></div>
                </div>
                <div className='h-[300px]'>
                    <div className='w-10 h-10 bg-[#4A508E] rounded-md'><h1 className=' flex justify-center align-center pt-1 text-2xl text-white'>4</h1></div>
                    <div className="h-full border-r border-gray-300 mr-5"></div>
                </div>
            
        </div>


      <div className=' md:w-2/3 md:pl-5'>

        <div className='mb-14 md:mb-32'>
          <h2 className='font-semibold mb-4'>Share the holidays, stays and experiences with your friends and family</h2>
          <p className='mb-2 text-sm'>You receive trending & curated Itineraries and Insider deals on Hotels & Flights to share</p>
          <img src={Share} alt='' />
        </div>

        <div className='mb-14 md:mb-32'>
          <h2 className='font-semibold mb-4'>Share the holidays, stays and experiences with your friends and family</h2>
          <p className='mb-2 text-sm'>You receive trending & curated Itineraries and Insider deals on Hotels & Flights to share</p>
          <img src={Share} alt='' />
        </div>
        
        <div className='mb-14 md:mb-32'>
          <h2 className='font-semibold mb-4'>Share the holidays, stays and experiences with your friends and family</h2>
          <p className='mb-2 text-sm'>You receive trending & curated Itineraries and Insider deals on Hotels & Flights to share</p>
          <img src={Share} alt='' />
        </div>
        
        <div >
          <h2 className='font-semibold mb-4'>Share the holidays, stays and experiences with your friends and family</h2>
          <p className='mb-2 text-sm'>You receive trending & curated Itineraries and Insider deals on Hotels & Flights to share</p>
          <img src={Share} alt='' />
        </div>
      </div>
      </div>
      
      
    </div>
    <div>
        <Footer />
      </div>
    </div>
    
  );
};

export default SecondPage;