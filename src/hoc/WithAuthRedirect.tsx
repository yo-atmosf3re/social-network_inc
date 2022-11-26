import React, { ComponentType } from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { AppStateType } from '../redux/redux-store'

type MapStateForRedirectType = { isAuth: boolean }
const mapStateToPropsForRedirect = (state: AppStateType): MapStateForRedirectType => ({ isAuth: state.auth.isAuth, })

export function withAuthRedirect(Component: ComponentType<any>) {
   const RedirectComponent = (props: MapStateForRedirectType) => {
      const { isAuth, ...restProps } = props;
      if (!isAuth) return <Navigate to={'/login'} />
      return <Component {...restProps} />
   }
   const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
   return ConnectedAuthRedirectComponent;
}
