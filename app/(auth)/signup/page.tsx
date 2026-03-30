import Link from "next/link";
import AuthHeader from "@/features/auth/components/AuthHeader";
import {EyeOff} from "lucide-react";

export default function SignupPage() {
  return (
    <div className="min-h-dvh bg-white px-4 py-8">
      <div className="mx-auto w-full max-w-sm pt-10">
        <AuthHeader title="회원가입" description="계정을 만들고 바로 시작해보세요" />

        <div className="mt-10 space-y-4">
          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">
              이메일
            </label>
            <div className="flex gap-1.5">
              <input
                type="email"
                placeholder="이메일을 입력해주세요"
                className="h-13 min-w-0 flex-1 rounded-md border border-zinc-200 bg-white px-4 text-[15px] text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-violet-500 focus:ring-3 focus:ring-violet-100"
              />
              <button
                type="button"
                className="h-13 shrink-0 whitespace-nowrap rounded-md border border-violet-200 bg-violet-50 px-4 text-sm font-semibold text-violet-700 transition active:scale-[0.99]"
              >
                코드 전송
              </button>
            </div>
          </div>

          {/*<div>*/}
          {/*  <label className="mb-2 block text-sm font-semibold text-zinc-700">*/}
          {/*    인증코드*/}
          {/*  </label>*/}
          {/*  <div className="flex gap-1.5">*/}
          {/*    <input*/}
          {/*      type="text"*/}
          {/*      placeholder="인증코드를 입력해주세요"*/}
          {/*      className="h-13 min-w-0 flex-1 rounded-md border border-zinc-200 bg-white px-4 text-[15px] text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-violet-500 focus:ring-3 focus:ring-violet-100"*/}
          {/*    />*/}
          {/*    <button*/}
          {/*      type="button"*/}
          {/*      className="h-13 shrink-0 whitespace-nowrap rounded-md border border-zinc-200 bg-white px-4 text-sm font-semibold text-zinc-700 transition active:scale-[0.99]"*/}
          {/*    >*/}
          {/*      인증 확인*/}
          {/*    </button>*/}
          {/*  </div>*/}

          {/*  <p className="mt-2 mb-6 ml-1 text-xs text-zinc-500">*/}
          {/*    인증코드를 받지 못하셨나요?*/}
          {/*    <button*/}
          {/*      type="button"*/}
          {/*      className="ml-2 font-medium text-violet-600"*/}
          {/*    >*/}
          {/*      다시받기*/}
          {/*    </button>*/}
          {/*  </p>*/}
          {/*</div>*/}

          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">
              비밀번호
            </label>

            <div className="relative">
              <input
                type="password"
                placeholder="비밀번호를 입력해주세요"
                className="h-13 w-full rounded-md border border-zinc-200 bg-white px-4 pr-10 text-[15px] text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-violet-500 focus:ring-3 focus:ring-violet-100"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-[55%] text-zinc-400 hover:text-zinc-600"
              >
                <EyeOff size={18} />
              </button>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">
              비밀번호 확인
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="비밀번호 확인을 입력해주세요"
                className="h-13 w-full rounded-md border border-zinc-200 bg-white px-4 pr-10 text-[15px] text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-violet-500 focus:ring-3 focus:ring-violet-100"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-[55%] text-zinc-400 hover:text-zinc-600"
              >
                <EyeOff size={18} />
              </button>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">
              닉네임
            </label>
            <input
              type="text"
              placeholder="닉네임을 입력해주세요"
              className="h-13 w-full rounded-md border border-zinc-200 bg-white px-4 text-[15px] text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-violet-500 focus:ring-3 focus:ring-violet-100"
            />
          </div>
        </div>

        <div className="mt-8 space-y-4 pb-10">
          <button
            type="button"
            className="flex h-13 w-full items-center justify-center rounded-xl bg-violet-500 text-base font-semibold text-white shadow-[0_10px_24px_rgba(139,92,246,0.22)] transition active:scale-[0.99]"
          >
            회원가입
          </button>

          <p className="text-center text-sm text-zinc-500">
            이미 회원이신가요?
            <Link href="/login" className="font-medium text-violet-600 pl-2">
              로그인
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}