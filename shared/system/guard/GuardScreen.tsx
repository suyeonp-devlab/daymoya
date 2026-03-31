import Image from "next/image";

export default function GuardScreen(){

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-violet-600 px-6">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="flex flex-col items-center">
        <Image src="/images/logo-white.png" alt="데이모" width={220} height={65} priority className="select-none" />

        <p className="mt-8 text-base font-medium text-white/90">
          내 일정과 모임 일정을 한곳에서
        </p>

        <div className="mt-14 flex items-center gap-2">
          <span className="loading-dot" />
          <span className="loading-dot" />
          <span className="loading-dot" />
          <span className="loading-dot" />
        </div>
      </div>
    </div>
  );
}