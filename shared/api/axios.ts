import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { ApiError, ApiResponse } from "@/shared/api/global.type";

export const api = axios.create({
  baseURL: "/api",
  withCredentials: true,
  timeout: 5000,
});

/** 요청 인터셉터 */
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    if (config.meta?.timeout !== undefined) {
      config.timeout = config.meta.timeout;
    }

    return config;
  },
  (error: AxiosError): Promise<never> => {
    return Promise.reject(error);
  }
);

/** 응답 인터셉터 */
api.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },
  (error: AxiosError<ApiResponse<null>>): Promise<never> => {
    const apiError: ApiError = {
      status: error.response?.status,
      code: error.response?.data?.code ?? "HTTP_ERROR",
      message: error.response?.data?.message ?? "알 수 없는 오류가 발생했습니다.",
    };

    return Promise.reject(apiError);
  }
);

/**
 * 공통 API 요청 함수 (nullable)
 * 서버 응답의 data를 그대로 반환한다.
 * 성공이더라도 data가 null일 수 있는 API에서 사용한다.
 */
export const request = async <T>(config: AxiosRequestConfig): Promise<T | null> => {
  const response = await api.request<ApiResponse<T>>(config);
  return response.data.data;
};

/**
 * 공통 API 요청 함수 (data 필수)
 * 서버 응답의 data가 반드시 존재해야 하는 API에서 사용한다.
 * data가 null인 경우 비정상 응답으로 간주하고 에러를 발생시킨다.
 */
export const requestOrThrow = async <T>(config: AxiosRequestConfig): Promise<T> => {
  const response = await api.request<ApiResponse<T>>(config);

  if (response.data.data == null) {
    throw {
      status: response.status,
      code: "INVALID_RESPONSE",
      message: "응답 데이터가 올바르지 않습니다."
    } satisfies ApiError;
  }

  return response.data.data;
};