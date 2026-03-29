import { AlertOptions } from "@/shared/system/overlay/overlay.type";

type OverlayServiceHandlers = {
  alert: (params: AlertOptions) => void;
  showLoading: () => void;
  hideLoading: () => void;
};

let handlers: OverlayServiceHandlers | null = null;

/** React 외부에서 전역 overlay(alert, loading 등)를 호출하기 위한 서비스 */
export const overlayService = {
  register(nextHandlers: OverlayServiceHandlers) {
    handlers = nextHandlers;
  },

  alert(params: AlertOptions) {
    handlers?.alert(params);
  },

  showLoading() {
    handlers?.showLoading();
  },

  hideLoading() {
    handlers?.hideLoading();
  },
};