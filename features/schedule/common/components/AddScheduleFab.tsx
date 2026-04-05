"use client";

import { Plus } from "lucide-react";

interface AddScheduleFabProps {
  onClick: () => void;
}

export default function AddScheduleFab({ onClick }: AddScheduleFabProps){

  return (
    <button
      type="button"
      onClick={onClick}
      className="fixed right-5 bottom-24 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-violet-500 text-white shadow-[0_10px_24px_rgba(139,92,246,0.28)]"
      aria-label="일정 추가"
    >
      <Plus size={24} />
    </button>
  );
}