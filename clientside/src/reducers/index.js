
import {combineReducers} from 'redux'

import userValues from './userValuesReducer'
import expensesArray from './expensesReducer'
import debtArray from './debtArrayReducer'

import expensesSum from './totalExpensesReducer'
import totalDebt from './totalDebtReducer'

import weeklyBudget from './weeklyBudget'



export default combineReducers({
  expensesArray: expensesArray,
  expensesSum : expensesSum,
  userValues: userValues,
  totalDebt: totalDebt,
  debtArray: debtArray,
  weeklyBudget : weeklyBudget
})
