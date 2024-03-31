interface IAuthTokenPayload {
  id: number;
  token: string;
}

export default class AuthToken {
  id: number;

  token: string;

  constructor(payload: IAuthTokenPayload) {
    this.id = payload.id;
    this.token = payload.token;
  }
}
