
const INITIAL_STATE = {
    expenses: [{ id: "1" , name: "gym" , price: "40"} ,
    { id: "2", name: "phone", price: "50" },
    { id: "3" , name: "" , price: ""} ]
};



export default function(state= INITIAL_STATE , action){

let arr = []

  switch(action.type){

      case 'INSERT_EXPENSE': {
            state.expenses = []

        return {
           expenses: [...action.payload] //reassigning expenses array to new array
         }
        }

    case 'DELETE_EXPENSE':
      return  {...state,  expenses: state.expenses.filter(todo => todo.id !== action.payload.id)}


    default:
      return state
  }
}
