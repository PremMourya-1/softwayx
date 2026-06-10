import { apiJson } from "./service";
import { userUrl } from "./url";

const userApi = {
  contact: (payload) => apiJson.post(userUrl.contact, payload),
  sendVerificationCode: (payload) =>
    apiJson.post(userUrl.sendVerificationCode, payload),
  verifyEmailOtp: (payload) => apiJson.post(userUrl.verifyEmailOtp, payload),
  freeRegister: (payload) => apiJson.post(userUrl.freeRegister, payload),
};
export { userApi };
