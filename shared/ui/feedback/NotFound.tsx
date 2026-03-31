import Link from "next/link";
import Image from "next/image";

export default function NotFound(){

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-white px-6 text-center">
      <Image
        src="/images/not-found.png"
        alt="404"
        className="mb-6 select-none opacity-90"
        width={240}
        height={110}
      />

      <h1 className="text-2xl font-semibold text-zinc-900">
        페이지를 찾을 수 없어요
      </h1>
      <p className="mt-3 text-sm leading-6 text-zinc-500">
        요청하신 페이지를 찾을 수 없어요.<br />
        경로를 다시 확인해주세요.
      </p>
      <Link
        href="/app"
        className="mt-8 flex h-12 w-[80%] items-center justify-center rounded-xl bg-violet-500 text-base font-semibold text-white shadow-[0_10px_24px_rgba(139,92,246,0.22)] transition active:scale-[0.99] ">
        홈으로 가기
      </Link>
    </div>
  );
}