import * as GlobalType from "@/shared/api/global.type";
import { requestOrThrow } from "@/shared/api/axios";

/** 공통코드 조회 */
export const getCode = async (data: GlobalType.CodeRequest): Promise<GlobalType.CodeResponse> => {
  return requestOrThrow<GlobalType.CodeResponse>({ url: "/code", method: "POST", data });
};