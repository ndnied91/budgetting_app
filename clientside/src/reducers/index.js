
import {combineReducers} from 'redux'

import userValues from './userValuesReducer'
import expensesArray from './expensesReducer'
import expensesSum from './expensesSumReducer'
import totalDebt from './debtReducer'
import debtArray from './debtArrayReducer'




export default combineReducers({
  expensesArray: expensesArray,
  expensesSum : expensesSum,
  userValues: userValues,
  totalDebt: totalDebt,
  debtArray: debtArray

})
