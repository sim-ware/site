import React, { Component } from "react";
import './SimContainer.css';
import Footer from '../../components/Footer';

export default class SimContainer extends Component {
  render() {
    const screenHeight = (window.innerHeight-137)
    return (
      <div>
        <div className="Sim" style={{ height: screenHeight }} >
          <div>
            <h2>Big Tunes</h2>
            <h2>Recent</h2>
            <h2>Archive</h2>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
