import { BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "../src/components/Navbar";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Router exact path="/"></Router>
        </Switch>
      </Router>
    </>
  );
};

export default App;
