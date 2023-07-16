import { getTopList, getRankingList } from '../service/ranking'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchHotRinkingAction = createAsyncThunk(
  'fetchHotdata',
  (payload, { dispatch }) => {
    getTopList().then((res: any) => {
      dispatch(changeTopListAction(res.list))
      dispatch(fetchTopRinkingAction(res.list[0].id))
    })
  }
)

export const fetchTopRinkingAction = createAsyncThunk(
  'fetchTopdata',
  (id: number, { dispatch }) => {
    getRankingList(id).then((res: any) => {
      dispatch(changePlayListAction(res.playlist))
    })
  }
)

interface albumState {
  topList: any[]
  playList: any
  currentIndex: number
}

const initialState: albumState = {
  topList: [],
  currentIndex: 0,
  playList: {}
}

const albumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {
    changeTopListAction(state, { payload }) {
      state.topList = payload
    },
    changeCurrentIndexAction(state, { payload }) {
      state.currentIndex = payload
    },
    changePlayListAction(state, { payload }) {
      state.playList = payload
    }
  }
})

export const {
  changeTopListAction,
  changeCurrentIndexAction,
  changePlayListAction
} = albumSlice.actions
export default albumSlice.reducer
