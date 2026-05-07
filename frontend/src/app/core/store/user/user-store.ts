import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { User } from '../../types/user';
import { withDevtools } from '@angular-architects/ngrx-toolkit';

export interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

export const UserStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withDevtools('User'),
  withMethods((store) => ({
    // State Reset
    resetUserState(): void {
      patchState(store, initialState);
    },
    // User Information
    setUser(user: User): void {
      patchState(store, () => ({ user: user }));
    },
    clearUser(): void {
      patchState(store, () => ({ user: initialState.user }));
    },
  })),
);
