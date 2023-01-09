
const INITIAL_STATE = {
  total: 0
}


export default function(state=INITIAL_STATE , action){
  switch(action.type){
    case 'ADD_EXPENSES_TOTAL':
        return {total : state.total + action.payload}
    case 'SUB_EXPENSES_TOTAL':
        return {total : state.total - action.payload}
    case 'UPDATE_TOTAL_EXPENSE':
        return {total : action.payload}
    default:
      return state
  }
}
