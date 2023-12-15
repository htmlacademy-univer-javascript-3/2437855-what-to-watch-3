import { createSlice } from '@reduxjs/toolkit';

import { MyListData } from '../../types/state';
import { changeFilmStatus, fetchMyList, logout } from '../api-action';
import { NameSpace } from '../../components/const';

const initialState: MyListData = {
  myList: [],
  myListLength: 0,
  changedFilm: null,
};

export const myListData = createSlice({
  name: NameSpace.MyList,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMyList.fulfilled, (state, action) => {
        state.myList = action.payload;
        state.myListLength = action.payload.length;
      })
      .addCase(changeFilmStatus.pending, (state) => {
        state.changedFilm = null;
      })
      .addCase(changeFilmStatus.fulfilled, (state, action) => {
        const isInList = action.payload.isFavorite;
        state.myListLength += isInList ? 1 : -1;
        state.changedFilm = {
          filmId: action.payload.id,
          status: action.payload.isFavorite,
        };
      })
      .addCase(logout.fulfilled, (state) => {
        state.myList = [];
        state.myListLength = 0;
        state.changedFilm = null;
      });
  },
});
