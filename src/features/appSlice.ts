import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { ACCOUNT_LEVELS, type AccountLevel } from '../utils/cashback';
import type { CashbackState } from '../types';

const persistedLevel = localStorage.getItem('cb_level') as AccountLevel | null;

interface AppState {
  level: AccountLevel;
  chosen: string[];
  state: CashbackState;
  amount: string;
  cat: string;
  cashRes: number;
  showModal: boolean;
}

const initialState: AppState = {
  level: persistedLevel ?? ACCOUNT_LEVELS.EXTENDED,
  chosen: [],
  state: { byCategory: {}, total: 0 },
  amount: '',
  cat: '',
  cashRes: 0,
  showModal: false,
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLevel(state, action: PayloadAction<AccountLevel>) {
      state.level = action.payload;
      localStorage.setItem('cb_level', action.payload);
    },
    setChosen(state, action: PayloadAction<string[]>) {
      state.chosen = action.payload;
    },
    setAmount(state, action: PayloadAction<string>) {
      state.amount = action.payload;
    },
    setCat(state, action: PayloadAction<string>) {
      state.cat = action.payload;
    },
    calculate(
      state,
      action: PayloadAction<{ cashback: number; newState: CashbackState }>
    ) {
      state.cashRes = action.payload.cashback;
      state.state = action.payload.newState;
      state.showModal = true;
    },
    hideModal(state) {
      state.showModal = false;
    },
  },
});

export const {
  setLevel,
  setChosen,
  setAmount,
  setCat,
  calculate,
  hideModal,
} = slice.actions;
export default slice.reducer;
