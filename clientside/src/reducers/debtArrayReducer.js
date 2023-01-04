
const INITIAL_STATE = {
    debt: []
};



export default function(state= INITIAL_STATE , action){

let arr = []

  switch(action.type){

      case 'INSERT_DEBT_ARRAY': {
         const newArray = [...state.debt]; //Copying state array
         newArray.splice(2, 0, action.payload);
         //using splice to insert at an index
        return {
          ...state, debt: newArray //reassigning debt array to new array
         }
        }

    case 'DELETE_DEBT_ARRAY':
      return  {...state, debt: state.debt.filter(todo => todo.id !== action.payload.id)}

    default:
      return state
  }
}
