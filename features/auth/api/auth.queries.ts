import * as AuthApi from "@/features/auth/api/auth.api";
import * as AuthType from "@/features/auth/api/auth.type";
import { ApiError } from "@/shared/api/global.type";
import { authKeys } from "@/features/auth/api/auth.keys";
import { useAppMutation } from "@/shared/system/query/useAppMutation";
import { useAppQuery } from "@/shared/system/query/useAppQuery";
import { QueryClient } from "@tanstack/react-query";

/** 로그인 mutation */
export const useLoginMutation = () => {
  return useAppMutation<null, ApiError, AuthType.LoginRequest>({
    mutationFn: AuthApi.login,
    meta: { showError: false }
  });
};

/** 회원가입 인증코드 전송 mutation */
export const useSendSignupCodeMutation = () => {
  return useAppMutation<null, ApiError, AuthType.SignupCodeRequest>({
    mutationFn: AuthApi.sendSignupCode,
  });
};

/** 회원가입 인증코드 확인 mutation */
export const useVerifySignupCodeMutation = () => {
  return useAppMutation<null, ApiError, AuthType.VerifySignupCodeRequest>({
    mutationFn: AuthApi.verifySignupCode,
  });
};

/** 회원가입 mutation */
export const useSignupMutation = () => {
  return useAppMutation<null, ApiError, AuthType.SignupRequest>({
    mutationFn: AuthApi.signup,
  });
};

/** 비밀번호 찾기 인증코드 전송 mutation */
export const useSendPasswordForgotCodeMutation = () => {
  return useAppMutation<null, ApiError, AuthType.PasswordForgotCodeRequest>({
    mutationFn: AuthApi.sendPasswordForgotCode,
  });
};

/** 비밀번호 찾기 인증코드 확인 mutation */
export const useVerifyPasswordForgotCodeMutation = () => {
  return useAppMutation<null, ApiError, AuthType.VerifyPasswordForgotCodeRequest>({
    mutationFn: AuthApi.verifyPasswordForgotCode,
  });
};

/** 비밀번호 변경 mutation */
export const useResetForgottenPasswordMutation = () => {
  return useAppMutation<null, ApiError, AuthType.PasswordForgotResetRequest>({
    mutationFn: AuthApi.resetForgottenPassword,
  });
};

/** 현재 로그인 사용자 정보 조회 query */
export const useMeQuery = () => {
  return useAppQuery<AuthType.MeResponse, ApiError>({
    queryKey: authKeys.me(),
    queryFn: AuthApi.getMe,
    retry: 0
  });
};

/** 현재 로그인 사용자 정보 조회 및 캐시 저장 */
export const fetchMe = async (queryClient: QueryClient): Promise<AuthType.MeResponse> => {
  return queryClient.fetchQuery({
    queryKey: authKeys.me(),
    queryFn: AuthApi.getMe,
    retry: 0,
  });
};