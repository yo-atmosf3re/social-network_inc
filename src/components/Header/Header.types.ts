export type HeaderPropsType = {
   isAuth: boolean
   login: string | null
}

export type MapDispatchToProps = {
   setAuthUserDataSuccess: (userId: string | null, email: null | string, login: null | string, isAuth: boolean) => void
}
export type MapStatePropsType = {
   isAuth: boolean
   login: string | null
}
export type HeaderFromContainerPropsType = MapStatePropsType & MapDispatchToProps;