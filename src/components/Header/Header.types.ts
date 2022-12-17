export type HeaderPropsType = {
   isAuth: boolean
   login: string | null
}

export type MapDispatchToProps = {
   setAuthUserDataSuccess: (userId: null, email: null, login: null) => void
   getAuthUserData: () => void
}
export type MapStatePropsType = {
   isAuth: boolean
   login: string | null
}
export type HeaderFromContainerPropsType = MapStatePropsType & MapDispatchToProps;