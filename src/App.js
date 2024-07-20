import React, { useEffect } from "react";
import { Navbar } from "./Components/Navbar";
import { Home } from './Components/Home';
import {About} from "./Components/About";
import { Experience } from "./Components/Experience";
import { Skills } from "./Components/Skills";
import {Projects} from "./Components/Projects";
import {Contacts} from "./Components/Contacts";

import Aos from "aos";
import "aos/dist/aos.css";
import "./index.css";

function App() {
  useEffect(()=>{
    Aos.init();
  },[])

  return (
    <>
    <Navbar/>
    <div className="container">
    <Home />
    <About />
    <Experience />
    <Skills />
    <Projects />
    <Contacts />
    </div>
    </>
  );
}

export default App;
