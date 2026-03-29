import React from "react";

export default function AuthLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="mx-auto w-full max-w-screen-sm px-4">
      {children}
    </main>
  );
}