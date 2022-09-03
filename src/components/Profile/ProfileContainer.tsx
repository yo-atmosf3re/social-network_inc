import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { initialStateType, setUserProfile } from "../../redux/profilePage-reducer";
import { AppStateType } from "../../redux/redux-store";
import { UserType } from "../../redux/users-reducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component<PropsType, {}> {
   componentDidMount(): void {
      axios.get<UserType>(`https://social-network.samuraijs.com/api/1.0/profile/2`)
         .then((response: any) => {
            this.props.setUserProfile(response.data)
         })
   }
   render() {
      return (
         <div>
            <Profile {...this.props} profile={this.props.profile} />
         </div>
      );
   }
}
// Типизация для MapDispatchToProps
type MapDispatchToPropsType = {
   setUserProfile: (profile: null) => void
}

export type ProfilePageType = {
   aboutMe: string
   contacts: {
      facebook: string
      website: string
      vk: string
      twitter: string
      instagram: string
      youtube: string
      github: string
      mainLink: string
   }
   lookingForAJob: boolean
   lookingForAJobDescription: string
   fullName: string
   userId: number
   photos: {
      small: string
      large: string
   }
}

type MapStatePropsType = {
   profile: null | ProfilePageType
}

type PropsType = MapStatePropsType & MapDispatchToPropsType

// Типизация для props компоненты Users
// export type ProfilePagePropsType = MapDispatchToPropsType & initialStateType;

// Функция, которая берет весь стэйт приложения целиком и возвращает только нужную часть этого стэйта, который передаётся в контейнерную компоненту.
let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
   profile: state.profilePage.profile,
})

export default connect(mapStateToProps, {
   setUserProfile,
})(ProfileContainer);