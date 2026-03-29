import { login } from "@/features/auth/api/auth.api";
import { LoginRequest, LoginResponse } from "@/features/auth/api/auth.type";
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