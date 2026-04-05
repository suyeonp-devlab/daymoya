import * as PersonalType from "@/features/schedule/personal/api/personal.type";
import * as PersonalApi from "@/features/schedule/personal/api/personal.api";
import { AppQueryHookOptions, useAppQuery } from "@/shared/system/query/useAppQuery";
import { ApiError } from "@/shared/api/global.type";
import { personalKeys } from "@/features/schedule/personal/api/personal.keys";

/** 개인 스케줄 공간 조회 query */
export const useFindMyPersonalSpacesQuery = (
  options?: AppQueryHookOptions<PersonalType.PersonalSpaceItem[]>,
) => {
  return useAppQuery<PersonalType.PersonalSpaceItem[], ApiError>({
    queryKey: personalKeys.spaces(),
    queryFn: PersonalApi.findMyPersonalSpaces,
    meta: { loading: true },
    ...options,
  });
};