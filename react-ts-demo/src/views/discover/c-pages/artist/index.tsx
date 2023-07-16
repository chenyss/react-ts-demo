import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ArtistWrapper } from './style'
import ArtistCategory from './c-cpns/artist-category'
import ArtistList from './c-cpns/artist-list'

interface IProps {
  children?: ReactNode
}

const Artist: FC<IProps> = () => {
  return (
    <ArtistWrapper className="wrap-v2">
      <ArtistCategory></ArtistCategory>
      <ArtistList></ArtistList>
    </ArtistWrapper>
  )
}

export default memo(Artist)
