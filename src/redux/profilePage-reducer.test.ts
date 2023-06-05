import { addPostAC, deletePostAC, profilePageReducer, updateNewTextAC } from "./profilePage-reducer";

const state = {
   newPostText: '',
   posts: [
      { id: 1, message: 'Hi, how are you?', likecount: `♥ ${Math.floor(Math.random() * 98).toString()}` },
      { id: 2, message: "It's my first post", likecount: `♥ ${Math.floor(Math.random() * 98).toString()}` },
      { id: 3, message: "It's my second post", likecount: `♥ ${Math.floor(Math.random() * 98).toString()}` },
   ],
   profile: null,
   status: '',
}

const addPostACExample = addPostAC()

it('new post should be added, length of posts should be incremented', () => {
   const newState = profilePageReducer(state, addPostACExample)

   expect(newState.posts.length).toBe(4)
});

it('message text new post should be an empty string', () => {
   const newState = profilePageReducer(state, addPostACExample)

   expect(newState.posts[3].message).toEqual('')
});

it('after deliting length of posts should be decremented', () => {
   const deletePostACExample = deletePostAC(1)

   const newState = profilePageReducer(state, deletePostACExample)

   expect(newState.posts.length).toBe(2)
});