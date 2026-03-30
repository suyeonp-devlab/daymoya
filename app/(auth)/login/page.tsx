import AuthHeader from "@/features/auth/components/AuthHeader";
import LoginForm from "@/features/auth/components/LoginForm";

export default function LoginPage(){

  return (
    <div className="min-h-dvh bg-white px-4 py-8">
      <div className="mx-auto w-full max-w-sm pt-14">
        <AuthHeader title="로그인" description="내 일정과 모임 일정을 한곳에서" />
        <LoginForm />
      </div>
    </div>
  );
}