//ProductList

/*
 Resources
  http://localhost:3000/phone
  http://localhost:3000/tv
  http://localhost:3000/game
  http://localhost:3000/notebooks
  http://localhost:3000/stuff
  http://localhost:3000/accesorie
  http://localhost:3000/best
* */
import React,{Component} from 'react';
import axios from 'axios';
import BodyProduct from '../Body/BodyProduct';
import {paginationPipe} from "../../pipes/paginationFilter";
import LayoutMode from '../../components/LayoutMode/LayoutMode'
import Body from '../../screens/Body/index'; 
import BrandFilter from '../Phones/FilterBar/BrandFilter/BrandsFilter';
import OrderFilter from '../Phones/FilterBar/OrderFilter/OrderFilter'
import Pagination from '../../components/Pagination/Pagination';
import Navbar from '../../components/NavBar/NavBar'
const brands = ["samsung","vestel","lg"];
export default class Accesorie extends Component {
  
  state = {
    accessorie: []
  }

  
  componentDidMount() {
    axios.get(`http://localhost:3000/accesorie`)
      .then(res => {
        const accessorie = res.data;
     
        this.setState({ accessorie });
      })
  }
  changeLayout = (n) => {
    this.setState({gridValue: n});

    let realGridValue;

    if(n === 4) {
        realGridValue = 3
    } else {
        realGridValue = 4;
    }

  this.setState({
      colValue: `col-lg-${realGridValue}`
  });
};

  render() {
    return (
      <div className="row" style={{flexDirection:'row'}} >
        <div className="col-lg-3">
                <div className="column">
                    <div className="col-12">
                        <BrandFilter/>
                    </div>
                    <div className="col-12">
                        <OrderFilter/>
                    </div>
                </div>
            </div>
          
          
         <div className="row mb-3">:
                    <div className="col-12 d-none d-lg-block d-xl-block">
                      <Navbar/>
                        <div className="card "  style={{marginLeft:800}} >
                            <div className="card-header d-flex justify-content-end">
                                <span className="mr-3">Change Layout: </span>
                                <LayoutMode len={2} isActive={this.state.gridValue === 3} click={this.changeLayout} />
                                <LayoutMode len={3} isActive={this.state.gridValue === 4}  click={this.changeLayout} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {paginationPipe(this.state.accessorie).map(product =>{
                        let classes = `${this.state.colValue} col-md-4 mb-2`;
                        return (<div className={classes}>
                            <BodyProduct key={product.id} product={product} />
                        </div>)
                    })}
                    </div>
                   
                   
                </div>
    
    )
  }
}

