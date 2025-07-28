import API from "../utils/api";

export const fetchSessionDuration = () => API.get("/analytics/session-duration");
export const fetchUserRetention = () => API.get("/analytics/user-retention");
// add more as needed

