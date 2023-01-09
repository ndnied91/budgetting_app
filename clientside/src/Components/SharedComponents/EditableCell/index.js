

import React from "react";
import { render } from "react-dom";


class EditableCell extends React.Component {

  render() {

      const renderPlaceholder = (type)=>{
        switch (type) {
            case "name":
              return "enter name"
            case "price":
              return "enter cost"
            case "date":
              return "enter date"
            break;
          default:
        }
      }

    return (
      <td>
        <input type='text'

          name={this.props.cellData.type}
          placeholder={renderPlaceholder(this.props.cellData.type) }
          id={this.props.cellData.id}
          value={this.props.cellData.value}
          onChange={this.props.onProductTableUpdate}/>
      </td>
    );

  }

}

export default EditableCell
