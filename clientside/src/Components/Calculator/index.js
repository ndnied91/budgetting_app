import React from "react";
import { render } from "react-dom";
import { connect } from 'react-redux'

let total = 0

class Calculator extends React.Component {

  render() {

    const renderValues=()=> {
      // console.log(this.props.expenses )

      // if(this.props.expenses.length > 0){
      //   this.props.expenses.forEach((item, i) => {
      //     console.log(item.price)
      //   });
      // }


    }



    return (
      <div>
          {renderValues()}
          Calculator Function
          {total}
      </div>
    );

  }

}



const mapStateToProps = (state) => {
  return { expenses : state.expenses  }
}

export default connect( mapStateToProps, null  )(Calculator)
