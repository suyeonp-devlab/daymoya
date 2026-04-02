import {Check, ChevronLeft, ChevronRight, MoreHorizontal, MoreVertical, Plus} from "lucide-react";
import LayoutConfig from "@/shared/system/layout/LayoutConfig";

// TODO 단순 디자인 반영 > 화면 작업 필요

export default function PersonalPage() {
  const selectedSpace = "기본 일정기본 일정기본 일정기본 일정기본 일정기본 일정기본 일정기본 일정기본 일정기본 일정기본 일정기본 일정";
  const selectedDateLabel = "4월 12일 토요일";

  const schedules = [
    {
      id: 1,
      title: "병원 예약 가기",
      time: "오전 10:30",
      space: "개인 일정",
      dotColor: "bg-violet-500",
      badgeClass: "bg-violet-50 text-violet-600 border border-violet-100",
    },
    {
      id: 2,
      title: "상체 운동",
      time: "오후 2:00",
      space: "운동 루틴",
      dotColor: "bg-emerald-500",
      badgeClass: "bg-emerald-50 text-emerald-600 border border-emerald-100",
    },
    {
      id: 3,
      title: "토익 단어 정리",
      time: "오후 8:00",
      space: "공부 계획",
      dotColor: "bg-sky-500",
      badgeClass: "bg-sky-50 text-sky-600 border border-sky-100",
    },
  ];

  const weekDays = ["일", "월", "화", "수", "목", "금", "토"];

  const days = [
    { day: "", muted: true },
    { day: "", muted: true },
    { day: "", muted: true },
    { day: "", muted: true },
    { day: "", muted: true },
    { day: 1 },
    { day: 2 },

    { day: 3 },
    { day: 4 },
    { day: 5, dots: ["bg-violet-500"] },
    { day: 6 },
    { day: 7 },
    { day: 8 },
    { day: 9, dots: ["bg-emerald-500"] },

    { day: 10 },
    { day: 11 },
    { day: 12, selected: true, dots: ["bg-violet-500", "bg-emerald-500", "bg-sky-500"] },
    { day: 13 },
    { day: 14 },
    { day: 15, dots: ["bg-violet-500"] },
    { day: 16 },

    { day: 17 },
    { day: 18 },
    { day: 19 },
    { day: 20, dots: ["bg-sky-500"] },
    { day: 21 },
    { day: 22 },
    { day: 23 },

    { day: 24 },
    { day: 25, dots: ["bg-emerald-500", "bg-violet-500"] },
    { day: 26 },
    { day: 27 },
    { day: 28 },
    { day: 29 },
    { day: 30 },
  ];


  const isSpaceSheetOpen = false;

  const spaces = [
    "전체 일정",
    "개인 일정 개인 일정 개인 일정 개인 일정",
    "운동 루틴",
    "공부 계획",
    "주말 약속",
  ];

  return (
<>
  <LayoutConfig navIcon="personal" />

  <div className="text-zinc-900">
    <div className="mx-auto flex min-h-dvh w-full max-w-md flex-col">
      <main className="flex-1 pb-4 pt-2">
        {/* 상단 공간 선택 */}
        {/* 상단 필터 */}
        <section className="mt-1 space-y-2">
          {/* 공간 필터 */}
          <button
            type="button"
            className="flex w-full items-center justify-center px-2 py-2 active:opacity-60"
          >
            <div className="relative max-w-[90%]">
    <span className="block truncate text-center text-base font-semibold text-zinc-900">
      {selectedSpace}
    </span>

              <span className="pointer-events-none absolute -left-2 -bottom-1 h-px w-[calc(100%+16px)] rounded-full bg-zinc-300" />
            </div>
          </button>

          {/* 바텀시트 예시 */}
          {isSpaceSheetOpen && (
            <>
              <div className="fixed inset-0 z-40 bg-black/30" />

              <div className="fixed inset-x-0 bottom-0 z-50 mx-auto w-full max-w-md rounded-t-[28px] bg-white px-5 pb-8 pt-3 shadow-[0_-12px_40px_rgba(0,0,0,0.12)]">
                {/* 핸들 */}
                <div className="mx-auto h-1.5 w-12 rounded-full bg-zinc-200" />

                {/* 헤더 */}
                <div className="mt-5 flex items-center justify-between">
                  <h3 className="text-lg font-bold tracking-[-0.02em] text-zinc-900">
                    일정 공간 선택
                  </h3>
                  <button
                    type="button"
                    className="text-sm font-medium text-zinc-400"
                  >
                    닫기
                  </button>
                </div>

                {/* 공간 리스트 */}
                <div className="mt-5 space-y-2">
                  {spaces.map((space) => {
                    const selected = space === selectedSpace;

                    return (
                      <button
                        key={space}
                        type="button"
                        className={[
                          "flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left transition",
                          selected
                            ? "bg-violet-50 text-violet-700"
                            : "bg-zinc-50 text-zinc-800",
                        ].join(" ")}
                      >
                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold">{space}</p>
                        </div>

                        {selected && <Check size={18} className="shrink-0" />}
                      </button>
                    );
                  })}
                </div>

                {/* 관리 버튼 */}
                <button
                  type="button"
                  className="mt-4 flex w-full items-center justify-center rounded-2xl border border-dashed border-zinc-300 px-4 py-3 text-sm font-semibold text-zinc-600"
                >
                  일정 공간 관리
                </button>
              </div>
            </>
          )}

          {/* 상태 필터 */}
          <div className="flex justify-end">
            <div className="inline-flex items-center gap-1 rounded-full bg-zinc-100 py-1 px-1.5">
              <button
                type="button"
                className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-zinc-900 shadow-sm"
              >
                전체
              </button>
              <button
                type="button"
                className="rounded-full px-3 py-1 text-xs font-medium text-zinc-500"
              >
                진행중
              </button>
              <button
                type="button"
                className="rounded-full px-3 py-1 text-xs font-medium text-zinc-500"
              >
                완료
              </button>
              <button
                type="button"
                className="rounded-full px-3 py-1 text-xs font-medium text-zinc-500"
              >
                지연
              </button>
            </div>
          </div>
        </section>

        {/* 달력 */}
        <section className="mt-4 rounded-3xl border border-zinc-200 bg-white px-4 py-4">
          {/* month header */}
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-50 text-zinc-600"
            >
              <ChevronLeft size={18} />
            </button>

            <h2 className="text-lg font-bold tracking-[-0.02em] text-zinc-900">
              2026년 4월
            </h2>

            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-50 text-zinc-600"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* weekday */}
          <div className="mt-5 grid grid-cols-7 text-center">
            {weekDays.map((day) => (
              <div
                key={day}
                className={`text-[12px] font-semibold ${
                  day === "일"
                    ? "text-rose-400"
                    : day === "토"
                      ? "text-sky-500"
                      : "text-zinc-400"
                }`}
              >
                {day}
              </div>
            ))}
          </div>

          {/* calendar body */}
          <div className="mt-3 grid grid-cols-7 gap-y-3 text-center">
            {days.map((item, index) => {
              const isEmpty = item.day === "";
              const isSelected = Boolean(item.selected);

              return (
                <div key={`${item.day}-${index}`} className="flex flex-col items-center">
                  <button
                    type="button"
                    className={[
                      "flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition",
                      isEmpty
                        ? "pointer-events-none text-transparent"
                        : isSelected
                          ? "bg-violet-500 font-bold text-white"
                          : "text-zinc-800",
                    ].join(" ")}
                  >
                    {item.day}
                  </button>

                  <div className="mt-1 flex h-2 items-center justify-center gap-1">
                    {!isEmpty &&
                      item.dots?.slice(0, 3).map((dot, dotIndex) => (
                        <span
                          key={`${item.day}-dot-${dotIndex}`}
                          className={`h-1.5 w-1.5 rounded-full ${dot}`}
                        />
                      ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 선택 날짜 헤더 */}
        <section className="mt-7">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="text-lg font-bold tracking-[-0.02em] text-zinc-900">
                {selectedDateLabel}
              </h3>
              <p className="mt-1 text-sm text-zinc-500">일정 3개</p>
            </div>

            <button
              type="button"
              className="text-sm font-semibold text-violet-500"
            >
              오늘로 이동
            </button>
          </div>
        </section>

        {/* 일정 리스트 */}
        <section className="mt-3 space-y-3">
          {schedules.map((schedule) => (
            <button
              key={schedule.id}
              type="button"
              className="w-full rounded-3xl border border-zinc-200 bg-white p-4 text-left"
            >
              <div className="flex items-start gap-3">
                <div className={`mt-1 h-3 w-3 rounded-full ${schedule.dotColor}`} />

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <p className="truncate text-base font-semibold text-zinc-900">
                      {schedule.title}
                    </p>
                    <span
                      className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold ${schedule.badgeClass}`}
                    >
                        {schedule.space}
                      </span>
                  </div>

                  <p className="mt-1 text-sm text-zinc-500">{schedule.time}</p>
                </div>
              </div>
            </button>
          ))}
        </section>

        {/* 공간 관리 진입 */}
        <section className="mt-8">
          <button
            type="button"
            className="flex w-full items-center justify-between rounded-2xl border border-dashed border-zinc-300 bg-white px-4 py-3 text-left"
          >
            <div>
              <p className="text-sm font-semibold text-zinc-900">일정 공간 관리</p>
              <p className="mt-1 text-xs text-zinc-500">
                공간 추가, 이름 변경, 삭제, 일정 이동
              </p>
            </div>
            <ChevronRight size={18} className="text-zinc-400" />
          </button>
        </section>
      </main>

      {/* fab */}
      <button
        type="button"
        className="fixed right-5 bottom-24 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-violet-500 text-white shadow-[0_10px_24px_rgba(139,92,246,0.28)]"
        aria-label="일정 추가"
      >
        <Plus size={24} />
      </button>
    </div>
  </div>
</>


  );
}