import React from "react";
import AuthGuard from "@/shared/system/guard/AuthGuard";
import { LayoutProvider } from "@/shared/system/layout/LayoutContext";
import HeaderSwitcher from "@/shared/system/layout/header/HeaderSwitcher";
import AppFooter from "@/shared/system/layout/footer/AppFooter";

export default function ProtectedLayout({ children }: {
  children: React.ReactNode;
}) {

  return (
    <AuthGuard>
      <LayoutProvider>
        <HeaderSwitcher />
        <main className="mx-auto w-full max-w-screen-sm px-4 py-4 pb-24">
          {children}
        </main>
        <AppFooter />
      </LayoutProvider>
    </AuthGuard>
  );
}