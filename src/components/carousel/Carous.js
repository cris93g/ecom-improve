import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carous.css";

export default class Carous extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <div
              className="slidingImg"
              // src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              // alt="First slide"
            />
            <Carousel.Caption className="firstCapt">
              <h2>Big-screen 4K TVs as low as $249.99.</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="slidingImg2"
              // src="holder.js/800x400?text=Second slide&bg=282c34"
              // alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          {/* <Carousel.Item>
            <div
              className="d-block w-100"
              // src="holder.js/800x400?text=Third slide&bg=20232a"
              // alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item> */}
        </Carousel>
      </div>
    );
  }
}
