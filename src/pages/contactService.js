import { userApi } from "../Service/api";
import toast from "react-hot-toast";

export const submitContact = async (payload) => {
  try {
    const res = await userApi.contact(payload);
    if (res.data?.action) {
      toast.success("Message sent successfully!");
      return true;
    }
    toast.error(res.data?.message || "Failed to send message");
    return false;
  } catch (error) {
    console.error("Contact error:", error);
    toast.error(
      error?.response?.data?.message || "Server error. Please try again.",
    );
    return false;
  }
};
