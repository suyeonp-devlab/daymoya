import {
  login,
  resetForgottenPassword,
  sendPasswordForgotCode,
  sendSignupCode,
  signup,
  verifyPasswordForgotCode,
  verifySignupCode
} from "@/features/auth/api/auth.api";
import {
  LoginRequest,
  LoginResponse,
  PasswordForgotCodeRequest,
  PasswordForgotResetRequest,
  SignupCodeRequest,
  SignupRequest,
  VerifyPasswordForgotCodeRequest,
  VerifySignupCodeRequest
} from "@/features/auth/api/auth.type";
import { ApiError } from "@/shared/api/global.type";
import { authKeys } from "@/features/auth/api/auth.keys";
import { useAppMutation } from "@/shared/system/query/useAppMutation";

/** 로그인 mutation */
export const useLoginMutation = () => {
  return useAppMutation<LoginResponse, ApiError, LoginRequest>({
    mutationKey: authKeys.login(),
    mutationFn: login,
  });
};

/** 회원가입 인증코드 전송 mutation */
export const useSendSignupCodeMutation = () => {
  return useAppMutation<null, ApiError, SignupCodeRequest>({
    mutationKey: authKeys.signup.sendCode(),
    mutationFn: sendSignupCode,
  });
};

/** 회원가입 인증코드 확인 mutation */
export const useVerifySignupCodeMutation = () => {
  return useAppMutation<null, ApiError, VerifySignupCodeRequest>({
    mutationKey: authKeys.signup.verifyCode(),
    mutationFn: verifySignupCode,
  });
};

/** 회원가입 mutation */
export const useSignupMutation = () => {
  return useAppMutation<null, ApiError, SignupRequest>({
    mutationKey: authKeys.signup.register(),
    mutationFn: signup,
  });
};

/** 비밀번호 찾기 인증코드 전송 mutation */
export const useSendPasswordForgotCodeMutation = () => {
  return useAppMutation<null, ApiError, PasswordForgotCodeRequest>({
    mutationKey: authKeys.forgotPassword.sendCode(),
    mutationFn: sendPasswordForgotCode,
  });
};

/** 비밀번호 찾기 인증코드 확인 mutation */
export const useVerifyPasswordForgotCodeMutation = () => {
  return useAppMutation<null, ApiError, VerifyPasswordForgotCodeRequest>({
    mutationKey: authKeys.forgotPassword.verifyCode(),
    mutationFn: verifyPasswordForgotCode,
  });
};

/** 비밀번호 변경 mutation */
export const useResetForgottenPasswordMutation = () => {
  return useAppMutation<null, ApiError, PasswordForgotResetRequest>({
    mutationKey: authKeys.forgotPassword.resetPassword(),
    mutationFn: resetForgottenPassword,
  });
};