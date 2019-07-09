import React, { Component } from "react";
import './NavBar.css';


const NavBarItem = (props) => (
  <span className="NavBarText">
    <a href={`${props.href}`}>{props.label}</a>
  </span>
);

export default class NavBar extends Component {
  render() {
    return (
      <div className="NavBarDiv" style={{ color: 'red' }}>
        <nav>
          <NavBarItem label="Home" href="/"/>
          <NavBarItem label="OddCast" href="/oddCast/"/>
          <NavBarItem label="CloudsInMyCoffee" href="/cloudsInMyCoffee/"/>
          <NavBarItem label="Sim" href="/sim/"/>
          <NavBarItem label="Code" href="/code/"/>
        </nav>
      </div>
    );
  }
}
