export const FORM_VALIDATIONS = {
  REQUIRED: {
    required: {
      value: true,
      message: "Please enter value",
    },
  },
  REQUIRED_EMAIL: {
    required: {
      value: true,
      message: "Please enter value",
    },
    pattern: {
      value:
        // eslint-disable-next-line no-useless-escape
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
      message: "Please enter valid email address",
    },
  },
};
