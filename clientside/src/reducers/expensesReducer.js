
const INITIAL_STATE = {
    expenses: [{ id: "1" , name: "gym" , price: "40"} ,
    { id: "2", name: "phone", price: "50" },
    { id: "3" , name: "" , price: ""} ]

    // expenses: [{ id: "" , name: "" , price: ""} ]
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



// case 'INSERT_EXPENSE': {
//    const newArray = [...state.expenses]; //Copying state array
//    newArray.splice(2, 0, action.payload);
//    //using splice to insert at an index
//   return {
//    ...state, expenses: newArray //reassigning expenses array to new array
//    }
//   }
//
// case 'DELETE_EXPENSE':
// return  {...state,  expenses: state.expenses.filter(todo => todo.id !== action.payload.id)}
