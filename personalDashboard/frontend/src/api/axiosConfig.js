import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL || "https://mern-full-stack-ten.vercel.app/",
  withCredentials: true,
});

export default api;
