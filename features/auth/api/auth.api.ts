import * as AuthType from "@/features/auth/api/auth.type";
import { request, requestOrThrow } from "@/shared/api/axios";
import { MeResponse } from "@/features/auth/api/auth.type";

/** 로그인 */
export const login = (data: AuthType.LoginRequest): Promise<null> => {
  return request<null>({ method: "POST", url: "/auth/public/login", data });
}

/** 회원가입 인증코드 전송 */
export const sendSignupCode = async (data: AuthType.SignupCodeRequest): Promise<null> => {
  return request<null>({ method: "POST", url: "/auth/public/signup/code", data })
};

/** 회원가입 인증코드 확인 */
export const verifySignupCode = async (data: AuthType.VerifySignupCodeRequest): Promise<null> => {
  return request<null>({ method: "POST", url: "/auth/public/signup/code/verify", data })
};

/** 회원가입 */
export const signup = async (data: AuthType.SignupRequest): Promise<null> => {

  const formData = new FormData();
  formData.append("email", data.email);
  formData.append("password", data.password);
  formData.append("passwordConfirm", data.passwordConfirm);
  formData.append("nickname", data.nickname);

  return request<null>({ method: "POST", url: "/auth/public/signup", data: formData })
};

/** 비밀번호 찾기 인증코드 전송 */
export const sendPasswordForgotCode = async (data: AuthType.PasswordForgotCodeRequest): Promise<null> => {
  return request<null>({ method: "POST", url: "/auth/public/password/forgot/code", data })
};

/** 비밀번호 찾기 인증코드 확인 */
export const verifyPasswordForgotCode = async (data: AuthType.VerifyPasswordForgotCodeRequest): Promise<null> => {
  return request<null>({ method: "POST", url: "/auth/public/password/forgot/code/verify", data })
};

/** 비밀번호 변경 */
export const resetForgottenPassword = async (data: AuthType.PasswordForgotResetRequest): Promise<null> => {
  return request<null>({ method: "POST", url: "/auth/public/password/forgot/reset", data })
};

/** 현재 로그인 사용자 정보 조회 */
export const getMe = async (): Promise<MeResponse> => {
  return requestOrThrow<MeResponse>({ method: "GET", url: "/auth/me" });
};

/** access token 재발급 */
export const refreshAccessToken = async (): Promise<null> => {
  return request<null>({ url: "/auth/public/refresh/token", method: "POST", meta: { skipAuthRefresh: true } });
};