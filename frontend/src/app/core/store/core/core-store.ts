import { signalStore, withMethods, withState } from '@ngrx/signals';

export interface CoreState {
  loading: boolean;
  alert: string | null;
  error: string | null;
}

const initialState: CoreState = {
  loading: false,
  alert: null,
  error: null,
};

export const CoreStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({})),
);
