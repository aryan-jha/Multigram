/**
 * Defines the validations used in the app.
 */
export default {
  minLength4: /^.{4,}$/,
  minLength5: /^.{5,}$/,
  minLength2: /^.{2,}$/,
  minLength1: /^.{1,}$/,
  multiline:/^.{1,}$/gm,
  name: /^[a-zA-Z0-9]{2,}( [a-zA-Z0-9]{2,})*$/,
  onlyNumber: /^[0-9]+$/,
  month: /^(0?[1-9]|1[0-2])$/,
  phone: /^([0|\+[0-9]{7,15})$/,
  day: /^(0?[1-9]|[1-2][0-9]|3[0-1])$/,
  lastName:/^[A-Za-z]{2,}(?: [A-Za-z]+)*$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,24}$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
};

