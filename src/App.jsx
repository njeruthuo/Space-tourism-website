import { Route, Routes, useLocation } from "react-router-dom";
import { Crew, Destinations, Home, Navbar, Technology } from "./components";

const App = () => {
  const location = useLocation();

  const getBackgroundClass = () => {
    switch (location.pathname) {
      case "/":
        return "bg-home-mobile md:bg-home-tablet lg:bg-home-desktop";
      case "/destinations":
        return "bg-destinations-mobile md:bg-destinations-tablet lg:bg-destinations-desktop";
      case "/crew":
        return "bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop";
      case "/technology":
        return "bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop";
      default:
        return "bg-home-mobile md:bg-home-tablet lg:bg-home-desktop";
    }
  };
  
  return (
    <div
      className={`min-h-screen text-white bg-no-repeat bg-cover ${getBackgroundClass()}`}
    >
      <Navbar />

      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Destinations />} path="/destinations" />
        <Route element={<Crew />} path="/crew" />
        <Route element={<Technology />} path="/technology" />
      </Routes>
    </div>
  );
};
export default App;
