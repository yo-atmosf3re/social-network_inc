import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { AppStateType } from '../redux/redux-store'

type MapStateForRedirectType = { isAuth: boolean }
let mapStateToPropsForRedirect = (state: AppStateType): MapStateForRedirectType => ({ isAuth: state.auth.isAuth, })

export const WithAuthRedirect = (Component: any) => {
   class RedirectComponent extends React.Component<MapStateForRedirectType, {}> {
      render() {
         if (!this.props.isAuth) return <Navigate to={'/login'} />
         return <Component {...this.props} />
      }
   }
   let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
   return ConnectedAuthRedirectComponent;
}
