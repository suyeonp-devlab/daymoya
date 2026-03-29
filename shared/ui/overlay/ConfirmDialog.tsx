import { ConfirmOptions } from "@/shared/system/overlay/overlay.type";

interface ConfirmDialogProps extends ConfirmOptions {
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmDialog({
  open,
  title,
  description,
  confirmText = "확인",
  cancelText = "취소",
  confirmVariant = "default",
  onConfirm,
  onCancel
}: ConfirmDialogProps) {

  const isSimple = !description;

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-zinc-950/30 px-5 backdrop-blur-[3px]">
      <div className={`w-full max-w-sm rounded-2xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)] ${isSimple ? "px-6 py-7" : "px-6 py-6"}`}>
        <div className="text-center">
          <h2 className={`tracking-[-0.03em] ${isSimple ? "text-[15px] font-medium text-zinc-800" : "text-[17px] font-semibold text-zinc-900"}`}>
            {title}
          </h2>

          {description && (
            <p className="mt-3 whitespace-pre-line text-sm leading-6 text-zinc-500">
              {description}
            </p>
          )}
        </div>

        <div className="flex gap-2.5 mt-6">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 rounded-xl bg-zinc-100 px-4 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-200 active:scale-[0.98] py-3.5"
          >
            {cancelText}
          </button>

          <button
            type="button"
            onClick={onConfirm}
            className={`flex-1 rounded-xl px-4 text-sm font-semibold text-white transition active:scale-[0.98] py-3.5 ${confirmVariant === "danger" ? "bg-red-600 hover:bg-red-700" : "bg-zinc-900 hover:bg-zinc-800"} `}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}