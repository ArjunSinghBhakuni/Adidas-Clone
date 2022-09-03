import * as types from "./actiontype";

const intialState = {
  isAuthLfalse,
  token: "",
  isLoading: false,
  isError: false,
};

const reducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case types.SIGNUP_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.SIGNUP_SUCCESS: {
      return {
        ...state,

        isLoading: true,
        isError: false,
      };
    }
    case types.SIGNUP_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case types.LOGIN_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload,
        isError: false,
      };
    }
    case types.LOGIN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        token: "",
        isAuth: false,
      };
    }

    default: {
      return state;
    }
  }
};

export { reducer };
