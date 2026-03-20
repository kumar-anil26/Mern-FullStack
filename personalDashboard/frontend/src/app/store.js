import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "../features/projects/projectSlice";
import skillReducer from "../features/skills/skillSlice";

export const store = configureStore({
  reducer: {
    projects: projectReducer,
    skills: skillReducer,
  },
});
