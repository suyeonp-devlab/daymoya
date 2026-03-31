import React from "react";
import AuthGuard from "@/shared/system/guard/AuthGuard";

export default function ProtectedLayout({ children }: {
  children: React.ReactNode;
}) {

  return (
    <AuthGuard>{children}</AuthGuard>
  );
}