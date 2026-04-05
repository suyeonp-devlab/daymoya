import LayoutConfig from "@/shared/system/layout/LayoutConfig";
import PersonalClientPage from "@/features/schedule/personal/components/PersonalClientPage";

export default function PersonalPage() {

  return (
    <>
      <LayoutConfig title="내 일정" navIcon="personal" />
      <PersonalClientPage />
    </>
  );
}