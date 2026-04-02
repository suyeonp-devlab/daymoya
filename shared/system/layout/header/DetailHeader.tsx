"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { useLayout } from "@/shared/system/layout/LayoutContext";
import { ArrowLeft } from "lucide-react";

export default function DetailHeader() {

  const router = useRouter();
  const { headerTitle } = useLayout();

  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white">
      <div className="relative mx-auto flex w-full max-w-screen-sm items-center px-2 py-2">
        <button
          type="button"
          onClick={() => router.back()}
          aria-label="Back"
          className="flex h-8 w-8 items-center justify-center"
        >
          <ArrowLeft size={20} className="text-zinc-700" />
        </button>

        <h1 className="absolute left-1/2 -translate-x-1/2 text-lg font-semibold tracking-tight mt-1">
          {headerTitle}
        </h1>
      </div>
    </header>
  );
}