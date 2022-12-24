
export default function(state= [] , action){
  switch(action.type){
    case 'EXPENSES':
        return action.payload

    default:
      return state
  }
}
