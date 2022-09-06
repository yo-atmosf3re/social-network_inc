import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { setUserProfile } from "../../redux/profilePage-reducer";
import { AppStateType } from "../../redux/redux-store";
import { UserType } from "../../redux/users-reducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component<PropsType, {}> {
   componentDidMount(): void {
      let userId = this.props.router.params.userId;
      if (!userId) {
         userId = 2;
      };
      axios.get<UserType>(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
         .then((response: any) => {
            this.props.setUserProfile(response.data)
         });
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

// Типизация для profile, который приходит с сервера. Эту типизацию использую в компоненте Profile.tsx и в контейнерной компоненте.
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
   router?: any
}

type PropsType = MapStatePropsType & MapDispatchToPropsType

// Типизация для props компоненты Users
// export type ProfilePagePropsType = MapDispatchToPropsType & initialStateType;

// Функция, которая берет весь стэйт приложения целиком и возвращает только нужную часть этого стэйта, который передаётся в контейнерную компоненту.
let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
   profile: state.profilePage.profile,
})

function withRouter(Component: any) {
   function ComponentWithRouterProp(props: any) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
         <Component
            {...props}
            router={{ location, navigate, params }}
         />
      );
   }
   return ComponentWithRouterProp;
}

export default connect(mapStateToProps, {
   setUserProfile,
})(withRouter(ProfileContainer));