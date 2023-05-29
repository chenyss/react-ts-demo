import { configureStore } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import recommendReducer from '@/views/discover/c-pages/recommend/store/recommend'
import playerReducer from '@/views/player/store/player'
const store = configureStore({
  reducer: {
    recommend: recommendReducer,
    player: playerReducer
  }
})
type GetStateFnType = typeof store.getState
export type RootState = ReturnType<GetStateFnType>
type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
export default store
