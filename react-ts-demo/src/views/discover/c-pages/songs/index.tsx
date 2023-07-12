import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { SongsWrapper } from './style'
import { useAppDispatch } from '@/store'
import { fetchSongsCatelistAction } from './store/songs'

import SongsList from './c-cpns/songs-list'
import SongsHeader from './c-cpns/songs-header'

interface IProps {
  children?: ReactNode
}

const Songs: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchSongsCatelistAction())
  }, [])

  return (
    <SongsWrapper className="wrap-v2">
      <SongsHeader></SongsHeader>
      <SongsList></SongsList>
    </SongsWrapper>
  )
}

export default memo(Songs)
