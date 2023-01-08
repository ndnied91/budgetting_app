
const INITIAL_STATE = {
    weeklyBudget:
    [{ id: "1" , date: "01/04/2023", name: "groceries" , price: "40"} ,
    { id: "2", date: "01/04/2023" , name: "dinner", price: "20" },
    { id: "3" , date: "01/04/2023" , name: "movies" , price: "10"} ]

};



export default function(state= INITIAL_STATE , action){

let arr = []

  switch(action.type){

      case 'ADD_WEEKLY_ITEM': {
            state.weeklyBudget = []

        return {
           weeklyBudget: [...action.payload] //reassigning weeklyBudget array to new array
         }
        }

    case 'SUB_WEEKLY_ITEM':
      return  {...state,  weeklyBudget: state.weeklyBudget.filter(todo => todo.id !== action.payload.id)}


    default:
      return state
  }
}
