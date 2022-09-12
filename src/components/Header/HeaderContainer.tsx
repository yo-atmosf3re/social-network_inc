import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { authAPI, usersAPI } from "../../api/Api";
import { AppStateType } from "../../redux/redux-store";
import Header from "./Header";

class HeaderContainer extends React.Component<PropsType, {}> {
   componentDidMount(): void {
      authAPI.me()
         .then((data) => {
            if (data.data.resultCode === 0) {
               let { id, email, login } = data.data;
               this.props.setAuthUserData(id, email, login)
            }
         })
   }

   render() {
      return (
         <Header {...this.props} />
      )
   }
}

type MapDispatchToProps = {
   setAuthUserData: (userId: null, email: null, login: null) => void
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
   setAuthUserData
})(HeaderContainer)


