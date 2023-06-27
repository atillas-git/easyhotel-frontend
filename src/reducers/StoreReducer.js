export const storeReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN": {
      localStorage.setItem("user",JSON.stringify(action.user))
      return { ...state, user: action.user };
    }
    default: {
      break;
    }
  }
};
