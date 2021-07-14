import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ContactForm from "./components/ContactForm";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <ContactForm />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
