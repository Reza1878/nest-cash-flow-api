interface IRegisterUserPayload {
  email: string;
  password: string;
  fullName: string;
}

export default class RegisterUser {
  email: string;

  password: string;

  fullName: string;

  constructor(payload: IRegisterUserPayload) {
    this.email = payload.email;
    this.password = payload.password;
    this.fullName = payload.fullName;
  }
}
