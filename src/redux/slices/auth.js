import { createSlice } from "@reduxjs/toolkit";
//
import axios from "../../utils/axios";
import { showSnackbar } from "./app";

const initialState = {
  isLoggedIn: false,
  token: "",
  isLoading: false,
  email: "",
  error: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateIsLoading(state, action) {
      state.error = action.payload.error;
      state.isLoading = action.payload.isLoading;
    },
    logIn(state, action) {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.token = action.payload.token;
    },
    signOut(state, action) {
      state.isLoggedIn = false;
      state.token = "";
    },
    updateRegisterEmail(state, action) {
      state.email = action.payload.email;
    },
  },
});

// Reducer
export default slice.reducer;

// thunk function
export function LoginUser(formValues) {
  return async (dispatch, getState) => {
    await axios
      .post(
        "/auth/login",
        { ...formValues },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log("response", response);
        dispatch(
          slice.actions.logIn({
            isLoggedIn: true,
            token: response.data.token,
          })
        );

        window.localStorage.setItem("user_id", response.data.user_id);

        dispatch(
          showSnackbar({ severity: "success", message: response.data.message })
        );
      })
      .catch(function (err) {
        dispatch(
          showSnackbar({
            severity: "error",
            message: err.message,
          })
        );
      });
  };
}

export function LogoutUser() {
  return async (dispatch, getState) => {
    dispatch(slice.actions.signOut());
    window.localStorage.removeItem("user_id");
  };
}

export function ForgotPassword(formValues) {
  return async (dispatch, getState) => {
    await axios
      .post(
        "/auth/forgot-password",
        {
          ...formValues,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function NewPassword(formValues) {
  return async (dispatch, getState) => {
    await axios
      .post(
        "auth/reset-password",
        {
          ...formValues,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        dispatch(
          slice.actions.logIn({
            isLoggedIn: true,
            token: res.data.token,
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function RegisterUser(formValues) {
  return async (dispatch, getState) => {
    dispatch(
      slice.actions.updateIsLoading({
        isLoading: true,
        error: false,
      })
    );

    await axios
      .post(
        "auth/register",
        {
          ...formValues,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        dispatch(
          slice.actions.updateRegisterEmail({
            email: formValues.email,
          })
        );

        dispatch(
          slice.actions.updateIsLoading({
            isLoading: false,
            error: false,
          })
        );
      })
      .catch((err) => {
        dispatch(
          slice.actions.updateIsLoading({
            isLoading: false,
            error: true,
          })
        );
      })
      .finally(() => {
        if (!getState().auth.error) {
          window.location.href = "/auth/verify";
        }
      });
  };
}

export function VerifyEmail(formValues) {
  return async (dispatch, getState) => {
    await axios
      .post(
        "auth/verify",
        {
          ...formValues,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        dispatch(
          slice.actions.logIn({
            isLoggedIn: true,
            token: res.data.token,
          })
        );

        window.localStorage.setItem("user_id", res.data.user_id);
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
