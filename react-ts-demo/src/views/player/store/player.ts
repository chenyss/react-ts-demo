import type { RootState } from '@/store'
import { ILyric, parseLyric } from '@/utils/handle-player'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getSongDetail, getSongLyric } from '../service/player'

interface IThunkState {
  state: RootState
}
export const fetchCurrentSongAction = createAsyncThunk<
  void,
  number,
  IThunkState
>('currentSong', (id: number, { dispatch, getState }) => {
  const playSongList = getState().player.playSongList
  const findIndex = playSongList.findIndex((item) => item.id === id)
  if (findIndex === -1) {
    // 没有找到相同的
    // 1.获取歌曲信息
    getSongDetail(id).then((res) => {
      // 1.获取song
      if (!res.songs.length) return
      const song = res.songs[0]

      // 2.将song放到currentSong中
      const newPlaySongList = [...playSongList]
      newPlaySongList.push(song)
      dispatch(changeCurrentSongAction(song))
      dispatch(changePlaySongListAction(newPlaySongList))
      dispatch(changePlaySongIndexAction(newPlaySongList.length - 1))
    })
  } else {
    // 找到了相同的item
    const song = playSongList[findIndex]
    dispatch(changeCurrentSongAction(song))
    dispatch(changePlaySongIndexAction(findIndex))
  }

  getSongLyric(id).then((res) => {
    // 1.获取歌词的字符串
    const lyricString = res.lrc.lyric
    // 2.对歌词进行解析(一个个对象)
    const lyrics = parseLyric(lyricString)
    // 3.将歌词放到state中
    dispatch(changeLyricsAction(lyrics))
  })
})

export const changeMusicAction = createAsyncThunk<void, boolean, IThunkState>(
  'changemuisc',
  (isNext, { dispatch, getState }) => {
    // 1.获取state中的数据
    const player = getState().player
    const playMode = player.playMode
    const songIndex = player.playSongIndex
    const songList = player.playSongList

    // 2.根据不同的模式计算不同的下一首歌曲的索引
    let newIndex = songIndex
    if (playMode === 1) {
      // 随机播放
      newIndex = Math.floor(Math.random() * songList.length)
    } else {
      // 单曲顺序和顺序播放
      newIndex = isNext ? songIndex + 1 : songIndex - 1
      if (newIndex > songList.length - 1) newIndex = 0
      if (newIndex < 0) newIndex = songList.length - 1
    }

    // 3.获取当前的歌曲
    const song = songList[newIndex]
    dispatch(changeCurrentSongAction(song))
    dispatch(changePlaySongIndexAction(newIndex))

    // 4.请求新的歌词
    getSongLyric(song.id).then((res) => {
      // 1.获取歌词的字符串
      const lyricString = res.lrc.lyric
      // 2.对歌词进行解析(一个个对象)
      const lyrics = parseLyric(lyricString)
      // 3.将歌词放到state中
      dispatch(changeLyricsAction(lyrics))
    })
  }
)

interface IPlayerState {
  currentSong: any
  lyrics: ILyric[]
  lyricIndex: number
  playSongList: any[]
  playSongIndex: number
  playMode: number
}
const initialState: IPlayerState = {
  currentSong: {
    name: '静止 (Live版)',
    id: 2050323274,
    pst: 0,
    t: 0,
    ar: [
      {
        id: 9609,
        name: '魏如萱',
        tns: [],
        alias: []
      },
      {
        id: 861777,
        name: '华晨宇',
        tns: [],
        alias: []
      },
      {
        id: 6453,
        name: '张震岳',
        tns: [],
        alias: []
      }
    ],
    alia: [],
    pop: 100,
    st: 0,
    rt: '',
    fee: 8,
    v: 3,
    crbt: null,
    cf: '',
    al: {
      id: 166372534,
      name: '声生不息·宝岛季 第11期',
      picUrl:
        'http://p3.music.126.net/GsjuimagfURAkA8Mh0GsWQ==/109951168636490484.jpg',
      tns: [],
      pic_str: '109951168636490484',
      pic: 109951168636490480
    },
    dt: 301178,
    h: {
      br: 320000,
      fid: 0,
      size: 12049965,
      vd: -45192,
      sr: 48000
    },
    m: {
      br: 192000,
      fid: 0,
      size: 7229997,
      vd: -42654,
      sr: 48000
    },
    l: {
      br: 128000,
      fid: 0,
      size: 4820013,
      vd: -41034,
      sr: 48000
    },
    sq: {
      br: 988411,
      fid: 0,
      size: 37211096,
      vd: -45245,
      sr: 48000
    },
    hr: {
      br: 1755847,
      fid: 0,
      size: 66103046,
      vd: -45183,
      sr: 48000
    },
    a: null,
    cd: '01',
    no: 4,
    rtUrl: null,
    ftype: 0,
    rtUrls: [],
    djId: 0,
    copyright: 0,
    s_id: 0,
    mark: 536879104,
    originCoverType: 2,
    originSongSimpleData: {
      songId: 357424,
      name: '静止',
      artists: [
        {
          id: 11761,
          name: '花儿乐队'
        }
      ],
      albumMeta: {
        id: 35288,
        name: '幸福的旁边'
      }
    },
    tagPicList: null,
    resourceState: true,
    version: 3,
    songJumpInfo: null,
    entertainmentTags: null,
    awardTags: null,
    single: 0,
    noCopyrightRcmd: null,
    mst: 9,
    cp: 2712403,
    mv: 0,
    rtype: 0,
    rurl: null,
    publishTime: 0
  },
  lyrics: [],
  lyricIndex: -1,
  playSongList: [
    {
      name: '温柔',
      id: 386538,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 13193,
          name: '五月天',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '600902000000534560',
      fee: 8,
      v: 76,
      crbt: null,
      cf: '',
      al: {
        id: 38285,
        name: '我们是五月天',
        picUrl:
          'https://p2.music.126.net/v4V40sXKnaqsG0ACyY0aDg==/109951164912221924.jpg',
        tns: [],
        pic_str: '109951164912221924',
        pic: 109951164912221920
      },
      dt: 269800,
      h: {
        br: 320000,
        fid: 0,
        size: 10794885,
        vd: -63963,
        sr: 44100
      },
      m: {
        br: 192000,
        fid: 0,
        size: 6476948,
        vd: -61380,
        sr: 44100
      },
      l: {
        br: 128000,
        fid: 0,
        size: 4317980,
        vd: -59700,
        sr: 44100
      },
      sq: {
        br: 1053723,
        fid: 0,
        size: 35536822,
        vd: -63997,
        sr: 44100
      },
      hr: null,
      a: null,
      cd: '1',
      no: 2,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 8704,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 76,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      rurl: null,
      rtype: 0,
      mst: 9,
      cp: 684010,
      mv: 10929721,
      publishTime: 1049126400000
    },
    {
      name: '这世界那么多人',
      id: 1842025914,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 8926,
          name: '莫文蔚',
          tns: [],
          alias: []
        }
      ],
      alia: ['电影《我要我们在一起》主题曲'],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 18,
      crbt: null,
      cf: '',
      al: {
        id: 126837556,
        name: '这世界那么多人',
        picUrl:
          'https://p1.music.126.net/LOTxqRjFm03VJEOHJbUqMw==/109951165944804127.jpg',
        tns: [],
        pic_str: '109951165944804127',
        pic: 109951165944804130
      },
      dt: 285884,
      h: {
        br: 320000,
        fid: 0,
        size: 11436452,
        vd: -24264,
        sr: 44100
      },
      m: {
        br: 192000,
        fid: 0,
        size: 6861889,
        vd: -21628,
        sr: 44100
      },
      l: {
        br: 128000,
        fid: 0,
        size: 4574607,
        vd: -19844,
        sr: 44100
      },
      sq: null,
      hr: null,
      a: null,
      cd: '01',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 1,
      s_id: 0,
      mark: 8192,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 18,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 7001,
      mv: 14316913,
      publishTime: 1620316800000
    },
    {
      name: '起风了',
      id: 1330348068,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 12085562,
          name: '买辣椒也用券',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 42,
      crbt: null,
      cf: '',
      al: {
        id: 74715426,
        name: '起风了',
        picUrl:
          'https://p1.music.126.net/diGAyEmpymX8G7JcnElncQ==/109951163699673355.jpg',
        tns: [],
        pic_str: '109951163699673355',
        pic: 109951163699673360
      },
      dt: 325868,
      h: {
        br: 320000,
        fid: 0,
        size: 13037236,
        vd: -77525,
        sr: 44100
      },
      m: {
        br: 192000,
        fid: 0,
        size: 7822359,
        vd: -74987,
        sr: 44100
      },
      l: {
        br: 128000,
        fid: 0,
        size: 5214920,
        vd: -73504,
        sr: 44100
      },
      sq: {
        br: 985873,
        fid: 0,
        size: 40158105,
        vd: -77524,
        sr: 44100
      },
      hr: {
        br: 2832349,
        fid: 0,
        size: 115371553,
        vd: -77475,
        sr: 88200
      },
      a: null,
      cd: '1',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 536879104,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 42,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 10782615,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 1415923,
      publishTime: 0
    }
  ],
  playSongIndex: -1,
  playMode: 0 // 0:顺序播放 1:随机播放 2:单曲循环
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload
    },
    changeLyricsAction(state, { payload }) {
      state.lyrics = payload
    },
    changeLyricIndexAction(state, { payload }) {
      state.lyricIndex = payload
    },
    changePlayModeAction(state, { payload }) {
      state.playMode = payload
    },
    changePlaySongIndexAction(state, { payload }) {
      state.playSongIndex = payload
    },
    changePlaySongListAction(state, { payload }) {
      state.playSongList = payload
    }
  }
})

export const {
  changeCurrentSongAction,
  changeLyricsAction,
  changeLyricIndexAction,
  changePlayModeAction,
  changePlaySongListAction,
  changePlaySongIndexAction
} = playerSlice.actions
export default playerSlice.reducer
