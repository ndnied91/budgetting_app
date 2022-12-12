const INITIAL_STATE={
  title:'',
  name: '',
  age: ''
}


export default function(state= INITIAL_STATE  , action){
  switch(action.type){
    case 'FIRST':
      return action.payload

    default:
      return state
  }
}
