import { handleSongsCategory } from '@/utils/handle-data'
import { getSongCategory, getSongCategoryList } from '../service/songs'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

interface IsongssParams {
  cat: string
  limit: number
  offset: number
}

export const fetchSongsCatelistAction = createAsyncThunk(
  'fetchSongsCatelist',
  (payload, { dispatch }) => {
    getSongCategory().then((res: any) => {
      const returnData = handleSongsCategory(res)
      dispatch(changeCategoryAction(returnData))
    })
  }
)

export const fetchCategorySongsAction = createAsyncThunk(
  'fetchSongsCatelist',
  (payload: IsongssParams, { dispatch }) => {
    getSongCategoryList(payload.cat, payload.limit, payload.offset).then(
      (res: any) => {
        dispatch(changeCategorySongsAction(res.playlists))
        dispatch(changeCategorySongsTotalAction(res.total))
      }
    )
  }
)

interface songsState {
  category: any[]
  categorySongs: any[]
  currentCategory: string
  categorySongsTotal: number
}

const initialState: songsState = {
  category: [],
  currentCategory: '全部',
  categorySongs: [],
  categorySongsTotal: 0
}

const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    changeCategoryAction(state, { payload }) {
      state.category = payload
    },
    changeCurrentCategoryAction(state, { payload }) {
      state.currentCategory = payload
    },
    changeCategorySongsAction(state, { payload }) {
      state.categorySongs = payload
    },
    changeCategorySongsTotalAction(state, { payload }) {
      state.categorySongsTotal = payload
    }
  }
})

export const {
  changeCategoryAction,
  changeCurrentCategoryAction,
  changeCategorySongsAction,
  changeCategorySongsTotalAction
} = songsSlice.actions
export default songsSlice.reducer
