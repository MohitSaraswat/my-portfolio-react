import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";
import BgWrapper from "./utils/BgWrapper";

function App() {
  return (
    <BgWrapper>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
      <SocialLinks />
    </BgWrapper>
  );
}

export default App;