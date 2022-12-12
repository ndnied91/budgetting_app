
import axios from 'axios'


export const updateCalc = (values) => {
    return ({ type: 'CALCULATOR' , payload : values })
  }
