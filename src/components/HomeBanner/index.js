//slider
import React from "react";
import {Redirect,Link} from 'react-router-dom'
import BackgroundImage1 from "../../assets/images/slider_1.jpg";
import BackgroundImage2 from "../../assets/images/slider_2.jpeg";
import BackgroundImage3 from "../../assets/images/airpods.jpg";
import { Carousel } from "react-bootstrap";
import BackgroundImage5 from "../../assets/images/asus2.jpg";

function HomeBanner(props) {
  return (
    <Carousel>
      <Carousel.Item>
        <div
          className="d-block w-70 main_slider"
          style={{
            backgroundImage: `url(${BackgroundImage3})`,
          }}
        >
          <div className="container fill_height">
            <div className="row align-items-center fill_height">
              <div className="col">
                <div className="main_slider_content" data-aos="fade-right">
                  <h6>Spring / Summer Collection 2020 Get up to 40% Off New Arrivals</h6>
                  <h1>Huge discount on new generation iphone phones</h1>
                  <div className="red_button shop_now_button">
                   <Link to="/home">shop now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="d-block w-70 main_slider"
          style={{
            backgroundImage: `url(${BackgroundImage2})`,
          }}
        >
          <div className="container fill_height">
            <div className="row align-items-center fill_height">
              <div className="col">
                <div className="main_slider_content" data-aos="fade-right">
                  <h6>Spring / Summer Collection 2020</h6>
                  <h1>Get up to 70% Off New Arrivals</h1>
                  <div className="red_button shop_now_button">
                  <Link to="/home">shop now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="d-block w-70 main_slider"
          style={{
            backgroundImage: `url(${BackgroundImage5})`,
          }}
        >
          <div className="container fill_height">
            <div className="row align-items-center fill_height">
              <div className="col">
                <div className="main_slider_content" data-aos="fade-right">
                  <h6>Fall/Winter Collection 2020</h6>
                  <h1>Get up to 60% Off New Arrivals</h1>
                  <div className="red_button shop_now_button">
                  <Redirect to='/home'/>shop now
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="d-block w-70 main_slider"
          style={{
            backgroundImage: `url(${BackgroundImage1})`,
          }}
        >
          <div className="container fill_height">
            <div className="row align-items-center fill_height">
              <div className="col">
                <div className="main_slider_content" data-aos="fade-right">
                  <h6>30% additional discount at the end of the season for notebooks</h6>
                  <h1></h1>
                  <div style={{marginTop:50}} className="red_button shop_now_button">
                   <Link to="/details">shop now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeBanner;
