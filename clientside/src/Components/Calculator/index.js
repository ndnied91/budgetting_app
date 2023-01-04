import React from "react";
import { render } from "react-dom";
import { connect } from 'react-redux'

import ExpensesTable from '../ExpenseTV/ExpensesTable'
import DebtTable from '../DebtTV/DebtTable'

let total = 0



class Calculator extends React.Component {

  render() {

const renderExpensesResults=() =>{
  return (
    <div>
    Total Results:
    {this.props.totalExpenses}
    </div>
  )
}

const renderDebtResults=() =>{
  return (
    <div>
    Total Debt:
    {this.props.totalDebt}
    </div>
  )
}


    return (
      <div>


      <div>
        <h1> Debt table </h1>
        <DebtTable/>
        <div> {this.props.totalDebt > 0 ? renderDebtResults() : null } </div>
      </div>

      <div>
        <h1> Expenses table </h1>
        <ExpensesTable/>
        <div> {this.props.totalExpenses > 0 ? renderExpensesResults() : null } </div>
      </div>

      </div>
    );

  }

}



const mapStateToProps = (state) => {
  return { totalExpenses : state.expensesSum.total , totalDebt : state.totalDebt.totalDebt }
}

export default connect( mapStateToProps, null  )(Calculator)
