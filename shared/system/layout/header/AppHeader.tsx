"use client";

import React from "react";
import { useLayout } from "@/shared/system/layout/LayoutContext";
import { Bell } from "lucide-react";
import Link from "next/link";

export default function AppHeader() {

  const { headerTitle } = useLayout();

  return (
    <header className="sticky top-0 z-20 bg-white">
      <div className="mx-auto flex w-full max-w-screen-sm items-center justify-between px-4 py-3">
        <div className="text-xl font-extrabold tracking-tight text-violet-600 mt-1">
          {headerTitle}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/app/alarm"
            aria-label="alarm"
            className="relative flex h-6 w-6 items-center justify-center"
          >
            <Bell size={20} className="text-zinc-800" />
            {/*TODO 신규알림 존재 시 표출*/}
            <span className="absolute top-px -right-0.5 h-1 w-1 rounded-full bg-rose-500" />
          </Link>
        </div>
      </div>
    </header>
  );
}