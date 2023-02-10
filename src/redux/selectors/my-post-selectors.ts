import { AppStateType } from './../redux-store';

type SelectPostsResponse = {
   id: number,
   message: string,
   likecount: string
}

export const selectPosts = (state: AppStateType): SelectPostsResponse[] => state.profilePage.posts

export const selectNewPostText = (state: AppStateType): string => state.profilePage.newPostText