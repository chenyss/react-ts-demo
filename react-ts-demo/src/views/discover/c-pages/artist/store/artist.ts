import { getArtistList } from '../service/songs'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

interface IArtistParams {
  area: number
  type: number
  initial: string
}

export const fetchArtistListAction = createAsyncThunk(
  'fetchArtistList',
  (payload: IArtistParams, { dispatch }) => {
    getArtistList(payload.area, payload.type, payload.initial).then(
      (res: any) => {
        dispatch(changeArtistListAction(res.artists))
      }
    )
  }
)

interface songsState {
  currentArea: number
  artistList: any[]
  currentType: any
  initial: string
}

const initialState: songsState = {
  currentArea: 7,
  currentType: {
    name: '推荐歌手',
    type: 1
  },
  artistList: [],
  initial: '-1'
}

const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    changeCurrentAreaAction(state, { payload }) {
      state.currentArea = payload
    },
    changeCurrentTypeAction(state, { payload }) {
      state.currentType = payload
    },
    changeArtistListAction(state, { payload }) {
      state.artistList = payload
    },
    changeInitialAction(state, { payload }) {
      state.initial = payload
    }
  }
})

export const {
  changeCurrentAreaAction,
  changeCurrentTypeAction,
  changeArtistListAction,
  changeInitialAction
} = songsSlice.actions
export default songsSlice.reducer
