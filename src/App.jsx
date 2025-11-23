import { useState } from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import MainPage from "./components/MainPage/MainPage";
import "./App.css";

const App = () => {
  const [landingPage, setLandingPage] = useState(true)

  const toggleLandingPage = () => {
    setLandingPage((prev) => !prev);
  }
  
  return (
    <>{landingPage ? <LandingPage toggle = {toggleLandingPage}/> : <MainPage />}</>
  )
}

export default App;
