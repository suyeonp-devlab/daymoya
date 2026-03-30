export const authKeys = {
  all: ["auth"] as const,
  login: () => [...authKeys.all, "login"] as const,
  signup: {
    all: () => [...authKeys.all, "signup"] as const,
    sendCode: () => [...authKeys.signup.all(), "sendCode"] as const,
    verifyCode: () => [...authKeys.signup.all(), "verifyCode"] as const,
    register: () => [...authKeys.signup.all(), "register"] as const,
  },
  forgotPassword: {
    all: () => [...authKeys.all, "forgotPassword"] as const,
    sendCode: () => [...authKeys.forgotPassword.all(), "sendCode"] as const,
    verifyCode: () => [...authKeys.forgotPassword.all(), "verifyCode"] as const,
    resetPassword: () => [...authKeys.forgotPassword.all(), "resetPassword"] as const,
  },
};