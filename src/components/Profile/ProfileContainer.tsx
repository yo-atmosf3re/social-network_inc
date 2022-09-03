import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { initialStateType, setUserProfile } from "../../redux/profilePage-reducer";
import { AppStateType } from "../../redux/redux-store";
import { UserType } from "../../redux/users-reducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component<ProfilePagePropsType, {}> {
   componentDidMount(): void {
      axios.get<UserType>(`https://social-network.samuraijs.com/api/1.0/profile/2`)
         .then((response: any) => {
            this.props.setUserProfile(response.data)
         })
   }
   render() {
      return (
         <div>
            <Profile {...this.props} />
         </div>
      );
   }
}
// Типизация для MapDispatchToProps
type MapDispatchToPropsType = {
   setUserProfile: (profile: null) => void
}

// Типизация для props компоненты Users
export type ProfilePagePropsType = MapDispatchToPropsType & initialStateType;

// Функция, которая берет весь стэйт приложения целиком и возвращает только нужную часть этого стэйта, который передаётся в контейнерную компоненту.
let mapStateToProps = (state: AppStateType): initialStateType => ({
   newPostText: state.profilePage.newPostText,
   posts: state.profilePage.posts,
   profile: state.profilePage.profile,
})

export default connect(mapStateToProps, {
   setUserProfile,
})(ProfileContainer);