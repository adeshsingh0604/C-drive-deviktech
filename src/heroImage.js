import React, { Component } from 'react';
import ReactThreeFbxViewer from 'react-three-fbx-viewer';
 
let fbxUrl = require('../src/images/buildings.fbx');
 
export default class App extends Component {
  onLoad(e) {
    console.log(e);
  }
 
  onError(e) {
    console.log(e);
  }
  render () {
    let cameraPosition = {
      x:2,
      y:0,
      z:10
    }
    let controlsPosition={
      x:0,
      y:0,
      z:0
    }

    
    return (
      <div>
        <ReactThreeFbxViewer cameraPosition={cameraPosition}
        controlsPosition ={controlsPosition}
         backgroundColor={0xf2f2f2} 
         angle={45} 
         near={1}
         far={2000}
         url={fbxUrl} 
         onLoading={this.onLoad} 
         onError={this.onError}/>
      </div>
    );
  }
}

