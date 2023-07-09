import {
  getDjRadioCatelist,
  getDjRadioRecommend,
  getDjRadios
} from '../service/djradio'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

interface IDjRadiosParams {
  cateId: number
  limit: number
  offset: number
}

export const fetchDjRadioCatelistAction = createAsyncThunk(
  'fetchDjRadioCatelist',
  (payload, { dispatch }) => {
    getDjRadioCatelist().then((res: any) => {
      dispatch(changeCategoriesAction(res.categories))
      dispatch(changeCurrentIdAction(res.categories ? res.categories[0].id : 0))
    })
  }
)

export const fetchDjRadioRecommendAction = createAsyncThunk(
  'fetchDjRadioRecommend',
  (type: number, { dispatch }) => {
    getDjRadioRecommend(type).then((res: any) => {
      dispatch(changeRecommendsAction(res.djRadios))
    })
  }
)

export const fetchDjRadioRankingAction = createAsyncThunk(
  'fetchDjRadioRanking',
  (payload: IDjRadiosParams, { dispatch }) => {
    getDjRadios(payload.cateId, payload.limit, payload.offset).then(
      (res: any) => {
        dispatch(changeRadioRankingAction(res.djRadios))
        dispatch(changeRadiosTotalAction(res.count))
      }
    )
  }
)

interface djradioState {
  categories: any[]
  recommends: any[]
  radios: any[]
  currentId: any
  radiosTotal: number
}

const initialState: djradioState = {
  categories: [],
  currentId: undefined,
  recommends: [],
  radios: [],
  radiosTotal: 0
}

const djradioSlice = createSlice({
  name: 'djradio',
  initialState,
  reducers: {
    changeCategoriesAction(state, { payload }) {
      state.categories = payload
    },
    changeCurrentIdAction(state, { payload }) {
      state.currentId = payload
    },
    changeRecommendsAction(state, { payload }) {
      state.recommends = payload
    },
    changeRadioRankingAction(state, { payload }) {
      state.radios = payload
    },
    changeRadiosTotalAction(state, { payload }) {
      state.radiosTotal = payload
    }
  }
})

export const {
  changeCategoriesAction,
  changeCurrentIdAction,
  changeRecommendsAction,
  changeRadioRankingAction,
  changeRadiosTotalAction
} = djradioSlice.actions
export default djradioSlice.reducer
