
const INITIAL_STATE={
  id: 0,
  totalIncome: "4000",
  saving: "1500",
  expenses: []
}




export default function(state=INITIAL_STATE , action){
  switch(action.type){
    case 'USER_VALUES':
      return action.payload

    default:
      return state
  }
}
