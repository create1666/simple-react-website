import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Navbar from "../src/components/Navbar";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Router exact path="/">
            homepage
          </Router>
        </Switch>
      </Router>
    </>
  );
};

export default App;
