import * as PersonalType from "@/features/schedule/personal/api/personal.type";
import { requestOrThrow } from "@/shared/api/axios";

/** 개인 스케줄 공간 조회 */
export const findMyPersonalSpaces = async (): Promise<PersonalType.PersonalSpaceItem[]> => {
  return requestOrThrow<PersonalType.PersonalSpaceItem[]>({ url: "/schedule/space/personal", method: "POST" });
};