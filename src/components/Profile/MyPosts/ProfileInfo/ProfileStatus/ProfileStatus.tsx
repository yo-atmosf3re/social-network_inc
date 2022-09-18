import React from 'react'
import styles from './ProfileStatus.module.css'

type ProfileStatusPropsType = {
   status: string
}

class ProfileStatus extends React.Component<ProfileStatusPropsType, {}> {
   state = {
      editMode: false
   }

   render() {
      return (<>
         {!this.state.editMode &&
            <div>
               <span onDoubleClick={() => { alert('Hello!') }}>{this.props.status}</span>
            </div>
         }
         {this.state.editMode &&
            <div className={styles.inputBlock}>
               <input value={this.props.status} />
            </div>
         }
      </>);
   }
}

export default ProfileStatus;