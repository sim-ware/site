import React, { Component } from "react";
import './HomeContainer.css';
import { FaGithubSquare, FaLinkedin, FaCopy } from 'react-icons/fa';
import Footer from '../../components/Footer';

export default class HomeContainer extends Component {
  render() {
    const screenHeight = (window.innerHeight-137)
    return (
      <div>
        <div className="Home" style={{height: screenHeight}}>
          <div className="Content">
            <h2>Home</h2>
            <p>
              <FaGithubSquare />
                <a href="https://github.com/sim-ware"
                   rel="noopener noreferrer"
                   target="_blank">
                  GitHub
                </a>
            </p>
            <p>
              <FaLinkedin />
                <a href="https://www.linkedin.com/in/samir-gossain-b87130a2/"
                   rel="noopener noreferrer"
                   target="_blank">
                  LinkedIn
                </a>
            </p>
            <p>
              <FaCopy />
                <a href="https://www.google.com"
                   rel="noopener noreferrer"
                   target="_blank">
                  CV
                </a>
            </p>
            <p>
              Here's where I have a collection of my code projects,
              and a little gallery/data hub for the rest of whatever comes out of my mind
            </p>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
