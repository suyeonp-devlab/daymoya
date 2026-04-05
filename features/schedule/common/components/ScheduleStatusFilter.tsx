"use client";

import { CodeItem } from "@/shared/api/global.type";

interface ScheduleStatusFilterProps {
  filters: CodeItem[]
  value: string;
  onChange: (code: string) => void;
}

export default function ScheduleStatusFilter({
  filters,
  value,
  onChange
}: ScheduleStatusFilterProps){

  return (
    <div className="flex justify-end">
      <div className="inline-flex items-center gap-1 rounded-full bg-zinc-100 p-1">
        {filters.map((item) => {

          const selected = item.code === value;

          return (
            <button
              key={item.code}
              type="button"
              onClick={() => onChange(item.code)}
              className={`rounded-full px-3 py-1 text-xs transition-all duration-150 whitespace-nowrap text-zinc-500 ${selected ? "bg-zinc-50 font-semibold shadow-sm" : "font-medium"}`}
            >
              {item.codeName}
            </button>
          );
        })}
      </div>
    </div>
  );
}