import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ItemWrapper } from './style'
import { getImageSize } from '@/utils/handle-img-url'
import { Tooltip } from 'antd'

interface IProps {
  children?: ReactNode
  itemData: any
}

const AlbumItemV1: FC<IProps> = (props) => {
  const { itemData } = props

  return (
    <ItemWrapper>
      <Tooltip title={itemData.name}>
        <div className="album-image">
          <img src={getImageSize(itemData.picUrl, 120)} alt="" />
          <a className="cover sprite_cover">{itemData.name}</a>
          <div className="btm sprite_icon play"></div>
        </div>
      </Tooltip>

      <div className="album-info">
        <div className="name">{itemData.name}</div>
        <div className="artist">{itemData.artist.name}</div>
      </div>
    </ItemWrapper>
  )
}

export default memo(AlbumItemV1)
