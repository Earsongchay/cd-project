// auth.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthState } from './auth.state';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const isLoggedIn = createSelector(selectAuthState, state => state.isLoggedIn);
export const selectUser = createSelector(selectAuthState, state => state.user || '');
export const selectError = createSelector(selectAuthState, state => state.error);
