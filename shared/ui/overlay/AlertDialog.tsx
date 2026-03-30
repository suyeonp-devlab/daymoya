import { AlertOptions } from "@/shared/system/overlay/overlay.type";

interface AlertDialogProps extends AlertOptions {
  open: boolean;
  onClose: () => void;
}

export default function AlertDialog({
  open,
  title,
  description,
  confirmText = "확인",
  onClose
}: AlertDialogProps) {

  const isSimple = !description;

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-zinc-950/30 px-5 backdrop-blur-[3px]">
      <div className={`w-full max-w-sm rounded-2xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)] ${isSimple ? "px-6 py-7" : "px-6 py-6"}`}>
        <div className="text-center">
          <h2 className={`tracking-[-0.03em] whitespace-pre-line ${isSimple ? "text-[15px] font-medium text-zinc-800" : "text-[17px] font-semibold text-zinc-900"}`}>
            {title}
          </h2>

          {description && (
            <p className="mt-3 whitespace-pre-line text-sm leading-6 text-zinc-500">
              {description}
            </p>
          )}
        </div>

        <button
          type="button"
          onClick={onClose}
          className={`inline-flex w-full items-center justify-center rounded-xl bg-zinc-800 px-4 text-sm font-semibold text-white transition hover:bg-zinc-800 active:scale-[0.98] mt-6 ${isSimple ? "py-3" : "py-3.5"}`}
        >
          {confirmText}
        </button>
      </div>
    </div>
  );
}