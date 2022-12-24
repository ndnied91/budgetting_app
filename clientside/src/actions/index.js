
import axios from 'axios'

  export const updateExpenses = (expenses) => {
      return ({ type: 'EXPENSES' , payload : expenses })
    }



    export const updateUserValues = (values) =>{
      return { type: 'USER_VALUES', payload: values }
    }
