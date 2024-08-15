import Navbar from "./components/navbar/Navbar.jsx";
import Astros from "./components/astros/Astros.jsx";
import Apod from "./components/apod/Apod.jsx";
import './App.css';
import {Routes, Route} from "react-router-dom";

function App() {
  const links=[
    {id: 1, href:"/", text:"Home"},
    {id: 2, href:"/astros", text:"Astros"},
    {id: 3, href:"/apod", text: "APOD"},
    {id: 4, href:"/about", text:"About"},

  ];

  return (
    <> 
      <Navbar links={links}/>
      <Routes>
       <Route path="/" element={<h1>Space apps</h1>} />
       <Route path="/astros" element={<Astros/>} />
     </Routes>
    </>
  );
}


export default App;