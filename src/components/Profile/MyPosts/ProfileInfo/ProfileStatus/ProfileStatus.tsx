import React, { ChangeEvent } from 'react'
import styles from './ProfileStatus.module.css'

type ProfileStatusPropsType = {
   status: string
   updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusPropsType, {}> {
   state = {
      editMode: false,
      status: this.props.status
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
      this.props.updateStatus(this.state.status)
   }
   onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
      this.setState({
         status: e.currentTarget.value,
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
               <input autoFocus onChange={this.onStatusChange} onBlur={this.deactivateEditMode.bind(this)} value={this.state.status} />
            </div>
         }
      </>);
   }
}

export default ProfileStatus;