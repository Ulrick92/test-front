import "./App.css";
import { Home, Bookings } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/bookings" component={Bookings} />
      </Switch>
    </Router>
  );
};

export default App;
