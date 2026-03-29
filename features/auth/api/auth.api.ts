import { LoginRequest, LoginResponse } from "@/features/auth/api/auth.type";
import { requestOrThrow } from "@/shared/api/axios";

export const login = (data: LoginRequest): Promise<LoginResponse> => {
  return requestOrThrow<LoginResponse>({ method: "POST", url: "/auth/login", data });
}
