
import Navbar from './components/Navbar'
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
        <Footer/>
      </div>
    </>
  )
}

export default App
