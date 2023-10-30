import Contacts from "./components/Contacts";
import Engineering from "./components/Engineering";
import HelmetSettings from "./components/HelmetSettings";
import Hero from "./components/Hero";
import Home from "./components/Home";
import Industry from "./components/Industry";
import Navbar from "./components/Navbar";
import Welding from "./components/Welding";

function App() {
  return (
    <div>
      <HelmetSettings />
      <Navbar/>
      <Hero />
      <Home />
      <Industry />
      <Engineering />
      <Welding />
      <Contacts />
    </div>
  );
}

export default App;
