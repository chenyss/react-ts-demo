import React, { memo, useRef, useCallback, useState } from 'react'
import type { FC, ReactNode, ElementRef, LegacyRef } from 'react'
import { useAppSelector } from '@/store'
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style'
import { Carousel } from 'antd'
import { shallowEqual } from 'react-redux'
import classNames from 'classnames'

interface IProps {
  children?: ReactNode
}

const TopBanner: FC<IProps> = () => {
  /** 定义组件内部的数据 */
  const [currentIndex, setCurrentIndex] = useState(0)
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  const divRef = useRef<any>()

  /** redux中获取数据 */
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqual
  )

  /** 事件监听的方法 */
  const bannerChange = useCallback((from: number, to: number) => {
    setTimeout(() => {
      setCurrentIndex(to)
    }, 0)
  }, [])

  const bgImage =
    banners[currentIndex] &&
    banners[currentIndex].imageUrl + '?imageView&blur=40x20'

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2" ref={divRef}>
        <BannerLeft>
          <Carousel
            dots={false}
            autoplay
            effect="fade"
            ref={bannerRef}
            beforeChange={bannerChange}
          >
            {banners.map((item: any) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              )
            })}
          </Carousel>
          <ul className="dots">
            {banners.map((item, index) => {
              return (
                <li key={item.imageUrl}>
                  <span
                    className={classNames('item', {
                      active: currentIndex === index
                    })}
                  ></span>
                </li>
              )
            })}
          </ul>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button
            className="btn left"
            onClick={() => bannerRef.current?.prev()}
          ></button>
          <button
            className="btn right"
            onClick={() => bannerRef.current?.next()}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default memo(TopBanner)
