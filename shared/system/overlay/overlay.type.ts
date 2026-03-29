export interface AlertOptions {
  title: string;
  description?: string;
  confirmText?: string;
}

export interface AlertState {
  isOpen: boolean;
  options: AlertOptions | null;
  resolve: (() => void) | null;
}

export interface ConfirmOptions {
  title: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  confirmVariant?: "default" | "danger";
}

export interface ConfirmState {
  isOpen: boolean;
  options: ConfirmOptions | null;
  resolve: ((value: boolean) => void) | null;
}

export interface LoadingState {
  count: number;
}