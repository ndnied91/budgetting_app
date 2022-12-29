import React from "react";
import { render } from "react-dom";
import { connect } from 'react-redux'

let total = 0

class Calculator extends React.Component {

  render() {


    return (
      <div>


        Total Monthly Expenses:
          {this.props.totalExpenses > 0 ? this.props.totalExpenses : null }
      </div>
    );

  }

}



const mapStateToProps = (state) => {
  return { totalExpenses : state.expensesSum.total  }
}

export default connect( mapStateToProps, null  )(Calculator)
