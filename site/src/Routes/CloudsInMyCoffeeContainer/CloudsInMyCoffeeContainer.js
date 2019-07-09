import React, { Component } from "react";
import './CloudsInMyCoffeeContainer.css';
import Footer from '../../components/Footer';

const dummyText = "Prism vinyl man braid man bun brunch poutine knausgaard lomo small batch. Pug kombucha PBR&B, hell of irony mustache tattooed freegan XOXO. Cronut food truck meditation four dollar toast synth. Cloud bread quinoa synth chartreuse four dollar toast trust fund actually portland la croix banjo pop-up paleo kitsch chambray fam. Cornhole vice fashion axe, hella pug edison bulb ramps church-key listicle blue bottle lomo tilde single-origin coffee mumblecore flannel. Shabby chic VHS"

export default class CloudsInMyCoffeeContainer extends Component {
  render() {
    const screenHeight = (window.innerHeight-137)
    return (
      <div>
        <div className="CloudsInMyCoffee" style={{height:screenHeight}}>
          <div>
            <h2 style={{ textAlign: 'center' }}>CloudsInMyCoffee</h2>
            <div className="HeaderDiv" style={{ borderRadius: 5, marginLeft: '4%', float: 'left', width: '30%', height: (screenHeight-100)}}>
              <h2>Recent</h2>
              <p className="ContentDiv">{dummyText}</p>
            </div>
            <div className="HeaderDiv" style={{ borderRadius: 5, marginRight: '4%', float: 'right', width: '30%', height: (screenHeight-100)}}>
              <h2>Archive</h2>
                <ul style={{ textAlign: 'justify'}}>
                  <li>Most Recent Old Post</li>
                  <li>Middling Old Post</li>
                  <li>Oldest Old Post</li>
                  <li>Generate Card Components, and have them for loop render based on amount in DB</li>
                </ul>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
