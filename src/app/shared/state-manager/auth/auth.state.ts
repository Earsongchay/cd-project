
export interface User {
  accessToken: string,
  refreshToken: string,
  token_expired: string,
  isLoggedIn: boolean
}

export interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
  error: any;
}

export const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
  error: null
};
