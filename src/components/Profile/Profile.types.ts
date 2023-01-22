// Типизация для MapDispatchToProps
export type MapDispatchToPropsType = {
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

export type MapStatePropsType = {
   profile: null | ProfilePageType
   router?: any
   status: string
   authUserId: string | null
   isAuth: boolean
}

export type ProfileFromContainerPropsType = MapStatePropsType & MapDispatchToPropsType

export type ProfilePropsType = {
   profile: null | ProfilePageType
   status: string;
   updateStatus: (status: string) => void;
   setUserProfile: (profile: null) => void
   setUserProfileTC: (userId: number) => void
   getStatus: (userId: number) => void
}