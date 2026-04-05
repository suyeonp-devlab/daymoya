import { useEffect } from "react";

/** 오버레이가 열릴 때 body 스크롤을 고정하고, 닫히면 원래 위치로 복원하는 훅 */
export function useBodyScrollLock(lock: boolean) {

  useEffect(() => {
    if (!lock) return;

    const scrollY = window.scrollY;

    const originalStyle = {
      overflow: document.body.style.overflow,
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
    };

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    return () => {
      document.body.style.overflow = originalStyle.overflow;
      document.body.style.position = originalStyle.position;
      document.body.style.top = originalStyle.top;
      document.body.style.width = originalStyle.width;

      window.scrollTo(0, scrollY);
    };
  }, [lock]);

}