import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/auth-reducer";
import { AppStateType } from "../../redux/redux-store";
import Header from "./Header";

type HeaderPropsType = {
   setAuthUserData: (data: { userId: null, email: null, login: null }) => void
}

class HeaderContainer extends React.Component<HeaderPropsType, {}> {
   componentDidMount(): void {
      axios.get<any>(`https://social-network.samuraijs.com/api/1.0/auth/me/`, {
         withCredentials: true
      })
         .then((response: any) => {
            console.log(response.data.data.login)
            console.log(response.data)
            if (response.data.resultCode === 0) {
               this.props.setAuthUserData(response.data.data.login)
            }
         });
   }

   render() {
      return (
         <Header {...this.props} />
      )
   }
}

type MapDispatchToProps = {}
export type AuthType = {}
type MapStatePropsType = {}
type PropsType = MapStatePropsType & MapDispatchToProps;

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({

})

// export default HeaderContainer;

export default connect(mapStateToProps, {
   setAuthUserData
})(HeaderContainer)


