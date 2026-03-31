import { DefaultError, QueryKey, UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { overlayService } from "@/shared/system/overlay/overlay.service";
import { ReactQueryMeta } from "@/shared/api/global.type";
import { getErrorMessage } from "@/shared/utils/string";

type UseAppQueryOptions<
  TQueryFnData = unknown,
  TError = DefaultError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
> = Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, "meta"> & {
  meta?: ReactQueryMeta;
};

/** 공통 loading 및 error 처리가 적용된 query 래퍼 훅 */
export const useAppQuery = <
  TQueryFnData = unknown,
  TError = DefaultError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  options: UseAppQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
): UseQueryResult<TData, TError> => {
  const { meta, ...restOptions } = options;

  // loading: 기본적으로 전역 로딩 미표출. true 설정 시 초기 로딩에만 표출 (fetching 제외)
  // showError: 기본적으로 에러 발생 시 alert 미표출
  const shouldShowLoading = meta?.loading === true;
  const shouldShowError = meta?.showError === true;

  const queryResult = useQuery<TQueryFnData, TError, TData, TQueryKey>({
    ...restOptions,
    meta,
  });

  useEffect(() => {
    if (!shouldShowLoading) return;

    if (queryResult.isLoading) overlayService.showLoading();
    else overlayService.hideLoading();

  }, [shouldShowLoading, queryResult.isLoading]);

  useEffect(() => {
    if (!shouldShowError || !queryResult.isError) return;
    overlayService.alert({ title: getErrorMessage(queryResult.error) });
  }, [shouldShowError, queryResult.isError, queryResult.error]);

  return queryResult;
};