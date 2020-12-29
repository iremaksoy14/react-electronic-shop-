
import React, { Component } from "react";
import { login } from "../../ServerRequest";
import API from "../../axios/API";
import Auth from "../../modules/Auth";
import HomeBanner from "../../components/HomeBanner";
import CategoryBanner from "../../components/CategoryBanner/CategoryBanner";
import NewArrivals from "../../components/Products/NewArrivals";
import BestSeller from "../../components/Products/BestSeller";
import ProductDetail from '../../components/ProductDetail/ProductDetail'
import Advertisement from "../../components/Advertisement";


import LoginRegister from "../../components/LoginRegisterModal";
import BodyContainer from '../../screens/Body/index'
import Navbar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/index';
import TopNavbar from '../../components/TopNavBar';
import { connect } from "react-redux";
import {getAllProducts,applyFilters} from "../../redux/actions/productAction";
import { postCart } from "../../redux/actions/cartAction";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      modalShow: false,
      login: true
    };
    this.addToBag = this.addToBag.bind(this);
  }
  

  showHideModal = () => {
    this.setState({ modalShow: false });
  };

  loginClicked = () => {
    this.setState({ modalShow: true, login: true });
  };
  registerClicked = () => {
    this.setState({ modalShow: true, login: false });
  };

  addToBag = params => {
    if (
      Auth.getUserDetails() !== undefined &&
      Auth.getUserDetails() !== null &&
      Auth.getToken() !== undefined
    ) {
      let cart = this.props.postCart(params);
      cart.then(res => {
        console.log(res);
      });
    } else {
      this.setState({ modalShow: true });
    }
  };

  render() {
    const { products, departments } = this.props;
    return (
      <div>
       <TopNavbar/>
      
        <Advertisement />
        <br></br>
        <br></br>
        <HomeBanner />
        <br></br>
        <br></br>
        
        <CategoryBanner />
        <br></br>
        <br></br>
        <Navbar/>
      
     
      <BestSeller
            products={products}
            departments={departments}
            addToBag={this.addToBag}
          />
       <BodyContainer/>
       
     
         
      
        
       
        <Footer/>
      </div>
    );
  }
}

const mapStoreToProps = state => ({
  products: state.product.products,
  departments: state.department.departments,
  loading: state.product.loading
});
const mapDispatchToProps = dispatch => ({
  getAllProducts: () => dispatch(getAllProducts()),
  applyFilters: filter_string => dispatch(applyFilters(filter_string)),
  postCart: productId => dispatch(postCart(productId))
});

export default connect(mapStoreToProps, mapDispatchToProps)(Home);
