import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { SongsHeaderWrapper } from './style'
import { shallowEqual } from 'react-redux'
import { useAppSelector } from '@/store'
import SongsCategory from '../songs-category'
interface IProps {
  children?: ReactNode;
}

const SongsHeader: FC<IProps> = () => {
  const [showCategory, setShowCategory] = useState(false)
  const { currentCategory } = useAppSelector(
    (state) => ({
      currentCategory: state.songs.currentCategory
    }),
    shallowEqual
  )
  return (
    <SongsHeaderWrapper>
      <div className="left-content">
        <span className="title">{currentCategory}</span>
        <div
          className="left-btn"
          onClick={() => {
            setShowCategory(!showCategory)
          }}
        >
          <span>选择分类</span>
          <i className="sprite_icon2"></i>
        </div>
        {showCategory && <SongsCategory></SongsCategory>}
      </div>

      <div className="right-btn">
        <span>热门</span>
      </div>
    </SongsHeaderWrapper>
  )
}

export default memo(SongsHeader)
