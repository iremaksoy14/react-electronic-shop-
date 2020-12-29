//ProductList

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
export default class Game extends Component {
  
  state = {
    notebook: [],
    colValue : 'col-lg-4',
        perPage: 12,
        currentPage: 1,
        pagesToShow: 3,
        gridValue: 3

  }

  
  componentDidMount() {
    axios.get(` http://localhost:3000/notebooks`)
      .then(res => {
        const notebook = res.data;
     
        this.setState({ notebook });
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
onPrev = () => {
  const updatedState = {...this.state};
  updatedState.currentPage = this.state.currentPage - 1;
  this.setState(updatedState);
};


onNext = () => {
  this.setState({
      ...this.state,
      currentPage: this.state.currentPage + 1
  });
};

goPage = (n) => {
  this.setState({
      ...this.state,
      currentPage: n
  });
};


  render() {
    return (
      <div className="row">
       
           <div className="col-lg-9"></div>
          
           <div className="row mb-3">
                    <div className="col-12 d-none d-lg-block d-xl-block">
                    <Navbar/>
                        <div className="card "  style={{marginLeft:800}} >
                            <div className="card-header d-flex justify-content-end">
                                <span className="mr-3">Change Layout: </span>
                                <LayoutMode len={3} isActive={this.state.gridValue === 3} click={this.changeLayout} />
                                <LayoutMode len={4} isActive={this.state.gridValue === 4}  click={this.changeLayout} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {paginationPipe(this.state.notebook).map(product =>{
                        let classes = `${this.state.colValue} col-md-4 mb-2`;
                        return (<div className={classes}>
                            <BodyProduct key={product.id} product={product} />
                        </div>)
                    })}
                    </div>
                    <div className="d-flex justify-content-end">
                    <Pagination
                        totalItemsCount={this.state.notebook.length}
                        currentPage={this.state.currentPage}
                        perPage={this.state.perPage}
                        pagesToShow={this.state.pagesToShow}
                        onGoPage={this.goPage}
                        onPrevPage={this.onPrev}
                        onNextPage={this.onNext}
                    />
                </div>
                   
                   
                </div>
    
    )
  }
}

