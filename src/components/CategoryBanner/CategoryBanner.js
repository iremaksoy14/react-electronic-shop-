import React from "react";
import Tv from "../../assets/images/tv.jpg";
import Notebook from "../../assets/images/Notebook.jpg";
import Phone from "../../assets/images/Phone.jpg";
import Accesories from "../../assets/images/Kulaklık.jpg";
import Game from "../../assets/images/Oyun.jpg";
import Stuff from "../../assets/images/Coffee.jpg"
import {Link} from 'react-router-dom';
function CategoryBanner(props) {

return (
    <div className="banner">
      <div className="container">
        <div className="row">

          <div className="col-md-4">
            <div
              className="banner_item align-items-center"
              style={{
                backgroundImage: `url(${Tv})`
              }}
              data-aos="fade-right"    //animasyon 
            >
              <div className="banner_category">
              <Link to="/tv">Tv</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="banner_item align-items-center"
              style={{
                backgroundImage: `url(${Accesories})`
              }}
              data-aos="fade-up"
            >
              <div className="banner_category">
              <Link to="/accesorie">Accesories</Link>
              </div>
            </div>
          </div>
         
          
        
          <div className="col-md-4">
            <div
              className="banner_item align-items-center"
              style={{
                backgroundImage: `url(${Phone})`
              }}
              data-aos="fade-left"
            >
              <div className="banner_category">
               <Link to="/phone">Phone</Link>
              </div>
            </div>
          </div>
          <div style={{marginTop:30,marginEnd:30}}></div>
         
          <div className="col-md-4">
            <div
              className="banner_item align-items-center"
              style={{
                backgroundImage: `url(${Notebook})`
              }}
              data-aos="fade-right"
            >
              <div className="banner_category">
              <Link to="/notebook">Notebook</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="banner_item align-items-center"
              style={{
                backgroundImage: `url(${Game})`
              }}
              data-aos="fade-up"
            >
              <div className="banner_category">
              <Link to="/game">Game/Hoby</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="banner_item align-items-center"
              style={{
                backgroundImage: `url(${Stuff})`
              }}
              data-aos="fade-left"
            >
              <div className="banner_category">
              <Link to="/stuff">Kitchen Stuff</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryBanner;
