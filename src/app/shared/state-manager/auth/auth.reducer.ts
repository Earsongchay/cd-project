// auth.reducer.ts
import { createReducer, on } from '@ngrx/store';
import {initialState, User} from "./auth.state";
import {loginFailure, loginSuccess, logout} from "./auth.action";

export interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
  error: any;
}

export const authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { user }) => {
      return {
        ...state,
        isLoggedIn: true,
        user,
        error: null
      }
    }),
  on(loginFailure, (state, { error }) => ({
    ...state,
    isLoggedIn: false,
    user: null,
    error
  })),
  on(logout, state => ({
    ...state,
    isLoggedIn: false,
    user: null,
    error: null
  }))
);
