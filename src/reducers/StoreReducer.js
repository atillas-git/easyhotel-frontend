export const storeReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN": {
      return { ...state, user: action.user };
    }
    default: {
      break;
    }
  }
};
