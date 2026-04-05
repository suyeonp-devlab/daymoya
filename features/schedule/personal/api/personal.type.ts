import { SpaceColor } from "@/features/schedule/common/api/schedule.type";

export interface PersonalSpaceItem {
  scheduleSpaceId: number;
  name: string;
  description?: string | null;
  spaceColor?: SpaceColor | null;
}
