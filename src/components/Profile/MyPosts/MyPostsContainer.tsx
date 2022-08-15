import React, { ChangeEvent } from "react";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";
import { addPostActionCreator, updateNewTextActionCreator } from "../../../redux/profilePage-reducer";
import { connect } from "react-redux";


// const MyPostsContainer = () => {
//    return (
//       <StoreContext.Consumer>{
//          (store) => {
//             let state = store.getState();

//             const addNewPost = () => {
//                store.dispatch(addPostActionCreator())
//             }
//             const newTextChangeHandler = (text: string) => {
//                let action = updateNewTextActionCreator(text)
//                store.dispatch(action)

//             }
//             return < MyPosts updateNewPostText={newTextChangeHandler} addPost={addNewPost} newPostText={state.profilePage.newPostText} posts={state.profilePage.posts} />
//          }
//       }
//       </StoreContext.Consumer>);
// }

let mapStateToProps = (state: any) => ({ posts: state.profilePage.posts, newPostText: state.profilePage.newPostText, })
let mapDispatchToProps = (dispatch: any) => {
   return {
      addNewPost: () => {
         dispatch(addPostActionCreator())
      },
      newTextChangeHandler: (text: string) => {
         let action = updateNewTextActionCreator(text)
         dispatch(action)
      }
   }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostContainer;