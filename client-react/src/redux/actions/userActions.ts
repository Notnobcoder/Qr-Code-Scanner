import axios from "axios";
import { server } from "../store";

export const login = (payload) => async (dispatch) => {
  try {
    dispatch({ type: "loginRequest" });
    const { data } = await axios.post(`${server}/auth/login`, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (data.token) {
      localStorage.setItem("token", data.token);
    }
    dispatch({ type: "loginSuccess", payload: data.message });
    window.location.reload();
  } catch {
    dispatch({ type: "loginFail" });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: "logoutRequest" });
    localStorage.clear();
    dispatch({ type: "logoutSuccess", payload: "Logged Out Successfully" });
  } catch (error) {
    dispatch({ type: "logoutFail", payload: error });
  }
};
