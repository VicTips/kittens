import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const kittensSlice = createSlice({
  name: "kittens",
  initialState: {
    fileFormulasLoaded: {}
  },
  reducers: {
    loadFileFormulas: (state, action) => {
      state.fileFormulasLoaded = action.payload
    },
    cleanFileFormulas: (state) => {
      state.fileFormulasLoaded = {}
    }
  },
})

export const { loadFileFormulas, cleanFileformulas } = kittensSlice.actions;

export const loadFileFormulasAsync = (id) => (dispatch) => {
  axios.get(`/api/pano_files/${id}/formulas`)
    .then((res) => {
      dispatch(loadFileFormulas(res.data.pano_file))
    })
    .catch((e) => console.log(e));
};

export default kittensSlice.reducer;
