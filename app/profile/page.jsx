import { UserProfile } from "@clerk/nextjs"
import useSWR from 'swr'
// rafce

const ProfilePage = () => {
  return (
    <div>
      <UserProfile />
    </div>
  )
}

export default ProfilePage;