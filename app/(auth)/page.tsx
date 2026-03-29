import Image from "next/image";
import Link from "next/link";

export default function IntroPage() {

  return (
    <div className="min-h-dvh py-4 flex flex-col justify-between">
      <section className="flex flex-1 flex-col items-center justify-center text-center">
        <Image src="/images/logo.png" alt="데이모야 로고" width={200} height={65} />

        <h1 className="mt-10 text-2xl font-bold leading-tight tracking-[-0.03em] text-zinc-700">
          <span className="block text-animate-line-1">
            일정을 <span className="text-violet-600">기록</span>하고
          </span>
          <span className="block mt-3 text-animate-line-2">
            필요한 순간 함께 <span className="text-violet-600">확인</span>해요
          </span>
        </h1>
      </section>

      <section className="pb-12 self-center">
        <div className="space-y-3">
          <Link href="/login" className="flex h-12 w-80 items-center justify-center rounded-md bg-violet-500 text-base font-semibold text-white active:scale-[0.99]">
            로그인
          </Link>

          <Link href="/signup" className="flex h-12 w-80 items-center justify-center rounded-md border border-zinc-300 bg-white text-base font-semibold text-zinc-900 active:scale-[0.99]">
            회원가입
          </Link>
        </div>
      </section>
    </div>
  );
}