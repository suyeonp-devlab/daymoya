"use client";

import React from "react";
import AppHeader from "@/shared/system/layout/header/AppHeader";
import DetailHeader from "@/shared/system/layout/header/DetailHeader";
import { useLayout } from "@/shared/system/layout/LayoutContext";

/** Renders exactly one header based on layout state */
export default function HeaderSwitcher() {

  const { headerVariant, showHeader } = useLayout();

  if (!showHeader) return null

  return (headerVariant === "detail") ? <DetailHeader /> : <AppHeader />
}