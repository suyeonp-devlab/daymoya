export const codeKeys = {
  all: ["code"] as const,
  detail: (grpCodeId: string, code?: string) => [...codeKeys.all, grpCodeId, code ?? "ALL"] as const,
};