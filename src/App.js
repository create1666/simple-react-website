import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "../src/components/Navbar";
import "./App.css";
import Home from "./components/pages/HomePage/Home"


const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">{Home}</Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
