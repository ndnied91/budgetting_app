
import axios from 'axios'

  export const updateExpenses = (expenses) => {
      return ({ type: 'EXPENSES' , payload : expenses })
    }

    export const updateUserValues = (values) =>{
      return { type: 'USER_VALUES', payload: values }
    }


    export const addToSumExpenses = (values) =>{
      return { type: 'ADD_EXPENSES_TOTAL', payload: values }
    }

    export const subToSumExpenses = (values) =>{
      return { type: 'SUB_EXPENSES_TOTAL', payload: values }
    }
