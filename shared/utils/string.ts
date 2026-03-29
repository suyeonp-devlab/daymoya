/** 에러 객체에서 사용자에게 보여줄 메시지 반환 */
export const getErrorMessage = (error: unknown): string => {
  if (typeof error === "object" &&
      error !== null &&
      "message" in error &&
      typeof error.message === "string" &&
      error.message.trim()
  ) {
    return error.message;
  }

  return "알 수 없는 오류가 발생했습니다.";
};
