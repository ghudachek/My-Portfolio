import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from './screens/Home/Home'
import AboutMe from './screens/AboutMe/AboutMe'
import Work from './screens/Work/Work'

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about-me">
        <AboutMe />
      </Route>
      <Route path="/work">
        <Work />
      </Route>
    </Switch>
  );

export default App;
