import React from "react";
import { render } from "react-dom";

import ProductRow from '../ProductRow'


class ProductTable extends React.Component {

  render() {
    let onProductTableUpdate = this.props.onProductTableUpdate;
    let rowDel = this.props.onRowDel;
    let filterText = this.props.filterText;
    let product = this.props.products.map(function(product) {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }

      return (<ProductRow onProductTableUpdate={onProductTableUpdate} product={product} onDelEvent={rowDel.bind(this)} key={product.id}/>)
    });
    return (
      <div>



        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Amount</th>
            </tr>
          </thead>

          <tbody>
            {product}
          </tbody>

        </table>
        <button type="button" onClick={this.props.onRowAdd} className="btn btn-success pull-right">Add</button>
      </div>
    );

  }

}

export default ProductTable
