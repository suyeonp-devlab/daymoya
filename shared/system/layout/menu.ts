import { NavIcon } from "@/shared/system/layout/LayoutContext";

type FooterMenuItem = {
  id: NavIcon;
  label: string;
  href: string;
  iconSrc: string;
};

export const FOOTER_MENU = [
  { id: "home", label: "홈", href: "/app", iconSrc: "/icons/home.svg" },
  { id: "personal", label: "일정", href: "/app/schedule/personal", iconSrc: "/icons/schedule.svg" },
  { id: "group", label: "모임", href: "/app/schedule/group", iconSrc: "/icons/group.svg" },
  { id: "mypage", label: "마이", href: "/app/mypage", iconSrc: "/icons/my.svg" },
] satisfies readonly FooterMenuItem[];