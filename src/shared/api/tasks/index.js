import localAPI from "./local";
import serverAPI from "./server";

const envValue = import.meta.env.VITE_STATIC_BACKEND;
const isLocal = envValue === undefined ? true : envValue === "true";

const tasksAPI = isLocal ? localAPI : serverAPI;

export default tasksAPI;
