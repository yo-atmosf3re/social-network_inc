import React from "react";
import { connect } from "react-redux";
import { setAuthUserDataSuccess, getAuthUserData } from "../../redux/auth-reducer";
import { AppStateType } from "../../redux/redux-store";
import { Header } from "./Header";
import { HeaderFromContainerPropsType, MapStatePropsType } from "./Header.types";

class HeaderContainer extends React.Component<HeaderFromContainerPropsType, {}> {
   componentDidMount(): void {
      this.props.getAuthUserData()
   }
   render() {
      return (
         <Header {...this.props} />
      )
   }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
   isAuth: state.auth.isAuth,
   login: state.auth.login,
})

export default connect(mapStateToProps, {
   setAuthUserDataSuccess,
   getAuthUserData
})(HeaderContainer)


