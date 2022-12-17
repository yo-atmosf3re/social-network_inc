import React, { ChangeEvent } from 'react'
import styles from './ProfileStatus.module.css'
import { ProfileStatusPropsType } from './ProfileStatus.types'

export class ProfileStatus extends React.Component<ProfileStatusPropsType, {}> {
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
   componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>): void {
      if (prevProps.status !== this.props.status) {
         this.setState({
            status: this.props.status
         })
      }
   }

   render() {
      return (<>
         {
            !this.state.editMode
            &&
            <div>
               <span
                  onDoubleClick={this.activateEditMode.bind(this)}>
                  {this.props.status || 'No status'}
               </span>
            </div>
         }
         {
            this.state.editMode
            &&
            <div
               className={styles.inputBlock}>
               <input
                  autoFocus
                  onChange={this.onStatusChange}
                  onBlur={this.deactivateEditMode.bind(this)}
                  value={this.state.status} />
            </div>
         }
      </>);
   }
}