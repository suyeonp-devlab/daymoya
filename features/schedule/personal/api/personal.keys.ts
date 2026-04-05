export const personalKeys = {
  all: ["personal"] as const,
  spaces: () => [...personalKeys.all, "spaces"] as const,
};