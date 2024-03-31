interface ILogoutAuthPayload {
  refreshToken: string;
}

export default class LogoutAuth {
  refreshToken: string;

  constructor(payload: ILogoutAuthPayload) {
    this.refreshToken = payload.refreshToken;
  }
}
