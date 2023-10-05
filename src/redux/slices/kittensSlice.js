import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const kittensSlice = createSlice({
  name: "kittens",
  initialState: {
    kittensLoaded: [],
    kittenInfo: {},
    loading: false
  },
  reducers: {
    loadKittens: (state, action) => {
      state.kittensLoaded = action.payload
    },
    loadKittenInfo: (state, action) => {
      state.kittenInfo = action.payload
    },
    cleanKittenInfo: (state) => {
      state.kittenInfo = {}
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    }
  },
})

export const { loadKittens, loadKittenInfo, cleanKittenInfo, setLoading } = kittensSlice.actions;

export const loadKittensAsync = () => (dispatch) => {
  dispatch(setLoading(true))
  axios.get(`http://127.0.0.1:3000/kittens`)
    .then((res) => {
      dispatch(setLoading(false))
      dispatch(loadKittens(res.data.kittens))
    })
    .catch((e) => console.log(e));
};

export const loadKittenInfoAsync = (id) => (dispatch) => {
  dispatch(setLoading(true))
  axios.get(`http://127.0.0.1:3000/kittens/${id}`)
    .then((res) => {
      dispatch(setLoading(false))
      dispatch(loadKittenInfo(res.data.kittens))
    })
    .catch((e) => console.log(e));
};

export default kittensSlice.reducer;
