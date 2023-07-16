import { useAppDispatch, useAppSelector } from '@/store'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HeaderWrapper, RinkingListWrapper } from './style'
import { shallowEqual } from 'react-redux'
import { getImageSize } from '@/utils/handle-img-url'
import { formatMinuteSecond } from '@/utils/format-time'

interface IProps {
  children?: ReactNode
}

const topAlbums: FC<IProps> = () => {
  const { playList } = useAppSelector(
    (state) => ({
      playList: state.rinking.playList
    }),
    shallowEqual
  )
  const tracks = playList.tracks || []
  return (
    <RinkingListWrapper>
      <HeaderWrapper>
        <div className="left">
          <h3 className="title">歌曲列表</h3>
          <div className="count">{playList.trackCount}首歌</div>
        </div>
        <div className="right">
          <span>播放：</span>
          <span className="count">{playList.playCount}</span>
          <span>次</span>
        </div>
      </HeaderWrapper>
      <div className="play-list">
        <table>
          <thead>
            <tr className="header">
              <th className="ranking"></th>
              <th className="title">标题</th>
              <th className="duration">时长</th>
              <th className="singer">歌手</th>
            </tr>
          </thead>
          <tbody>
            {tracks.map((item: any, index: any) => {
              return (
                <tr key={item.id}>
                  <td>
                    <div className="rank-num">
                      <span className="num">{index + 1}</span>
                      <span className="new sprite_icon2"></span>
                    </div>
                  </td>
                  <td>
                    <div className="song-name">
                      {index < 3 ? (
                        <img src={getImageSize(item.al.picUrl, 50)} alt="" />
                      ) : null}
                      <span className="play sprite_table"></span>
                      <span className="name">{item.name}</span>
                    </div>
                  </td>
                  <td>{formatMinuteSecond(item.dt)}</td>
                  <td>{item.ar[0].name}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </RinkingListWrapper>
  )
}

export default memo(topAlbums)
