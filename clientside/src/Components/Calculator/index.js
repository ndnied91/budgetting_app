import React from "react";
import { render } from "react-dom";
import { connect } from 'react-redux'

import ExpensesTable from '../ExpenseTV'
import DebtTable from '../DebtTV'


import WeekTV from '../WeekTV/WeekTable'

import { updateTotalExpenses  } from '../../actions'

let total = 0



class Calculator extends React.Component {

  render() {


const calculate=() =>{

  let res = parseInt(this.props.totalIncome) - parseInt(this.props.saving) - parseInt(this.props.totalDebt) - parseInt(this.props.expensesSum)
  return (


    <div>
        <h2> Calculations </h2>
        <p>Total Income: ${parseInt(this.props.totalIncome)} </p>
        <p> Total Spendings: {parseInt(this.props.totalDebt) + parseInt(this.props.expensesSum)} </p>
        <p>You want to save : ${parseInt(this.props.saving)} </p>
        <p> Remaining Money: {res} </p>
        <p> Weekly Budget : {res/5}  </p>
    </div>
  )
}

      const renderWeekTable = () =>{
        return <div> { Array.from({ length: 1 }, (_, k) => ( <div key = {k}>  <WeekTV/> </div> )) } </div>
      }

    return (
      <div>

      <div>
        <h1> Debt table </h1>
        <DebtTable/>
      </div>

      <div>
        <h1> Expenses table </h1>
        <ExpensesTable/>
      </div>


      <div> </div>


        <br/>
        <br/>
        <br/>


        <h2> Weekly View </h2>
          <WeekTV/>
          {calculate()}

      </div>
    );

  }

}



const mapStateToProps = (state) => {
  return {
           totalDebt : state.totalDebt.total ,
           totalIncome : state.userValues.totalIncome,
           saving: state.userValues.saving,
           expensesSum :state.expensesSum.total
           }
}

export default connect( mapStateToProps, {updateTotalExpenses}  )(Calculator)
