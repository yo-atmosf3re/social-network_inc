import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/auth-reducer";
import { AppStateType } from "../../redux/redux-store";
import Header from "./Header";

type HeaderPropsType = {
   setAuthUserData: (userId: null, email: null, login: null) => void
}

type GeneralDataType = {
   data: DataType
}

type DataType = {
   id: number
   login: string
   email: string
}

class HeaderContainer extends React.Component<HeaderPropsType, {}> {
   componentDidMount(): void {
      axios.defaults.withCredentials = true;
      axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
         .then((response) => {
            console.log(response.data.data.login)
            // debugger
            if (response.data.resultCode === 0) {
               let { id, email, login } = response.data.data;
               this.props.setAuthUserData(id, email, login)
            }
         }).catch((error) => {
            console.log(error)
         })
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


