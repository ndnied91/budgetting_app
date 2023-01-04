
import {combineReducers} from 'redux'

import userValues from './userValuesReducer'
import expensesArray from './expensesReducer'
import debtArray from './debtArrayReducer'

import expensesSum from './totalExpensesReducer'
import totalDebt from './totalDebtReducer'



export default combineReducers({
  expensesArray: expensesArray,
  expensesSum : expensesSum,
  userValues: userValues,
  totalDebt: totalDebt,
  debtArray: debtArray
})
