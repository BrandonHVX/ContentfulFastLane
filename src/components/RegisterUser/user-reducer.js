export const DefaultUser = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",

  firstName: "",
  lastName: "",
  email: ""
};

export const UserReducer = (user, { type, payload }) => {
  switch (type) {
    case "UPDATE_PERSONAL_INFO":
      return {
        ...user,
        ...payload
      };
    case "UPDATE_NEXTOFKIN_INFO":
      return {
        ...user,
        nextOfKin: {
          ...user,
          ...user.nextOfKin,
          ...payload
        }
      };

    default:
      return user;
  }
};
