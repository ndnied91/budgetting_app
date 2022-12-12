const INITIAL_STATE={
  totalIncome: 0,
  expenses: 0,
  saving: 0
}

export default function(state= INITIAL_STATE  , action){
  switch(action.type){
    case 'CALCULATOR':
      return action.payload

    default:
      return state
  }
}
