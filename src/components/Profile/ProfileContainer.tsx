import React from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { compose } from "redux";
import { Profile } from ".";
import { getStatus, setUserProfileTC, updateStatus } from "../../redux/profilePage-reducer";
import { AppStateType } from "../../redux/redux-store";
import { ProfileFromContainerPropsType, MapStatePropsType } from "./Profile.types";

class ProfileContainer extends React.Component<ProfileFromContainerPropsType, {}> {
   componentDidMount(): void {
      let userId = this.props.router.params.userId;
      if (!userId) userId = 16664
      this.props.setUserProfileTC(userId)
      this.props.getStatus(userId)
   }
   render() {
      return (
         <div>
            <Profile
               {...this.props}
               profile={this.props.profile}
               status={this.props.status}
               updateStatus={this.props.updateStatus} />
         </div>
      );
   }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({ profile: state.profilePage.profile, status: state.profilePage.status, authUserId: state.auth.userId, isAuth: state.auth.isAuth })

function withRouter(Component: any) {
   function ComponentWithRouterProp(props: any) {
      const location = useLocation();
      const navigate = useNavigate();
      const params = useParams();
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
)(ProfileContainer);
