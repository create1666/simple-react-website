import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "../src/components/Navbar";
import "./App.css";
import Footer from "./components/pages/Footer/Footer";
import Home from "./components/pages/HomePage/Home"



const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">{Home}</Route>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
};

export default App;
