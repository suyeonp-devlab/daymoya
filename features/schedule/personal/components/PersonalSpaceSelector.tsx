"use client";

import { PersonalSpaceItem } from "@/features/schedule/personal/api/personal.type";

interface PersonalSpaceSelectorProps {
  selected: PersonalSpaceItem | null;
  onClick: () => void;
}

export default function PersonalSpaceSelector({
  selected,
  onClick,
}: PersonalSpaceSelectorProps){

  if(!selected) return null;

  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center justify-center px-2 py-2 active:opacity-60"
    >
      <div className="relative max-w-[90%]">
        <span className="block truncate text-center text-base font-semibold text-zinc-900">
          {selected.name}
        </span>
        <span className="pointer-events-none absolute -left-2 -bottom-1 h-px w-[calc(100%+16px)] rounded-full bg-zinc-300" />
      </div>
    </button>
  );
}