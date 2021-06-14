import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "../src/components/Navbar";
import "./App.css";
import Footer from "./components/pages/Footer/Footer";
import Home from "./components/pages/HomePage/Home"
import Pricing from "./components/Pricing";



const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">{Home}</Route>
          <Route  path="/sign-up">{Pricing}</Route>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
};

export default App;
