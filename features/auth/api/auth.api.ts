import {
  LoginRequest,
  LoginResponse,
  PasswordForgotCodeRequest,
  PasswordForgotResetRequest,
  VerifyPasswordForgotCodeRequest
} from "@/features/auth/api/auth.type";
import { request, requestOrThrow } from "@/shared/api/axios";

/** 로그인 */
export const login = (data: LoginRequest): Promise<LoginResponse> => {
  return requestOrThrow<LoginResponse>({ method: "POST", url: "/auth/login", data });
}

/** 비밀번호 찾기 인증코드 전송 */
export const sendPasswordForgotCode = async (data: PasswordForgotCodeRequest): Promise<null> => {
  return request<null>({ method: "POST", url: "/auth/password/forgot/code", data })
};

/** 비밀번호 찾기 인증코드 확인 */
export const verifyPasswordForgotCode = async (data: VerifyPasswordForgotCodeRequest): Promise<null> => {
  return request<null>({ method: "POST", url: "/auth/password/forgot/code/verify", data })
};

/** 비밀번호 변경 */
export const resetForgottenPassword = async (data: PasswordForgotResetRequest) => {
  return request<null>({ method: "POST", url: "/auth/password/forgot/reset", data })
};