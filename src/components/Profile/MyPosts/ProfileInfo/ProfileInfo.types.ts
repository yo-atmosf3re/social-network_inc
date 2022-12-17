import { ProfilePageType } from "../../Profile.types"

export type ProfileInfoPropsType = {
   profile: ProfilePageType | null
   status: string
   updateStatus: (status: string) => void
}