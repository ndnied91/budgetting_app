
import {combineReducers} from 'redux'

import values from './userValuesReducer'
import expenses from './expensesReducer'

export default combineReducers({
  expenses: expenses,
  values: values,
})
