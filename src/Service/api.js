import { apiJson } from "./service";
import { userUrl } from "./url";

const userApi = {
  contact: (payload) => apiJson.post(userUrl.contact, payload),
  freeRegister: (payload) => apiJson.post(userUrl.freeRegister, payload),
};
export { userApi };
