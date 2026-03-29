"use client";

import { useEffect } from "react";
import { overlayService } from "@/shared/system/overlay/overlay.service";
import { useOverlay } from "@/shared/system/overlay/OverlayContext";

/** useOverlay와 overlayService를 연결하는 브릿지 컴포넌트 */
export default function OverlayServiceBridge() {

  const { alert, showLoading, hideLoading } = useOverlay();

  useEffect(() => {
    overlayService.register({
      alert,
      showLoading,
      hideLoading,
    });
  }, [alert, showLoading, hideLoading]);

  return null;
}