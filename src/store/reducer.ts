import { combineReducers } from '@reduxjs/toolkit';

import { NameSpace } from '../components/const';
import { filmData } from './film-reducer/film-reducer';
import { mainData } from './main-reducer/main-reducer';
import { authProcess } from './user-reducer/user-reducer';
import { myListData } from './my-list-reducer/my-list-reducer';

export const reducer = combineReducers({
  [NameSpace.Film]: filmData.reducer,
  [NameSpace.Main]: mainData.reducer,
  [NameSpace.Auth]: authProcess.reducer,
  [NameSpace.MyList]: myListData.reducer,
});
