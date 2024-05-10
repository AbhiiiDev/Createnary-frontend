
import Navbar from './components/Navbar'
import SecondPage from './pages/SecondPage'
import AccordianSection from './sections/AccordianSection'
import Earning from './sections/Earning'
import Footer from './components/Footer'
import Link from './sections/Link'
import Main from './sections/Main'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>
    <Router>
    <Routes>

<Route path='/' element={
 <div className='font-sans overflow-hidden '>
 <Navbar />
 <Main/>
 <Link/>
 <Earning/>
 <AccordianSection/>
 <Footer/>
</div>
}/>
<Route path='/secondPage' element={<SecondPage/>}/>


     
    </Routes>
    </Router>
    </>
  )
}

export default App
