"use client";

import { PropsWithChildren, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useMeQuery } from "@/features/auth/api/auth.queries";
import GuardScreen from "@/shared/system/guard/GuardScreen";
import ServerError from "@/shared/ui/feedback/ServerError";

/** proxy에서 1차 제어 후, 실제 사용자 인증 상태를 검증하는 Guard 컴포넌트 */
export default function AuthGuard({ children }: PropsWithChildren) {

  const router = useRouter();
  const { data: me, isLoading, error } = useMeQuery();

  useEffect(() => {
    if (error?.status === 401) {
      router.replace("/login");
    }
  }, [error, router]);

  if (isLoading) return <GuardScreen />;

  if (error) {
    if (error.status === 401) return null;
    return <ServerError />;
  }

  if (!me) return null;

  return <>{children}</>;
}