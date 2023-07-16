import { useAppDispatch, useAppSelector } from '@/store'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { OperationBarWrapper, TopHeaderWrapper } from './style'
import { shallowEqual } from 'react-redux'
import { formatMonthDay } from '@/utils/format-time'

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

  return (
    <TopHeaderWrapper>
      <div className="image">
        <img src={playList.coverImgUrl} alt="" />
      </div>
      <div className="info">
        <div className="title">{playList.name}</div>
        <div className="time">
          <i className="clock sprite_icon2"></i>
          <div>最近更新：{formatMonthDay(playList.updateTime)}</div>
          <div className="update-f">（{'每日更新:TODO'}）</div>
        </div>
        <OperationBarWrapper>
          <span className="play">
            <a href="/abc" className="play-icon sprite_button">
              <span className="play sprite_button">
                <i className="sprite_button"></i>
                <span>播放</span>
              </span>
            </a>
            <a href="/abc" className="add-icon sprite_button">
              +
            </a>
          </span>
          <a href="/abc" className="item sprite_button">
            <i className="icon favor-icon sprite_button">
              {playList.subscribedCount}
            </i>
          </a>
          <a href="/abc" className="item sprite_button">
            <i className="icon share-icon sprite_button">
              {playList.shareCount}
            </i>
          </a>
          <a href="/abc" className="item sprite_button">
            <i className="icon download-icon sprite_button">下载</i>
          </a>
          <a href="/abc" className="item sprite_button">
            <i className="icon comment-icon sprite_button">
              {playList.commentCount}
            </i>
          </a>
        </OperationBarWrapper>
      </div>
    </TopHeaderWrapper>
  )
}

export default memo(topAlbums)
