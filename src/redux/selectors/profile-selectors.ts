import { ProfilePageType } from '../../components/Profile/Profile.types';
import { AppStateType } from './../redux-store';

export const selectProfile = (state: AppStateType): null | ProfilePageType => state.profilePage.profile

export const selectStatus = (state: AppStateType): string => state.profilePage.status

export const selectAuthUserId = (state: AppStateType): string | null => state.auth.userId

export const selectProfileAuthorized = (state: AppStateType): boolean => state.auth.isAuth