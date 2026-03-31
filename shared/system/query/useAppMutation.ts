import { DefaultError, UseMutationOptions, UseMutationResult, useMutation } from "@tanstack/react-query";
import { overlayService } from "@/shared/system/overlay/overlay.service";
import { ReactQueryMeta } from "@/shared/api/global.type";
import { getErrorMessage } from "@/shared/utils/string";

type UseAppMutationOptions<
  TData = unknown,
  TError = DefaultError,
  TVariables = void,
  TOnMutateResult = void,
> = Omit<UseMutationOptions<TData, TError, TVariables, TOnMutateResult>, "meta"> & {
  meta?: ReactQueryMeta;
};

/** 공통 loading 및 error 처리가 적용된 mutation 래퍼 훅 */
export const useAppMutation = <
  TData = unknown,
  TError = DefaultError,
  TVariables = void,
  TOnMutateResult = void,
>(
  options: UseAppMutationOptions<TData, TError, TVariables, TOnMutateResult>,
): UseMutationResult<TData, TError, TVariables, TOnMutateResult> => {

  const { meta, onMutate, onError, onSettled, ...restOptions } = options;

  // loading: 기본적으로 전역 로딩 표시됨
  // showError: 기본적으로 에러 발생 시 alert 표시됨
  const shouldShowLoading = meta?.loading !== false;
  const shouldShowError = meta?.showError !== false;

  return useMutation<TData, TError, TVariables, TOnMutateResult>({
    ...restOptions,
    meta,
    onMutate: async (variables, context) => {

      if (shouldShowLoading) overlayService.showLoading();

      if (!onMutate) {
        return undefined as TOnMutateResult;
      }

      return onMutate(variables, context);
    },
    onError: (error, variables, onMutateResult, context) => {
      if (shouldShowError) overlayService.alert({ title: getErrorMessage(error) });
      onError?.(error, variables, onMutateResult, context);
    },
    onSettled: (data, error, variables, onMutateResult, context) => {
      if (shouldShowLoading) overlayService.hideLoading();
      onSettled?.(data, error, variables, onMutateResult, context);
    },
  });
};