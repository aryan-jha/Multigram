export class AuthModal {
  token: string = '';
  isBiometricEnabled: boolean = false;
}

export type LoginApiRequest = {
  Email: string;
  Password: string;
};
