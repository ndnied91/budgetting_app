
const INITIAL_STATE={
  id: 0,
  totalIncome: 0,
  saving: 0,
  expenses: []
}




export default function(state=[] , action){
  switch(action.type){
    case 'USER_VALUES':
      return action.payload

    default:
      return state
  }
}
