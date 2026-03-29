interface LoadingProps {
  open: boolean;
}

export default function LoadingOverlay({ open }: LoadingProps) {

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-110 flex items-center justify-center bg-zinc-950/30 backdrop-blur-[3px]">
      <div className="h-10 w-10 animate-spin rounded-full border-[6px] border-zinc-200 border-t-violet-500" />
    </div>
  );
}