import { PostType } from "../../../redux/store"

export type MyPostPropsType = MapDispatchToPropsType & initialStateType

export type MapDispatchToPropsType = {
   addPost: () => void
   updateNewPostText: (text: string) => void
}

export type initialStateType = {
   newPostText: string
   posts: Array<PostType>
   profile?: any
}