import { getHotAlbums, getTopAlbums } from '../service/album'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchHotAlbumsAction = createAsyncThunk(
  'fetchHotdata',
  (payload, { dispatch }) => {
    getHotAlbums().then((res: any) => {
      dispatch(changeHotAlbumsAction(res.albums))
    })
  }
)

export const fetchTopAlbumsAction = createAsyncThunk(
  'fetchTopdata',
  (page: number, { dispatch }) => {
    getTopAlbums(30, page * 30).then((res: any) => {
      dispatch(changeTopAlbumsAction(res.albums))
      dispatch(changeTotalAction(res.total))
    })
  }
)

interface albumState {
  hotAlbums: any[]
  topAlbums: any[]
  total: number
}

const initialState: albumState = {
  hotAlbums: [],
  topAlbums: [],
  total: 0
}

const albumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {
    changeHotAlbumsAction(state, { payload }) {
      state.hotAlbums = payload
    },
    changeTopAlbumsAction(state, { payload }) {
      state.topAlbums = payload
    },
    changeTotalAction(state, { payload }) {
      state.total = payload
    }
  }
})

export const {
  changeTopAlbumsAction,
  changeHotAlbumsAction,
  changeTotalAction
} = albumSlice.actions
export default albumSlice.reducer
