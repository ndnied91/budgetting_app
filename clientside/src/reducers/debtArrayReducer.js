
const INITIAL_STATE = {
  debt: [{ id: "1" , name: "dad" , price: "400"} ,
  { id: "2", name: "sister", price: "150" },
  { id: "3" , name: "" , price: ""} ]
};

export default function(state= INITIAL_STATE , action){

let arr = []

  switch(action.type){

      case 'INSERT_DEBT_ARRAY': {
         state.debt = []

        return {
           debt: [...action.payload] //reassigning expenses array to new array
         }
        }

    case 'DELETE_DEBT_ARRAY':
      return  {...state, debt: state.debt.filter(todo => todo.id !== action.payload.id)}

    default:
      return state
  }
}
