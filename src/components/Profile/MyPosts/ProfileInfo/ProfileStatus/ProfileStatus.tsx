import React from 'react'
import styles from './ProfileStatus.module.css'

type ProfileStatusPropsType = {
   status: string
}

class ProfileStatus extends React.Component<ProfileStatusPropsType, {}> {
   state = {
      editMode: false
   }

   activateEditMode = () => {
      this.setState({
         editMode: true
      })
   }
   deactivateEditMode = () => {
      this.setState({
         editMode: false
      })
   }

   render() {
      return (<>
         {!this.state.editMode &&
            <div>
               <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
            </div>
         }
         {this.state.editMode &&
            <div className={styles.inputBlock}>
               <input autoFocus onBlur={this.deactivateEditMode.bind(this)} value={this.props.status} />
            </div>
         }
      </>);
   }
}

export default ProfileStatus;