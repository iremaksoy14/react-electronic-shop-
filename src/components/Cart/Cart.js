import React, { Component } from 'react';

import FlatList from 'flatlist-react';

import {Link} from 'react-router-dom'
import { connect } from 'react-redux';

import { removeProductToCart } from '../../redux/actions/PhoneAction';




class Cart extends Component {


   constructor(props) {
    super(props);
    
  }



  hesapla=()=>
  {
   var cevap=this.props.products.reduce((total,item)=>{
    
          return total +=item.price}
           ,0)
    return cevap;
  
  
  }


// title,price,images,description,id
  renderPerson = (person) => {
    const{title,price,images,description,key}=person;
    return (
      <div>
      <div className="card h-50 product" style={{marginLeft:20,marginBottom:30}}> 
            
            <div style={{flexDirection:'row'}}   className="card-body product__text">
                              
            <div className="product_image">
          <img src={images[0]} alt="" className="img-fluid" />
           </div>
           <div className="favorite favorite_left">
          <i className="far fa-heart"></i>
        </div>
                 

        <div className="product_info">
          <h6 className="product_name">
            <div>{title}</div>
          </h6>
          <div className="product_price">
            ₹ {price}
            <span> ₹ {(parseFloat(price) + 30).toFixed(2)}</span>
          </div>
        </div>
            </div>
            <button  onClick={()=>this.props.delete(key)} style={{width:100,height:30,borderRadius:10,marginLeft:200,backgroundColor:"#ffffff"}}>SİL</button>
            
        </div>
       
       
        </div>
        
    );
  }
   





  render() {
   

    return (
      
        <div>
          <div style={{width:400,height:100,backgroundColor:"#ffdab9",marginBottom:30}}> <p  style={{fontSize:15,color:"#000000",textAlign:'center',paddingTop:40}}>Total price:{this.hesapla()}</p></div>

        <FlatList
          list={this.props.products}
          renderItem={this.renderPerson}
        
         
        />
          
         
        
        <div style={{borderRadius:5,marginLeft:300,float:'left',textDecoration:"none",fontWeight:'bold',borderTop:"1px solid #999",
        borderLeft:"1px solid #999",borderRight:"1px solid #333",borderBottom:"1px solid #333",width:"auto"
      
      }}><Link to="creditcard"><span style={{color:"#000000"}}>SEPETİ ONAYLA</span></Link></div> 
         </div>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
     delete: (key) => dispatch(removeProductToCart(key)),
   
    
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
