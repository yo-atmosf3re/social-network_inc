import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { authAPI, usersAPI } from "../../api/Api";
import { setAuthUserDataSuccess, getAuthUserData } from "../../redux/auth-reducer";
import { AppStateType } from "../../redux/redux-store";
import Header from "./Header";

class HeaderContainer extends React.Component<PropsType, {}> {
   componentDidMount(): void {
      this.props.getAuthUserData()
   }

   render() {
      return (
         <Header {...this.props} />
      )
   }
}

type MapDispatchToProps = {
   setAuthUserDataSuccess: (userId: null, email: null, login: null) => void
   getAuthUserData: () => void
}
type MapStatePropsType = {
   isAuth: boolean
   login: string | null
}
type PropsType = MapStatePropsType & MapDispatchToProps;

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
   isAuth: state.auth.isAuth,
   login: state.auth.login,
})

// export default HeaderContainer;

export default connect(mapStateToProps, {
   setAuthUserDataSuccess,
   getAuthUserData
})(HeaderContainer)


