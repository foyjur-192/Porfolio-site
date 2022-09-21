
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Car from './Pages/Car';
import Furniture from './Pages/Furniture';
import Gym from './Pages/Gym';
// import About from './Pages/About';
// import Contact from './Pages/Contact';
// import HeroSection from './Pages/HeroSection';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
// import Projects from './Pages/Projects';
// import Skills from './Pages/Skills';


function App() {
  return (
    <div className="App">
       <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/furniture" element={<Furniture></Furniture>}></Route>
        <Route path="/car" element={<Car></Car> }></Route>
        <Route path="/gym" element={ <Gym></Gym> }></Route>
        {/* <Route path="/heroSection" element={<HeroSection></HeroSection>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/skills" element={<Skills></Skills> }></Route>
        <Route path="/projects" element={<Projects></Projects> }></Route>
        <Route path="/contact" element={<Contact></Contact> }></Route> */}
      </Routes>
    </div>
  );
}
export default App;
