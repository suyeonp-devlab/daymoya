"use client";

import PersonalSpaceSelector from "@/features/schedule/personal/components/PersonalSpaceSelector";
import ScheduleStatusFilter from "@/features/schedule/common/components/ScheduleStatusFilter";
import MonthlyCalendar from "@/features/schedule/common/components/MonthlyCalendar";
import PersonalScheduleSection from "@/features/schedule/personal/components/PersonalScheduleSection";
import AddScheduleFab from "@/features/schedule/common/components/AddScheduleFab";
import { useGetCodeQuery } from "@/shared/api/global.queries";
import { useState } from "react";
import { useFindMyPersonalSpacesQuery } from "@/features/schedule/personal/api/personal.queries";
import PersonalSpaceSelectorModal from "@/features/schedule/personal/components/PersonalSpaceSelectorModal";
import { useRouter } from "next/navigation";

export default function PersonalClientPage(){

  const router = useRouter();

  // 검색조건
  const [pageForm, setPageForm] = useState({ scheduleSpaceId: 0, statusCode: "" })

  // 스케줄 공간 선택 시트 오픈 여부
  const [isSpaceSheetOpen, setIsSpaceSheetOpen] = useState(false);

  // 스케줄 상태 필터
  const { data: statusData } = useGetCodeQuery(
    { grpCodeId: "SCHEDULE_STATUS" },
    { select: (data) =>
        ({...data, codes: [{ code: "", codeName: "전체", sortOrder: 0 }, ...data.codes]})
    });

  // 스케줄 공간 필터
  const { data: spaceData } = useFindMyPersonalSpacesQuery(
    { select: (data) =>
      [{ scheduleSpaceId: 0, name: "전체 일정" }, ...data]
    });

  // 스케줄 공간 변경
  const changeScheduleSpace = (scheduleSpaceId: number) => {
    setPageForm((prev) => ({ ...prev, scheduleSpaceId }));
    setIsSpaceSheetOpen(false);
  };

  return (
    <div className="text-zinc-900">
      <section className="-mt-1 space-y-4">
        {/*현재 스케줄 공간*/}
        <PersonalSpaceSelector
          selected={spaceData?.find(s => s.scheduleSpaceId === pageForm.scheduleSpaceId) ?? null}
          onClick={() => setIsSpaceSheetOpen(true)}
        />
        {/*스케줄 상태 필터*/}
        <ScheduleStatusFilter
          filters={statusData?.codes ?? []}
          value={pageForm.statusCode}
          onChange={statusCode => setPageForm((prev) => ({...prev, statusCode}))}
        />
      </section>

      {/*스케줄 달력*/}
      <MonthlyCalendar/>

      {/*선택날짜 스케줄 목록*/}
      <PersonalScheduleSection/>

      {/*스케줄 등록 Fab*/}
      <AddScheduleFab onClick={() => router.push("/app/schedule/personal/create")}/>

      {/*스케줄 공간 선택 모달*/}
      <PersonalSpaceSelectorModal
        open={isSpaceSheetOpen}
        spaces={spaceData ?? []}
        value={pageForm.scheduleSpaceId}
        onClose={() => setIsSpaceSheetOpen(false)}
        onChange={changeScheduleSpace}
        onManage={() => router.push("/app/schedule/personal/space")}
      />
    </div>
  );
}