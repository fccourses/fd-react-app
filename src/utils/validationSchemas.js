import * as Yup from 'yup';

export const NAME_SCHEMA = Yup.string()
  .matches(/^[A-ZА-Я][a-zа-я]{1,64}$/, 'Enter a valid name')
  .required();

export const SIGN_IN_SCHEMA = Yup.object({
  email: Yup.string()
    .email('Email must be a valid email')
    .required(),
  password: Yup.string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,32}$/,
      'Password must contain one big letter and so on....'
    )
    .required(),
});
