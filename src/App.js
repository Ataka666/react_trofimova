import React from "react";
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import {Profile} from './Profile.jsx';
import {Map} from './Map.jsx';
import {Login} from './Login.jsx';

const Switch={
  map: <Map/>,
  profile: <Profile/>,
  login:<Login/>
}

class App extends React.Component{
  state = {page: "Profile"};

  navigateTo = (currentPage) =>{
    this.setState({page:currentPage})
  }
  render(){
    return(
      <div>
        <nav>
        <jpeg>Loft Taxi</jpeg>
        <ul>
          <li>
            <button onClick={()=>{this.navigateTo("Map")}}>Карта</button>
          </li>
          <li>
            <button onClick={()=>{this.navigateTo("Profile")}}>Профиль</button>
          </li>
          <li>
            <button onClick={()=>{this.navigateTo("Login")}}>Выйти</button>
          </li>
        </ul>
        </nav>
        <div><section>{Switch[this.state.page]}</section></div>
      </div>
    )}
}
export default App;
