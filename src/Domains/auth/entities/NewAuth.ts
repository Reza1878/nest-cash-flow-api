interface INewAuthPayload {
  accessToken: string;
  refreshToken: string;
}

export default class NewAuth {
  accessToken: string;

  refreshToken: string;

  constructor(payload: INewAuthPayload) {
    this.accessToken = payload.accessToken;
    this.refreshToken = payload.refreshToken;
  }
}
