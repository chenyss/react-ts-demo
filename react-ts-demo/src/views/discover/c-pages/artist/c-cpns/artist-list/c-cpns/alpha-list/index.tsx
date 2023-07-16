import React, { FC, ReactNode, memo, useEffect } from 'react'
import classNames from 'classnames'

import { singerAlphas } from '@/utils/handle-data'
import { AlphaListWrapper } from './style'
import { useAppDispatch, useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import { changeInitialAction } from '../../../../store/artist'

interface IProps {
  children?: ReactNode
}

const ArtistItem: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const { currentType, currentArea, initial } = useAppSelector(
    (state) => ({
      currentType: state.artist.currentType,
      currentArea: state.artist.currentArea,
      initial: state.artist.initial
    }),
    shallowEqual
  )
  function handleChangeInitial(item: any) {
    if (item === '其他') item = '0'
    if (item === '热门') item = '-1'
    dispatch(changeInitialAction(item))
  }
  useEffect(() => {
    dispatch(changeInitialAction('-1'))
  }, [currentType, currentArea])

  return (
    <AlphaListWrapper hasTop={currentArea !== -1}>
      {currentArea !== -1 &&
        singerAlphas.map((item: any) => {
          const isActive = initial === item
          if (item === '0') item = '其他'
          if (item === '-1') item = '热门'
          return (
            <div
              key={item}
              className={classNames('item', { active: isActive })}
            >
              <span onClick={(e) => handleChangeInitial(item)}>
                {item.toUpperCase()}
              </span>
            </div>
          )
        })}
    </AlphaListWrapper>
  )
}

export default memo(ArtistItem)
