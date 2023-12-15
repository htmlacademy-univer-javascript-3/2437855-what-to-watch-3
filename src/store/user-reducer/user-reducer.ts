import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AuthProcess } from '../../types/state';
import { AuthorizationStatus, LogInError } from '../../types/authorization';
import { NameSpace } from '../../components/const';
import { getAuthStatus, login, logout } from '../api-action';

const initialState: AuthProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
  loginError: LogInError.NoError,
};

export const authProcess = createSlice({
  name: NameSpace.Auth,
  initialState,
  reducers: {
    setLoginError: (state, action: PayloadAction<LogInError>) => {
      state.loginError = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAuthStatus.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
      })
      .addCase(getAuthStatus.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state) => {
        state.loginError = LogInError.NotValidEmailAndPasswordCombination;
      })
      .addCase(logout.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.user = null;
      });
  },
});

export const { setLoginError } = authProcess.actions;
