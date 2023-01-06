import React from "react";
import { render } from "react-dom";

import { connect } from 'react-redux'

import ProductTable from '../ProductTable'

import ProductRow from '../ProductRow'




import { updateExpenses , addTotalExpenses  , removeExpenses , subTotalSumExpenses } from '../../../actions'

let id = 0

class Products extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
    this.state.filterText = "";
    this.state.products = [  { id: '', name: '', price: '' }  ];

  }

  componentDidMount(){

    if(this.props.expensesArray.length > 1){
      this.state.products = this.props.expensesArray //setting state based on the prop of expense Array
      this.props.expensesArray.forEach((item, i) => {
        this.props.addTotalExpenses(item.price > 0 ?parseInt(item.price) : null) //checks if there isnt empty input
      });
    }

  }

  handleUserInput(filterText) {
    this.setState({filterText: filterText});
  };

  handleRowDel(product) {
    let index = this.state.products.indexOf(product);
    this.state.products.splice(index, 1);
    this.setState(this.state.products);
    this.props.removeExpenses(product)
    this.props.subTotalSumExpenses(product.price)
  };

  handleAddEvent(evt) {
    let id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);

    if(parseInt(this.state.products[this.state.products.length-1].price )){
        this.props.addTotalExpenses(parseInt(this.state.products[this.state.products.length-1].price ))
     }
    let product = { id: id, name: "", price: "" }
    this.state.products.push(product);
    this.props.updateExpenses(this.state.products) //adds whole array
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

    // console.log(this.props.expensesSum)

    const handleClick = (evt)=> { if (evt.which === 13) { this.handleAddEvent(evt) } }

    return (
      <div onKeyDown={handleClick}>
        <ProductTable onProductTableUpdate={this.handleProductTable.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} products={this.state.products} filterText={this.state.filterText}/>
      </div>
    );

  }

}


const mapStateToProps = (state) => {
  return { expensesSum : state.expensesSum.total , expensesArray: state.expensesArray.expenses }
}

export default connect( mapStateToProps, { updateExpenses, addTotalExpenses  , removeExpenses  , subTotalSumExpenses}  )(Products)
