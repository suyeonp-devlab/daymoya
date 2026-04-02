"use client";

import { useEffect } from "react";
import { HeaderVariant, NavIcon, useLayout } from "@/shared/system/layout/LayoutContext";

type LayoutConfigProps = {
  title?: string;
  headerVariant?: HeaderVariant;
  showFooter?: boolean;
  showHeader?: boolean;
  navIcon?: NavIcon;
  resetOnUnmount?: boolean;
};

const DEFAULTS = {
  title: "DAYMOYA",
  headerVariant: "default" as const,
  showFooter: true,
  showHeader: true,
  navIcon: "home" as const
};

/** 현재 페이지에 대한 레이아웃 UI 상태 설정 */
export default function LayoutConfig({
  title,
  headerVariant,
  showFooter,
  showHeader,
  navIcon,
  resetOnUnmount = true,
}: LayoutConfigProps) {

  const { setHeaderTitle, setHeaderVariant, setShowFooter, setShowHeader, setActiveNavIcon } = useLayout();

  useEffect(() => {
    if(title !== undefined) setHeaderTitle(title);
    if(headerVariant !== undefined) setHeaderVariant(headerVariant);
    if(showFooter !== undefined) setShowFooter(showFooter);
    if(showHeader !== undefined) setShowHeader(showHeader);
    if(navIcon !== undefined) setActiveNavIcon(navIcon);

    if (!resetOnUnmount) return;

    return () => {
      setHeaderTitle(DEFAULTS.title);
      setHeaderVariant(DEFAULTS.headerVariant);
      setShowFooter(DEFAULTS.showFooter);
      setShowHeader(DEFAULTS.showHeader);
      setActiveNavIcon(DEFAULTS.navIcon);
    };
  }, [title, headerVariant, showFooter, showHeader, navIcon, resetOnUnmount, setHeaderTitle, setHeaderVariant, setShowFooter, setShowHeader, setActiveNavIcon]);

  return null;
}