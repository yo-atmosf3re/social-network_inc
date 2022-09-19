import React from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { getStatus, setUserProfileTC, updateStatus } from "../../redux/profilePage-reducer";
import { AppStateType } from "../../redux/redux-store";
import Profile from "./Profile";

class ProfileContainer extends React.Component<PropsType, {}> {
   componentDidMount(): void {
      let userId = this.props.router.params.userId;
      if (!userId) {
         userId = 2;
      };
      this.props.setUserProfileTC(userId)
      this.props.getStatus(userId)
   }
   render() {
      return (
         <div>
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
         </div>
      );
   }
}

// Типизация для MapDispatchToProps
type MapDispatchToPropsType = {
   setUserProfile: (profile: null) => void
   setUserProfileTC: (userId: number) => void
   getStatus: (userId: number) => void
   updateStatus: (status: string) => void;
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
   status: string
}

type PropsType = MapStatePropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({ profile: state.profilePage.profile, status: state.profilePage.status })



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

export default compose<React.ComponentType>(
   connect(mapStateToProps, { setUserProfileTC, getStatus, updateStatus }),
   withRouter,
   // withAuthRedirect,
)(ProfileContainer);
