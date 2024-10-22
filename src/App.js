import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";

const siteProps = {
  name: "Princi Sharma",
  title: "Web Developer ",
  email: "princiinps@gmail.com",
  gitHub: "sharmaprinci",
  instagram: "princi_sh1787",
  linkedIn: "princi-sharma-5ba2a8237",
  microsoft:"profile"
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";


function App() {
  return (
    <div className="App">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
}

export default App;
