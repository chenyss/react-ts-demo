import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { AlbumWrapper } from './style'
import SectionHeaderV1 from '@/components/section-header-v1'
import { useAppDispatch } from '@/store'
import { fetchHotAlbumsAction, fetchTopAlbumsAction } from './store/album'
import HotAlbums from './c-cpns/hotAlbums'
import TopAlbums from './c-cpns/topAlbums'

interface IProps {
  children?: ReactNode
}

const Album: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchTopAlbumsAction(0))
    dispatch(fetchHotAlbumsAction())
  }, [])
  return (
    <AlbumWrapper>
      <div className="album-content wrap-v2">
        <HotAlbums />

        <TopAlbums />
      </div>
    </AlbumWrapper>
  )
}

export default memo(Album)
