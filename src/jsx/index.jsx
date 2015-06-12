/*eslint-disable */
"use strict";

import React from "react";
import ReactCanvas from "react-canvas";

let Surface = ReactCanvas.Surface;
let Image = ReactCanvas.Image;
let Text = ReactCanvas.Text;

class MyComponent extends React.Component {

  render() {
    let surfaceWidth = window.innerWidth;
    let surfaceHeight = window.innerHeight;
    let textStyle = this.getTextStyle();

    return (
      <Surface width={surfaceWidth} height={surfaceHeight} left={0} top={0}>
        <Image style={this.getImageStyle()} src='img/sand.jpg' />
        <Image style={this.getImageStyle()} src='img/sand.jpg' />
        <Image style={this.getImageStyle()} src='img/sand.jpg' />
        <Image style={this.getImageStyle()} src='img/sand.jpg' />

        <Text style={textStyle}>
          枯山水
        </Text>
      </Surface>
    );
  }

  getImageHeight() {
    return Math.round(window.innerHeight / 2);
  }

  getImageStyle() {
    let width = window.innerWidth / 4;
    let height = window.innerHeight / 6;

    return {
      top: height * ~~(Math.random() * 4),
      left: width * ~~(Math.random() * 6),
      width: width,
      height: height
    };
  }

  getTextStyle() {
    return {
      top: this.getImageHeight() + 10,
      left: 0,
      width: window.innerWidth,
      height: 20,
      lineHeight: 20,
      fontSize: 12
    };
  }

};

React.render(<MyComponent />, document.getElementById("stage"));
