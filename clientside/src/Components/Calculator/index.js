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

    const renderDebtResults=() =>{
      return (
        <div>
        Total Debt:
        {this.props.debt}
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
  return {
           totalDebt : state.totalDebt.totalDebt ,
           totalIncome : state.userValues.totalIncome,
           saving: state.userValues.saving,
           totalExpenses :state.expensesSum.total
           }
}

export default connect( mapStateToProps, {updateTotalExpenses}  )(Calculator)
