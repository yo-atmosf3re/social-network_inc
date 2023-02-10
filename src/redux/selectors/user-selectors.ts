import { UserType } from '../users-reducer';
import { AppStateType } from './../redux-store';
import { createSelector } from 'reselect'

// ! Целесообразно использовать в том случае, если нужно скрыть логику с тяжёлыми вычислениями в эти т.н реселекторы, а затем эти реселекторы переиспользовать. В редакс тулкит это всё работает из "коробки", и не обязательно устанавливать reselect отдельно, а просто импортнуть createSelector из редакс тулкита. В каких-то случаях можно использовать useMemo и другие хуки, а логику с вычислениями размещать в компонентах, но разработчики редакс тулкита и библиотеки reselect предлагают такой подход;
// ** Selectors - для какой-то логики, которую можно инкапсулировать в функцию-селектор, и которая работает со стейтом, если это нужно, а затем возращает часть нужного стейта;
export const selectUsers = (state: AppStateType): UserType[] => state.usersPage.users

export const selectPageSize = (state: AppStateType): number => state.usersPage.pageSize

export const selectTotalUserCount = (state: AppStateType) => state.usersPage.totalUsersCount

export const selectCurrentPage = (state: AppStateType): number => state.usersPage.currentPage

export const selectFetched = (state: AppStateType): boolean => state.usersPage.isFetching

export const selectFollowedInProgress = (state: AppStateType): number[] => state.usersPage.followingInProgress

// ** Reselectors - мемоизирует значения, которые можно преобразовать с помощью других селекторов, так же можно и обработать значения стейта, которые в дальнейшем возвращаются из этого реселектора;
export const reselectUsers = createSelector(selectUsers, users => {

})