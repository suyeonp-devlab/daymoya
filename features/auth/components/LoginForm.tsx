"use client";

import { Check } from "lucide-react";
import Link from "next/link";
import z from "zod";
import { useRouter } from "next/navigation";
import { useOverlay } from "@/shared/system/overlay/OverlayContext";
import { useLoginMutation } from "@/features/auth/api/auth.queries";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { appLocalStorage } from "@/shared/utils/storage";
import { ApiError } from "@/shared/api/global.type";
import { getErrorMessage } from "@/shared/utils/string";

const SAVED_EMAIL_KEY = "auth.savedEmail";

const pageSchema = z.object({
  email: z.string().trim()
    .min(1, { error: "이메일을 입력해주세요." })
    .pipe(z.email({ error: "올바른 이메일 형식이 아닙니다." })),
  password: z.string()
    .min(1, { error: "비밀번호를 입력해주세요." }),
});

type PageType = z.infer<typeof pageSchema>;

export default function LoginForm(){

  const router = useRouter();
  const { alert } = useOverlay();

  const { mutateAsync: login } = useLoginMutation();

  const savedEmail = appLocalStorage.get<string>(SAVED_EMAIL_KEY) ?? "";
  const [isRememberEmail, setIsRememberEmail] = useState(Boolean(savedEmail));

  const { register, handleSubmit, formState: { errors, isValid, isSubmitting } } = useForm<PageType>({
    resolver: zodResolver(pageSchema),
    mode: "onChange",
    defaultValues: {
      email: savedEmail,
      password: "",
    },
  });

  /** 아이디 저장 토글 */
  const handleChangeRememberEmail = (checked: boolean) => {
    // 아이디 저장은 로그인 성공 시, 해제는 토글 시 즉시 처리
    setIsRememberEmail(checked);
    if (!checked) appLocalStorage.remove(SAVED_EMAIL_KEY);
  };

  /** 로그인 요청 */
  const onSubmit = async (data: PageType) => {

    // 로그인은 에러 코드별 분기가 필요하여 공통 에러 처리를 사용하지 않음
    try{
      await login({ email: data.email, password: data.password });
      if (isRememberEmail) appLocalStorage.set(SAVED_EMAIL_KEY, data.email);
      router.replace("/app");
    }catch(error){
      const apiError = error as ApiError;

      if(apiError.code === "AUTH-003"){
        await alert({ title: "비밀번호 오류로 로그인이 제한되었습니다.\n비밀번호를 재설정해주세요." });
        router.push("/forgot-password");
        return;
      }

      await alert({title: getErrorMessage(apiError)});
    }
  };

  return (
    <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-4">
        <div>
          <label className="mb-2 block text-sm font-semibold text-zinc-700">
            이메일
          </label>
          <input
            type="email"
            {...register("email")}
            placeholder="이메일을 입력해주세요"
            className="h-13 w-full rounded-md border border-zinc-200 bg-white px-4 text-[15px] text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-violet-500 focus:ring-3 focus:ring-violet-100"
          />
          {errors.email && (<p className="mt-2 ml-1 text-xs text-red-500">{errors.email.message}</p>)}
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-zinc-700">
            비밀번호
          </label>
          <input
            type="password"
            {...register("password")}
            placeholder="비밀번호를 입력해주세요"
            className="h-13 w-full rounded-md border border-zinc-200 bg-white px-4 text-[15px] text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-violet-500 focus:ring-3 focus:ring-violet-100"
          />
          {errors.password && (<p className="mt-2 ml-1 text-xs text-red-500">{errors.password.message}</p>)}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between text-sm text-zinc-500">
        <label className="flex items-center gap-2 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={isRememberEmail}
            onChange={(e) => handleChangeRememberEmail(e.target.checked)}
            className="peer sr-only"
          />
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
          type="submit"
          disabled={!isValid || isSubmitting}
          className="flex h-13 w-full items-center justify-center rounded-xl bg-violet-500 text-base font-semibold text-white shadow-[0_10px_24px_rgba(139,92,246,0.22)] transition active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
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
    </form>
  );
}