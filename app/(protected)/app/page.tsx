// TODO 단순 디자인 반영 > 화면 작업 필요

export default function HomePage() {
  return <div>home</div>
}

//   const hasTodaySchedules = true;
//   const hasUpcomingSchedules = false;
//   const hasGroups = true;
//
//   const todaySchedules = [
//     {
//       id: 1,
//       title: "병원 예약 가기",
//       time: "오전 10:30",
//       type: "개인",
//       color: "bg-violet-500",
//       badgeClass: "bg-violet-50 text-violet-600",
//     },
//     {
//       id: 2,
//       title: "주말 모임 일정 정하기",
//       time: "오후 2:00",
//       type: "함께",
//       color: "bg-emerald-500",
//       badgeClass: "bg-emerald-50 text-emerald-600",
//       members: ["수", "지", "민"],
//       memberColors: ["bg-[#f4b6c2]", "bg-[#a78bfa]", "bg-[#60a5fa]"],
//     },
//   ];
//
//   const upcomingSchedules = [
//     {
//       id: 1,
//       title: "가족 외식",
//       date: "내일 · 오후 6:30",
//       type: "함께",
//       color: "bg-emerald-500",
//       badgeClass: "bg-emerald-50 text-emerald-600",
//     },
//     {
//       id: 2,
//       title: "프로필 사진 바꾸기",
//       date: "금요일 · 오후 8:00",
//       type: "개인",
//       color: "bg-violet-500",
//       badgeClass: "bg-violet-50 text-violet-600",
//     },
//     {
//       id: 3,
//       title: "장보기",
//       date: "토요일 · 오후 3:00",
//       type: "개인",
//       color: "bg-violet-500",
//       badgeClass: "bg-violet-50 text-violet-600",
//     },
//   ];
//
//   const groups = [
//     {
//       id: 1,
//       name: "주말 운동 모임",
//       description: "이번 주 일정 2개 · 미확인 1개",
//     },
//     {
//       id: 2,
//       name: "가족 일정",
//       description: "다가오는 일정 1개 · 완료 3개",
//     },
//   ];
//
//   return (
//     <div className="px-2 text-zinc-900">
//       <div className="mx-auto flex min-h-dvh w-full max-w-md flex-col">
//         <main className="flex-1 pb-4">
//           {/* 요약정보 */}
//           <section className="mt-2">
//             <h2 className="text-lg font-bold tracking-[-0.02em] text-zinc-900">
//               일정 한눈에 보기
//             </h2>
//
//             <div className="mt-2.5 rounded-md bg-violet-50 px-1 py-3.5">
//               <div className="flex items-center justify-between">
//                 <div className="flex flex-1 flex-col items-center">
//                   <p className="text-[11px] font-medium text-violet-500">오늘</p>
//                   <p className="mt-1 text-[18px] font-bold text-violet-900">0</p>
//                 </div>
//
//                 <div className="h-8 w-px bg-violet-200" />
//
//                 <div className="flex flex-1 flex-col items-center">
//                   <p className="text-[11px] font-medium text-violet-500">이번주</p>
//                   <p className="mt-1 text-[18px] font-bold text-violet-900">3</p>
//                 </div>
//
//                 <div className="h-8 w-px bg-violet-200" />
//
//                 <div className="flex flex-1 flex-col items-center">
//                   <p className="text-[11px] font-medium text-violet-500">이번달</p>
//                   <p className="mt-1 text-[18px] font-bold text-violet-900">1</p>
//                 </div>
//               </div>
//             </div>
//           </section>
//
//           {/* 오늘의 일정 */}
//           <section className="mt-8">
//             <h2 className="text-lg font-bold tracking-[-0.02em] text-zinc-900">
//               오늘의 일정
//             </h2>
//
//             {hasTodaySchedules ? (
//               <div className="mt-3 space-y-3">
//                 {todaySchedules.map((schedule) => (
//                   <div
//                     key={schedule.id}
//                     className="rounded-3xl border border-zinc-200 bg-white p-4"
//                   >
//                     <div className="flex items-start gap-3">
//                       <div className={`mt-1 h-3 w-3 rounded-full ${schedule.color}`} />
//                       <div className="flex-1">
//                         <div className="flex items-center justify-between gap-3">
//                           <p className="text-base font-semibold text-zinc-900">
//                             {schedule.title}
//                           </p>
//                           <span
//                             className={`rounded-full px-2.5 py-1 text-xs font-semibold ${schedule.badgeClass}`}
//                           >
//                             {schedule.type}
//                           </span>
//                         </div>
//
//                         <p className="mt-1 text-sm text-zinc-500">{schedule.time}</p>
//
//                         {"members" in schedule && schedule.members && (
//                           <div className="mt-3 flex items-center gap-2">
//                             <div className="flex -space-x-2">
//                               {schedule.members.map((member, index) => (
//                                 <div
//                                   key={`${schedule.id}-${member}`}
//                                   className={`flex h-7 w-7 items-center justify-center rounded-full border-2 border-white text-[11px] font-bold text-white ${schedule.memberColors[index]}`}
//                                 >
//                                   {member}
//                                 </div>
//                               ))}
//                             </div>
//                             <p className="text-xs font-medium text-zinc-500">
//                               {schedule.members.length}명 참여 중
//                             </p>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="mt-3 rounded-[28px] bg-white p-5 text-center shadow-[0_6px_16px_rgba(15,23,42,0.04)] ring-1 ring-zinc-100">
//                 <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-violet-50">
//                   <CalendarDays size={24} className="text-violet-500" />
//                 </div>
//                 <p className="mt-4 text-base font-bold text-zinc-900">
//                   오늘 예정된 일정이 없어요
//                 </p>
//                 <p className="mt-2 text-sm leading-6 text-zinc-500">
//                   해야 할 일이나 약속을 추가하고
//                   <br />
//                   하루를 가볍게 시작해보세요
//                 </p>
//                 <button
//                   type="button"
//                   className="mt-4 inline-flex items-center rounded-full bg-violet-500 px-4 py-2 text-sm font-semibold text-white"
//                 >
//                   <Plus size={16} className="mr-1" />
//                   내 일정 추가
//                 </button>
//               </div>
//             )}
//           </section>
//
//           {/* 다가오는 일정 */}
//           <section className="mt-8">
//             <div className="mb-3 flex items-center justify-between">
//               <h2 className="text-lg font-bold tracking-[-0.02em] text-zinc-900">
//                 다가오는 일정
//               </h2>
//               <button type="button" className="text-sm font-semibold text-violet-500">
//                 전체보기
//               </button>
//             </div>
//
//             {hasUpcomingSchedules ? (
//               <div className="space-y-3">
//                 {upcomingSchedules.map((schedule) => (
//                   <div
//                     key={schedule.id}
//                     className="rounded-3xl border border-zinc-100 bg-white p-4"
//                   >
//                     <div className="flex items-start gap-3">
//                       <div className={`mt-1 h-3 w-3 rounded-full ${schedule.color}`} />
//                       <div className="flex-1">
//                         <div className="flex items-center justify-between gap-3">
//                           <p className="text-base font-semibold text-zinc-900">
//                             {schedule.title}
//                           </p>
//                           <span
//                             className={`rounded-full px-2.5 py-1 text-xs font-semibold ${schedule.badgeClass}`}
//                           >
//                             {schedule.type}
//                           </span>
//                         </div>
//                         <p className="mt-1 text-sm text-zinc-500">{schedule.date}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="rounded-[28px] bg-white p-5 text-center shadow-[0_6px_16px_rgba(15,23,42,0.04)] ring-1 ring-zinc-100">
//                 <p className="text-base font-bold text-zinc-900">등록된 일정이 아직 없어요</p>
//                 <p className="mt-2 text-sm leading-6 text-zinc-500">
//                   이번 주에 필요한 일정을 먼저 기록해보세요
//                 </p>
//               </div>
//             )}
//           </section>
//
//           {/* quick actions */}
//           <section className="mt-8">
//             <div className="grid grid-cols-2 gap-3">
//               <button
//                 type="button"
//                 className="rounded-[28px] bg-white p-4 text-left shadow-[0_6px_18px_rgba(15,23,42,0.05)]"
//               >
//                 <p className="text-sm font-medium text-zinc-500">빠른 추가</p>
//                 <p className="mt-1 text-base font-bold text-zinc-900">내 일정 등록</p>
//                 <p className="mt-2 text-sm leading-5 text-zinc-500">
//                   해야 할 일이나 약속을
//                   <br />
//                   바로 기록해요
//                 </p>
//               </button>
//
//               <button
//                 type="button"
//                 className="rounded-[28px] bg-white p-4 text-left shadow-[0_6px_18px_rgba(15,23,42,0.05)]"
//               >
//                 <p className="text-sm font-medium text-zinc-500">함께 시작</p>
//                 <p className="mt-1 text-base font-bold text-zinc-900">모임 만들기</p>
//                 <p className="mt-2 text-sm leading-5 text-zinc-500">
//                   가족, 친구와 일정을
//                   <br />
//                   함께 관리해보세요
//                 </p>
//               </button>
//             </div>
//           </section>
//
//           {/* groups */}
//           <section className="mt-8">
//             <div className="mb-3 flex items-center justify-between">
//               <h2 className="text-lg font-bold tracking-[-0.02em] text-zinc-900">
//                 내 모임 공간
//               </h2>
//               <button type="button" className="text-sm font-semibold text-violet-500">
//                 더보기
//               </button>
//             </div>
//
//             {hasGroups ? (
//               <div className="space-y-3">
//                 {groups.map((group) => (
//                   <button
//                     key={group.id}
//                     type="button"
//                     className="flex w-full items-center justify-between rounded-[28px] border border-zinc-100 bg-white p-4 text-left"
//                   >
//                     <div>
//                       <p className="text-base font-semibold text-zinc-900">{group.name}</p>
//                       <p className="mt-1 text-sm text-zinc-500">{group.description}</p>
//                     </div>
//                     <div className="rounded-full bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-600">
//                       확인하기
//                     </div>
//                   </button>
//                 ))}
//               </div>
//             ) : (
//               <div className="rounded-[28px] bg-white p-5 text-center shadow-[0_6px_16px_rgba(15,23,42,0.04)] ring-1 ring-zinc-100">
//                 <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
//                   <Users size={24} className="text-emerald-500" />
//                 </div>
//                 <p className="mt-4 text-base font-bold text-zinc-900">
//                   아직 참여 중인 모임이 없어요
//                 </p>
//                 <p className="mt-2 text-sm leading-6 text-zinc-500">
//                   가족, 친구, 소규모 모임과
//                   <br />
//                   일정을 함께 관리해보세요
//                 </p>
//
//                 <div className="mt-4 flex justify-center gap-2">
//                   <button
//                     type="button"
//                     className="rounded-full bg-violet-500 px-4 py-2 text-sm font-semibold text-white"
//                   >
//                     모임 만들기
//                   </button>
//                   <button
//                     type="button"
//                     className="rounded-full bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-600"
//                   >
//                     참여하기
//                   </button>
//                 </div>
//               </div>
//             )}
//           </section>
//
//           {/* support */}
//           <section className="mt-8">
//             <div className="mb-3">
//               <h2 className="text-[15px] font-semibold tracking-tight text-zinc-900">
//                 도움이 필요하신가요?
//               </h2>
//               <p className="mt-1 text-xs text-zinc-500">
//                 자주 찾는 안내를 빠르게 확인해보세요
//               </p>
//             </div>
//
//             <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-zinc-200">
//               <Link
//                 href="/app/support?tab=notice"
//                 className="flex items-center justify-between px-4 py-4 transition active:scale-[0.98]"
//               >
//                 <div className="flex items-center gap-3">
//                   <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-50 ring-1 ring-violet-100">
//                     <Megaphone size={16} className="text-violet-600" />
//                   </div>
//                   <div>
//                     <p className="text-sm font-semibold text-zinc-900">공지사항</p>
//                     <p className="mt-0.5 text-xs text-zinc-500">
//                       새로운 기능과 소식을 확인해보세요
//                     </p>
//                   </div>
//                 </div>
//                 <ChevronRight size={18} className="text-zinc-400" />
//               </Link>
//
//               <div className="mx-4 h-px bg-zinc-200/70" />
//
//               <Link
//                 href="/app/support?tab=faq"
//                 className="flex items-center justify-between px-4 py-4 transition active:scale-[0.98]"
//               >
//                 <div className="flex items-center gap-3">
//                   <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-50 ring-1 ring-violet-100">
//                     <CircleHelp size={16} className="text-violet-600" />
//                   </div>
//                   <div>
//                     <p className="text-sm font-semibold text-zinc-900">자주 묻는 질문</p>
//                     <p className="mt-0.5 text-xs text-zinc-500">
//                       궁금한 내용을 빠르게 찾아보세요
//                     </p>
//                   </div>
//                 </div>
//                 <ChevronRight size={18} className="text-zinc-400" />
//               </Link>
//             </div>
//           </section>
//         </main>
//       </div>
//     </div>
//   );
// }