import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ContactForm from "./components/ContactForm";
import About from "./components/About";
import Header from "./components/Header";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <ContactForm />
        
    </>
  );
}

export default App;
