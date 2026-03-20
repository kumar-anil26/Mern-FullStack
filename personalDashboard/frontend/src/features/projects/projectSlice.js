import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axiosConfig";

export const getProjects = createAsyncThunk(
  "projects/getAll",
  async (_, thunkAPI) => {
    try {
      const res = await api.get("/projects");
          return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || "Error");
    }
  }
);

export const createProject = createAsyncThunk(
  "projects/create",
  async (data, thunkAPI) => {
    try {
      const res = await api.post("/projects", data);
      return res.data;
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || "Network Error";
      return thunkAPI.rejectWithValue(message);
    }
  }
);


const projectSlice = createSlice({
  name: "projects",
  initialState: { projects: [], isLoading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProjects.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProjects.fulfilled, (state, action) => {
        state.isLoading = false;
        state.projects = action.payload;
      })
      .addCase(createProject.fulfilled, (state, action) => {
        state.projects.unshift(action.payload);
      })
    
  },
});

export default projectSlice.reducer;
