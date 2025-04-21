
import './App.css'
import Card from './Components/Card.jsx';
import Footer from './Components/Footer.jsx';
import Blog from './Components/Home/Blog.jsx';
import Herop from './Components/Home/Herop.jsx';
import IntroCard from './Components/IntroCard.jsx';
import Members from './Components/Members.jsx';
import Nav from './Components/Navigation/Nav.jsx';
import Test from './Components/Test.jsx';
import NavBar from "./Components/Navigation/Navbar.jsx"

function App() {
 

  return (
    <>
    {/* <Nav /> */}
    <NavBar />
    <Herop />
    <IntroCard />
    <Card />
    <Test />
    <Blog />
    <Members />
    <Footer />
    </>
  )
}

export default App;
