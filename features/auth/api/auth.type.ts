export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  memberId: number
  nickname: string
  profileImageUrl: string
}
