/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import { combineReducers } from "redux";
import login from "./LoginReducer";
import register from "./RegisterReducer";
import department from "./DepartmentReducer";
import product from "./productReducer";
import variant from "./variantsReducer";
import cart from "./cartReducer";
import brandFilterReducer from './brand.filter.reducer';
import shop from './shop.reducer';
import paginationReducer from './pagination.reducer';
import orderByPriceReducer from './orderByPrice.filter.reducer';
// import checkout from './checkoutReducer'
// import filter from './filterReducer'

export default combineReducers({
  department,
  login,
  register,
  product,
  variant,
  cart,
  shop,
  brandFilter: brandFilterReducer,
  orderBy: orderByPriceReducer,
  pagination: paginationReducer
});
