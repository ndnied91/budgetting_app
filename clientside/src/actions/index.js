
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
      return { type: 'SUB_EXPENSES_TOTAL', payload: values }
    }

    export const updateTotalExpenses = (values) =>{
      let total=0
      values.forEach((item, i) => { if(item.price.length > 0){ total = total + parseInt(item.price) } });


      return { type: 'UPDATE_TOTAL_EXPENSE', payload: total }
    }




    export const addTotalDebt = (values) =>{
      return { type: 'ADD_DEBT_TOTAL', payload: values }
    }

    export const subTotalDebt = (values) =>{
      return { type: 'SUB_DEBT_TOTAL', payload: values }
    }


    export const updateTotalDebt = (values) =>{
      let totalDebt=0
      values.forEach((item, i) => { if(item.price.length > 0){ totalDebt = totalDebt + parseInt(item.price) } });

      return { type: 'UPDATE_TOTAL_DEBT', payload: totalDebt }
    }



//FOR DEBT ARRAY
    export const addToDebtArray = (values) =>{
      //adds new array into state
      return { type: 'INSERT_DEBT_ARRAY', payload: values }
    }

    export const subToDebtArray = (values) =>{
      //removes a specific index from array
      return { type: 'DELETE_DEBT_ARRAY', payload: values }
    }








    //FOR WEEKLY BUDGET 2D ARRAY
        export const addWeeklySpending = (values) =>{
          return { type: 'ADD_WEEKLY_ITEM', payload: values }
        }

        export const subWeeklySpending = (values) =>{
          return { type: 'SUB_WEEKLY_ITEM', payload: values }
        }
