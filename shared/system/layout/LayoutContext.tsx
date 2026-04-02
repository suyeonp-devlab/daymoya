"use client";

import { createContext, PropsWithChildren, useContext, useMemo, useState } from "react";

export type HeaderVariant = "default" | "detail";
export type NavIcon = "home" | "personal" | "group" | "mypage";

type LayoutContextValue = {
  headerTitle: string;
  setHeaderTitle: (title: string) => void;
  headerVariant: HeaderVariant;
  setHeaderVariant: (variant: HeaderVariant) => void;
  showHeader: boolean;
  setShowHeader: (show: boolean) => void;
  showFooter: boolean;
  setShowFooter: (show: boolean) => void;
  activeNavIcon: NavIcon;
  setActiveNavIcon: (icon: NavIcon) => void;
};

const LayoutContext = createContext<LayoutContextValue | null>(null);

/** 전역 레이아웃 UI를 제어하는 provider */
export function LayoutProvider({ children }: PropsWithChildren) {

  const [headerTitle, setHeaderTitle] = useState("DAYMOYA");
  const [headerVariant, setHeaderVariant] = useState<HeaderVariant>("default");
  const [showHeader, setShowHeader] = useState(true);
  const [showFooter, setShowFooter] = useState(true);
  const [activeNavIcon, setActiveNavIcon] = useState<NavIcon>("home");

  const value = useMemo(
    () => ({
      headerTitle,
      setHeaderTitle,
      headerVariant,
      setHeaderVariant,
      showHeader,
      setShowHeader,
      showFooter,
      setShowFooter,
      activeNavIcon,
      setActiveNavIcon
    }),
    [headerTitle, headerVariant, showHeader, showFooter, activeNavIcon]
  );

  return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>;
}

/** LayoutProvider 범위 내에서만 layout 상태에 접근 가능 */
export function useLayout() {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayout must be used within <LayoutProvider />");
  }
  return context;
}