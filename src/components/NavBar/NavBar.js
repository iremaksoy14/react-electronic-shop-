import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

const Navbar = ({cartLength}) => {

    return (
    
      <div className="nav-item">
          <NavLink className="nav-link" to="/cart"><i className="fa fa-shopping-cart mr-2"
                                                        aria-hidden="true" />Cart {cartLength ? `(${cartLength})`: ''}</NavLink>
      </div>
 
    );
};


const mapStateToProps = (state) => {
  return {
      cartLength: state.shop.products.length
  }
};

export default connect(mapStateToProps, null)(Navbar);


