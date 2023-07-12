import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SongsCategoryWrapper } from './style'
import { useAppDispatch, useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import { changeCurrentCategoryAction } from '../../store/songs'
interface IProps {
  children?: ReactNode;
}

const SongsCategory: FC<IProps> = () => {
  const { category } = useAppSelector(
    (state) => ({
      category: state.songs.category
    }),
    shallowEqual
  )
  const dispatch = useAppDispatch()
  function selectCategory(name) {
    dispatch(changeCurrentCategoryAction(name))
  }
  return (
    <SongsCategoryWrapper>
      <div className="arrow sprite_icon"></div>
      <div className="all">
        <span className="link" onClick={(e) => selectCategory('全部')}>
          全部风格
        </span>
      </div>
      <div className="category">
        {category.map((item, index) => {
          return (
            <dl key={item.name} className={'item' + index}>
              <dt>
                <i className="icon sprite_icon2"></i>
                <span>{item.name}</span>
              </dt>
              <dd>
                {item.subs.map((sItem) => {
                  return (
                    <div className="item" key={sItem.name}>
                      <span
                        className="link"
                        onClick={(e) => selectCategory(sItem.name)}
                      >
                        {sItem.name}
                      </span>
                      <span className="divider">|</span>
                    </div>
                  )
                })}
              </dd>
            </dl>
          )
        })}
      </div>
    </SongsCategoryWrapper>
  )
}

export default memo(SongsCategory)
