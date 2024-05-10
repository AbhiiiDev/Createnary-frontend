
import Navbar from './components/Navbar'
import AccordianSection from './sections/AccordianSection'
import Earning from './sections/Earning'
import Footer from './sections/Footer'
import SecondPage from './pages/SecondPage'
import Link from './sections/Link'
import Main from './sections/Main'
import  {BrowserRouter as Router, Route,Routes} from 'react-router-dom';

function App() {


  return (


    <Router>   
       <Navbar />
      <Routes>
     
<Route path='/' element={
  <>
  <div className='font-sans overflow-hidden '>
   
    <Main/>
    <Link/>
    <Earning/>
    <AccordianSection/>
    <Footer/>
  </div>
</>
}/>
  <Route path='/secondPage' element={<SecondPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
