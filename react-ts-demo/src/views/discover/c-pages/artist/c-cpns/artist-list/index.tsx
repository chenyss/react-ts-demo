import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { ArtistListWrapper } from './style'
import SectionHeaderV1 from '@/components/section-header-v1'
import AlphaList from './c-cpns/alpha-list'
import AlphaItem from './c-cpns/artist-item'
import { useAppDispatch, useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import { fetchArtistListAction } from '../../store/artist'
interface IProps {
  children?: ReactNode
}

const ArtistList: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const { artistList, currentArea, initial, currentType } = useAppSelector(
    (state) => ({
      artistList: state.artist.artistList,
      currentArea: state.artist.currentArea,
      initial: state.artist.initial,
      currentType: state.artist.currentType
    }),
    shallowEqual
  )
  useEffect(() => {
    dispatch(
      fetchArtistListAction({
        area: currentArea,
        type: currentType.type,
        initial
      })
    )
  }, [initial, currentType, currentArea])

  return (
    <ArtistListWrapper>
      <SectionHeaderV1 title="热门新碟" />
      <AlphaList />
      <div className="artist-list">
        {artistList.map((item, index) => {
          return <AlphaItem key={item.id} index={index} info={item} />
        })}
      </div>
    </ArtistListWrapper>
  )
}

export default memo(ArtistList)
