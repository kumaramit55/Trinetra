import routes from "./routes"
import { RouterProvider } from "react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function App() {
    useEffect(() => {
    AOS.init({
       once: false,      // Animation can happen more than once
      mirror: true  
    });
  }, []);
  
  return (<RouterProvider router={routes}/>)
  
}

export default App
