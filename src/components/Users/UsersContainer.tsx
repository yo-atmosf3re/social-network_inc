import { connect } from 'http2';
import * as React from 'react';
import { Dispatch } from "redux";
import { AppStateType } from '../../redux/redux-store';
import { initialStateType, usersReducer } from '../../redux/users-reducer';

type MapDispatchToPropsType = {}

export type UsersPropsType = MapDispatchToPropsType & initialStateType;

let mapStateToProps = (state: AppStateType): initialStateType => ({ users: state.users })
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
   return {

   }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;