import { configureStore } from '@reduxjs/toolkit'
import {searchSlice} from './search/searchSlice'
import {selectSlice} from './select/selectSlice'
import { bodySlice } from './body/bodySlice'

export const store = configureStore({
  reducer: {
      searched: searchSlice.reducer,
      selected: selectSlice.reducer,
      body:bodySlice.reducer
  }
  
})