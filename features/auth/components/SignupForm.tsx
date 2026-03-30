"use client";

import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import z from "zod";
import { useRouter } from "next/navigation";
import { useOverlay } from "@/shared/system/overlay/OverlayContext";
import {
  useSendSignupCodeMutation,
  useSignupMutation,
  useVerifySignupCodeMutation
} from "@/features/auth/api/auth.queries";
import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const pageSchema = z.object({
  email: z.string().trim()
    .min(1, { error: "이메일을 입력해주세요." })
    .pipe(z.email({ error: "올바른 이메일 형식이 아닙니다." })),
  code: z.string().trim()
    .min(1, { error: "인증코드를 입력해주세요." }),
  nickname: z.string().trim()
    .min(2, { error: "닉네임은 2자 이상 10자 이하로 입력해주세요." })
    .max(10, { error: "닉네임은 2자 이상 10자 이하로 입력해주세요." }),
  password: z.string()
    .min(8, { error: "비밀번호는 8자 이상 20자 이하로 입력해주세요." })
    .max(20, { error: "비밀번호는 8자 이상 20자 이하로 입력해주세요." }),
  passwordConfirm: z.string(),
  isCodeSent: z.boolean(),
  isCodeVerify: z.boolean()
})
.refine((v) => v.password.length < 8 || v.password === v.passwordConfirm, {
  message: "비밀번호가 일치하지 않습니다.",
  path: ["passwordConfirm"],
});

type PageType = z.infer<typeof pageSchema>;

export default function SignupForm(){

  const router = useRouter();
  const { alert } = useOverlay();

  const { mutateAsync: sendCode } = useSendSignupCodeMutation();
  const { mutateAsync: verifyCode } = useVerifySignupCodeMutation();
  const { mutateAsync: signup } = useSignupMutation();

  const [showPw, setShowPw] = useState(false);
  const [showPwConfirm, setShowPwConfirm] = useState(false);

  const { register, control, handleSubmit, setValue, getValues, trigger, formState: { errors, isValid, isSubmitting } } = useForm<PageType>({
    resolver: zodResolver(pageSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      code: "",
      nickname: "",
      password: "",
      passwordConfirm: "",
      isCodeSent: false,
      isCodeVerify: false,
    },
  });

  // 인증번호 요청 여부
  const isCodeSent = useWatch({ control, name: "isCodeSent" });

  // 인증번호 확인 여부
  const isCodeVerify = useWatch({ control, name: "isCodeVerify" });

  /** 회원가입 인증코드 전송 */
  const handleSendCode = async () => {
    const isValidEmail = await trigger("email");
    if (!isValidEmail) return;

    const { email } = getValues();
    await sendCode({ email });

    await alert({ title: "입력하신 이메일로 인증코드를 전송했습니다." });

    setValue("isCodeSent", true, { shouldValidate: true });
    setValue("isCodeVerify", false, { shouldValidate: true });
  };

  /** 회원가입 인증코드 확인 */
  const handleVerifyCode = async () => {
    const isValid = await trigger(["email", "code"]);
    if (!isValid) return;

    const { email, code } = getValues();
    await verifyCode({ email, code });

    setValue("isCodeVerify", true, { shouldValidate: true });
  };

  /** 회원가입 인증코드 재전송 */
  const handleResendCode = async () => {
    const isValidEmail = await trigger("email");
    if (!isValidEmail) return;

    const { email } = getValues();
    await sendCode({ email });

    await alert({ title: "입력하신 이메일로 인증코드를 전송했습니다." });

    setValue("code", "", { shouldValidate: false });
    setValue("isCodeSent", true, { shouldValidate: true });
    setValue("isCodeVerify", false, { shouldValidate: true });
  };

  /** 회원가입 요청 */
  const onSubmit = async (data: PageType) => {

    if(!isCodeSent || !isCodeVerify){
      await alert({ title: "인증코드 확인을 먼저 진행해주세요." });
      return;
    }

    await signup({
      email: data.email,
      password: data.password,
      passwordConfirm: data.passwordConfirm,
      nickname: data.nickname
    });

    router.replace("/signup/complete");
  };

  return (
    <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-4">
        <div>
          <label className="mb-2 block text-sm font-semibold text-zinc-700">
            이메일
          </label>
          <div className="flex gap-1.5">
            <input
              type="email"
              {...register("email")}
              disabled={isCodeVerify}
              placeholder="이메일을 입력해주세요"
              className={`h-13 min-w-0 flex-1 rounded-md border border-zinc-200 bg-white px-4 text-[15px] text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-violet-500 focus:ring-3 focus:ring-violet-100 ${isCodeVerify ? "bg-zinc-100 text-zinc-400 cursor-not-allowed" : ""}`}
            />
            <button
              type="button"
              onClick={handleSendCode}
              disabled={isCodeSent}
              className={`h-13 shrink-0 whitespace-nowrap rounded-md border px-4 text-sm font-semibold transition active:scale-[0.99] ${isCodeSent ? "cursor-not-allowed border-zinc-200 bg-zinc-100 text-zinc-400" : "border-violet-200 bg-violet-50 text-violet-700"}`}
            >
              {isCodeSent ? "전송 완료" : "코드 전송"}
            </button>
          </div>
          {errors.email && (<p className="mt-2 ml-1 text-xs text-red-500">{errors.email.message}</p>)}
        </div>

        {isCodeSent && (
          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">
              인증코드
            </label>
            <div className="flex gap-1.5">
              <input
                type="text"
                {...register("code")}
                disabled={isCodeVerify}
                placeholder="인증코드를 입력해주세요"
                className={`h-13 min-w-0 flex-1 rounded-md border border-zinc-200 bg-white px-4 text-[15px] text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-violet-500 focus:ring-3 focus:ring-violet-100 ${isCodeVerify ? "bg-zinc-100 text-zinc-400 cursor-not-allowed" : ""}`}
              />
              <button
                type="button"
                onClick={handleVerifyCode}
                disabled={isCodeVerify}
                className={`h-13 shrink-0 whitespace-nowrap rounded-md border px-4 text-sm font-semibold transition active:scale-[0.99] ${isCodeVerify ? "cursor-not-allowed border-zinc-200 bg-zinc-100 text-zinc-400" : "border-zinc-200 bg-white text-zinc-700"}`}
              >
                {isCodeVerify ? "확인 완료" : "인증 확인"}
              </button>
            </div>
            {errors.code && (<p className="mt-2 ml-1 text-xs text-red-500">{errors.code.message}</p>)}

            {!isCodeVerify && (
              <p className="mt-2 mb-6 ml-1 text-xs text-zinc-500">
                인증코드를 받지 못하셨나요?
                <button
                  type="button"
                  onClick={handleResendCode}
                  className="ml-2 font-medium text-violet-600"
                >
                  다시받기
                </button>
              </p>
            )}
          </div>
        )}

        <div>
          <label className="mb-2 block text-sm font-semibold text-zinc-700">
            비밀번호
          </label>

          <div className="relative">
            <input
              type={showPw ? "text" : "password"}
              {...register("password", {deps: ["passwordConfirm"]})}
              placeholder="비밀번호를 입력해주세요"
              maxLength={20}
              className="h-13 w-full rounded-md border border-zinc-200 bg-white px-4 pr-10 text-[15px] text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-violet-500 focus:ring-3 focus:ring-violet-100"
            />
            <button
              type="button"
              onClick={() => setShowPw((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-[55%] text-zinc-400 hover:text-zinc-600"
            >
              {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {errors.password && (<p className="mt-2 ml-1 text-xs text-red-500">{errors.password.message}</p>)}
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-zinc-700">
            비밀번호 확인
          </label>
          <div className="relative">
            <input
              type={showPwConfirm ? "text" : "password"}
              {...register("passwordConfirm")}
              placeholder="비밀번호 확인을 입력해주세요"
              maxLength={20}
              className="h-13 w-full rounded-md border border-zinc-200 bg-white px-4 pr-10 text-[15px] text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-violet-500 focus:ring-3 focus:ring-violet-100"
            />
            <button
              type="button"
              onClick={() => setShowPwConfirm((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-[55%] text-zinc-400 hover:text-zinc-600"
            >
              {showPwConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {errors.passwordConfirm && (<p className="mt-2 ml-1 text-xs text-red-500">{errors.passwordConfirm.message}</p>)}
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-zinc-700">
            닉네임
          </label>
          <input
            type="text"
            {...register("nickname")}
            placeholder="닉네임을 입력해주세요"
            className="h-13 w-full rounded-md border border-zinc-200 bg-white px-4 text-[15px] text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-violet-500 focus:ring-3 focus:ring-violet-100"
          />
          {errors.nickname && (<p className="mt-2 ml-1 text-xs text-red-500">{errors.nickname.message}</p>)}
        </div>
      </div>

      <div className="mt-8 space-y-4 pb-10">
        <button
          type="submit"
          disabled={!isValid || isSubmitting}
          className="flex h-13 w-full items-center justify-center rounded-xl bg-violet-500 text-base font-semibold text-white shadow-[0_10px_24px_rgba(139,92,246,0.22)] transition active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
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
    </form>
  );
}