import { Home, Navbar } from "./components";

const App = () => {
  return (
    <div className="min-h-screen text-white bg-home-mobile md:bg-home-tablet lg:bg-home-desktop bg-no-repeat bg-cover">
      <Navbar />
      <Home />
    </div>
  );
};
export default App;
