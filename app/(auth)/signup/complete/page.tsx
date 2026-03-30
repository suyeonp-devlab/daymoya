import { Check } from "lucide-react";
import Link from "next/link";

export default function SignupCompletePage() {

  return (
    <div className="flex min-h-dvh items-center justify-center bg-white px-4 py-8">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-violet-100 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-600 text-white">
              <Check className="h-7 w-7" strokeWidth={3.5} />
            </div>
          </div>

          <h1 className="mt-8 text-[28px] font-bold tracking-[-0.03em] text-zinc-900">
            회원가입이 완료되었어요
          </h1>
        </div>

        <div className="mt-6 rounded-3xl border border-violet-100 bg-white p-5 shadow-[0_12px_40px_rgba(139,92,246,0.08)]">
          <p className="text-center text-sm leading-6 text-zinc-500">
            내 일정은 가볍게 기록하고,<br />
            함께하는 일정은 더 편하게 확인해보세요.
          </p>
        </div>

        <Link href="/login" className="mt-8 flex h-14 w-full items-center justify-center rounded-xl bg-violet-600 text-base font-semibold text-white shadow-[0_10px_24px_rgba(124,58,237,0.28)] transition hover:bg-violet-700">
          로그인하러 가기
        </Link>
      </div>
    </div>
  );
}