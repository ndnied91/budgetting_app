
const INITIAL_STATE = {
  totalDebt: 0
}


export default function(state=INITIAL_STATE , action){
  switch(action.type){
    case 'ADD_DEBT_TOTAL':
        return {total : state.total + action.payload}
    case 'SUB_DEBT_TOTAL':
        return {total : state.total - action.payload}
    default:
      return state
  }
}
