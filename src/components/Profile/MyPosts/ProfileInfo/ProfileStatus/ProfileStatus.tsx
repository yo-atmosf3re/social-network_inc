import React, { ChangeEvent, useEffect, useState } from 'react'
import styles from './ProfileStatus.module.css'
import { ProfileStatusPropsType } from './ProfileStatus.types'

export const ProfileStatus: React.FC<ProfileStatusPropsType> = ({
   status, updateStatus
}) => {

   const [editMode, setEditMode] = useState<boolean>(false)
   const [value, setValue] = useState<string>(status)

   const activateEditModeHandler = (): void => setEditMode(true)

   const deactivatedEditModeHandler = (): void => {
      setEditMode(false)
      updateStatus(value)
   }

   const onStatusChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => setValue(e.currentTarget.value)

   useEffect(() => {
      if (value !== status) setValue(status)
   }, [status])

   return (
      <>
         {
            editMode
               ? <div
                  className={styles.inputBlock}>
                  <input
                     autoFocus
                     onChange={onStatusChangeHandler}
                     onBlur={deactivatedEditModeHandler}
                     value={value} />
               </div>
               : <div>
                  <span
                     onDoubleClick={activateEditModeHandler}>
                     {status || 'No status'}
                  </span>
               </div>
         }
      </>
   )
}