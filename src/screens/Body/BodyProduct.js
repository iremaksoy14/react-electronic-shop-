import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {formatMoney} from "../../pipes/priceFormatter";
import {cumulativeOffSet} from "../Phones/cumulativeOffset";

import './Body.scss';
import SlideDots from "../../components/SlideDots/SlideDots";
import {addProductToCart} from "../../redux/actions/PhoneAction";


const BodyProduct = (props) => {

    const {title,price,images,description,id,} = props.product;

    const imageRef = React.createRef();
    const [img, setImg] = useState(images[0]);
    const [aItem, setAItem] = useState(0);


    const handleImageChange = (e) => {

        let  clientX;

        if(e.type === 'touchmove') {
            clientX = e.touches[0].clientX;
        } else {
            clientX = e.clientX;
        }

        const currentX = clientX - cumulativeOffSet(imageRef.current).left;

        // console.dir(imageRef.current);

        const part = imageRef.current.clientWidth / images.length;
       // console.log(Math.ceil(currentX / part) - 1);

        let imgIndex = Math.ceil(currentX / part) - 1;
        if (imgIndex < 0) {
            imgIndex = 0;
        }

        if (imgIndex >= images.length) {
            imgIndex = images.length - 1;
        }
        setAItem(imgIndex);
        setImg(images[imgIndex]);
    };

    const handleMouseOut = (e) => {
        setImg(images[0]);
        setAItem(0);
    };

    const changeImage = (i) => {
        setImg(images[i]);
        setAItem(i);
    }

    return (
        <div className="card h-100 product" style={{marginLeft:80}}> 
            <Link to={`/products/${id}`} className="product__link"><img
                onMouseMove={handleImageChange}
                onMouseOut={handleMouseOut}
                onTouchMove={handleImageChange}
                onTouchEnd={handleMouseOut}
                className="card-img-top product__img" src={img} alt={title} ref={imageRef}/>
                <SlideDots len={images.length} activeItem={aItem} changeItem={changeImage}/>
            </Link>
            <div className="card-body product__text">
                <h4 className="card-title product__title">
                    <Link to={`/products/${id}`}>{title}</Link>
                </h4>
                <p className="card-text product__description">{description}</p>
                <p className="product__price">${formatMoney(price)}</p>
                <button
                    onClick={() => {
                        props.add(title,price,images,description,id)
                    }}
                    className="btn btn-info product__add-to-cart">Add to cart
                </button>
            </div>
        </div>
    );
};




const mapDispatchToProps = (dispatch) => {
    return {
      add: (title,price,images,description,id) => dispatch(addProductToCart(title,price,images,description,id))
    }
  }
  
  export default connect(undefined,mapDispatchToProps)(BodyProduct)
  