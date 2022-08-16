import { ActionsTypes } from "./old-redux";
import { PostType, ProfilePageType } from "./store";

// Типизация начального стэйта, который должен возвращать сам редьюсер
export type UsersStateType = typeof initialState

// Начальное значение, переменные, то, с чем работает редьюсер
const initialState = {
   users: [
      { id: 1, followed: true, fullName: 'Alex', status: 'Hello, i am  cat', location: { city: 'Minsk', country: 'Belarus' } },
      { id: 2, followed: false, fullName: 'Dima', status: 'Hello, i am  bear', location: { city: 'Moscow', country: 'Russia' } },
      { id: 3, followed: true, fullName: 'Jon', status: 'Hello, i am  pig', location: { city: 'Kiev', country: 'Ukraine' } },
   ],
}

// Типизация начального стэйта
export type initialStateType = {
   newPostText: string
   posts: Array<PostType>
}

// Редьюсер, в который нужно передать стэйт той части логики, с которой он работает. Так же принимает action, типизация которого в редакс-сторе, а возвращать редьюсер должен то, с чем работал и то, что принял на входе. 
export const usersReducer = (state: UsersStateType = initialState, action: ActionsTypes): UsersStateType => {
   // Здесь нужно добавить ключи для свойства type объекта action.
   // Проработать для инструкции switch каждый case, с которым будет работать редьюсер, в аргумент case нужно передать нужный type. Внутри case описать код.
   let type1 = '1'
   let type2 = '2'
   switch (action.type) {
      case type1:


      case type2:

      default:
         return state;
   }
}

// Action Creator'ы, которые принимают объект со свойством type и ключом-строкой, в которой описано специальное действие. Если нужно, то можно добавить ещё какие-нибудь ключи-значения в этот объект.
export const addPostActionCreator = () => ({ type: 'ADD-POST', } as const);
export const updateNewTextActionCreator = (newText: string) => ({ type: 'UPDATE-NEW-POST-TEXT', newText: newText, } as const);
