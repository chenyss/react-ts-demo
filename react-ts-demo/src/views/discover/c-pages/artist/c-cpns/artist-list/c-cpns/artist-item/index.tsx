import React, { FC, ReactNode, memo } from 'react'

import { getImageSize } from '@/utils/handle-img-url'

import { ItemWrapper } from './style'

interface IProps {
  children?: ReactNode
  info: any
  index: number
}

const ArtistItem: FC<IProps> = (props) => {
  const { info, index } = props
  return (
    <ItemWrapper>
      {index < 10 && (
        <div className="image">
          <img src={getImageSize(info.img1v1Url, 130)} alt="" />
        </div>
      )}
      <div className="info">
        <span className="name">{info.name}</span>
        <i className="sprite_icon2 icon"></i>
      </div>
    </ItemWrapper>
  )
}

export default memo(ArtistItem)
