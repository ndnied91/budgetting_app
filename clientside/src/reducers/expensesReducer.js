
const INITIAL_STATE = {
  price: 0,
  name : ''
}


export default function(state= INITIAL_STATE , action){
  switch(action.type){
    case 'EXPENSES':
        return action.payload
    default:
      return state
  }
}
