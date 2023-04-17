import "./App.css";
import "./index.css";
import Navbar from "./components/navbar";
import Carousel from "./components/carousel";
import Home from "./pages/home";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Carousel />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
