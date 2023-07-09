import React, { memo, useEffect, useRef } from 'react'
import type { ElementRef, FC, ReactNode } from 'react'
import {
  CategoryContent,
  CategoryItemImage,
  RadioCategoryWrapper
} from './style'
import { useAppDispatch, useAppSelector } from '@/store'
import {
  changeCurrentIdAction,
  fetchDjRadioCatelistAction
} from '../../store/djradio'
import { shallowEqual } from 'react-redux'
import { Carousel } from 'antd'
import classnames from 'classnames'

interface IProps {
  children?: ReactNode
}

const Djradio: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const { categories, currentId } = useAppSelector(
    (state) => ({
      categories: state.djradio.categories,
      currentId: state.djradio.currentId
    }),
    shallowEqual
  )
  const carouselRef = useRef<ElementRef<typeof Carousel>>(null)

  const PAGE_SIZE = 16
  const page = Math.ceil(categories.length / PAGE_SIZE) || 1
  function getSize(index: number) {
    return index * PAGE_SIZE < categories.length
      ? index * PAGE_SIZE
      : categories.length
  }
  function handldCategoryClick(id: number) {
    dispatch(changeCurrentIdAction(id))
  }
  return (
    <RadioCategoryWrapper>
      <div
        className="arrow arrow-left"
        onClick={(e) => carouselRef.current?.prev()}
      ></div>
      <CategoryContent>
        <Carousel ref={carouselRef} dots={{ className: 'dots' }}>
          {Array(page)
            .fill(0)
            .map((_, index) => {
              return (
                <div key={index} className="category-page">
                  {categories
                    .slice(index * PAGE_SIZE, getSize(index + 1))
                    .map((item) => {
                      return (
                        <div
                          key={item.id}
                          onClick={() => handldCategoryClick(item.id)}
                          className={classnames('category-item', {
                            active: currentId == item.id
                          })}
                        >
                          <CategoryItemImage
                            className="image"
                            imgUrl={item.picWebUrl}
                          ></CategoryItemImage>
                          <span>{item.name}</span>
                        </div>
                      )
                    })}
                </div>
              )
            })}
        </Carousel>
      </CategoryContent>
      <div
        className="arrow arrow-right"
        onClick={(e) => carouselRef.current?.next()}
      ></div>
    </RadioCategoryWrapper>
  )
}

export default memo(Djradio)
