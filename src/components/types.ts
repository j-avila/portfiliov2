export interface Iuser {
  user: {
    token?: string
    user: {
      name: string
      email: string
      role: "ADMIN_ROLE" | "USER_ROLE"
      state: boolean
      uid: string
    }
  }
}