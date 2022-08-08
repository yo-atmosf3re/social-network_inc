import { ActionsTypes } from "./store";

const initialState = [
   { id: 1, name: 'Alex' },
   { id: 2, name: 'Steve' },
   { id: 3, name: 'Jon' },
   { id: 4, name: 'Oleg' },
]

const sidebarReducer = (state = initialState, action: ActionsTypes) => {

   return state;
}

export default sidebarReducer;