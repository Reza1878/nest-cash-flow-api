interface ILoginUserPayload {
  email: string;
  password: string;
}

export default class LoginUser {
  email: string;

  password: string;

  constructor(payload: ILoginUserPayload) {
    this.email = payload.email;
    this.password = payload.password;
  }
}
