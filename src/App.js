import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Splash from "./Pages/Splash/Splash";
import GetStarted from "./Pages/GetStarted/GetStarted";
import Home from "./Pages/Home/Home";
import Property from "./Pages/Property/Propert";
import Floors from "./Pages/Property/Floors/Floors";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/splash" component={Splash} />
        <Route path="/get-started" component={GetStarted} />
        <Route path="/home" component={Home} />
        <Route path="/" component={Property} />
        <Route path="/floor" component={Floors} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
