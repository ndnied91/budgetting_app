import React from "react";
import { render } from "react-dom";

import { connect } from 'react-redux'

import ProductTable from '../SharedComponents/ProductTable'


import { updateTotalDebt , addToDebtArray , subToDebtArray ,  addTotalDebt , subTotalDebt } from '../../actions'

let id = 0

class Products extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.state.filterText = "";
    this.state.products = [  { id: 1, name: '', price: '' } ];

  }

  componentDidMount(){
    if(this.props.debtArray.length > 1){
      this.setState({products: this.props.debtArray});
      this.props.updateTotalDebt(this.props.debtArray)
    }
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
    this.props.updateTotalDebt(this.state.products)

    let product = { id: id, name: "", price: "" }
    this.state.products.push(product);
    this.props.addToDebtArray(this.state.products) //adds whole array
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

    const renderExpensesResults=()=>{
      let total = 0
      this.props.debtArray.forEach((item, i) => { if(item.price.length > 0){ total = total + parseInt(item.price) } });
      return `Total Debt is $${total}`
    }

    const checkforUpdate = (event)=>{
      this.props.addToDebtArray(this.state.products) //adds whole array
      this.props.updateTotalDebt(this.state.products)
    }


    return (
      <div>
      <div onKeyDown={handleClick} onBlur={(e)=> checkforUpdate(e)}>
        <ProductTable onProductTableUpdate={this.handleProductTable.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} products={this.state.products} filterText={this.state.filterText} values={["Name","Amount"]}/>
      </div>
      <div> {renderExpensesResults()} </div>
      </div>
    );

  }

}


const mapStateToProps = (state) => {
  return { totalDebt : state.totalDebt.totalDebt , debtArray: state.debtArray.debt }
}

export default connect( mapStateToProps, {  updateTotalDebt, addToDebtArray  , subToDebtArray  , addTotalDebt , subTotalDebt }  )(Products)
