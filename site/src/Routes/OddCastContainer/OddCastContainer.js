import React, { Component } from "react";
import './OddCastContainer.css';
import Footer from '../../components/Footer';

export default class OddCastContainer extends Component {
  render() {
    const screenHeight = (window.innerHeight-137)
    return (
      <div>
        <div className="OddCast" style={{ height: screenHeight }}>
          <div>
            <h2>OddCast</h2>
            <h2>Recent</h2>
            <h2>Archive</h2>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
