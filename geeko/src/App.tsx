import React, { useMemo, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Registration from "./components/navbar_components/Registration";
import AboutUs from "./components/navbar_components/AboutUs";
import Help from "./components/navbar_components/Help";
import Contacts from "./components/navbar_components/Contacts";
import Home from "./components/Home";
import Game from "./components/content_components/Game";
import Content from "./components/Content";
import Distributionofgames from "./components/content_components/DistributionOfGames";
import { logoContext } from "./components/LogoContext";
import Navbar from "./components/Navbar";
import Login from "./components/navbar_components/Login";



function App() {
  const [value, setValue] = useState('white');
  const providerColor = useMemo(() => ({value, setValue}), [value, setValue])


  return (
    <div>
      <Router> 
      <logoContext.Provider value = {providerColor}>
       <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/registration" component={Registration} />
        <Route path="/login" component={Login} />
        <Route path="/about_us" component={AboutUs} />
        <Route path="/help" component={Help} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/Games/:gameName" component={Game}/>
        <Route path="/Games"component={Content}/>
      </Switch> 
      </logoContext.Provider>
      
    </Router>
    </div>
    
  );
}

export default App;
