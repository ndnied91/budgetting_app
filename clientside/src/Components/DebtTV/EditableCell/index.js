

import React from "react";
import { render } from "react-dom";


class EditableCell extends React.Component {

  render() {
    return (
      <td>
        <input type='text'

          name={this.props.cellData.type}
          placeholder={this.props.cellData.type === "name" ?  "enter name" : "enter cost"  }
          id={this.props.cellData.id}
          value={this.props.cellData.value}
          onChange={this.props.onProductTableUpdate}/>
      </td>
    );

  }

}

export default EditableCell
