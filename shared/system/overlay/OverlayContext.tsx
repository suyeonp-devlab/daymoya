"use client";

import { createContext, PropsWithChildren, useCallback, useContext, useMemo, useState } from "react";
import { AlertOptions, AlertState, ConfirmOptions, ConfirmState, LoadingState } from "@/shared/system/overlay/overlay.type";
import AlertDialog from "@/shared/ui/overlay/AlertDialog";
import ConfirmDialog from "@/shared/ui/overlay/ConfirmDialog";
import LoadingOverlay from "@/shared/ui/overlay/LoadingOverlay";
import { useBodyScrollLock } from "@/shared/system/overlay/useBodyScrollLock";

type OverlayContextValue = {
  alert: (options: AlertOptions | string) => Promise<void>;
  confirm: (options: ConfirmOptions | string) => Promise<boolean>;
  showLoading: () => void;
  hideLoading: () => void;
};

const OverlayContext = createContext<OverlayContextValue | null>(null);

/** alert, confirm, loading과 같은 전역 오버레이 UI를 제어하는 provider */
export function OverlayProvider({ children }: PropsWithChildren) {

  const [alertState, setAlertState] = useState<AlertState>({
    isOpen: false,
    options: null,
    resolve: null
  });

  const [confirmState, setConfirmState] = useState<ConfirmState>({
    isOpen: false,
    options: null,
    resolve: null
  });

  const [loadingState, setLoadingState] = useState<LoadingState>({
    count: 0
  });

  // 스크롤 lock
  const isAnyOverlayOpen =
    alertState.isOpen || confirmState.isOpen || loadingState.count > 0;

  useBodyScrollLock(isAnyOverlayOpen);

  const alert = useCallback((input: AlertOptions | string) => {
    const options: AlertOptions = typeof input === "string" ? { title: input } : input;

    return new Promise<void>((resolve) => {
      setAlertState({ isOpen: true, options, resolve });
    });
  }, []);

  const closeAlert = useCallback(() => {
    setAlertState((prev) => {
      prev.resolve?.();
      return { isOpen: false, options: null, resolve: null };
    });
  }, []);

  const confirm = useCallback((input: ConfirmOptions | string) => {
    const options: ConfirmOptions = typeof input === "string" ? { title: input } : input;

    return new Promise<boolean>((resolve) => {
      setConfirmState({ isOpen: true, options, resolve });
    });
  }, []);

  const handleConfirm = useCallback(() => {
    setConfirmState((prev) => {
      prev.resolve?.(true);
      return { isOpen: false, options: null, resolve: null };
    });
  }, []);

  const handleCancel = useCallback(() => {
    setConfirmState((prev) => {
      prev.resolve?.(false);
      return { isOpen: false, options: null, resolve: null };
    });
  }, []);

  const showLoading = useCallback(() => {
    setLoadingState((prev) => ({
      count: prev.count + 1
    }));
  }, []);

  const hideLoading = useCallback(() => {
    setLoadingState((prev) => {
      const nextCount = Math.max(0, prev.count - 1);

      return { count: nextCount };
    });
  }, []);

  const value = useMemo<OverlayContextValue>(
    () => ({
      alert,
      confirm,
      showLoading,
      hideLoading,
    }),
    [alert, confirm, showLoading, hideLoading]
  );

  return (
    <OverlayContext.Provider value={value}>
      {children}

      <AlertDialog
        open={alertState.isOpen}
        title={alertState.options?.title ?? ""}
        description={alertState.options?.description}
        confirmText={alertState.options?.confirmText}
        onClose={closeAlert}
      />

      <ConfirmDialog
        open={confirmState.isOpen}
        title={confirmState.options?.title ?? ""}
        description={confirmState.options?.description}
        confirmText={confirmState.options?.confirmText}
        cancelText={confirmState.options?.cancelText}
        confirmVariant={confirmState.options?.confirmVariant}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />

      <LoadingOverlay
        open={loadingState.count > 0}
      />
    </OverlayContext.Provider>
  );
}

/** OverlayProvider 범위 내에서만 overlay 상태에 접근 가능 */
export const useOverlay = () => {
  const context = useContext(OverlayContext);
  if (!context) {
    throw new Error("useOverlay must be used within <OverlayProvider />");
  }
  return context;
};