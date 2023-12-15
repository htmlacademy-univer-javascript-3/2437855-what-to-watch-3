export type UserAuthData = {
  email: string;
  password: string;
};
export type UserData = {
  avatarUrl: string;
  email: string;
  id: number;
  name: string;
  token: string;
};

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum LogInError {
  NoError = 'NO_ERROR',
  NotValidEmail = 'NOT_VALID_EMAIL',
  NotValidPassword = 'NOT_VALID_PASSWORD',
  NotValidEmailAndPasswordCombination = 'NOT_VALID_EMAIL_AND_PASSWORD_COMBINATION',
}
