interface IUserPayload {
  id: number;
  fullName: string;
  email: string;
  password?: string;
}

export default class User {
  id: number;

  fullName: string;

  email: string;

  password?: string;

  constructor(payload: IUserPayload) {
    this.verifyPayload(payload);

    this.id = payload.id;
    this.fullName = payload.fullName;
    this.email = payload.email;
    this.password = payload.password;
  }

  verifyPayload(payload: IUserPayload) {
    const { id, fullName, email } = payload;

    if (!id || !fullName || !email) {
      throw new Error('USER.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      throw new Error('USER.EMAIL_NOT_VALID');
    }
  }
}
