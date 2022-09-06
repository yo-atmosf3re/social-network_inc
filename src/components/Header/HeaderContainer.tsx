import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/auth-reducer";
import { AppStateType } from "../../redux/redux-store";
import Header from "./Header";

// const axios = require('axios').default;
// const ax = axios.create({
//    baseURL: 'https://social-network.samuraijs.com/api/1.0/auth/me',
//    withCredentials: true
// })
// const loginUser = () => {
//    ax.get('')
// }


class HeaderContainer extends React.Component<PropsType, {}> {
   componentDidMount(): void {
      axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
         withCredentials: true
      })
         .then((response) => {
            // debugger
            if (response.data.resultCode === 0) {
               let { id, email, login } = response.data.data;
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
type DataType = {
   id: number
   login: string
   email: string
}
export type AuthType = {}
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


