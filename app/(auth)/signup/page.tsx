import AuthHeader from "@/features/auth/components/AuthHeader";
import SignupForm from "@/features/auth/components/SignupForm";

export default function SignupPage() {

  return (
    <div className="min-h-dvh px-4 py-8">
      <div className="mx-auto w-full max-w-sm pt-10">
        <AuthHeader title="회원가입" description="계정을 만들고 바로 시작해보세요" />
        <SignupForm />
      </div>
    </div>
  );
}