export interface LoginRequest {
  email: string
  password: string
}

export interface SignupCodeRequest {
  email: string;
}

export interface VerifySignupCodeRequest {
  email: string;
  code: string;
}

export interface SignupRequest {
  email: string;
  password: string;
  passwordConfirm: string;
  nickname: string;
}

export interface PasswordForgotCodeRequest {
  email: string;
}

export interface VerifyPasswordForgotCodeRequest {
  email: string;
  code: string;
}

export interface PasswordForgotResetRequest {
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface MeResponse {
  memberId: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
}
