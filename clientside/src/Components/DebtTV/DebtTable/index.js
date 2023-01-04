import React from "react";
import { render } from "react-dom";

import { connect } from 'react-redux'

import ProductTable from '../ProductTable'

import ProductRow from '../ProductRow'



import { addToDebtArray , subToDebtArray ,  addTotalDebt , subTotalDebt } from '../../../actions'

let id = 0

class Products extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
    this.state.filterText = "";
    this.state.products = [  { id: 1, name: '', price: '' } ];

  }
  handleUserInput(filterText) {
    this.setState({filterText: filterText});
  };

  handleRowDel(product) {
    let index = this.state.products.indexOf(product);
    this.state.products.splice(index, 1);
    this.setState(this.state.products);

    this.props.subToDebtArray(product) //removed deleted debt object

    this.props.subTotalDebt(product.price)



  };

  handleAddEvent(evt) {
    let id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
    let product = { id: id, name: "", price: "" }
    this.state.products.push(product);

    this.setState(this.state.products);

    //gets integer and adds to total debt

    this.props.addTotalDebt(parseInt(this.state.products[this.state.products.length-2].price ))


    this.props.addToDebtArray(this.state.products[this.state.products.length-2] ) //adds new object to debt array

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
  return {}
}

export default connect( mapStateToProps, {  addToDebtArray  , subToDebtArray  , addTotalDebt , subTotalDebt }  )(Products)
