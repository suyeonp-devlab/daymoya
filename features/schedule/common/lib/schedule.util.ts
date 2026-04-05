import { SpaceColor } from "@/features/schedule/common/api/schedule.type";

/** space color 맵핑 */
const SPACE_COLOR_CLASS: Record<SpaceColor, string> = {
  SKY: "bg-sky-400",
  MINT: "bg-emerald-400",
  CORAL: "bg-orange-400",
  AMBER: "bg-amber-400",
  ROSE: "bg-rose-400",
};

export const getSpaceBgColor = (color?: string): string => {
  return SPACE_COLOR_CLASS[color as SpaceColor] ?? "bg-zinc-300";
};