
import axios from 'axios'


    export const updateUserValues = (values) =>{
      return { type: 'USER_VALUES', payload: values }
    }


//FOR ARRAY HANDLING OF EXPENSES
    export const updateExpenses = (todos) => {
        return ({ type: 'INSERT_EXPENSE' , payload : todos })
      }

    export const removeExpenses = (todos) => {
        return ({ type: 'DELETE_EXPENSE' , payload : todos })
      }



// just for total summation
    export const addTotalExpenses = (values) =>{
      return { type: 'ADD_EXPENSES_TOTAL', payload: values }
    }

    export const subTotalSumExpenses = (values) =>{
      console.log('REMOVING' , values)
      return { type: 'SUB_EXPENSES_TOTAL', payload: values }
    }




    export const addTotalDebt = (values) =>{
      return { type: 'ADD_DEBT_TOTAL', payload: values }
    }

    export const subTotalDebt = (values) =>{
      return { type: 'SUB_DEBT_TOTAL', payload: values }
    }



//FOR DEBT ARRAY
    export const addToDebtArray = (values) =>{
      return { type: 'INSERT_DEBT_ARRAY', payload: values }
    }

    export const subToDebtArray = (values) =>{
      return { type: 'DELETE_DEBT_ARRAY', payload: values }
    }
