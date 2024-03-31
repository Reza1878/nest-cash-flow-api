interface ILoginUserPayload {
  email: string;
  password: string;
}

export default class LoginUser {
  email: string;

  password: string;

  constructor(payload: ILoginUserPayload) {
    this.verifyPayload(payload);

    this.email = payload.email;
    this.password = payload.password;
  }

  verifyPayload(payload: ILoginUserPayload) {
    const { email, password } = payload;
    if (!email || !password) {
      throw new Error('LOGIN_USER.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (password.length < 8) {
      throw new Error('LOGIN_USER.PASSWORD_MINIMUM_CHARACTER');
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      throw new Error('LOGIN_USER.EMAIL_NOT_VALID');
    }
  }
}
