
import Navbar from './components/Navbar'
import AccordianSection from './sections/AccordianSection'
import Earning from './sections/Earning'
import Footer from './sections/Footer'
import Link from './sections/Link'
import Main from './sections/Main'

function App() {


  return (
    <>
      <div className='font-sans overflow-hidden '>
        <Navbar />
        <Main/>
        <Link/>
        <Earning/>
        <AccordianSection/>
        <Footer/>
      </div>
    </>
  )
}

export default App
