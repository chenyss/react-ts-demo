import { configureStore } from '@reduxjs/toolkit'
import {
  TypedUseSelectorHook,
  shallowEqual,
  useDispatch,
  useSelector
} from 'react-redux'
import counterReducer from './module/test'

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

type StateFnType = typeof store.getState
type IStateType = ReturnType<StateFnType>
type DispatchType = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<IStateType> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch
export const shallowEqualApp = shallowEqual

export default store
