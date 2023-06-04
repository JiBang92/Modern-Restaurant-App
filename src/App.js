import "./App.css";
import SpecialMenu from "./container/Menu/SpecialMenu";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./container/AboutUs/AboutUs";
import Chef from "./container/Chef/Chef";
import Footer from "./container/Footer/Footer";
import Gallery from "./container/Gallery/Gallery";
import Header from "./container/Header/Header";
import Intro from "./container/Intro/Intro";
import Laurels from "./container/Laurels/Laurels";
import FindUs from "./container/FindUs/FindUs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
}

export default App;
