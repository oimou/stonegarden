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
    let imageStyle = this.getImageStyle();
    let textStyle = this.getTextStyle();

    return (
      <Surface width={surfaceWidth} height={surfaceHeight} left={0} top={0}>
        <Image style={imageStyle} src='img/sand.jpg' />
        <Text style={textStyle}>
          Here is some text below an image.
        </Text>
      </Surface>
    );
  }

  getImageHeight() {
    return Math.round(window.innerHeight / 2);
  }

  getImageStyle() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: this.getImageHeight()
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
