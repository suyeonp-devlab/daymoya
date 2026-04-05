"use client";

import { ChevronRight, X } from "lucide-react";
import { useBodyScrollLock } from "@/shared/system/overlay/useBodyScrollLock";
import { PersonalSpaceItem } from "@/features/schedule/personal/api/personal.type";
import { getSpaceBgColor } from "@/features/schedule/common/lib/schedule.util";

interface PersonalSpaceSelectorModalProps {
  open: boolean;
  spaces: PersonalSpaceItem[];
  value: number;
  onClose: () => void;
  onChange: (scheduleSpaceId: number) => void;
  onManage: () => void;
}

export default function PersonalSpaceSelectorModal({
  open,
  spaces,
  value,
  onClose,
  onChange,
  onManage,
}: PersonalSpaceSelectorModalProps) {

  // 선택된 space 최상단 고정
  const visibleSpaces = [...spaces]
    .sort((a, b) => Number(b.scheduleSpaceId === value) - Number(a.scheduleSpaceId === value))

  // 스크롤 lock
  useBodyScrollLock(open);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-100">
      <button
        type="button"
        aria-label="닫기"
        onClick={onClose}
        className="absolute inset-0 bg-black/35 backdrop-blur-[2px]"
      />

      <div className="absolute inset-0 flex items-center justify-center px-4 pointer-events-none">
        <div className="relative w-full max-w-sm pointer-events-auto rounded-[28px] bg-white px-5 pb-5 pt-7 shadow-[0_24px_64px_rgba(15,23,42,0.18)]">
          {/*Header*/}
          <div className="flex items-center justify-between px-1">
            <h3 className="text-[17px] font-semibold tracking-[-0.03em] text-zinc-900">
              일정 공간
            </h3>

            <button
              type="button"
              aria-label="닫기"
              onClick={onClose}
              className="text-zinc-400 transition active:scale-[0.97]"
            >
              <X size={22} />
            </button>
          </div>

          <p className="mt-2 text-sm leading-5 text-zinc-500 px-1">
            확인할 일정 공간을 선택해 주세요.
          </p>

          {/*Body*/}
          <div className="mt-5 flex max-h-80 flex-col">
            <div className="flex-1 space-y-2 overflow-y-auto pr-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {visibleSpaces.map((s) => {

                const selected = s.scheduleSpaceId === value;

                return (
                  <button
                    key={s.scheduleSpaceId}
                    type="button"
                    onClick={() => {onChange(s.scheduleSpaceId); onClose();}}
                    className={`flex w-full items-start gap-3 rounded-md border px-4 py-3 text-left transition ${selected ? "border-violet-400 bg-violet-100" : "border-zinc-200 bg-zinc-50"}`}
                  >
                    <span className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${getSpaceBgColor(s.spaceColor ?? "") ?? "bg-zinc-300"}`} />

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-zinc-900">
                        {s.name}
                      </p>

                      {s.description && (
                        <p className="mt-1 truncate text-sm leading-5 text-zinc-500">
                          {s.description}
                        </p>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/*Footer*/}
          <div className="mt-5">
            <button
              type="button"
              onClick={onManage}
              className="flex w-full items-center justify-between rounded-md bg-zinc-100 px-4 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200/70 active:scale-[0.99]"
            >
              <span>일정 공간 관리</span>
              <ChevronRight size={16} className="text-zinc-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}