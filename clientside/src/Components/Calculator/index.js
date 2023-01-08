import React from "react";
import { render } from "react-dom";
import { connect } from 'react-redux'

import ExpensesTable from '../ExpenseTV/ExpensesTable'
import DebtTable from '../DebtTV/DebtTable'


import WeekTV from '../WeekTV/WeekTable'

let total = 0



class Calculator extends React.Component {

  render() {

const renderExpensesResults=() =>{
  return (
    <div>
    Total Expenses:
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


const calculate=() =>{

  let res = parseInt(this.props.totalIncome) - parseInt(this.props.saving) - parseInt(this.props.totalDebt) - parseInt(this.props.totalExpenses)
  return (


    <div>
        Remaining Money: {res}
        <br/>
        Weekly Budget : {res/5}


    </div>
  )
}


const renderWeekTable = () =>{
  return(
  <div>
      {
        Array.from({ length: 1 }, (_, k) => (
       <div key = {k}>  <WeekTV/> </div>
        ))
      }
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


      <div> </div>
        {calculate()}

        <br/>
        <br/>
        <br/>


        <h2> Weekly View </h2>
        {renderWeekTable()}


      </div>
    );

  }

}



const mapStateToProps = (state) => {
  return { totalExpenses : state.expensesSum.total ,
           totalDebt : state.totalDebt.totalDebt ,
           totalIncome : state.userValues.totalIncome,
           saving: state.userValues.saving
           }
}

export default connect( mapStateToProps, null  )(Calculator)
