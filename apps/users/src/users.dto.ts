export type UserDTO = {
  id?: string
  firstName: string
  lastName: string
  username: string
  email: string
  password?: string
  dob?: Date | string
  status?: string
  pfp?: string
  createdAt?: Date | string
  updatedAt?: Date | string
  deletedAt?: Date | string
  allowPublicName?: boolean
  allowPublicDob?: boolean
}