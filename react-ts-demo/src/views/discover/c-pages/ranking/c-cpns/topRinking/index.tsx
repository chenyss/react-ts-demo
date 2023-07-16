import { useAppDispatch, useAppSelector } from '@/store'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { TopRinkingWrapper } from './style'
import { shallowEqual } from 'react-redux'
import classNames from 'classnames'
import { getImageSize } from '@/utils/handle-img-url'
import { changeCurrentIndexAction } from '../../store/ranking'

interface IProps {
  children?: ReactNode
}

const topAlbums: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const { currentIndex, topList } = useAppSelector(
    (state) => ({
      currentIndex: state.rinking.currentIndex,
      topList: state.rinking.topList
    }),
    shallowEqual
  )
  function hanldeItemClick(index: number) {
    dispatch(changeCurrentIndexAction(index))
  }
  return (
    <TopRinkingWrapper>
      {topList.map((item, index) => {
        let header
        if (index === 0 || index === 4) {
          header = (
            <div className="header">
              {index === 0 ? '云音乐特色榜' : '全球媒体榜'}
            </div>
          )
        }
        return (
          <div key={item.id}>
            {header}
            <div
              className={classNames('item', { active: index === currentIndex })}
              onClick={(e) => hanldeItemClick(index)}
            >
              <img src={getImageSize(item.coverImgUrl, 40)} alt="" />
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="update">{item.updateFrequency}</div>
              </div>
            </div>
          </div>
        )
      })}
    </TopRinkingWrapper>
  )
}

export default memo(topAlbums)
