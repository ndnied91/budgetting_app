
const INITIAL_STATE = {
  totalDebt: 0
}


export default function(state=INITIAL_STATE , action){
  switch(action.type){
    case 'ADD_DEBT_TOTAL':
        return {totalDebt : state.totalDebt + action.payload}
    case 'SUB_DEBT_TOTAL':
        return {totalDebt : state.totalDebt - action.payload}
    default:
      return state
  }
}
