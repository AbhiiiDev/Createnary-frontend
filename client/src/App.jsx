
import SecondPage from './pages/SecondPage'
import Footer from './components/Footer'
import  {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import MainPage from './pages/MainPage'
import Navbar from './components/Navbar';

function App() {


  return (

    <Router> 
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/secondPage' element={<SecondPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
