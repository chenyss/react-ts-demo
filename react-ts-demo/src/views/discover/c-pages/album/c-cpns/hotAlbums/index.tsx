import AlbumItemV1 from '@/components/album-item-v1'
import { useAppSelector } from '@/store'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { shallowEqual } from 'react-redux'
import { HotAlbumWrapper } from './style'
import SectionHeaderV1 from '@/components/section-header-v1'

interface IProps {
  children?: ReactNode
}

const hotAlbums: FC<IProps> = () => {
  const { hotAlbums } = useAppSelector(
    (state) => ({
      hotAlbums: state.album.hotAlbums
    }),
    shallowEqual
  )

  return (
    <HotAlbumWrapper>
      <SectionHeaderV1 title="热门新碟" />
      <div className="albumList">
        {hotAlbums.slice(0, 10).map((item) => {
          return (
            <div key={item.id} className="albumItem">
              <AlbumItemV1 itemData={item} />
            </div>
          )
        })}
      </div>
    </HotAlbumWrapper>
  )
}

export default memo(hotAlbums)
