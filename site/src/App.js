import React, { Component } from 'react';
import './App.css';

const styles = {
  containerDiv: {
    display: 'flex',
    height: '100%',
    width: '100%',
    minHeight: 900,
    minWidth: 900
  }
}

class App extends Component {
  render() {
    return (
      <div className="ContainerDiv" style={styles.containerDiv}>
        <div className="menuDiv" style={{ background: 'white', height: 300, width: 400, marginLeft: '65%', marginTop: '2.5%' }}>
          <ul>
            <li>Tunes</li>
            <li>Blog</li>
            <li>OddCast</li>
            <li>Code</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
