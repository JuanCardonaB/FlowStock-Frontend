import { useUsersTypes } from "../hooks/useUsersTypes"

export const UsersTypes = () => {
  const {usersTypes} = useUsersTypes()

  console.log(usersTypes?.data)

  return (
    <div>UsersTypes</div>
  )
}
