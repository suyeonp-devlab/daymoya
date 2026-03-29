export default function LoginPage(){
  return <div>로그인 페이지</div>
}


// "use client";
//
// import {useLoginMutation} from "@/features/auth/api/auth.queries";
//
// export default function LoginPage(){
//
//   const loginMutation = useLoginMutation();
//
//   const test = () => {
//
//     loginMutation.mutate({
//       email: "test@example.com",
//       password: "pw_test_1234!",
//     }, {
//       onSuccess: () => {
//         alert("aaa");
//       },
//     })
//   }
//   return (
//     <div className="min-h-dvh bg-white px-6 py-8">
//       <div className="mx-auto flex min-h-[calc(100dvh-4rem)] w-full max-w-sm flex-col justify-center">
//         <div>
//           <p className="text-sm font-semibold text-violet-600" onClick={test}>
//             DAYMOYA
//           </p>
//
//           <h1 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.03em] text-zinc-900">
//             함께 보는 일정을
//             <br />
//             <span className="text-violet-600">시작해볼까요?</span>
//           </h1>
//
//           <p className="mt-4 text-sm leading-6 text-zinc-500">
//             로그인하고 내 일정과
//             <br />
//             함께 확인할 스케줄을 이어보세요
//           </p>
//         </div>
//
//         <div className="mt-10 space-y-4">
//           <div>
//             <label className="mb-2 block text-sm font-semibold text-zinc-700">
//               이메일
//             </label>
//             <input
//               type="email"
//               placeholder="이메일을 입력해주세요"
//               className="h-13 w-full rounded-xl border border-zinc-200 bg-white px-4 text-[15px] text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
//             />
//           </div>
//
//           <div>
//             <label className="mb-2 block text-sm font-semibold text-zinc-700">
//               비밀번호
//             </label>
//             <input
//               type="password"
//               placeholder="비밀번호를 입력해주세요"
//               className="h-13 w-full rounded-xl border border-zinc-200 bg-white px-4 text-[15px] text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
//             />
//           </div>
//         </div>
//
//         <div className="mt-4 flex items-center justify-between text-sm">
//           <button
//             type="button"
//             className="font-medium text-zinc-500"
//           >
//             아이디 저장
//           </button>
//
//           <a href="/forgot-password" className="font-medium text-violet-600">
//             비밀번호 찾기
//           </a>
//         </div>
//
//         <div className="mt-8 space-y-3">
//           <button
//             type="button"
//             className="flex h-13 w-full items-center justify-center rounded-xl bg-violet-500 text-base font-semibold text-white shadow-[0_10px_24px_rgba(139,92,246,0.22)] transition active:scale-[0.99]"
//           >
//             로그인
//           </button>
//
//           <a
//             href="/signup"
//             className="flex h-13 w-full items-center justify-center rounded-xl border border-violet-100 bg-violet-50 text-base font-semibold text-violet-700 transition active:scale-[0.99]"
//           >
//             회원가입
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }