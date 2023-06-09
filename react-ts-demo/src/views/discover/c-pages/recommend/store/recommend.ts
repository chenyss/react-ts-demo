import {
  getArtistList,
  getHotRecommend,
  getNewAlbum,
  getPlayListDetail,
  getTopBanner
} from '../service/recommend'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const rankingMap = {
  upRanking: 19723756,
  newRanking: 3779629,
  originRanking: 2884035
}

export const fetchRecommendDataAction = createAsyncThunk(
  'fetchdata',
  (payload, { dispatch }) => {
    // 1.顶部的banners
    getTopBanner().then((res: any) => {
      dispatch(changeBannersAction(res.banners))
    })

    // 2.热门推荐
    getHotRecommend().then((res: any) => {
      dispatch(changeHotRecommendAction(res.result))
    })

    // 3.新碟上架
    getNewAlbum().then((res: any) => {
      dispatch(changeNewAlbumsAction(res.albums))
    })

    // 4.所有的榜单数据
    const rankingPromises: Promise<any>[] = []
    let key: keyof typeof rankingMap
    for (key in rankingMap) {
      const id = rankingMap[key]
      rankingPromises.push(
        getPlayListDetail(id).then((res: any) => {
          return res.playlist
        })
      )
    }
    Promise.all(rankingPromises).then((res) => {
      dispatch(changeRankingsAction(res))
    })

    return null
  }
)

export const fetchSettleSinger = createAsyncThunk(
  'settlesinger',
  async (_, { dispatch }) => {
    const res = await getArtistList(5001, 5)
    // dispatch()
    dispatch(changeSettleSingerAction(res.artists))
  }
)

interface RecommendState {
  banners: any[]
  hotRecommends: any[]
  newAlbums: any[]
  rankings: any[]
  settleSingers: any[]
}

const initialState: RecommendState = {
  banners: [],
  hotRecommends: [],
  newAlbums: [],
  rankings: [],
  settleSingers: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommends = payload
    },
    changeNewAlbumsAction(state, { payload }) {
      state.newAlbums = payload
    },
    changeRankingsAction(state, { payload }) {
      state.rankings = payload
    },
    changeSettleSingerAction(state, { payload }) {
      state.settleSingers = payload
    }
  }
})

export const {
  changeBannersAction,
  changeHotRecommendAction,
  changeNewAlbumsAction,
  changeRankingsAction,
  changeSettleSingerAction
} = recommendSlice.actions
export default recommendSlice.reducer
