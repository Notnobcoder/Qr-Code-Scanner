import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  isAuthenticated: false,
  error: null,
  message: null,
};

export const userReducer = createReducer(initialState, {
  loginRequest: (state) => {
    state.loading = true;
  },
  loginSuccess: (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.message = action.payload.message;
  },
  loginFail: (state, action) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.message = action.payload.message;
  },
  logoutRequest: (state) => {
    state.loading = true;
  },
  logoutSuccess: (state, action) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.message = action.payload;
  },
  logoutFail: (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.message = action.payload;
  },
});
