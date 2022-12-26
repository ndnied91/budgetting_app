
import {combineReducers} from 'redux'

import userValues from './userValuesReducer'
import expenses from './expensesReducer'

import expensesSum from './expensesSumReducer'

export default combineReducers({
  expenses: expenses,
  expensesSum : expensesSum,
  userValues: userValues

})
