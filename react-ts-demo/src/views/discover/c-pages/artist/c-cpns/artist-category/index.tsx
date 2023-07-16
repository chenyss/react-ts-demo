import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ArtistCategoryWrapper, CategoryItem } from './style'
import { useAppDispatch, useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import { artistCategories } from '@/assets/data/local-data'
import classNames from 'classnames'
import {
  changeCurrentAreaAction,
  changeCurrentTypeAction
} from '../../store/artist'

interface IProps {
  children?: ReactNode
}

const ArtistCategory: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const { currentType, currentArea } = useAppSelector(
    (state) => ({
      currentType: state.artist.currentType,
      currentArea: state.artist.currentArea
    }),
    shallowEqual
  )
  function handleChangeArtist(area: number, item: any) {
    dispatch(changeCurrentTypeAction(item))
    dispatch(changeCurrentAreaAction(area))
  }
  const renderArtist = (artists: any, area: number) => {
    return (
      <div>
        {artists.map((item: any) => {
          const isSelect =
            currentArea === area && currentType.type === item.type
          return (
            <CategoryItem
              key={item.name}
              className={classNames({ active: isSelect })}
            >
              <span onClick={(e) => handleChangeArtist(area, item)}>
                {item.name}
              </span>
            </CategoryItem>
          )
        })}
      </div>
    )
  }
  return (
    <ArtistCategoryWrapper>
      {artistCategories.map((item, index) => {
        return (
          <div className="section" key={item.area}>
            <h2 className="title">{item.title}</h2>
            {renderArtist(item.artists, item.area)}
          </div>
        )
      })}
    </ArtistCategoryWrapper>
  )
}

export default memo(ArtistCategory)
