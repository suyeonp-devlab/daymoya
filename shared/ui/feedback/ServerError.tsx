import Link from "next/link";
import Image from "next/image";

export default function ServerError(){

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-white px-6 text-center">
      <Image
        src="/images/server-error.png"
        alt="404"
        className="mb-6 select-none opacity-90"
        width={240}
        height={110}
      />

      <h1 className="text-2xl font-semibold text-zinc-900">
        문제가 발생했어요
      </h1>
      <p className="mt-3 text-sm leading-6 text-zinc-500">
        서비스 이용에 불편을 드려 죄송합니다.<br />
        잠시 후 다시 시도해주세요.
      </p>
      <Link
        href="/app"
        className="mt-8 flex h-12 w-[80%] items-center justify-center rounded-xl bg-violet-500 text-base font-semibold text-white shadow-[0_10px_24px_rgba(139,92,246,0.22)] transition active:scale-[0.99] ">
        홈으로 가기
      </Link>
    </div>
  );
}