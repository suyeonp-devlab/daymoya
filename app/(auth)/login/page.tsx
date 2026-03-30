import Link from "next/link";
import { Check } from "lucide-react";
import AuthHeader from "@/features/auth/components/AuthHeader";

export default function LoginPage(){

  return (
    <div className="min-h-dvh bg-white px-4 py-8">
      <div className="mx-auto w-full max-w-sm pt-14">
        <AuthHeader title="로그인" description="내 일정과 모임 일정을 한곳에서" />

        <div className="mt-10 space-y-4">
          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">
              이메일
            </label>
            <input
              type="email"
              placeholder="이메일을 입력해주세요"
              className="h-13 w-full rounded-md border border-zinc-200 bg-white px-4 text-[15px] text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-violet-500 focus:ring-3 focus:ring-violet-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">
              비밀번호
            </label>
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              className="h-13 w-full rounded-md border border-zinc-200 bg-white px-4 text-[15px] text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-violet-500 focus:ring-3 focus:ring-violet-100"
            />
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between text-sm text-zinc-500">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input type="checkbox" className="peer sr-only" />
            <div className="flex h-5 w-5 items-center justify-center rounded border border-zinc-300 text-transparent transition-colors relative peer-checked:border-violet-600 peer-checked:bg-violet-600 peer-checked:text-white">
              <Check size={12} strokeWidth={4} />
            </div>
            <span>아이디 저장</span>
          </label>

          <Link href="/forgot-password">
            비밀번호 찾기
          </Link>
        </div>

        <div className="mt-8 space-y-4">
          <button
            type="button"
            className="flex h-13 w-full items-center justify-center rounded-xl bg-violet-500 text-base font-semibold text-white shadow-[0_10px_24px_rgba(139,92,246,0.22)] transition active:scale-[0.99]"
          >
            로그인
          </button>

          <p className="text-center text-sm text-zinc-500">
            회원이 아니신가요?
            <Link href="/signup" className="font-medium text-violet-600 pl-2">
              회원가입
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}