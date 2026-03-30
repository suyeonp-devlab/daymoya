import AuthHeader from "@/features/auth/components/AuthHeader";
import ForgotPasswordForm from "@/features/auth/components/ForgotPasswordForm";

export default function ForgotPasswordPage() {

  return (
    <div className="min-h-dvh bg-white px-4 py-8">
      <div className="mx-auto w-full max-w-sm pt-10">
        <AuthHeader title="비밀번호 찾기" description="이메일 인증 후 새 비밀번호를 설정해주세요" />
        <ForgotPasswordForm />
      </div>
    </div>
  );
}