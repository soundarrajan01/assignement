import Axios from "./Axios";

export const LoginServices = (data) => {
  return Axios.post("/login", data);
};
export const UserManagementServices = (data) => {
  return Axios.get("/usermanagement");
};
export const historyServices = (data) => {
  return Axios.post("/history", data);
};
export const AllBookings = (data) => {
  return Axios.post("/allbookings", data);
};
