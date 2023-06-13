import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Splash from "./Pages/Splash/Splash";
import GetStarted from "./Pages/GetStarted/GetStarted";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Login/Signup";
import Add from "./Pages/Login/Add";
import Home from "./Pages/Home/Home";
import Property from "./Pages/Property/Property";
import Floors from "./Pages/Property/Floors/Floors";
import Rooms from "./Pages/Property/Rooms/Rooms";
import RoomUnit from "./Pages/Property/Rooms/RoomUnit";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/splash" component={Splash} />
        <Route path="/get-started" component={GetStarted} exact />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/add" component={Add} />
        <Route path="/home" component={Home} />
        <Route path="/property" component={Property} />
        <Route path="/floor" component={Floors} />
        <Route path="/rooms" component={Rooms} />
        <Route path="/room" component={RoomUnit} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
