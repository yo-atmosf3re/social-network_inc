
import { AppActionsTypes } from "./redux-store";
import { SidebarItemType } from "./store";

type InitialStateSidebarType = SidebarItemType[]

const initialStateSidebar: InitialStateSidebarType = [
   { id: 1, name: 'Alex' },
   { id: 2, name: 'Steve' },
   { id: 3, name: 'Jon' },
   { id: 4, name: 'Oleg' },
]

const sidebarReducer = (state = initialStateSidebar, action: AppActionsTypes): InitialStateSidebarType => {

   return state;
}

export default sidebarReducer;