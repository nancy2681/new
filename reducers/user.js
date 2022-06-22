const defaultState = {
  firstName: "",
  lastName: "",
  mobile: "",
  dob: "",
  gender: "",
  address: "",
  city: "",
  email: "",
};

const userReducer = (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SAVE":
      console.log({ ...state, ...payload });
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default userReducer;
