import * as GlobalApi from "@/shared/api/global.api";
import * as GlobalType from "@/shared/api/global.type";
import { AppQueryHookOptions, useAppQuery } from "@/shared/system/query/useAppQuery";
import { ApiError } from "@/shared/api/global.type";
import { codeKeys } from "@/shared/api/global.keys";

/** 공통코드 조회 query */
export const useGetCodeQuery = (
  request: GlobalType.CodeRequest,
  options?: AppQueryHookOptions<GlobalType.CodeResponse>,
) => {
  return useAppQuery<GlobalType.CodeResponse, ApiError>({
    queryKey: codeKeys.detail(request.grpCodeId, request.code),
    queryFn: () => GlobalApi.getCode(request),
    enabled: !!request.grpCodeId,
    staleTime: 1000 * 60 * 30,  // 공통코드는 변경 빈도가 낮아 30분 캐싱
    meta: { loading: true },
    ...options,
  });
};