import React, { ComponentType } from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { AppStateType } from '../redux/redux-store'

type MapStateForRedirectType = { isAuth: boolean }
let mapStateToPropsForRedirect = (state: AppStateType): MapStateForRedirectType => ({ isAuth: state.auth.isAuth, })

export function withAuthRedirect(Component: ComponentType<any>) {
   const RedirectComponent = (props: MapStateForRedirectType) => {
      let { isAuth, ...restProps } = props;
      if (!isAuth) return <Navigate to={'/login'} />
      return <Component {...restProps} />
   }
   let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
   return ConnectedAuthRedirectComponent;
}
