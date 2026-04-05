/** ==============================
 * AXIOS 관련 타입
 =================================*/
export interface ApiResponse<T> {
  success: boolean;
  code: string;
  message: string;
  data: T | null;
}

export interface ApiError {
  status?: number;
  code: string;
  message: string;
}

export interface ApiRequestMeta {
  timeout?: number;
  skipAuthRefresh?: boolean;
}

declare module "axios" {
  export interface AxiosRequestConfig {
    meta?: ApiRequestMeta;
  }

  export interface InternalAxiosRequestConfig {
    meta?: ApiRequestMeta;
    _retry?: boolean;
  }
}

/** ==============================
 * REACT QUERY 관련 타입
 =================================*/
export interface ReactQueryMeta extends Record<string, unknown> {
  loading?: boolean;
  showError?: boolean;
}

/** ==============================
 * 공통 API 관련 타입
 =================================*/
export interface CodeRequest {
  grpCodeId: string;
  code?: string;
}

export interface CodeResponse {
  grpCodeId: string;
  grpCodeName: string;
  codes: CodeItem[];
}

export interface CodeItem {
  code: string;
  codeName: string;
  sortOrder: number;
}