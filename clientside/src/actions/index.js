
import axios from 'axios'


export const firstTest = (values) => {
  console.log(values)
    return ({ type: 'FIRST' , payload : values })
  }
