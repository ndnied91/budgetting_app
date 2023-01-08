import React from "react";
import { render } from "react-dom";

import { connect } from 'react-redux'

import ProductTable from '../ProductTable'

import ProductRow from '../ProductRow'



import { addWeeklySpending , subWeeklySpending } from '../../../actions'

let id = 0

class Products extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
    this.state.filterText = "";
    this.state.products = [  { id: "" , date: "", name: "" , price: ""} ];

  }

  componentDidMount(){
    if(this.props.weeklyBudget.length > 1){
      this.setState({products: this.props.weeklyBudget});
    }

  }


  handleUserInput(filterText) {
    this.setState({filterText: filterText});
  };

  handleRowDel(product) {
    let index = this.state.products.indexOf(product);
    this.state.products.splice(index, 1);
    this.setState(this.state.products);

  };

  handleAddEvent(evt) {
    let id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);

    let product = { id: id , date: "", name: "" , price: ""}
    this.state.products.push(product);
    this.setState(this.state.products);


  }

  handleProductTable(evt) {
    let item = { id: evt.target.id, name: evt.target.name, value: evt.target.value };
    let products = this.state.products.slice();
    let newProducts = products.map(function(product) {

    for (var key in product) {
      if (key == item.name && product.id == item.id) {
        product[key] = item.value;

      }
    }
    return product;
  });
    this.setState({products:newProducts});
  };
  render() {
    const handleClick = (evt)=> { if (evt.which === 13) { this.handleAddEvent(evt) } }

    return (
      <div>
      <div onKeyDown={handleClick}>
        <ProductTable onProductTableUpdate={this.handleProductTable.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} products={this.state.products} filterText={this.state.filterText}/>
      </div>
      </div>
    );

  }

}


const mapStateToProps = (state) => {
  return { weeklyBudget : state.weeklyBudget.weeklyBudget }
}

export default connect( mapStateToProps, { addWeeklySpending  , subWeeklySpending  }  )(Products)
