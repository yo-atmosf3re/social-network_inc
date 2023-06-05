import { Dispatch } from "redux";
import { toggleFollowingProgressAC } from "../redux/users-reducer";
import { AxiosResponse } from "axios";

// ** Типизация для аргумента вспомогательной функции;
export type CommonActionCreatorType<T> = (userId: number) => {
   readonly type: T,
   readonly userId: number
};

// ** Вспомогательная функция для сокращения кода в users-reducer'e в двух TC - follow и unfollow;
export const subscriptionFlow = async <T>(
   dispatch: Dispatch,
   userId: number,
   apiMethod: (id: number) => Promise<AxiosResponse<any, any>>,
   actionCreator: CommonActionCreatorType<T>): Promise<void> => {
   dispatch(toggleFollowingProgressAC(true, userId))
   try {
      const { data } = await apiMethod(userId);
      if (data.resultCode === 0) dispatch(actionCreator(userId));
   } catch (error) {
   } finally {
      dispatch(toggleFollowingProgressAC(false, userId));
   }
}