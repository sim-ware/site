import React, { Component } from "react";
import './CodeContainer.css';
import Footer from '../../components/Footer';

export default class CodeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifData: this.fetchGifs(),
      isLoading: true,
      error: null,
      backgroundIndex: 0
    };
  }

  componentDidMount() {
    this.fetchGifs();
    this.intervalID = setInterval(
      () => this.setState({ backgroundIndex: this.state.backgroundIndex + 1}),
      2000
    );
  }

  async fetchGifs() {
    fetch("http://api.giphy.com/v1/gifs/search?q=pikachu&api_key=02KjSiPr9Ur2Hizm8HsEdgB0NXPJiNBh&limit=25")
    .then(response => response.json())
    .then(data =>
      this.setState({
        gifData: data,
        isLoading: false,
      })
    )
    .catch(error => this.setState({ error, isLoading: false }));
  }

  formatDataIntoGifArray() {
    const gifArray = [];
    if (this.state.gifData.data) {
      const keys = Object.keys(this.state.gifData.data);
      keys.forEach((key) => {
        gifArray.push(this.state.gifData.data[key]['images']['original']['url']);
      });
    }
    return gifArray;
  }

  render() {
    const screenHeight = (window.innerHeight-137)
    const res = this.formatDataIntoGifArray();
    const img = res[this.state.backgroundIndex];
    console.log(img);
    return (
      <div>
        <div className="Code" style={{height:screenHeight}}>
          <div>
            <h2>Code</h2>
            <div style={{ width:500, height:500, backgroundColor: 'white'}}>
              <h2 style={{color: 'black'}}>gifLooper</h2>
              <img alt="fail" src={img}></img>
            </div>
            <h2>phas3r</h2>
            <h2>BattleShip</h2>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
