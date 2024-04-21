import './App.css'
import Header from "./assets/Components/Header/Header";
import Skills from "./assets/Components/Skills/Skills";
import AboutMe from "./assets/Components/AboutMe/AboutMe";
import Projects from "./assets/Components/Projects/Projects";

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./assets/Components/Footer/Footer";
function App() {

  return (
    <div className="App">
        <Header/>
        <Skills/>
        <AboutMe/>
        <Projects/>
        <Footer/>
    </div>
  )
}

export default App
